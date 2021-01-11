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

import { Map, Set, fromJS } from 'immutable';

import { TabsUtilService } from './tabs-util.service';
import { PathUtilService } from './path-util.service';

describe('TabsUtilService', () => {

  let service: TabsUtilService;

  beforeEach(() => {
    service = new TabsUtilService(new PathUtilService());
  });

  it('should return key to tabName', () => {
    const config = {
      defaultTabName: 'Default',
      tabs: [
        {
          name: 'Tab1',
          properties: [
            'key1Tab1',
            'key2Tab1'
          ]
        },
        {
          name: 'Tab2',
          properties: [
            'key1Tab2'
          ]
        }
      ]
    };
    const schema = {
      type: 'object',
      properties: {
        key1Default: {
          type: 'string'
        },
        key2Default: {
          type: 'string'
        },
        key1Tab1: {
          type: 'string'
        },
        key2Tab1: {
          type: 'string'
        },
        key1Tab2: {
          type: 'string'
        }
      }
    };
    const expected = {
      key1Tab1: 'Tab1',
      key2Tab1: 'Tab1',
      key1Tab2: 'Tab2',
      key1Default: 'Default',
      key2Default: 'Default'
    };
    const result = service.getSchemaKeyToTabName(config, schema);
    expect(result).toEqual(expected);
  });
});
