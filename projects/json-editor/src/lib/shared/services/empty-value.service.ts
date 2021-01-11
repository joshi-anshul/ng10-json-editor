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
import { fromJS } from 'immutable';

import { JSONSchema } from '../interfaces';

@Injectable()
export class EmptyValueService {

  private static defaultValueLookup = {
    'string': '',
    'boolean': false
  };

  generateEmptyValue(schema: JSONSchema): any {
    const emptyValue = this.generateEmptyValueRecursively(schema);
    if (typeof emptyValue === 'object') {
      return fromJS(emptyValue);
    } else {
      return emptyValue;
    }
  }

  private generateEmptyValueRecursively(schema: JSONSchema): any {
    if (schema.default) {
      return schema.default;
    }

    if (schema.type === 'object') {
      const emptyObject = {};
      Object.keys(schema.properties)
        .filter(prop => {
          const required = schema.required || [];
          const alwaysShow = schema.alwaysShow || [];
          return required.indexOf(prop) > -1 || alwaysShow.indexOf(prop) > -1;
        }).forEach(prop => {
          const propSchema = schema.properties[prop];
          emptyObject[prop] = this.generateEmptyValueRecursively(propSchema);
        });
      return emptyObject;
    }

    if (schema.type === 'array') {
      const emptyArray = [];
      const arrayElementSchema = schema.items;
      if (schema.componentType !== 'complex-list') {
        emptyArray.push(this.generateEmptyValueRecursively(arrayElementSchema));
      }
      return emptyArray;
    }

    return EmptyValueService.defaultValueLookup[schema.type];
  }

}
