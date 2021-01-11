/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2017 CERN.
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
function PatchActionsComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function PatchActionsComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onAddNewClick(); });
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementEnd();
} }
export class PatchActionsComponent {
    constructor(jsonStoreService) {
        this.jsonStoreService = jsonStoreService;
    }
    onAcceptClick() {
        this.jsonStoreService.applyPatch(this.patch);
    }
    onRejectClick() {
        this.jsonStoreService.rejectPatch(this.patch);
    }
    onAddNewClick() {
        this.patch.op = 'add-as-new';
        this.jsonStoreService.applyPatch(this.patch);
    }
}
PatchActionsComponent.ɵfac = function PatchActionsComponent_Factory(t) { return new (t || PatchActionsComponent)(i0.ɵɵdirectiveInject(i1.JsonStoreService)); };
PatchActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PatchActionsComponent, selectors: [["patch-actions"]], inputs: { patch: "patch", addActionEnabled: "addActionEnabled" }, decls: 6, vars: 2, consts: [["tabindex", "-1", 1, "patch-actions-container", 3, "ngClass"], [3, "click"], [1, "fa", "fa-check-circle"], [1, "fa", "fa-times-circle"], [3, "click", 4, "ngIf"], [1, "fa", "fa-plus-circle"]], template: function PatchActionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function PatchActionsComponent_Template_button_click_1_listener() { return ctx.onAcceptClick(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function PatchActionsComponent_Template_button_click_3_listener() { return ctx.onRejectClick(); });
        i0.ɵɵelement(4, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PatchActionsComponent_button_5_Template, 2, 0, "button", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.patch.op);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.addActionEnabled);
    } }, directives: [i2.NgClass, i2.NgIf], styles: [".patch-actions-container[_ngcontent-%COMP%]{display:inline-block;padding-left:2px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{background-color:transparent;border:none;padding:1px 3px 1.5px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:18px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%]{color:#27ae60}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-times-circle[_ngcontent-%COMP%]{color:#e74c3c}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-plus-circle[_ngcontent-%COMP%]{color:#f1c40f}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PatchActionsComponent, [{
        type: Component,
        args: [{
                selector: 'patch-actions',
                styleUrls: [
                    './patch-actions.component.scss'
                ],
                templateUrl: './patch-actions.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.JsonStoreService }]; }, { patch: [{
            type: Input
        }], addActionEnabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2gtYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvcGF0Y2gtYWN0aW9ucy9wYXRjaC1hY3Rpb25zLmNvbXBvbmVudC50cyIsImxpYi9wYXRjaC1hY3Rpb25zL3BhdGNoLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ25CeEUsaUNBQTREO0lBQTFCLCtMQUF5QjtJQUFDLHVCQUFrQztJQUFBLGlCQUFTOztBRGdDekcsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QsYUFBYTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7MEZBakJVLHFCQUFxQjswREFBckIscUJBQXFCO1FDbkNsQyw4QkFDRTtRQUFBLGlDQUFrQztRQUExQixrR0FBUyxtQkFBZSxJQUFDO1FBQUMsdUJBQWtDO1FBQUEsaUJBQVM7UUFDN0UsaUNBQWtDO1FBQTFCLGtHQUFTLG1CQUFlLElBQUM7UUFBQyx1QkFBa0M7UUFBQSxpQkFBUztRQUM3RSw0RUFBNEQ7UUFDOUQsaUJBQU07O1FBSitCLHNDQUFvQjtRQUc5QyxlQUF3QjtRQUF4QiwyQ0FBd0I7O2tERGdDdEIscUJBQXFCO2NBUmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsU0FBUyxFQUFFO29CQUNULGdDQUFnQztpQkFDakM7Z0JBQ0QsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7bUVBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNyBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEpzb25TdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgSnNvblBhdGNoIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYXRjaC1hY3Rpb25zJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vcGF0Y2gtYWN0aW9ucy5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhdGNoLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQYXRjaEFjdGlvbnNDb21wb25lbnQge1xuICBASW5wdXQoKSBwYXRjaDogSnNvblBhdGNoO1xuICBASW5wdXQoKSBhZGRBY3Rpb25FbmFibGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUganNvblN0b3JlU2VydmljZTogSnNvblN0b3JlU2VydmljZSkgeyB9XG5cbiAgb25BY2NlcHRDbGljaygpIHtcbiAgICB0aGlzLmpzb25TdG9yZVNlcnZpY2UuYXBwbHlQYXRjaCh0aGlzLnBhdGNoKTtcbiAgfVxuXG4gIG9uUmVqZWN0Q2xpY2soKSB7XG4gICAgdGhpcy5qc29uU3RvcmVTZXJ2aWNlLnJlamVjdFBhdGNoKHRoaXMucGF0Y2gpO1xuICB9XG5cbiAgb25BZGROZXdDbGljaygpIHtcbiAgICB0aGlzLnBhdGNoLm9wID0gJ2FkZC1hcy1uZXcnO1xuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5hcHBseVBhdGNoKHRoaXMucGF0Y2gpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicGF0Y2gtYWN0aW9ucy1jb250YWluZXJcIiBbbmdDbGFzc109XCJwYXRjaC5vcFwiIHRhYmluZGV4PVwiLTFcIj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwib25BY2NlcHRDbGljaygpXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9idXR0b24+XG4gIDxidXR0b24gKGNsaWNrKT1cIm9uUmVqZWN0Q2xpY2soKVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCI+PC9pPjwvYnV0dG9uPlxuICA8YnV0dG9uICAqbmdJZj1cImFkZEFjdGlvbkVuYWJsZWRcIiAoY2xpY2spPVwib25BZGROZXdDbGljaygpXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZVwiID48L2k+PC9idXR0b24+XG48L2Rpdj4iXX0=