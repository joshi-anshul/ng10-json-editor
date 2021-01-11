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
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/tabs";
import * as i3 from "./problems-console-tab/problems-console-tab.component";
import * as i4 from "./patches-console-tab/patches-console-tab.component";
function BottomConsoleComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} }
function BottomConsoleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "tabset");
    i0.ɵɵelementStart(2, "tab", 2);
    i0.ɵɵelement(3, "problems-console-tab", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "tab", 2);
    i0.ɵɵelement(5, "problems-console-tab", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "tab", 2);
    i0.ɵɵelement(7, "patches-console-tab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "tab", 4);
    i0.ɵɵlistener("select", function BottomConsoleComponent_div_0_Template_tab_select_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.closePanel(); });
    i0.ɵɵtemplate(9, BottomConsoleComponent_div_0_ng_template_9_Template, 1, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("active", ctx_r0.isActive("Errors"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("problemType", "errors");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("active", ctx_r0.isActive("Warnings"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("problemType", "warnings");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("active", ctx_r0.isActive("Patches"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("customClass", "pull-right");
} }
export class BottomConsoleComponent {
    constructor() {
        this.isOpen = false;
        this.activeTab = '';
        this.onCollapse = new EventEmitter();
    }
    closePanel() {
        this.onCollapse.emit(false);
    }
    isActive(tabName) {
        return tabName === this.activeTab;
    }
}
BottomConsoleComponent.ɵfac = function BottomConsoleComponent_Factory(t) { return new (t || BottomConsoleComponent)(); };
BottomConsoleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BottomConsoleComponent, selectors: [["bottom-console"]], inputs: { isOpen: "isOpen", activeTab: "activeTab" }, outputs: { onCollapse: "onCollapse" }, decls: 1, vars: 1, consts: [["class", "bottom-console-container", 4, "ngIf"], [1, "bottom-console-container"], [3, "active"], [3, "problemType"], [3, "customClass", "select"], ["tabHeading", ""], [1, "fa", "fa-window-close"]], template: function BottomConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BottomConsoleComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isOpen);
    } }, directives: [i1.NgIf, i2.TabsetComponent, i2.TabDirective, i3.ProblemsConsoleTabComponent, i4.PatchesConsoleTabComponent, i2.TabHeadingDirective], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomConsoleComponent, [{
        type: Component,
        args: [{
                selector: 'bottom-console',
                styleUrls: [
                    './bottom-console.component.scss'
                ],
                templateUrl: './bottom-console.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { isOpen: [{
            type: Input
        }], activeTab: [{
            type: Input
        }], onCollapse: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWNvbnNvbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2JvdHRvbS1jb25zb2xlL2JvdHRvbS1jb25zb2xlLmNvbXBvbmVudC50cyIsImxpYi9ib3R0b20tY29uc29sZS9ib3R0b20tY29uc29sZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBcUIsdUJBQXVCLEVBQVUsTUFBTSxFQUM1RSxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNaZix1QkFBa0M7Ozs7SUFiMUMsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsMENBQXNFO0lBQ3hFLGlCQUFNO0lBQ04sOEJBQ0U7SUFBQSwwQ0FBd0U7SUFDMUUsaUJBQU07SUFDTiw4QkFDRTtJQUFBLHNDQUEyQztJQUM3QyxpQkFBTTtJQUNOLDhCQUNFO0lBREcseUxBQXVCO0lBQzFCLDZGQUNFO0lBRUosaUJBQU07SUFDUixpQkFBUztJQUNYLGlCQUFNOzs7SUFmRyxlQUE2QjtJQUE3QixrREFBNkI7SUFDVixlQUF3QjtJQUF4QixzQ0FBd0I7SUFFM0MsZUFBK0I7SUFBL0Isb0RBQStCO0lBQ1osZUFBMEI7SUFBMUIsd0NBQTBCO0lBRTdDLGVBQThCO0lBQTlCLG1EQUE4QjtJQUdOLGVBQTRCO0lBQTVCLDBDQUE0Qjs7QUQyQjdELE1BQU0sT0FBTyxzQkFBc0I7SUFSbkM7UUFVVyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVkLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0tBU3BEO0lBUEMsVUFBVTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZTtRQUN0QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7OzRGQWJVLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDdENuQyx3RUFDRTs7UUFERyxpQ0FBYzs7a0REc0NOLHNCQUFzQjtjQVJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsU0FBUyxFQUFFO29CQUNULGlDQUFpQztpQkFDbEM7Z0JBQ0QsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBR1UsTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVJLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE3IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlciwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXRlZ29yaXplZFZhbGlkYXRpb25Qcm9ibGVtcyB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tY29uc29sZScsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2JvdHRvbS1jb25zb2xlLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLWNvbnNvbGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21Db25zb2xlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBpc09wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWN0aXZlVGFiID0gJyc7XG5cbiAgQE91dHB1dCgpIG9uQ29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2xvc2VQYW5lbCgpIHtcbiAgICB0aGlzLm9uQ29sbGFwc2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBpc0FjdGl2ZSh0YWJOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGFiTmFtZSA9PT0gdGhpcy5hY3RpdmVUYWI7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJpc09wZW5cIiBjbGFzcz1cImJvdHRvbS1jb25zb2xlLWNvbnRhaW5lclwiPlxuICA8dGFic2V0PlxuICAgIDx0YWIgW2FjdGl2ZV09XCJpc0FjdGl2ZSgnRXJyb3JzJylcIj5cbiAgICAgIDxwcm9ibGVtcy1jb25zb2xlLXRhYiBbcHJvYmxlbVR5cGVdPVwiJ2Vycm9ycydcIj48L3Byb2JsZW1zLWNvbnNvbGUtdGFiPlxuICAgIDwvdGFiPlxuICAgIDx0YWIgW2FjdGl2ZV09XCJpc0FjdGl2ZSgnV2FybmluZ3MnKVwiPlxuICAgICAgPHByb2JsZW1zLWNvbnNvbGUtdGFiIFtwcm9ibGVtVHlwZV09XCInd2FybmluZ3MnXCI+PC9wcm9ibGVtcy1jb25zb2xlLXRhYj5cbiAgICA8L3RhYj5cbiAgICA8dGFiIFthY3RpdmVdPVwiaXNBY3RpdmUoJ1BhdGNoZXMnKVwiPlxuICAgICAgPHBhdGNoZXMtY29uc29sZS10YWI+PC9wYXRjaGVzLWNvbnNvbGUtdGFiPlxuICAgIDwvdGFiPlxuICAgIDx0YWIgKHNlbGVjdCk9XCJjbG9zZVBhbmVsKClcIiBbY3VzdG9tQ2xhc3NdPVwiJ3B1bGwtcmlnaHQnXCI+XG4gICAgICA8bmctdGVtcGxhdGUgdGFiSGVhZGluZz5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS13aW5kb3ctY2xvc2VcIj48L2k+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdGFiPlxuICA8L3RhYnNldD5cbjwvZGl2PiJdfQ==