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
import * as i3 from "./tree-menu-item.component";
import * as i4 from "../shared/pipes/sort-alphabetically.pipe";
import * as i5 from "../shared/pipes/add-always-show-fields.pipe";
import * as i6 from "../shared/pipes/filter-hidden-fields.pipe";
function TreeMenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "tree-menu-item", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", key_r1)("value", ctx_r0.record.get(key_r1))("schema", ctx_r0.schema.properties[key_r1])("path", ctx_r0.getChildPath(key_r1))("depth", 1);
} }
export class TreeMenuComponent {
    constructor(domUtilService, pathUtilService, appGlobalsService) {
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.appGlobalsService = appGlobalsService;
        this.prefixOrPath = '';
    }
    ngOnChanges(changes) {
        if (changes['record']) {
            this.keys = this.record.keySeq().toSet();
        }
    }
    getChildPath(key) {
        return `${this.pathUtilService.separator}${key}`;
    }
    trackByElement(index, element) {
        return element;
    }
    get adminMode$() {
        return this.appGlobalsService.adminMode$;
    }
}
TreeMenuComponent.ɵfac = function TreeMenuComponent_Factory(t) { return new (t || TreeMenuComponent)(i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.AppGlobalsService)); };
TreeMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TreeMenuComponent, selectors: [["tree-menu"]], inputs: { record: "record", schema: "schema" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 13, consts: [[1, "tree-menu-container"], [1, "menu-item-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "label", "value", "schema", "path", "depth"]], template: function TreeMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ul", 1);
        i0.ɵɵtemplate(2, TreeMenuComponent_li_2_Template, 2, 5, "li", 2);
        i0.ɵɵpipe(3, "sortAlphabetically");
        i0.ɵɵpipe(4, "addAlwaysShowFields");
        i0.ɵɵpipe(5, "filterHiddenFields");
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, i0.ɵɵpipeBind2(4, 4, i0.ɵɵpipeBind3(5, 7, ctx.keys, ctx.schema, i0.ɵɵpipeBind1(6, 11, ctx.adminMode$)), ctx.schema)))("ngForTrackBy", ctx.trackByElement);
    } }, directives: [i2.NgForOf, i3.TreeMenuItemComponent], pipes: [i4.SortAlphabeticallyPipe, i5.AddAlwaysShowFieldsPipe, i6.FilterHiddenFieldsPipe, i2.AsyncPipe], styles: ["div.tree-menu-container[_ngcontent-%COMP%]{overflow-y:auto;padding:8px 2px 0 0;text-align:center}ul.menu-item-container[_ngcontent-%COMP%]{list-style:none;padding-left:0;padding-top:8px;text-align:left}ul.menu-item-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:2px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeMenuComponent, [{
        type: Component,
        args: [{
                selector: 'tree-menu',
                styleUrls: [
                    './tree-menu.component.scss'
                ],
                templateUrl: './tree-menu.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DomUtilService }, { type: i1.PathUtilService }, { type: i1.AppGlobalsService }]; }, { record: [{
            type: Input
        }], schema: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi90cmVlLW1lbnUvdHJlZS1tZW51LmNvbXBvbmVudC50cyIsImxpYi90cmVlLW1lbnUvdHJlZS1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUlMLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDNUJuQiwwQkFDRTtJQUFBLG9DQUFrSjtJQUNwSixpQkFBSzs7OztJQURhLGVBQWE7SUFBYiw4QkFBYSxvQ0FBQSw0Q0FBQSxxQ0FBQSxZQUFBOztBRDBDbkMsTUFBTSxPQUFPLGlCQUFpQjtJQVM1QixZQUFvQixjQUE4QixFQUN4QyxlQUFnQyxFQUNoQyxpQkFBb0M7UUFGMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSnRDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXO1FBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWEsRUFBRSxPQUFZO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7SUFDM0MsQ0FBQzs7a0ZBOUJVLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDN0M5Qiw4QkFDRTtRQUFBLDZCQUNFO1FBQUEsZ0VBQ0U7Ozs7O1FBRUosaUJBQUs7UUFDUCxpQkFBTTs7UUFKRSxlQUFtSjtRQUFuSixtS0FBbUosb0NBQUE7O2tERDJDOUksaUJBQWlCO2NBUjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsU0FBUyxFQUFFO29CQUNULDRCQUE0QjtpQkFDN0I7Z0JBQ0QsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7K0hBR1UsTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXAsIFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERvbVV0aWxTZXJ2aWNlLCBQYXRoVXRpbFNlcnZpY2UsIEFwcEdsb2JhbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzJztcbmltcG9ydCB7IEpTT05TY2hlbWEgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbWVudScsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL3RyZWUtbWVudS5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSByZWNvcmQ6IE1hcDxzdHJpbmcsIGFueT47XG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTlNjaGVtYTtcblxuICBrZXlzOiBTZXQ8c3RyaW5nPjtcblxuICBwcml2YXRlIHByZWZpeE9yUGF0aCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tVXRpbFNlcnZpY2U6IERvbVV0aWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBHbG9iYWxzU2VydmljZTogQXBwR2xvYmFsc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1sncmVjb3JkJ10pIHtcbiAgICAgIHRoaXMua2V5cyA9IHRoaXMucmVjb3JkLmtleVNlcSgpLnRvU2V0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRQYXRoKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3RoaXMucGF0aFV0aWxTZXJ2aWNlLnNlcGFyYXRvcn0ke2tleX1gO1xuICB9XG5cbiAgdHJhY2tCeUVsZW1lbnQoaW5kZXg6IG51bWJlciwgZWxlbWVudDogYW55KTogYW55IHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGdldCBhZG1pbk1vZGUkKCk6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLmFkbWluTW9kZSQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0cmVlLW1lbnUtY29udGFpbmVyXCI+XG4gIDx1bCBjbGFzcz1cIm1lbnUtaXRlbS1jb250YWluZXJcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGtleSBvZiBrZXlzIHwgZmlsdGVySGlkZGVuRmllbGRzOnNjaGVtYTooYWRtaW5Nb2RlJCB8IGFzeW5jKSB8IGFkZEFsd2F5c1Nob3dGaWVsZHM6c2NoZW1hIHwgc29ydEFscGhhYmV0aWNhbGx5OyB0cmFja0J5OnRyYWNrQnlFbGVtZW50XCI+XG4gICAgICA8dHJlZS1tZW51LWl0ZW0gW2xhYmVsXT1cImtleVwiIFt2YWx1ZV09XCJyZWNvcmQuZ2V0KGtleSlcIiBbc2NoZW1hXT1cInNjaGVtYS5wcm9wZXJ0aWVzW2tleV1cIiBbcGF0aF09XCJnZXRDaGlsZFBhdGgoa2V5KVwiIFtkZXB0aF09XCIxXCI+PC90cmVlLW1lbnUtaXRlbT5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY+Il19