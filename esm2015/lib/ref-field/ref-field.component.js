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
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../shared/services";
import * as i3 from "@angular/common";
import * as i4 from "../primitive-field/primitive-field.component";
function RefFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "primitive-field", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.ref)("schema", ctx_r0.schema["properties"]["$ref"])("path", ctx_r0.refPath);
} }
function RefFieldComponent_div_2_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function RefFieldComponent_div_2_div_1_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(3); return ctx_r6.onPreviewClick($event); });
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementEnd();
} }
function RefFieldComponent_div_2_div_1_div_2_1_ng_template_0_Template(rf, ctx) { }
const _c0 = function (a0) { return { response: a0 }; };
function RefFieldComponent_div_2_div_1_div_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RefFieldComponent_div_2_div_1_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r8.refData));
} }
function RefFieldComponent_div_2_div_1_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function RefFieldComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RefFieldComponent_div_2_div_1_div_2_1_Template, 1, 4, undefined, 1);
    i0.ɵɵtemplate(2, RefFieldComponent_div_2_div_1_div_2_i_2_Template, 1, 0, "i", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.refData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.refData);
} }
function RefFieldComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RefFieldComponent_div_2_div_1_button_1_Template, 2, 0, "button", 3);
    i0.ɵɵtemplate(2, RefFieldComponent_div_2_div_1_div_2_Template, 3, 2, "div", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.shouldDisplayTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.shouldDisplayTemplate);
} }
function RefFieldComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", ctx_r3.anchorHref, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.anchorDisplay);
} }
function RefFieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RefFieldComponent_div_2_div_1_Template, 3, 2, "div", 1);
    i0.ɵɵtemplate(2, RefFieldComponent_div_2_div_2_Template, 3, 2, "div", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isTemplateEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.isTemplateEnabled);
} }
export class RefFieldComponent {
    constructor(http, changeDetectorRef, appGlobalsService, pathUtilService) {
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.isPreviewButtonHidden = false;
    }
    ngOnChanges(changes) {
        if (this.refConfig) {
            const valueChange = changes['value'];
            const schemaChange = changes['schema'];
            if (valueChange && this.refConfig && this.refConfig.anchorBuilder && this.ref) {
                this.anchorAttributes = this.refConfig.anchorBuilder(this.ref);
            }
            // instead of ngOnInit because requestOptions has to be set before fetching
            if (schemaChange && schemaChange.isFirstChange()) {
                this.requestOptions = this.createRequestOptionsWithConfig();
            }
            if (valueChange && this.isTemplateEnabled) {
                if (this.refConfig.lazy) {
                    this.isPreviewButtonHidden = false;
                }
                else {
                    this.fetchRef();
                }
            }
        }
        if (changes['path']) {
            this.pathString = this.pathUtilService.toPathString(this.path);
            this.refPath = this.path.concat('$ref');
        }
    }
    onPreviewClick() {
        this.isPreviewButtonHidden = true;
        this.fetchRef();
    }
    get customTemplate() {
        return this.appGlobalsService.templates[this.refConfig.templateName];
    }
    get refConfig() {
        return this.schema.refFieldConfig;
    }
    get ref() {
        return this.value.get('$ref');
    }
    get anchorHref() {
        return this.anchorAttributes ? this.anchorAttributes.href : this.ref;
    }
    get anchorDisplay() {
        return this.anchorAttributes ? this.anchorAttributes.display : this.ref;
    }
    get isTemplateEnabled() {
        return this.refConfig !== undefined && this.refConfig.templateName !== undefined;
    }
    get shouldDisplayTemplate() {
        return this.isPreviewButtonHidden || !this.refConfig.lazy;
    }
    get shouldDisplayInputField() {
        return this.refConfig !== undefined && this.refConfig.displayInputField;
    }
    fetchRef() {
        this.refData = undefined;
        this.http
            .get(this.ref, this.requestOptions)
            .pipe(map((res) => res.json())).subscribe(data => {
            this.refData = data;
            this.changeDetectorRef.markForCheck();
        });
    }
    createRequestOptionsWithConfig() {
        const headers = new Headers();
        if (this.refConfig.headers) {
            this.refConfig.headers
                .forEach(header => headers.append(header.name, header.value));
        }
        return { headers };
    }
}
RefFieldComponent.ɵfac = function RefFieldComponent_Factory(t) { return new (t || RefFieldComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.AppGlobalsService), i0.ɵɵdirectiveInject(i2.PathUtilService)); };
RefFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RefFieldComponent, selectors: [["ref-field"]], inputs: { schema: "schema", value: "value", path: "path" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "id"], [4, "ngIf"], [3, "value", "schema", "path"], ["class", "btn-preview-template", 3, "click", 4, "ngIf"], [1, "btn-preview-template", 3, "click"], [1, "fa", "fa-eye"], ["class", "fa fa-spinner fa-spin align-center", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "fa", "fa-spinner", "fa-spin", "align-center"], ["target", "_blank", 1, "break-word", 3, "href"]], template: function RefFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, RefFieldComponent_div_1_Template, 2, 3, "div", 1);
        i0.ɵɵtemplate(2, RefFieldComponent_div_2_Template, 3, 2, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.pathString);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.shouldDisplayInputField);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.ref);
    } }, directives: [i3.NgIf, i4.PrimitiveFieldComponent, i3.NgTemplateOutlet], styles: ["button.btn-preview-template[_ngcontent-%COMP%]{background:transparent;border:0;height:100%;width:100%}.align-center[_ngcontent-%COMP%]{text-align:center;width:100%}.break-word[_ngcontent-%COMP%]{word-break:break-word}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RefFieldComponent, [{
        type: Component,
        args: [{
                selector: 'ref-field',
                styleUrls: [
                    './ref-field.component.scss'
                ],
                templateUrl: './ref-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i0.ChangeDetectorRef }, { type: i2.AppGlobalsService }, { type: i2.PathUtilService }]; }, { schema: [{
            type: Input
        }], value: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9yZWYtZmllbGQvcmVmLWZpZWxkLmNvbXBvbmVudC50cyIsImxpYi9yZWYtZmllbGQvcmVmLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUt4QixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNqQ25DLDJCQUNFO0lBQUEscUNBQTBHO0lBQzVHLGlCQUFNOzs7SUFEYSxlQUFhO0lBQWIsa0NBQWEsK0NBQUEsd0JBQUE7Ozs7SUFJNUIsaUNBQXFHO0lBQWpDLHFOQUFnQztJQUFDLHVCQUF5QjtJQUFBLGlCQUFTOzs7OztJQUVySSxzR0FBaUg7OztJQUFwRix3REFBbUMsdUVBQUE7OztJQUNoRSx1QkFBbUU7OztJQUZyRSwyQkFDRTtJQUFBLG9GQUFpSDtJQUNqSCxnRkFBK0Q7SUFDakUsaUJBQU07OztJQUZTLGVBQWU7SUFBZixxQ0FBZTtJQUN6QixlQUFnQjtJQUFoQixzQ0FBZ0I7OztJQUp2QiwyQkFDRTtJQUFBLG9GQUFxRztJQUNyRyw4RUFDRTtJQUdKLGlCQUFNOzs7SUFMaUMsZUFBOEI7SUFBOUIsb0RBQThCO0lBQzlELGVBQTZCO0lBQTdCLG1EQUE2Qjs7O0lBS3BDLDJCQUNFO0lBQUEsNEJBQTBEO0lBQUEsWUFBaUI7SUFBQSxpQkFBSTtJQUNqRixpQkFBTTs7O0lBRGtDLGVBQW1CO0lBQW5CLDBEQUFtQjtJQUFDLGVBQWlCO0lBQWpCLDBDQUFpQjs7O0lBVC9FLDJC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REFBakIsaUJBQWlCO1FDL0M5Qiw4QkFDRTtRQUFBLGtFQUNFO1FBRUYsa0VBQ0U7UUFXSixpQkFBTTs7UUFoQkQsbUNBQWlCO1FBQ2YsZUFBK0I7UUFBL0Isa0RBQStCO1FBRy9CLGVBQVc7UUFBWCw4QkFBVzs7a0REMkNMLGlCQUFpQjtjQVI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFNBQVMsRUFBRTtvQkFDVCw0QkFBNEI7aUJBQzdCO2dCQUNELFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzJKQUdVLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFwcEdsb2JhbHNTZXJ2aWNlLCBQYXRoVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgUmVmQ29uZmlnLCBKU09OU2NoZW1hLCBSZWZBbmNob3JBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZWYtZmllbGQnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9yZWYtZmllbGQuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWYtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSZWZGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc2NoZW1hOiBKU09OU2NoZW1hO1xuICBASW5wdXQoKSB2YWx1ZTogTWFwPHN0cmluZywgc3RyaW5nPjtcbiAgQElucHV0KCkgcGF0aDogQXJyYXk8YW55PjtcblxuICBwYXRoU3RyaW5nOiBzdHJpbmc7XG4gIHJlZkRhdGE6IG9iamVjdDtcbiAgcmVxdWVzdE9wdGlvbnM6IGFueTtcbiAgcmVmUGF0aDogQXJyYXk8YW55PjtcblxuICBpc1ByZXZpZXdCdXR0b25IaWRkZW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGFuY2hvckF0dHJpYnV0ZXM6IFJlZkFuY2hvckF0dHJpYnV0ZXM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgYXBwR2xvYmFsc1NlcnZpY2U6IEFwcEdsb2JhbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5yZWZDb25maWcpIHtcbiAgICAgIGNvbnN0IHZhbHVlQ2hhbmdlID0gY2hhbmdlc1sndmFsdWUnXTtcbiAgICAgIGNvbnN0IHNjaGVtYUNoYW5nZSA9IGNoYW5nZXNbJ3NjaGVtYSddO1xuXG4gICAgICBpZiAodmFsdWVDaGFuZ2UgJiYgdGhpcy5yZWZDb25maWcgJiYgdGhpcy5yZWZDb25maWcuYW5jaG9yQnVpbGRlciAmJiB0aGlzLnJlZikge1xuICAgICAgICB0aGlzLmFuY2hvckF0dHJpYnV0ZXMgPSB0aGlzLnJlZkNvbmZpZy5hbmNob3JCdWlsZGVyKHRoaXMucmVmKTtcbiAgICAgIH1cblxuICAgICAgLy8gaW5zdGVhZCBvZiBuZ09uSW5pdCBiZWNhdXNlIHJlcXVlc3RPcHRpb25zIGhhcyB0byBiZSBzZXQgYmVmb3JlIGZldGNoaW5nXG4gICAgICBpZiAoc2NoZW1hQ2hhbmdlICYmIHNjaGVtYUNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnNXaXRoQ29uZmlnKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZUNoYW5nZSAmJiB0aGlzLmlzVGVtcGxhdGVFbmFibGVkKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZkNvbmZpZy5sYXp5KSB7XG4gICAgICAgICAgdGhpcy5pc1ByZXZpZXdCdXR0b25IaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZldGNoUmVmKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlc1sncGF0aCddKSB7XG4gICAgICB0aGlzLnBhdGhTdHJpbmcgPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcodGhpcy5wYXRoKTtcbiAgICAgIHRoaXMucmVmUGF0aCA9IHRoaXMucGF0aC5jb25jYXQoJyRyZWYnKTtcbiAgICB9XG4gIH1cblxuICBvblByZXZpZXdDbGljaygpIHtcbiAgICB0aGlzLmlzUHJldmlld0J1dHRvbkhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5mZXRjaFJlZigpO1xuICB9XG5cbiAgZ2V0IGN1c3RvbVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLnRlbXBsYXRlc1t0aGlzLnJlZkNvbmZpZy50ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgZ2V0IHJlZkNvbmZpZygpOiBSZWZDb25maWcge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZWZGaWVsZENvbmZpZztcbiAgfVxuXG4gIGdldCByZWYoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQoJyRyZWYnKTtcbiAgfVxuXG4gIGdldCBhbmNob3JIcmVmKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYW5jaG9yQXR0cmlidXRlcyA/IHRoaXMuYW5jaG9yQXR0cmlidXRlcy5ocmVmIDogdGhpcy5yZWY7XG4gIH1cblxuICBnZXQgYW5jaG9yRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFuY2hvckF0dHJpYnV0ZXMgPyB0aGlzLmFuY2hvckF0dHJpYnV0ZXMuZGlzcGxheSA6IHRoaXMucmVmO1xuICB9XG5cbiAgZ2V0IGlzVGVtcGxhdGVFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlZkNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmVmQ29uZmlnLnRlbXBsYXRlTmFtZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHNob3VsZERpc3BsYXlUZW1wbGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1ByZXZpZXdCdXR0b25IaWRkZW4gfHwgIXRoaXMucmVmQ29uZmlnLmxhenk7XG4gIH1cblxuICBnZXQgc2hvdWxkRGlzcGxheUlucHV0RmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVmQ29uZmlnICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZWZDb25maWcuZGlzcGxheUlucHV0RmllbGQ7XG4gIH1cblxuICBwcml2YXRlIGZldGNoUmVmKCkge1xuICAgIHRoaXMucmVmRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5yZWYsIHRoaXMucmVxdWVzdE9wdGlvbnMpXG4gICAgICAucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMuanNvbigpKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnJlZkRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RPcHRpb25zV2l0aENvbmZpZygpOiBhbnkge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGlmICh0aGlzLnJlZkNvbmZpZy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLnJlZkNvbmZpZy5oZWFkZXJzXG4gICAgICAgIC5mb3JFYWNoKGhlYWRlciA9PiBoZWFkZXJzLmFwcGVuZChoZWFkZXIubmFtZSwgaGVhZGVyLnZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiB7IGhlYWRlcnMgfTtcbiAgfVxufVxuIiwiPGRpdiBbaWRdPVwicGF0aFN0cmluZ1wiPlxuICA8ZGl2ICpuZ0lmPVwic2hvdWxkRGlzcGxheUlucHV0RmllbGRcIj5cbiAgICA8cHJpbWl0aXZlLWZpZWxkIFt2YWx1ZV09XCJyZWZcIiBbc2NoZW1hXT1cInNjaGVtYVsncHJvcGVydGllcyddWyckcmVmJ11cIiBbcGF0aF09XCJyZWZQYXRoXCI+PC9wcmltaXRpdmUtZmllbGQ+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwicmVmXCI+XG4gICAgPGRpdiAqbmdJZj1cImlzVGVtcGxhdGVFbmFibGVkXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByZXZpZXctdGVtcGxhdGVcIiAqbmdJZj1cIiFzaG91bGREaXNwbGF5VGVtcGxhdGVcIiAoY2xpY2spPVwib25QcmV2aWV3Q2xpY2soJGV2ZW50KVwiPjxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgPGRpdiAqbmdJZj1cInNob3VsZERpc3BsYXlUZW1wbGF0ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCJyZWZEYXRhXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Jlc3BvbnNlOiByZWZEYXRhfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxpICpuZ0lmPVwiIXJlZkRhdGFcIiBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBhbGlnbi1jZW50ZXJcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiIWlzVGVtcGxhdGVFbmFibGVkXCI+XG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJyZWFrLXdvcmRcIiBbaHJlZl09XCJhbmNob3JIcmVmXCI+e3thbmNob3JEaXNwbGF5fX08L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=