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
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { takeUntil, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/tooltip";
function BottomConsoleBadgesComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function BottomConsoleBadgesComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onBadgeClick($event, "Errors"); });
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵelement(2, "i", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("tooltip", "", ctx_r0.errorCount, " error(s)");
} }
function BottomConsoleBadgesComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function BottomConsoleBadgesComponent_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onBadgeClick($event, "Warnings"); });
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵelement(2, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("tooltip", "", ctx_r1.warningCount, " warning(s)");
} }
function BottomConsoleBadgesComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function BottomConsoleBadgesComponent_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onBadgeClick($event, "Patches"); });
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵelement(2, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("tooltip", "", ctx_r2.patchCount, " conflicts(s)");
} }
export class BottomConsoleBadgesComponent extends AbstractSubscriberComponent {
    constructor(problemsService, changeDetectorRef, jsonStoreService) {
        super();
        this.problemsService = problemsService;
        this.changeDetectorRef = changeDetectorRef;
        this.jsonStoreService = jsonStoreService;
        this.badgeClick = new EventEmitter();
        this.errorCount = 0;
        this.warningCount = 0;
        this.patchCount = 0;
    }
    ngOnInit() {
        this.problemsService.errorCount$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(count => {
            this.errorCount = count;
            // FIXME: use markForCheck() instead
            // markForCheck() wasn't working for mysterious reasons for initial update
            this.changeDetectorRef.detectChanges();
        });
        this.problemsService.warningCount$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(count => {
            this.warningCount = count;
            // FIXME: use markForCheck() instead
            // markForCheck() wasn't working for mysterious reasons for initial update
            this.changeDetectorRef.detectChanges();
        });
        this.jsonStoreService.patchesByPath$
            .pipe(map(patchesByPath => {
            return Object.keys(patchesByPath)
                .map(path => patchesByPath[path].length)
                .reduce((sum, patchCountPerPath) => sum + patchCountPerPath, 0);
        }))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patchCount => {
            this.patchCount = patchCount;
            this.changeDetectorRef.markForCheck();
        });
    }
    onBadgeClick(event, badgeName) {
        event.preventDefault();
        this.badgeClick.emit(badgeName);
    }
}
BottomConsoleBadgesComponent.ɵfac = function BottomConsoleBadgesComponent_Factory(t) { return new (t || BottomConsoleBadgesComponent)(i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.JsonStoreService)); };
BottomConsoleBadgesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BottomConsoleBadgesComponent, selectors: [["bottom-console-badges"]], outputs: { badgeClick: "badgeClick" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [[1, "badges-container"], ["class", "error", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["class", "warning", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["class", "patch", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["placement", "right", 1, "error", 3, "tooltip", "click"], [1, "error", "fa-stack", "fa-lg"], [1, "fa", "fa-times", "fa-stack-1x", "fa-inverse"], ["placement", "right", 1, "warning", 3, "tooltip", "click"], [1, "warning", "fa-stack", "fa-lg"], [1, "fa", "fa-exclamation", "fa-stack-1x", "fa-inverse"], ["placement", "right", 1, "patch", 3, "tooltip", "click"], [1, "patch", "fa-stack", "fa-lg"], [1, "fa", "fa-bolt", "fa-stack-1x", "fa-inverse"]], template: function BottomConsoleBadgesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, BottomConsoleBadgesComponent_a_1_Template, 3, 1, "a", 1);
        i0.ɵɵtemplate(2, BottomConsoleBadgesComponent_a_2_Template, 3, 1, "a", 2);
        i0.ɵɵtemplate(3, BottomConsoleBadgesComponent_a_3_Template, 3, 1, "a", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.errorCount > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.warningCount > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.patchCount > 0);
    } }, directives: [i2.NgIf, i3.TooltipDirective], styles: [".error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #d14024}.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#d14024;padding-bottom:2px}.warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #fbd503}.warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fbd503}.patch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #f96509}.patch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f96509}a[_ngcontent-%COMP%]{cursor:pointer;padding-top:7px;text-decoration:none}a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:all .35s ease-in-out}a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{font-size:1.1em}.badges-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;width:100%}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;margin-top:5px;width:30px}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-of-type{border-top:2px solid #283948;margin-top:10px}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{align-items:center;border-radius:20%;display:flex;height:30px}@media screen and (max-width:1440px){.badges-container[_ngcontent-%COMP%]{flex-direction:column}}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomConsoleBadgesComponent, [{
        type: Component,
        args: [{
                selector: 'bottom-console-badges',
                styleUrls: [
                    './bottom-console-badges.component.scss'
                ],
                templateUrl: './bottom-console-badges.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.ProblemsService }, { type: i0.ChangeDetectorRef }, { type: i1.JsonStoreService }]; }, { badgeClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWNvbnNvbGUtYmFkZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ib3R0b20tY29uc29sZS1iYWRnZXMvYm90dG9tLWNvbnNvbGUtYmFkZ2VzLmNvbXBvbmVudC50cyIsImxpYi9ib3R0b20tY29uc29sZS1iYWRnZXMvYm90dG9tLWNvbnNvbGUtYmFkZ2VzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBd0MsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQzFCOUMsNEJBQ0U7SUFEc0Msb01BQThCLFFBQVEsS0FBRTtJQUM5RSwrQkFDRTtJQUFBLHVCQUFrRDtJQUNwRCxpQkFBTztJQUNULGlCQUFJOzs7SUFKNkUsd0VBQWlDOzs7O0lBS2xILDRCQUNFO0lBRDBDLG9NQUE4QixVQUFVLEtBQUU7SUFDcEYsK0JBQ0U7SUFBQSx1QkFBd0Q7SUFDMUQsaUJBQU87SUFDVCxpQkFBSTs7O0lBSm1GLDRFQUFxQzs7OztJQUs1SCw2QkFDRTtJQURzQyxvTUFBOEIsU0FBUyxLQUFFO0lBQy9FLGdDQUNFO0lBQUEsd0JBQWlEO0lBQ25ELGlCQUFPO0lBQ1QsaUJBQUk7OztJQUo4RSw0RUFBcUM7O0FEMEJ6SCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsMkJBQTJCO0lBUTNFLFlBQW9CLGVBQWdDLEVBQzFDLGlCQUFvQyxFQUNwQyxnQkFBa0M7UUFDMUMsS0FBSyxFQUFFLENBQUM7UUFIVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUmxDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWxELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBTWYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVc7YUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLG9DQUFvQztZQUNwQywwRUFBMEU7WUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhO2FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixvQ0FBb0M7WUFDcEMsMEVBQTBFO1lBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO2FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztpQkFDdkMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7YUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFZLEVBQUUsU0FBaUI7UUFDMUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O3dHQS9DVSw0QkFBNEI7aUVBQTVCLDRCQUE0QjtRQ3JDekMsOEJBQ0U7UUFBQSx5RUFDRTtRQUlGLHlFQUNFO1FBSUYseUVBQ0U7UUFJSixpQkFBTTs7UUFmRCxlQUFzQjtRQUF0Qix5Q0FBc0I7UUFLdEIsZUFBd0I7UUFBeEIsMkNBQXdCO1FBS3hCLGVBQXNCO1FBQXRCLHlDQUFzQjs7a0REMEJkLDRCQUE0QjtjQVJ4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFO29CQUNULHdDQUF3QztpQkFDekM7Z0JBQ0QsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7aUlBR1csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFN1YnNjcmliZXJDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdWJzY3JpYmVyJztcbmltcG9ydCB7IFByb2JsZW1zU2VydmljZSwgSnNvblN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tY29uc29sZS1iYWRnZXMnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9ib3R0b20tY29uc29sZS1iYWRnZXMuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9ib3R0b20tY29uc29sZS1iYWRnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21Db25zb2xlQmFkZ2VzQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdWJzY3JpYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBPdXRwdXQoKSBiYWRnZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgZXJyb3JDb3VudCA9IDA7XG4gIHdhcm5pbmdDb3VudCA9IDA7XG4gIHBhdGNoQ291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvYmxlbXNTZXJ2aWNlOiBQcm9ibGVtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBqc29uU3RvcmVTZXJ2aWNlOiBKc29uU3RvcmVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvYmxlbXNTZXJ2aWNlLmVycm9yQ291bnQkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKGNvdW50ID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckNvdW50ID0gY291bnQ7XG4gICAgICAgIC8vIEZJWE1FOiB1c2UgbWFya0ZvckNoZWNrKCkgaW5zdGVhZFxuICAgICAgICAvLyBtYXJrRm9yQ2hlY2soKSB3YXNuJ3Qgd29ya2luZyBmb3IgbXlzdGVyaW91cyByZWFzb25zIGZvciBpbml0aWFsIHVwZGF0ZVxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIHRoaXMucHJvYmxlbXNTZXJ2aWNlLndhcm5pbmdDb3VudCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoY291bnQgPT4ge1xuICAgICAgICB0aGlzLndhcm5pbmdDb3VudCA9IGNvdW50O1xuICAgICAgICAvLyBGSVhNRTogdXNlIG1hcmtGb3JDaGVjaygpIGluc3RlYWRcbiAgICAgICAgLy8gbWFya0ZvckNoZWNrKCkgd2Fzbid0IHdvcmtpbmcgZm9yIG15c3RlcmlvdXMgcmVhc29ucyBmb3IgaW5pdGlhbCB1cGRhdGVcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLmpzb25TdG9yZVNlcnZpY2UucGF0Y2hlc0J5UGF0aCRcbiAgICAgIC5waXBlKG1hcChwYXRjaGVzQnlQYXRoID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhdGNoZXNCeVBhdGgpXG4gICAgICAgICAgLm1hcChwYXRoID0+IHBhdGNoZXNCeVBhdGhbcGF0aF0ubGVuZ3RoKVxuICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgcGF0Y2hDb3VudFBlclBhdGgpID0+IHN1bSArIHBhdGNoQ291bnRQZXJQYXRoLCAwKTtcbiAgICAgIH0pKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShwYXRjaENvdW50ID0+IHtcbiAgICAgICAgdGhpcy5wYXRjaENvdW50ID0gcGF0Y2hDb3VudDtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25CYWRnZUNsaWNrKGV2ZW50OiBFdmVudCwgYmFkZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYmFkZ2VDbGljay5lbWl0KGJhZGdlTmFtZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJiYWRnZXMtY29udGFpbmVyXCI+XG4gIDxhICpuZ0lmPVwiZXJyb3JDb3VudCA+IDBcIiBjbGFzcz1cImVycm9yXCIgKGNsaWNrKT1cIm9uQmFkZ2VDbGljaygkZXZlbnQsICdFcnJvcnMnKVwiIHRvb2x0aXA9XCJ7e2Vycm9yQ291bnR9fSBlcnJvcihzKVwiIHBsYWNlbWVudD1cInJpZ2h0XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJlcnJvciBmYS1zdGFjayBmYS1sZ1wiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgPC9hPlxuICA8YSAqbmdJZj1cIndhcm5pbmdDb3VudCA+IDBcIiBjbGFzcz1cIndhcm5pbmdcIiAoY2xpY2spPVwib25CYWRnZUNsaWNrKCRldmVudCwgJ1dhcm5pbmdzJylcIiB0b29sdGlwPVwie3t3YXJuaW5nQ291bnR9fSB3YXJuaW5nKHMpXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cbiAgICA8c3BhbiBjbGFzcz1cIndhcm5pbmcgZmEtc3RhY2sgZmEtbGdcIj4gXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uIGZhLXN0YWNrLTF4IGZhLWludmVyc2VcIj48L2k+XG4gICAgPC9zcGFuPlxuICA8L2E+XG4gIDxhICpuZ0lmPVwicGF0Y2hDb3VudCA+IDBcIiBjbGFzcz1cInBhdGNoXCIgKGNsaWNrKT1cIm9uQmFkZ2VDbGljaygkZXZlbnQsICdQYXRjaGVzJylcIiB0b29sdGlwPVwie3twYXRjaENvdW50fX0gY29uZmxpY3RzKHMpXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cbiAgICA8c3BhbiBjbGFzcz1cInBhdGNoIGZhLXN0YWNrIGZhLWxnXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWJvbHQgZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvYT5cbjwvZGl2PiJdfQ==