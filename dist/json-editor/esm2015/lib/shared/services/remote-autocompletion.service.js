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
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./path-util.service";
export class RemoteAutocompletionService {
    constructor(http, pathUtilService) {
        this.http = http;
        this.pathUtilService = pathUtilService;
    }
    getAutocompletionResults(options, token) {
        return this.http.get(`${options.url}${token}`)
            .pipe(map(res => this.mapResponseToResults(res, options.path)));
    }
    mapResponseToResults(response, resultsPath) {
        const pathElements = this.pathUtilService.toPathArray(resultsPath);
        let results = response.json();
        pathElements.forEach(pathElement => {
            results = results[pathElement];
        });
        return results;
    }
}
RemoteAutocompletionService.ɵfac = function RemoteAutocompletionService_Factory(t) { return new (t || RemoteAutocompletionService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.PathUtilService)); };
RemoteAutocompletionService.ɵprov = i0.ɵɵdefineInjectable({ token: RemoteAutocompletionService, factory: RemoteAutocompletionService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RemoteAutocompletionService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.PathUtilService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3RlLWF1dG9jb21wbGV0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL3JlbW90ZS1hdXRvY29tcGxldGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXJDLE1BQU0sT0FBTywyQkFBMkI7SUFFdEMsWUFBb0IsSUFBZ0IsRUFDMUIsZUFBZ0M7UUFEdEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRS9DLHdCQUF3QixDQUFDLE9BQTZCLEVBQ3BELEtBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQzthQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxRQUFhLEVBQUUsV0FBbUI7UUFDN0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkUsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDakMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O3NHQWxCVSwyQkFBMkI7bUVBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUR2QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0b2NvbXBsZXRpb25Db25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBhdGhVdGlsU2VydmljZSB9IGZyb20gJy4vcGF0aC11dGlsLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVtb3RlQXV0b2NvbXBsZXRpb25TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSkgeyB9XG5cbiAgZ2V0QXV0b2NvbXBsZXRpb25SZXN1bHRzKG9wdGlvbnM6IEF1dG9jb21wbGV0aW9uQ29uZmlnLFxuICAgIHRva2VuOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFycmF5PG9iamVjdD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtvcHRpb25zLnVybH0ke3Rva2VufWApXG4gICAgICAucGlwZShtYXAocmVzID0+IHRoaXMubWFwUmVzcG9uc2VUb1Jlc3VsdHMocmVzLCBvcHRpb25zLnBhdGgpKSk7XG4gIH1cblxuICBwcml2YXRlIG1hcFJlc3BvbnNlVG9SZXN1bHRzKHJlc3BvbnNlOiBhbnksIHJlc3VsdHNQYXRoOiBzdHJpbmcpOiBBcnJheTxvYmplY3Q+IHtcbiAgICBjb25zdCBwYXRoRWxlbWVudHMgPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhBcnJheShyZXN1bHRzUGF0aCk7XG4gICAgbGV0IHJlc3VsdHMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcGF0aEVsZW1lbnRzLmZvckVhY2gocGF0aEVsZW1lbnQgPT4ge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHNbcGF0aEVsZW1lbnRdO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG4iXX0=