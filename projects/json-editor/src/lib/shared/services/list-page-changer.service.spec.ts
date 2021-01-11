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

import { fromJS, Map, OrderedSet } from 'immutable';

import { PathUtilService } from './path-util.service';
import { ListPageChangerService } from './list-page-changer.service';

import { JSONSchema } from '../interfaces';


describe('ListPageChangerService', () => {
  let service: ListPageChangerService;

  beforeEach(() => {
    // TODO: (optionally) PathUtilService could be mocked
    service = new ListPageChangerService(new PathUtilService());
  });

  it('should change page', () => {
    const listPath = '/list';
    const itemPath = '/list/3';
    const itemsPerPage = 3;
    const expectedPage = 2;
    service.registerPaginatedList(listPath, itemsPerPage)
    .subscribe(page => {
      expect(page).toEqual(expectedPage);
    });
    service.changePage(itemPath);
  });

  it('should change page for nested field', () => {
    const listPath = '/list';
    const nestedFieldPath = '/list/3/item/5/field/sub';
    const itemsPerPage = 3;
    const expectedPage = 2;
    service.registerPaginatedList(listPath, itemsPerPage)
    .subscribe(page => {
      expect(page).toEqual(expectedPage);
    });
    service.changePage(nestedFieldPath);
  });

  it('should not change page if path is not to an index', () => {
    const listPath = '/list';
    const itemPath = '/list/-';
    const itemsPerPage = 3;
    const expectedPage = 2;
    service.registerPaginatedList(listPath, itemsPerPage)
    .subscribe(page => {
      expect(page).toEqual(expectedPage);
    });
    service.changePage(itemPath);
  });
});
