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
import * as i3 from "../shared/pipes/sort-alphabetically.pipe";
import * as i4 from "../shared/pipes/add-always-show-fields.pipe";
import * as i5 from "../shared/pipes/filter-hidden-fields.pipe";
function TreeMenuItemComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function TreeMenuItemComponent_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.collapse(); });
    i0.ɵɵtext(1, " [x]");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r0.isCollapsed);
} }
function TreeMenuItemComponent_div_4_div_2_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "tree-menu-item", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", key_r7)("value", ctx_r6.value.get(key_r7))("schema", ctx_r6.schema.properties[key_r7])("path", ctx_r6.getChildPath(key_r7))("depth", ctx_r6.depth + 1);
} }
function TreeMenuItemComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TreeMenuItemComponent_div_4_div_2_li_1_Template, 2, 5, "li", 6);
    i0.ɵɵpipe(2, "sortAlphabetically");
    i0.ɵɵpipe(3, "addAlwaysShowFields");
    i0.ɵɵpipe(4, "filterHiddenFields");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 2, i0.ɵɵpipeBind2(3, 4, i0.ɵɵpipeBind3(4, 7, ctx_r4.keys, ctx_r4.schema, i0.ɵɵpipeBind1(5, 11, ctx_r4.adminMode$)), ctx_r4.schema)))("ngForTrackBy", ctx_r4.trackByElement);
} }
function TreeMenuItemComponent_div_4_div_3_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "tree-menu-item", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i_r10)("value", element_r9)("schema", ctx_r8.schema.items)("path", ctx_r8.getChildPath(i_r10))("depth", ctx_r8.depth + 1);
} }
function TreeMenuItemComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TreeMenuItemComponent_div_4_div_3_li_1_Template, 2, 5, "li", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.value)("ngForTrackBy", ctx_r5.trackByElement);
} }
function TreeMenuItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "ul");
    i0.ɵɵtemplate(2, TreeMenuItemComponent_div_4_div_2_Template, 6, 13, "div", 5);
    i0.ɵɵtemplate(3, TreeMenuItemComponent_div_4_div_3_Template, 2, 2, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r1.schema.type)("hidden", ctx_r1.isCollapsed);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitchCase", "object");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "array");
} }
export class TreeMenuItemComponent {
    constructor(windowHrefService, domUtilService, pathUtilService, appGlobalsService) {
        this.windowHrefService = windowHrefService;
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.appGlobalsService = appGlobalsService;
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.href = `${this.windowHrefService.hrefWithoutHash}#${this.path}`;
    }
    ngOnChanges(changes) {
        if (changes['value'] && this.value && this.schema.type === 'object') {
            this.keys = this.value.keySeq().toSet();
        }
    }
    toggle(event) {
        // fix to trigger :focus css after focusAndSelectFirstInputChildById called.
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        this.domUtilService.focusAndSelectFirstEditableChildById(this.path, true);
    }
    collapse() {
        this.isCollapsed = true;
    }
    get isCollapsable() {
        const schemaType = this.schema.type;
        return this.isNotLeaf && (schemaType === 'object' || schemaType === 'array');
    }
    get maxDepth() {
        return this.appGlobalsService.config.menuMaxDepth;
    }
    get isNotLeaf() {
        return this.maxDepth === undefined || this.depth < this.maxDepth;
    }
    get adminMode$() {
        return this.appGlobalsService.adminMode$;
    }
    getChildPath(indexOrKey) {
        return `${this.path}${this.pathUtilService.separator}${indexOrKey}`;
    }
    trackByElement(index, element) {
        return element;
    }
}
TreeMenuItemComponent.ɵfac = function TreeMenuItemComponent_Factory(t) { return new (t || TreeMenuItemComponent)(i0.ɵɵdirectiveInject(i1.WindowHrefService), i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.AppGlobalsService)); };
TreeMenuItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TreeMenuItemComponent, selectors: [["tree-menu-item"]], inputs: { label: "label", value: "value", schema: "schema", path: "path", depth: "depth" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 4, consts: [[3, "href", "click"], [3, "hidden", "click", 4, "ngIf"], [3, "ngSwitch", "hidden", 4, "ngIf"], [3, "hidden", "click"], [3, "ngSwitch", "hidden"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "label", "value", "schema", "path", "depth"]], template: function TreeMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "a", 0);
        i0.ɵɵlistener("click", function TreeMenuItemComponent_Template_a_click_1_listener($event) { return ctx.toggle($event); });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, TreeMenuItemComponent_a_3_Template, 2, 1, "a", 1);
        i0.ɵɵtemplate(4, TreeMenuItemComponent_div_4_Template, 4, 4, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("href", ctx.href, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isCollapsable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isNotLeaf);
    } }, directives: [i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgForOf, TreeMenuItemComponent], pipes: [i3.SortAlphabeticallyPipe, i4.AddAlwaysShowFieldsPipe, i5.FilterHiddenFieldsPipe, i2.AsyncPipe], styles: ["a[_ngcontent-%COMP%]{color:#e0dfdf}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeMenuItemComponent, [{
        type: Component,
        args: [{
                selector: 'tree-menu-item',
                styleUrls: [
                    './tree-menu-item.component.scss'
                ],
                templateUrl: './tree-menu-item.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.WindowHrefService }, { type: i1.DomUtilService }, { type: i1.PathUtilService }, { type: i1.AppGlobalsService }]; }, { label: [{
            type: Input
        }], value: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }], depth: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3RyZWUtbWVudS90cmVlLW1lbnUtaXRlbS5jb21wb25lbnQudHMiLCJsaWIvdHJlZS1tZW51L3RyZWUtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUlMLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDNUJyQiw0QkFBc0U7SUFBdEIsZ0xBQW9CO0lBQUUsb0JBQUc7SUFBQSxpQkFBSTs7O0lBQXBELDJDQUFzQjs7O0lBSXpDLDBCQUNFO0lBQUEsb0NBQXlKO0lBQzNKLGlCQUFLOzs7O0lBRGEsZUFBYTtJQUFiLDhCQUFhLG1DQUFBLDRDQUFBLHFDQUFBLDJCQUFBOzs7SUFGakMsMkJBQ0U7SUFBQSxnRkFDRTs7Ozs7SUFFSixpQkFBTTs7O0lBSEEsZUFBbUo7SUFBbkosK0tBQW1KLHVDQUFBOzs7SUFLdkosMEJBQ0U7SUFBQSxvQ0FBb0k7SUFDdEksaUJBQUs7Ozs7O0lBRGEsZUFBVztJQUFYLDZCQUFXLHFCQUFBLCtCQUFBLG9DQUFBLDJCQUFBOzs7SUFGL0IsMkJBQ0U7SUFBQSxnRkFDRTtJQUVKLGlCQUFNOzs7SUFIQSxlQUFvRTtJQUFwRSxzQ0FBb0UsdUNBQUE7OztJQVI5RSw4QkFDRTtJQUFBLDBCQUNFO0lBQUEsNkVBQ0U7SUFJRiw0RUFDRTtJQUlKLGlCQUFLO0lBQ1AsaUJBQU07OztJQWJpQiw2Q0FBd0IsOEJBQUE7SUFFdEMsZUFBd0I7SUFBeEIsdUNBQXdCO0lBS3hCLGVBQXVCO0lBQXZCLHNDQUF1Qjs7QURtQ2xD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LEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcCwgU2V0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRG9tVXRpbFNlcnZpY2UsIFdpbmRvd0hyZWZTZXJ2aWNlLCBQYXRoVXRpbFNlcnZpY2UsIEFwcEdsb2JhbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzJztcbmltcG9ydCB7IEpTT05TY2hlbWEgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbWVudS1pdGVtJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vdHJlZS1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuICBASW5wdXQoKSBzY2hlbWE6IEpTT05TY2hlbWE7XG4gIEBJbnB1dCgpIHBhdGg6IHN0cmluZztcbiAgQElucHV0KCkgZGVwdGg6IG51bWJlcjtcblxuICAvLyBkZWZpbmVkIG9ubHkgaWYgc2NobWVhLnR5cGUgZXF1YWxzIHRvICdvYmplY3QnXG4gIGtleXM6IFNldDxzdHJpbmc+O1xuXG4gIGlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgaHJlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luZG93SHJlZlNlcnZpY2U6IFdpbmRvd0hyZWZTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG9tVXRpbFNlcnZpY2U6IERvbVV0aWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBHbG9iYWxzU2VydmljZTogQXBwR2xvYmFsc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaHJlZiA9IGAke3RoaXMud2luZG93SHJlZlNlcnZpY2UuaHJlZldpdGhvdXRIYXNofSMke3RoaXMucGF0aH1gO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWyd2YWx1ZSddICYmIHRoaXMudmFsdWUgJiYgdGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMua2V5cyA9IHRoaXMudmFsdWUua2V5U2VxKCkudG9TZXQoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgLy8gZml4IHRvIHRyaWdnZXIgOmZvY3VzIGNzcyBhZnRlciBmb2N1c0FuZFNlbGVjdEZpcnN0SW5wdXRDaGlsZEJ5SWQgY2FsbGVkLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgdGhpcy5kb21VdGlsU2VydmljZS5mb2N1c0FuZFNlbGVjdEZpcnN0RWRpdGFibGVDaGlsZEJ5SWQodGhpcy5wYXRoLCB0cnVlKTtcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IGlzQ29sbGFwc2FibGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IHRoaXMuc2NoZW1hLnR5cGU7XG4gICAgcmV0dXJuIHRoaXMuaXNOb3RMZWFmICYmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JyB8fCBzY2hlbWFUeXBlID09PSAnYXJyYXknKTtcbiAgfVxuXG4gIGdldCBtYXhEZXB0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLmNvbmZpZy5tZW51TWF4RGVwdGg7XG4gIH1cblxuICBnZXQgaXNOb3RMZWFmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1heERlcHRoID09PSB1bmRlZmluZWQgfHwgdGhpcy5kZXB0aCA8IHRoaXMubWF4RGVwdGg7XG4gIH1cblxuICBnZXQgYWRtaW5Nb2RlJCgpOiBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5hcHBHbG9iYWxzU2VydmljZS5hZG1pbk1vZGUkO1xuICB9XG5cbiAgZ2V0Q2hpbGRQYXRoKGluZGV4T3JLZXk6IG51bWJlciB8IHN0cmluZykge1xuICAgIHJldHVybiBgJHt0aGlzLnBhdGh9JHt0aGlzLnBhdGhVdGlsU2VydmljZS5zZXBhcmF0b3J9JHtpbmRleE9yS2V5fWA7XG4gIH1cblxuICB0cmFja0J5RWxlbWVudChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbn1cbiIsIjxkaXY+XG4gIDxhIFtocmVmXT1cImhyZWZcIiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIj57e2xhYmVsfX08L2E+XG4gIDxhICpuZ0lmPVwiaXNDb2xsYXBzYWJsZVwiIFtoaWRkZW5dPVwiaXNDb2xsYXBzZWRcIiAoY2xpY2spPVwiY29sbGFwc2UoKVwiPiBbeF08L2E+XG4gIDxkaXYgKm5nSWY9XCJpc05vdExlYWZcIiBbbmdTd2l0Y2hdPVwic2NoZW1hLnR5cGVcIiBbaGlkZGVuXT1cImlzQ29sbGFwc2VkXCI+XG4gICAgPHVsPlxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ29iamVjdCdcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBrZXkgb2Yga2V5cyB8IGZpbHRlckhpZGRlbkZpZWxkczpzY2hlbWE6KGFkbWluTW9kZSQgfCBhc3luYykgfCBhZGRBbHdheXNTaG93RmllbGRzOnNjaGVtYSB8IHNvcnRBbHBoYWJldGljYWxseTsgdHJhY2tCeTp0cmFja0J5RWxlbWVudFwiPlxuICAgICAgICAgIDx0cmVlLW1lbnUtaXRlbSBbbGFiZWxdPVwia2V5XCIgW3ZhbHVlXT1cInZhbHVlLmdldChrZXkpXCIgW3NjaGVtYV09XCJzY2hlbWEucHJvcGVydGllc1trZXldXCIgW3BhdGhdPVwiZ2V0Q2hpbGRQYXRoKGtleSlcIiBbZGVwdGhdPVwiZGVwdGggKyAxXCI+PC90cmVlLW1lbnUtaXRlbT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGVsZW1lbnQgb2YgdmFsdWU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6dHJhY2tCeUVsZW1lbnRcIj5cbiAgICAgICAgICA8dHJlZS1tZW51LWl0ZW0gW2xhYmVsXT1cImlcIiBbdmFsdWVdPVwiZWxlbWVudFwiIFtzY2hlbWFdPVwic2NoZW1hLml0ZW1zXCIgW3BhdGhdPVwiZ2V0Q2hpbGRQYXRoKGkpXCIgW2RlcHRoXT1cImRlcHRoICsgMVwiPjwvdHJlZS1tZW51LWl0ZW0+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L2Rpdj5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==