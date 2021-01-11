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
import { Pipe } from '@angular/core';
import { Set } from 'immutable';
import * as i0 from "@angular/core";
/**
 * It returns array of keys which aren't present in given object
 */
export class DifferentKeysPipe {
    transform(object, keys) {
        return Set.fromKeys(object).subtract(keys);
    }
}
DifferentKeysPipe.ɵfac = function DifferentKeysPipe_Factory(t) { return new (t || DifferentKeysPipe)(); };
DifferentKeysPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "differentKeys", type: DifferentKeysPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DifferentKeysPipe, [{
        type: Pipe,
        args: [{
                name: 'differentKeys'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW50LWtleXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcGlwZXMvZGlmZmVyZW50LWtleXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUVoQzs7R0FFRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFpQjtRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2tGQUhVLGlCQUFpQjt5RUFBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FIN0IsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxlQUFlO2FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbi8qKlxuICogSXQgcmV0dXJucyBhcnJheSBvZiBrZXlzIHdoaWNoIGFyZW4ndCBwcmVzZW50IGluIGdpdmVuIG9iamVjdFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdkaWZmZXJlbnRLZXlzJ1xufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbnRLZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob2JqZWN0OiBvYmplY3QsIGtleXM6IFNldDxzdHJpbmc+KTogU2V0PHN0cmluZz4ge1xuICAgIHJldHVybiBTZXQuZnJvbUtleXMob2JqZWN0KS5zdWJ0cmFjdChrZXlzKTtcbiAgfVxufVxuIl19