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
import { Set } from 'immutable';
import { filter, takeUntil } from 'rxjs/operators';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
import * as i2 from "ngx-bootstrap/dropdown";
import * as i3 from "@angular/common";
import * as i4 from "../shared/pipes/sort-alphabetically.pipe";
import * as i5 from "../shared/pipes/keys-pipe";
import * as i6 from "../shared/pipes/last-path-element.pipe";
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 10);
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "lastPathElement");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const path_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, path_r2));
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 12);
    i0.ɵɵlistener("click", function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r13); const key_r10 = ctx.$implicit; const path_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onFieldSelect(path_r2, key_r10); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r10);
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_1_Template, 1, 0, "li", 8);
    i0.ɵɵtemplate(2, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_2_Template, 3, 3, "li", 9);
    i0.ɵɵtemplate(3, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template, 3, 1, "li", 6);
    i0.ɵɵpipe(4, "sortAlphabetically");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const addableKeys_r5 = ctx.$implicit;
    const isFirst_r3 = i0.ɵɵnextContext().first;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !isFirst_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !isFirst_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 3, addableKeys_r5));
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_Template, 5, 5, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const path_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.addableKeysForPath(path_r2));
} }
function AddNestedFieldDropdownComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_Template, 2, 1, "div", 6);
    i0.ɵɵpipe(2, "sortAlphabetically");
    i0.ɵɵpipe(3, "keys");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind1(3, 3, ctx_r0.nestedKeysMap)));
} }
export class AddNestedFieldDropdownComponent extends AbstractSubscriberComponent {
    constructor(keysStoreService, jsonSchemaService, pathUtilService, domUtilService) {
        super();
        this.keysStoreService = keysStoreService;
        this.jsonSchemaService = jsonSchemaService;
        this.pathUtilService = pathUtilService;
        this.domUtilService = domUtilService;
    }
    ngOnChanges(changes) {
        const pathStringChange = changes['pathString'];
        if (pathStringChange) {
            this.nestedKeysMap = {};
            this.nestedKeysMap[this.pathString] = this.keysStoreService.keysMap[this.pathString];
            const nestedPathPrefix = this.pathString + this.pathUtilService.separator;
            Object.keys(this.keysStoreService.keysMap)
                .filter(path => path.startsWith(nestedPathPrefix))
                .forEach(path => {
                this.nestedKeysMap[path] = this.keysStoreService.keysMap[path];
            });
            if (this.keysChangeSubscription) {
                this.keysChangeSubscription.unsubscribe();
            }
            this.keysChangeSubscription = this.keysStoreService.onKeysChange
                .pipe(filter(change => change.path.startsWith(this.pathString)))
                .pipe(takeUntil(this.isDestroyed))
                .subscribe(change => { this.nestedKeysMap[change.path] = change.keys; });
        }
    }
    /**
     * Return keys that could be added for the given path.
     *
     * @return schema key - hidden keys - existing keys
     */
    addableKeysForPath(path) {
        const keys = this.nestedKeysMap[path];
        const schema = this.jsonSchemaService.forPathString(path);
        // || schema.items.properties is to handle the keys when the path belongs to table-list.
        const schemaProps = schema.properties || schema.items.properties;
        const schemaKeys = Set(Object.keys(schemaProps)
            .filter(key => !schemaProps[key].hidden));
        const addableKeys = schemaKeys.subtract(keys);
        return addableKeys.size > 0 ? addableKeys : undefined;
    }
    onFieldSelect(path, key) {
        let schema = this.jsonSchemaService.forPathString(path);
        if (schema.componentType === 'table-list') {
            schema = schema.items;
        }
        const newKeyPath = this.keysStoreService.addKey(path, key, schema);
        if (this.keysStoreService.keysMap[newKeyPath]) {
            this.nestedKeysMap[newKeyPath] = this.keysStoreService.keysMap[newKeyPath];
        }
        this.domUtilService.focusAndSelectFirstEditableChildById(newKeyPath);
    }
}
AddNestedFieldDropdownComponent.ɵfac = function AddNestedFieldDropdownComponent_Factory(t) { return new (t || AddNestedFieldDropdownComponent)(i0.ɵɵdirectiveInject(i1.KeysStoreService), i0.ɵɵdirectiveInject(i1.JsonSchemaService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.DomUtilService)); };
AddNestedFieldDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddNestedFieldDropdownComponent, selectors: [["add-nested-field-dropdown"]], inputs: { schema: "schema", pathString: "pathString", isDisabled: "isDisabled" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["dropdown", "", "keyboardNav", "true", 1, "btn-group", "add-field-dropdown-container", 3, "isDisabled"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-add-field-dropdown"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "divider dropdown-divider", 4, "ngIf"], ["class", "dropdown-header title", 4, "ngIf"], [1, "divider", "dropdown-divider"], [1, "dropdown-header", "title"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]], template: function AddNestedFieldDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, AddNestedFieldDropdownComponent_ul_4_Template, 4, 5, "ul", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("isDisabled", ctx.isDisabled);
    } }, directives: [i2.BsDropdownDirective, i2.BsDropdownToggleDirective, i2.BsDropdownMenuDirective, i3.NgForOf, i3.NgIf], pipes: [i4.SortAlphabeticallyPipe, i5.KeysPipe, i6.LastPathElementPipe], styles: [".btn-add-field-dropdown[_ngcontent-%COMP%]{background:transparent;border:0;color:#2f4f4f;float:left;font-size:11px;font-weight:700;line-height:1;margin-bottom:2px;opacity:.4;padding:0 3px;text-shadow:0 1px 0 #fff}.btn-add-field-dropdown[_ngcontent-%COMP%]:hover{color:#00f;opacity:.6}.dropdown-filter-container[_ngcontent-%COMP%]{padding:0 3px}.dropdown-filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}", ".dropdown-header.title[_ngcontent-%COMP%]{font-size:13.5px;font-weight:700;padding-left:10px}.dropdown-divider[_ngcontent-%COMP%]{margin:4px 0}.dropdown-menu[_ngcontent-%COMP%]{left:auto;right:0}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]{clear:both;color:#333;display:block;font-weight:400;line-height:1.42857;padding:3px 20px;white-space:nowrap}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5;color:#262626;text-decoration:none}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddNestedFieldDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'add-nested-field-dropdown',
                styleUrls: [
                    './add-field-dropdown.component.scss',
                    './add-nested-field-dropdown.component.scss'
                ],
                templateUrl: './add-nested-field-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.KeysStoreService }, { type: i1.JsonSchemaService }, { type: i1.PathUtilService }, { type: i1.DomUtilService }]; }, { schema: [{
            type: Input
        }], pathString: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW5lc3RlZC1maWVsZC1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvYWRkLWZpZWxkLWRyb3Bkb3duL2FkZC1uZXN0ZWQtZmllbGQtZHJvcGRvd24uY29tcG9uZW50LnRzIiwibGliL2FkZC1maWVsZC1kcm9wZG93bi9hZGQtbmVzdGVkLWZpZWxkLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0Qix1QkFBdUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWhDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztJQ3BCN0QseUJBQTJEOzs7SUFDM0QsOEJBQW1EO0lBQUEsWUFBMEI7O0lBQUEsaUJBQUs7OztJQUEvQixlQUEwQjtJQUExQixtREFBMEI7Ozs7SUFDN0UsMEJBQ0U7SUFBQSw2QkFBc0Y7SUFBbkMsbVRBQWtDO0lBQUMsWUFBTztJQUFBLGlCQUFJO0lBQ25HLGlCQUFLOzs7SUFEbUYsZUFBTztJQUFQLDZCQUFPOzs7SUFKakcsMkJBQ0U7SUFBQSwrRkFBc0Q7SUFDdEQsK0ZBQW1EO0lBQ25ELCtGQUNFOztJQUVKLGlCQUFNOzs7O0lBTEEsZUFBZ0I7SUFBaEIsa0NBQWdCO0lBQ2hCLGVBQWdCO0lBQWhCLGtDQUFnQjtJQUNoQixlQUFvRDtJQUFwRCw4REFBb0Q7OztJQUo1RCwyQkFDRTtJQUFB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S0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2V0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFic3RyYWN0U3Vic2NyaWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN1YnNjcmliZXInO1xuaW1wb3J0IHsgRG9tVXRpbFNlcnZpY2UsIFBhdGhVdGlsU2VydmljZSwgS2V5c1N0b3JlU2VydmljZSwgSnNvblNjaGVtYVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRkLW5lc3RlZC1maWVsZC1kcm9wZG93bicsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2FkZC1maWVsZC1kcm9wZG93bi5jb21wb25lbnQuc2NzcycsXG4gICAgJy4vYWRkLW5lc3RlZC1maWVsZC1kcm9wZG93bi5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1uZXN0ZWQtZmllbGQtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBZGROZXN0ZWRGaWVsZERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdWJzY3JpYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTlNjaGVtYTtcbiAgQElucHV0KCkgcGF0aFN0cmluZzogc3RyaW5nO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIG5lc3RlZEtleXNNYXA6IHsgW3BhdGg6IHN0cmluZ106IFNldDxzdHJpbmc+IH07XG4gIGtleXNDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMga2V5c1N0b3JlU2VydmljZTogS2V5c1N0b3JlU2VydmljZSxcbiAgICBwdWJsaWMganNvblNjaGVtYVNlcnZpY2U6IEpzb25TY2hlbWFTZXJ2aWNlLFxuICAgIHB1YmxpYyBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSxcbiAgICBwdWJsaWMgZG9tVXRpbFNlcnZpY2U6IERvbVV0aWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwYXRoU3RyaW5nQ2hhbmdlID0gY2hhbmdlc1sncGF0aFN0cmluZyddO1xuICAgIGlmIChwYXRoU3RyaW5nQ2hhbmdlKSB7XG4gICAgICB0aGlzLm5lc3RlZEtleXNNYXAgPSB7fTtcbiAgICAgIHRoaXMubmVzdGVkS2V5c01hcFt0aGlzLnBhdGhTdHJpbmddID0gdGhpcy5rZXlzU3RvcmVTZXJ2aWNlLmtleXNNYXBbdGhpcy5wYXRoU3RyaW5nXTtcbiAgICAgIGNvbnN0IG5lc3RlZFBhdGhQcmVmaXggPSB0aGlzLnBhdGhTdHJpbmcgKyB0aGlzLnBhdGhVdGlsU2VydmljZS5zZXBhcmF0b3I7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmtleXNTdG9yZVNlcnZpY2Uua2V5c01hcClcbiAgICAgICAgLmZpbHRlcihwYXRoID0+IHBhdGguc3RhcnRzV2l0aChuZXN0ZWRQYXRoUHJlZml4KSlcbiAgICAgICAgLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgICAgdGhpcy5uZXN0ZWRLZXlzTWFwW3BhdGhdID0gdGhpcy5rZXlzU3RvcmVTZXJ2aWNlLmtleXNNYXBbcGF0aF07XG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5rZXlzQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMua2V5c0NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5rZXlzQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5rZXlzU3RvcmVTZXJ2aWNlLm9uS2V5c0NoYW5nZVxuICAgICAgICAucGlwZShmaWx0ZXIoY2hhbmdlID0+IGNoYW5nZS5wYXRoLnN0YXJ0c1dpdGgodGhpcy5wYXRoU3RyaW5nKSkpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZShjaGFuZ2UgPT4geyB0aGlzLm5lc3RlZEtleXNNYXBbY2hhbmdlLnBhdGhdID0gY2hhbmdlLmtleXM7IH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4ga2V5cyB0aGF0IGNvdWxkIGJlIGFkZGVkIGZvciB0aGUgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHJldHVybiBzY2hlbWEga2V5IC0gaGlkZGVuIGtleXMgLSBleGlzdGluZyBrZXlzXG4gICAqL1xuICBhZGRhYmxlS2V5c0ZvclBhdGgocGF0aDogc3RyaW5nKTogU2V0PHN0cmluZz4ge1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLm5lc3RlZEtleXNNYXBbcGF0aF07XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5qc29uU2NoZW1hU2VydmljZS5mb3JQYXRoU3RyaW5nKHBhdGgpO1xuICAgIC8vIHx8IHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzIGlzIHRvIGhhbmRsZSB0aGUga2V5cyB3aGVuIHRoZSBwYXRoIGJlbG9uZ3MgdG8gdGFibGUtbGlzdC5cbiAgICBjb25zdCBzY2hlbWFQcm9wcyA9IHNjaGVtYS5wcm9wZXJ0aWVzIHx8IHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IHNjaGVtYUtleXMgPSBTZXQ8c3RyaW5nPihPYmplY3Qua2V5cyhzY2hlbWFQcm9wcylcbiAgICAgIC5maWx0ZXIoa2V5ID0+ICFzY2hlbWFQcm9wc1trZXldLmhpZGRlbikpO1xuICAgIGNvbnN0IGFkZGFibGVLZXlzID0gc2NoZW1hS2V5cy5zdWJ0cmFjdChrZXlzKTtcbiAgICByZXR1cm4gYWRkYWJsZUtleXMuc2l6ZSA+IDAgPyBhZGRhYmxlS2V5cyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uRmllbGRTZWxlY3QocGF0aDogc3RyaW5nLCBrZXk6IHN0cmluZykge1xuICAgIGxldCBzY2hlbWEgPSB0aGlzLmpzb25TY2hlbWFTZXJ2aWNlLmZvclBhdGhTdHJpbmcocGF0aCk7XG4gICAgaWYgKHNjaGVtYS5jb21wb25lbnRUeXBlID09PSAndGFibGUtbGlzdCcpIHtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYS5pdGVtcztcbiAgICB9XG4gICAgY29uc3QgbmV3S2V5UGF0aCA9IHRoaXMua2V5c1N0b3JlU2VydmljZS5hZGRLZXkocGF0aCwga2V5LCBzY2hlbWEpO1xuICAgIGlmICh0aGlzLmtleXNTdG9yZVNlcnZpY2Uua2V5c01hcFtuZXdLZXlQYXRoXSkge1xuICAgICAgdGhpcy5uZXN0ZWRLZXlzTWFwW25ld0tleVBhdGhdID0gdGhpcy5rZXlzU3RvcmVTZXJ2aWNlLmtleXNNYXBbbmV3S2V5UGF0aF07XG4gICAgfVxuICAgIHRoaXMuZG9tVXRpbFNlcnZpY2UuZm9jdXNBbmRTZWxlY3RGaXJzdEVkaXRhYmxlQ2hpbGRCeUlkKG5ld0tleVBhdGgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGFkZC1maWVsZC1kcm9wZG93bi1jb250YWluZXJcIiBkcm9wZG93biBrZXlib2FyZE5hdj1cInRydWVcIiBbaXNEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1hZGQtZmllbGQtZHJvcGRvd25cIiBkcm9wZG93blRvZ2dsZT5cbiAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cbiAgPC9idXR0b24+XG4gIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiAqZHJvcGRvd25NZW51PlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IHBhdGggb2YgbmVzdGVkS2V5c01hcCB8IGtleXMgfCBzb3J0QWxwaGFiZXRpY2FsbHk7IGZpcnN0IGFzIGlzRmlyc3RcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJhZGRhYmxlS2V5c0ZvclBhdGgocGF0aCk7IGxldCBhZGRhYmxlS2V5c1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhaXNGaXJzdFwiIGNsYXNzPVwiZGl2aWRlciBkcm9wZG93bi1kaXZpZGVyXCI+PC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWlzRmlyc3RcIiBjbGFzcz1cImRyb3Bkb3duLWhlYWRlciB0aXRsZVwiPnt7cGF0aCB8IGxhc3RQYXRoRWxlbWVudH19PC9saT5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBrZXkgb2YgYWRkYWJsZUtleXMgfCBzb3J0QWxwaGFiZXRpY2FsbHlcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9uRmllbGRTZWxlY3QocGF0aCwga2V5KVwiPnt7a2V5fX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC91bD5cbjwvZGl2PiJdfQ==