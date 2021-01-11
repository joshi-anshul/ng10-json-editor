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
function ObjectFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "add-nested-field-dropdown", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("pathString", ctx_r0.pathString)("schema", ctx_r0.schema)("isDisabled", ctx_r0.disabled);
} }
function ObjectFieldComponent_tr_3_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelement(1, "add-new-element-button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("path", ctx_r6.getPathForChild(key_r5))("schema", ctx_r6.schema.properties[key_r5]);
} }
function ObjectFieldComponent_tr_3_ng_container_9_li_1_ng_template_1_Template(rf, ctx) { }
function ObjectFieldComponent_tr_3_ng_container_9_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵtemplate(1, ObjectFieldComponent_tr_3_ng_container_9_li_1_ng_template_1_Template, 0, 0, "ng-template", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const templateName_r10 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r9.appGlobalsService.templates[templateName_r10]);
} }
function ObjectFieldComponent_tr_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ObjectFieldComponent_tr_3_ng_container_9_li_1_Template, 2, 1, "li", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.getTitleDropdownItemTemplateNamesForChild(key_r5));
} }
function ObjectFieldComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 12);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "title-dropdown", 13);
    i0.ɵɵpipe(4, "underscoreToSpace");
    i0.ɵɵtemplate(5, ObjectFieldComponent_tr_3_li_5_Template, 2, 2, "li", 14);
    i0.ɵɵelementStart(6, "li", 15);
    i0.ɵɵelementStart(7, "button", 16);
    i0.ɵɵlistener("click", function ObjectFieldComponent_tr_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r14); const key_r5 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.deleteField(key_r5); });
    i0.ɵɵtext(8, "Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ObjectFieldComponent_tr_3_ng_container_9_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵelement(11, "any-type-field", 17);
    i0.ɵɵpipe(12, "selfOrEmpty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(4, 7, key_r5))("isDisabled", ctx_r1.isPropertyDisabled(key_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.schema.properties[key_r5].type === "array");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.getTitleDropdownItemTemplateNamesForChild(key_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", i0.ɵɵpipeBind2(12, 9, ctx_r1.value.get(key_r5), ctx_r1.schema.properties[key_r5]))("schema", ctx_r1.schema.properties[key_r5])("path", ctx_r1.getPathForChild(key_r5));
} }
function ObjectFieldComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 12);
    i0.ɵɵelement(2, "title-dropdown", 13);
    i0.ɵɵpipe(3, "underscoreToSpace");
    i0.ɵɵpipe(4, "lastPathElement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵelement(6, "add-or-replace-patch", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patch_r15 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(3, 3, i0.ɵɵpipeBind1(4, 5, patch_r15.path)))("isDisabled", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("patch", patch_r15);
} }
function ObjectFieldComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "patch-actions", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r3.removeJsonPatch);
} }
function ObjectFieldComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "add-or-replace-patch", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r4.replaceJsonPatches[0]);
} }
export class ObjectFieldComponent extends AbstractFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef, keysStoreService) {
        super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.keysStoreService = keysStoreService;
        this.isComplexListFieldItem = false;
    }
    get keys$() {
        return this.keysStoreService.forPath(this.pathString);
    }
    deleteField(name) {
        const fieldPath = this.path.concat(name);
        this.jsonStoreService.removeIn(fieldPath);
    }
    isPropertyDisabled(name) {
        return this.schema.properties[name].disabled && !this.appGlobalsService.adminMode;
    }
    getTitleDropdownItemTemplateNamesForChild(key) {
        return this.schema.properties[key].titleDropdownItemTemplateNames;
    }
}
ObjectFieldComponent.ɵfac = function ObjectFieldComponent_Factory(t) { return new (t || ObjectFieldComponent)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.KeysStoreService)); };
ObjectFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ObjectFieldComponent, selectors: [["object-field"]], inputs: { value: "value", schema: "schema", path: "path", isComplexListFieldItem: "isComplexListFieldItem" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 16, consts: [[3, "id"], ["class", "pull-right", 4, "ngIf"], [1, "table", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "button-holder"], [3, "fields", "pathString", "schema", "isDisabled"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], [1, "pull-right"], [3, "pathString", "schema", "isDisabled"], [1, "label-holder"], [3, "title", "isDisabled"], ["class", "title-dropdown-item", 4, "ngIf"], [1, "title-dropdown-item"], ["type", "button", 1, "editor-btn-delete", "editor-btn-delete-text", 3, "click"], [3, "value", "schema", "path"], [3, "path", "schema"], ["class", "title-dropdown-item custom-title-dropdown-item", 4, "ngFor", "ngForOf"], [1, "title-dropdown-item", "custom-title-dropdown-item"], [3, "ngTemplateOutlet"], [3, "patch"]], template: function ObjectFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ObjectFieldComponent_div_1_Template, 2, 3, "div", 1);
        i0.ɵɵelementStart(2, "table", 2);
        i0.ɵɵtemplate(3, ObjectFieldComponent_tr_3_Template, 13, 12, "tr", 3);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵtemplate(5, ObjectFieldComponent_tr_5_Template, 7, 7, "tr", 4);
        i0.ɵɵtemplate(6, ObjectFieldComponent_tr_6_Template, 2, 1, "tr", 5);
        i0.ɵɵelementStart(7, "tr");
        i0.ɵɵelementStart(8, "td", 6);
        i0.ɵɵelementStart(9, "add-field-dropdown", 7);
        i0.ɵɵpipe(10, "async");
        i0.ɵɵelement(11, "i", 8);
        i0.ɵɵelement(12, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, ObjectFieldComponent_div_13_Template, 2, 1, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.pathString);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isComplexListFieldItem);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.redLeftBorderClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 12, ctx.keys$))("ngForTrackBy", ctx.trackByElement);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(10, 14, ctx.keys$))("pathString", ctx.pathString)("schema", ctx.schema)("isDisabled", ctx.disabled);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, styles: ["table.table[_ngcontent-%COMP%]{background-color:#f9f9f9}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ObjectFieldComponent, [{
        type: Component,
        args: [{
                selector: 'object-field',
                styleUrls: [
                    './object-field.component.scss'
                ],
                templateUrl: './object-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.JsonStoreService }, { type: i1.PathUtilService }, { type: i0.ChangeDetectorRef }, { type: i1.KeysStoreService }]; }, { value: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }], isComplexListFieldItem: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9vYmplY3QtZmllbGQvb2JqZWN0LWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi9vYmplY3QtZmllbGQvb2JqZWN0LWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUdGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0Qix1QkFBdUIsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFJdkgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7SUMxQnpELCtCQUNFO0lBQUEsZ0RBQTJIO0lBQzdILGlCQUFNOzs7SUFEdUIsZUFBeUI7SUFBekIsOENBQXlCLHlCQUFBLCtCQUFBOzs7SUFTNUMsOEJBQ0U7SUFBQSw2Q0FBaUg7SUFDbkgsaUJBQUs7Ozs7SUFEcUIsZUFBNkI7SUFBN0IscURBQTZCLDRDQUFBOzs7O0lBTXJELDhCQUNFO0lBQUEsK0dBQTRFO0lBQzlFLGlCQUFLOzs7O0lBRFUsZUFBOEQ7SUFBOUQsdUZBQThEOzs7SUFGL0UsNkJBQ0U7SUFBQSx3RkFDRTtJQUVKLDBCQUFlOzs7O0lBSFQsZUFBMkU7SUFBM0Usa0ZBQTJFOzs7O0lBWnpGLDBCQUNFO0lBQ0EsOEJBQ0U7SUFBQSwyQkFDRTtJQUFBLDBDQUNFOztJQUFBLHlFQUNFO0lBRUYsOEJBQ0U7SUFBQSxrQ0FBa0c7SUFBM0IsK05BQTBCO0lBQUMsc0JBQU07SUFBQSxpQkFBUztJQUNuSCxpQkFBSztJQUNMLDRGQUNFO0lBSUosaUJBQWlCO0lBQ25CLGlCQUFNO0lBQ1IsaUJBQUs7SUFFTCwyQkFDRTtJQUFBLHNDQUE2Sjs7SUFDL0os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QUUsY0FBYztnQkFDeEIsU0FBUyxFQUFFO29CQUNULCtCQUErQjtpQkFDaEM7Z0JBQ0QsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OE5BR1UsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcCwgU2V0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWJzdHJhY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWZpZWxkJztcbmltcG9ydCB7IEFwcEdsb2JhbHNTZXJ2aWNlLCBKc29uU3RvcmVTZXJ2aWNlLCBQYXRoVXRpbFNlcnZpY2UsIEtleXNTdG9yZVNlcnZpY2UsIFByb2JsZW1zU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvYmplY3QtZmllbGQnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9vYmplY3QtZmllbGQuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9vYmplY3QtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RGaWVsZENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0RmllbGRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBNYXA8c3RyaW5nLCBhbnk+O1xuICBASW5wdXQoKSBzY2hlbWE6IEpTT05TY2hlbWE7XG4gIEBJbnB1dCgpIHBhdGg6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIGlzQ29tcGxleExpc3RGaWVsZEl0ZW0gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwR2xvYmFsc1NlcnZpY2U6IEFwcEdsb2JhbHNTZXJ2aWNlLFxuICAgIHB1YmxpYyBwcm9ibGVtc1NlcnZpY2U6IFByb2JsZW1zU2VydmljZSxcbiAgICBwdWJsaWMganNvblN0b3JlU2VydmljZTogSnNvblN0b3JlU2VydmljZSxcbiAgICBwdWJsaWMgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMga2V5c1N0b3JlU2VydmljZTogS2V5c1N0b3JlU2VydmljZSxcbiAgICApIHtcbiAgICBzdXBlcihhcHBHbG9iYWxzU2VydmljZSwgcHJvYmxlbXNTZXJ2aWNlLCBwYXRoVXRpbFNlcnZpY2UsIGNoYW5nZURldGVjdG9yUmVmLCBqc29uU3RvcmVTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldCBrZXlzJCgpOiBSZXBsYXlTdWJqZWN0PFNldDxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMua2V5c1N0b3JlU2VydmljZS5mb3JQYXRoKHRoaXMucGF0aFN0cmluZyk7XG4gIH1cblxuICBkZWxldGVGaWVsZChuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWVsZFBhdGggPSB0aGlzLnBhdGguY29uY2F0KG5hbWUpO1xuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5yZW1vdmVJbihmaWVsZFBhdGgpO1xuICB9XG5cbiAgaXNQcm9wZXJ0eURpc2FibGVkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW25hbWVdLmRpc2FibGVkICYmICF0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLmFkbWluTW9kZSA7XG4gIH1cblxuICBnZXRUaXRsZURyb3Bkb3duSXRlbVRlbXBsYXRlTmFtZXNGb3JDaGlsZChrZXk6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0udGl0bGVEcm9wZG93bkl0ZW1UZW1wbGF0ZU5hbWVzO1xuICB9XG59XG4iLCI8ZGl2IFtpZF09XCJwYXRoU3RyaW5nXCI+XG4gIDxkaXYgKm5nSWY9XCJpc0NvbXBsZXhMaXN0RmllbGRJdGVtXCIgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XG4gICAgPGFkZC1uZXN0ZWQtZmllbGQtZHJvcGRvd24gW3BhdGhTdHJpbmddPVwicGF0aFN0cmluZ1wiIFtzY2hlbWFdPVwic2NoZW1hXCIgW2lzRGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2FkZC1uZXN0ZWQtZmllbGQtZHJvcGRvd24+XG4gIDwvZGl2PlxuXG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlXCIgW25nQ2xhc3NdPVwicmVkTGVmdEJvcmRlckNsYXNzXCI+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBrZXkgb2Yga2V5cyQgfCBhc3luYzsgdHJhY2tCeTp0cmFja0J5RWxlbWVudFwiPlxuICAgICAgPCEtLSBTVUIgRklFTEQgVElUTEUgTUVOVSAtLT5cbiAgICAgIDx0ZCBjbGFzcz1cImxhYmVsLWhvbGRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0aXRsZS1kcm9wZG93biBbdGl0bGVdPVwia2V5IHwgdW5kZXJzY29yZVRvU3BhY2VcIiBbaXNEaXNhYmxlZF09XCJpc1Byb3BlcnR5RGlzYWJsZWQoa2V5KVwiPlxuICAgICAgICAgICAgPGxpICpuZ0lmPVwic2NoZW1hLnByb3BlcnRpZXNba2V5XS50eXBlID09PSAnYXJyYXknXCIgY2xhc3M9XCJ0aXRsZS1kcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhZGQtbmV3LWVsZW1lbnQtYnV0dG9uIFtwYXRoXT1cImdldFBhdGhGb3JDaGlsZChrZXkpXCIgW3NjaGVtYV09XCJzY2hlbWEucHJvcGVydGllc1trZXldXCI+PC9hZGQtbmV3LWVsZW1lbnQtYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpdGxlLWRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJlZGl0b3ItYnRuLWRlbGV0ZSBlZGl0b3ItYnRuLWRlbGV0ZS10ZXh0XCIgKGNsaWNrKT1cImRlbGV0ZUZpZWxkKGtleSlcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0VGl0bGVEcm9wZG93bkl0ZW1UZW1wbGF0ZU5hbWVzRm9yQ2hpbGQoa2V5KVwiPlxuICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHRlbXBsYXRlTmFtZSBvZiBnZXRUaXRsZURyb3Bkb3duSXRlbVRlbXBsYXRlTmFtZXNGb3JDaGlsZChrZXkpXCIgY2xhc3M9XCJ0aXRsZS1kcm9wZG93bi1pdGVtIGN1c3RvbS10aXRsZS1kcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFwcEdsb2JhbHNTZXJ2aWNlLnRlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdGl0bGUtZHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICAgIDwhLS0gU1VCIEZJRUxEIENPTVBPTkVOVCAtLT5cbiAgICAgIDx0ZD5cbiAgICAgICAgPGFueS10eXBlLWZpZWxkIFt2YWx1ZV09XCJ2YWx1ZS5nZXQoa2V5KSB8IHNlbGZPckVtcHR5OnNjaGVtYS5wcm9wZXJ0aWVzW2tleV1cIiBbc2NoZW1hXT1zY2hlbWEucHJvcGVydGllc1trZXldIFtwYXRoXT1cImdldFBhdGhGb3JDaGlsZChrZXkpXCI+PC9hbnktdHlwZS1maWVsZD5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8IS0tIEFERCBQQVRDSEVTIEZPUiBDSElMRFJFTiAtLT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHBhdGNoIG9mIGFkZEpzb25QYXRjaGVzXCI+XG4gICAgICA8dGQgY2xhc3M9XCJsYWJlbC1ob2xkZXJcIj5cbiAgICAgICAgPHRpdGxlLWRyb3Bkb3duIFt0aXRsZV09XCJwYXRjaC5wYXRoIHwgbGFzdFBhdGhFbGVtZW50IHwgdW5kZXJzY29yZVRvU3BhY2VcIiBbaXNEaXNhYmxlZF09XCJ0cnVlXCI+PC90aXRsZS1kcm9wZG93bj5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxhZGQtb3ItcmVwbGFjZS1wYXRjaCBbcGF0Y2hdPVwicGF0Y2hcIj48L2FkZC1vci1yZXBsYWNlLXBhdGNoPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDwhLS0gUkVNT1ZFIFBBVENIIEZPUiBJVFNFTEYgLS0+XG4gICAgPHRyICpuZ0lmPVwicmVtb3ZlSnNvblBhdGNoXCI+XG4gICAgICA8cGF0Y2gtYWN0aW9ucyBbcGF0Y2hdPVwicmVtb3ZlSnNvblBhdGNoXCI+PC9wYXRjaC1hY3Rpb25zPlxuICAgIDwvdHI+XG4gICAgPCEtLSBBREQgU1VCIEZJRUxEIEZST00gU0NIRU1BIERST1BET1dOIC0tPlxuICAgIDx0cj5cbiAgICAgIDx0ZCBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICAgICAgPGFkZC1maWVsZC1kcm9wZG93biBbZmllbGRzXT1cImtleXMkIHwgYXN5bmNcIiBbcGF0aFN0cmluZ109XCJwYXRoU3RyaW5nXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbaXNEaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XG4gICAgICAgIDwvYWRkLWZpZWxkLWRyb3Bkb3duPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3RhYmxlPlxuICA8IS0tIFJFUExBQ0UgUEFUQ0ggRk9SIElUU0VMRiAtLT5cbiAgPGRpdiAqbmdJZj1cInJlcGxhY2VKc29uUGF0Y2hlcyAmJiByZXBsYWNlSnNvblBhdGNoZXNbMF1cIj5cbiAgICA8YWRkLW9yLXJlcGxhY2UtcGF0Y2ggW3BhdGNoXT1cInJlcGxhY2VKc29uUGF0Y2hlc1swXVwiPjwvYWRkLW9yLXJlcGxhY2UtcGF0Y2g+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=