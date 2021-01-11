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
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ListActionGroupComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function ListActionGroupComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onMove.emit(-1); });
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementEnd();
} }
function ListActionGroupComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ListActionGroupComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onMove.emit(1); });
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementEnd();
} }
export class ListActionGroupComponent {
    constructor() {
        this.onDelete = new EventEmitter();
        this.onMove = new EventEmitter();
    }
}
ListActionGroupComponent.ɵfac = function ListActionGroupComponent_Factory(t) { return new (t || ListActionGroupComponent)(); };
ListActionGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListActionGroupComponent, selectors: [["list-action-group"]], inputs: { canMove: "canMove", isDisabled: "isDisabled" }, outputs: { onDelete: "onDelete", onMove: "onMove" }, decls: 5, vars: 4, consts: [["type", "button", 1, "editor-btn-delete", 3, "click"], [1, "fa", "fa-times"], ["type", "button", "class", "editor-btn-move-up", 3, "click", 4, "ngIf"], ["type", "button", "class", "editor-btn-move-down", 3, "click", 4, "ngIf"], ["type", "button", 1, "editor-btn-move-up", 3, "click"], [1, "fa", "fa-chevron-up"], ["type", "button", 1, "editor-btn-move-down", 3, "click"], [1, "fa", "fa-chevron-down"]], template: function ListActionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function ListActionGroupComponent_Template_button_click_1_listener() { return ctx.onDelete.emit(); });
        i0.ɵɵelement(2, "i", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, ListActionGroupComponent_button_3_Template, 2, 0, "button", 2);
        i0.ɵɵtemplate(4, ListActionGroupComponent_button_4_Template, 2, 0, "button", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.isDisabled);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.canMove);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canMove);
    } }, directives: [i1.NgIf], styles: [""], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListActionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'list-action-group',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    './list-action-group.component.scss'
                ],
                templateUrl: './list-action-group.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { canMove: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], onDelete: [{
            type: Output
        }], onMove: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1hY3Rpb24tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2xpc3QtYWN0aW9uLWdyb3VwL2xpc3QtYWN0aW9uLWdyb3VwLmNvbXBvbmVudC50cyIsImxpYi9saXN0LWFjdGlvbi1ncm91cC9saXN0LWFjdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7Ozs7O0lDMUJyQixpQ0FDRTtJQUQrRCx3S0FBUyxvQkFBYSxDQUFDLENBQUMsSUFBQztJQUN4Rix1QkFBZ0M7SUFDbEMsaUJBQVM7Ozs7SUFDVCxpQ0FDRTtJQURpRSx3S0FBUyxtQkFBWSxDQUFDLENBQUMsSUFBQztJQUN6Rix1QkFBa0M7SUFDcEMsaUJBQVM7O0FEaUNYLE1BQU0sT0FBTyx3QkFBd0I7SUFUckM7UUFhWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQUUvQzs7Z0dBUFksd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUMxQ3JDLDJCQUNFO1FBQUEsaUNBQ0U7UUFEOEMscUdBQVMsbUJBQWUsSUFBQztRQUN2RSx1QkFBMkI7UUFDN0IsaUJBQVM7UUFDVCwrRUFDRTtRQUVGLCtFQUNFO1FBRUosaUJBQU07O1FBVkQsMENBQTZCO1FBSXhCLGVBQWU7UUFBZixrQ0FBZTtRQUdmLGVBQWU7UUFBZixrQ0FBZTs7a0REbUNaLHdCQUF3QjtjQVRwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVCxvQ0FBb0M7aUJBQ3JDO2dCQUNELFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUdVLE9BQU87a0JBQWYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LWFjdGlvbi1ncm91cCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2xpc3QtYWN0aW9uLWdyb3VwLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1hY3Rpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0QWN0aW9uR3JvdXBDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNhbk1vdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBvbkRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG59XG4iLCI8ZGl2IFtjbGFzcy5kaXNhYmxlZF09XCJpc0Rpc2FibGVkXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdG9yLWJ0bi1kZWxldGVcIiAoY2xpY2spPVwib25EZWxldGUuZW1pdCgpXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gKm5nSWY9XCJjYW5Nb3ZlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdG9yLWJ0bi1tb3ZlLXVwXCIgKGNsaWNrKT1cIm9uTW92ZS5lbWl0KC0xKVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi11cFwiPjwvaT5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gKm5nSWY9XCJjYW5Nb3ZlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdG9yLWJ0bi1tb3ZlLWRvd25cIiAoY2xpY2spPVwib25Nb3ZlLmVtaXQoMSlcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgPC9idXR0b24+XG48L2Rpdj4iXX0=