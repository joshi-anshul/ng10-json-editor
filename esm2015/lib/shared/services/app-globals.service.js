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
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as i0 from "@angular/core";
export class AppGlobalsService {
    constructor() {
        this.adminMode$ = new ReplaySubject(1);
        this.activeTabName = '';
        this.tabNameToFirstTopLevelElement = {};
        this.templates = {};
        this._adminMode = false;
    }
    set adminMode(adminMode) {
        this._adminMode = adminMode;
        this.adminMode$.next(this._adminMode);
    }
    get adminMode() {
        return this._adminMode;
    }
    get firstElementPathForCurrentTab() {
        return this.tabNameToFirstTopLevelElement[this.activeTabName];
    }
}
AppGlobalsService.ɵfac = function AppGlobalsService_Factory(t) { return new (t || AppGlobalsService)(); };
AppGlobalsService.ɵprov = i0.ɵɵdefineInjectable({ token: AppGlobalsService, factory: AppGlobalsService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppGlobalsService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWdsb2JhbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvYXBwLWdsb2JhbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUdXLGVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUNwRCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQ0FBNkIsR0FBa0MsRUFBRSxDQUFDO1FBQ2xFLGNBQVMsR0FHTCxFQUFFLENBQUM7UUFFQyxlQUFVLEdBQUcsS0FBSyxDQUFDO0tBZTVCO0lBYkMsSUFBSSxTQUFTLENBQUMsU0FBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksNkJBQTZCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRSxDQUFDOztrRkF2QlUsaUJBQWlCO3lEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMvUmVwbGF5U3ViamVjdCc7XG5cbmltcG9ydCB7IENhdGVnb3JpemVkVmFsaWRhdGlvblByb2JsZW1zLCBTY2hlbWFWYWxpZGF0aW9uUHJvYmxlbXMsIFZhbGlkYXRpb25Qcm9ibGVtLCBKc29uRWRpdG9yQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBHbG9iYWxzU2VydmljZSB7XG5cbiAgcmVhZG9ubHkgYWRtaW5Nb2RlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICBhY3RpdmVUYWJOYW1lID0gJyc7XG4gIHRhYk5hbWVUb0ZpcnN0VG9wTGV2ZWxFbGVtZW50OiB7IFt0YWJOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICB0ZW1wbGF0ZXM6IHtcbiAgICBbdGVtcGxhdGVOYW1lOiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHBhdGNoZXNIZWFkZXJUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT4sXG4gIH0gPSB7fTtcbiAgY29uZmlnOiBKc29uRWRpdG9yQ29uZmlnO1xuICBwcml2YXRlIF9hZG1pbk1vZGUgPSBmYWxzZTtcblxuICBzZXQgYWRtaW5Nb2RlKGFkbWluTW9kZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FkbWluTW9kZSA9IGFkbWluTW9kZTtcbiAgICB0aGlzLmFkbWluTW9kZSQubmV4dCh0aGlzLl9hZG1pbk1vZGUpO1xuICB9XG5cbiAgZ2V0IGFkbWluTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRtaW5Nb2RlO1xuICB9XG5cbiAgZ2V0IGZpcnN0RWxlbWVudFBhdGhGb3JDdXJyZW50VGFiKCkge1xuICAgIHJldHVybiB0aGlzLnRhYk5hbWVUb0ZpcnN0VG9wTGV2ZWxFbGVtZW50W3RoaXMuYWN0aXZlVGFiTmFtZV07XG4gIH1cblxufVxuIl19