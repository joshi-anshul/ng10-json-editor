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
import { skipWhile, takeUntil } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-bootstrap/pagination";
import * as i5 from "../object-field/object-field.component";
import * as i6 from "../list-action-group/list-action-group.component";
import * as i7 from "../patch-actions/patch-actions.component";
import * as i8 from "../add-or-replace-patch/add-or-replace-patch.component";
function ComplexListFieldComponent_div_1_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_span_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.onFoundNavigate(-1); });
    i0.ɵɵtext(2, "\u276E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r9.currentFound <= 0);
} }
function ComplexListFieldComponent_div_1_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_span_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onFoundNavigate(1); });
    i0.ɵɵtext(2, "\u276F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r10.currentFound >= ctx_r10.foundIndices.length - 1);
} }
function ComplexListFieldComponent_div_1_div_1_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " Nothing found ");
    i0.ɵɵelementEnd();
} }
function ComplexListFieldComponent_div_1_div_1_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r17.currentFound + 1, " of ", ctx_r17.foundIndices.length, " ");
} }
function ComplexListFieldComponent_div_1_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_1_span_8_span_1_Template, 2, 0, "span", 18);
    i0.ɵɵtemplate(2, ComplexListFieldComponent_div_1_div_1_span_8_span_2_Template, 2, 2, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngSwitch", ctx_r11.foundIndices.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", 0);
} }
function ComplexListFieldComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelementStart(2, "span", 10);
    i0.ɵɵelementStart(3, "button", 11);
    i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.onFindClick(); });
    i0.ɵɵelement(4, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 13);
    i0.ɵɵlistener("ngModelChange", function ComplexListFieldComponent_div_1_div_1_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.findExpression = $event; })("keypress", function ComplexListFieldComponent_div_1_div_1_Template_input_keypress_5_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onFindInputKeypress($event.key); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ComplexListFieldComponent_div_1_div_1_span_6_Template, 3, 1, "span", 14);
    i0.ɵɵtemplate(7, ComplexListFieldComponent_div_1_div_1_span_7_Template, 3, 1, "span", 14);
    i0.ɵɵtemplate(8, ComplexListFieldComponent_div_1_div_1_span_8_Template, 3, 2, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r5.findExpression);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.shouldDisplayFoundNavigation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.shouldDisplayFoundNavigation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.foundIndices);
} }
function ComplexListFieldComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_2_Template_label_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.shouldDisplayOnlyEditFormItems = false; });
    i0.ɵɵtext(2, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 21);
    i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_2_Template_label_click_3_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.shouldDisplayOnlyEditFormItems = true; });
    i0.ɵɵtext(4, "To Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("active", !ctx_r6.shouldDisplayOnlyEditFormItems);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r6.shouldDisplayOnlyEditFormItems);
} }
function ComplexListFieldComponent_div_1_div_3_ng_template_1_Template(rf, ctx) { }
function ComplexListFieldComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_3_ng_template_1_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.headerItemTemplate);
} }
function ComplexListFieldComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "label", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "pagination", 24);
    i0.ɵɵlistener("pageChanged", function ComplexListFieldComponent_div_1_div_4_Template_pagination_pageChanged_4_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onPageChange($event.page); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r8.paginatableItems.size, " ", ctx_r8.path[ctx_r8.path.length - 1], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("totalItems", ctx_r8.paginatableItems.size)("ngModel", ctx_r8.currentPage)("maxSize", ctx_r8.navigator.maxVisiblePageCount)("itemsPerPage", ctx_r8.navigator.itemsPerPage)("boundaryLinks", true)("rotate", false)("firstText", "\u276E\u276E")("previousText", "\u276E")("nextText", "\u276F")("lastText", "\u276F\u276F");
} }
function ComplexListFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_1_Template, 9, 4, "div", 6);
    i0.ɵɵtemplate(2, ComplexListFieldComponent_div_1_div_2_Template, 5, 4, "div", 8);
    i0.ɵɵtemplate(3, ComplexListFieldComponent_div_1_div_3_Template, 2, 1, "div", 6);
    i0.ɵɵtemplate(4, ComplexListFieldComponent_div_1_div_4_Template, 5, 12, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.navigator);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.shouldDisplayViewTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.headerItemTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.navigator);
} }
function ComplexListFieldComponent_div_3_span_2_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0) { return { item: a0 }; };
function ComplexListFieldComponent_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, ComplexListFieldComponent_div_3_span_2_ng_template_1_Template, 0, 0, "ng-template", 26);
    i0.ɵɵelementStart(2, "a", 27);
    i0.ɵɵlistener("click", function ComplexListFieldComponent_div_3_span_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r34); const item_r28 = i0.ɵɵnextContext().$implicit; const ctx_r32 = i0.ɵɵnextContext(); return item_r28.editFormDisplayedByUser = !ctx_r32.shouldDisplayEditableFieldsForItem(item_r28); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r29 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r29.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, ctx_r29.values.get(item_r28.index)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r29.shouldDisplayEditableFieldsForItem(item_r28) ? "Hide Fields" : "Show Fields", " ");
} }
function ComplexListFieldComponent_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "object-field", 28);
    i0.ɵɵelementStart(2, "div", 29);
    i0.ɵɵelementStart(3, "div", 30);
    i0.ɵɵelementStart(4, "list-action-group", 31);
    i0.ɵɵlistener("onMove", function ComplexListFieldComponent_div_3_span_3_Template_list_action_group_onMove_4_listener($event) { i0.ɵɵrestoreView(_r38); const item_r28 = i0.ɵɵnextContext().$implicit; const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.moveElement(item_r28.index, $event); })("onDelete", function ComplexListFieldComponent_div_3_span_3_Template_list_action_group_onDelete_4_listener() { i0.ɵɵrestoreView(_r38); const item_r28 = i0.ɵɵnextContext().$implicit; const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.deleteElement(item_r28.index); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r30 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r30.values.get(item_r28.index))("schema", ctx_r30.schema.items)("path", ctx_r30.getPathForChild(item_r28.index))("isComplexListFieldItem", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("canMove", ctx_r30.sortable)("isDisabled", ctx_r30.disabled || ctx_r30.hasPatchOrChildrenHavePatch());
} }
function ComplexListFieldComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtemplate(2, ComplexListFieldComponent_div_3_span_2_Template, 4, 5, "span", 6);
    i0.ɵɵtemplate(3, ComplexListFieldComponent_div_3_span_3_Template, 5, 6, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.shouldDisplayViewTemplate && ctx_r1.values.get(item_r28.index).keySeq().size != 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.shouldDisplayEditableFieldsForItem(item_r28));
} }
function ComplexListFieldComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelement(1, "patch-actions", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r2.removeJsonPatch);
} }
function ComplexListFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelement(1, "add-or-replace-patch", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patch_r42 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", patch_r42);
} }
function ComplexListFieldComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "add-or-replace-patch", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r4.replaceJsonPatches[0]);
} }
export class ComplexListFieldComponent extends AbstractListFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, domUtilService, pathUtilService, changeDetectorRef, listPageChangerService) {
        super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.listPageChangerService = listPageChangerService;
        this.currentFound = 0;
        this.currentPage = 1;
        this._shouldDisplayOnlyEditFormItems = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.navigator = this.schema.longListNavigatorConfig;
        this.paginatableItems = this.getPaginatableItems();
        this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
        if (this.navigator) {
            this.listPageChangerService
                .registerPaginatedList(this.pathString, this.navigator.itemsPerPage)
                .pipe(skipWhile(page => page === this.currentPage))
                .pipe(takeUntil(this.isDestroyed))
                .subscribe(page => this.onPageChange(page));
        }
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        const valuesChange = changes['values'];
        if (valuesChange && !valuesChange.isFirstChange()) {
            const preSize = valuesChange.previousValue.size;
            const curSize = valuesChange.currentValue.size;
            if (curSize !== preSize) {
                if (this.navigator) {
                    // check if element added in the end by comparing the last elements
                    const elementAddedToEnd = valuesChange.previousValue.equals(valuesChange.currentValue.pop());
                    const lastPage = this.getPageForIndex(curSize - 1);
                    // change the page if a new element is added in the end and it's not on the last page
                    if (curSize > preSize && this.currentPage !== lastPage && elementAddedToEnd) {
                        this.currentPage = lastPage;
                    }
                }
            }
            this.paginatableItems = this.getPaginatableItems();
            this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
        }
    }
    hasProblemOrPatch(index) {
        const itemPath = this.getPathStringForChild(index);
        return this.problemsService.hasProblem(itemPath) || this.jsonStoreService.hasPatchOrChildrenHavePatch(itemPath);
    }
    get headerItemTemplate() {
        return this.appGlobalsService.templates[this.navigator.headerItemTemplateName];
    }
    onFindClick() {
        // clear for new search
        this.foundIndices = [];
        this.currentFound = 0;
        // search to look for the first match
        if (this.navigator.findSingle) {
            const foundIndex = this.values
                .findIndex(value => this.navigator.findSingle(value, this.findExpression));
            if (foundIndex > -1) {
                this.foundIndices.push(foundIndex);
            }
        }
        // search to look for all matches
        if (this.foundIndices.length === 0 && this.navigator.findMultiple) {
            this.values
                .forEach((value, index) => {
                if (this.navigator.findMultiple(value, this.findExpression)) {
                    this.foundIndices.push(index);
                }
            });
        }
        // navigate to first search result if found any
        if (this.foundIndices.length > 0) {
            this.navigateToItem(this.foundIndices[0]);
            this.shouldDisplayFoundNavigation = true;
        }
        else {
            this.shouldDisplayFoundNavigation = false;
        }
    }
    onFindInputKeypress(key) {
        if (key === 'Enter') {
            this.onFindClick();
        }
    }
    onFoundNavigate(direction) {
        // No bound checks, since the buttons are disabled in these cases.
        this.currentFound += direction;
        this.navigateToItem(this.foundIndices[this.currentFound]);
    }
    navigateToItem(index) {
        const item = this.paginatableItems.get(index);
        if (!item.editFormDisplayedByUser) {
            item.editFormDisplayedByUser = true;
            this.changeDetectorRef.markForCheck();
        }
        const itemPath = this.path.concat(index);
        const itemId = this.pathUtilService.toPathString(itemPath);
        setTimeout(() => this.domUtilService.focusAndSelectFirstEditableChildById(itemId));
    }
    onPageChange(page) {
        this.currentPage = page;
        this.paginatedItems = this.getPaginatableItemsForPage(page);
    }
    getPaginatableItemsForPage(page) {
        if (this.navigator) {
            const begin = (page - 1) * this.navigator.itemsPerPage;
            const end = (page * this.navigator.itemsPerPage);
            return this.paginatableItems.slice(begin, end);
        }
        else {
            return this.paginatableItems;
        }
    }
    getPaginatableItems() {
        const { viewTemplateConfig } = this.schema;
        return this.values
            .map((value, index) => {
            const paginatableItem = this.paginatableItems ? this.paginatableItems.get(index) : null;
            const isNewItem = paginatableItem == null;
            const editFormDisplayedByUser = isNewItem ? null : paginatableItem.editFormDisplayedByUser;
            const shouldDisplayEditForm = viewTemplateConfig ? viewTemplateConfig.showEditForm(value) : true;
            return { index, shouldDisplayEditForm, editFormDisplayedByUser };
        }).filter(item => {
            if (this.shouldDisplayOnlyEditFormItems) {
                return item.shouldDisplayEditForm;
            }
            else {
                return true;
            }
        });
    }
    getPageForIndex(index) {
        return Math.floor((index / this.navigator.itemsPerPage) + 1);
    }
    get customTemplate() {
        return this.appGlobalsService.templates[this.schema.viewTemplateConfig.itemTemplateName];
    }
    get shouldDisplayViewTemplate() {
        return this.schema.viewTemplateConfig !== undefined;
    }
    get sortable() {
        return this.schema.sortable && !this.shouldDisplayOnlyEditFormItems;
    }
    shouldDisplayEditableFieldsForItem(item) {
        // override default display state that is based on viewTemplateConfig.showEditForm(item) with user action
        const shouldDisplayEditForm = item.editFormDisplayedByUser != null ? item.editFormDisplayedByUser : item.shouldDisplayEditForm;
        return shouldDisplayEditForm || this.hasProblemOrPatch(item.index);
    }
    set shouldDisplayOnlyEditFormItems(value) {
        this.currentPage = 1;
        this._shouldDisplayOnlyEditFormItems = value;
        this.paginatableItems = this.getPaginatableItems();
        this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
    }
    get shouldDisplayOnlyEditFormItems() {
        return this._shouldDisplayOnlyEditFormItems;
    }
}
ComplexListFieldComponent.ɵfac = function ComplexListFieldComponent_Factory(t) { return new (t || ComplexListFieldComponent)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.ListPageChangerService)); };
ComplexListFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ComplexListFieldComponent, selectors: [["complex-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 7, vars: 8, consts: [[3, "id"], ["class", "top-bar-container", 4, "ngIf"], [3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-right", 4, "ngIf"], ["class", "complex-list-field-wrapper", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "top-bar-container"], ["class", "btn-group", 4, "ngIf"], [1, "input-group", "input-group-sm"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", "find-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "search", "placeholder", "Find", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["class", "input-group-btn", 4, "ngIf"], ["class", "input-group-addon transparent borderless", 3, "ngSwitch", 4, "ngIf"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "input-group-addon", "transparent", "borderless", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-group"], [1, "btn", "btn-switch", 3, "click"], [3, "ngTemplateOutlet"], [1, "item-count-label"], [1, "pagination-sm", "pagination-top", 3, "totalItems", "ngModel", "maxSize", "itemsPerPage", "boundaryLinks", "rotate", "firstText", "previousText", "nextText", "lastText", "pageChanged"], [1, "complex-list-field-wrapper"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["href", "javascript:void(0)", 3, "click"], [3, "value", "schema", "path", "isComplexListFieldItem"], [1, "row", "element-button-container"], [1, "col-md-12", "text-right"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [1, "text-right"], [3, "patch"]], template: function ComplexListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_Template, 5, 4, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, ComplexListFieldComponent_div_3_Template, 4, 2, "div", 3);
        i0.ɵɵtemplate(4, ComplexListFieldComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ComplexListFieldComponent_div_5_Template, 2, 1, "div", 5);
        i0.ɵɵtemplate(6, ComplexListFieldComponent_div_6_Template, 2, 1, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.pathString);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.navigator || ctx.shouldDisplayViewTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.redLeftBorderClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.paginatedItems)("ngForTrackBy", ctx.trackByElement);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, directives: [i2.NgIf, i2.NgClass, i2.NgForOf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgTemplateOutlet, i4.PaginationComponent, i5.ObjectFieldComponent, i6.ListActionGroupComponent, i7.PatchActionsComponent, i8.AddOrReplacePatchComponent], styles: [".complex-list-field-wrapper[_ngcontent-%COMP%]{box-shadow:0 0 3px 1px rgba(0,0,0,.25);margin:10px 15px 15px 10px;padding:5px}.top-bar-container[_ngcontent-%COMP%]{align-items:center;background-color:#fff;box-shadow:inset 0 .5px 0 0 #fff,0 1px 2px 0 #b3b3b3;display:flex;justify-content:space-between;padding:0 15px;position:-webkit-sticky;position:sticky;top:46px;width:100%;z-index:1}.item-count-label[_ngcontent-%COMP%]{position:relative;top:-19px}.transparent[_ngcontent-%COMP%]{background:transparent}.borderless[_ngcontent-%COMP%]{border:none}.find-button[_ngcontent-%COMP%]{color:#2f4f4f}.find-button[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%]{opacity:.83}.element-button-container[_ngcontent-%COMP%]{padding-top:8px}.element-button-container[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%]{padding:0}label.btn[_ngcontent-%COMP%]{color:#fff!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComplexListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'complex-list-field',
                styleUrls: [
                    './complex-list-field.component.scss'
                ],
                templateUrl: './complex-list-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.JsonStoreService }, { type: i1.DomUtilService }, { type: i1.PathUtilService }, { type: i0.ChangeDetectorRef }, { type: i1.ListPageChangerService }]; }, { values: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxleC1saXN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wbGV4LWxpc3QtZmllbGQvY29tcGxleC1saXN0LWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi9jb21wbGV4LWxpc3QtZmllbGQvY29tcGxleC1saXN0LWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLHVCQUF1QixFQUl4QixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVVwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUNoQzlDLGdDQUNFO0lBQUEsa0NBQTJHO0lBQTlCLCtNQUEwQixDQUFDLEtBQUU7SUFBQyxzQkFBQztJQUFBLGlCQUFTO0lBQ3ZILGlCQUFPOzs7SUFEeUMsZUFBOEI7SUFBOUIsbURBQThCOzs7O0lBRTlFLGdDQUNFO0lBQUEsa0NBQWdJO0lBQTdCLDhNQUF5QixDQUFDLEtBQUU7SUFBQyxzQkFBQztJQUFBLGlCQUFTO0lBQzVJLGlCQUFPOzs7SUFEeUMsZUFBb0Q7SUFBcEQsa0ZBQW9EOzs7SUFHbEcsNEJBQ0U7SUFBQSwrQkFDRjtJQUFBLGlCQUFPOzs7SUFDUCw0QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBREwsZUFDRjtJQURFLDhGQUNGOzs7SUFORixnQ0FDRTtJQUFBLGdHQUNFO0lBRUYsZ0dBQ0U7SUFFSixpQkFBTzs7O0lBUG9CLHNEQUFnQztJQUNuRCxlQUFpQjtJQUFqQixn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VGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0LCBNYXAsIFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0TGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtbGlzdC1maWVsZCc7XG5pbXBvcnQge1xuICBBcHBHbG9iYWxzU2VydmljZSxcbiAgSnNvblN0b3JlU2VydmljZSxcbiAgRG9tVXRpbFNlcnZpY2UsXG4gIFBhdGhVdGlsU2VydmljZSxcbiAgTGlzdFBhZ2VDaGFuZ2VyU2VydmljZSxcbiAgUHJvYmxlbXNTZXJ2aWNlXG59IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBMb25nTGlzdE5hdmlnYXRvckNvbmZpZywgSlNPTlNjaGVtYSwgUGFnaW5hdGVkSXRlbSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHNraXBXaGlsZSwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBsZXgtbGlzdC1maWVsZCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2NvbXBsZXgtbGlzdC1maWVsZC5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBsZXgtbGlzdC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENvbXBsZXhMaXN0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExpc3RGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICBASW5wdXQoKSB2YWx1ZXM6IExpc3Q8TWFwPHN0cmluZywgYW55Pj47XG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTlNjaGVtYTtcbiAgQElucHV0KCkgcGF0aDogQXJyYXk8YW55PjtcblxuICBwYWdpbmF0ZWRJdGVtczogYW55O1xuICBwYWdpbmF0YWJsZUl0ZW1zOiBhbnk7XG5cbiAgZm91bmRJbmRpY2VzOiBBcnJheTxudW1iZXI+O1xuICBjdXJyZW50Rm91bmQgPSAwO1xuICBjdXJyZW50UGFnZSA9IDE7XG4gIGZpbmRFeHByZXNzaW9uOiBzdHJpbmc7XG4gIG5hdmlnYXRvcjogTG9uZ0xpc3ROYXZpZ2F0b3JDb25maWc7XG4gIHNob3VsZERpc3BsYXlGb3VuZE5hdmlnYXRpb246IGJvb2xlYW47XG4gIHByaXZhdGUgX3Nob3VsZERpc3BsYXlPbmx5RWRpdEZvcm1JdGVtcyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBHbG9iYWxzU2VydmljZTogQXBwR2xvYmFsc1NlcnZpY2UsXG4gICAgcHVibGljIHByb2JsZW1zU2VydmljZTogUHJvYmxlbXNTZXJ2aWNlLFxuICAgIHB1YmxpYyBqc29uU3RvcmVTZXJ2aWNlOiBKc29uU3RvcmVTZXJ2aWNlLFxuICAgIHB1YmxpYyBkb21VdGlsU2VydmljZTogRG9tVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGxpc3RQYWdlQ2hhbmdlclNlcnZpY2U6IExpc3RQYWdlQ2hhbmdlclNlcnZpY2UpIHtcbiAgICBzdXBlcihhcHBHbG9iYWxzU2VydmljZSwgcHJvYmxlbXNTZXJ2aWNlLCBqc29uU3RvcmVTZXJ2aWNlLCBwYXRoVXRpbFNlcnZpY2UsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5uYXZpZ2F0b3IgPSB0aGlzLnNjaGVtYS5sb25nTGlzdE5hdmlnYXRvckNvbmZpZztcbiAgICB0aGlzLnBhZ2luYXRhYmxlSXRlbXMgPSB0aGlzLmdldFBhZ2luYXRhYmxlSXRlbXMoKTtcbiAgICB0aGlzLnBhZ2luYXRlZEl0ZW1zID0gdGhpcy5nZXRQYWdpbmF0YWJsZUl0ZW1zRm9yUGFnZSh0aGlzLmN1cnJlbnRQYWdlKTtcblxuICAgIGlmICh0aGlzLm5hdmlnYXRvcikge1xuICAgICAgdGhpcy5saXN0UGFnZUNoYW5nZXJTZXJ2aWNlXG4gICAgICAgIC5yZWdpc3RlclBhZ2luYXRlZExpc3QodGhpcy5wYXRoU3RyaW5nLCB0aGlzLm5hdmlnYXRvci5pdGVtc1BlclBhZ2UpXG4gICAgICAgIC5waXBlKHNraXBXaGlsZShwYWdlID0+IHBhZ2UgPT09IHRoaXMuY3VycmVudFBhZ2UpKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUocGFnZSA9PiB0aGlzLm9uUGFnZUNoYW5nZShwYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgY29uc3QgdmFsdWVzQ2hhbmdlID0gY2hhbmdlc1sndmFsdWVzJ107XG4gICAgaWYgKHZhbHVlc0NoYW5nZSAmJiAhdmFsdWVzQ2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgY29uc3QgcHJlU2l6ZSA9IHZhbHVlc0NoYW5nZS5wcmV2aW91c1ZhbHVlLnNpemU7XG4gICAgICBjb25zdCBjdXJTaXplID0gdmFsdWVzQ2hhbmdlLmN1cnJlbnRWYWx1ZS5zaXplO1xuXG4gICAgICBpZiAoY3VyU2l6ZSAhPT0gcHJlU2l6ZSkge1xuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0b3IpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiBlbGVtZW50IGFkZGVkIGluIHRoZSBlbmQgYnkgY29tcGFyaW5nIHRoZSBsYXN0IGVsZW1lbnRzXG4gICAgICAgICAgY29uc3QgZWxlbWVudEFkZGVkVG9FbmQgPSB2YWx1ZXNDaGFuZ2UucHJldmlvdXNWYWx1ZS5lcXVhbHModmFsdWVzQ2hhbmdlLmN1cnJlbnRWYWx1ZS5wb3AoKSk7XG4gICAgICAgICAgY29uc3QgbGFzdFBhZ2UgPSB0aGlzLmdldFBhZ2VGb3JJbmRleChjdXJTaXplIC0gMSk7XG4gICAgICAgICAgLy8gY2hhbmdlIHRoZSBwYWdlIGlmIGEgbmV3IGVsZW1lbnQgaXMgYWRkZWQgaW4gdGhlIGVuZCBhbmQgaXQncyBub3Qgb24gdGhlIGxhc3QgcGFnZVxuICAgICAgICAgIGlmIChjdXJTaXplID4gcHJlU2l6ZSAmJiB0aGlzLmN1cnJlbnRQYWdlICE9PSBsYXN0UGFnZSAmJiBlbGVtZW50QWRkZWRUb0VuZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGxhc3RQYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wYWdpbmF0YWJsZUl0ZW1zID0gdGhpcy5nZXRQYWdpbmF0YWJsZUl0ZW1zKCk7XG4gICAgICB0aGlzLnBhZ2luYXRlZEl0ZW1zID0gdGhpcy5nZXRQYWdpbmF0YWJsZUl0ZW1zRm9yUGFnZSh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICBoYXNQcm9ibGVtT3JQYXRjaChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgaXRlbVBhdGggPSB0aGlzLmdldFBhdGhTdHJpbmdGb3JDaGlsZChpbmRleCk7XG4gICAgcmV0dXJuIHRoaXMucHJvYmxlbXNTZXJ2aWNlLmhhc1Byb2JsZW0oaXRlbVBhdGgpIHx8IHRoaXMuanNvblN0b3JlU2VydmljZS5oYXNQYXRjaE9yQ2hpbGRyZW5IYXZlUGF0Y2goaXRlbVBhdGgpO1xuICB9XG5cbiAgZ2V0IGhlYWRlckl0ZW1UZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcHBHbG9iYWxzU2VydmljZS50ZW1wbGF0ZXNbdGhpcy5uYXZpZ2F0b3IuaGVhZGVySXRlbVRlbXBsYXRlTmFtZV07XG4gIH1cblxuICBvbkZpbmRDbGljaygpIHtcbiAgICAvLyBjbGVhciBmb3IgbmV3IHNlYXJjaFxuICAgIHRoaXMuZm91bmRJbmRpY2VzID0gW107XG4gICAgdGhpcy5jdXJyZW50Rm91bmQgPSAwO1xuICAgIC8vIHNlYXJjaCB0byBsb29rIGZvciB0aGUgZmlyc3QgbWF0Y2hcbiAgICBpZiAodGhpcy5uYXZpZ2F0b3IuZmluZFNpbmdsZSkge1xuICAgICAgY29uc3QgZm91bmRJbmRleCA9IHRoaXMudmFsdWVzXG4gICAgICAgIC5maW5kSW5kZXgodmFsdWUgPT4gdGhpcy5uYXZpZ2F0b3IuZmluZFNpbmdsZSh2YWx1ZSwgdGhpcy5maW5kRXhwcmVzc2lvbikpO1xuICAgICAgaWYgKGZvdW5kSW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLmZvdW5kSW5kaWNlcy5wdXNoKGZvdW5kSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzZWFyY2ggdG8gbG9vayBmb3IgYWxsIG1hdGNoZXNcbiAgICBpZiAodGhpcy5mb3VuZEluZGljZXMubGVuZ3RoID09PSAwICYmIHRoaXMubmF2aWdhdG9yLmZpbmRNdWx0aXBsZSkge1xuICAgICAgdGhpcy52YWx1ZXNcbiAgICAgICAgLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLm5hdmlnYXRvci5maW5kTXVsdGlwbGUodmFsdWUsIHRoaXMuZmluZEV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kSW5kaWNlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBuYXZpZ2F0ZSB0byBmaXJzdCBzZWFyY2ggcmVzdWx0IGlmIGZvdW5kIGFueVxuICAgIGlmICh0aGlzLmZvdW5kSW5kaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm5hdmlnYXRlVG9JdGVtKHRoaXMuZm91bmRJbmRpY2VzWzBdKTtcbiAgICAgIHRoaXMuc2hvdWxkRGlzcGxheUZvdW5kTmF2aWdhdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdWxkRGlzcGxheUZvdW5kTmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uRmluZElucHV0S2V5cHJlc3Moa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLm9uRmluZENsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb3VuZE5hdmlnYXRlKGRpcmVjdGlvbjogbnVtYmVyKSB7XG4gICAgLy8gTm8gYm91bmQgY2hlY2tzLCBzaW5jZSB0aGUgYnV0dG9ucyBhcmUgZGlzYWJsZWQgaW4gdGhlc2UgY2FzZXMuXG4gICAgdGhpcy5jdXJyZW50Rm91bmQgKz0gZGlyZWN0aW9uO1xuICAgIHRoaXMubmF2aWdhdGVUb0l0ZW0odGhpcy5mb3VuZEluZGljZXNbdGhpcy5jdXJyZW50Rm91bmRdKTtcbiAgfVxuXG4gIG5hdmlnYXRlVG9JdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5wYWdpbmF0YWJsZUl0ZW1zLmdldChpbmRleCk7XG5cbiAgICBpZiAoIWl0ZW0uZWRpdEZvcm1EaXNwbGF5ZWRCeVVzZXIpIHtcbiAgICAgIGl0ZW0uZWRpdEZvcm1EaXNwbGF5ZWRCeVVzZXIgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtUGF0aCA9IHRoaXMucGF0aC5jb25jYXQoaW5kZXgpO1xuICAgIGNvbnN0IGl0ZW1JZCA9IHRoaXMucGF0aFV0aWxTZXJ2aWNlLnRvUGF0aFN0cmluZyhpdGVtUGF0aCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZG9tVXRpbFNlcnZpY2UuZm9jdXNBbmRTZWxlY3RGaXJzdEVkaXRhYmxlQ2hpbGRCeUlkKGl0ZW1JZCkpO1xuICB9XG5cbiAgb25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIHRoaXMucGFnaW5hdGVkSXRlbXMgPSB0aGlzLmdldFBhZ2luYXRhYmxlSXRlbXNGb3JQYWdlKHBhZ2UpO1xuICB9XG5cbiAgZ2V0UGFnaW5hdGFibGVJdGVtc0ZvclBhZ2UocGFnZTogbnVtYmVyKTogYW55IHtcbiAgICBpZiAodGhpcy5uYXZpZ2F0b3IpIHtcbiAgICAgIGNvbnN0IGJlZ2luID0gKHBhZ2UgLSAxKSAqIHRoaXMubmF2aWdhdG9yLml0ZW1zUGVyUGFnZTtcbiAgICAgIGNvbnN0IGVuZCA9IChwYWdlICogdGhpcy5uYXZpZ2F0b3IuaXRlbXNQZXJQYWdlKTtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRhYmxlSXRlbXMuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRhYmxlSXRlbXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGFnaW5hdGFibGVJdGVtcygpOiBhbnkge1xuICAgIGNvbnN0IHsgdmlld1RlbXBsYXRlQ29uZmlnIH0gPSB0aGlzLnNjaGVtYTtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdpbmF0YWJsZUl0ZW0gPSB0aGlzLnBhZ2luYXRhYmxlSXRlbXMgPyB0aGlzLnBhZ2luYXRhYmxlSXRlbXMuZ2V0KGluZGV4KSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGlzTmV3SXRlbSA9IHBhZ2luYXRhYmxlSXRlbSA9PSBudWxsO1xuICAgICAgICBjb25zdCBlZGl0Rm9ybURpc3BsYXllZEJ5VXNlciA9IGlzTmV3SXRlbSA/IG51bGwgOiBwYWdpbmF0YWJsZUl0ZW0uZWRpdEZvcm1EaXNwbGF5ZWRCeVVzZXI7XG4gICAgICAgIGNvbnN0IHNob3VsZERpc3BsYXlFZGl0Rm9ybSA9IHZpZXdUZW1wbGF0ZUNvbmZpZyA/IHZpZXdUZW1wbGF0ZUNvbmZpZy5zaG93RWRpdEZvcm0odmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHsgaW5kZXgsIHNob3VsZERpc3BsYXlFZGl0Rm9ybSwgZWRpdEZvcm1EaXNwbGF5ZWRCeVVzZXIgfTtcbiAgICAgIH0pLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkRGlzcGxheU9ubHlFZGl0Rm9ybUl0ZW1zKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uc2hvdWxkRGlzcGxheUVkaXRGb3JtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFBhZ2VGb3JJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoaW5kZXggLyB0aGlzLm5hdmlnYXRvci5pdGVtc1BlclBhZ2UpICsgMSk7XG4gIH1cblxuICBnZXQgY3VzdG9tVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UudGVtcGxhdGVzW3RoaXMuc2NoZW1hLnZpZXdUZW1wbGF0ZUNvbmZpZy5pdGVtVGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIGdldCBzaG91bGREaXNwbGF5Vmlld1RlbXBsYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS52aWV3VGVtcGxhdGVDb25maWcgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBzb3J0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuc29ydGFibGUgJiYgIXRoaXMuc2hvdWxkRGlzcGxheU9ubHlFZGl0Rm9ybUl0ZW1zO1xuICB9XG5cbiAgc2hvdWxkRGlzcGxheUVkaXRhYmxlRmllbGRzRm9ySXRlbShpdGVtOiBQYWdpbmF0ZWRJdGVtKTogYm9vbGVhbiB7XG4gICAgLy8gb3ZlcnJpZGUgZGVmYXVsdCBkaXNwbGF5IHN0YXRlIHRoYXQgaXMgYmFzZWQgb24gdmlld1RlbXBsYXRlQ29uZmlnLnNob3dFZGl0Rm9ybShpdGVtKSB3aXRoIHVzZXIgYWN0aW9uXG4gICAgY29uc3Qgc2hvdWxkRGlzcGxheUVkaXRGb3JtID0gaXRlbS5lZGl0Rm9ybURpc3BsYXllZEJ5VXNlciAhPSBudWxsID8gaXRlbS5lZGl0Rm9ybURpc3BsYXllZEJ5VXNlciA6IGl0ZW0uc2hvdWxkRGlzcGxheUVkaXRGb3JtO1xuICAgIHJldHVybiBzaG91bGREaXNwbGF5RWRpdEZvcm0gfHwgdGhpcy5oYXNQcm9ibGVtT3JQYXRjaChpdGVtLmluZGV4KTtcbiAgfVxuXG4gIHNldCBzaG91bGREaXNwbGF5T25seUVkaXRGb3JtSXRlbXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLl9zaG91bGREaXNwbGF5T25seUVkaXRGb3JtSXRlbXMgPSB2YWx1ZTtcbiAgICB0aGlzLnBhZ2luYXRhYmxlSXRlbXMgPSB0aGlzLmdldFBhZ2luYXRhYmxlSXRlbXMoKTtcbiAgICB0aGlzLnBhZ2luYXRlZEl0ZW1zID0gdGhpcy5nZXRQYWdpbmF0YWJsZUl0ZW1zRm9yUGFnZSh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgfVxuXG5cbiAgZ2V0IHNob3VsZERpc3BsYXlPbmx5RWRpdEZvcm1JdGVtcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkRGlzcGxheU9ubHlFZGl0Rm9ybUl0ZW1zO1xuICB9XG59XG4iLCI8ZGl2IFtpZF09XCJwYXRoU3RyaW5nXCI+XG4gIDwhLS0gVG9wIEJhcjogTmF2aWdhdG9yLCBUb0VkaXQvQWxsIHN3aXRjaCwgY3VzdG9tIGhlYWRlciBpdGVtIGV0Yy4gLS0+XG4gIDxkaXYgKm5nSWY9XCJuYXZpZ2F0b3IgfHwgc2hvdWxkRGlzcGxheVZpZXdUZW1wbGF0ZVwiIGNsYXNzPVwidG9wLWJhci1jb250YWluZXJcIj5cbiAgICA8ZGl2ICpuZ0lmPVwibmF2aWdhdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBmaW5kLWJ1dHRvblwiIChjbGljayk9XCJvbkZpbmRDbGljaygpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJmaW5kRXhwcmVzc2lvblwiIChrZXlwcmVzcyk9XCJvbkZpbmRJbnB1dEtleXByZXNzKCRldmVudC5rZXkpXCIgcGxhY2Vob2xkZXI9XCJGaW5kXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIiAqbmdJZj1cInNob3VsZERpc3BsYXlGb3VuZE5hdmlnYXRpb25cIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIFtkaXNhYmxlZF09XCJjdXJyZW50Rm91bmQgPD0gMFwiIChjbGljayk9XCJvbkZvdW5kTmF2aWdhdGUoLTEpXCI+4p2uPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIiAqbmdJZj1cInNob3VsZERpc3BsYXlGb3VuZE5hdmlnYXRpb25cIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIFtkaXNhYmxlZF09XCJjdXJyZW50Rm91bmQgPj0gZm91bmRJbmRpY2VzLmxlbmd0aCAtIDFcIiAoY2xpY2spPVwib25Gb3VuZE5hdmlnYXRlKDEpXCI+4p2vPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJmb3VuZEluZGljZXNcIiBbbmdTd2l0Y2hdPVwiZm91bmRJbmRpY2VzLmxlbmd0aFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gdHJhbnNwYXJlbnQgYm9yZGVybGVzc1wiPlxuICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCIwXCI+XG4gICAgICAgICAgICBOb3RoaW5nIGZvdW5kXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICB7e2N1cnJlbnRGb3VuZCArIDF9fSBvZiB7e2ZvdW5kSW5kaWNlcy5sZW5ndGh9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInNob3VsZERpc3BsYXlWaWV3VGVtcGxhdGVcIiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1zd2l0Y2hcIiBbY2xhc3MuYWN0aXZlXT1cIiFzaG91bGREaXNwbGF5T25seUVkaXRGb3JtSXRlbXNcIiAoY2xpY2spPVwic2hvdWxkRGlzcGxheU9ubHlFZGl0Rm9ybUl0ZW1zID0gZmFsc2VcIj5BbGw8L2xhYmVsPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1zd2l0Y2hcIiBbY2xhc3MuYWN0aXZlXT1cInNob3VsZERpc3BsYXlPbmx5RWRpdEZvcm1JdGVtc1wiIChjbGljayk9XCJzaG91bGREaXNwbGF5T25seUVkaXRGb3JtSXRlbXMgPSB0cnVlXCI+VG8gRWRpdDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cImhlYWRlckl0ZW1UZW1wbGF0ZVwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlckl0ZW1UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cIm5hdmlnYXRvclwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiaXRlbS1jb3VudC1sYWJlbFwiPlxuICAgICAgICB7e3BhZ2luYXRhYmxlSXRlbXMuc2l6ZX19IHt7cGF0aFtwYXRoLmxlbmd0aCAtIDFdfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnI+XG4gICAgICA8cGFnaW5hdGlvbiBbdG90YWxJdGVtc109XCJwYWdpbmF0YWJsZUl0ZW1zLnNpemVcIiBbbmdNb2RlbF09XCJjdXJyZW50UGFnZVwiIFttYXhTaXplXT1cIm5hdmlnYXRvci5tYXhWaXNpYmxlUGFnZUNvdW50XCIgW2l0ZW1zUGVyUGFnZV09XCJuYXZpZ2F0b3IuaXRlbXNQZXJQYWdlXCJcbiAgICAgICAgY2xhc3M9XCJwYWdpbmF0aW9uLXNtIHBhZ2luYXRpb24tdG9wXCIgW2JvdW5kYXJ5TGlua3NdPVwidHJ1ZVwiIFtyb3RhdGVdPVwiZmFsc2VcIiBbZmlyc3RUZXh0XT1cIifina7ina4nXCIgW3ByZXZpb3VzVGV4dF09XCIn4p2uJ1wiXG4gICAgICAgIFtuZXh0VGV4dF09XCIn4p2vJ1wiIFtsYXN0VGV4dF09XCIn4p2v4p2vJ1wiIChwYWdlQ2hhbmdlZCk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50LnBhZ2UpXCI+PC9wYWdpbmF0aW9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBbbmdDbGFzc109XCJyZWRMZWZ0Qm9yZGVyQ2xhc3NcIj5cbiAgICA8IS0tIEVsZW1lbnRzIC0tPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGFnaW5hdGVkSXRlbXM7IHRyYWNrQnk6dHJhY2tCeUVsZW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wbGV4LWxpc3QtZmllbGQtd3JhcHBlclwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3VsZERpc3BsYXlWaWV3VGVtcGxhdGUgJiYgdmFsdWVzLmdldChpdGVtLmluZGV4KS5rZXlTZXEoKS5zaXplICE9IDBcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06IHZhbHVlcy5nZXQoaXRlbS5pbmRleCl9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIml0ZW0uZWRpdEZvcm1EaXNwbGF5ZWRCeVVzZXIgPSAhc2hvdWxkRGlzcGxheUVkaXRhYmxlRmllbGRzRm9ySXRlbShpdGVtKVwiPlxuICAgICAgICAgICAge3tzaG91bGREaXNwbGF5RWRpdGFibGVGaWVsZHNGb3JJdGVtKGl0ZW0pID8gJ0hpZGUgRmllbGRzJyA6ICdTaG93IEZpZWxkcyd9fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3VsZERpc3BsYXlFZGl0YWJsZUZpZWxkc0Zvckl0ZW0oaXRlbSlcIj5cbiAgICAgICAgICA8b2JqZWN0LWZpZWxkIFt2YWx1ZV09XCJ2YWx1ZXMuZ2V0KGl0ZW0uaW5kZXgpXCIgW3NjaGVtYV09XCJzY2hlbWEuaXRlbXNcIiBbcGF0aF09XCJnZXRQYXRoRm9yQ2hpbGQoaXRlbS5pbmRleClcIiBbaXNDb21wbGV4TGlzdEZpZWxkSXRlbV09XCJ0cnVlXCI+XG4gICAgICAgICAgPC9vYmplY3QtZmllbGQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBlbGVtZW50LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICA8bGlzdC1hY3Rpb24tZ3JvdXAgKG9uTW92ZSk9XCJtb3ZlRWxlbWVudChpdGVtLmluZGV4LCAkZXZlbnQpXCIgKG9uRGVsZXRlKT1cImRlbGV0ZUVsZW1lbnQoaXRlbS5pbmRleClcIiBbY2FuTW92ZV09XCJzb3J0YWJsZVwiXG4gICAgICAgICAgICAgICAgW2lzRGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgaGFzUGF0Y2hPckNoaWxkcmVuSGF2ZVBhdGNoKClcIj5cbiAgICAgICAgICAgICAgPC9saXN0LWFjdGlvbi1ncm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiICpuZ0lmPVwicmVtb3ZlSnNvblBhdGNoXCI+XG4gICAgICA8cGF0Y2gtYWN0aW9ucyBbcGF0Y2hdPVwicmVtb3ZlSnNvblBhdGNoXCI+PC9wYXRjaC1hY3Rpb25zPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0Zvcj1cImxldCBwYXRjaCBvZiBhZGRKc29uUGF0Y2hlc1wiIGNsYXNzPVwiY29tcGxleC1saXN0LWZpZWxkLXdyYXBwZXJcIj5cbiAgICA8YWRkLW9yLXJlcGxhY2UtcGF0Y2ggW3BhdGNoXT1cInBhdGNoXCI+PC9hZGQtb3ItcmVwbGFjZS1wYXRjaD5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJyZXBsYWNlSnNvblBhdGNoZXMgJiYgcmVwbGFjZUpzb25QYXRjaGVzWzBdXCI+XG4gICAgPGFkZC1vci1yZXBsYWNlLXBhdGNoIFtwYXRjaF09XCJyZXBsYWNlSnNvblBhdGNoZXNbMF1cIj48L2FkZC1vci1yZXBsYWNlLXBhdGNoPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19