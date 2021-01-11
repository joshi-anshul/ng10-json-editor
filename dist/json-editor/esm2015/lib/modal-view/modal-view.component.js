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
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { takeUntil } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/common";
const _c0 = ["modal"];
function ModalViewComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "button", 12);
    i0.ɵɵlistener("click", function ModalViewComponent_div_3_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.options.onConfirm(); });
    i0.ɵɵelement(2, "i", 13);
    i0.ɵɵtext(3, " Confirm ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ModalViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "button", 6);
    i0.ɵɵlistener("click", function ModalViewComponent_div_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r6); i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(1); return _r0.hide(); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h4", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵelement(7, "div", 9);
    i0.ɵɵelementStart(8, "div", 10);
    i0.ɵɵtemplate(9, ModalViewComponent_div_3_div_9_Template, 4, 0, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.options.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.options.bodyHtml, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r1.options.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "confirm");
} }
const _c1 = function () { return { backdrop: false }; };
export class ModalViewComponent extends AbstractSubscriberComponent {
    // TODO: unsubcribe on destroy
    constructor(modalService, changeDetectorRef) {
        super();
        this.modalService = modalService;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
        this.modalService
            .display$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(display => {
            display ? this.modal.show() : this.modal.hide();
        });
        this.modalService
            .options$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(options => {
            this.options = options;
            this.changeDetectorRef.markForCheck();
        });
    }
    onShow() {
        if (this.options && this.options.onShow) {
            this.options.onShow();
        }
    }
}
ModalViewComponent.ɵfac = function ModalViewComponent_Factory(t) { return new (t || ModalViewComponent)(i0.ɵɵdirectiveInject(i1.ModalService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ModalViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalViewComponent, selectors: [["modal-view"]], viewQuery: function ModalViewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "config", "onShown"], ["modal", "bs-modal"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "close", 3, "click"], [1, "modal-title"], [1, "modal-body"], [3, "innerHTML"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]], template: function ModalViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("onShown", function ModalViewComponent_Template_div_onShown_0_listener() { return ctx.onShow(); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, ModalViewComponent_div_3_Template, 10, 4, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("config", i0.ɵɵpureFunction0(2, _c1));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.options);
    } }, directives: [i2.ModalDirective, i3.NgIf, i3.NgSwitch, i3.NgSwitchCase], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalViewComponent, [{
        type: Component,
        args: [{
                selector: 'modal-view',
                styleUrls: [
                    './modal-view.component.scss'
                ],
                templateUrl: './modal-view.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.ModalService }, { type: i0.ChangeDetectorRef }]; }, { modal: [{
            type: ViewChild,
            args: ['modal']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvbW9kYWwtdmlldy9tb2RhbC12aWV3LmNvbXBvbmVudC50cyIsImxpYi9tb2RhbC12aWV3L21vZGFsLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLFNBQVMsRUFBcUIsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNsQmpDLDJCQUNFO0lBQUEsa0NBQ0c7SUFENkIsc0tBQVMsMEJBQW1CLElBQUU7SUFDM0Qsd0JBQTJCO0lBQUMseUJBQy9CO0lBQUEsaUJBQVM7SUFDWCxpQkFBTTs7OztJQVpaLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSxpQ0FBMkQ7SUFBdkIsK0tBQVMsVUFBWSxJQUFDO0lBQUMsc0JBQU87SUFBQSxpQkFBUztJQUMzRSw2QkFBd0I7SUFBQSxZQUFpQjtJQUFBLGlCQUFLO0lBQ2hELGlCQUFNO0lBQ04sOEJBQ0U7SUFBQSx5QkFBMEM7SUFDMUMsK0JBQ0U7SUFBQSwwRUFDRTtJQUlKLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBWnNCLGVBQWlCO0lBQWpCLDBDQUFpQjtJQUdwQyxlQUE4QjtJQUE5QixzRUFBOEI7SUFDOUIsZUFBeUI7SUFBekIsOENBQXlCO0lBQ3ZCLGVBQXlCO0lBQXpCLHdDQUF5Qjs7O0FENEJ4QyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsMkJBQTJCO0lBS2pFLDhCQUE4QjtJQUM5QixZQUFvQixZQUEwQixFQUNwQyxpQkFBb0M7UUFDNUMsS0FBSyxFQUFFLENBQUM7UUFGVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRTlDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVk7YUFDZCxRQUFRO2FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxZQUFZO2FBQ2QsUUFBUTthQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7b0ZBL0JVLGtCQUFrQjt1REFBbEIsa0JBQWtCOzs7Ozs7UUN0Qy9CLGlDQUNFO1FBRHNCLGdHQUFXLFlBQVEsSUFBQztRQUMxQyw4QkFDRTtRQUFBLG9FQUNFO1FBZUosaUJBQU07UUFDUixpQkFBTTs7UUFuQjZGLG1EQUE4QjtRQUV4SCxlQUFlO1FBQWYsa0NBQWU7O2tERG9DWCxrQkFBa0I7Y0FSOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1QsNkJBQTZCO2lCQUM5QjtnQkFDRCxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDsrRkFHcUIsS0FBSztrQkFBeEIsU0FBUzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuaW1wb3J0IHsgQWJzdHJhY3RTdWJzY3JpYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3Qtc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLXZpZXcnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9tb2RhbC12aWV3LmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3Vic2NyaWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnbW9kYWwnKSBtb2RhbDogTW9kYWxEaXJlY3RpdmU7XG4gIG9wdGlvbnM6IE1vZGFsT3B0aW9ucztcblxuICAvLyBUT0RPOiB1bnN1YmNyaWJlIG9uIGRlc3Ryb3lcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZVxuICAgICAgLmRpc3BsYXkkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKGRpc3BsYXkgPT4ge1xuICAgICAgICBkaXNwbGF5ID8gdGhpcy5tb2RhbC5zaG93KCkgOiB0aGlzLm1vZGFsLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlXG4gICAgICAub3B0aW9ucyRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUob3B0aW9ucyA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5vblNob3cpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vblNob3coKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgKG9uU2hvd24pPVwib25TaG93KClcIiBic01vZGFsICNtb2RhbD1cImJzLW1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBbY29uZmlnXT1cInsgYmFja2Ryb3A6IGZhbHNlIH1cIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxuICAgIDxkaXYgKm5nSWY9XCJvcHRpb25zXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwibW9kYWwuaGlkZSgpXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7b3B0aW9ucy50aXRsZX19PC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cIm9wdGlvbnMuYm9keUh0bWxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwib3B0aW9ucy50eXBlXCI+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NvbmZpcm0nXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cIm9wdGlvbnMub25Db25maXJtKCk7XCI+XG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPiBDb25maXJtXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=