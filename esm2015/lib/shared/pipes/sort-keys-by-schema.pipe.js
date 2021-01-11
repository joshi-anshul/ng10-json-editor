/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2018 CERN.
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
import * as i1 from "../services";
export class SortKeysBySchemaPipe {
    constructor(compareKeysBySchemaService) {
        this.compareKeysBySchemaService = compareKeysBySchemaService;
    }
    /**
     * WARN: uses Array.sort hence mutates the first param
     *
     * @param keys keys in the object
     * @param schema schema of the parent object
     */
    transform(keys, schema) {
        return keys
            .sort((a, b) => this.compareKeysBySchemaService.compare(a, b, schema));
    }
}
SortKeysBySchemaPipe.ɵfac = function SortKeysBySchemaPipe_Factory(t) { return new (t || SortKeysBySchemaPipe)(i0.ɵɵdirectiveInject(i1.CompareKeysBySchemaService)); };
SortKeysBySchemaPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "sortKeysBySchema", type: SortKeysBySchemaPipe, pure: false });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortKeysBySchemaPipe, [{
        type: Pipe,
        args: [{
                name: 'sortKeysBySchema',
                pure: false,
            }]
    }], function () { return [{ type: i1.CompareKeysBySchemaService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1rZXlzLWJ5LXNjaGVtYS5waXBlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9waXBlcy9zb3J0LWtleXMtYnktc2NoZW1hLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQVNwRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQW9CLDBCQUFzRDtRQUF0RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBQUksQ0FBQztJQUUvRTs7Ozs7T0FLRztJQUNILFNBQVMsQ0FBQyxJQUFtQixFQUFFLE1BQWtCO1FBQy9DLE9BQU8sSUFBSTthQUNSLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O3dGQWJVLG9CQUFvQjsrRUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FKaEMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLElBQUksRUFBRSxLQUFLO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE4IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDb21wYXJlS2V5c0J5U2NoZW1hU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc29ydEtleXNCeVNjaGVtYScsXG4gIHB1cmU6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0S2V5c0J5U2NoZW1hUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGFyZUtleXNCeVNjaGVtYVNlcnZpY2U6IENvbXBhcmVLZXlzQnlTY2hlbWFTZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogV0FSTjogdXNlcyBBcnJheS5zb3J0IGhlbmNlIG11dGF0ZXMgdGhlIGZpcnN0IHBhcmFtXG4gICAqXG4gICAqIEBwYXJhbSBrZXlzIGtleXMgaW4gdGhlIG9iamVjdFxuICAgKiBAcGFyYW0gc2NoZW1hIHNjaGVtYSBvZiB0aGUgcGFyZW50IG9iamVjdFxuICAgKi9cbiAgdHJhbnNmb3JtKGtleXM6IEFycmF5PHN0cmluZz4sIHNjaGVtYTogSlNPTlNjaGVtYSk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBrZXlzXG4gICAgICAuc29ydCgoYSwgYikgPT4gdGhpcy5jb21wYXJlS2V5c0J5U2NoZW1hU2VydmljZS5jb21wYXJlKGEsIGIsIHNjaGVtYSkpO1xuICB9XG59XG4iXX0=