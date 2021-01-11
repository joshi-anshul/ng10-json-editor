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
import { Component } from '@angular/core';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { map, takeUntil } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
/**
 * This is the base class for fields
 * WARNING:
 *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
 *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
 *
 * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
 */
export class AbstractFieldComponent extends AbstractSubscriberComponent {
    constructor(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService) {
        super();
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.jsonStoreService = jsonStoreService;
        this.pathCache = {};
        this.externalErrors = [];
        // patches grouped by op because they different UI representation
        this.replaceJsonPatches = [];
        this.addJsonPatches = [];
    }
    ngOnInit() {
        this.problemsService.externalCategorizedProblems$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(externalCategorizedProblemMap => {
            this.externalErrors = externalCategorizedProblemMap.errors[this.pathString] || [];
            this.changeDetectorRef.markForCheck();
        });
        this.jsonStoreService.patchesByPath$
            .pipe(map(patchesByPath => patchesByPath[this.pathString]))
            .pipe(map(patches => this.groupJsonPatchesByOp(patches)))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patchesByOp => {
            this.removeJsonPatch = patchesByOp.remove[0];
            this.addJsonPatches = patchesByOp.add;
            this.replaceJsonPatches = patchesByOp.replace;
            this.changeDetectorRef.markForCheck();
        });
    }
    groupJsonPatchesByOp(patches) {
        const group = {
            add: [],
            remove: [],
            replace: []
        };
        if (patches) {
            patches.forEach((patch) => {
                const opPatches = group[patch.op];
                opPatches.push(patch);
            });
        }
        return group;
    }
    ngOnChanges(changes) {
        if (changes['path']) {
            this.pathString = this.pathUtilService.toPathString(this.path);
        }
    }
    /**
     * Gets path for child, returns from `pathCache` if it is a hit
     * in order not to re-render child component due to reference change its path.
     *
     * @param key - index or field name for child
     */
    getPathForChild(key) {
        if (!this.pathCache[key] || this.pathCache[key][this.path.length - 1] !== this.path[this.path.length - 1]) {
            this.pathCache[key] = this.path.concat(key);
        }
        return this.pathCache[key];
    }
    hasErrors() {
        return this.externalErrors.length > 0;
    }
    get disabled() {
        return this.schema.disabled && !this.appGlobalsService.adminMode;
    }
    get redLeftBorderClass() {
        return this.removeJsonPatch ? 'red-left-border' : '';
    }
    trackByElement(index, element) {
        return element;
    }
    trackByIndex(index, element) {
        return index;
    }
}
AbstractFieldComponent.ɵfac = function AbstractFieldComponent_Factory(t) { return new (t || AbstractFieldComponent)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.JsonStoreService)); };
AbstractFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AbstractFieldComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function AbstractFieldComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AbstractFieldComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.PathUtilService }, { type: i0.ChangeDetectorRef }, { type: i1.JsonStoreService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0LWZpZWxkL2Fic3RyYWN0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQVUsU0FBUyxFQUEwRCxNQUFNLGVBQWUsQ0FBQztBQUUxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFDaEQ7Ozs7Ozs7R0FPRztBQUlILE1BQU0sT0FBZ0Isc0JBQXVCLFNBQVEsMkJBQTJCO0lBZ0I5RSxZQUFtQixpQkFBb0MsRUFDOUMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsaUJBQW9DLEVBQ3BDLGdCQUFrQztRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQUxTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDOUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFkM0MsY0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUE2QixFQUFFLENBQUM7UUFHOUMsaUVBQWlFO1FBQ2pFLHVCQUFrQixHQUFxQixFQUFFLENBQUM7UUFDMUMsbUJBQWMsR0FBcUIsRUFBRSxDQUFDO0lBVXRDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEI7YUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FB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QUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWEsRUFBRSxPQUFZO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLE9BQVk7UUFDdEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs0RkFsR21CLHNCQUFzQjsyREFBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FIMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFN1YnNjcmliZXJDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdWJzY3JpYmVyJztcbmltcG9ydCB7IEFwcEdsb2JhbHNTZXJ2aWNlLCBQYXRoVXRpbFNlcnZpY2UsIEpzb25TdG9yZVNlcnZpY2UsIFByb2JsZW1zU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUHJvYmxlbSwgUGF0aENhY2hlLCBKU09OU2NoZW1hLCBKc29uUGF0Y2gsIEpzb25QYXRjaGVzQnlPcCB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG4vKipcbiAqIFRoaXMgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGZpZWxkc1xuICogV0FSTklORzpcbiAqICBYRmllbGRDb21wb25lbnQgd2hpY2ggZXh0ZW5kcyB0aGlzIGNsYXNzIHNob3VsZCBoYXZlIGFsbCBzZXJ2aWNlcyBpbiB0aGlzIGNvbnN0cnVjdG9yLCBpbiB0aGVpciBjb25zdHJ1Y3RvciFcbiAqICBFWDogY29uc3RydWN0b3IoLi4ucHVibGljIGFwcEdsb2JhbFNlcnZpY2U6IEFwcEdsb2JhbFNlcnZpY2UsIC4uLikgey4uLn1cbiAqXG4gKiBJdCBwcm92aWRlcyB0cmFja0J5RnVuY3Rpb24gZnJvbSBBYnN0cmFjdFRyYWNrZXJDb21wb25lbnQsIGFuZCBoYW5kbGVzIGVycm9ycyBmb3IgdGhlIGNvbXBvbmVudC5cbiAqL1xuIEBDb21wb25lbnQoe1xuICAgdGVtcGxhdGU6ICcnXG4gfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdWJzY3JpYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgLy8gQElucHV0XG4gIHBhdGg6IEFycmF5PGFueT47XG5cbiAgcGF0aFN0cmluZzogc3RyaW5nO1xuICBwYXRoQ2FjaGU6IFBhdGhDYWNoZSA9IHt9O1xuICBleHRlcm5hbEVycm9yczogQXJyYXk8VmFsaWRhdGlvblByb2JsZW0+ID0gW107XG4gIHNjaGVtYTogSlNPTlNjaGVtYTtcblxuICAvLyBwYXRjaGVzIGdyb3VwZWQgYnkgb3AgYmVjYXVzZSB0aGV5IGRpZmZlcmVudCBVSSByZXByZXNlbnRhdGlvblxuICByZXBsYWNlSnNvblBhdGNoZXM6IEFycmF5PEpzb25QYXRjaD4gPSBbXTtcbiAgYWRkSnNvblBhdGNoZXM6IEFycmF5PEpzb25QYXRjaD4gPSBbXTtcbiAgcmVtb3ZlSnNvblBhdGNoOiBKc29uUGF0Y2g7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwR2xvYmFsc1NlcnZpY2U6IEFwcEdsb2JhbHNTZXJ2aWNlLFxuICAgIHB1YmxpYyBwcm9ibGVtc1NlcnZpY2U6IFByb2JsZW1zU2VydmljZSxcbiAgICBwdWJsaWMgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMganNvblN0b3JlU2VydmljZTogSnNvblN0b3JlU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2JsZW1zU2VydmljZS5leHRlcm5hbENhdGVnb3JpemVkUHJvYmxlbXMkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKGV4dGVybmFsQ2F0ZWdvcml6ZWRQcm9ibGVtTWFwID0+IHtcbiAgICAgICAgdGhpcy5leHRlcm5hbEVycm9ycyA9IGV4dGVybmFsQ2F0ZWdvcml6ZWRQcm9ibGVtTWFwLmVycm9yc1t0aGlzLnBhdGhTdHJpbmddIHx8IFtdO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmpzb25TdG9yZVNlcnZpY2UucGF0Y2hlc0J5UGF0aCRcbiAgICAgIC5waXBlKG1hcChwYXRjaGVzQnlQYXRoID0+IHBhdGNoZXNCeVBhdGhbdGhpcy5wYXRoU3RyaW5nXSkpXG4gICAgICAucGlwZShtYXAocGF0Y2hlcyA9PiB0aGlzLmdyb3VwSnNvblBhdGNoZXNCeU9wKHBhdGNoZXMpKSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocGF0Y2hlc0J5T3AgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUpzb25QYXRjaCA9IHBhdGNoZXNCeU9wLnJlbW92ZVswXTtcbiAgICAgICAgdGhpcy5hZGRKc29uUGF0Y2hlcyA9IHBhdGNoZXNCeU9wLmFkZDtcbiAgICAgICAgdGhpcy5yZXBsYWNlSnNvblBhdGNoZXMgPSBwYXRjaGVzQnlPcC5yZXBsYWNlO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdyb3VwSnNvblBhdGNoZXNCeU9wKHBhdGNoZXM6IEFycmF5PEpzb25QYXRjaD4pOiBKc29uUGF0Y2hlc0J5T3Age1xuICAgIGNvbnN0IGdyb3VwOiBKc29uUGF0Y2hlc0J5T3AgPSB7XG4gICAgICBhZGQ6IFtdLFxuICAgICAgcmVtb3ZlOiBbXSxcbiAgICAgIHJlcGxhY2U6IFtdXG4gICAgfTtcblxuICAgIGlmIChwYXRjaGVzKSB7XG4gICAgICBwYXRjaGVzLmZvckVhY2goKHBhdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wUGF0Y2hlcyA9IGdyb3VwW3BhdGNoLm9wXTtcbiAgICAgICAgb3BQYXRjaGVzLnB1c2gocGF0Y2gpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydwYXRoJ10pIHtcbiAgICAgIHRoaXMucGF0aFN0cmluZyA9IHRoaXMucGF0aFV0aWxTZXJ2aWNlLnRvUGF0aFN0cmluZyh0aGlzLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHBhdGggZm9yIGNoaWxkLCByZXR1cm5zIGZyb20gYHBhdGhDYWNoZWAgaWYgaXQgaXMgYSBoaXRcbiAgICogaW4gb3JkZXIgbm90IHRvIHJlLXJlbmRlciBjaGlsZCBjb21wb25lbnQgZHVlIHRvIHJlZmVyZW5jZSBjaGFuZ2UgaXRzIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgLSBpbmRleCBvciBmaWVsZCBuYW1lIGZvciBjaGlsZFxuICAgKi9cbiAgZ2V0UGF0aEZvckNoaWxkKGtleTogYW55KTogQXJyYXk8YW55PiB7XG4gICAgaWYgKCF0aGlzLnBhdGhDYWNoZVtrZXldIHx8IHRoaXMucGF0aENhY2hlW2tleV1bdGhpcy5wYXRoLmxlbmd0aCAtIDFdICE9PSB0aGlzLnBhdGhbdGhpcy5wYXRoLmxlbmd0aCAtIDFdKSB7XG4gICAgICB0aGlzLnBhdGhDYWNoZVtrZXldID0gdGhpcy5wYXRoLmNvbmNhdChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXRoQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHRlcm5hbEVycm9ycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kaXNhYmxlZCAmJiAhdGhpcy5hcHBHbG9iYWxzU2VydmljZS5hZG1pbk1vZGU7XG4gIH1cblxuICBnZXQgcmVkTGVmdEJvcmRlckNsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlSnNvblBhdGNoID8gJ3JlZC1sZWZ0LWJvcmRlcicgOiAnJztcbiAgfVxuXG4gIHRyYWNrQnlFbGVtZW50KGluZGV4OiBudW1iZXIsIGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlciwgZWxlbWVudDogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxufVxuIl19