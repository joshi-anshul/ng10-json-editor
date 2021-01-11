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
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { BiDirectionalMap } from 'bi-directional-map/dist';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/dropdown";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../shared/pipes/filter-by-expression.pipe";
const _c0 = ["filterInput"];
const _c1 = ["dropdown"];
function SearchableDropdownComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 7, 8);
    i0.ɵɵlistener("ngModelChange", function SearchableDropdownComponent_input_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.expression = $event; })("keyup.enter", function SearchableDropdownComponent_input_3_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onEnterKeyUp(); })("blur", function SearchableDropdownComponent_input_3_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onInputBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placeholder", ctx_r1.placeholder)("ngModel", ctx_r1.expression);
    i0.ɵɵattribute("data-path", ctx_r1.pathString);
} }
function SearchableDropdownComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵelementStart(1, "a", 12);
    i0.ɵɵlistener("click", function SearchableDropdownComponent_ul_5_li_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r13); const displayValue_r11 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onItemClick(displayValue_r11); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const displayValue_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(displayValue_r11);
} }
function SearchableDropdownComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 9);
    i0.ɵɵtemplate(1, SearchableDropdownComponent_ul_5_li_1_Template, 3, 1, "li", 10);
    i0.ɵɵpipe(2, "filterByExpression");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, ctx_r2.displayValues, ctx_r2.expression));
} }
function SearchableDropdownComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵlistener("focus", function SearchableDropdownComponent_ng_template_6_Template_span_focus_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.showDropdown(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tabindex", ctx_r4.tabIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.biDisplayValueMap.getValue(ctx_r4.value));
} }
export class SearchableDropdownComponent {
    constructor() {
        this.onSelect = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['value']) {
            this.placeholder = this.value || this.placeholder || '';
        }
        if (changes['displayValueMap'] || changes['items']) {
            this.displayValueMap = this.displayValueMap || Object.create(null);
            this.biDisplayValueMap = new BiDirectionalMap(this.displayValueMap);
            // set original value as display value for not configured items.
            this.items
                .filter(item => !this.displayValueMap[item])
                .forEach(item => {
                this.biDisplayValueMap.set(item, item);
            });
            this.displayValues = Array.from(this.biDisplayValueMap.values());
        }
    }
    onItemClick(displayValue) {
        const originalValue = this.biDisplayValueMap.getKey(displayValue);
        this.onSelect.emit(originalValue);
        // only necessary to force closing when selected is item equals to value
        // in which case dropdown doesn't close automatically for some reason
        this.dropdown.hide();
    }
    onEnterKeyUp() {
        if (this.shortcutMap && this.shortcutMap[this.expression]) {
            this.onItemClick(this.shortcutMap[this.expression]);
        }
        this.dropdown.hide();
    }
    showDropdown() {
        this.dropdown.show();
        this.expression = '';
        setTimeout(() => {
            this.filterInputElRef.nativeElement.focus();
        });
    }
    onInputBlur(event) {
        // this avoids closing dropdown when an item is selected
        // so that onItemClick() can be executed properly before closing.
        const relatedTarget = event.relatedTarget;
        if (!relatedTarget || relatedTarget.className !== 'dropdown-item') {
            this.dropdown.hide();
        }
        this.onBlur.emit();
    }
}
SearchableDropdownComponent.ɵfac = function SearchableDropdownComponent_Factory(t) { return new (t || SearchableDropdownComponent)(); };
SearchableDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchableDropdownComponent, selectors: [["searchable-dropdown"]], viewQuery: function SearchableDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filterInputElRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
    } }, inputs: { items: "items", shortcutMap: "shortcutMap", displayValueMap: "displayValueMap", value: "value", pathString: "pathString", tabIndex: "tabIndex", placeholder: "placeholder" }, outputs: { onSelect: "onSelect", onBlur: "onBlur" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 2, consts: [["dropdown", "", "keyboardNav", "true", 1, "btn-group"], ["dropdown", "bs-dropdown"], [1, "toggle-container"], ["class", "value", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf", "ngIfElse"], [1, "fa", "fa-caret-down", 3, "click"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["valueDisplayTemplate", ""], [1, "value", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter", "blur"], ["filterInput", ""], ["role", "menu", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "value", 3, "tabindex", "focus"]], template: function SearchableDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, SearchableDropdownComponent_input_3_Template, 2, 3, "input", 3);
        i0.ɵɵelementStart(4, "i", 4);
        i0.ɵɵlistener("click", function SearchableDropdownComponent_Template_i_click_4_listener() { return ctx.showDropdown(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SearchableDropdownComponent_ul_5_Template, 3, 4, "ul", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, SearchableDropdownComponent_ng_template_6_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        const _r3 = i0.ɵɵreference(7);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", _r0.isOpen)("ngIfElse", _r3);
    } }, directives: [i1.BsDropdownDirective, i2.NgIf, i1.BsDropdownMenuDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i2.NgForOf], pipes: [i4.FilterByExpressionPipe], styles: ["div.btn-group[_ngcontent-%COMP%]{width:100%}.dropdown-menu[_ngcontent-%COMP%]{left:0!important}.toggle-container[_ngcontent-%COMP%]{display:inline-flex;width:100%}.toggle-container[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{flex-grow:1}.dropdown-toggle[_ngcontent-%COMP%]{box-shadow:none!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchableDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'searchable-dropdown',
                styleUrls: [
                    './searchable-dropdown.component.scss'
                ],
                templateUrl: './searchable-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { items: [{
            type: Input
        }], shortcutMap: [{
            type: Input
        }], displayValueMap: [{
            type: Input
        }], value: [{
            type: Input
        }], pathString: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], onSelect: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], filterInputElRef: [{
            type: ViewChild,
            args: ['filterInput']
        }], dropdown: [{
            type: ViewChild,
            args: ['dropdown']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS1kcm9wZG93bi9zZWFyY2hhYmxlLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsImxpYi9zZWFyY2hhYmxlLWRyb3Bkb3duL3NlYXJjaGFibGUtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTix1QkFBdUIsRUFDdkIsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7O0lDL0J2RCxtQ0FFQTtJQURFLDZOQUF3QixpTUFBQSw4TEFBQTtJQUQxQixpQkFFQTs7O0lBRnFILGdEQUEyQiw4QkFBQTtJQUEzRCw4Q0FBK0I7Ozs7SUFLcEgsOEJBQ0U7SUFDQSw2QkFBdUY7SUFBcEMsMlBBQW1DO0lBQUMsWUFBZ0I7SUFBQSxpQkFBSTtJQUM3RyxpQkFBSzs7O0lBRG9GLGVBQWdCO0lBQWhCLHNDQUFnQjs7O0lBSDNHLDZCQUNFO0lBQUEsZ0ZBQ0U7O0lBR0osaUJBQUs7OztJQUpDLGVBQTBFO0lBQTFFLHVGQUEwRTs7OztJQVFoRixnQ0FBbUU7SUFBekIsME1BQXdCO0lBQUMsWUFBcUM7SUFBQSxpQkFBTzs7O0lBQTNGLDBDQUFxQjtJQUEwQixlQUFxQztJQUFyQyxxRUFBcUM7O0FEOEIxRyxNQUFNLE9BQU8sMkJBQTJCO0lBUnhDO1FBcUJZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3RDLFdB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QTJCO2NBUnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixTQUFTLEVBQUU7b0JBQ1Qsc0NBQXNDO2lCQUN2QztnQkFDRCxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFHVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUtJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFFbUIsZ0JBQWdCO2tCQUF6QyxTQUFTO21CQUFDLGFBQWE7WUFDRCxRQUFRO2tCQUE5QixTQUFTO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmlEaXJlY3Rpb25hbE1hcCB9IGZyb20gJ2JpLWRpcmVjdGlvbmFsLW1hcC9kaXN0JztcblxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWFyY2hhYmxlLWRyb3Bkb3duJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vc2VhcmNoYWJsZS1kcm9wZG93bi5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaGFibGUtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hhYmxlRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoKSBzaG9ydGN1dE1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgZGlzcGxheVZhbHVlTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYXRoU3RyaW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgYmlEaXNwbGF5VmFsdWVNYXA6IEJpRGlyZWN0aW9uYWxNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICBkaXNwbGF5VmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JykgZmlsdGVySW5wdXRFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogQnNEcm9wZG93bkRpcmVjdGl2ZTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ3ZhbHVlJ10pIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnZhbHVlIHx8IHRoaXMucGxhY2Vob2xkZXIgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2Rpc3BsYXlWYWx1ZU1hcCddIHx8IGNoYW5nZXNbJ2l0ZW1zJ10pIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlTWFwID0gdGhpcy5kaXNwbGF5VmFsdWVNYXAgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHRoaXMuYmlEaXNwbGF5VmFsdWVNYXAgPSBuZXcgQmlEaXJlY3Rpb25hbE1hcDxzdHJpbmcsIHN0cmluZz4odGhpcy5kaXNwbGF5VmFsdWVNYXApO1xuICAgICAgLy8gc2V0IG9yaWdpbmFsIHZhbHVlIGFzIGRpc3BsYXkgdmFsdWUgZm9yIG5vdCBjb25maWd1cmVkIGl0ZW1zLlxuICAgICAgdGhpcy5pdGVtc1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuZGlzcGxheVZhbHVlTWFwW2l0ZW1dKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICB0aGlzLmJpRGlzcGxheVZhbHVlTWFwLnNldChpdGVtLCBpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlcyA9IEFycmF5LmZyb20odGhpcy5iaURpc3BsYXlWYWx1ZU1hcC52YWx1ZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgb25JdGVtQ2xpY2soZGlzcGxheVZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5iaURpc3BsYXlWYWx1ZU1hcC5nZXRLZXkoZGlzcGxheVZhbHVlKTtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQob3JpZ2luYWxWYWx1ZSk7XG5cbiAgICAvLyBvbmx5IG5lY2Vzc2FyeSB0byBmb3JjZSBjbG9zaW5nIHdoZW4gc2VsZWN0ZWQgaXMgaXRlbSBlcXVhbHMgdG8gdmFsdWVcbiAgICAvLyBpbiB3aGljaCBjYXNlIGRyb3Bkb3duIGRvZXNuJ3QgY2xvc2UgYXV0b21hdGljYWxseSBmb3Igc29tZSByZWFzb25cbiAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgfVxuXG4gIG9uRW50ZXJLZXlVcCgpIHtcbiAgICBpZiAodGhpcy5zaG9ydGN1dE1hcCAmJiB0aGlzLnNob3J0Y3V0TWFwW3RoaXMuZXhwcmVzc2lvbl0pIHtcbiAgICAgIHRoaXMub25JdGVtQ2xpY2sodGhpcy5zaG9ydGN1dE1hcFt0aGlzLmV4cHJlc3Npb25dKTtcbiAgICB9XG4gICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gIH1cblxuICBzaG93RHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5zaG93KCk7XG4gICAgdGhpcy5leHByZXNzaW9uID0gJyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAodGhpcy5maWx0ZXJJbnB1dEVsUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgLy8gdGhpcyBhdm9pZHMgY2xvc2luZyBkcm9wZG93biB3aGVuIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICAvLyBzbyB0aGF0IG9uSXRlbUNsaWNrKCkgY2FuIGJlIGV4ZWN1dGVkIHByb3Blcmx5IGJlZm9yZSBjbG9zaW5nLlxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghcmVsYXRlZFRhcmdldCB8fCByZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2Ryb3Bkb3duLWl0ZW0nKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG4gICAgdGhpcy5vbkJsdXIuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgI2Ryb3Bkb3duPVwiYnMtZHJvcGRvd25cIiBkcm9wZG93biBrZXlib2FyZE5hdj1cInRydWVcIj5cbiAgPCEtLSB0aGVyZSBpcyBubyBkcm9wZG93blRvZ2dsZSBzaW5jZSBpdCBpcyBoYW5kbGVkIG1hbnVhbGx5IHNlZTogb25JbnB1dEZvY3VzIGFuZCBvbklucHV0Qmx1ciBpbiB0cyAtLT5cbiAgPGRpdiBjbGFzcz1cInRvZ2dsZS1jb250YWluZXJcIj5cbiAgICA8aW5wdXQgKm5nSWY9XCJkcm9wZG93bi5pc09wZW47IGVsc2UgdmFsdWVEaXNwbGF5VGVtcGxhdGVcIiAjZmlsdGVySW5wdXQgY2xhc3M9XCJ2YWx1ZVwiIGF0dHIuZGF0YS1wYXRoPVwie3twYXRoU3RyaW5nfX1cIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgWyhuZ01vZGVsKV09XCJleHByZXNzaW9uXCIgKGtleXVwLmVudGVyKT1cIm9uRW50ZXJLZXlVcCgpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiIChjbGljayk9XCJzaG93RHJvcGRvd24oKVwiPjwvaT5cbiAgPC9kaXY+XG4gIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiAqZHJvcGRvd25NZW51IHJvbGU9XCJtZW51XCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBkaXNwbGF5VmFsdWUgb2YgZGlzcGxheVZhbHVlcyB8IGZpbHRlckJ5RXhwcmVzc2lvbjpleHByZXNzaW9uXCIgcm9sZT1cIm1lbnVpdGVtXCI+XG4gICAgICA8IS0tIGhyZWYgaXMgbmVlZGVkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIC0tPlxuICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJvbkl0ZW1DbGljayhkaXNwbGF5VmFsdWUpXCI+e3tkaXNwbGF5VmFsdWV9fTwvYT5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjdmFsdWVEaXNwbGF5VGVtcGxhdGU+XG4gIDxzcGFuIGNsYXNzPVwidmFsdWVcIiBbdGFiaW5kZXhdPVwidGFiSW5kZXhcIiAoZm9jdXMpPVwic2hvd0Ryb3Bkb3duKClcIj57e2JpRGlzcGxheVZhbHVlTWFwLmdldFZhbHVlKHZhbHVlKX19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT4iXX0=