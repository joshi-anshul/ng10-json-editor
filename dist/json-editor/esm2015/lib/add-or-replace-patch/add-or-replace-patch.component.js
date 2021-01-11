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
import * as i3 from "../patch-actions/patch-actions.component";
import * as i4 from "../shared/pipes/type-of.pipe";
import * as i5 from "../shared/pipes/sort-keys-by-schema.pipe";
import * as i6 from "../shared/pipes/keys-pipe";
function AddOrReplacePatchComponent_ng_template_2_Template(rf, ctx) { }
function AddOrReplacePatchComponent_ng_template_4_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { object: a0, schema: a1 }; };
function AddOrReplacePatchComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    const value_r9 = ctx_r15.value;
    const schema_r10 = ctx_r15.schema;
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, value_r9, schema_r10));
} }
function AddOrReplacePatchComponent_ng_template_4_ng_container_3_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { array: a0, schema: a1 }; };
function AddOrReplacePatchComponent_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const value_r9 = ctx_r17.value;
    const schema_r10 = ctx_r17.schema;
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c1, value_r9, schema_r10));
} }
function AddOrReplacePatchComponent_ng_template_4_ng_container_4_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { primitive: a0 }; };
function AddOrReplacePatchComponent_ng_template_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r9 = i0.ɵɵnextContext().value;
    i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(11);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, value_r9));
} }
function AddOrReplacePatchComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 8);
    i0.ɵɵpipe(1, "typeOf");
    i0.ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 9);
    i0.ɵɵtemplate(3, AddOrReplacePatchComponent_ng_template_4_ng_container_3_Template, 2, 5, "ng-container", 9);
    i0.ɵɵtemplate(4, AddOrReplacePatchComponent_ng_template_4_ng_container_4_Template, 2, 4, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r9 = ctx.value;
    i0.ɵɵproperty("ngSwitch", i0.ɵɵpipeBind1(1, 3, value_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitchCase", "object");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "array");
} }
function AddOrReplacePatchComponent_ng_template_6_tr_1_ng_template_5_Template(rf, ctx) { }
const _c3 = function (a0, a1) { return { value: a0, schema: a1 }; };
function AddOrReplacePatchComponent_ng_template_6_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtemplate(5, AddOrReplacePatchComponent_ng_template_6_tr_1_ng_template_5_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r23 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext();
    const object_r20 = ctx_r25.object;
    const schema_r21 = ctx_r25.schema;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(key_r23);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c3, object_r20[key_r23], schema_r21.properties[key_r23]));
} }
function AddOrReplacePatchComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table");
    i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_6_tr_1_Template, 6, 6, "tr", 11);
    i0.ɵɵpipe(2, "sortKeysBySchema");
    i0.ɵɵpipe(3, "keys");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const object_r20 = ctx.object;
    const schema_r21 = ctx.schema;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind1(3, 4, object_r20), schema_r21));
} }
function AddOrReplacePatchComponent_ng_template_8_tr_1_ng_template_2_Template(rf, ctx) { }
function AddOrReplacePatchComponent_ng_template_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 13);
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_8_tr_1_ng_template_2_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const schema_r27 = i0.ɵɵnextContext().schema;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c3, item_r29, schema_r27.items));
} }
function AddOrReplacePatchComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table");
    i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_8_tr_1_Template, 3, 5, "tr", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const array_r26 = ctx.array;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", array_r26);
} }
function AddOrReplacePatchComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const primitive_r32 = ctx.primitive;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(primitive_r32);
} }
export class AddOrReplacePatchComponent {
    constructor(jsonSchemaService) {
        this.jsonSchemaService = jsonSchemaService;
    }
    ngOnChanges(changes) {
        const patchChanges = changes['patch'];
        if (patchChanges) {
            this.schema = this.jsonSchemaService.forPathString(this.patch.path);
        }
    }
    get leftBorderClass() {
        return this.patch.op === 'add' ? 'green-left-border' : 'orange-left-border';
    }
}
AddOrReplacePatchComponent.ɵfac = function AddOrReplacePatchComponent_Factory(t) { return new (t || AddOrReplacePatchComponent)(i0.ɵɵdirectiveInject(i1.JsonSchemaService)); };
AddOrReplacePatchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddOrReplacePatchComponent, selectors: [["add-or-replace-patch"]], inputs: { patch: "patch" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 8, consts: [["tabindex", "-1", 1, "patch-container", 3, "ngClass", "id"], [1, "grow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "align-self-end", 3, "patch"], ["anyTypeTemplate", ""], ["objectTemplate", ""], ["arrayTemplate", ""], ["primitiveTemplate", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngFor", "ngForOf"], ["class", "array-item", 4, "ngFor", "ngForOf"], [1, "array-item"]], template: function AddOrReplacePatchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "patch-actions", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, AddOrReplacePatchComponent_ng_template_4_Template, 5, 5, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, AddOrReplacePatchComponent_ng_template_6_Template, 4, 6, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, AddOrReplacePatchComponent_ng_template_8_Template, 2, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(10, AddOrReplacePatchComponent_ng_template_10_Template, 2, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngClass", ctx.leftBorderClass)("id", ctx.patch.path);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(5, _c3, ctx.patch.value, ctx.schema));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("patch", ctx.patch);
    } }, directives: [i2.NgClass, i2.NgTemplateOutlet, i3.PatchActionsComponent, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgForOf], pipes: [i4.TypeOfPipe, i5.SortKeysBySchemaPipe, i6.KeysPipe], styles: ["td[_ngcontent-%COMP%]{padding-right:10px!important;vertical-align:top}.align-self-end[_ngcontent-%COMP%]{align-self:flex-end}.patch-container[_ngcontent-%COMP%]{display:flex;padding-left:4px}.green-left-border[_ngcontent-%COMP%]{border-left:9px solid #2ecc71}.grow[_ngcontent-%COMP%]{flex-grow:1}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddOrReplacePatchComponent, [{
        type: Component,
        args: [{
                selector: 'add-or-replace-patch',
                styleUrls: [
                    './add-or-replace-patch.component.scss'
                ],
                templateUrl: './add-or-replace-patch.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.JsonSchemaService }]; }, { patch: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW9yLXJlcGxhY2UtcGF0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2FkZC1vci1yZXBsYWNlLXBhdGNoL2FkZC1vci1yZXBsYWNlLXBhdGNoLmNvbXBvbmVudC50cyIsImxpYi9hZGQtb3ItcmVwbGFjZS1wYXRjaC9hZGQtb3ItcmVwbGFjZS1wYXRjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztJQ2JoRyw2QkFDRTtJQUFBLHdIQUE2RztJQUMvRywwQkFBZTs7Ozs7OztJQURBLGVBQW1DO0lBQW5DLHNDQUFtQyw2RUFBQTs7Ozs7SUFFbEQsNkJBQ0U7SUFBQSx3SEFBMkc7SUFDN0csMEJBQWU7Ozs7Ozs7SUFEQSxlQUFrQztJQUFsQyxzQ0FBa0MsNkVBQUE7Ozs7O0lBRWpELDZCQUNFO0lBQUEsd0hBQW1HO0lBQ3JHLDBCQUFlOzs7OztJQURBLGVBQXNDO0lBQXRDLHNDQUFzQyxpRUFBQTs7O0lBUnZELGdDQUNFOztJQUFBLDJHQUNFO0lBRUYsMkdBQ0U7SUFFRiw0R0FDRTtJQUVKLDBCQUFlOzs7SUFWRCx5REFBMkI7SUFDekIsZUFBd0I7SUFBeEIsdUNBQXdCO0lBR3hCLGVBQXVCO0lBQXZCLHNDQUF1Qjs7Ozs7SUFXckMsMEJBQ0U7SUFBQSwwQkFDRTtJQUFBLDZCQUFPO0lBQUEsWUFBTztJQUFBLGlCQUFRO0lBQ3hCLGlCQUFLO0lBQ0wsMEJBQ0U7SUFBQSw4R0FBbUk7SUFDckksaUJBQUs7SUFDUCxpQkFBSzs7Ozs7Ozs7SUFMTSxlQUFPO0lBQVAsNkJBQU87SUFHRCxlQUFvQztJQUFwQyxzQ0FBb0MsNEdBQUE7OztJQU52RCw2QkFDRTtJQUFBLHdGQUNFOzs7SUFPSixpQkFBUTs7OztJQVJGLGVBQTJEO0lBQTNELDRGQUEyRDs7OztJQWEvRCw4QkFDRTtJQUFBLDBCQUNFO0lBQUEsOEdBQWtIO0lBQ3BILGlCQUFLO0lBQ1AsaUJBQUs7Ozs7OztJQUZZLGVBQW9DO0lBQXBDLHNDQUFvQyxtRkFBQTs7O0lBSHZELDZCQUNFO0lBQUEsd0ZBQ0U7SUFJSixpQkFBUTs7O0lBTEYsZUFBMEI7SUFBMUIsbUNBQTBCOzs7SUFTaEMsNEJBQU07SUFBQSxZQUFhO0lBQUEsaUJBQU87OztJQUFwQixlQUFhO0lBQWIsbUNBQWE7O0FEVnJCLE1BQU0sT0FBTywwQkFBMEI7SUFNckMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBSSxDQUFDO0lBRTdELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDOUUsQ0FBQzs7b0dBakJVLDBCQUEwQjsrREFBMUIsMEJBQTBCO1FDbkN2Qyw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsMkZBQW1IO1FBQ3JILGlCQUFNO1FBQ04sbUNBQXNFO1FBQ3hFLGlCQUFNO1FBRU4sNEhBQ0U7UUFhRiw0SEFDRTtRQVlGLDRIQUNFO1FBU0YsOEhBQ0U7OztRQTdDMkIsNkNBQTJCLHNCQUFBO1FBRXZDLGVBQW9DO1FBQXBDLHNDQUFvQyxvRkFBQTtRQUViLGVBQWU7UUFBZixpQ0FBZTs7a0REK0IxQywwQkFBMEI7Y0FSdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFNBQVMsRUFBRTtvQkFDVCx1Q0FBdUM7aUJBQ3hDO2dCQUNELFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO29FQUdVLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEpzb25QYXRjaCwgSlNPTlNjaGVtYSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEpzb25TY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRkLW9yLXJlcGxhY2UtcGF0Y2gnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9hZGQtb3ItcmVwbGFjZS1wYXRjaC5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1vci1yZXBsYWNlLXBhdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQWRkT3JSZXBsYWNlUGF0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHBhdGNoOiBKc29uUGF0Y2g7XG5cbiAgc2NoZW1hOiBKU09OU2NoZW1hO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUganNvblNjaGVtYVNlcnZpY2U6IEpzb25TY2hlbWFTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcGF0Y2hDaGFuZ2VzID0gY2hhbmdlc1sncGF0Y2gnXTtcbiAgICBpZiAocGF0Y2hDaGFuZ2VzKSB7XG4gICAgICB0aGlzLnNjaGVtYSA9IHRoaXMuanNvblNjaGVtYVNlcnZpY2UuZm9yUGF0aFN0cmluZyh0aGlzLnBhdGNoLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsZWZ0Qm9yZGVyQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYXRjaC5vcCA9PT0gJ2FkZCcgPyAnZ3JlZW4tbGVmdC1ib3JkZXInIDogJ29yYW5nZS1sZWZ0LWJvcmRlcic7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwYXRjaC1jb250YWluZXJcIiBbbmdDbGFzc109XCJsZWZ0Qm9yZGVyQ2xhc3NcIiBbaWRdPVwicGF0Y2gucGF0aFwiIHRhYmluZGV4PVwiLTFcIj5cbiAgPGRpdiBjbGFzcz1cImdyb3dcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYW55VHlwZVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInt2YWx1ZTogcGF0Y2gudmFsdWUsIHNjaGVtYTogc2NoZW1hfVwiPjwvbmctdGVtcGxhdGU+XG4gIDwvZGl2PlxuICA8cGF0Y2gtYWN0aW9ucyBjbGFzcz1cImFsaWduLXNlbGYtZW5kXCIgW3BhdGNoXT1cInBhdGNoXCI+PC9wYXRjaC1hY3Rpb25zPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjYW55VHlwZVRlbXBsYXRlIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXNjaGVtYT1cInNjaGVtYVwiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ2YWx1ZSB8IHR5cGVPZlwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidvYmplY3QnXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwib2JqZWN0VGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie29iamVjdDogdmFsdWUsIHNjaGVtYTogc2NoZW1hfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFycmF5VGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2FycmF5OiB2YWx1ZSwgc2NoZW1hOiBzY2hlbWF9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJpbWl0aXZlVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3ByaW1pdGl2ZTogdmFsdWV9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI29iamVjdFRlbXBsYXRlIGxldC1vYmplY3Q9XCJvYmplY3RcIiBsZXQtc2NoZW1hPVwic2NoZW1hXCI+XG4gIDx0YWJsZT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGtleSBvZiBvYmplY3QgfCBrZXlzIHwgc29ydEtleXNCeVNjaGVtYTpzY2hlbWFcIj5cbiAgICAgIDx0ZD5cbiAgICAgICAgPGxhYmVsPnt7a2V5fX08L2xhYmVsPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFueVR5cGVUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7dmFsdWU6IG9iamVjdFtrZXldLCBzY2hlbWE6IHNjaGVtYS5wcm9wZXJ0aWVzW2tleV19XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90YWJsZT5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjYXJyYXlUZW1wbGF0ZSBsZXQtYXJyYXk9XCJhcnJheVwiIGxldC1zY2hlbWE9XCJzY2hlbWFcIj5cbiAgPHRhYmxlPlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBhcnJheVwiIGNsYXNzPVwiYXJyYXktaXRlbVwiPlxuICAgICAgPHRkPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYW55VHlwZVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInt2YWx1ZTogaXRlbSwgc2NoZW1hOiBzY2hlbWEuaXRlbXN9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90YWJsZT5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjcHJpbWl0aXZlVGVtcGxhdGUgbGV0LXByaW1pdGl2ZT1cInByaW1pdGl2ZVwiPlxuICA8c3Bhbj57e3ByaW1pdGl2ZX19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT4iXX0=