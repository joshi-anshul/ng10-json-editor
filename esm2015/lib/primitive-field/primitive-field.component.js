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
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { AbstractFieldComponent } from '../abstract-field';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/tooltip";
import * as i4 from "../string-input/string-input.component";
import * as i5 from "../searchable-dropdown/searchable-dropdown.component";
import * as i6 from "../autocomplete-input/autocomplete-input.component";
import * as i7 from "@angular/forms";
import * as i8 from "../patch-actions/patch-actions.component";
import * as i9 from "ngx-bootstrap/popover";
import * as i10 from "../text-diff/text-diff.component";
function PrimitiveFieldComponent_ng_template_3_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", error_r12.message, " ");
} }
function PrimitiveFieldComponent_ng_template_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", error_r13.message, " ");
} }
function PrimitiveFieldComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 10);
    i0.ɵɵtemplate(1, PrimitiveFieldComponent_ng_template_3_li_1_Template, 2, 1, "li", 11);
    i0.ɵɵtemplate(2, PrimitiveFieldComponent_ng_template_3_li_2_Template, 2, 1, "li", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.internalErrors);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.externalErrors);
} }
function PrimitiveFieldComponent_td_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "string-input", 15);
    i0.ɵɵlistener("valueChange", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onValueChange($event); })("blur", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_blur_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onBlur(); })("onKeypress", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_onKeypress_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onKeypress($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("pathString", ctx_r14.pathString)("value", ctx_r14.value)("disabled", ctx_r14.disabled)("tabIndex", ctx_r14.tabIndex)("latexPreviewEnabled", ctx_r14.schema.latexPreviewEnabled)("placeholder", ctx_r14.schema.title);
} }
function PrimitiveFieldComponent_td_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "searchable-dropdown", 16);
    i0.ɵɵlistener("onSelect", function PrimitiveFieldComponent_td_5_div_2_Template_searchable_dropdown_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onSearchableDropdownSelect($event); })("onBlur", function PrimitiveFieldComponent_td_5_div_2_Template_searchable_dropdown_onBlur_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onBlur(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("pathString", ctx_r15.pathString)("value", ctx_r15.value)("placeholder", ctx_r15.schema.title)("items", ctx_r15.schema.enum)("shortcutMap", ctx_r15.schema.enumShorcutMap)("displayValueMap", ctx_r15.schema.enumDisplayValueMap)("tabIndex", ctx_r15.tabIndex);
} }
function PrimitiveFieldComponent_td_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "autocomplete-input", 17);
    i0.ɵɵlistener("onBlur", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onBlur_1_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onBlur(); })("onKeypress", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onKeypress_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.onKeypress($event); })("onValueChange", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onValueChange_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.onValueChange($event); })("onCompletionSelect", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onCompletionSelect_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onCompletionSelect($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("pathString", ctx_r16.pathString)("value", ctx_r16.value)("autocompletionConfig", ctx_r16.schema.autocompletionConfig)("placeholder", ctx_r16.schema.title)("tabIndex", ctx_r16.tabIndex);
} }
function PrimitiveFieldComponent_td_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 18);
    i0.ɵɵlistener("ngModelChange", function PrimitiveFieldComponent_td_5_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.value = $event; })("blur", function PrimitiveFieldComponent_td_5_div_4_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onBlur(); })("keypress", function PrimitiveFieldComponent_td_5_div_4_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onKeypress($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r17.value)("tabindex", ctx_r17.tabIndex)("placeholder", ctx_r17.schema.title);
    i0.ɵɵattribute("data-path", ctx_r17.pathString);
} }
function PrimitiveFieldComponent_td_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 19);
    i0.ɵɵlistener("ngModelChange", function PrimitiveFieldComponent_td_5_div_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.value = $event; })("ngModelChange", function PrimitiveFieldComponent_td_5_div_5_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.onBlur(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r18.value)("placeholder", ctx_r18.schema.title);
} }
function PrimitiveFieldComponent_td_5_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ## Not recognized type: ", ctx_r19.valueType, " ");
} }
function PrimitiveFieldComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtemplate(1, PrimitiveFieldComponent_td_5_div_1_Template, 2, 6, "div", 13);
    i0.ɵɵtemplate(2, PrimitiveFieldComponent_td_5_div_2_Template, 2, 7, "div", 13);
    i0.ɵɵtemplate(3, PrimitiveFieldComponent_td_5_div_3_Template, 2, 5, "div", 13);
    i0.ɵɵtemplate(4, PrimitiveFieldComponent_td_5_div_4_Template, 2, 4, "div", 13);
    i0.ɵɵtemplate(5, PrimitiveFieldComponent_td_5_div_5_Template, 2, 2, "div", 13);
    i0.ɵɵtemplate(6, PrimitiveFieldComponent_td_5_div_6_Template, 2, 1, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(4);
    i0.ɵɵclassProp("disabled", ctx_r2.disabled);
    i0.ɵɵpropertyInterpolate("placement", ctx_r2.tooltipPosition);
    i0.ɵɵproperty("tooltip", _r0)("isDisabled", !ctx_r2.hasErrors());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "string");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "autocomplete");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "integer");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "boolean");
} }
function PrimitiveFieldComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 20);
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ctx_r3.schema.linkBuilder(ctx_r3.value), i0.ɵɵsanitizeUrl);
} }
function PrimitiveFieldComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 20);
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ctx_r4.value, i0.ɵɵsanitizeUrl);
} }
function PrimitiveFieldComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "patch-actions", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r5.removeJsonPatch);
} }
const _c0 = function (a0, a1) { return { currentValue: a0, patchValue: a1 }; };
function PrimitiveFieldComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "i", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const _r8 = i0.ɵɵreference(13);
    i0.ɵɵproperty("popover", _r8)("popoverContext", i0.ɵɵpureFunction2(3, _c0, ctx_r7.value, ctx_r7.replaceJsonPatches[0].value));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.value, " ");
} }
function PrimitiveFieldComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "text-diff", 25);
    i0.ɵɵelement(1, "patch-actions", 26);
} if (rf & 2) {
    const currentValue_r39 = ctx.currentValue;
    const patchValue_r40 = ctx.patchValue;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("currentText", currentValue_r39.toString())("newText", patchValue_r40 ? patchValue_r40.toString() : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r9.replaceJsonPatches[0])("addActionEnabled", ctx_r9.isPathToAnIndex);
} }
export class PrimitiveFieldComponent extends AbstractFieldComponent {
    constructor(schemaValidationService, componentTypeService, appGlobalsService, problemsService, jsonStoreService, keysStoreService, pathUtilService, domUtilService, changeDetectorRef) {
        super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
        this.schemaValidationService = schemaValidationService;
        this.componentTypeService = componentTypeService;
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.keysStoreService = keysStoreService;
        this.pathUtilService = pathUtilService;
        this.domUtilService = domUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.internalErrors = [];
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.value !== this.schema.default) {
            this.lastCommitedValue = this.value;
        }
        this.problemsService
            .internalCategorizedProblems$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(internalCategorizedErrorMap => {
            this.internalErrors = internalCategorizedErrorMap.errors[this.pathString] || [];
        });
        this.appGlobalsService
            .adminMode$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(adminMode => {
            this.changeDetectorRef.markForCheck();
        });
        this.validate();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.internalErrors.length > 0) {
            this.problemsService.setInternalProblemsForPath(this.pathString, []);
        }
    }
    commitValueChange() {
        this.validate();
        this.lastCommitedValue = this.value;
        this.jsonStoreService.setIn(this.path, this.value);
        if (this.schema.onValueChange) {
            // setTimeout to workaround the case when the value is changed back to previous value inside onValuChange callback
            setTimeout(() => this.schema.onValueChange(this.path, this.value, this.jsonStoreService, this.keysStoreService));
        }
    }
    onBlur() {
        this.domUtilService.clearHighlight();
        if (this.value !== this.lastCommitedValue) {
            this.commitValueChange();
        }
    }
    onKeypress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            document.activeElement.blur();
        }
    }
    onValueChange(value) {
        this.value = value;
    }
    onSearchableDropdownSelect(value) {
        this.onValueChange(value);
        this.commitValueChange();
    }
    onCompletionSelect(selection) {
        this.commitValueChange();
        const onCompletionSelect = this.schema.autocompletionConfig.onCompletionSelect;
        if (onCompletionSelect) {
            onCompletionSelect(this.path, selection, this.jsonStoreService, this.keysStoreService);
        }
    }
    get tabIndex() {
        return this.disabled ? -1 : 1;
    }
    get tooltipPosition() {
        if (this.pathString.startsWith(this.appGlobalsService.firstElementPathForCurrentTab)) {
            return 'bottom';
        }
        else {
            return 'top';
        }
    }
    hasErrors() {
        return super.hasErrors() || this.internalErrors.length > 0;
    }
    get errorClass() {
        return !this.replaceJsonPatches[0] && this.hasErrors() ? 'error' : '';
    }
    get isPathToAnIndex() {
        return typeof this.path[this.path.length - 1] === 'number';
    }
    validate() {
        if (this.value != null && this.value !== '' && this.externalErrors.length === 0) {
            this.internalErrors = this.schemaValidationService.validateValue(this.value, this.schema);
            this.problemsService.setInternalProblemsForPath(this.pathString, this.internalErrors);
        }
    }
}
PrimitiveFieldComponent.ɵfac = function PrimitiveFieldComponent_Factory(t) { return new (t || PrimitiveFieldComponent)(i0.ɵɵdirectiveInject(i1.SchemaValidationService), i0.ɵɵdirectiveInject(i1.ComponentTypeService), i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.KeysStoreService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PrimitiveFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PrimitiveFieldComponent, selectors: [["primitive-field"]], inputs: { schema: "schema", path: "path", value: "value" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 9, consts: [[3, "id", "ngClass"], [1, "primitive-field-container", 3, "ngSwitch"], [3, "ngClass"], ["errorsTooltipTemplate", ""], ["class", "value-container", "container", "body", 3, "disabled", "tooltip", "isDisabled", "placement", 4, "ngIf", "ngIfElse"], [1, "link-button-container"], ["class", "no-decoration", "target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], ["patchTemplate", ""], ["mergePopover", ""], [1, "tooltip-left-align"], [4, "ngFor", "ngForOf"], ["container", "body", 1, "value-container", 3, "tooltip", "isDisabled", "placement"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "pathString", "value", "disabled", "tabIndex", "latexPreviewEnabled", "placeholder", "valueChange", "blur", "onKeypress"], [3, "pathString", "value", "placeholder", "items", "shortcutMap", "displayValueMap", "tabIndex", "onSelect", "onBlur"], [3, "pathString", "value", "autocompletionConfig", "placeholder", "tabIndex", "onBlur", "onKeypress", "onValueChange", "onCompletionSelect"], ["type", "number", 3, "ngModel", "tabindex", "placeholder", "ngModelChange", "blur", "keypress"], ["type", "checkbox", 3, "ngModel", "placeholder", "ngModelChange"], ["target", "_blank", 1, "no-decoration", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-link"], [3, "patch"], ["type", "button", "popoverTitle", "Merge", "container", "body", 1, "btn", "btn-default", "btn-merge", "orange-left-border", 3, "popover", "popoverContext"], [1, "fa", "fa-bolt"], [3, "currentText", "newText"], [3, "patch", "addActionEnabled"]], template: function PrimitiveFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementStart(2, "tr", 2);
        i0.ɵɵtemplate(3, PrimitiveFieldComponent_ng_template_3_Template, 3, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PrimitiveFieldComponent_td_5_Template, 7, 10, "td", 4);
        i0.ɵɵelementStart(6, "td", 5);
        i0.ɵɵtemplate(7, PrimitiveFieldComponent_a_7_Template, 2, 1, "a", 6);
        i0.ɵɵtemplate(8, PrimitiveFieldComponent_a_8_Template, 2, 1, "a", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, PrimitiveFieldComponent_tr_9_Template, 2, 1, "tr", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, PrimitiveFieldComponent_ng_template_10_Template, 3, 6, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, PrimitiveFieldComponent_ng_template_12_Template, 2, 4, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r6 = i0.ɵɵreference(11);
        i0.ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.schema.componentType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.errorClass);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.replaceJsonPatches[0])("ngIfElse", _r6);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.schema.linkBuilder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.schema.linkBuilder && ctx.schema.format === "url");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
    } }, directives: [i2.NgClass, i2.NgSwitch, i2.NgIf, i2.NgForOf, i3.TooltipDirective, i2.NgSwitchCase, i2.NgSwitchDefault, i4.StringInputComponent, i5.SearchableDropdownComponent, i6.AutocompleteInputComponent, i7.NumberValueAccessor, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i7.CheckboxControlValueAccessor, i8.PatchActionsComponent, i9.PopoverDirective, i10.TextDiffComponent], styles: ["td.value-container input,td.value-container span[contenteditable=true]{background-color:transparent;border:none;display:inline-block;transition:all .5s ease;vertical-align:middle;width:100%}table.primitive-field-container{width:100%}td.link-button-container{width:22px}td.value-container{padding:3px 3px 3px 6px!important;width:100%}td.value-container:hover{background-color:#ffa!important}a.no-decoration{text-decoration:none}[contenteditable=true]{min-height:18px;word-break:break-word}[contenteditable=true]:empty:before{color:#a9a9a9;content:attr(placeholder);display:block}.tooltip-left-align{margin-left:12px;padding:0}.btn-merge{background:transparent;border:none;text-align:left;white-space:normal;width:100%}.orange-left-border{border-left:9px solid #e67e22;border-radius:0}.fa-bolt{color:#e67e22}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PrimitiveFieldComponent, [{
        type: Component,
        args: [{
                selector: 'primitive-field',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    './primitive-field.component.scss'
                ],
                templateUrl: './primitive-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.SchemaValidationService }, { type: i1.ComponentTypeService }, { type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.JsonStoreService }, { type: i1.KeysStoreService }, { type: i1.PathUtilService }, { type: i1.DomUtilService }, { type: i0.ChangeDetectorRef }]; }, { schema: [{
            type: Input
        }], path: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9wcmltaXRpdmUtZmllbGQvcHJpbWl0aXZlLWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi9wcmltaXRpdmUtZmllbGQvcHJpbWl0aXZlLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFJeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFhM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDeENqQywwQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsZUFDRjtJQURFLGtEQUNGOzs7SUFDQSwwQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsZUFDRjtJQURFLGtEQUNGOzs7SUFORiw4QkFDRTtJQUFBLHFGQUNFO0lBRUYscUZBQ0U7SUFFSixpQkFBSzs7O0lBTkMsZUFBb0M7SUFBcEMsK0NBQW9DO0lBR3BDLGVBQW9DO0lBQXBDLCtDQUFvQzs7OztJQU8xQywyQkFDRTtJQUFBLHdDQUVlO0lBRnlDLHFPQUFxQyx1TEFBQSxtTkFBQTtJQUU3RixpQkFBZTtJQUNqQixpQkFBTTs7O0lBSFUsZUFBeUI7SUFBekIsK0NBQXlCLHdCQUFBLDhCQUFBLDhCQUFBLDJEQUFBLHFDQUFBOzs7O0lBSXpDLDJCQUNFO0lBQUEsK0NBRTRDO0lBRDFDLG1QQUErQyxrTUFBQTtJQUMzQixpQkFBc0I7SUFD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LENBQUM7U0FDdkY7SUFDSCxDQUFDOzs4RkEzSFUsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUN6RHBDLDhCQUNFO1FBQUEsZ0NBQ0U7UUFBQSw2QkFDRTtRQUFBLHlIQUNFO1FBU0YsdUVBRUU7UUEwQkYsNkJBQ0U7UUFBQSxvRUFDRTtRQUVGLG9FQUNFO1FBRUosaUJBQUs7UUFDUCxpQkFBSztRQUNMLHNFQUNFO1FBRUosaUJBQVE7UUFDVixpQkFBTTtRQUVOLDJIQUNFO1FBT0YsMkhBQ0U7OztRQWpFRyxtQ0FBaUIsbUNBQUE7UUFDcUIsZUFBaUM7UUFBakMsbURBQWlDO1FBQ3BFLGVBQXNCO1FBQXRCLHdDQUFzQjtRQVdwQixlQUFrRDtRQUFsRCxpREFBa0QsaUJBQUE7UUE2QmpELGVBQTBCO1FBQTFCLDZDQUEwQjtRQUcxQixlQUFzRDtRQUF0RCw2RUFBc0Q7UUFLekQsZUFBdUI7UUFBdkIsMENBQXVCOztrRERPbEIsdUJBQXVCO2NBVG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFO29CQUNULGtDQUFrQztpQkFDbkM7Z0JBQ0QsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7b1VBR1UsTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtZmllbGQnO1xuaW1wb3J0IHtcbiAgQXBwR2xvYmFsc1NlcnZpY2UsXG4gIFByb2JsZW1zU2VydmljZSxcbiAgQ29tcG9uZW50VHlwZVNlcnZpY2UsXG4gIEpzb25TdG9yZVNlcnZpY2UsXG4gIEtleXNTdG9yZVNlcnZpY2UsXG4gIFNjaGVtYVZhbGlkYXRpb25TZXJ2aWNlLFxuICBQYXRoVXRpbFNlcnZpY2UsXG4gIERvbVV0aWxTZXJ2aWNlXG59IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBKU09OU2NoZW1hLCBKc29uUGF0Y2ggfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFZhbGlkYXRpb25Qcm9ibGVtIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcmltaXRpdmUtZmllbGQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9wcmltaXRpdmUtZmllbGQuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmltaXRpdmUtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVGaWVsZENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0RmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgc2NoZW1hOiBKU09OU2NoZW1hO1xuICBASW5wdXQoKSBwYXRoOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcblxuICBpbnRlcm5hbEVycm9yczogQXJyYXk8VmFsaWRhdGlvblByb2JsZW0+ID0gW107XG4gIHByaXZhdGUgbGFzdENvbW1pdGVkVmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNjaGVtYVZhbGlkYXRpb25TZXJ2aWNlOiBTY2hlbWFWYWxpZGF0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZVNlcnZpY2U6IENvbXBvbmVudFR5cGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBhcHBHbG9iYWxzU2VydmljZTogQXBwR2xvYmFsc1NlcnZpY2UsXG4gICAgcHVibGljIHByb2JsZW1zU2VydmljZTogUHJvYmxlbXNTZXJ2aWNlLFxuICAgIHB1YmxpYyBqc29uU3RvcmVTZXJ2aWNlOiBKc29uU3RvcmVTZXJ2aWNlLFxuICAgIHB1YmxpYyBrZXlzU3RvcmVTZXJ2aWNlOiBLZXlzU3RvcmVTZXJ2aWNlLFxuICAgIHB1YmxpYyBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSxcbiAgICBwdWJsaWMgZG9tVXRpbFNlcnZpY2U6IERvbVV0aWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihhcHBHbG9iYWxzU2VydmljZSwgcHJvYmxlbXNTZXJ2aWNlLCBwYXRoVXRpbFNlcnZpY2UsIGNoYW5nZURldGVjdG9yUmVmLCBqc29uU3RvcmVTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5zY2hlbWEuZGVmYXVsdCkge1xuICAgICAgdGhpcy5sYXN0Q29tbWl0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHRoaXMucHJvYmxlbXNTZXJ2aWNlXG4gICAgICAuaW50ZXJuYWxDYXRlZ29yaXplZFByb2JsZW1zJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShpbnRlcm5hbENhdGVnb3JpemVkRXJyb3JNYXAgPT4ge1xuICAgICAgICB0aGlzLmludGVybmFsRXJyb3JzID0gaW50ZXJuYWxDYXRlZ29yaXplZEVycm9yTWFwLmVycm9yc1t0aGlzLnBhdGhTdHJpbmddIHx8IFtdO1xuICAgICAgfSk7XG4gICAgdGhpcy5hcHBHbG9iYWxzU2VydmljZVxuICAgICAgLmFkbWluTW9kZSRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoYWRtaW5Nb2RlID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuaW50ZXJuYWxFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9ibGVtc1NlcnZpY2Uuc2V0SW50ZXJuYWxQcm9ibGVtc0ZvclBhdGgodGhpcy5wYXRoU3RyaW5nLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgY29tbWl0VmFsdWVDaGFuZ2UoKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIHRoaXMubGFzdENvbW1pdGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5zZXRJbih0aGlzLnBhdGgsIHRoaXMudmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuc2NoZW1hLm9uVmFsdWVDaGFuZ2UpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQgdG8gd29ya2Fyb3VuZCB0aGUgY2FzZSB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkIGJhY2sgdG8gcHJldmlvdXMgdmFsdWUgaW5zaWRlIG9uVmFsdUNoYW5nZSBjYWxsYmFja1xuICAgICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgICB0aGlzLnNjaGVtYS5vblZhbHVlQ2hhbmdlKHRoaXMucGF0aCwgdGhpcy52YWx1ZSwgdGhpcy5qc29uU3RvcmVTZXJ2aWNlLCB0aGlzLmtleXNTdG9yZVNlcnZpY2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmRvbVV0aWxTZXJ2aWNlLmNsZWFySGlnaGxpZ2h0KCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5sYXN0Q29tbWl0ZWRWYWx1ZSkge1xuICAgICAgdGhpcy5jb21taXRWYWx1ZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5cHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgb25TZWFyY2hhYmxlRHJvcGRvd25TZWxlY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5jb21taXRWYWx1ZUNoYW5nZSgpO1xuICB9XG5cbiAgb25Db21wbGV0aW9uU2VsZWN0KHNlbGVjdGlvbjogc3RyaW5nIHwgb2JqZWN0KSB7XG4gICAgdGhpcy5jb21taXRWYWx1ZUNoYW5nZSgpO1xuICAgIGNvbnN0IG9uQ29tcGxldGlvblNlbGVjdCA9IHRoaXMuc2NoZW1hLmF1dG9jb21wbGV0aW9uQ29uZmlnLm9uQ29tcGxldGlvblNlbGVjdDtcbiAgICBpZiAob25Db21wbGV0aW9uU2VsZWN0KSB7XG4gICAgICBvbkNvbXBsZXRpb25TZWxlY3QodGhpcy5wYXRoLCBzZWxlY3Rpb24sIHRoaXMuanNvblN0b3JlU2VydmljZSwgdGhpcy5rZXlzU3RvcmVTZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogMTtcbiAgfVxuXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5wYXRoU3RyaW5nLnN0YXJ0c1dpdGgodGhpcy5hcHBHbG9iYWxzU2VydmljZS5maXJzdEVsZW1lbnRQYXRoRm9yQ3VycmVudFRhYikpIHtcbiAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd0b3AnO1xuICAgIH1cbiAgfVxuXG4gIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc3VwZXIuaGFzRXJyb3JzKCkgfHwgdGhpcy5pbnRlcm5hbEVycm9ycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IGVycm9yQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gIXRoaXMucmVwbGFjZUpzb25QYXRjaGVzWzBdICYmIHRoaXMuaGFzRXJyb3JzKCkgPyAnZXJyb3InIDogJyc7XG4gIH1cblxuICBnZXQgaXNQYXRoVG9BbkluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoW3RoaXMucGF0aC5sZW5ndGggLSAxXSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlKCkge1xuICAgIGlmICh0aGlzLnZhbHVlICE9IG51bGwgJiYgdGhpcy52YWx1ZSAhPT0gJycgJiYgdGhpcy5leHRlcm5hbEVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxFcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlVmFsdWUodGhpcy52YWx1ZSwgdGhpcy5zY2hlbWEpO1xuICAgICAgdGhpcy5wcm9ibGVtc1NlcnZpY2Uuc2V0SW50ZXJuYWxQcm9ibGVtc0ZvclBhdGgodGhpcy5wYXRoU3RyaW5nLCB0aGlzLmludGVybmFsRXJyb3JzKTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBbaWRdPVwicGF0aFN0cmluZ1wiIFtuZ0NsYXNzXT1cInJlZExlZnRCb3JkZXJDbGFzc1wiPlxuICA8dGFibGUgY2xhc3M9XCJwcmltaXRpdmUtZmllbGQtY29udGFpbmVyXCIgW25nU3dpdGNoXT1cInNjaGVtYS5jb21wb25lbnRUeXBlXCI+XG4gICAgPHRyIFtuZ0NsYXNzXT1cImVycm9yQ2xhc3NcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3JzVG9vbHRpcFRlbXBsYXRlPlxuICAgICAgICA8dWwgY2xhc3M9XCJ0b29sdGlwLWxlZnQtYWxpZ25cIj5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGVycm9yIG9mIGludGVybmFsRXJyb3JzXCI+XG4gICAgICAgICAgICB7e2Vycm9yLm1lc3NhZ2V9fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBlcnJvciBvZiBleHRlcm5hbEVycm9yc1wiPlxuICAgICAgICAgICAge3tlcnJvci5tZXNzYWdlfX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDx0ZCAqbmdJZj1cIiFyZXBsYWNlSnNvblBhdGNoZXNbMF07IGVsc2UgcGF0Y2hUZW1wbGF0ZVwiIGNsYXNzPVwidmFsdWUtY29udGFpbmVyXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCIgW3Rvb2x0aXBdPVwiZXJyb3JzVG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgW2lzRGlzYWJsZWRdPVwiIWhhc0Vycm9ycygpXCIgcGxhY2VtZW50PVwie3t0b29sdGlwUG9zaXRpb259fVwiIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3N0cmluZydcIj5cbiAgICAgICAgICA8c3RyaW5nLWlucHV0IFtwYXRoU3RyaW5nXT1cInBhdGhTdHJpbmdcIiBbdmFsdWVdPVwidmFsdWVcIiAodmFsdWVDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3RhYkluZGV4XT1cInRhYkluZGV4XCJcbiAgICAgICAgICAgIFtsYXRleFByZXZpZXdFbmFibGVkXT1cInNjaGVtYS5sYXRleFByZXZpZXdFbmFibGVkXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIChibHVyKT1cIm9uQmx1cigpXCIgKG9uS2V5cHJlc3MpPVwib25LZXlwcmVzcygkZXZlbnQpXCI+XG4gICAgICAgICAgPC9zdHJpbmctaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInZW51bSdcIj5cbiAgICAgICAgICA8c2VhcmNoYWJsZS1kcm9wZG93biBbcGF0aFN0cmluZ109XCJwYXRoU3RyaW5nXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtpdGVtc109XCJzY2hlbWEuZW51bVwiIFtzaG9ydGN1dE1hcF09XCJzY2hlbWEuZW51bVNob3JjdXRNYXBcIlxuICAgICAgICAgICAgKG9uU2VsZWN0KT1cIm9uU2VhcmNoYWJsZURyb3Bkb3duU2VsZWN0KCRldmVudClcIiBbZGlzcGxheVZhbHVlTWFwXT1cInNjaGVtYS5lbnVtRGlzcGxheVZhbHVlTWFwXCIgW3RhYkluZGV4XT1cInRhYkluZGV4XCJcbiAgICAgICAgICAgIChvbkJsdXIpPVwib25CbHVyKClcIj48L3NlYXJjaGFibGUtZHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInYXV0b2NvbXBsZXRlJ1wiPlxuICAgICAgICAgIDxhdXRvY29tcGxldGUtaW5wdXQgW3BhdGhTdHJpbmddPVwicGF0aFN0cmluZ1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFthdXRvY29tcGxldGlvbkNvbmZpZ109XCJzY2hlbWEuYXV0b2NvbXBsZXRpb25Db25maWdcIlxuICAgICAgICAgICAgKG9uQmx1cik9XCJvbkJsdXIoKVwiIChvbktleXByZXNzKT1cIm9uS2V5cHJlc3MoJGV2ZW50KVwiIChvblZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiIChvbkNvbXBsZXRpb25TZWxlY3QpID0gXCJvbkNvbXBsZXRpb25TZWxlY3QoJGV2ZW50KVwiIFxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFt0YWJJbmRleF09XCJ0YWJJbmRleFwiPjwvYXV0b2NvbXBsZXRlLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2ludGVnZXInXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgW3RhYmluZGV4XT1cInRhYkluZGV4XCIgW2F0dHIuZGF0YS1wYXRoXT1cInBhdGhTdHJpbmdcIiAoYmx1cik9XCJvbkJsdXIoKVwiIChrZXlwcmVzcyk9XCJvbktleXByZXNzKCRldmVudClcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2Jvb2xlYW4nXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwidmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkJsdXIoKVwiIFtwbGFjZWhvbGRlcl09XCJzY2hlbWEudGl0bGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAjIyBOb3QgcmVjb2duaXplZCB0eXBlOiB7e3ZhbHVlVHlwZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImxpbmstYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YSAqbmdJZj1cInNjaGVtYS5saW5rQnVpbGRlclwiIGNsYXNzPVwibm8tZGVjb3JhdGlvblwiIHRhcmdldD1cIl9ibGFua1wiIFtocmVmXT1cInNjaGVtYS5saW5rQnVpbGRlcih2YWx1ZSlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxpbmtcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgKm5nSWY9XCIhc2NoZW1hLmxpbmtCdWlsZGVyICYmIHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnXCIgY2xhc3M9XCJuby1kZWNvcmF0aW9uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgW2hyZWZdPVwidmFsdWVcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxpbmtcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHIgKm5nSWY9XCJyZW1vdmVKc29uUGF0Y2hcIj5cbiAgICAgIDxwYXRjaC1hY3Rpb25zIFtwYXRjaF09XCJyZW1vdmVKc29uUGF0Y2hcIj48L3BhdGNoLWFjdGlvbnM+XG4gICAgPC90cj5cbiAgPC90YWJsZT5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI3BhdGNoVGVtcGxhdGU+XG4gIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLW1lcmdlIG9yYW5nZS1sZWZ0LWJvcmRlclwiIHR5cGU9XCJidXR0b25cIiBbcG9wb3Zlcl09XCJtZXJnZVBvcG92ZXJcIiBbcG9wb3ZlckNvbnRleHRdPVwie2N1cnJlbnRWYWx1ZTogdmFsdWUsIHBhdGNoVmFsdWU6IHJlcGxhY2VKc29uUGF0Y2hlc1swXS52YWx1ZX1cIlxuICAgIHBvcG92ZXJUaXRsZT1cIk1lcmdlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgIHt7dmFsdWV9fVxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYm9sdFwiPjwvaT5cbiAgPC9idXR0b24+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgbGV0LWN1cnJlbnRWYWx1ZT1cImN1cnJlbnRWYWx1ZVwiIGxldC1wYXRjaFZhbHVlPVwicGF0Y2hWYWx1ZVwiICNtZXJnZVBvcG92ZXI+XG4gIDx0ZXh0LWRpZmYgW2N1cnJlbnRUZXh0XT1cImN1cnJlbnRWYWx1ZS50b1N0cmluZygpXCIgW25ld1RleHRdPVwicGF0Y2hWYWx1ZSA/IHBhdGNoVmFsdWUudG9TdHJpbmcoKSA6ICcnXCI+PC90ZXh0LWRpZmY+XG4gIDxwYXRjaC1hY3Rpb25zIFtwYXRjaF09XCJyZXBsYWNlSnNvblBhdGNoZXNbMF1cIiBbYWRkQWN0aW9uRW5hYmxlZF09XCJpc1BhdGhUb0FuSW5kZXhcIj48L3BhdGNoLWFjdGlvbnM+XG48L25nLXRlbXBsYXRlPiJdfQ==