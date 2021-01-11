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
import * as i1 from "ngx-bootstrap/dropdown";
function TitleDropdownComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class TitleDropdownComponent {
}
TitleDropdownComponent.ɵfac = function TitleDropdownComponent_Factory(t) { return new (t || TitleDropdownComponent)(); };
TitleDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TitleDropdownComponent, selectors: [["title-dropdown"]], inputs: { title: "title", isDisabled: "isDisabled" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [["dropdown", "", 1, "title-dropdown-container", 3, "isDisabled"], ["dropdownToggle", "", 1, "btn", "title-dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"]], template: function TitleDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelement(3, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, TitleDropdownComponent_ul_4_Template, 2, 0, "ul", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("isDisabled", ctx.isDisabled);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
    } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], styles: [".title-dropdown-toggle[_ngcontent-%COMP%]{background:transparent;border:none;color:#c1c1c1;font-size:13px;font-weight:700;padding:0 3px}.title-dropdown-toggle[_ngcontent-%COMP%]:focus{outline:0}.title-dropdown-toggle[_ngcontent-%COMP%]:hover{color:#6b6b6b}.dropdown-menu[_ngcontent-%COMP%]{left:auto;min-width:120px;top:auto}.title-dropdown-container[_ngcontent-%COMP%]{position:relative}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TitleDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'title-dropdown',
                styleUrls: [
                    './title-dropdown.component.scss'
                ],
                templateUrl: './title-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { title: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3RpdGxlLWRyb3Bkb3duL3RpdGxlLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsImxpYi90aXRsZS1kcm9wZG93bi90aXRsZS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ2xCeEUsNkJBQ0U7SUFBQSxrQkFBWTtJQUNkLGlCQUFLOzs7QUQwQlAsTUFBTSxPQUFPLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjsyREFBdEIsc0JBQXNCOztRQ2hDbkMsOEJBQ0U7UUFBQSxpQ0FDRTtRQUFBLFlBQVU7UUFBQSwwQkFBMkI7UUFDdkMsaUJBQVM7UUFDVCxxRUFDRTtRQUVKLGlCQUFNOztRQVB5QywyQ0FBeUI7UUFFcEUsZUFBVTtRQUFWLDBDQUFVOztrREQ4QkQsc0JBQXNCO2NBUmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUU7b0JBQ1QsaUNBQWlDO2lCQUNsQztnQkFDRCxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RpdGxlLWRyb3Bkb3duJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vdGl0bGUtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi90aXRsZS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlRHJvcGRvd25Db21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuIiwiPGRpdiBkcm9wZG93biBjbGFzcz1cInRpdGxlLWRyb3Bkb3duLWNvbnRhaW5lclwiIFtpc0Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biB0aXRsZS1kcm9wZG93bi10b2dnbGVcIiBkcm9wZG93blRvZ2dsZT5cbiAgICB7e3RpdGxlfX0gPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiAqZHJvcGRvd25NZW51PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC91bD5cbjwvZGl2PiJdfQ==