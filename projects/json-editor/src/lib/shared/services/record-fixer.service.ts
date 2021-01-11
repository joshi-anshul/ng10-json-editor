/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

import { Injectable } from '@angular/core';

import { EmptyValueService } from './empty-value.service';
import { ComponentTypeService } from './component-type.service';
import { JSONSchema } from '../interfaces';

@Injectable()
export class RecordFixerService {

  constructor(private emptyValueService: EmptyValueService,
    private componentTypeService: ComponentTypeService) { }

  /**
   * Fixes given record according to given schema, in other words
   * changes it to match the format expected the by te json-editor
   *
   * @param rawRecord - json record to be fixed
   * @param schema - extended schema of rawRecord
   * @return - fixed record
   */
  fixRecord(rawRecord: object, schema: JSONSchema): object {
    const record = Object.assign({}, rawRecord);
    Object.keys(record).forEach(field => {
      if (!schema.properties[field]) {
        // Delete if field is not in schema!
        this.deleteField(record, field);
      } else {
        // Fix the field and all children.
        this.fix(field, record, schema.properties[field]);
      }
    });
    return record;
  }

  /**
   * Visits all parts of record recursivly, along with the subschema of the part
   * and apply required fixes.
   *
   * NOTE: the reason that parent and key are passed instead of the direct value
   * is to be able do some operations that needs the parent such as `delete`.
   *
   * TODO: add special case for arrays because fixes are the same for
   * all elements.
   *
   * @param key - field name or element index
   * @param parent - parent of the field/element
   * @param schema - schema of visited field/element
   */
  private fix(key: string | number, parent: object | Array<any>, schema: JSONSchema) {
    if (schema.hidden) {
      return;
    }

    // Fixes for each type/condition, can be added below.
    const value = parent[key];

    // Recursive calls
    if (schema.type === 'object') {
      if (!schema.properties) {
        throw new Error(`"${key}"'s schema has "type": "object" but doesn't specify "properties"`);
      } else if (!(value instanceof Object)) {
        throw new Error(`"${key}" in ${JSON.stringify(value, null, 2)} is specified as "object" by schema but it is not an object in json`);
      }
      // Looping over record to filter out fields that are not in schema.
      Object.keys(value).forEach(prop => {
        if (!schema.properties[prop]) {
          // we don't like fields without schema!
          this.deleteField(value, prop);
        } else {
          this.fix(prop, value, schema.properties[prop]);
        }
      });
    } else if (schema.type === 'array') {
      if (!schema.items) {
        throw new Error(`"${key}"'s schema has "type": "array" but doesn't specify "items"`);
      } else if (!Array.isArray(value)) {
        throw new Error(`"${key}" in ${JSON.stringify(value, null, 2)} is specified as "array" by schema but it is not an array in json`);
      }
      value.forEach((element, index) => {
        this.fix(index, value, schema.items);
      });
    }
  }

  /**
   * Deletes given field from the given object.
   * Used for deleting fields that aren't on the schema.
   *
   * TODO: replace this with only `delete` when logging is not necessary!
   */
  private deleteField(object: object, field: string) {
    delete object[field];
    console.warn(`"${field}" is removed from input json since it's not in the schema`);
  }
}
