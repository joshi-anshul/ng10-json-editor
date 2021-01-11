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
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { takeUntil } from "rxjs/operators";
import { AbstractSubscriberComponent } from '../../abstract-subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/services";
import * as i2 from "ngx-bootstrap/tabs";
import * as i3 from "@angular/common";
import * as i4 from "ngx-bootstrap/collapse";
import * as i5 from "../../shared/pipes/sort-alphabetically.pipe";
import * as i6 from "../../shared/pipes/keys-pipe";
function PatchesConsoleTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 4);
    i0.ɵɵtext(1, " Conflicts ");
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.patches.length);
} }
function PatchesConsoleTabComponent_div_1_ng_template_1_Template(rf, ctx) { }
function PatchesConsoleTabComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, PatchesConsoleTabComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementStart(2, "button", 8);
    i0.ɵɵlistener("click", function PatchesConsoleTabComponent_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.acceptAll(); });
    i0.ɵɵtext(3, "Accept All");
    i0.ɵɵelement(4, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 10);
    i0.ɵɵlistener("click", function PatchesConsoleTabComponent_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.rejectAll(); });
    i0.ɵɵtext(6, "Reject All");
    i0.ɵɵelement(7, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customHeaderTemplate);
} }
function PatchesConsoleTabComponent_li_3_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11); const path_r7 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.focusPatch(ctx_r10.patchesByPath[path_r7][0]); });
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const path_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r8.patchesByPath[path_r7][0].path, " - ", ctx_r8.patchesByPath[path_r7][0].op, " ");
} }
function PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵelementStart(1, "span", 15);
    i0.ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r18); const patch_r16 = ctx.$implicit; const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.focusPatch(patch_r16); });
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const patch_r16 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", patch_r16.path, " - ", patch_r16.op, " ");
} }
function PatchesConsoleTabComponent_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 15);
    i0.ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_ng_container_2_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r20); const _r14 = i0.ɵɵreference(5); return _r14.toggle(); });
    i0.ɵɵelement(2, "i", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 17, 18);
    i0.ɵɵtemplate(6, PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template, 4, 2, "li", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const path_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-controls", path_r7 + "-collapse");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", path_r7, " (", ctx_r9.patchesByPath[path_r7].length, ") ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("collapse", true);
    i0.ɵɵattribute("id", path_r7 + "-collapse");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r9.patchesByPath[path_r7]);
} }
function PatchesConsoleTabComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵtemplate(1, PatchesConsoleTabComponent_li_3_span_1_Template, 3, 2, "span", 13);
    i0.ɵɵtemplate(2, PatchesConsoleTabComponent_li_3_ng_container_2_Template, 7, 6, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const path_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.patchesByPath[path_r7].length === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.patchesByPath[path_r7].length > 1);
} }
export class PatchesConsoleTabComponent extends AbstractSubscriberComponent {
    constructor(domUtilService, appGlobalsService, pathUtilService, jsonStoreService, changeDetectorRef) {
        super();
        this.domUtilService = domUtilService;
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.jsonStoreService = jsonStoreService;
        this.changeDetectorRef = changeDetectorRef;
        this.patchesByPath = {};
    }
    ngOnInit() {
        this.jsonStoreService.patchesByPath$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patchesByPath => {
            this.patchesByPath = patchesByPath;
            this.changeDetectorRef.markForCheck();
        });
    }
    focusPatch(patch) {
        this.domUtilService.focusPatch(patch);
    }
    get patches() {
        return Object
            .keys(this.patchesByPath)
            .reduce((patches, path) => patches.concat(this.patchesByPath[path]), []);
    }
    get customHeaderTemplate() {
        return this.appGlobalsService.templates.patchesHeaderTemplate;
    }
    acceptAll() {
        this.patches
            .forEach(patch => this.jsonStoreService.applyPatch(patch));
    }
    rejectAll() {
        this.patches
            .forEach(patch => this.jsonStoreService.rejectPatch(patch));
    }
}
PatchesConsoleTabComponent.ɵfac = function PatchesConsoleTabComponent_Factory(t) { return new (t || PatchesConsoleTabComponent)(i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PatchesConsoleTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PatchesConsoleTabComponent, selectors: [["patches-console-tab"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["tabHeading", ""], ["class", "header-container", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "fa", "fa-bolt"], [1, "badge"], [1, "header-container"], [3, "ngTemplateOutlet"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check", "icon-padding-left"], [1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-times", "icon-padding-left"], [1, "list-group-item"], ["role", "button", "class", "title", 3, "click", 4, "ngIf"], [4, "ngIf"], ["role", "button", 1, "title", 3, "click"], [1, "fa", "fa-expand"], [1, "list-group", 3, "collapse"], ["collapse", "bs-collapse"], ["class", "list-group-item nested", 4, "ngFor", "ngForOf"], [1, "list-group-item", "nested"]], template: function PatchesConsoleTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PatchesConsoleTabComponent_ng_template_0_Template, 4, 1, "ng-template", 0);
        i0.ɵɵtemplate(1, PatchesConsoleTabComponent_div_1_Template, 8, 1, "div", 1);
        i0.ɵɵelementStart(2, "ul", 2);
        i0.ɵɵtemplate(3, PatchesConsoleTabComponent_li_3_Template, 3, 2, "li", 3);
        i0.ɵɵpipe(4, "sortAlphabetically");
        i0.ɵɵpipe(5, "keys");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.patches && ctx.patches.length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 2, i0.ɵɵpipeBind1(5, 4, ctx.patchesByPath)));
    } }, directives: [i2.TabHeadingDirective, i3.NgIf, i3.NgForOf, i3.NgTemplateOutlet, i4.CollapseDirective], pipes: [i5.SortAlphabeticallyPipe, i6.KeysPipe], styles: [".list-group-item[_ngcontent-%COMP%]:hover{background-color:#faebcc}.list-group-item[_ngcontent-%COMP%]:hover > .title[_ngcontent-%COMP%]{text-decoration:underline}.list-group-item[_ngcontent-%COMP%]:hover.nested{background-color:#e2dcd1}.list-group-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0074d9;cursor:pointer}", ".fa-bolt[_ngcontent-%COMP%]{color:#e67e22}.icon-padding-left[_ngcontent-%COMP%]{padding-left:8px}.header-container[_ngcontent-%COMP%]{padding:8px}.header-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-left:4px;margin-right:4px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PatchesConsoleTabComponent, [{
        type: Component,
        args: [{
                selector: 'patches-console-tab',
                styleUrls: [
                    '../abstract-console-tab/abstract-console-tab.component.scss',
                    './patches-console-tab.component.scss'
                ],
                templateUrl: './patches-console-tab.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DomUtilService }, { type: i1.AppGlobalsService }, { type: i1.PathUtilService }, { type: i1.JsonStoreService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hlcy1jb25zb2xlLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvYm90dG9tLWNvbnNvbGUvcGF0Y2hlcy1jb25zb2xlLXRhYi9wYXRjaGVzLWNvbnNvbGUtdGFiLmNvbXBvbmVudC50cyIsImxpYi9ib3R0b20tY29uc29sZS9wYXRjaGVzLWNvbnNvbGUtdGFiL3BhdGNoZXMtY29uc29sZS10YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFJeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7SUM3QnRFLHVCQUEwQjtJQUFDLDJCQUFVO0lBQUEsK0JBQW9CO0lBQUEsWUFBa0I7SUFBQSxpQkFBTzs7O0lBQXpCLGVBQWtCO0lBQWxCLDJDQUFrQjs7Ozs7SUFHN0UsOEJBQ0U7SUFBQSxpR0FBdUQ7SUFDdkQsaUNBQXNEO0lBQXRCLDZMQUFxQjtJQUFDLDBCQUFVO0lBQUEsdUJBQTZDO0lBQUEsaUJBQVM7SUFDdEgsa0NBQXFEO0lBQXRCLDZMQUFxQjtJQUFDLDBCQUFVO0lBQUEsd0JBQTZDO0lBQUEsaUJBQVM7SUFDdkgsaUJBQU07OztJQUhTLGVBQXlDO0lBQXpDLDhEQUF5Qzs7OztJQU1wRCxnQ0FDRTtJQUQ2Qyw2UUFBd0MsQ0FBQyxNQUFHO0lBQ3pGLHVCQUEwQjtJQUFDLFlBQzdCO0lBQUEsaUJBQU87Ozs7SUFEc0IsZUFDN0I7SUFENkIsa0hBQzdCOzs7O0lBTUks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USxFQUFFLHFCQUFxQjtnQkFDL0IsU0FBUyxFQUFFO29CQUNULDZEQUE2RDtvQkFDN0Qsc0NBQXNDO2lCQUN2QztnQkFDRCxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IEFic3RyYWN0U3Vic2NyaWJlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LXN1YnNjcmliZXInO1xuaW1wb3J0IHsgRG9tVXRpbFNlcnZpY2UsIFBhdGhVdGlsU2VydmljZSwgSnNvblN0b3JlU2VydmljZSwgQXBwR2xvYmFsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgSnNvblBhdGNoLCBKc29uUGF0Y2hlc0J5UGF0aCB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGF0Y2hlcy1jb25zb2xlLXRhYicsXG4gIHN0eWxlVXJsczogW1xuICAgICcuLi9hYnN0cmFjdC1jb25zb2xlLXRhYi9hYnN0cmFjdC1jb25zb2xlLXRhYi5jb21wb25lbnQuc2NzcycsXG4gICAgJy4vcGF0Y2hlcy1jb25zb2xlLXRhYi5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhdGNoZXMtY29uc29sZS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQYXRjaGVzQ29uc29sZVRhYkNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3Vic2NyaWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGF0Y2hlc0J5UGF0aDogSnNvblBhdGNoZXNCeVBhdGggPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVV0aWxTZXJ2aWNlOiBEb21VdGlsU2VydmljZSxcbiAgICBwcml2YXRlIGFwcEdsb2JhbHNTZXJ2aWNlOiBBcHBHbG9iYWxzU2VydmljZSxcbiAgICBwcml2YXRlIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlLFxuICAgIHByaXZhdGUganNvblN0b3JlU2VydmljZTogSnNvblN0b3JlU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmpzb25TdG9yZVNlcnZpY2UucGF0Y2hlc0J5UGF0aCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocGF0Y2hlc0J5UGF0aCA9PiB7XG4gICAgICAgIHRoaXMucGF0Y2hlc0J5UGF0aCA9IHBhdGNoZXNCeVBhdGg7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZvY3VzUGF0Y2gocGF0Y2g6IEpzb25QYXRjaCkge1xuICAgIHRoaXMuZG9tVXRpbFNlcnZpY2UuZm9jdXNQYXRjaChwYXRjaCk7XG4gIH1cblxuICBnZXQgcGF0Y2hlcygpOiBBcnJheTxKc29uUGF0Y2g+IHtcbiAgICByZXR1cm4gT2JqZWN0XG4gICAgICAua2V5cyh0aGlzLnBhdGNoZXNCeVBhdGgpXG4gICAgICAucmVkdWNlKChwYXRjaGVzLCBwYXRoKSA9PiBwYXRjaGVzLmNvbmNhdCh0aGlzLnBhdGNoZXNCeVBhdGhbcGF0aF0pLCBbXSk7XG4gIH1cblxuICBnZXQgY3VzdG9tSGVhZGVyVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UudGVtcGxhdGVzLnBhdGNoZXNIZWFkZXJUZW1wbGF0ZTtcbiAgfVxuXG4gIGFjY2VwdEFsbCgpIHtcbiAgICB0aGlzLnBhdGNoZXNcbiAgICAgIC5mb3JFYWNoKHBhdGNoID0+IHRoaXMuanNvblN0b3JlU2VydmljZS5hcHBseVBhdGNoKHBhdGNoKSk7XG4gIH1cblxuICByZWplY3RBbGwoKSB7XG4gICAgdGhpcy5wYXRjaGVzXG4gICAgICAuZm9yRWFjaChwYXRjaCA9PiB0aGlzLmpzb25TdG9yZVNlcnZpY2UucmVqZWN0UGF0Y2gocGF0Y2gpKTtcbiAgfVxufVxuXG4iLCI8bmctdGVtcGxhdGUgdGFiSGVhZGluZz5cbiAgPGkgY2xhc3M9XCJmYSBmYS1ib2x0XCI+PC9pPiBDb25mbGljdHMgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7cGF0Y2hlcy5sZW5ndGh9fTwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG5cbjxkaXYgKm5nSWY9XCJwYXRjaGVzICYmIHBhdGNoZXMubGVuZ3RoID4gMFwiIGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tSGVhZGVyVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cImFjY2VwdEFsbCgpXCI+QWNjZXB0IEFsbDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgaWNvbi1wYWRkaW5nLWxlZnRcIj48L2k+PC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJyZWplY3RBbGwoKVwiPlJlamVjdCBBbGw8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGljb24tcGFkZGluZy1sZWZ0XCI+PC9pPjwvYnV0dG9uPlxuPC9kaXY+XG48dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgcGF0aCBvZiBwYXRjaGVzQnlQYXRoIHwga2V5cyB8IHNvcnRBbHBoYWJldGljYWxseVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJwYXRjaGVzQnlQYXRoW3BhdGhdLmxlbmd0aCA9PT0gMVwiIChjbGljayk9XCJmb2N1c1BhdGNoKHBhdGNoZXNCeVBhdGhbcGF0aF1bMF0pXCIgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYm9sdFwiPjwvaT4ge3twYXRjaGVzQnlQYXRoW3BhdGhdWzBdLnBhdGh9fSAtIHt7cGF0Y2hlc0J5UGF0aFtwYXRoXVswXS5vcH19XG4gICAgPC9zcGFuPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYXRjaGVzQnlQYXRoW3BhdGhdLmxlbmd0aCA+IDFcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIiByb2xlPVwiYnV0dG9uXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJwYXRoICsgJy1jb2xsYXBzZSdcIiAoY2xpY2spPVwiY29sbGFwc2UudG9nZ2xlKClcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1leHBhbmRcIj48L2k+IHt7cGF0aH19ICh7e3BhdGNoZXNCeVBhdGhbcGF0aF0ubGVuZ3RofX0pXG4gICAgICA8L3NwYW4+XG4gICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCIgI2NvbGxhcHNlPVwiYnMtY29sbGFwc2VcIiBbY29sbGFwc2VdPVwidHJ1ZVwiIFthdHRyLmlkXT1cInBhdGggKyAnLWNvbGxhcHNlJ1wiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHBhdGNoIG9mIHBhdGNoZXNCeVBhdGhbcGF0aF1cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBuZXN0ZWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCIgKGNsaWNrKT1cImZvY3VzUGF0Y2gocGF0Y2gpXCIgcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1ib2x0XCI+PC9pPiB7e3BhdGNoLnBhdGh9fSAtIHt7cGF0Y2gub3B9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbGk+XG48L3VsPlxuIl19