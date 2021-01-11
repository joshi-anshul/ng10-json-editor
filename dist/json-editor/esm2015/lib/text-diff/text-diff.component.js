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
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1) { return { added: a0, removed: a1 }; };
function TextDiffComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const diff_r1 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, diff_r1.added, diff_r1.removed));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(diff_r1.value);
} }
export class TextDiffComponent {
    constructor(textDiffService) {
        this.textDiffService = textDiffService;
    }
    get diffs() {
        return this.textDiffService
            .diffByWord(this.currentText, this.newText);
    }
}
TextDiffComponent.ɵfac = function TextDiffComponent_Factory(t) { return new (t || TextDiffComponent)(i0.ɵɵdirectiveInject(i1.TextDiffService)); };
TextDiffComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextDiffComponent, selectors: [["text-diff"]], inputs: { newText: "newText", currentText: "currentText" }, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function TextDiffComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TextDiffComponent_span_0_Template, 2, 5, "span", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.diffs);
    } }, directives: [i2.NgForOf, i2.NgClass], styles: [".added[_ngcontent-%COMP%]{color:green;font-weight:700}.removed[_ngcontent-%COMP%]{color:red;text-decoration:line-through}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextDiffComponent, [{
        type: Component,
        args: [{
                selector: 'text-diff',
                templateUrl: './text-diff.component.html',
                styleUrls: [
                    './text-diff.component.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.TextDiffService }]; }, { newText: [{
            type: Input
        }], currentText: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LWRpZmYvdGV4dC1kaWZmLmNvbXBvbmVudC50cyIsImxpYi90ZXh0LWRpZmYvdGV4dC1kaWZmLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDM0J2QiwrQkFBd0Y7SUFBQSxZQUFjO0lBQUEsaUJBQU87OztJQUE1RSxvRkFBc0Q7SUFBQyxlQUFjO0lBQWQsbUNBQWM7O0FEeUN0RyxNQUFNLE9BQU8saUJBQWlCO0lBSzVCLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFJLENBQUM7SUFFeEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsZUFBZTthQUN4QixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7a0ZBVlUsaUJBQWlCO3NEQUFqQixpQkFBaUI7UUN6QzlCLG9FQUF3Rjs7UUFBbEYsbUNBQTBCOztrRER5Q25CLGlCQUFpQjtjQVI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRTtvQkFDVCw0QkFBNEI7aUJBQzdCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2tFQUdVLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE3IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJRGlmZlJlc3VsdCB9IGZyb20gJ2RpZmYnO1xuXG5pbXBvcnQgeyBUZXh0RGlmZlNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWRpZmYnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1kaWZmLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vdGV4dC1kaWZmLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RGlmZkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbmV3VGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXJyZW50VGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0RGlmZlNlcnZpY2U6IFRleHREaWZmU2VydmljZSkgeyB9XG5cbiAgZ2V0IGRpZmZzKCk6IEFycmF5PElEaWZmUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMudGV4dERpZmZTZXJ2aWNlXG4gICAgICAuZGlmZkJ5V29yZCh0aGlzLmN1cnJlbnRUZXh0LCB0aGlzLm5ld1RleHQpO1xuICB9XG5cbn1cbiIsIjxzcGFuICpuZ0Zvcj1cImxldCBkaWZmIG9mIGRpZmZzXCIgW25nQ2xhc3NdPVwie2FkZGVkOiBkaWZmLmFkZGVkLCByZW1vdmVkOiBkaWZmLnJlbW92ZWR9XCI+e3tkaWZmLnZhbHVlfX08L3NwYW4+Il19