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
export class JsonUtilService {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    /**
     * Returns value of the property located in dot separated path of json.
     */
    getValueInPath(json, path) {
        const pathElements = this.pathUtilService.toPathArray(path);
        let value = json;
        pathElements.forEach(pathElement => {
            value = value[pathElement];
            if (!value) {
                throw new Error(`"${pathElement}" of given path not defined in given json`);
            }
        });
        return value;
    }
}
JsonUtilService.ɵfac = function JsonUtilService_Factory(t) { return new (t || JsonUtilService)(i0.ɵɵinject(i1.PathUtilService)); };
JsonUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonUtilService, factory: JsonUtilService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonUtilService, [{
        type: Injectable
    }], function () { return [{ type: i1.PathUtilService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL2pzb24tdXRpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRXpEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLElBQVMsRUFBRSxJQUFZO1FBQ3BDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2pDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksV0FBVywyQ0FBMkMsQ0FBQyxDQUFDO2FBQzdFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OzhFQWpCVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhdGhVdGlsU2VydmljZSB9IGZyb20gJy4vcGF0aC11dGlsLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvblV0aWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogUmV0dXJucyB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgbG9jYXRlZCBpbiBkb3Qgc2VwYXJhdGVkIHBhdGggb2YganNvbi5cbiAgICovXG4gIGdldFZhbHVlSW5QYXRoKGpzb246IGFueSwgcGF0aDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBwYXRoRWxlbWVudHMgPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhBcnJheShwYXRoKTtcbiAgICBsZXQgdmFsdWUgPSBqc29uO1xuICAgIHBhdGhFbGVtZW50cy5mb3JFYWNoKHBhdGhFbGVtZW50ID0+IHtcbiAgICAgIHZhbHVlID0gdmFsdWVbcGF0aEVsZW1lbnRdO1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtwYXRoRWxlbWVudH1cIiBvZiBnaXZlbiBwYXRoIG5vdCBkZWZpbmVkIGluIGdpdmVuIGpzb25gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==