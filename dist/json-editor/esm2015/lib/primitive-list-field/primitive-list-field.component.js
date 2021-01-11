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
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractListFieldComponent } from '../abstract-list-field';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
function PrimitiveListFieldComponent_tr_3_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "list-action-group", 9);
    i0.ɵɵlistener("onMove", function PrimitiveListFieldComponent_tr_3_td_3_Template_list_action_group_onMove_1_listener($event) { i0.ɵɵrestoreView(_r9); const i_r5 = i0.ɵɵnextContext().index; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.moveElement(i_r5, $event); })("onDelete", function PrimitiveListFieldComponent_tr_3_td_3_Template_list_action_group_onDelete_1_listener() { i0.ɵɵrestoreView(_r9); const i_r5 = i0.ɵɵnextContext().index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.deleteElement(i_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("sortable", ctx_r6.schema.sortable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("canMove", ctx_r6.schema.sortable)("isDisabled", ctx_r6.disabled);
} }
function PrimitiveListFieldComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelement(2, "any-type-field", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PrimitiveListFieldComponent_tr_3_td_3_Template, 2, 4, "td", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", value_r4)("schema", ctx_r0.schema.items)("path", ctx_r0.getPathForChild(i_r5));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.values.size > 0);
} }
function PrimitiveListFieldComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "patch-actions", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r1.removeJsonPatch);
} }
function PrimitiveListFieldComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "add-or-replace-patch", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patch_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", patch_r12);
} }
function PrimitiveListFieldComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "add-or-replace-patch", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r3.replaceJsonPatches[0]);
} }
export class PrimitiveListFieldComponent extends AbstractListFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
    }
}
PrimitiveListFieldComponent.ɵfac = function PrimitiveListFieldComponent_Factory(t) { return new (t || PrimitiveListFieldComponent)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PrimitiveListFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PrimitiveListFieldComponent, selectors: [["primitive-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 10, consts: [[3, "id", "ngClass"], [1, "wide"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "value", "schema", "path"], ["class", "button-holder", 3, "sortable", 4, "ngIf"], [1, "button-holder"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [3, "patch"]], template: function PrimitiveListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "table", 2);
        i0.ɵɵtemplate(3, PrimitiveListFieldComponent_tr_3_Template, 4, 4, "tr", 3);
        i0.ɵɵpipe(4, "selfOrEmpty");
        i0.ɵɵtemplate(5, PrimitiveListFieldComponent_tr_5_Template, 2, 1, "tr", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "table", 2);
        i0.ɵɵtemplate(7, PrimitiveListFieldComponent_tr_7_Template, 2, 1, "tr", 5);
        i0.ɵɵtemplate(8, PrimitiveListFieldComponent_tr_8_Template, 2, 1, "tr", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 7, ctx.values, ctx.schema))("ngForTrackBy", ctx.trackByIndex);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, styles: ["td[_ngcontent-%COMP%]{padding:0!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PrimitiveListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'primitive-list-field',
                styleUrls: [
                    './primitive-list-field.component.scss'
                ],
                templateUrl: './primitive-list-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.JsonStoreService }, { type: i1.PathUtilService }, { type: i0.ChangeDetectorRef }]; }, { values: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLWxpc3QtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3ByaW1pdGl2ZS1saXN0LWZpZWxkL3ByaW1pdGl2ZS1saXN0LWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi9wcmltaXRpdmUtbGlzdC1maWVsZC9wcmltaXRpdmUtbGlzdC1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0lDbEI1RCw2QkFDRTtJQUFBLDRDQUEySjtJQUF4SSwwUUFBaUMsdVBBQUE7SUFBbUYsaUJBQW9CO0lBQzdKLGlCQUFLOzs7SUFGNkMsa0RBQWtDO0lBQ0MsZUFBMkI7SUFBM0IsZ0RBQTJCLCtCQUFBOzs7SUFMbEgsMEJBQ0U7SUFBQSwwQkFDRTtJQUFBLG9DQUFxRztJQUN2RyxpQkFBSztJQUNMLCtFQUNFO0lBRUosaUJBQUs7Ozs7O0lBTGUsZUFBZTtJQUFmLGdDQUFlLCtCQUFBLHNDQUFBO0lBRTdCLGVBQXVCO0lBQXZCLDZDQUF1Qjs7O0lBSTdCLDBCQUNFO0lBQUEsb0NBQXlEO0lBQzNELGlCQUFLOzs7SUFEWSxlQUF5QjtJQUF6Qiw4Q0FBeUI7OztJQUkxQywwQkFDRTtJQUFBLDJDQUE2RDtJQUMvRCxpQkFBSzs7O0lBRG1CLGVBQWU7SUFBZixpQ0FBZTs7O0lBRXZDLDBCQUNFO0lBQUEsMkNBQTZFO0lBQy9FLGlCQUFLOzs7SUFEbUIsZUFBK0I7SUFBL0Isb0RBQStCOztBRGlCN0QsTUFBTSxPQUFPLDJCQUE0QixTQUFRLDBCQUEwQjtJQUt6RSxZQUFtQixpQkFBb0MsRUFDOUMsZUFBZ0MsRUFDaEMsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLGlCQUFvQztRQUMzQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBTC9FLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDOUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFFN0MsQ0FBQzs7c0dBWFUsMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNyQ3hDLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSxnQ0FDRTtRQUFBLDBFQUNFOztRQU9GLDBFQUNFO1FBRUosaUJBQVE7UUFDUixnQ0FDRTtRQUFBLDBFQUNFO1FBRUYsMEVBQ0U7UUFFSixpQkFBUTtRQUNWLGlCQUFNO1FBQ1IsaUJBQU07O1FBeEJELG1DQUFpQixtQ0FBQTtRQUdaLGVBQXNGO1FBQXRGLHNFQUFzRixrQ0FBQTtRQVF0RixlQUF1QjtRQUF2QiwwQ0FBdUI7UUFLdkIsZUFBb0M7UUFBcEMsNENBQW9DO1FBR3BDLGVBQW1EO1FBQW5ELDBFQUFtRDs7a0REa0JoRCwyQkFBMkI7Y0FSdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFNBQVMsRUFBRTtvQkFDVCx1Q0FBdUM7aUJBQ3hDO2dCQUNELFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOytMQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdExpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWxpc3QtZmllbGQnO1xuaW1wb3J0IHsgQXBwR2xvYmFsc1NlcnZpY2UsIEpzb25TdG9yZVNlcnZpY2UsIFBhdGhVdGlsU2VydmljZSwgUHJvYmxlbXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzJztcbmltcG9ydCB7IEpTT05TY2hlbWEgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaW1pdGl2ZS1saXN0LWZpZWxkJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vcHJpbWl0aXZlLWxpc3QtZmllbGQuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmltaXRpdmUtbGlzdC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZUxpc3RGaWVsZENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGlzdEZpZWxkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmFsdWVzOiBMaXN0PGFueT47XG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTlNjaGVtYTtcbiAgQElucHV0KCkgcGF0aDogQXJyYXk8YW55PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwR2xvYmFsc1NlcnZpY2U6IEFwcEdsb2JhbHNTZXJ2aWNlLFxuICAgIHB1YmxpYyBwcm9ibGVtc1NlcnZpY2U6IFByb2JsZW1zU2VydmljZSxcbiAgICBwdWJsaWMganNvblN0b3JlU2VydmljZTogSnNvblN0b3JlU2VydmljZSxcbiAgICBwdWJsaWMgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGFwcEdsb2JhbHNTZXJ2aWNlLCBwcm9ibGVtc1NlcnZpY2UsIGpzb25TdG9yZVNlcnZpY2UsIHBhdGhVdGlsU2VydmljZSwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbn1cbiIsIjxkaXYgW2lkXT1cInBhdGhTdHJpbmdcIiBbbmdDbGFzc109XCJyZWRMZWZ0Qm9yZGVyQ2xhc3NcIj5cbiAgPGRpdiBjbGFzcz1cIndpZGVcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgPHRyICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB2YWx1ZXMgfCBzZWxmT3JFbXB0eTpzY2hlbWE7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6dHJhY2tCeUluZGV4XCI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8YW55LXR5cGUtZmllbGQgW3ZhbHVlXT1cInZhbHVlXCIgW3NjaGVtYV09XCJzY2hlbWEuaXRlbXNcIiBbcGF0aF09XCJnZXRQYXRoRm9yQ2hpbGQoaSlcIj48L2FueS10eXBlLWZpZWxkPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgKm5nSWY9XCJ2YWx1ZXMuc2l6ZSA+IDBcIiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIiBbY2xhc3Muc29ydGFibGVdPVwic2NoZW1hLnNvcnRhYmxlXCI+XG4gICAgICAgICAgPGxpc3QtYWN0aW9uLWdyb3VwIChvbk1vdmUpPVwibW92ZUVsZW1lbnQoaSwgJGV2ZW50KVwiIChvbkRlbGV0ZSk9XCJkZWxldGVFbGVtZW50KGkpXCIgW2Nhbk1vdmVdPVwic2NoZW1hLnNvcnRhYmxlXCIgW2lzRGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2xpc3QtYWN0aW9uLWdyb3VwPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciAqbmdJZj1cInJlbW92ZUpzb25QYXRjaFwiPlxuICAgICAgICA8cGF0Y2gtYWN0aW9ucyBbcGF0Y2hdPVwicmVtb3ZlSnNvblBhdGNoXCI+PC9wYXRjaC1hY3Rpb25zPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICA8dHIgKm5nRm9yPVwibGV0IHBhdGNoIG9mIGFkZEpzb25QYXRjaGVzXCI+XG4gICAgICAgIDxhZGQtb3ItcmVwbGFjZS1wYXRjaCBbcGF0Y2hdPVwicGF0Y2hcIj48L2FkZC1vci1yZXBsYWNlLXBhdGNoPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciAqbmdJZj1cInJlcGxhY2VKc29uUGF0Y2hlcyAmJiByZXBsYWNlSnNvblBhdGNoZXNbMF1cIj5cbiAgICAgICAgPGFkZC1vci1yZXBsYWNlLXBhdGNoIFtwYXRjaF09XCJyZXBsYWNlSnNvblBhdGNoZXNbMF1cIj48L2FkZC1vci1yZXBsYWNlLXBhdGNoPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==