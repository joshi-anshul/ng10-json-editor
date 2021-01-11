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
import { Set } from 'immutable';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/dropdown";
import * as i4 from "@angular/forms";
import * as i5 from "../shared/pipes/sort-alphabetically.pipe";
import * as i6 from "../shared/pipes/filter-by-expression.pipe";
function AddFieldDropdownComponent_div_0_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵlistener("click", function AddFieldDropdownComponent_div_0_ul_3_li_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r5); const key_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(3); return ctx_r4.onFieldSelect(key_r3); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r3);
} }
function AddFieldDropdownComponent_div_0_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "input", 6);
    i0.ɵɵlistener("ngModelChange", function AddFieldDropdownComponent_div_0_ul_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.expression = $event; })("click", function AddFieldDropdownComponent_div_0_ul_3_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r7); return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "li", 7);
    i0.ɵɵtemplate(4, AddFieldDropdownComponent_div_0_ul_3_li_4_Template, 3, 1, "li", 8);
    i0.ɵɵpipe(5, "sortAlphabetically");
    i0.ɵɵpipe(6, "filterByExpression");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.expression);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 2, i0.ɵɵpipeBind2(6, 4, ctx_r1.addableKeys, ctx_r1.expression)));
} }
function AddFieldDropdownComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("onShown", function AddFieldDropdownComponent_div_0_Template_div_onShown_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onDropdownShown(); });
    i0.ɵɵelementStart(1, "button", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AddFieldDropdownComponent_div_0_ul_3_Template, 7, 7, "ul", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("isDisabled", ctx_r0.isDisabled);
} }
const _c0 = ["*"];
export class AddFieldDropdownComponent {
    constructor(elementRef, domUtilService, keysStoreService) {
        this.elementRef = elementRef;
        this.domUtilService = domUtilService;
        this.keysStoreService = keysStoreService;
        this.expression = '';
        this.hidden = false;
    }
    ngOnChanges(changes) {
        if (changes['schema'] || changes['fields']) {
            this.addableKeys = Set.fromKeys(this.schema.properties)
                .subtract(this.fields)
                .filter(field => !this.schema.properties[field].hidden);
            this.hidden = this.addableKeys.size === 0;
        }
    }
    onDropdownShown() {
        setTimeout(() => this.domUtilService.focusFirstInputChildByElement(this.elementRef.nativeElement));
    }
    onFieldSelect(field) {
        const newFieldPathString = this.keysStoreService.addKey(this.pathString, field, this.schema);
        this.domUtilService.focusAndSelectFirstEditableChildById(newFieldPathString);
        this.expression = '';
    }
}
AddFieldDropdownComponent.ɵfac = function AddFieldDropdownComponent_Factory(t) { return new (t || AddFieldDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.KeysStoreService)); };
AddFieldDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddFieldDropdownComponent, selectors: [["add-field-dropdown"]], inputs: { schema: "schema", fields: "fields", pathString: "pathString", isDisabled: "isDisabled" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "btn-group add-field-dropdown-container", "dropdown", "", "keyboardNav", "true", 3, "isDisabled", "onShown", 4, "ngIf"], ["dropdown", "", "keyboardNav", "true", 1, "btn-group", "add-field-dropdown-container", 3, "isDisabled", "onShown"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-add-field-dropdown"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], [1, "dropdown-filter-container"], ["placeholder", "filter", 3, "ngModel", "ngModelChange", "click"], [1, "divider", "dropdown-divider"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]], template: function AddFieldDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, AddFieldDropdownComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.hidden);
    } }, directives: [i2.NgIf, i3.BsDropdownDirective, i3.BsDropdownToggleDirective, i3.BsDropdownMenuDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i2.NgForOf], pipes: [i5.SortAlphabeticallyPipe, i6.FilterByExpressionPipe], styles: [".btn-add-field-dropdown[_ngcontent-%COMP%]{background:transparent;border:0;color:#2f4f4f;float:left;font-size:11px;font-weight:700;line-height:1;margin-bottom:2px;opacity:.4;padding:0 3px;text-shadow:0 1px 0 #fff}.btn-add-field-dropdown[_ngcontent-%COMP%]:hover{color:#00f;opacity:.6}.dropdown-filter-container[_ngcontent-%COMP%]{padding:0 3px}.dropdown-filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddFieldDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'add-field-dropdown',
                styleUrls: [
                    './add-field-dropdown.component.scss'
                ],
                templateUrl: './add-field-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DomUtilService }, { type: i1.KeysStoreService }]; }, { schema: [{
            type: Input
        }], fields: [{
            type: Input
        }], pathString: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpZWxkLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hZGQtZmllbGQtZHJvcGRvd24vYWRkLWZpZWxkLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsImxpYi9hZGQtZmllbGQtZHJvcGRvd24vYWRkLWZpZWxkLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE4RCx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7O0lDZDVCLDBCQUNFO0lBQUEsNEJBQWdGO0lBQTdCLDBPQUE0QjtJQUFDLFlBQU87SUFBQSxpQkFBSTtJQUM3RixpQkFBSzs7O0lBRDZFLGVBQU87SUFBUCw0QkFBTzs7OztJQU4zRiw2QkFDRTtJQUFBLDZCQUNFO0lBQUEsZ0NBQ0Y7SUFEUywrTkFBd0IsZ0lBQStCLHdCQUF3QixJQUF2RDtJQUEvQixpQkFDRjtJQUFBLGlCQUFLO0lBQ0wsd0JBQTBDO0lBQzFDLG1GQUNFOzs7SUFFSixpQkFBSzs7O0lBTk0sZUFBd0I7SUFBeEIsMkNBQXdCO0lBRzdCLGVBQW9GO0lBQXBGLDJHQUFvRjs7OztJQVQ1Riw4QkFDRTtJQUR3SCxvTUFBNkI7SUFDckosaUNBQ0c7SUFBQSxrQkFBWTtJQUNmLGlCQUFTO0lBQ1QsOEVBQ0U7SUFRSixpQkFBTTs7O0lBYjBGLDhDQUF5Qjs7O0FEb0N6SCxNQUFNLE9BQU8seUJBQXlCO0lBV3BDLFlBQW9CLFVBQXNCLEVBQ2hDLGNBQThCLEVBQzlCLGdCQUFrQztRQUZ4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTDVDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUlpQyxDQUFDO0lBRWpELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2lCQUNwRCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxjQUFjLENBQUMsb0NBQW9DLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOztrR0FqQ1UseUJBQXlCOzhEQUF6Qix5QkFBeUI7O1FDcEN0QywwRUFDRTs7UUFERyxrQ0FBZTs7a0REb0NQLHlCQUF5QjtjQVJyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsU0FBUyxFQUFFO29CQUNULHFDQUFxQztpQkFDdEM7Z0JBQ0QsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7eUhBR1UsTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7IERvbVV0aWxTZXJ2aWNlLCBLZXlzU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzJztcbmltcG9ydCB7IEpTT05TY2hlbWEgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkZC1maWVsZC1kcm9wZG93bicsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2FkZC1maWVsZC1kcm9wZG93bi5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1maWVsZC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFkZEZpZWxkRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTlNjaGVtYTtcbiAgQElucHV0KCkgZmllbGRzOiBTZXQ8c3RyaW5nPjtcbiAgQElucHV0KCkgcGF0aFN0cmluZzogc3RyaW5nO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIGFkZGFibGVLZXlzOiBhbnk7XG4gIGV4cHJlc3Npb24gPSAnJztcbiAgaGlkZGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZG9tVXRpbFNlcnZpY2U6IERvbVV0aWxTZXJ2aWNlLFxuICAgIHByaXZhdGUga2V5c1N0b3JlU2VydmljZTogS2V5c1N0b3JlU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydzY2hlbWEnXSB8fCBjaGFuZ2VzWydmaWVsZHMnXSkge1xuICAgICAgdGhpcy5hZGRhYmxlS2V5cyA9IFNldC5mcm9tS2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKVxuICAgICAgICAuc3VidHJhY3QodGhpcy5maWVsZHMpXG4gICAgICAgIC5maWx0ZXIoZmllbGQgPT4gIXRoaXMuc2NoZW1hLnByb3BlcnRpZXNbZmllbGRdLmhpZGRlbik7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRoaXMuYWRkYWJsZUtleXMuc2l6ZSA9PT0gMDtcbiAgICB9XG4gIH1cblxuICBvbkRyb3Bkb3duU2hvd24oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgdGhpcy5kb21VdGlsU2VydmljZS5mb2N1c0ZpcnN0SW5wdXRDaGlsZEJ5RWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xuICB9XG5cbiAgb25GaWVsZFNlbGVjdChmaWVsZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3RmllbGRQYXRoU3RyaW5nID0gdGhpcy5rZXlzU3RvcmVTZXJ2aWNlLmFkZEtleSh0aGlzLnBhdGhTdHJpbmcsIGZpZWxkLCB0aGlzLnNjaGVtYSk7XG4gICAgdGhpcy5kb21VdGlsU2VydmljZS5mb2N1c0FuZFNlbGVjdEZpcnN0RWRpdGFibGVDaGlsZEJ5SWQobmV3RmllbGRQYXRoU3RyaW5nKTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSAnJztcbiAgfVxuXG59XG4iLCI8ZGl2ICpuZ0lmPVwiIWhpZGRlblwiIGNsYXNzPVwiYnRuLWdyb3VwIGFkZC1maWVsZC1kcm9wZG93bi1jb250YWluZXJcIiBkcm9wZG93biBrZXlib2FyZE5hdj1cInRydWVcIiBbaXNEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCIgKG9uU2hvd24pPVwib25Ecm9wZG93blNob3duKClcIj5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWFkZC1maWVsZC1kcm9wZG93blwiIGRyb3Bkb3duVG9nZ2xlPlxuICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvYnV0dG9uPlxuICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgKmRyb3Bkb3duTWVudT5cbiAgICA8bGkgY2xhc3M9XCJkcm9wZG93bi1maWx0ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJleHByZXNzaW9uXCIgcGxhY2Vob2xkZXI9XCJmaWx0ZXJcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgPC9saT5cbiAgICA8bGkgY2xhc3M9XCJkaXZpZGVyIGRyb3Bkb3duLWRpdmlkZXJcIj48L2xpPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQga2V5IG9mIGFkZGFibGVLZXlzIHwgZmlsdGVyQnlFeHByZXNzaW9uOmV4cHJlc3Npb24gfCBzb3J0QWxwaGFiZXRpY2FsbHlcIj5cbiAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwib25GaWVsZFNlbGVjdChrZXkpXCI+e3trZXl9fTwvYT5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY+Il19