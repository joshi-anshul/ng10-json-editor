/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2017 CERN.
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
export class SetFirstElementPathPipe {
    constructor(appGlobalsService, pathUtilService) {
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
    }
    transform(fields, tabName) {
        this.appGlobalsService.tabNameToFirstTopLevelElement[tabName] = `${this.pathUtilService.separator}${fields.first()}`;
        return fields;
    }
}
SetFirstElementPathPipe.ɵfac = function SetFirstElementPathPipe_Factory(t) { return new (t || SetFirstElementPathPipe)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.PathUtilService)); };
SetFirstElementPathPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "setFirstElementPath", type: SetFirstElementPathPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SetFirstElementPathPipe, [{
        type: Pipe,
        args: [{
                name: 'setFirstElementPath'
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.PathUtilService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWZpcnN0LWVsZW1lbnQtcGF0aC5waXBlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9waXBlcy9zZXQtZmlyc3QtZWxlbWVudC1wYXRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUgsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQVFwRCxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLFlBQW1CLGlCQUFvQyxFQUNwQyxlQUFnQztRQURoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFJLENBQUM7SUFFeEQsU0FBUyxDQUFDLE1BQW1CLEVBQUUsT0FBZTtRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNySCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs4RkFSVSx1QkFBdUI7cUZBQXZCLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBSG5DLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUscUJBQXFCO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNyBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXQgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBBcHBHbG9iYWxzU2VydmljZSwgUGF0aFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzZXRGaXJzdEVsZW1lbnRQYXRoJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXRGaXJzdEVsZW1lbnRQYXRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBHbG9iYWxzU2VydmljZTogQXBwR2xvYmFsc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSkgeyB9XG5cbiAgdHJhbnNmb3JtKGZpZWxkczogU2V0PHN0cmluZz4sIHRhYk5hbWU6IHN0cmluZyk6IFNldDxzdHJpbmc+IHtcbiAgICB0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLnRhYk5hbWVUb0ZpcnN0VG9wTGV2ZWxFbGVtZW50W3RhYk5hbWVdID0gYCR7dGhpcy5wYXRoVXRpbFNlcnZpY2Uuc2VwYXJhdG9yfSR7ZmllbGRzLmZpcnN0KCl9YDtcbiAgICByZXR1cm4gZmllbGRzO1xuICB9XG59XG4iXX0=