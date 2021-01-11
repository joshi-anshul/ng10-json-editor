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

import { Map } from 'immutable';

import { EmptyValueService } from './empty-value.service';

describe('EmptyValueService', () => {
  let service: EmptyValueService;

  beforeEach(() => {
    service = new EmptyValueService();
  });

  it('should respect required for object type', () => {
    const schema = {
      type: 'object',
      properties: {
        prop1: {
          type: 'string'
        }
      },
      required: [
        'prop1'
      ]
    };
    const empty: Map<string, any> = service.generateEmptyValue(schema);
    expect(empty.get('prop1')).toBeDefined();
  });

  it('should respect alwaysShow for object type', () => {
    const schema = {
      type: 'object',
      properties: {
        prop1: {
          type: 'string'
        }
      },
      alwaysShow: [
        'prop1'
      ]
    };
    const empty: Map<string, any> = service.generateEmptyValue(schema);
    expect(empty.get('prop1')).toBeDefined();
  });

  it('should return default if it set.', () => {
    const schema = {
      type: 'object',
      default: {
        prop1: 'default'
      },
      properties: {
        prop1: {
          type: 'string'
        }
      }
    };
    const empty: Map<string, any> = service.generateEmptyValue(schema);
    expect(empty.get('prop1')).toEqual('default');
  });

});
