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
import * as i1 from "../services";
export class SelfOrEmptyPipe {
    constructor(emptyValueService) {
        this.emptyValueService = emptyValueService;
    }
    /**
     * Transforms a value to empty value if it is undefined,
     * returns self if it is already defined
     *
     * @return - empty value if given value is undefined or value itself.
     */
    transform(value, schema) {
        return value ? value : this.emptyValueService.generateEmptyValue(schema);
    }
}
SelfOrEmptyPipe.ɵfac = function SelfOrEmptyPipe_Factory(t) { return new (t || SelfOrEmptyPipe)(i0.ɵɵdirectiveInject(i1.EmptyValueService)); };
SelfOrEmptyPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "selfOrEmpty", type: SelfOrEmptyPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelfOrEmptyPipe, [{
        type: Pipe,
        args: [{
                name: 'selfOrEmpty',
            }]
    }], function () { return [{ type: i1.EmptyValueService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1vci1lbXB0eS5waXBlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9waXBlcy9zZWxmLW9yLWVtcHR5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQVVwRCxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUFtQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFFM0Q7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQWtCO1FBQ3RDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs4RUFaVSxlQUFlO3FFQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUozQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7IEVtcHR5VmFsdWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzZWxmT3JFbXB0eScsXG59KVxuXG5leHBvcnQgY2xhc3MgU2VsZk9yRW1wdHlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVtcHR5VmFsdWVTZXJ2aWNlOiBFbXB0eVZhbHVlU2VydmljZSkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBhIHZhbHVlIHRvIGVtcHR5IHZhbHVlIGlmIGl0IGlzIHVuZGVmaW5lZCxcbiAgICogcmV0dXJucyBzZWxmIGlmIGl0IGlzIGFscmVhZHkgZGVmaW5lZFxuICAgKlxuICAgKiBAcmV0dXJuIC0gZW1wdHkgdmFsdWUgaWYgZ2l2ZW4gdmFsdWUgaXMgdW5kZWZpbmVkIG9yIHZhbHVlIGl0c2VsZi5cbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBzY2hlbWE6IEpTT05TY2hlbWEpOiBhbnkge1xuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogdGhpcy5lbXB0eVZhbHVlU2VydmljZS5nZW5lcmF0ZUVtcHR5VmFsdWUoc2NoZW1hKTtcbiAgfVxufVxuIl19