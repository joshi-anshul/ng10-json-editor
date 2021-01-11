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
import * as i0 from "@angular/core";
export class AddAlwaysShowFieldsPipe {
    transform(fields, schema) {
        const alwaysShowFields = schema.alwaysShow || [];
        return fields.union(alwaysShowFields);
    }
}
AddAlwaysShowFieldsPipe.ɵfac = function AddAlwaysShowFieldsPipe_Factory(t) { return new (t || AddAlwaysShowFieldsPipe)(); };
AddAlwaysShowFieldsPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "addAlwaysShowFields", type: AddAlwaysShowFieldsPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddAlwaysShowFieldsPipe, [{
        type: Pipe,
        args: [{
                name: 'addAlwaysShowFields'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWFsd2F5cy1zaG93LWZpZWxkcy5waXBlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9waXBlcy9hZGQtYWx3YXlzLXNob3ctZmllbGRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBUXBELE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsU0FBUyxDQUFDLE1BQW1CLEVBQUUsTUFBa0I7UUFDL0MsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUNqRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs4RkFMVSx1QkFBdUI7cUZBQXZCLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBSG5DLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUscUJBQXFCO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7IEpTT05TY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYWRkQWx3YXlzU2hvd0ZpZWxkcydcbn0pXG5leHBvcnQgY2xhc3MgQWRkQWx3YXlzU2hvd0ZpZWxkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZmllbGRzOiBTZXQ8c3RyaW5nPiwgc2NoZW1hOiBKU09OU2NoZW1hKTogU2V0PHN0cmluZz4ge1xuICAgIGNvbnN0IGFsd2F5c1Nob3dGaWVsZHMgPSBzY2hlbWEuYWx3YXlzU2hvdyB8fCBbXTtcbiAgICByZXR1cm4gZmllbGRzLnVuaW9uKGFsd2F5c1Nob3dGaWVsZHMpO1xuICB9XG59XG4iXX0=