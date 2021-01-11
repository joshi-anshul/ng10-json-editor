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
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { takeUntil, map } from 'rxjs/operators';
import { AbstractSubscriberComponent } from '../../abstract-subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/services";
import * as i2 from "ngx-bootstrap/tabs";
import * as i3 from "@angular/common";
import * as i4 from "../../shared/pipes/keys-pipe";
function ProblemsConsoleTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.iconClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, ctx_r0.problemType), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.problemCount);
} }
function ProblemsConsoleTabComponent_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function ProblemsConsoleTabComponent_ng_container_2_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r8); const key_r3 = i0.ɵɵnextContext().$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.focusAndSelectPath(key_r3); });
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const problem_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r4.iconClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", problem_r5.message, " ");
} }
function ProblemsConsoleTabComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProblemsConsoleTabComponent_ng_container_2_li_1_Template, 3, 2, "li", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.internalProblemMap[key_r3]);
} }
function ProblemsConsoleTabComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function ProblemsConsoleTabComponent_ng_container_4_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r14); const key_r9 = i0.ɵɵnextContext().$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.focusAndSelectPath(key_r9); });
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const problem_r11 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r10.iconClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", problem_r11.message, " ");
} }
function ProblemsConsoleTabComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProblemsConsoleTabComponent_ng_container_4_li_1_Template, 3, 2, "li", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.externalProblemMap[key_r9]);
} }
export class ProblemsConsoleTabComponent extends AbstractSubscriberComponent {
    constructor(domUtilService, pathUtilService, problemsService, changeDetectorRef) {
        super();
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.problemsService = problemsService;
        this.changeDetectorRef = changeDetectorRef;
        this.problemCount = 0;
    }
    ngOnInit() {
        this.problemsService.externalCategorizedProblems$
            .pipe(map(categorizedProblemMap => categorizedProblemMap[this.problemType]))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(problemMap => {
            this.externalProblemMap = problemMap;
            this.changeDetectorRef.markForCheck();
        });
        this.problemsService.internalCategorizedProblems$
            .pipe(map(categorizedProblemMap => categorizedProblemMap[this.problemType]))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(problemMap => {
            this.internalProblemMap = problemMap;
            this.changeDetectorRef.markForCheck();
        });
        // TODO: create WarningsConsoleTabComponent with same template to avoid `if`
        const problemCount$ = this.problemType === 'errors' ? this.problemsService.errorCount$ : this.problemsService.warningCount$;
        problemCount$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(problemCount => {
            this.problemCount = problemCount;
        });
        this.iconClassName = this.problemType === 'errors' ? 'fa fa-times' : 'fa fa-exclamation-triangle';
    }
    focusAndSelectPath(path) {
        this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
    }
}
ProblemsConsoleTabComponent.ɵfac = function ProblemsConsoleTabComponent_Factory(t) { return new (t || ProblemsConsoleTabComponent)(i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ProblemsConsoleTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProblemsConsoleTabComponent, selectors: [["problems-console-tab"]], inputs: { problemType: "problemType" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["tabHeading", ""], [1, "list-group"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "badge"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function ProblemsConsoleTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProblemsConsoleTabComponent_ng_template_0_Template, 5, 5, "ng-template", 0);
        i0.ɵɵelementStart(1, "ul", 1);
        i0.ɵɵtemplate(2, ProblemsConsoleTabComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵpipe(3, "keys");
        i0.ɵɵtemplate(4, ProblemsConsoleTabComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        i0.ɵɵpipe(5, "keys");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx.internalProblemMap));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 4, ctx.externalProblemMap));
    } }, directives: [i2.TabHeadingDirective, i3.NgForOf, i3.NgClass], pipes: [i4.KeysPipe, i3.TitleCasePipe], styles: [".list-group-item[_ngcontent-%COMP%]:hover{background-color:#faebcc}.list-group-item[_ngcontent-%COMP%]:hover > .title[_ngcontent-%COMP%]{text-decoration:underline}.list-group-item[_ngcontent-%COMP%]:hover.nested{background-color:#e2dcd1}.list-group-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0074d9;cursor:pointer}", ".fa-exclamation-triangle[_ngcontent-%COMP%]{color:#f1c40f}.fa-times[_ngcontent-%COMP%]{color:#d14024}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProblemsConsoleTabComponent, [{
        type: Component,
        args: [{
                selector: 'problems-console-tab',
                styleUrls: [
                    '../abstract-console-tab/abstract-console-tab.component.scss',
                    './problems-console-tab.component.scss'
                ],
                templateUrl: './problems-console-tab.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DomUtilService }, { type: i1.PathUtilService }, { type: i1.ProblemsService }, { type: i0.ChangeDetectorRef }]; }, { problemType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvYmxlbXMtY29uc29sZS10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2JvdHRvbS1jb25zb2xlL3Byb2JsZW1zLWNvbnNvbGUtdGFiL3Byb2JsZW1zLWNvbnNvbGUtdGFiLmNvbXBvbmVudC50cyIsImxpYi9ib3R0b20tY29uc29sZS9wcm9ibGVtcy1jb25zb2xlLXRhYi9wcm9ibGVtcy1jb25zb2xlLXRhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztJQy9CdEUsdUJBQWlDO0lBQUMsWUFBNEI7O0lBQUEsK0JBQW9CO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTzs7O0lBQXRHLDhDQUF5QjtJQUFNLGVBQTRCO0lBQTVCLHlFQUE0QjtJQUFvQixlQUFnQjtJQUFoQix5Q0FBZ0I7Ozs7SUFLaEcsNkJBQ0U7SUFEMEUsb1FBQWlDO0lBQzNHLHVCQUFpQztJQUFDLFlBQ3BDO0lBQUEsaUJBQUs7Ozs7SUFEQSxlQUF5QjtJQUF6Qiw4Q0FBeUI7SUFBTSxlQUNwQztJQURvQyxtREFDcEM7OztJQUhGLDZCQUNFO0lBQUEseUZBQ0U7SUFFSiwwQkFBZTs7OztJQUhULGVBQStDO0lBQS9DLDJEQUErQzs7OztJQUtuRCw2QkFDRTtJQUQwRSx1UUFBaUM7SUFDM0csdUJBQWlDO0lBQUMsWUFDcEM7SUFBQSxpQkFBSzs7OztJQURBLGVBQXlCO0lBQXpCLCtDQUF5QjtJQUFNLGVBQ3BDO0lBRG9DLG9EQUNwQzs7O0lBSEYsNkJBQ0U7SUFBQSx5RkFDRTtJQUVKLDBCQUFlOzs7O0lBSFQsZUFBK0M7SUFBL0MsMkRBQStDOztBRGtDdkQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLDJCQUEyQjtJQVMxRSxZQUFtQixjQUE4QixFQUN4QyxlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQyxpQkFBb0M7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFKUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTjdDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBUWpCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEI7YUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEI7YUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUwsNEVBQTRFO1FBRTVFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDNUgsYUFBYTthQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUM7SUFDcEcsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQ0FBb0MsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7c0dBOUNVLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FDN0N4Qyw0RkFDRTtRQUdGLDZCQUNFO1FBQUEsOEZBQ0U7O1FBSUYsOEZBQ0U7O1FBSUosaUJBQUs7O1FBVlcsZUFBNkM7UUFBN0Msc0VBQTZDO1FBSzdDLGVBQTZDO1FBQTdDLHNFQUE2Qzs7a0REbUNoRCwyQkFBMkI7Y0FUdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFNBQVMsRUFBRTtvQkFDVCw2REFBNkQ7b0JBQzdELHVDQUF1QztpQkFDeEM7Z0JBQ0QsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7NkpBR1UsV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWJzdHJhY3RTdWJzY3JpYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYWJzdHJhY3Qtc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBEb21VdGlsU2VydmljZSwgUGF0aFV0aWxTZXJ2aWNlLCBQcm9ibGVtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdGlvblByb2JsZW1zLCBQcm9ibGVtQ29sbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2JsZW1zLWNvbnNvbGUtdGFiJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uL2Fic3RyYWN0LWNvbnNvbGUtdGFiL2Fic3RyYWN0LWNvbnNvbGUtdGFiLmNvbXBvbmVudC5zY3NzJyxcbiAgICAnLi9wcm9ibGVtcy1jb25zb2xlLXRhYi5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2JsZW1zLWNvbnNvbGUtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUHJvYmxlbXNDb25zb2xlVGFiQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdWJzY3JpYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwcm9ibGVtVHlwZTogUHJvYmxlbUNvbGxlY3Rpb25UeXBlO1xuXG4gIGludGVybmFsUHJvYmxlbU1hcDogU2NoZW1hVmFsaWRhdGlvblByb2JsZW1zO1xuICBleHRlcm5hbFByb2JsZW1NYXA6IFNjaGVtYVZhbGlkYXRpb25Qcm9ibGVtcztcbiAgcHJvYmxlbUNvdW50ID0gMDtcbiAgaWNvbkNsYXNzTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkb21VdGlsU2VydmljZTogRG9tVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBwcm9ibGVtc1NlcnZpY2U6IFByb2JsZW1zU2VydmljZSxcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvYmxlbXNTZXJ2aWNlLmV4dGVybmFsQ2F0ZWdvcml6ZWRQcm9ibGVtcyRcbiAgICAgIC5waXBlKG1hcChjYXRlZ29yaXplZFByb2JsZW1NYXAgPT4gY2F0ZWdvcml6ZWRQcm9ibGVtTWFwW3RoaXMucHJvYmxlbVR5cGVdKSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocHJvYmxlbU1hcCA9PiB7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxQcm9ibGVtTWFwID0gcHJvYmxlbU1hcDtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIHRoaXMucHJvYmxlbXNTZXJ2aWNlLmludGVybmFsQ2F0ZWdvcml6ZWRQcm9ibGVtcyRcbiAgICAgIC5waXBlKG1hcChjYXRlZ29yaXplZFByb2JsZW1NYXAgPT4gY2F0ZWdvcml6ZWRQcm9ibGVtTWFwW3RoaXMucHJvYmxlbVR5cGVdKSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocHJvYmxlbU1hcCA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxQcm9ibGVtTWFwID0gcHJvYmxlbU1hcDtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gVE9ETzogY3JlYXRlIFdhcm5pbmdzQ29uc29sZVRhYkNvbXBvbmVudCB3aXRoIHNhbWUgdGVtcGxhdGUgdG8gYXZvaWQgYGlmYFxuXG4gICAgY29uc3QgcHJvYmxlbUNvdW50JCA9IHRoaXMucHJvYmxlbVR5cGUgPT09ICdlcnJvcnMnID8gdGhpcy5wcm9ibGVtc1NlcnZpY2UuZXJyb3JDb3VudCQgOiB0aGlzLnByb2JsZW1zU2VydmljZS53YXJuaW5nQ291bnQkO1xuICAgIHByb2JsZW1Db3VudCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocHJvYmxlbUNvdW50ID0+IHtcbiAgICAgICAgdGhpcy5wcm9ibGVtQ291bnQgPSBwcm9ibGVtQ291bnQ7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaWNvbkNsYXNzTmFtZSA9IHRoaXMucHJvYmxlbVR5cGUgPT09ICdlcnJvcnMnID8gJ2ZhIGZhLXRpbWVzJyA6ICdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc7XG4gIH1cblxuICBmb2N1c0FuZFNlbGVjdFBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5kb21VdGlsU2VydmljZS5mb2N1c0FuZFNlbGVjdEZpcnN0RWRpdGFibGVDaGlsZEJ5SWQocGF0aCwgdHJ1ZSk7XG4gIH1cbn1cblxuIiwiPG5nLXRlbXBsYXRlIHRhYkhlYWRpbmc+XG4gIDxpIFtuZ0NsYXNzXT1cImljb25DbGFzc05hbWVcIj48L2k+IHt7cHJvYmxlbVR5cGUgfCB0aXRsZWNhc2V9fSA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3twcm9ibGVtQ291bnR9fTwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG5cbjx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQga2V5IG9mIGludGVybmFsUHJvYmxlbU1hcCB8IGtleXNcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IHByb2JsZW0gb2YgaW50ZXJuYWxQcm9ibGVtTWFwW2tleV1cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIChjbGljayk9XCJmb2N1c0FuZFNlbGVjdFBhdGgoa2V5KVwiPlxuICAgICAgPGkgW25nQ2xhc3NdPVwiaWNvbkNsYXNzTmFtZVwiPjwvaT4ge3sgcHJvYmxlbS5tZXNzYWdlIH19XG4gICAgPC9saT5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGtleSBvZiBleHRlcm5hbFByb2JsZW1NYXAgfCBrZXlzXCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBwcm9ibGVtIG9mIGV4dGVybmFsUHJvYmxlbU1hcFtrZXldXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiAoY2xpY2spPVwiZm9jdXNBbmRTZWxlY3RQYXRoKGtleSlcIj5cbiAgICAgIDxpIFtuZ0NsYXNzXT1cImljb25DbGFzc05hbWVcIj48L2k+IHt7IHByb2JsZW0ubWVzc2FnZSB9fVxuICAgIDwvbGk+XG4gIDwvbmctY29udGFpbmVyPlxuPC91bD4iXX0=