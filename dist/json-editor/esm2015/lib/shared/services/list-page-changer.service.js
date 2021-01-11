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
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./path-util.service";
export class ListPageChangerService {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
        this.pageChange$Map = {};
        this.itemsPerPageMap = {};
    }
    /**
     * Changes the page of the list so that requested item is visible on UI
     * It doesn't do anything if given path's parent is not paginated list.
     *
     * @param itemPath path to a list item
     */
    changePage(fieldPath) {
        const fieldPathArray = this.pathUtilService.toPathArray(fieldPath);
        const listPathArray = this.pathUtilService.getNearestOrRootArrayParentInPath(fieldPathArray, true);
        const listPath = this.pathUtilService.toPathString(listPathArray);
        if (this.pageChange$Map[listPath]) {
            const itemIndex = fieldPathArray[listPathArray.length];
            const itemsPerPage = this.itemsPerPageMap[listPath];
            const page = Math.floor((itemIndex / itemsPerPage) + 1);
            this.pageChange$Map[listPath].next(page);
        }
    }
    registerPaginatedList(listPath, itemsPerPage) {
        this.itemsPerPageMap[listPath] = itemsPerPage;
        this.pageChange$Map[listPath] = new ReplaySubject(1);
        return this.pageChange$Map[listPath];
    }
}
ListPageChangerService.ɵfac = function ListPageChangerService_Factory(t) { return new (t || ListPageChangerService)(i0.ɵɵinject(i1.PathUtilService)); };
ListPageChangerService.ɵprov = i0.ɵɵdefineInjectable({ token: ListPageChangerService, factory: ListPageChangerService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListPageChangerService, [{
        type: Injectable
    }], function () { return [{ type: i1.PathUtilService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1wYWdlLWNoYW5nZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvbGlzdC1wYWdlLWNoYW5nZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUtyQyxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUg1QyxtQkFBYyxHQUE4QyxFQUFFLENBQUM7UUFDL0Qsb0JBQWUsR0FBK0IsRUFBRSxDQUFDO0lBRUQsQ0FBQztJQUV6RDs7Ozs7T0FLRztJQUNILFVBQVUsQ0FBQyxTQUFpQjtRQUMxQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuRyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQscUJBQXFCLENBQUMsUUFBZ0IsRUFBRSxZQUFvQjtRQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs0RkE5QlUsc0JBQXNCOzhEQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBhdGhVdGlsU2VydmljZSB9IGZyb20gJy4vcGF0aC11dGlsLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFBhZ2VDaGFuZ2VyU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBwYWdlQ2hhbmdlJE1hcDogeyBbcGF0aDogc3RyaW5nXTogUmVwbGF5U3ViamVjdDxudW1iZXI+IH0gPSB7fTtcbiAgcHJpdmF0ZSBpdGVtc1BlclBhZ2VNYXA6IHsgW3BhdGg6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBhZ2Ugb2YgdGhlIGxpc3Qgc28gdGhhdCByZXF1ZXN0ZWQgaXRlbSBpcyB2aXNpYmxlIG9uIFVJXG4gICAqIEl0IGRvZXNuJ3QgZG8gYW55dGhpbmcgaWYgZ2l2ZW4gcGF0aCdzIHBhcmVudCBpcyBub3QgcGFnaW5hdGVkIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtUGF0aCBwYXRoIHRvIGEgbGlzdCBpdGVtXG4gICAqL1xuICBjaGFuZ2VQYWdlKGZpZWxkUGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZmllbGRQYXRoQXJyYXkgPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhBcnJheShmaWVsZFBhdGgpO1xuICAgIGNvbnN0IGxpc3RQYXRoQXJyYXkgPSB0aGlzLnBhdGhVdGlsU2VydmljZS5nZXROZWFyZXN0T3JSb290QXJyYXlQYXJlbnRJblBhdGgoZmllbGRQYXRoQXJyYXksIHRydWUpO1xuXG4gICAgY29uc3QgbGlzdFBhdGggPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcobGlzdFBhdGhBcnJheSk7XG4gICAgaWYgKHRoaXMucGFnZUNoYW5nZSRNYXBbbGlzdFBhdGhdKSB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBmaWVsZFBhdGhBcnJheVtsaXN0UGF0aEFycmF5Lmxlbmd0aF07XG4gICAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSB0aGlzLml0ZW1zUGVyUGFnZU1hcFtsaXN0UGF0aF07XG4gICAgICBjb25zdCBwYWdlID0gTWF0aC5mbG9vcigoaXRlbUluZGV4IC8gaXRlbXNQZXJQYWdlKSArIDEpO1xuICAgICAgdGhpcy5wYWdlQ2hhbmdlJE1hcFtsaXN0UGF0aF0ubmV4dChwYWdlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlclBhZ2luYXRlZExpc3QobGlzdFBhdGg6IHN0cmluZywgaXRlbXNQZXJQYWdlOiBudW1iZXIpOiBSZXBsYXlTdWJqZWN0PG51bWJlcj4ge1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlTWFwW2xpc3RQYXRoXSA9IGl0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLnBhZ2VDaGFuZ2UkTWFwW2xpc3RQYXRoXSA9IG5ldyBSZXBsYXlTdWJqZWN0PG51bWJlcj4oMSk7XG4gICAgcmV0dXJuIHRoaXMucGFnZUNoYW5nZSRNYXBbbGlzdFBhdGhdO1xuICB9XG5cbn1cbiJdfQ==