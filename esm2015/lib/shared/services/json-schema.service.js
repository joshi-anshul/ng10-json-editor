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
import * as i0 from "@angular/core";
import * as i1 from "./path-util.service";
export class JsonSchemaService {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    setSchema(schema) {
        this.schema = schema;
    }
    /**
     * Returns the schema extracted from this path
     */
    forPathArray(path) {
        return path
            .reduce((schema, pathEl) => {
            if (isNaN(pathEl) && pathEl !== '-') {
                return schema.properties[pathEl];
            }
            else {
                return schema.items;
            }
        }, this.schema);
    }
    /**
     * Returns the schema extracted from the json-pointer string
     */
    forPathString(path) {
        const pathArray = this.pathUtilService.toPathArray(path);
        return this.forPathArray(pathArray);
    }
}
JsonSchemaService.ɵfac = function JsonSchemaService_Factory(t) { return new (t || JsonSchemaService)(i0.ɵɵinject(i1.PathUtilService)); };
JsonSchemaService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonSchemaService, factory: JsonSchemaService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonSchemaService, [{
        type: Injectable
    }], function () { return [{ type: i1.PathUtilService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zY2hlbWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvanNvbi1zY2hlbWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRXpELFNBQVMsQ0FBQyxNQUFrQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsSUFBZ0I7UUFDM0IsT0FBTyxJQUFJO2FBQ1IsTUFBTSxDQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ25DLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxJQUFZO1FBQ3hCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDOztrRkE5QlUsaUJBQWlCO3lEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBQYXRoVXRpbFNlcnZpY2UgfSBmcm9tICcuL3BhdGgtdXRpbC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25TY2hlbWFTZXJ2aWNlIHtcblxuICBwcml2YXRlIHNjaGVtYTogSlNPTlNjaGVtYTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlKSB7IH1cblxuICBzZXRTY2hlbWEoc2NoZW1hOiBKU09OU2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2NoZW1hIGV4dHJhY3RlZCBmcm9tIHRoaXMgcGF0aFxuICAgKi9cbiAgZm9yUGF0aEFycmF5KHBhdGg6IEFycmF5PGFueT4pOiBKU09OU2NoZW1hIHtcbiAgICByZXR1cm4gcGF0aFxuICAgICAgLnJlZHVjZTxKU09OU2NoZW1hPigoc2NoZW1hLCBwYXRoRWwpID0+IHtcbiAgICAgICAgaWYgKGlzTmFOKHBhdGhFbCkgJiYgcGF0aEVsICE9PSAnLScpIHtcbiAgICAgICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXNbcGF0aEVsXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2NoZW1hLml0ZW1zO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLnNjaGVtYSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2NoZW1hIGV4dHJhY3RlZCBmcm9tIHRoZSBqc29uLXBvaW50ZXIgc3RyaW5nXG4gICAqL1xuICBmb3JQYXRoU3RyaW5nKHBhdGg6IHN0cmluZyk6IEpTT05TY2hlbWEge1xuICAgIGNvbnN0IHBhdGhBcnJheSA9IHRoaXMucGF0aFV0aWxTZXJ2aWNlLnRvUGF0aEFycmF5KHBhdGgpO1xuICAgIHJldHVybiB0aGlzLmZvclBhdGhBcnJheShwYXRoQXJyYXkpO1xuICB9XG5cbn1cbiJdfQ==