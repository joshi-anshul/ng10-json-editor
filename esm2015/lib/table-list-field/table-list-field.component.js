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
import * as i2 from "@angular/common";
import * as i3 from "../add-field-dropdown/add-field-dropdown.component";
import * as i4 from "../table-item-field/table-item-field.component";
import * as i5 from "../list-action-group/list-action-group.component";
import * as i6 from "../patch-actions/patch-actions.component";
import * as i7 from "../add-or-replace-patch/add-or-replace-patch.component";
import * as i8 from "../shared/pipes/underscore-to-space.pipe";
function TableListFieldComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "underscoreToSpace");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r0.schema.items.properties[key_r6].columnWidth + "%");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, key_r6), " ");
} }
function TableListFieldComponent_add_field_dropdown_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "add-field-dropdown", 9);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵelement(3, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(1, 4, ctx_r1.keys$))("pathString", ctx_r1.pathString)("schema", ctx_r1.schema.items)("isDisabled", ctx_r1.disabled);
} }
function TableListFieldComponent_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵelementStart(1, "list-action-group", 14);
    i0.ɵɵlistener("onMove", function TableListFieldComponent_tr_8_td_2_Template_list_action_group_onMove_1_listener($event) { i0.ɵɵrestoreView(_r12); const i_r8 = i0.ɵɵnextContext().index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.moveElement(i_r8, $event); })("onDelete", function TableListFieldComponent_tr_8_td_2_Template_list_action_group_onDelete_1_listener() { i0.ɵɵrestoreView(_r12); const i_r8 = i0.ɵɵnextContext().index; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.deleteElement(i_r8); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("sortable", ctx_r9.schema.sortable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("canMove", ctx_r9.schema.sortable)("isDisabled", ctx_r9.disabled);
} }
function TableListFieldComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 12);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtemplate(2, TableListFieldComponent_tr_8_td_2_Template, 2, 4, "td", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r2.getPathStringForChild(i_r8))("value", value_r7)("schema", ctx_r2.schema.items)("path", ctx_r2.getPathForChild(i_r8))("keys", i0.ɵɵpipeBind1(1, 6, ctx_r2.keys$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.values.size > 0);
} }
function TableListFieldComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "patch-actions", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r3.removeJsonPatch);
} }
function TableListFieldComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "add-or-replace-patch", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patch_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", patch_r15);
} }
function TableListFieldComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "add-or-replace-patch", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("patch", ctx_r5.replaceJsonPatches[0]);
} }
export class TableListFieldComponent extends AbstractListFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, keysStoreService, changeDetectorRef) {
        super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
        this.changeDetectorRef = changeDetectorRef;
    }
    get keys$() {
        return this.keysStoreService.forPath(this.pathString);
    }
}
TableListFieldComponent.ɵfac = function TableListFieldComponent_Factory(t) { return new (t || TableListFieldComponent)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.KeysStoreService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TableListFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableListFieldComponent, selectors: [["table-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 14, consts: [[3, "id", "ngClass"], [1, "table", "editable-inner-table"], [1, "thead-inverse"], [3, "width", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "button-holder"], [3, "fields", "pathString", "schema", "isDisabled", 4, "ngIf"], ["table-item-field", "", 3, "id", "value", "schema", "path", "keys", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "add-patch", 4, "ngFor", "ngForOf"], [3, "fields", "pathString", "schema", "isDisabled"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], ["table-item-field", "", 3, "id", "value", "schema", "path", "keys"], ["class", "button-holder", 3, "sortable", 4, "ngIf"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [3, "patch"], [1, "add-patch"]], template: function TableListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementStart(2, "thead", 2);
        i0.ɵɵelementStart(3, "tr");
        i0.ɵɵtemplate(4, TableListFieldComponent_th_4_Template, 3, 5, "th", 3);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵelementStart(6, "th", 4);
        i0.ɵɵtemplate(7, TableListFieldComponent_add_field_dropdown_7_Template, 4, 6, "add-field-dropdown", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, TableListFieldComponent_tr_8_Template, 3, 8, "tr", 6);
        i0.ɵɵtemplate(9, TableListFieldComponent_tr_9_Template, 2, 1, "tr", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, TableListFieldComponent_div_10_Template, 2, 1, "div", 8);
        i0.ɵɵtemplate(11, TableListFieldComponent_div_11_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 12, ctx.keys$))("ngForTrackBy", ctx.trackByElement);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("sortable", ctx.schema.sortable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.values.size > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.values)("ngForTrackBy", ctx.trackByIndex);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.AddFieldDropdownComponent, i4.TableItemFieldComponent, i5.ListActionGroupComponent, i6.PatchActionsComponent, i7.AddOrReplacePatchComponent], pipes: [i2.AsyncPipe, i8.UnderscoreToSpacePipe], styles: ["table.editable-inner-table[_ngcontent-%COMP%]{border:none}table.editable-inner-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{border:none;color:#c1c1c1;vertical-align:middle}.add-patch[_ngcontent-%COMP%]{margin:8px 0}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'table-list-field',
                styleUrls: [
                    './table-list-field.component.scss'
                ],
                templateUrl: './table-list-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.JsonStoreService }, { type: i1.PathUtilService }, { type: i1.KeysStoreService }, { type: i0.ChangeDetectorRef }]; }, { values: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGlzdC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvdGFibGUtbGlzdC1maWVsZC90YWJsZS1saXN0LWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi90YWJsZS1saXN0LWZpZWxkL3RhYmxlLWxpc3QtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBSzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztJQ3ZCNUQsMEJBQ0U7SUFBQSxZQUNGOztJQUFBLGlCQUFLOzs7O0lBRnlELGlGQUE4RDtJQUMxSCxlQUNGO0lBREUsNkRBQ0Y7OztJQUVFLDZDQUNFOztJQUFBLHdCQUEwQjtJQUMxQix3QkFBZ0M7SUFDbEMsaUJBQXFCOzs7SUFIdUIsMkRBQXdCLGlDQUFBLCtCQUFBLCtCQUFBOzs7O0lBU3hFLDZCQUNFO0lBQUEsNkNBQTJKO0lBQXhJLHlRQUFpQyxvUEFBQTtJQUFtRixpQkFBb0I7SUFDN0osaUJBQUs7OztJQUY2QyxrREFBa0M7SUFDQyxlQUEyQjtJQUEzQixnREFBMkIsK0JBQUE7OztJQUhsSCw4QkFFRTs7SUFBQSw0RUFDRTtJQUVKLGlCQUFLOzs7OztJQUxrRix1REFBK0IsbUJBQUEsK0JBQUEsc0NBQUEsNENBQUE7SUFFaEgsZUFBdUI7SUFBdkIsNkNBQXVCOzs7SUFJN0IsMEJBQ0U7SUFBQSxvQ0FBeUQ7SUFDM0QsaUJBQUs7OztJQURZLGVBQXlCO0lBQXpCLDhDQUF5Qjs7O0lBRzVDLCtCQUNFO0lBQUEsMkNBQTZEO0lBQy9ELGlCQUFNOzs7SUFEa0IsZUFBZTtJQUFmLGlDQUFlOzs7SUFFdkMsMkJBQ0U7SUFBQSwyQ0FBNkU7SUFDL0UsaUJBQU07OztJQURrQixlQUErQjtJQUEvQixvREFBK0I7O0FEVXpELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSwwQkFBMEI7SUFNckUsWUFBbUIsaUJBQW9DLEVBQzlDLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsaUJBQW9DO1FBQzNDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFOL0Usc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM5QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRTdDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7OzhGQWpCVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ3ZDcEMsOEJBQ0U7UUFBQSxnQ0FDRTtRQUFBLGdDQUNFO1FBQUEsMEJBQ0U7UUFBQSxzRUFDRTs7UUFFRiw2QkFDRTtRQUFBLHNHQUNFO1FBR0osaUJBQUs7UUFDUCxpQkFBSztRQUNQLGlCQUFRO1FBQ1Isc0VBRUU7UUFJRixzRUFDRTtRQUVKLGlCQUFRO1FBQ1IsMEVBQ0U7UUFFRiwwRUFDRTtRQUVKLGlCQUFNOztRQS9CRCxtQ0FBaUIsbUNBQUE7UUFJVixlQUF5RDtRQUF6RCwwREFBeUQsb0NBQUE7UUFHbkMsZUFBa0M7UUFBbEMsK0NBQWtDO1FBQ3RDLGVBQXVCO1FBQXZCLDBDQUF1QjtRQU83QyxlQUFpRTtRQUFqRSxvQ0FBaUUsa0NBQUE7UUFNakUsZUFBdUI7UUFBdkIsMENBQXVCO1FBSU4sZUFBb0M7UUFBcEMsNENBQW9DO1FBR3RELGVBQW1EO1FBQW5ELDBFQUFtRDs7a0REVzdDLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsU0FBUyxFQUFFO29CQUNULG1DQUFtQztpQkFDcEM7Z0JBQ0QsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OE5BR1UsTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdCwgTWFwLCBTZXQgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEFic3RyYWN0TGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtbGlzdC1maWVsZCc7XG5pbXBvcnQgeyBBcHBHbG9iYWxzU2VydmljZSwgSnNvblN0b3JlU2VydmljZSwgUGF0aFV0aWxTZXJ2aWNlLCBLZXlzU3RvcmVTZXJ2aWNlLCBQcm9ibGVtc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtbGlzdC1maWVsZCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL3RhYmxlLWxpc3QtZmllbGQuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1saXN0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVMaXN0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExpc3RGaWVsZENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdmFsdWVzOiBMaXN0PE1hcDxzdHJpbmcsIGFueT4+O1xuICBASW5wdXQoKSBzY2hlbWE6IEpTT05TY2hlbWE7XG4gIEBJbnB1dCgpIHBhdGg6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFwcEdsb2JhbHNTZXJ2aWNlOiBBcHBHbG9iYWxzU2VydmljZSxcbiAgICBwdWJsaWMgcHJvYmxlbXNTZXJ2aWNlOiBQcm9ibGVtc1NlcnZpY2UsXG4gICAgcHVibGljIGpzb25TdG9yZVNlcnZpY2U6IEpzb25TdG9yZVNlcnZpY2UsXG4gICAgcHVibGljIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBrZXlzU3RvcmVTZXJ2aWNlOiBLZXlzU3RvcmVTZXJ2aWNlLFxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihhcHBHbG9iYWxzU2VydmljZSwgcHJvYmxlbXNTZXJ2aWNlLCBqc29uU3RvcmVTZXJ2aWNlLCBwYXRoVXRpbFNlcnZpY2UsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIGdldCBrZXlzJCgpOiBSZXBsYXlTdWJqZWN0PFNldDxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMua2V5c1N0b3JlU2VydmljZS5mb3JQYXRoKHRoaXMucGF0aFN0cmluZyk7XG4gIH1cblxufVxuIiwiPGRpdiBbaWRdPVwicGF0aFN0cmluZ1wiIFtuZ0NsYXNzXT1cInJlZExlZnRCb3JkZXJDbGFzc1wiPlxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBlZGl0YWJsZS1pbm5lci10YWJsZVwiPlxuICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWludmVyc2VcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBrZXkgb2Yga2V5cyQgfCBhc3luYzsgdHJhY2tCeTp0cmFja0J5RWxlbWVudFwiIFtzdHlsZS53aWR0aF09XCJzY2hlbWEuaXRlbXMucHJvcGVydGllc1trZXldLmNvbHVtbldpZHRoICsgJyUnXCI+XG4gICAgICAgICAge3trZXkgfCB1bmRlcnNjb3JlVG9TcGFjZX19XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0aCBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIiBbY2xhc3Muc29ydGFibGVdPVwic2NoZW1hLnNvcnRhYmxlXCI+XG4gICAgICAgICAgPGFkZC1maWVsZC1kcm9wZG93biAqbmdJZj1cInZhbHVlcy5zaXplID4gMFwiIFtmaWVsZHNdPVwia2V5cyQgfCBhc3luY1wiIFtwYXRoU3RyaW5nXT1cInBhdGhTdHJpbmdcIiBbc2NoZW1hXT1cInNjaGVtYS5pdGVtc1wiIFtpc0Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XG4gICAgICAgICAgPC9hZGQtZmllbGQtZHJvcGRvd24+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRyICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB2YWx1ZXM7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6dHJhY2tCeUluZGV4XCIgdGFibGUtaXRlbS1maWVsZCBbaWRdPVwiZ2V0UGF0aFN0cmluZ0ZvckNoaWxkKGkpXCIgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgIFtzY2hlbWFdPVwic2NoZW1hLml0ZW1zXCIgW3BhdGhdPVwiZ2V0UGF0aEZvckNoaWxkKGkpXCIgW2tleXNdPVwia2V5cyQgfCBhc3luY1wiPlxuICAgICAgPHRkICpuZ0lmPVwidmFsdWVzLnNpemUgPiAwXCIgY2xhc3M9XCJidXR0b24taG9sZGVyXCIgW2NsYXNzLnNvcnRhYmxlXT1cInNjaGVtYS5zb3J0YWJsZVwiPlxuICAgICAgICA8bGlzdC1hY3Rpb24tZ3JvdXAgKG9uTW92ZSk9XCJtb3ZlRWxlbWVudChpLCAkZXZlbnQpXCIgKG9uRGVsZXRlKT1cImRlbGV0ZUVsZW1lbnQoaSlcIiBbY2FuTW92ZV09XCJzY2hlbWEuc29ydGFibGVcIiBbaXNEaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvbGlzdC1hY3Rpb24tZ3JvdXA+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyICpuZ0lmPVwicmVtb3ZlSnNvblBhdGNoXCI+XG4gICAgICA8cGF0Y2gtYWN0aW9ucyBbcGF0Y2hdPVwicmVtb3ZlSnNvblBhdGNoXCI+PC9wYXRjaC1hY3Rpb25zPlxuICAgIDwvdHI+XG4gIDwvdGFibGU+XG4gIDxkaXYgY2xhc3M9XCJhZGQtcGF0Y2hcIiAqbmdGb3I9XCJsZXQgcGF0Y2ggb2YgYWRkSnNvblBhdGNoZXNcIj5cbiAgICA8YWRkLW9yLXJlcGxhY2UtcGF0Y2ggW3BhdGNoXT1cInBhdGNoXCI+PC9hZGQtb3ItcmVwbGFjZS1wYXRjaD5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJyZXBsYWNlSnNvblBhdGNoZXMgJiYgcmVwbGFjZUpzb25QYXRjaGVzWzBdXCI+XG4gICAgPGFkZC1vci1yZXBsYWNlLXBhdGNoIFtwYXRjaF09XCJyZXBsYWNlSnNvblBhdGNoZXNbMF1cIj48L2FkZC1vci1yZXBsYWNlLXBhdGNoPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19