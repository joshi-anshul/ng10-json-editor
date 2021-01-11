/*
 * This file is part of INSPIRE.
 * Copyright (C) 2016 CERN.
 *
 * INSPIRE is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * INSPIRE is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with INSPIRE; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-bootstrap/typeahead";
import * as i4 from "@angular/common";
function AutocompleteInputComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3) { return { item: a0, index: a1, match: a2, query: a3 }; };
function AutocompleteInputComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("mousedown", function AutocompleteInputComponent_ng_template_0_Template_div_mousedown_0_listener() { i0.ɵɵrestoreView(_r7); const match_r4 = ctx.match; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onMatchWrapperMouseDown(match_r4); });
    i0.ɵɵtemplate(1, AutocompleteInputComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const match_r4 = ctx.match;
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customItemTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, match_r4.item, ctx_r1.i, match_r4, ctx_r1.query));
} }
function AutocompleteInputComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const match_r8 = ctx.match;
    i0.ɵɵtextInterpolate1(" ", match_r8.value, "\n");
} }
export class AutocompleteInputComponent {
    constructor(remoteAutocompletionService, appGlobalsService) {
        this.remoteAutocompletionService = remoteAutocompletionService;
        this.appGlobalsService = appGlobalsService;
        this.onValueChange = new EventEmitter();
        this.onCompletionSelect = new EventEmitter();
        this.onKeypress = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngOnInit() {
        if (this.autocompletionConfig.url) {
            // remote
            this.typeaheadOptionField = this.getDotSeparatedOptionField() || 'text';
            this.dataSource = Observable.create((observer) => {
                if (this.value && this.value.length > 0) {
                    observer.next(this.value);
                }
            }).mergeMap((token) => this.remoteAutocompletionService.getAutocompletionResults(this.autocompletionConfig, token));
        }
        else {
            // local
            this.typeaheadOptionField = this.getDotSeparatedOptionField() || '';
            this.dataSource = this.autocompletionConfig.source;
        }
    }
    get customItemTemplate() {
        return this.appGlobalsService.templates[this.autocompletionConfig.itemTemplateName];
    }
    getDotSeparatedOptionField() {
        const { optionField } = this.autocompletionConfig;
        return optionField && optionField.replace(AutocompleteInputComponent.slashesRegExp, '.');
    }
    onModelChange(value) {
        this.value = value;
        this.onValueChange.emit(value);
    }
    onMatchSelect(match) {
        this.onCompletionSelect.emit(match.item);
    }
    onMatchWrapperMouseDown(match) {
        this.onModelChange(match.value);
        this.onMatchSelect(match);
    }
}
AutocompleteInputComponent.slashesRegExp = new RegExp('/', 'g');
AutocompleteInputComponent.ɵfac = function AutocompleteInputComponent_Factory(t) { return new (t || AutocompleteInputComponent)(i0.ɵɵdirectiveInject(i1.RemoteAutocompletionService), i0.ɵɵdirectiveInject(i1.AppGlobalsService)); };
AutocompleteInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteInputComponent, selectors: [["autocomplete-input"]], inputs: { autocompletionConfig: "autocompletionConfig", value: "value", pathString: "pathString", tabIndex: "tabIndex", placeholder: "placeholder" }, outputs: { onValueChange: "onValueChange", onCompletionSelect: "onCompletionSelect", onKeypress: "onKeypress", onBlur: "onBlur" }, decls: 6, vars: 9, consts: [["matchWrapper", ""], ["defaultItemTemplate", ""], [1, "autocomplete-container"], [3, "ngModel", "typeahead", "typeaheadOptionsLimit", "typeaheadOptionField", "typeaheadItemTemplate", "typeaheadWaitMs", "tabindex", "placeholder", "ngModelChange", "keypress", "blur", "typeaheadOnSelect"], [2, "width", "100%", "height", "100%", "padding", "3px 20px", 3, "mousedown"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function AutocompleteInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AutocompleteInputComponent_ng_template_0_Template, 2, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, AutocompleteInputComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "input", 3);
        i0.ɵɵlistener("ngModelChange", function AutocompleteInputComponent_Template_input_ngModelChange_5_listener($event) { return ctx.onModelChange($event); })("keypress", function AutocompleteInputComponent_Template_input_keypress_5_listener($event) { return ctx.onKeypress.emit($event); })("blur", function AutocompleteInputComponent_Template_input_blur_5_listener() { return ctx.onBlur.emit(); })("typeaheadOnSelect", function AutocompleteInputComponent_Template_input_typeaheadOnSelect_5_listener($event) { return ctx.onMatchSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(5);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
        i0.ɵɵproperty("ngModel", ctx.value)("typeahead", ctx.dataSource)("typeaheadOptionsLimit", ctx.autocompletionConfig.size)("typeaheadOptionField", ctx.typeaheadOptionField)("typeaheadItemTemplate", _r0)("typeaheadWaitMs", 200)("tabindex", ctx.tabIndex);
        i0.ɵɵattribute("data-path", ctx.pathString);
    } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TypeaheadDirective, i4.NgTemplateOutlet], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteInputComponent, [{
        type: Component,
        args: [{
                selector: 'autocomplete-input',
                styleUrls: [
                    './autocomplete-input.component.scss'
                ],
                templateUrl: './autocomplete-input.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.RemoteAutocompletionService }, { type: i1.AppGlobalsService }]; }, { autocompletionConfig: [{
            type: Input
        }], value: [{
            type: Input
        }], pathString: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], onValueChange: [{
            type: Output
        }], onCompletionSelect: [{
            type: Output
        }], onKeypress: [{
            type: Output
        }], onBlur: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvY29tcGxldGUtaW5wdXQvYXV0b2NvbXBsZXRlLWlucHV0LmNvbXBvbmVudC50cyIsImxpYi9hdXRvY29tcGxldGUtaW5wdXQvYXV0b2NvbXBsZXRlLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsdUJBQXVCLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7OztJQ3RCaEMsOEJBQ0U7SUFEeUQsNFBBQTRDO0lBQ3JHLHlHQUNtRjtJQUNyRixpQkFBTTs7Ozs7SUFGUyxlQUE4RDtJQUE5RCxtRUFBOEQsd0dBQUE7OztJQU03RSxZQUNGOzs7SUFERSxnREFDRjs7QUQyQkEsTUFBTSxPQUFPLDBCQUEwQjtJQWlCckMsWUFBbUIsMkJBQXdELEVBQ2xFLGlCQUFvQztRQUQxQixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ2xFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFUbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDaEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQy9DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBTUssQ0FBQztJQUVsRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFO1lBQ2pDLFNBQVM7WUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksTUFBTSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUNwRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUM1QixJQUFJLENBQUMsMkJBQTJCLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEc7YUFBTTtZQUNMLFFBQVE7WUFDUixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztTQUNwRDtJQUNILENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELDBCQUEwQjtRQUN4QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ2xELE9BQU8sV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHVCQUF1QixDQUFDLEtBQVU7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOztBQXpEZSx3Q0FBYSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvR0FEMUMsMEJBQTBCOytEQUExQiwwQkFBMEI7UUNwQ3ZDLDRIQUNFO1FBTUYsNEhBQ0U7UUFHRiw4QkFDRTtRQUFBLGdDQUtGO1FBTDJELDRIQUFpQix5QkFBcUIsSUFBQyxxR0FDbEYsMkJBQXVCLElBRDJELHVGQUNqRCxpQkFBYSxJQURvQyx1SEFHbEMseUJBQXFCLElBSGE7UUFBaEcsaUJBS0Y7UUFBQSxpQkFBTTs7O1FBRG9CLGVBQTZCO1FBQTdCLHdEQUE2QjtRQUpkLG1DQUFpQiw2QkFBQSx3REFBQSxrREFBQSw4QkFBQSx3QkFBQSwwQkFBQTtRQUFqRCwyQ0FBK0I7O2tERHdCM0IsMEJBQTBCO2NBUnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixTQUFTLEVBQUU7b0JBQ1QscUNBQXFDO2lCQUN0QztnQkFDRCxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs4R0FJVSxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFSSxhQUFhO2tCQUF0QixNQUFNO1lBQ0csa0JBQWtCO2tCQUEzQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBJTlNQSVJFLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogSU5TUElSRSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogSU5TUElSRSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggSU5TUElSRTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJlbW90ZUF1dG9jb21wbGV0aW9uU2VydmljZSwgQXBwR2xvYmFsc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRpb25Db25maWcgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1pbnB1dCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2F1dG9jb21wbGV0ZS1pbnB1dC5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5IHNsYXNoZXNSZWdFeHAgPSBuZXcgUmVnRXhwKCcvJywgJ2cnKTtcblxuICBASW5wdXQoKSBhdXRvY29tcGxldGlvbkNvbmZpZzogQXV0b2NvbXBsZXRpb25Db25maWc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhdGhTdHJpbmc6IHN0cmluZztcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBAT3V0cHV0KCkgb25WYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25Db21wbGV0aW9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvbktleXByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGRhdGFTb3VyY2U6IE9ic2VydmFibGU8QXJyYXk8c3RyaW5nIHwgb2JqZWN0Pj4gfCBBcnJheTxzdHJpbmcgfCBvYmplY3Q+O1xuICB0eXBlYWhlYWRPcHRpb25GaWVsZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW1vdGVBdXRvY29tcGxldGlvblNlcnZpY2U6IFJlbW90ZUF1dG9jb21wbGV0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgYXBwR2xvYmFsc1NlcnZpY2U6IEFwcEdsb2JhbHNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGlvbkNvbmZpZy51cmwpIHtcbiAgICAgIC8vIHJlbW90ZVxuICAgICAgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZCA9IHRoaXMuZ2V0RG90U2VwYXJhdGVkT3B0aW9uRmllbGQoKSB8fCAndGV4dCc7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KS5tZXJnZU1hcCgodG9rZW46IHN0cmluZykgPT5cbiAgICAgICAgdGhpcy5yZW1vdGVBdXRvY29tcGxldGlvblNlcnZpY2UuZ2V0QXV0b2NvbXBsZXRpb25SZXN1bHRzKHRoaXMuYXV0b2NvbXBsZXRpb25Db25maWcsIHRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvY2FsXG4gICAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkID0gdGhpcy5nZXREb3RTZXBhcmF0ZWRPcHRpb25GaWVsZCgpIHx8ICcnO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5hdXRvY29tcGxldGlvbkNvbmZpZy5zb3VyY2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGN1c3RvbUl0ZW1UZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcHBHbG9iYWxzU2VydmljZS50ZW1wbGF0ZXNbdGhpcy5hdXRvY29tcGxldGlvbkNvbmZpZy5pdGVtVGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIGdldERvdFNlcGFyYXRlZE9wdGlvbkZpZWxkKCkge1xuICAgIGNvbnN0IHsgb3B0aW9uRmllbGQgfSA9IHRoaXMuYXV0b2NvbXBsZXRpb25Db25maWc7XG4gICAgcmV0dXJuIG9wdGlvbkZpZWxkICYmIG9wdGlvbkZpZWxkLnJlcGxhY2UoQXV0b2NvbXBsZXRlSW5wdXRDb21wb25lbnQuc2xhc2hlc1JlZ0V4cCwgJy4nKTtcbiAgfVxuXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbk1hdGNoU2VsZWN0KG1hdGNoOiBhbnkpIHtcbiAgICB0aGlzLm9uQ29tcGxldGlvblNlbGVjdC5lbWl0KG1hdGNoLml0ZW0pO1xuICB9XG5cbiAgb25NYXRjaFdyYXBwZXJNb3VzZURvd24obWF0Y2g6IGFueSkge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZShtYXRjaC52YWx1ZSk7XG4gICAgdGhpcy5vbk1hdGNoU2VsZWN0KG1hdGNoKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlIGxldC1tYXRjaD1cIm1hdGNoXCIgI21hdGNoV3JhcHBlcj5cbiAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHBhZGRpbmc6IDNweCAyMHB4O1wiIChtb3VzZWRvd24pPVwib25NYXRjaFdyYXBwZXJNb3VzZURvd24obWF0Y2gpXCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUl0ZW1UZW1wbGF0ZSB8fCBkZWZhdWx0SXRlbVRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7aXRlbTptYXRjaC5pdGVtLCBpbmRleDppLCBtYXRjaDptYXRjaCwgcXVlcnk6cXVlcnl9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRJdGVtVGVtcGxhdGUgbGV0LW1hdGNoPVwibWF0Y2hcIj5cbiAge3ttYXRjaC52YWx1ZX19XG48L25nLXRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRhaW5lclwiPlxuICA8aW5wdXQgYXR0ci5kYXRhLXBhdGg9XCJ7e3BhdGhTdHJpbmd9fVwiIFtuZ01vZGVsXT1cInZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCJcbiAgICAoa2V5cHJlc3MpPVwib25LZXlwcmVzcy5lbWl0KCRldmVudClcIiAoYmx1cik9XCJvbkJsdXIuZW1pdCgpXCIgW3R5cGVhaGVhZF09XCJkYXRhU291cmNlXCJcbiAgICBbdHlwZWFoZWFkT3B0aW9uc0xpbWl0XT1cImF1dG9jb21wbGV0aW9uQ29uZmlnLnNpemVcIiBbdHlwZWFoZWFkT3B0aW9uRmllbGRdPVwidHlwZWFoZWFkT3B0aW9uRmllbGRcIlxuICAgIFt0eXBlYWhlYWRJdGVtVGVtcGxhdGVdPVwibWF0Y2hXcmFwcGVyXCIgKHR5cGVhaGVhZE9uU2VsZWN0KT1cIm9uTWF0Y2hTZWxlY3QoJGV2ZW50KVwiIFt0eXBlYWhlYWRXYWl0TXNdPVwiMjAwXCJcbiAgICBbdGFiaW5kZXhdPVwidGFiSW5kZXhcIiBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwiPlxuPC9kaXY+Il19