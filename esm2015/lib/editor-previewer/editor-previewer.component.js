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
import * as i1 from "ngx-bootstrap/tabs";
import * as i2 from "@angular/common";
import * as i3 from "../html-view/html-view.component";
function EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r6); const preview_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.openUrlInNewWindow(preview_r1.url); });
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} }
function EditorPreviewerComponent_tab_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template, 2, 0, "ng-template", 5);
    i0.ɵɵelement(2, "html-view", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const preview_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("url", preview_r1.url);
} }
function EditorPreviewerComponent_tab_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tab", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, EditorPreviewerComponent_tab_2_div_2_Template, 3, 1, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const preview_r1 = ctx.$implicit;
    i0.ɵɵproperty("heading", preview_r1.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", preview_r1.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "html");
} }
export class EditorPreviewerComponent {
    openUrlInNewWindow(url) {
        window.open(url, 'Preview', 'left=20,top=20,width=750,height=750');
    }
    trackByIndex(index, element) {
        return index;
    }
}
EditorPreviewerComponent.ɵfac = function EditorPreviewerComponent_Factory(t) { return new (t || EditorPreviewerComponent)(); };
EditorPreviewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditorPreviewerComponent, selectors: [["editor-previewer"]], inputs: { previews: "previews" }, decls: 3, vars: 2, consts: [[3, "heading", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "heading"], [3, "ngSwitch"], ["class", "preview-container", 4, "ngSwitchCase"], [1, "preview-container"], ["tabHeading", ""], [3, "url"], [1, "preview-link", 3, "click"], [1, "fa", "fa-external-link"]], template: function EditorPreviewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "tabset");
        i0.ɵɵtemplate(2, EditorPreviewerComponent_tab_2_Template, 3, 3, "tab", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.previews)("ngForTrackBy", ctx.trackByIndex);
    } }, directives: [i1.TabsetComponent, i2.NgForOf, i1.TabDirective, i2.NgSwitch, i2.NgSwitchCase, i1.TabHeadingDirective, i3.HtmlViewComponent], styles: ["div.preview-container[_ngcontent-%COMP%]{height:95vh;width:100%}span.preview-link[_ngcontent-%COMP%]{color:#337ab7;cursor:pointer}span.preview-link[_ngcontent-%COMP%]:hover{color:#6495ed}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorPreviewerComponent, [{
        type: Component,
        args: [{
                selector: 'editor-previewer',
                styleUrls: [
                    './editor-previewer.component.scss'
                ],
                templateUrl: './editor-previewer.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { previews: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXByZXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yLXByZXZpZXdlci9lZGl0b3ItcHJldmlld2VyLmNvbXBvbmVudC50cyIsImxpYi9lZGl0b3ItcHJldmlld2VyL2VkaXRvci1wcmV2aWV3ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNoQjlELCtCQUNFO0lBRHlCLHNSQUF5QztJQUNsRSx1QkFBbUM7SUFDckMsaUJBQU87OztJQUpYLDhCQUNFO0lBQUEscUdBQ0U7SUFJRiwrQkFBMkM7SUFDN0MsaUJBQU07OztJQURPLGVBQW1CO0lBQW5CLG9DQUFtQjs7O0lBUnBDLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSwrRUFDRTtJQU9KLGlCQUFNO0lBQ1IsaUJBQU07OztJQVhzRCx5Q0FBd0I7SUFDN0UsZUFBeUI7SUFBekIsMENBQXlCO0lBQ3ZCLGVBQXNCO0lBQXRCLHFDQUFzQjs7QUQ4Qm5DLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkMsa0JBQWtCLENBQUMsR0FBVztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUscUNBQXFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxPQUFZO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0dBVlUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNsQ3JDLDJCQUNFO1FBQUEsOEJBQ0U7UUFBQSx5RUFDRTtRQVdKLGlCQUFTO1FBQ1gsaUJBQU07O1FBYkcsZUFBc0Q7UUFBdEQsc0NBQXNELGtDQUFBOztrRERnQ2xELHdCQUF3QjtjQVJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsU0FBUyxFQUFFO29CQUNULG1DQUFtQztpQkFDcEM7Z0JBQ0QsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBR1UsUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcmV2aWV3IH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItcHJldmlld2VyJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vZWRpdG9yLXByZXZpZXdlci5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci1wcmV2aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JQcmV2aWV3ZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHByZXZpZXdzOiBBcnJheTxQcmV2aWV3PjtcblxuICBvcGVuVXJsSW5OZXdXaW5kb3codXJsOiBzdHJpbmcpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICdQcmV2aWV3JywgJ2xlZnQ9MjAsdG9wPTIwLHdpZHRoPTc1MCxoZWlnaHQ9NzUwJyk7XG4gIH1cblxuICB0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlciwgZWxlbWVudDogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDx0YWJzZXQ+XG4gICAgPHRhYiAqbmdGb3I9XCJsZXQgcHJldmlldyBvZiBwcmV2aWV3czsgdHJhY2tCeTp0cmFja0J5SW5kZXhcIiBbaGVhZGluZ109XCJwcmV2aWV3Lm5hbWVcIj5cbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cInByZXZpZXcudHlwZVwiPlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInaHRtbCdcIiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIHRhYkhlYWRpbmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXctbGlua1wiIChjbGljayk9XCJvcGVuVXJsSW5OZXdXaW5kb3cocHJldmlldy51cmwpXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZXh0ZXJuYWwtbGlua1wiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDxodG1sLXZpZXcgW3VybF09XCJwcmV2aWV3LnVybFwiPjwvaHRtbC12aWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGFiPlxuICA8L3RhYnNldD5cbjwvZGl2PiJdfQ==