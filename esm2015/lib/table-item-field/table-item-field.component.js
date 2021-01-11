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
import { AbstractFieldComponent } from '../abstract-field';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
const _c0 = ["table-item-field", ""];
function TableItemFieldComponent_td_0_add_new_element_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "add-new-element-button", 5);
} if (rf & 2) {
    const key_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("path", ctx_r3.getPathForChild(key_r1))("schema", ctx_r3.schema.properties[key_r1]);
} }
function TableItemFieldComponent_td_0_patch_actions_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "patch-actions", 6);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("patch", ctx_r4.removeJsonPatch);
} }
function TableItemFieldComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 1);
    i0.ɵɵelement(1, "any-type-field", 2);
    i0.ɵɵpipe(2, "selfOrEmpty");
    i0.ɵɵtemplate(3, TableItemFieldComponent_td_0_add_new_element_button_3_Template, 1, 2, "add-new-element-button", 3);
    i0.ɵɵtemplate(4, TableItemFieldComponent_td_0_patch_actions_4_Template, 1, 1, "patch-actions", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const isFirst_r2 = ctx.first;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r0.schema.properties[key_r1].columnWidth + "%");
    i0.ɵɵproperty("ngClass", isFirst_r2 ? ctx_r0.redLeftBorderClass : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", i0.ɵɵpipeBind2(2, 8, ctx_r0.value.get(key_r1), ctx_r0.schema.properties[key_r1]))("schema", ctx_r0.schema.properties[key_r1])("path", ctx_r0.getPathForChild(key_r1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.schema.properties[key_r1].type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.removeJsonPatch && isFirst_r2);
} }
const _c1 = ["*"];
export class TableItemFieldComponent extends AbstractFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
    }
}
TableItemFieldComponent.ɵfac = function TableItemFieldComponent_Factory(t) { return new (t || TableItemFieldComponent)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TableItemFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableItemFieldComponent, selectors: [["", "table-item-field", ""]], inputs: { value: "value", schema: "schema", path: "path", keys: "keys" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[3, "width", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngClass"], [3, "value", "schema", "path"], [3, "path", "schema", 4, "ngIf"], [3, "patch", 4, "ngIf"], [3, "path", "schema"], [3, "patch"]], template: function TableItemFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, TableItemFieldComponent_td_0_Template, 5, 11, "td", 0);
        i0.ɵɵprojection(1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.keys)("ngForTrackBy", ctx.trackByElement);
    } }, styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableItemFieldComponent, [{
        type: Component,
        args: [{
                // Defined as attribute selector not to break table > tr > td html structure
                // tslint:disable-next-line
                selector: '[table-item-field]',
                styleUrls: [
                    './table-item-field.component.scss'
                ],
                templateUrl: './table-item-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.JsonStoreService }, { type: i1.PathUtilService }, { type: i0.ChangeDetectorRef }]; }, { value: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }], keys: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaXRlbS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvdGFibGUtaXRlbS1maWVsZC90YWJsZS1pdGVtLWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi90YWJsZS1pdGVtLWZpZWxkL3RhYmxlLWl0ZW0tZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsdUJBQXVCLEVBR3hCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztJQzdCekQsNENBQ3lCOzs7O0lBRCtDLHFEQUE2Qiw0Q0FBQTs7O0lBRXJHLG1DQUE0Rjs7O0lBQTFDLDhDQUF5Qjs7O0lBTjdFLDZCQUVFO0lBQUEsb0NBQ2lCOztJQUNqQixtSEFDQTtJQUNBLGlHQUE0RTtJQUM5RSxpQkFBSzs7Ozs7SUFQa0UsMkVBQXdEO0lBQzdILHFFQUE2QztJQUM3QixlQUE2RDtJQUE3RCx3R0FBNkQsNENBQUEsd0NBQUE7SUFFckQsZUFBK0M7SUFBL0Msd0VBQStDO0lBRXhELGVBQWtDO0lBQWxDLDJEQUFrQzs7O0FEOENuRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsc0JBQXNCO0lBT2pFLFlBQW1CLGlCQUFvQyxFQUM5QyxlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBQzNDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFML0Usc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM5QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUU3QyxDQUFDOzs4RkFiVSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs7UUNwRHBDLHVFQUVFO1FBT0Ysa0JBQVk7O1FBVFIsa0NBQWtFLG9DQUFBOztrRERvRHpELHVCQUF1QjtjQVZuQyxTQUFTO2VBQUM7Z0JBQ1QsNEVBQTRFO2dCQUM1RSwyQkFBMkI7Z0JBQzNCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFNBQVMsRUFBRTtvQkFDVCxtQ0FBbUM7aUJBQ3BDO2dCQUNELFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOytMQUdVLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdCwgU2V0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IHsgQWJzdHJhY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWZpZWxkJztcbmltcG9ydCB7XG4gIEFwcEdsb2JhbHNTZXJ2aWNlLFxuICBKc29uU3RvcmVTZXJ2aWNlLFxuICBQYXRoVXRpbFNlcnZpY2UsXG4gIFByb2JsZW1zU2VydmljZVxufSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIERlZmluZWQgYXMgYXR0cmlidXRlIHNlbGVjdG9yIG5vdCB0byBicmVhayB0YWJsZSA+IHRyID4gdGQgaHRtbCBzdHJ1Y3R1cmVcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHNlbGVjdG9yOiAnW3RhYmxlLWl0ZW0tZmllbGRdJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vdGFibGUtaXRlbS1maWVsZC5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWl0ZW0tZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUl0ZW1GaWVsZENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0RmllbGRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBNYXA8c3RyaW5nLCBhbnk+O1xuICBASW5wdXQoKSBzY2hlbWE6IEpTT05TY2hlbWE7XG4gIEBJbnB1dCgpIHBhdGg6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIGtleXM6IFNldDxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBHbG9iYWxzU2VydmljZTogQXBwR2xvYmFsc1NlcnZpY2UsXG4gICAgcHVibGljIHByb2JsZW1zU2VydmljZTogUHJvYmxlbXNTZXJ2aWNlLFxuICAgIHB1YmxpYyBqc29uU3RvcmVTZXJ2aWNlOiBKc29uU3RvcmVTZXJ2aWNlLFxuICAgIHB1YmxpYyBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSxcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoYXBwR2xvYmFsc1NlcnZpY2UsIHByb2JsZW1zU2VydmljZSwgcGF0aFV0aWxTZXJ2aWNlLCBjaGFuZ2VEZXRlY3RvclJlZiwganNvblN0b3JlU2VydmljZSk7XG4gIH1cbn1cbiIsIjx0ZCAqbmdGb3I9XCJsZXQga2V5IG9mIGtleXM7IHRyYWNrQnk6dHJhY2tCeUVsZW1lbnQ7IGZpcnN0IGFzIGlzRmlyc3RcIiBbc3R5bGUud2lkdGhdPVwic2NoZW1hLnByb3BlcnRpZXNba2V5XS5jb2x1bW5XaWR0aCArICclJ1wiXG4gIFtuZ0NsYXNzXT1cImlzRmlyc3QgPyByZWRMZWZ0Qm9yZGVyQ2xhc3MgOiAnJ1wiPlxuICA8YW55LXR5cGUtZmllbGQgW3ZhbHVlXT1cInZhbHVlLmdldChrZXkpIHwgc2VsZk9yRW1wdHk6c2NoZW1hLnByb3BlcnRpZXNba2V5XVwiIFtzY2hlbWFdPVwic2NoZW1hLnByb3BlcnRpZXNba2V5XVwiIFtwYXRoXT1cImdldFBhdGhGb3JDaGlsZChrZXkpXCI+XG4gIDwvYW55LXR5cGUtZmllbGQ+XG4gIDxhZGQtbmV3LWVsZW1lbnQtYnV0dG9uICpuZ0lmPVwic2NoZW1hLnByb3BlcnRpZXNba2V5XS50eXBlID09PSAnYXJyYXknXCIgW3BhdGhdPVwiZ2V0UGF0aEZvckNoaWxkKGtleSlcIiBbc2NoZW1hXT1cInNjaGVtYS5wcm9wZXJ0aWVzW2tleV1cIj5cbiAgPC9hZGQtbmV3LWVsZW1lbnQtYnV0dG9uPlxuICA8cGF0Y2gtYWN0aW9ucyAqbmdJZj1cInJlbW92ZUpzb25QYXRjaCAmJiBpc0ZpcnN0XCIgW3BhdGNoXT1cInJlbW92ZUpzb25QYXRjaFwiPjwvcGF0Y2gtYWN0aW9ucz5cbjwvdGQ+XG48IS0tIHRkIGVsZW1lbnQgd2l0aCBsaXN0LWFjdGlvbi1ncm91cCAodXAvZG93biBhbmQgZGVsZXRlIGJ1dHRvbnMpIC0tPlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19