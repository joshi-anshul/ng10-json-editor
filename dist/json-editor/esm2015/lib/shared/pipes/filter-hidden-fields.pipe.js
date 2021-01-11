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
export class FilterHiddenFieldsPipe {
    /**
     * It filters out `hidden` fields
     *
     * @param keys
     * @param schema - the `schema` that has object schema which contains each key in `keys`
     * @return - filtered keys
     */
    transform(keys, schema, adminMode) {
        const schemaProps = schema.properties;
        if (!keys) {
            return undefined;
        }
        return keys
            .filter(key => {
            if (!schemaProps[key]) {
                throw new Error(`"${key}" is not specified as property in \n${JSON.stringify(schemaProps, undefined, 2)}`);
            }
            return !schemaProps[key].hidden || adminMode;
        });
    }
}
FilterHiddenFieldsPipe.ɵfac = function FilterHiddenFieldsPipe_Factory(t) { return new (t || FilterHiddenFieldsPipe)(); };
FilterHiddenFieldsPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filterHiddenFields", type: FilterHiddenFieldsPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterHiddenFieldsPipe, [{
        type: Pipe,
        args: [{
                name: 'filterHiddenFields',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWhpZGRlbi1maWVsZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcGlwZXMvZmlsdGVyLWhpZGRlbi1maWVsZHMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFRcEQsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQzs7Ozs7O09BTUc7SUFDSCxTQUFTLENBQUMsSUFBaUIsRUFBRSxNQUFrQixFQUFFLFNBQWtCO1FBQ2pFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sU0FBUyxDQUFDO1NBQUU7UUFDaEMsT0FBTyxJQUFJO2FBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsdUNBQXVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUc7WUFDRCxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7UUFDL0MsQ0FBQyxDQUFnQixDQUFDO0lBQ3RCLENBQUM7OzRGQW5CVSxzQkFBc0I7bUZBQXRCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSGxDLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsb0JBQW9CO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7IEpTT05TY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVySGlkZGVuRmllbGRzJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVySGlkZGVuRmllbGRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIC8qKlxuICAgKiBJdCBmaWx0ZXJzIG91dCBgaGlkZGVuYCBmaWVsZHNcbiAgICpcbiAgICogQHBhcmFtIGtleXNcbiAgICogQHBhcmFtIHNjaGVtYSAtIHRoZSBgc2NoZW1hYCB0aGF0IGhhcyBvYmplY3Qgc2NoZW1hIHdoaWNoIGNvbnRhaW5zIGVhY2gga2V5IGluIGBrZXlzYFxuICAgKiBAcmV0dXJuIC0gZmlsdGVyZWQga2V5c1xuICAgKi9cbiAgdHJhbnNmb3JtKGtleXM6IFNldDxzdHJpbmc+LCBzY2hlbWE6IEpTT05TY2hlbWEsIGFkbWluTW9kZTogYm9vbGVhbik6IFNldDxzdHJpbmc+IHtcbiAgICBjb25zdCBzY2hlbWFQcm9wcyA9IHNjaGVtYS5wcm9wZXJ0aWVzO1xuICAgIGlmICgha2V5cykgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gICAgcmV0dXJuIGtleXNcbiAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgaWYgKCFzY2hlbWFQcm9wc1trZXldKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7a2V5fVwiIGlzIG5vdCBzcGVjaWZpZWQgYXMgcHJvcGVydHkgaW4gXFxuJHtKU09OLnN0cmluZ2lmeShzY2hlbWFQcm9wcywgdW5kZWZpbmVkLCAyKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIXNjaGVtYVByb3BzW2tleV0uaGlkZGVuIHx8IGFkbWluTW9kZTtcbiAgICAgIH0pIGFzIFNldDxzdHJpbmc+O1xuICB9XG59XG4iXX0=