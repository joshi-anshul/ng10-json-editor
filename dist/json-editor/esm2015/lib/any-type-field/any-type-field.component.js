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
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../table-list-field/table-list-field.component";
import * as i3 from "../complex-list-field/complex-list-field.component";
import * as i4 from "../primitive-list-field/primitive-list-field.component";
import * as i5 from "../object-field/object-field.component";
import * as i6 from "../ref-field/ref-field.component";
import * as i7 from "../primitive-field/primitive-field.component";
function AnyTypeFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "table-list-field", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("values", ctx_r0.value)("schema", ctx_r0.schema)("path", ctx_r0.path);
} }
function AnyTypeFieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "complex-list-field", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("values", ctx_r1.value)("schema", ctx_r1.schema)("path", ctx_r1.path);
} }
function AnyTypeFieldComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "primitive-list-field", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("values", ctx_r2.value)("schema", ctx_r2.schema)("path", ctx_r2.path);
} }
function AnyTypeFieldComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "object-field", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r3.value)("schema", ctx_r3.schema)("path", ctx_r3.path);
} }
function AnyTypeFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "ref-field", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r4.value)("schema", ctx_r4.schema)("path", ctx_r4.path);
} }
function AnyTypeFieldComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "primitive-field", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r5.value)("schema", ctx_r5.schema)("path", ctx_r5.path);
} }
/**
 * AnyFieldComponent
 *
 * This is a dummy component that has no logic, just passes @Input to its child and
 * propagates its child's output to its parent.
 *
 * IMPORTANT:
 * On the other hand it has smart template which has logic to decide which type of
 * component to use according to schema.
 */
export class AnyTypeFieldComponent {
}
AnyTypeFieldComponent.ɵfac = function AnyTypeFieldComponent_Factory(t) { return new (t || AnyTypeFieldComponent)(); };
AnyTypeFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnyTypeFieldComponent, selectors: [["any-type-field"]], inputs: { schema: "schema", path: "path", value: "value" }, decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "values", "schema", "path"], [3, "value", "schema", "path"]], template: function AnyTypeFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AnyTypeFieldComponent_div_1_Template, 2, 3, "div", 1);
        i0.ɵɵtemplate(2, AnyTypeFieldComponent_div_2_Template, 2, 3, "div", 1);
        i0.ɵɵtemplate(3, AnyTypeFieldComponent_div_3_Template, 2, 3, "div", 1);
        i0.ɵɵtemplate(4, AnyTypeFieldComponent_div_4_Template, 2, 3, "div", 1);
        i0.ɵɵtemplate(5, AnyTypeFieldComponent_div_5_Template, 2, 3, "div", 1);
        i0.ɵɵtemplate(6, AnyTypeFieldComponent_div_6_Template, 2, 3, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.schema.componentType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "table-list");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "complex-list");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "primitive-list");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "object");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "ref");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.TableListFieldComponent, i3.ComplexListFieldComponent, i4.PrimitiveListFieldComponent, i5.ObjectFieldComponent, i6.RefFieldComponent, i7.PrimitiveFieldComponent], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnyTypeFieldComponent, [{
        type: Component,
        args: [{
                selector: 'any-type-field',
                styleUrls: [
                    './any-type-field.component.scss'
                ],
                templateUrl: './any-type-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { schema: [{
            type: Input
        }], path: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55LXR5cGUtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2FueS10eXBlLWZpZWxkL2FueS10eXBlLWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi9hbnktdHlwZS1maWVsZC9hbnktdHlwZS1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUN6QnJCLDJCQUNFO0lBQUEsc0NBQXNGO0lBQ3hGLGlCQUFNOzs7SUFEYyxlQUFnQjtJQUFoQixxQ0FBZ0IseUJBQUEscUJBQUE7OztJQUVwQywyQkFDRTtJQUFBLHdDQUEwRjtJQUM1RixpQkFBTTs7O0lBRGdCLGVBQWdCO0lBQWhCLHFDQUFnQix5QkFBQSxxQkFBQTs7O0lBRXRDLDJCQUNFO0lBQUEsMENBQThGO0lBQ2hHLGlCQUFNOzs7SUFEa0IsZUFBZ0I7SUFBaEIscUNBQWdCLHlCQUFBLHFCQUFBOzs7SUFFeEMsMkJBQ0U7SUFBQSxrQ0FBNkU7SUFDL0UsaUJBQU07OztJQURVLGVBQWU7SUFBZixvQ0FBZSx5QkFBQSxxQkFBQTs7O0lBRS9CLDJCQUNFO0lBQUEsK0JBQXVFO0lBQ3pFLGlCQUFNOzs7SUFETyxlQUFlO0lBQWYsb0NBQWUseUJBQUEscUJBQUE7OztJQUU1QiwyQkFDRTtJQUFBLHFDQUFtRjtJQUNyRixpQkFBTTs7O0lBRGEsZUFBZTtJQUFmLG9DQUFlLHlCQUFBLHFCQUFBOztBRGFwQzs7Ozs7Ozs7O0dBU0c7QUFTSCxNQUFNLE9BQU8scUJBQXFCOzswRkFBckIscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNoRGxDLDhCQUNFO1FBQUEsc0VBQ0U7UUFFRixzRUFDRTtRQUVGLHNFQUNFO1FBRUYsc0VBQ0U7UUFFRixzRUFDRTtRQUVGLHNFQUNFO1FBRUosaUJBQU07O1FBbkJELG1EQUFpQztRQUMvQixlQUE0QjtRQUE1QiwyQ0FBNEI7UUFHNUIsZUFBOEI7UUFBOUIsNkNBQThCO1FBRzlCLGVBQWdDO1FBQWhDLCtDQUFnQztRQUdoQyxlQUF3QjtRQUF4Qix1Q0FBd0I7UUFHeEIsZUFBcUI7UUFBckIsb0NBQXFCOztrRERtQ2YscUJBQXFCO2NBUmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUU7b0JBQ1QsaUNBQWlDO2lCQUNsQztnQkFDRCxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEFueUZpZWxkQ29tcG9uZW50XG4gKlxuICogVGhpcyBpcyBhIGR1bW15IGNvbXBvbmVudCB0aGF0IGhhcyBubyBsb2dpYywganVzdCBwYXNzZXMgQElucHV0IHRvIGl0cyBjaGlsZCBhbmRcbiAqIHByb3BhZ2F0ZXMgaXRzIGNoaWxkJ3Mgb3V0cHV0IHRvIGl0cyBwYXJlbnQuXG4gKlxuICogSU1QT1JUQU5UOlxuICogT24gdGhlIG90aGVyIGhhbmQgaXQgaGFzIHNtYXJ0IHRlbXBsYXRlIHdoaWNoIGhhcyBsb2dpYyB0byBkZWNpZGUgd2hpY2ggdHlwZSBvZlxuICogY29tcG9uZW50IHRvIHVzZSBhY2NvcmRpbmcgdG8gc2NoZW1hLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbnktdHlwZS1maWVsZCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2FueS10eXBlLWZpZWxkLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vYW55LXR5cGUtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBbnlUeXBlRmllbGRDb21wb25lbnQge1xuICBASW5wdXQoKSBzY2hlbWE6IEpTT05TY2hlbWE7XG4gIEBJbnB1dCgpIHBhdGg6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG59XG4iLCI8ZGl2IFtuZ1N3aXRjaF09XCJzY2hlbWEuY29tcG9uZW50VHlwZVwiPlxuICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndGFibGUtbGlzdCdcIj5cbiAgICA8dGFibGUtbGlzdC1maWVsZCBbdmFsdWVzXT1cInZhbHVlXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbcGF0aF09XCJwYXRoXCI+PC90YWJsZS1saXN0LWZpZWxkPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NvbXBsZXgtbGlzdCdcIj5cbiAgICA8Y29tcGxleC1saXN0LWZpZWxkIFt2YWx1ZXNdPVwidmFsdWVcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFtwYXRoXT1cInBhdGhcIj48L2NvbXBsZXgtbGlzdC1maWVsZD5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidwcmltaXRpdmUtbGlzdCdcIj5cbiAgICA8cHJpbWl0aXZlLWxpc3QtZmllbGQgW3ZhbHVlc109XCJ2YWx1ZVwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3BhdGhdPVwicGF0aFwiPjwvcHJpbWl0aXZlLWxpc3QtZmllbGQ+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInb2JqZWN0J1wiPlxuICAgIDxvYmplY3QtZmllbGQgW3ZhbHVlXT1cInZhbHVlXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbcGF0aF09XCJwYXRoXCI+PC9vYmplY3QtZmllbGQ+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIncmVmJ1wiPlxuICAgIDxyZWYtZmllbGQgW3ZhbHVlXT1cInZhbHVlXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbcGF0aF09XCJwYXRoXCI+PC9yZWYtZmllbGQ+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgPHByaW1pdGl2ZS1maWVsZCBbdmFsdWVdPVwidmFsdWVcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFtwYXRoXT1cInBhdGhcIj48L3ByaW1pdGl2ZS1maWVsZD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==