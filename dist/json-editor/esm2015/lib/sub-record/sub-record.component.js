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
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "@angular/common";
import * as i3 from "../title-dropdown/title-dropdown.component";
import * as i4 from "../find-replace/find-replace.component";
import * as i5 from "../any-type-field/any-type-field.component";
import * as i6 from "../add-new-element-button/add-new-element-button.component";
import * as i7 from "../shared/pipes/self-or-empty.pipe";
import * as i8 from "../shared/pipes/set-first-element-path.pipe";
import * as i9 from "../shared/pipes/underscore-to-space.pipe";
function SubRecordComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "slide-toggle", 7);
    i0.ɵɵlistener("valueChange", function SubRecordComponent_tr_3_td_1_Template_slide_toggle_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const key_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onToggleValueChange(key_r3, $event); });
    i0.ɵɵpipe(2, "selfOrEmpty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", "/" + key_r3)("value", i0.ɵɵpipeBind2(2, 5, ctx_r2.value.get(key_r3), ctx_r2.schema.properties[key_r3]))("onText", key_r3)("offText", key_r3)("onColor", ctx_r2.schema.properties[key_r3].toggleColor);
} }
function SubRecordComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 5);
    i0.ɵɵtemplate(1, SubRecordComponent_tr_3_td_1_Template, 3, 8, "td", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.keysByType.toggles)("ngForTrackBy", ctx_r0.trackByElement);
} }
function SubRecordComponent_div_4_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵelement(1, "add-new-element-button", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("path", ctx_r8.getPathForChild(key_r7))("schema", ctx_r8.schema.properties[key_r7]);
} }
function SubRecordComponent_div_4_div_1_ng_container_9_li_1_ng_template_1_Template(rf, ctx) { }
function SubRecordComponent_div_4_div_1_ng_container_9_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵtemplate(1, SubRecordComponent_div_4_div_1_ng_container_9_li_1_ng_template_1_Template, 0, 0, "ng-template", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const templateName_r12 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r11.appGlobalsService.templates[templateName_r12]);
} }
function SubRecordComponent_div_4_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubRecordComponent_div_4_div_1_ng_container_9_li_1_Template, 2, 1, "li", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.getTitleDropdownItemTemplateNamesForChild(key_r7));
} }
function SubRecordComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "td", 9);
    i0.ɵɵelementStart(3, "title-dropdown", 10);
    i0.ɵɵpipe(4, "underscoreToSpace");
    i0.ɵɵtemplate(5, SubRecordComponent_div_4_div_1_li_5_Template, 2, 2, "li", 11);
    i0.ɵɵelementStart(6, "li", 12);
    i0.ɵɵelementStart(7, "button", 13);
    i0.ɵɵlistener("click", function SubRecordComponent_div_4_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r16); const key_r7 = ctx.$implicit; const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.deleteField(key_r7); });
    i0.ɵɵtext(8, "Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, SubRecordComponent_div_4_div_1_ng_container_9_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelement(10, "li", 14);
    i0.ɵɵelementStart(11, "li", 15);
    i0.ɵɵlistener("click", function SubRecordComponent_div_4_div_1_Template_li_click_11_listener($event) { i0.ɵɵrestoreView(_r16); return $event.stopPropagation(); });
    i0.ɵɵelement(12, "find-replace", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "tr");
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵelement(15, "any-type-field", 17);
    i0.ɵɵpipe(16, "selfOrEmpty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(4, 9, key_r7))("isDisabled", ctx_r6.isDisabled(key_r7));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.schema.properties[key_r7].type === "array");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r6.getTitleDropdownItemTemplateNamesForChild(key_r7));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("path", ctx_r6.getPathForChild(key_r7))("schema", ctx_r6.schema.properties[key_r7]);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", i0.ɵɵpipeBind2(16, 11, ctx_r6.value.get(key_r7), ctx_r6.schema.properties[key_r7]))("schema", ctx_r6.schema.properties[key_r7])("path", ctx_r6.getPathForChild(key_r7));
} }
function SubRecordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SubRecordComponent_div_4_div_1_Template, 17, 14, "div", 8);
    i0.ɵɵpipe(2, "setFirstElementPath");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 2, ctx_r1.keysByType.others, ctx_r1.tabName))("ngForTrackBy", ctx_r1.trackByElement);
} }
export class SubRecordComponent {
    constructor(jsonStoreService, appGlobalsService, tabsUtilService, keysStoreService) {
        this.jsonStoreService = jsonStoreService;
        this.appGlobalsService = appGlobalsService;
        this.tabsUtilService = tabsUtilService;
        this.keysStoreService = keysStoreService;
        this.pathCache = {};
    }
    ngOnChanges(changes) {
        if (changes['keys']) {
            let keys;
            if (this.tabName) {
                const keyToTabName = this.tabsUtilService.getSchemaKeyToTabName(this.appGlobalsService.config.tabsConfig, this.schema);
                keys = this.keys
                    .filter(key => keyToTabName[key] === this.tabName);
            }
            else {
                keys = this.keys;
            }
            this.keysByType = keys
                .groupBy(key => this.isToggle(key) ? 'toggles' : 'others')
                .toObject();
        }
    }
    // delete only work for others, not toggles (UPDATE: config comment if this changes)
    deleteField(field) {
        this.jsonStoreService.removeIn(this.getPathForChild(field));
    }
    getPathForChild(key) {
        if (!this.pathCache[key]) {
            this.pathCache[key] = [key];
        }
        return this.pathCache[key];
    }
    onToggleValueChange(field, value) {
        this.jsonStoreService.setIn(this.getPathForChild(field), value);
    }
    isToggle(field) {
        return this.schema.properties[field].toggleColor !== undefined;
    }
    isDisabled(key) {
        return this.schema.properties[key].disabled && !this.appGlobalsService.adminMode;
    }
    trackByElement(index, element) {
        return element;
    }
    getTitleDropdownItemTemplateNamesForChild(key) {
        return this.schema.properties[key].titleDropdownItemTemplateNames;
    }
}
SubRecordComponent.ɵfac = function SubRecordComponent_Factory(t) { return new (t || SubRecordComponent)(i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.TabsUtilService), i0.ɵɵdirectiveInject(i1.KeysStoreService)); };
SubRecordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubRecordComponent, selectors: [["sub-record"]], inputs: { value: "value", schema: "schema", tabName: "tabName", keys: "keys", pathString: "pathString" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [[1, "record-fields-container"], [1, "table"], [1, "field-wrapper"], ["class", "align-right", 4, "ngIf"], [4, "ngIf"], [1, "align-right"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "value", "onText", "offText", "onColor", "valueChange"], ["class", "field-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "label-holder"], [3, "title", "isDisabled"], ["class", "title-dropdown-item", 4, "ngIf"], [1, "title-dropdown-item"], ["type", "button", 1, "editor-btn-delete", "editor-btn-delete-text", 3, "click"], [1, "divider"], [1, "title-dropdown-item", 3, "click"], [3, "path", "schema"], [3, "value", "schema", "path"], ["class", "title-dropdown-item custom-title-dropdown-item", 4, "ngFor", "ngForOf"], [1, "title-dropdown-item", "custom-title-dropdown-item"], [3, "ngTemplateOutlet"]], template: function SubRecordComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, SubRecordComponent_tr_3_Template, 2, 2, "tr", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, SubRecordComponent_div_4_Template, 3, 5, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.keysByType.toggles);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.keysByType.others);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.TitleDropdownComponent, i4.FindReplaceComponent, i5.AnyTypeFieldComponent, i6.AddNewElementButtonComponent, i2.NgTemplateOutlet], pipes: [i7.SelfOrEmptyPipe, i8.SetFirstElementPathPipe, i9.UnderscoreToSpacePipe], styles: ["tr.align-right[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:100%}tr.align-right[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   slide-toggle[_ngcontent-%COMP%]{float:right}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubRecordComponent, [{
        type: Component,
        args: [{
                selector: 'sub-record',
                styleUrls: [
                    './sub-record.component.scss'
                ],
                templateUrl: './sub-record.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.JsonStoreService }, { type: i1.AppGlobalsService }, { type: i1.TabsUtilService }, { type: i1.KeysStoreService }]; }, { value: [{
            type: Input
        }], schema: [{
            type: Input
        }], tabName: [{
            type: Input
        }], keys: [{
            type: Input
        }], pathString: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXJlY29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc3ViLXJlY29yZC9zdWItcmVjb3JkLmNvbXBvbmVudC50cyIsImxpYi9zdWItcmVjb3JkL3N1Yi1yZWNvcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBSUwsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDekJmLDBCQUNFO0lBQUEsdUNBQytGO0lBREYsd1FBQWdEOztJQUM3RCxpQkFBZTtJQUNqRyxpQkFBSzs7OztJQUZXLGVBQWdCO0lBQWhCLGlDQUFnQiwyRkFBQSxrQkFBQSxtQkFBQSx5REFBQTs7O0lBRmxDLDZCQUNFO0lBQUEsc0VBQ0U7SUFHSixpQkFBSzs7O0lBSkMsZUFBOEQ7SUFBOUQsbURBQThELHVDQUFBOzs7SUFXNUQsOEJBQ0U7SUFBQSw2Q0FBaUg7SUFDbkgsaUJBQUs7Ozs7SUFEcUIsZUFBNkI7SUFBN0IscURBQTZCLDRDQUFBOzs7O0lBTXJELDhCQUNFO0lBQUEsb0hBQTRFO0lBQzlFLGlCQUFLOzs7O0lBRFUsZUFBOEQ7SUFBOUQsd0ZBQThEOzs7SUFGL0UsNkJBQ0U7SUFBQSw2RkFDRTtJQUVKLDBCQUFlOzs7O0lBSFQsZUFBMkU7SUFBM0Usa0ZBQTJFOzs7O0lBWHpGLDhCQUNFO0lBQUEsMEJBQ0U7SUFBQSw2QkFDRTtJQUFBLDBDQUNFOztJQUFBLDhFQUNFO0lBRUYsOEJBQ0U7SUFBQSxrQ0FBa0c7SUFBM0IscU9BQTBCO0lBQUMsc0JBQU07SUFBQSxpQkFBUztJQUNuSCxpQkFBSztJQUNMLGlHQUNFO0lBSUYsMEJB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QU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBRTtJQUNwRixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWEsRUFBRSxPQUFZO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5Q0FBeUMsQ0FBQyxHQUFXO1FBQ25ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsOEJBQThCLENBQUM7SUFDcEUsQ0FBQzs7b0ZBOURVLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDNUMvQiw4QkFDRTtRQUFBLGdDQUNFO1FBQUEsOEJBQ0U7UUFBQSxpRUFDRTtRQUtKLGlCQUFNO1FBQ04sbUVBQ0U7UUE2QkosaUJBQVE7UUFDVixpQkFBTTs7UUF0Q0ksZUFBMEI7UUFBMUIsNkNBQTBCO1FBTzNCLGVBQXlCO1FBQXpCLDRDQUF5Qjs7a0REa0NyQixrQkFBa0I7Y0FSOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1QsNkJBQTZCO2lCQUM5QjtnQkFDRCxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnS0FFVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWFwLCBTZXQgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBQYXRoQ2FjaGUsIEpTT05TY2hlbWEgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBKc29uU3RvcmVTZXJ2aWNlLCBBcHBHbG9iYWxzU2VydmljZSwgVGFic1V0aWxTZXJ2aWNlLCBLZXlzU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ViLXJlY29yZCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL3N1Yi1yZWNvcmQuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItcmVjb3JkLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3ViUmVjb3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsdWU6IE1hcDxzdHJpbmcsIGFueT47XG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTlNjaGVtYTtcbiAgQElucHV0KCkgdGFiTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBrZXlzOiBTZXQ8c3RyaW5nPjtcbiAgQElucHV0KCkgcGF0aFN0cmluZzogc3RyaW5nO1xuXG4gIGtleXNCeVR5cGU6IHsgb3RoZXJzOiBTZXQ8c3RyaW5nPiwgdG9nZ2xlczogU2V0PHN0cmluZz4gfTtcbiAgcGF0aENhY2hlOiBQYXRoQ2FjaGUgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMganNvblN0b3JlU2VydmljZTogSnNvblN0b3JlU2VydmljZSxcbiAgICBwdWJsaWMgYXBwR2xvYmFsc1NlcnZpY2U6IEFwcEdsb2JhbHNTZXJ2aWNlLFxuICAgIHB1YmxpYyB0YWJzVXRpbFNlcnZpY2U6IFRhYnNVdGlsU2VydmljZSxcbiAgICBwdWJsaWMga2V5c1N0b3JlU2VydmljZTogS2V5c1N0b3JlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydrZXlzJ10pIHtcbiAgICAgIGxldCBrZXlzO1xuICAgICAgaWYgKHRoaXMudGFiTmFtZSkge1xuICAgICAgICBjb25zdCBrZXlUb1RhYk5hbWUgPSB0aGlzLnRhYnNVdGlsU2VydmljZS5nZXRTY2hlbWFLZXlUb1RhYk5hbWUodGhpcy5hcHBHbG9iYWxzU2VydmljZS5jb25maWcudGFic0NvbmZpZywgdGhpcy5zY2hlbWEpO1xuICAgICAgICBrZXlzID0gdGhpcy5rZXlzXG4gICAgICAgICAgLmZpbHRlcihrZXkgPT4ga2V5VG9UYWJOYW1lW2tleV0gPT09IHRoaXMudGFiTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gdGhpcy5rZXlzO1xuICAgICAgfVxuICAgICAgdGhpcy5rZXlzQnlUeXBlID0ga2V5c1xuICAgICAgICAuZ3JvdXBCeShrZXkgPT4gdGhpcy5pc1RvZ2dsZShrZXkpID8gJ3RvZ2dsZXMnIDogJ290aGVycycpXG4gICAgICAgIC50b09iamVjdCgpIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICAvLyBkZWxldGUgb25seSB3b3JrIGZvciBvdGhlcnMsIG5vdCB0b2dnbGVzIChVUERBVEU6IGNvbmZpZyBjb21tZW50IGlmIHRoaXMgY2hhbmdlcylcbiAgZGVsZXRlRmllbGQoZmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5yZW1vdmVJbih0aGlzLmdldFBhdGhGb3JDaGlsZChmaWVsZCkpO1xuICB9XG5cbiAgZ2V0UGF0aEZvckNoaWxkKGtleTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgaWYgKCF0aGlzLnBhdGhDYWNoZVtrZXldKSB7XG4gICAgICB0aGlzLnBhdGhDYWNoZVtrZXldID0gW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhdGhDYWNoZVtrZXldO1xuICB9XG5cbiAgb25Ub2dnbGVWYWx1ZUNoYW5nZShmaWVsZDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5zZXRJbih0aGlzLmdldFBhdGhGb3JDaGlsZChmaWVsZCksIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNUb2dnbGUoZmllbGQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2ZpZWxkXS50b2dnbGVDb2xvciAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZChrZXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldLmRpc2FibGVkICYmICF0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLmFkbWluTW9kZSA7XG4gIH1cblxuICB0cmFja0J5RWxlbWVudChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgZ2V0VGl0bGVEcm9wZG93bkl0ZW1UZW1wbGF0ZU5hbWVzRm9yQ2hpbGQoa2V5OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldLnRpdGxlRHJvcGRvd25JdGVtVGVtcGxhdGVOYW1lcztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInJlY29yZC1maWVsZHMtY29udGFpbmVyXCI+XG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIj5cbiAgICAgIDx0ciAqbmdJZj1cImtleXNCeVR5cGUudG9nZ2xlc1wiIGNsYXNzPVwiYWxpZ24tcmlnaHRcIj5cbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2Yga2V5c0J5VHlwZS50b2dnbGVzOyB0cmFja0J5OnRyYWNrQnlFbGVtZW50XCI+XG4gICAgICAgICAgPHNsaWRlLXRvZ2dsZSBbaWRdPVwiJy8nICsga2V5XCIgW3ZhbHVlXT1cInZhbHVlLmdldChrZXkpIHwgc2VsZk9yRW1wdHk6c2NoZW1hLnByb3BlcnRpZXNba2V5XVwiICh2YWx1ZUNoYW5nZSk9XCJvblRvZ2dsZVZhbHVlQ2hhbmdlKGtleSwgJGV2ZW50KVwiXG4gICAgICAgICAgICBbb25UZXh0XT1cImtleVwiIFtvZmZUZXh0XT1cImtleVwiIFtvbkNvbG9yXT1cInNjaGVtYS5wcm9wZXJ0aWVzW2tleV0udG9nZ2xlQ29sb3JcIj48L3NsaWRlLXRvZ2dsZT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cImtleXNCeVR5cGUub3RoZXJzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiICpuZ0Zvcj1cImxldCBrZXkgb2Yga2V5c0J5VHlwZS5vdGhlcnMgfCBzZXRGaXJzdEVsZW1lbnRQYXRoOnRhYk5hbWU7IHRyYWNrQnk6dHJhY2tCeUVsZW1lbnRcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICAgICAgPHRpdGxlLWRyb3Bkb3duIFt0aXRsZV09XCJrZXkgfCB1bmRlcnNjb3JlVG9TcGFjZVwiIFtpc0Rpc2FibGVkXT1cImlzRGlzYWJsZWQoa2V5KVwiPlxuICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJzY2hlbWEucHJvcGVydGllc1trZXldLnR5cGUgPT09ICdhcnJheSdcIiBjbGFzcz1cInRpdGxlLWRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YWRkLW5ldy1lbGVtZW50LWJ1dHRvbiBbcGF0aF09XCJnZXRQYXRoRm9yQ2hpbGQoa2V5KVwiIFtzY2hlbWFdPVwic2NoZW1hLnByb3BlcnRpZXNba2V5XVwiPjwvYWRkLW5ldy1lbGVtZW50LWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGl0bGUtZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdG9yLWJ0bi1kZWxldGUgZWRpdG9yLWJ0bi1kZWxldGUtdGV4dFwiIChjbGljayk9XCJkZWxldGVGaWVsZChrZXkpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRUaXRsZURyb3Bkb3duSXRlbVRlbXBsYXRlTmFtZXNGb3JDaGlsZChrZXkpXCI+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZU5hbWUgb2YgZ2V0VGl0bGVEcm9wZG93bkl0ZW1UZW1wbGF0ZU5hbWVzRm9yQ2hpbGQoa2V5KVwiIGNsYXNzPVwidGl0bGUtZHJvcGRvd24taXRlbSBjdXN0b20tdGl0bGUtZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFwcEdsb2JhbHNTZXJ2aWNlLnRlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpdGxlLWRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgPGZpbmQtcmVwbGFjZSBbcGF0aF09XCJnZXRQYXRoRm9yQ2hpbGQoa2V5KVwiIFtzY2hlbWFdPVwic2NoZW1hLnByb3BlcnRpZXNba2V5XVwiPjwvZmluZC1yZXBsYWNlPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC90aXRsZS1kcm9wZG93bj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGFueS10eXBlLWZpZWxkIFt2YWx1ZV09XCJ2YWx1ZS5nZXQoa2V5KSB8IHNlbGZPckVtcHR5OnNjaGVtYS5wcm9wZXJ0aWVzW2tleV1cIiBbc2NoZW1hXT1cInNjaGVtYS5wcm9wZXJ0aWVzW2tleV1cIiBbcGF0aF09XCJnZXRQYXRoRm9yQ2hpbGQoa2V5KVwiPjwvYW55LXR5cGUtZmllbGQ+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RhYmxlPlxuPC9kaXY+XG4iXX0=