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
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "../shared/directives/content-model.directive";
const _c0 = ["latexPreview"];
export class StringInputComponent {
    constructor(domUtilService, katexService) {
        this.domUtilService = domUtilService;
        this.katexService = katexService;
        this.blur = new EventEmitter();
        this.onKeypress = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const valueChange = changes['value'];
        if (valueChange) {
            this.contentModel = this.value;
            if (this.latexPreviewEnabled && !valueChange.firstChange) {
                this.renderLatex();
            }
        }
    }
    ngOnInit() {
        if (this.shouldShowLatexPreview) {
            this.latexPreviewShown = true;
        }
    }
    ngAfterViewInit() {
        // render latex preview on init, if it's enabled and value is not empty
        if (this.shouldShowLatexPreview) {
            this.renderLatex();
        }
    }
    onBlur() {
        if (this.shouldShowLatexPreview) {
            this.latexPreviewShown = true;
            this.value = this.contentModel;
        }
        this.blur.emit();
    }
    renderLatex() {
        this.katexService.renderMathInText(this.value, this.latexPreviewEl.nativeElement);
    }
    hideLatexPreview(contentEditableEl) {
        this.latexPreviewShown = false;
        setTimeout(() => contentEditableEl.focus());
    }
    contentModelChange(value) {
        this.contentModel = value;
        this.valueChange.emit(value);
    }
    get shouldShowLatexPreview() {
        return this.latexPreviewEnabled && Boolean(this.value);
    }
}
StringInputComponent.ɵfac = function StringInputComponent_Factory(t) { return new (t || StringInputComponent)(i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.KatexService)); };
StringInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StringInputComponent, selectors: [["string-input"]], viewQuery: function StringInputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.latexPreviewEl = _t.first);
    } }, inputs: { value: "value", disabled: "disabled", pathString: "pathString", placeholder: "placeholder", tabIndex: "tabIndex", latexPreviewEnabled: "latexPreviewEnabled" }, outputs: { blur: "blur", onKeypress: "onKeypress", valueChange: "valueChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[3, "tabindex", "contentModel", "contentModelChange", "blur", "keypress"], ["contentEditable", ""], [3, "click", "blur"], ["latexPreview", ""]], template: function StringInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "span", 0, 1);
        i0.ɵɵlistener("contentModelChange", function StringInputComponent_Template_span_contentModelChange_0_listener($event) { return ctx.contentModelChange($event); })("blur", function StringInputComponent_Template_span_blur_0_listener() { return ctx.onBlur(); })("keypress", function StringInputComponent_Template_span_keypress_0_listener($event) { return ctx.onKeypress.emit($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵlistener("click", function StringInputComponent_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(1); return ctx.hideLatexPreview(_r0); })("blur", function StringInputComponent_Template_div_blur_2_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(1); return ctx.hideLatexPreview(_r0); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("hidden", ctx.latexPreviewShown);
        i0.ɵɵproperty("tabindex", ctx.tabIndex)("contentModel", ctx.contentModel);
        i0.ɵɵattribute("contenteditable", !ctx.disabled)("data-path", ctx.pathString)("placeholder", ctx.placeholder || "\u2063\u2063");
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("hidden", !ctx.latexPreviewEnabled || !ctx.latexPreviewShown);
    } }, directives: [i2.ContentModelDirective], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StringInputComponent, [{
        type: Component,
        args: [{
                selector: 'string-input',
                styleUrls: [
                    './string-input.component.scss'
                ],
                templateUrl: './string-input.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DomUtilService }, { type: i1.KatexService }]; }, { latexPreviewEl: [{
            type: ViewChild,
            args: ['latexPreview']
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], pathString: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], latexPreviewEnabled: [{
            type: Input
        }], blur: [{
            type: Output
        }], onKeypress: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zdHJpbmctaW5wdXQvc3RyaW5nLWlucHV0LmNvbXBvbmVudC50cyIsImxpYi9zdHJpbmctaW5wdXQvc3RyaW5nLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFZdkIsTUFBTSxPQUFPLG9CQUFvQjtJQW1CL0IsWUFBbUIsY0FBOEIsRUFBUyxZQUEwQjtRQUFqRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVIxRSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNoQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFNcUMsQ0FBQztJQUV6RixXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLHVFQUF1RTtRQUN2RSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxpQkFBOEI7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDOzt3RkFwRVUsb0JBQW9CO3lEQUFwQixvQkFBb0I7Ozs7Ozs7UUM5Q2pDLGtDQUUwRTtRQUQxQywrSEFBc0IsOEJBQTBCLElBQUMsZ0ZBQVMsWUFBUSxJQUFqQiw4RkFBK0IsMkJBQXVCLElBQXREO1FBQ2QsaUJBQU87UUFDMUUsaUNBQ3NCO1FBRDJDLG9KQUFTLHlCQUFpQyxJQUFDLHFJQUFTLHlCQUFpQyxJQUExQztRQUM1RixpQkFBTTs7UUFKaEIsK0NBQWtDO1FBQWtFLHVDQUFxQixrQ0FBQTtRQUF0RixnREFBa0MsNkJBQUEsa0RBQUE7UUFHdEUsZUFBMkQ7UUFBM0QsNEVBQTJEOztrREQyQ25ELG9CQUFvQjtjQVJoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFNBQVMsRUFBRTtvQkFDVCwrQkFBK0I7aUJBQ2hDO2dCQUNELFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzRGQUU0QixjQUFjO2tCQUF4QyxTQUFTO21CQUFDLGNBQWM7WUFHaEIsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUVJLElBQUk7a0JBQWIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNyBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tVXRpbFNlcnZpY2UsIEthdGV4U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0cmluZy1pbnB1dCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL3N0cmluZy1pbnB1dC5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdsYXRleFByZXZpZXcnKSBsYXRleFByZXZpZXdFbDogRWxlbWVudFJlZjtcblxuICAvLyB2YWx1ZSB1cGRhdGUgdHJpZ2dlcnMgcmUtcmVuZGVyaW5nIG9mIGxhdGV4IHByZXZpZXcgaWYgaXQncyBlbmFibGVkXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBwYXRoU3RyaW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxhdGV4UHJldmlld0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBvbktleXByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBsYXRleFByZXZpZXdTaG93bjogYm9vbGVhbjtcbiAgLy8gdXBkYXRlZCBhcyB0eXBlZCBpbiBjb250ZW50ZWRpdGFibGUgZWwsIGRvZXNuJ3QgdHJpZ2dlciBsYXRleCByZS1yZW5kZXJpbmcuXG4gIGNvbnRlbnRNb2RlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkb21VdGlsU2VydmljZTogRG9tVXRpbFNlcnZpY2UsIHB1YmxpYyBrYXRleFNlcnZpY2U6IEthdGV4U2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHZhbHVlQ2hhbmdlID0gY2hhbmdlc1sndmFsdWUnXTtcbiAgICBpZiAodmFsdWVDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29udGVudE1vZGVsID0gdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0aGlzLmxhdGV4UHJldmlld0VuYWJsZWQgJiYgIXZhbHVlQ2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTGF0ZXgoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaG91bGRTaG93TGF0ZXhQcmV2aWV3KSB7XG4gICAgICB0aGlzLmxhdGV4UHJldmlld1Nob3duID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gcmVuZGVyIGxhdGV4IHByZXZpZXcgb24gaW5pdCwgaWYgaXQncyBlbmFibGVkIGFuZCB2YWx1ZSBpcyBub3QgZW1wdHlcbiAgICBpZiAodGhpcy5zaG91bGRTaG93TGF0ZXhQcmV2aWV3KSB7XG4gICAgICB0aGlzLnJlbmRlckxhdGV4KCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dMYXRleFByZXZpZXcpIHtcbiAgICAgIHRoaXMubGF0ZXhQcmV2aWV3U2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29udGVudE1vZGVsO1xuICAgIH1cbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xuICB9XG5cbiAgcmVuZGVyTGF0ZXgoKSB7XG4gICAgdGhpcy5rYXRleFNlcnZpY2UucmVuZGVyTWF0aEluVGV4dCh0aGlzLnZhbHVlLCB0aGlzLmxhdGV4UHJldmlld0VsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgaGlkZUxhdGV4UHJldmlldyhjb250ZW50RWRpdGFibGVFbDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmxhdGV4UHJldmlld1Nob3duID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjb250ZW50RWRpdGFibGVFbC5mb2N1cygpKTtcbiAgfVxuXG4gIGNvbnRlbnRNb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250ZW50TW9kZWwgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHNob3VsZFNob3dMYXRleFByZXZpZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF0ZXhQcmV2aWV3RW5hYmxlZCAmJiBCb29sZWFuKHRoaXMudmFsdWUpO1xuICB9XG59XG4iLCI8c3BhbiBbY2xhc3MuaGlkZGVuXT1cImxhdGV4UHJldmlld1Nob3duXCIgW2F0dHIuY29udGVudGVkaXRhYmxlXT1cIiFkaXNhYmxlZFwiIFthdHRyLmRhdGEtcGF0aF09XCJwYXRoU3RyaW5nXCIgW3RhYmluZGV4XT1cInRhYkluZGV4XCJcbiAgW2NvbnRlbnRNb2RlbF09XCJjb250ZW50TW9kZWxcIiAoY29udGVudE1vZGVsQ2hhbmdlKT1cImNvbnRlbnRNb2RlbENoYW5nZSgkZXZlbnQpXCIgKGJsdXIpPVwib25CbHVyKClcIiAoa2V5cHJlc3MpPVwib25LZXlwcmVzcy5lbWl0KCRldmVudClcIlxuICBhdHRyLnBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlciB8fCAn4oGjXFx1MjA2Myd9fVwiICNjb250ZW50RWRpdGFibGU+PC9zcGFuPlxuPGRpdiBbY2xhc3MuaGlkZGVuXT1cIiFsYXRleFByZXZpZXdFbmFibGVkIHx8ICFsYXRleFByZXZpZXdTaG93blwiIChjbGljayk9XCJoaWRlTGF0ZXhQcmV2aWV3KGNvbnRlbnRFZGl0YWJsZSlcIiAoYmx1cik9XCJoaWRlTGF0ZXhQcmV2aWV3KGNvbnRlbnRFZGl0YWJsZSlcIlxuICAjbGF0ZXhQcmV2aWV3PjwvZGl2PiJdfQ==