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
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CompareKeysBySchemaService {
    /**
     * @param key1 the first key
     * @param key2 the second key
     * @param schema schema of the parent object
     */
    compare(key1, key2, schema) {
        // Sort by priority, larger is the first.
        const priorty1 = schema.properties[key1].priority || 0;
        const priority2 = schema.properties[key2].priority || 0;
        if (priorty1 > priority2) {
            return -1;
        }
        if (priorty1 < priority2) {
            return 1;
        }
        // Sort alphabetically.
        if (key1 < key2) {
            return -1;
        }
        if (key1 > key2) {
            return 1;
        }
        return 0;
    }
}
CompareKeysBySchemaService.ɵfac = function CompareKeysBySchemaService_Factory(t) { return new (t || CompareKeysBySchemaService)(); };
CompareKeysBySchemaService.ɵprov = i0.ɵɵdefineInjectable({ token: CompareKeysBySchemaService, factory: CompareKeysBySchemaService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CompareKeysBySchemaService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1rZXlzLWJ5LXNjaGVtYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9zZXJ2aWNlcy9jb21wYXJlLWtleXMtYnktc2NoZW1hLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLDBCQUEwQjtJQUVyQzs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsTUFBa0I7UUFDcEQseUNBQXlDO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUN2RCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFFeEQsSUFBSSxRQUFRLEdBQUcsU0FBUyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3hDLElBQUksUUFBUSxHQUFHLFNBQVMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFFdkMsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzlCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7b0dBbkJVLDBCQUEwQjtrRUFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE4IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wYXJlS2V5c0J5U2NoZW1hU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBrZXkxIHRoZSBmaXJzdCBrZXlcbiAgICogQHBhcmFtIGtleTIgdGhlIHNlY29uZCBrZXlcbiAgICogQHBhcmFtIHNjaGVtYSBzY2hlbWEgb2YgdGhlIHBhcmVudCBvYmplY3RcbiAgICovXG4gIGNvbXBhcmUoa2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcsIHNjaGVtYTogSlNPTlNjaGVtYSk6IG51bWJlciB7XG4gICAgLy8gU29ydCBieSBwcmlvcml0eSwgbGFyZ2VyIGlzIHRoZSBmaXJzdC5cbiAgICBjb25zdCBwcmlvcnR5MSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2tleTFdLnByaW9yaXR5IHx8IDA7XG4gICAgY29uc3QgcHJpb3JpdHkyID0gc2NoZW1hLnByb3BlcnRpZXNba2V5Ml0ucHJpb3JpdHkgfHwgMDtcblxuICAgIGlmIChwcmlvcnR5MSA+IHByaW9yaXR5MikgeyByZXR1cm4gLTE7IH1cbiAgICBpZiAocHJpb3J0eTEgPCBwcmlvcml0eTIpIHsgcmV0dXJuIDE7IH1cblxuICAgIC8vIFNvcnQgYWxwaGFiZXRpY2FsbHkuXG4gICAgaWYgKGtleTEgPCBrZXkyKSB7IHJldHVybiAtMTsgfVxuICAgIGlmIChrZXkxID4ga2V5MikgeyByZXR1cm4gMTsgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=