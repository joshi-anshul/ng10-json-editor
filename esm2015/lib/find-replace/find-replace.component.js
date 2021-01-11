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
import * as i1 from "@angular/platform-browser";
import * as i2 from "../shared/services";
import * as i3 from "@angular/forms";
export class FindReplaceComponent {
    constructor(changeDetectionRef, domSanitizer, findReplaceAllService, jsonStoreService, modalService) {
        this.changeDetectionRef = changeDetectionRef;
        this.domSanitizer = domSanitizer;
        this.findReplaceAllService = findReplaceAllService;
        this.jsonStoreService = jsonStoreService;
        this.modalService = modalService;
    }
    onKeypress(key) {
        if (key === 'Enter') {
            this.findAndReplace();
        }
    }
    findAndReplace() {
        if (!(this.find && this.replace)) {
            return;
        }
        const value = this.jsonStoreService.getIn(this.path);
        const result = this.findReplaceAllService
            .findReplaceInImmutable(value, this.schema, this.find, this.replace, this.exactPhrase);
        this.replaced = result.replaced;
        const stringyfiedDiffHtml = JSON.stringify(result.diffHtml, undefined, 2);
        this.modalService.displayModal({
            title: 'After Replace',
            bodyHtml: this.domSanitizer.bypassSecurityTrustHtml(`<pre class="max-height-70-vh"><code>${stringyfiedDiffHtml}</code></pre>`),
            type: 'confirm',
            onConfirm: () => {
                this.modalService.closeCurrentModal();
                this.jsonStoreService.setIn(this.path, this.replaced);
                this.cleanParameters();
            }
        });
    }
    cleanParameters() {
        this.find = '';
        this.replace = '';
        this.exactPhrase = false;
        this.changeDetectionRef.markForCheck();
    }
}
FindReplaceComponent.ɵfac = function FindReplaceComponent_Factory(t) { return new (t || FindReplaceComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.FindReplaceAllService), i0.ɵɵdirectiveInject(i2.JsonStoreService), i0.ɵɵdirectiveInject(i2.ModalService)); };
FindReplaceComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FindReplaceComponent, selectors: [["find-replace"]], inputs: { path: "path", schema: "schema" }, decls: 10, vars: 3, consts: [[1, "find-replace-container"], [1, "top-container-item"], ["placeholder", "Find", 3, "ngModel", "ngModelChange", "keypress"], ["placeholder", "Replace", 3, "ngModel", "ngModelChange", "keypress"], [1, "bottom-container-item"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "keypress"], [1, "fa", "fa-arrow-circle-right", 3, "click"]], template: function FindReplaceComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "input", 2);
        i0.ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_2_listener($event) { return ctx.find = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_2_listener($event) { return ctx.onKeypress($event.key); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵelementStart(4, "input", 3);
        i0.ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_4_listener($event) { return ctx.replace = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_4_listener($event) { return ctx.onKeypress($event.key); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "label");
        i0.ɵɵtext(7, " Exact phrase ");
        i0.ɵɵelementStart(8, "input", 5);
        i0.ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_8_listener($event) { return ctx.exactPhrase = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_8_listener($event) { return ctx.onKeypress($event.key); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "i", 6);
        i0.ɵɵlistener("click", function FindReplaceComponent_Template_i_click_9_listener() { return ctx.findAndReplace(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.find);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.replace);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.exactPhrase);
    } }, directives: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i3.CheckboxControlValueAccessor], styles: [".find-replace-container[_ngcontent-%COMP%]{margin:4px 3px 3px 2px}.find-replace-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:13px}.top-container-item[_ngcontent-%COMP%]{margin-bottom:3px}.bottom-container-item[_ngcontent-%COMP%]{margin-top:5px}.bottom-container-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;font-size:20px;padding-right:2px}label[_ngcontent-%COMP%]{color:#7e7e7e;font-size:12px;font-weight:400}.find-replace-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .horizontal-padding[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FindReplaceComponent, [{
        type: Component,
        args: [{
                selector: 'find-replace',
                styleUrls: [
                    './find-replace.component.scss'
                ],
                templateUrl: './find-replace.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }, { type: i2.FindReplaceAllService }, { type: i2.JsonStoreService }, { type: i2.ModalService }]; }, { path: [{
            type: Input
        }], schema: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1yZXBsYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maW5kLXJlcGxhY2UvZmluZC1yZXBsYWNlLmNvbXBvbmVudC50cyIsImxpYi9maW5kLXJlcGxhY2UvZmluZC1yZXBsYWNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFlN0YsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQixZQUFtQixrQkFBcUMsRUFDL0MsWUFBMEIsRUFDMUIscUJBQTRDLEVBQzVDLGdCQUFrQyxFQUNsQyxZQUEwQjtRQUpoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQy9DLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFeEMsVUFBVSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQjthQUN0QyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDN0IsS0FBSyxFQUFFLGVBQWU7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsdUNBQXVDLG1CQUFtQixlQUFlLENBQUM7WUFDOUgsSUFBSSxFQUFFLFNBQVM7WUFDZixTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzt3RkFqRFUsb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNyQ2pDLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSxnQ0FDRjtRQUQ0QiwySUFBa0IsK0ZBQWEsMEJBQXNCLElBQW5DO1FBQTVDLGlCQUNGO1FBQUEsaUJBQU07UUFDTiwyQkFDRTtRQUFBLGdDQUNGO1FBRCtCLDhJQUFxQiwrRkFBYSwwQkFBc0IsSUFBbkM7UUFBbEQsaUJBQ0Y7UUFBQSxpQkFBTTtRQUNOLDhCQUNFO1FBQUEsNkJBQ0U7UUFBQSw4QkFDQTtRQUFBLGdDQUNGO1FBRHlCLGtKQUF5QiwrRkFBYSwwQkFBc0IsSUFBbkM7UUFBaEQsaUJBQ0Y7UUFBQSxpQkFBUTtRQUNSLDRCQUFtRTtRQUEvQiw0RkFBUyxvQkFBZ0IsSUFBQztRQUFDLGlCQUFJO1FBQ3JFLGlCQUFNO1FBQ1IsaUJBQU07O1FBWndCLGVBQWtCO1FBQWxCLGtDQUFrQjtRQUdmLGVBQXFCO1FBQXJCLHFDQUFxQjtRQUt6QixlQUF5QjtRQUF6Qix5Q0FBeUI7O2tERDJCekMsb0JBQW9CO2NBUmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsU0FBUyxFQUFFO29CQUNULCtCQUErQjtpQkFDaEM7Z0JBQ0QsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7NkxBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBMaXN0LCBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBGaW5kUmVwbGFjZUFsbFNlcnZpY2UsIEpzb25TdG9yZVNlcnZpY2UsIE1vZGFsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaW5kLXJlcGxhY2UnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9maW5kLXJlcGxhY2UuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9maW5kLXJlcGxhY2UuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGaW5kUmVwbGFjZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgcGF0aDogQXJyYXk8YW55PjtcbiAgQElucHV0KCkgc2NoZW1hOiBKU09OU2NoZW1hO1xuXG4gIHByaXZhdGUgcmVwbGFjZWQ6IExpc3Q8YW55PiB8IE1hcDxzdHJpbmcsIGFueT47XG5cbiAgZmluZDogc3RyaW5nO1xuICByZXBsYWNlOiBzdHJpbmc7XG4gIGV4YWN0UGhyYXNlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwdWJsaWMgZmluZFJlcGxhY2VBbGxTZXJ2aWNlOiBGaW5kUmVwbGFjZUFsbFNlcnZpY2UsXG4gICAgcHVibGljIGpzb25TdG9yZVNlcnZpY2U6IEpzb25TdG9yZVNlcnZpY2UsXG4gICAgcHVibGljIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7IH1cblxuICBvbktleXByZXNzKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5maW5kQW5kUmVwbGFjZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRBbmRSZXBsYWNlKCkge1xuICAgIGlmICghKHRoaXMuZmluZCAmJiB0aGlzLnJlcGxhY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5qc29uU3RvcmVTZXJ2aWNlLmdldEluKHRoaXMucGF0aCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5maW5kUmVwbGFjZUFsbFNlcnZpY2VcbiAgICAgIC5maW5kUmVwbGFjZUluSW1tdXRhYmxlKHZhbHVlLCB0aGlzLnNjaGVtYSwgdGhpcy5maW5kLCB0aGlzLnJlcGxhY2UsIHRoaXMuZXhhY3RQaHJhc2UpO1xuICAgIHRoaXMucmVwbGFjZWQgPSByZXN1bHQucmVwbGFjZWQ7XG4gICAgY29uc3Qgc3RyaW5neWZpZWREaWZmSHRtbCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kaWZmSHRtbCwgdW5kZWZpbmVkLCAyKTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5kaXNwbGF5TW9kYWwoe1xuICAgICAgdGl0bGU6ICdBZnRlciBSZXBsYWNlJyxcbiAgICAgIGJvZHlIdG1sOiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChgPHByZSBjbGFzcz1cIm1heC1oZWlnaHQtNzAtdmhcIj48Y29kZT4ke3N0cmluZ3lmaWVkRGlmZkh0bWx9PC9jb2RlPjwvcHJlPmApLFxuICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlQ3VycmVudE1vZGFsKCk7XG4gICAgICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5zZXRJbih0aGlzLnBhdGgsIHRoaXMucmVwbGFjZWQpO1xuICAgICAgICB0aGlzLmNsZWFuUGFyYW1ldGVycygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5maW5kID0gJyc7XG4gICAgdGhpcy5yZXBsYWNlID0gJyc7XG4gICAgdGhpcy5leGFjdFBocmFzZSA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmluZC1yZXBsYWNlLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwidG9wLWNvbnRhaW5lci1pdGVtXCI+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRmluZFwiIFsobmdNb2RlbCldPVwiZmluZFwiIChrZXlwcmVzcyk9XCJvbktleXByZXNzKCRldmVudC5rZXkpXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUmVwbGFjZVwiIFsobmdNb2RlbCldPVwicmVwbGFjZVwiIChrZXlwcmVzcyk9XCJvbktleXByZXNzKCRldmVudC5rZXkpXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib3R0b20tY29udGFpbmVyLWl0ZW1cIj5cbiAgICA8bGFiZWw+XG4gICAgICBFeGFjdCBwaHJhc2VcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImV4YWN0UGhyYXNlXCIgKGtleXByZXNzKT1cIm9uS2V5cHJlc3MoJGV2ZW50LmtleSlcIi8+XG4gICAgPC9sYWJlbD5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFycm93LWNpcmNsZS1yaWdodFwiIChjbGljayk9XCJmaW5kQW5kUmVwbGFjZSgpXCI+PC9pPlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==