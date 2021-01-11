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
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./path-util.service";
export class TabsUtilService {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
        this.activeTabName$ = new ReplaySubject(1);
    }
    getTabNames(tabsConfig) {
        const tabNames = tabsConfig.tabs.map(tab => tab.name);
        // insert default tab name at the beginning
        return [tabsConfig.defaultTabName]
            .concat(tabNames);
    }
    getSchemaKeyToTabName(tabsConfig, schema) {
        if (!this.schemaKeyToTabName) {
            // set tab.name for configured keys
            const keyToTabName = tabsConfig.tabs
                .map(tab => {
                const keysWithTabName = {};
                tab.properties.forEach(key => {
                    keysWithTabName[key] = tab.name;
                });
                return keysWithTabName;
            }).reduce((pre, cur) => Object.assign(pre, cur));
            // set defaultTabName for all other keys in the schema
            Object.keys(schema.properties)
                .filter(key => !keyToTabName[key])
                .forEach(key => {
                keyToTabName[key] = tabsConfig.defaultTabName;
            });
            this.schemaKeyToTabName = keyToTabName;
        }
        return this.schemaKeyToTabName;
    }
    // TODO: maybe this could be a decorator
    selectTabIfNeeded(path) {
        if (this.schemaKeyToTabName && path !== '') {
            const tabName = this.schemaKeyToTabName[this.pathUtilService.toPathArray(path)[0]];
            this.activeTabName$.next(tabName);
        }
    }
}
TabsUtilService.ɵfac = function TabsUtilService_Factory(t) { return new (t || TabsUtilService)(i0.ɵɵinject(i1.PathUtilService)); };
TabsUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: TabsUtilService, factory: TabsUtilService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabsUtilService, [{
        type: Injectable
    }], function () { return [{ type: i1.PathUtilService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL3RhYnMtdXRpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBUXJDLE1BQU0sT0FBTyxlQUFlO0lBSzFCLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUYxQyxtQkFBYyxHQUEwQixJQUFJLGFBQWEsQ0FBUyxDQUFDLENBQUMsQ0FBQztJQUV2QixDQUFDO0lBRXhELFdBQVcsQ0FBQyxVQUFzQjtRQUNoQyxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCwyQ0FBMkM7UUFDM0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7YUFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxVQUFzQixFQUFFLE1BQWtCO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsbUNBQW1DO1lBQ25DLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJO2lCQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDM0IsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sZUFBZSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkQsc0RBQXNEO1lBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztpQkFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDYixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLGlCQUFpQixDQUFDLElBQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUMxQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7OzhFQTFDVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTZXQgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBUYWJzQ29uZmlnLCBKU09OU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBQYXRoVXRpbFNlcnZpY2UgfSBmcm9tICcuL3BhdGgtdXRpbC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYnNVdGlsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzY2hlbWFLZXlUb1RhYk5hbWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHJlYWRvbmx5IGFjdGl2ZVRhYk5hbWUkOiBSZXBsYXlTdWJqZWN0PHN0cmluZz4gPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KDEpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSkgeyB9XG5cbiAgZ2V0VGFiTmFtZXModGFic0NvbmZpZzogVGFic0NvbmZpZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIGNvbnN0IHRhYk5hbWVzID0gdGFic0NvbmZpZy50YWJzLm1hcCh0YWIgPT4gdGFiLm5hbWUpO1xuICAgIC8vIGluc2VydCBkZWZhdWx0IHRhYiBuYW1lIGF0IHRoZSBiZWdpbm5pbmdcbiAgICByZXR1cm4gW3RhYnNDb25maWcuZGVmYXVsdFRhYk5hbWVdXG4gICAgICAuY29uY2F0KHRhYk5hbWVzKTtcbiAgfVxuXG4gIGdldFNjaGVtYUtleVRvVGFiTmFtZSh0YWJzQ29uZmlnOiBUYWJzQ29uZmlnLCBzY2hlbWE6IEpTT05TY2hlbWEpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBpZiAoIXRoaXMuc2NoZW1hS2V5VG9UYWJOYW1lKSB7XG4gICAgICAvLyBzZXQgdGFiLm5hbWUgZm9yIGNvbmZpZ3VyZWQga2V5c1xuICAgICAgY29uc3Qga2V5VG9UYWJOYW1lID0gdGFic0NvbmZpZy50YWJzXG4gICAgICAgIC5tYXAodGFiID0+IHtcbiAgICAgICAgICBjb25zdCBrZXlzV2l0aFRhYk5hbWUgPSB7fTtcbiAgICAgICAgICB0YWIucHJvcGVydGllcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBrZXlzV2l0aFRhYk5hbWVba2V5XSA9IHRhYi5uYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBrZXlzV2l0aFRhYk5hbWU7XG4gICAgICAgIH0pLnJlZHVjZSgocHJlLCBjdXIpID0+IE9iamVjdC5hc3NpZ24ocHJlLCBjdXIpKTtcbiAgICAgIC8vIHNldCBkZWZhdWx0VGFiTmFtZSBmb3IgYWxsIG90aGVyIGtleXMgaW4gdGhlIHNjaGVtYVxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+ICFrZXlUb1RhYk5hbWVba2V5XSlcbiAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBrZXlUb1RhYk5hbWVba2V5XSA9IHRhYnNDb25maWcuZGVmYXVsdFRhYk5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5zY2hlbWFLZXlUb1RhYk5hbWUgPSBrZXlUb1RhYk5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNjaGVtYUtleVRvVGFiTmFtZTtcbiAgfVxuXG4gIC8vIFRPRE86IG1heWJlIHRoaXMgY291bGQgYmUgYSBkZWNvcmF0b3JcbiAgc2VsZWN0VGFiSWZOZWVkZWQocGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hS2V5VG9UYWJOYW1lICYmIHBhdGggIT09ICcnKSB7XG4gICAgICBjb25zdCB0YWJOYW1lID0gdGhpcy5zY2hlbWFLZXlUb1RhYk5hbWVbdGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoQXJyYXkocGF0aClbMF1dO1xuICAgICAgdGhpcy5hY3RpdmVUYWJOYW1lJC5uZXh0KHRhYk5hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19