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
import './rxjs-operators';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AddFieldDropdownComponent, AddNestedFieldDropdownComponent } from './add-field-dropdown';
import { AddNewElementButtonComponent } from './add-new-element-button';
import { AnyTypeFieldComponent } from './any-type-field';
import { AutocompleteInputComponent } from './autocomplete-input';
import { ComplexListFieldComponent } from './complex-list-field';
import { EditorPreviewerComponent } from './editor-previewer';
import { SubRecordComponent } from './sub-record';
import { BottomConsoleBadgesComponent } from './bottom-console-badges';
import { FindReplaceComponent } from './find-replace';
import { HtmlViewComponent } from './html-view';
import { JsonEditorComponent } from './json-editor.component';
import { ModalViewComponent } from './modal-view';
import { ObjectFieldComponent } from './object-field';
import { PrimitiveListFieldComponent } from './primitive-list-field';
import { PrimitiveFieldComponent } from './primitive-field';
import { RefFieldComponent } from './ref-field';
import { TableListFieldComponent } from './table-list-field';
import { TableItemFieldComponent } from './table-item-field';
import { TitleDropdownComponent } from './title-dropdown';
import { StringInputComponent } from './string-input';
import { TreeMenuComponent, TreeMenuItemComponent } from './tree-menu';
import { SearchableDropdownComponent } from './searchable-dropdown';
import { ListActionGroupComponent } from './list-action-group';
import { SHARED_PIPES, SHARED_SERVICES, SHARED_DIRECTIVES } from './shared';
import { BottomConsoleComponent, PatchesConsoleTabComponent, ProblemsConsoleTabComponent } from './bottom-console';
import { TextDiffComponent } from './text-diff';
import { PatchActionsComponent } from './patch-actions';
import { AddOrReplacePatchComponent } from './add-or-replace-patch';
import * as i0 from "@angular/core";
import * as i1 from "./shared/pipes/add-always-show-fields.pipe";
import * as i2 from "./shared/pipes/different-keys.pipe";
import * as i3 from "./shared/pipes/filter-by-expression.pipe";
import * as i4 from "./shared/pipes/filter-hidden-fields.pipe";
import * as i5 from "./shared/pipes/sanitize-url.pipe";
import * as i6 from "./shared/pipes/self-or-empty.pipe";
import * as i7 from "./shared/pipes/underscore-to-space.pipe";
import * as i8 from "./shared/pipes/set-first-element-path.pipe";
import * as i9 from "./shared/pipes/sort-alphabetically.pipe";
import * as i10 from "./shared/pipes/keys-pipe";
import * as i11 from "./shared/pipes/last-path-element.pipe";
import * as i12 from "./shared/pipes/type-of.pipe";
import * as i13 from "./shared/pipes/sort-keys-by-schema.pipe";
import * as i14 from "./shared/directives/shortcuts.directive";
import * as i15 from "./shared/directives/content-model.directive";
import * as i16 from "ngx-bootstrap/tooltip";
import * as i17 from "ngx-bootstrap/collapse";
import * as i18 from "ngx-bootstrap/popover";
import * as i19 from "ngx-bootstrap/dropdown";
import * as i20 from "ngx-bootstrap/pagination";
import * as i21 from "ngx-bootstrap/modal";
import * as i22 from "ngx-bootstrap/tabs";
import * as i23 from "ngx-bootstrap/typeahead";
import * as i24 from "@angular/common";
import * as i25 from "@angular/forms";
export class JsonEditorModule {
}
JsonEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: JsonEditorModule });
JsonEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function JsonEditorModule_Factory(t) { return new (t || JsonEditorModule)(); }, providers: SHARED_SERVICES, imports: [[
            TooltipModule.forRoot(),
            CollapseModule.forRoot(),
            PopoverModule.forRoot(),
            BsDropdownModule.forRoot(),
            PaginationModule.forRoot(),
            ModalModule.forRoot(),
            TabsModule.forRoot(),
            TypeaheadModule.forRoot(),
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(JsonEditorModule, { declarations: [i1.AddAlwaysShowFieldsPipe, i2.DifferentKeysPipe, i3.FilterByExpressionPipe, i4.FilterHiddenFieldsPipe, i5.SanitizeUrlPipe, i6.SelfOrEmptyPipe, i7.UnderscoreToSpacePipe, i8.SetFirstElementPathPipe, i9.SortAlphabeticallyPipe, i10.KeysPipe, i11.LastPathElementPipe, i12.TypeOfPipe, i13.SortKeysBySchemaPipe, i14.ShortcutsDirective, i15.ContentModelDirective, AddFieldDropdownComponent,
        AddNestedFieldDropdownComponent,
        AddNewElementButtonComponent,
        AnyTypeFieldComponent,
        AutocompleteInputComponent,
        ComplexListFieldComponent,
        ObjectFieldComponent,
        EditorPreviewerComponent,
        FindReplaceComponent,
        ModalViewComponent,
        PrimitiveListFieldComponent,
        PrimitiveFieldComponent,
        RefFieldComponent,
        SearchableDropdownComponent,
        ListActionGroupComponent,
        TableListFieldComponent,
        TableItemFieldComponent,
        TitleDropdownComponent,
        TreeMenuItemComponent,
        TreeMenuComponent,
        JsonEditorComponent,
        SubRecordComponent,
        HtmlViewComponent,
        BottomConsoleBadgesComponent,
        BottomConsoleComponent,
        StringInputComponent,
        TextDiffComponent,
        PatchActionsComponent,
        PatchesConsoleTabComponent,
        ProblemsConsoleTabComponent,
        AddOrReplacePatchComponent], imports: [i16.TooltipModule, i17.CollapseModule, i18.PopoverModule, i19.BsDropdownModule, i20.PaginationModule, i21.ModalModule, i22.TabsModule, i23.TypeaheadModule, CommonModule,
        FormsModule,
        HttpClientModule], exports: [JsonEditorComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ...SHARED_PIPES,
                    ...SHARED_DIRECTIVES,
                    AddFieldDropdownComponent,
                    AddNestedFieldDropdownComponent,
                    AddNewElementButtonComponent,
                    AnyTypeFieldComponent,
                    AutocompleteInputComponent,
                    ComplexListFieldComponent,
                    ObjectFieldComponent,
                    EditorPreviewerComponent,
                    FindReplaceComponent,
                    ModalViewComponent,
                    PrimitiveListFieldComponent,
                    PrimitiveFieldComponent,
                    RefFieldComponent,
                    SearchableDropdownComponent,
                    ListActionGroupComponent,
                    TableListFieldComponent,
                    TableItemFieldComponent,
                    TitleDropdownComponent,
                    TreeMenuItemComponent,
                    TreeMenuComponent,
                    JsonEditorComponent,
                    SubRecordComponent,
                    HtmlViewComponent,
                    BottomConsoleBadgesComponent,
                    BottomConsoleComponent,
                    StringInputComponent,
                    TextDiffComponent,
                    PatchActionsComponent,
                    PatchesConsoleTabComponent,
                    ProblemsConsoleTabComponent,
                    AddOrReplacePatchComponent
                ],
                exports: [JsonEditorComponent],
                imports: [
                    TooltipModule.forRoot(),
                    CollapseModule.forRoot(),
                    PopoverModule.forRoot(),
                    BsDropdownModule.forRoot(),
                    PaginationModule.forRoot(),
                    ModalModule.forRoot(),
                    TabsModule.forRoot(),
                    TypeaheadModule.forRoot(),
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                providers: SHARED_SERVICES
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(ObjectFieldComponent, [i16.TooltipDirective, i17.CollapseDirective, i18.PopoverDirective, i19.BsDropdownMenuDirective, i19.BsDropdownToggleDirective, i19.BsDropdownDirective, i20.PagerComponent, i20.PaginationComponent, i21.ModalBackdropComponent, i21.ModalDirective, i22.TabDirective, i22.TabsetComponent, i22.TabHeadingDirective, i22.NgTranscludeDirective, i23.TypeaheadContainerComponent, i23.TypeaheadDirective, i24.NgClass, i24.NgComponentOutlet, i24.NgForOf, i24.NgIf, i24.NgTemplateOutlet, i24.NgStyle, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgPlural, i24.NgPluralCase, i25.ɵangular_packages_forms_forms_y, i25.NgSelectOption, i25.ɵangular_packages_forms_forms_x, i25.DefaultValueAccessor, i25.NumberValueAccessor, i25.RangeValueAccessor, i25.CheckboxControlValueAccessor, i25.SelectControlValueAccessor, i25.SelectMultipleControlValueAccessor, i25.RadioControlValueAccessor, i25.NgControlStatus, i25.NgControlStatusGroup, i25.RequiredValidator, i25.MinLengthValidator, i25.MaxLengthValidator, i25.PatternValidator, i25.CheckboxRequiredValidator, i25.EmailValidator, i25.NgModel, i25.NgModelGroup, i25.NgForm, i14.ShortcutsDirective, i15.ContentModelDirective, AddFieldDropdownComponent,
    AddNestedFieldDropdownComponent,
    AddNewElementButtonComponent,
    AnyTypeFieldComponent,
    AutocompleteInputComponent,
    ComplexListFieldComponent,
    ObjectFieldComponent,
    EditorPreviewerComponent,
    FindReplaceComponent,
    ModalViewComponent,
    PrimitiveListFieldComponent,
    PrimitiveFieldComponent,
    RefFieldComponent,
    SearchableDropdownComponent,
    ListActionGroupComponent,
    TableListFieldComponent,
    TableItemFieldComponent,
    TitleDropdownComponent,
    TreeMenuItemComponent,
    TreeMenuComponent,
    JsonEditorComponent,
    SubRecordComponent,
    HtmlViewComponent,
    BottomConsoleBadgesComponent,
    BottomConsoleComponent,
    StringInputComponent,
    TextDiffComponent,
    PatchActionsComponent,
    PatchesConsoleTabComponent,
    ProblemsConsoleTabComponent,
    AddOrReplacePatchComponent], [i24.AsyncPipe, i24.UpperCasePipe, i24.LowerCasePipe, i24.JsonPipe, i24.SlicePipe, i24.DecimalPipe, i24.PercentPipe, i24.TitleCasePipe, i24.CurrencyPipe, i24.DatePipe, i24.I18nPluralPipe, i24.I18nSelectPipe, i24.KeyValuePipe, i1.AddAlwaysShowFieldsPipe, i2.DifferentKeysPipe, i3.FilterByExpressionPipe, i4.FilterHiddenFieldsPipe, i5.SanitizeUrlPipe, i6.SelfOrEmptyPipe, i7.UnderscoreToSpacePipe, i8.SetFirstElementPathPipe, i9.SortAlphabeticallyPipe, i10.KeysPipe, i11.LastPathElementPipe, i12.TypeOfPipe, i13.SortKeysBySchemaPipe]);
i0.ɵɵsetComponentScope(PrimitiveListFieldComponent, [i16.TooltipDirective, i17.CollapseDirective, i18.PopoverDirective, i19.BsDropdownMenuDirective, i19.BsDropdownToggleDirective, i19.BsDropdownDirective, i20.PagerComponent, i20.PaginationComponent, i21.ModalBackdropComponent, i21.ModalDirective, i22.TabDirective, i22.TabsetComponent, i22.TabHeadingDirective, i22.NgTranscludeDirective, i23.TypeaheadContainerComponent, i23.TypeaheadDirective, i24.NgClass, i24.NgComponentOutlet, i24.NgForOf, i24.NgIf, i24.NgTemplateOutlet, i24.NgStyle, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgPlural, i24.NgPluralCase, i25.ɵangular_packages_forms_forms_y, i25.NgSelectOption, i25.ɵangular_packages_forms_forms_x, i25.DefaultValueAccessor, i25.NumberValueAccessor, i25.RangeValueAccessor, i25.CheckboxControlValueAccessor, i25.SelectControlValueAccessor, i25.SelectMultipleControlValueAccessor, i25.RadioControlValueAccessor, i25.NgControlStatus, i25.NgControlStatusGroup, i25.RequiredValidator, i25.MinLengthValidator, i25.MaxLengthValidator, i25.PatternValidator, i25.CheckboxRequiredValidator, i25.EmailValidator, i25.NgModel, i25.NgModelGroup, i25.NgForm, i14.ShortcutsDirective, i15.ContentModelDirective, AddFieldDropdownComponent,
    AddNestedFieldDropdownComponent,
    AddNewElementButtonComponent,
    AnyTypeFieldComponent,
    AutocompleteInputComponent,
    ComplexListFieldComponent,
    ObjectFieldComponent,
    EditorPreviewerComponent,
    FindReplaceComponent,
    ModalViewComponent,
    PrimitiveListFieldComponent,
    PrimitiveFieldComponent,
    RefFieldComponent,
    SearchableDropdownComponent,
    ListActionGroupComponent,
    TableListFieldComponent,
    TableItemFieldComponent,
    TitleDropdownComponent,
    TreeMenuItemComponent,
    TreeMenuComponent,
    JsonEditorComponent,
    SubRecordComponent,
    HtmlViewComponent,
    BottomConsoleBadgesComponent,
    BottomConsoleComponent,
    StringInputComponent,
    TextDiffComponent,
    PatchActionsComponent,
    PatchesConsoleTabComponent,
    ProblemsConsoleTabComponent,
    AddOrReplacePatchComponent], [i24.AsyncPipe, i24.UpperCasePipe, i24.LowerCasePipe, i24.JsonPipe, i24.SlicePipe, i24.DecimalPipe, i24.PercentPipe, i24.TitleCasePipe, i24.CurrencyPipe, i24.DatePipe, i24.I18nPluralPipe, i24.I18nSelectPipe, i24.KeyValuePipe, i1.AddAlwaysShowFieldsPipe, i2.DifferentKeysPipe, i3.FilterByExpressionPipe, i4.FilterHiddenFieldsPipe, i5.SanitizeUrlPipe, i6.SelfOrEmptyPipe, i7.UnderscoreToSpacePipe, i8.SetFirstElementPathPipe, i9.SortAlphabeticallyPipe, i10.KeysPipe, i11.LastPathElementPipe, i12.TypeOfPipe, i13.SortKeysBySchemaPipe]);
i0.ɵɵsetComponentScope(TableItemFieldComponent, [i16.TooltipDirective, i17.CollapseDirective, i18.PopoverDirective, i19.BsDropdownMenuDirective, i19.BsDropdownToggleDirective, i19.BsDropdownDirective, i20.PagerComponent, i20.PaginationComponent, i21.ModalBackdropComponent, i21.ModalDirective, i22.TabDirective, i22.TabsetComponent, i22.TabHeadingDirective, i22.NgTranscludeDirective, i23.TypeaheadContainerComponent, i23.TypeaheadDirective, i24.NgClass, i24.NgComponentOutlet, i24.NgForOf, i24.NgIf, i24.NgTemplateOutlet, i24.NgStyle, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgPlural, i24.NgPluralCase, i25.ɵangular_packages_forms_forms_y, i25.NgSelectOption, i25.ɵangular_packages_forms_forms_x, i25.DefaultValueAccessor, i25.NumberValueAccessor, i25.RangeValueAccessor, i25.CheckboxControlValueAccessor, i25.SelectControlValueAccessor, i25.SelectMultipleControlValueAccessor, i25.RadioControlValueAccessor, i25.NgControlStatus, i25.NgControlStatusGroup, i25.RequiredValidator, i25.MinLengthValidator, i25.MaxLengthValidator, i25.PatternValidator, i25.CheckboxRequiredValidator, i25.EmailValidator, i25.NgModel, i25.NgModelGroup, i25.NgForm, i14.ShortcutsDirective, i15.ContentModelDirective, AddFieldDropdownComponent,
    AddNestedFieldDropdownComponent,
    AddNewElementButtonComponent,
    AnyTypeFieldComponent,
    AutocompleteInputComponent,
    ComplexListFieldComponent,
    ObjectFieldComponent,
    EditorPreviewerComponent,
    FindReplaceComponent,
    ModalViewComponent,
    PrimitiveListFieldComponent,
    PrimitiveFieldComponent,
    RefFieldComponent,
    SearchableDropdownComponent,
    ListActionGroupComponent,
    TableListFieldComponent,
    TableItemFieldComponent,
    TitleDropdownComponent,
    TreeMenuItemComponent,
    TreeMenuComponent,
    JsonEditorComponent,
    SubRecordComponent,
    HtmlViewComponent,
    BottomConsoleBadgesComponent,
    BottomConsoleComponent,
    StringInputComponent,
    TextDiffComponent,
    PatchActionsComponent,
    PatchesConsoleTabComponent,
    ProblemsConsoleTabComponent,
    AddOrReplacePatchComponent], [i24.AsyncPipe, i24.UpperCasePipe, i24.LowerCasePipe, i24.JsonPipe, i24.SlicePipe, i24.DecimalPipe, i24.PercentPipe, i24.TitleCasePipe, i24.CurrencyPipe, i24.DatePipe, i24.I18nPluralPipe, i24.I18nSelectPipe, i24.KeyValuePipe, i1.AddAlwaysShowFieldsPipe, i2.DifferentKeysPipe, i3.FilterByExpressionPipe, i4.FilterHiddenFieldsPipe, i5.SanitizeUrlPipe, i6.SelfOrEmptyPipe, i7.UnderscoreToSpacePipe, i8.SetFirstElementPathPipe, i9.SortAlphabeticallyPipe, i10.KeysPipe, i11.LastPathElementPipe, i12.TypeOfPipe, i13.SortKeysBySchemaPipe]);
export { AddFieldDropdownComponent, AddNestedFieldDropdownComponent, AddNewElementButtonComponent, AnyTypeFieldComponent, AutocompleteInputComponent, ComplexListFieldComponent, ObjectFieldComponent, EditorPreviewerComponent, BottomConsoleComponent, FindReplaceComponent, ModalViewComponent, PrimitiveListFieldComponent, PrimitiveFieldComponent, RefFieldComponent, SearchableDropdownComponent, ListActionGroupComponent, TableListFieldComponent, TableItemFieldComponent, TitleDropdownComponent, TreeMenuItemComponent, TreeMenuComponent, JsonEditorComponent, SubRecordComponent, HtmlViewComponent, BottomConsoleBadgesComponent, StringInputComponent, TextDiffComponent, PatchActionsComponent, PatchesConsoleTabComponent, ProblemsConsoleTabComponent, AddOrReplacePatchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2pzb24tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLGtCQUFrQixDQUFDO0FBRTFCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLCtCQUErQixFQUNoQyxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUN0QixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEcEUsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLG1CQUZoQixlQUFlLFlBYmpCO1lBQ1AsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsZUFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QixZQUFZO1lBQ1osV0FBVztZQUNYLGdCQUFnQjtTQUNqQjt3RkFHVSxnQkFBZ0Isd1hBaER6Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQiwwQkFBMEIseUtBWTFCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCLGFBWlIsbUJBQW1CO2tEQWdCbEIsZ0JBQWdCO2NBcEQ1QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLEdBQUcsWUFBWTtvQkFDZixHQUFHLGlCQUFpQjtvQkFDcEIseUJBQXlCO29CQUN6QiwrQkFBK0I7b0JBQy9CLDRCQUE0QjtvQkFDNUIscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQiwyQkFBMkI7b0JBQzNCLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQiwyQkFBMkI7b0JBQzNCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsMEJBQTBCO2lCQUMzQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsT0FBTyxFQUFFO29CQUNQLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUUsZUFBZTthQUMzQjs7dUJBekNHLG9CQUFvQiw4b0NBTnBCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDBCQUEwQjt1QkFwQjFCLDJCQUEyQiw4b0NBVjNCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDBCQUEwQjt1QkFkMUIsdUJBQXVCLDhvQ0FoQnZCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQW9COUIsT0FBTyxFQUNMLHlCQUF5QixFQUN6QiwrQkFBK0IsRUFDL0IsNEJBQTRCLEVBQzVCLHFCQUFxQixFQUNyQiwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLG9CQUFvQixFQUNwQix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsMkJBQTJCLEVBQzNCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLDRCQUE0QixFQUM1QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLDBCQUEwQixFQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCAnLi9yeGpzLW9wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQnO1xuXG5pbXBvcnQge1xuICBBZGRGaWVsZERyb3Bkb3duQ29tcG9uZW50LFxuICBBZGROZXN0ZWRGaWVsZERyb3Bkb3duQ29tcG9uZW50XG59IGZyb20gJy4vYWRkLWZpZWxkLWRyb3Bkb3duJztcbmltcG9ydCB7IEFkZE5ld0VsZW1lbnRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2FkZC1uZXctZWxlbWVudC1idXR0b24nO1xuaW1wb3J0IHsgQW55VHlwZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9hbnktdHlwZS1maWVsZCc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWlucHV0JztcbmltcG9ydCB7IENvbXBsZXhMaXN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBsZXgtbGlzdC1maWVsZCc7XG5pbXBvcnQgeyBFZGl0b3JQcmV2aWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci1wcmV2aWV3ZXInO1xuaW1wb3J0IHsgU3ViUmVjb3JkQ29tcG9uZW50IH0gZnJvbSAnLi9zdWItcmVjb3JkJztcbmltcG9ydCB7IEJvdHRvbUNvbnNvbGVCYWRnZXNDb21wb25lbnQgfSBmcm9tICcuL2JvdHRvbS1jb25zb2xlLWJhZGdlcyc7XG5pbXBvcnQgeyBGaW5kUmVwbGFjZUNvbXBvbmVudCB9IGZyb20gJy4vZmluZC1yZXBsYWNlJztcbmltcG9ydCB7IEh0bWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9odG1sLXZpZXcnO1xuaW1wb3J0IHsgSnNvbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtdmlldyc7XG5pbXBvcnQgeyBPYmplY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vb2JqZWN0LWZpZWxkJztcbmltcG9ydCB7IFByaW1pdGl2ZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vcHJpbWl0aXZlLWxpc3QtZmllbGQnO1xuaW1wb3J0IHsgUHJpbWl0aXZlRmllbGRDb21wb25lbnQgfSBmcm9tICcuL3ByaW1pdGl2ZS1maWVsZCc7XG5pbXBvcnQgeyBSZWZGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vcmVmLWZpZWxkJztcbmltcG9ydCB7IFRhYmxlTGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1saXN0LWZpZWxkJztcbmltcG9ydCB7IFRhYmxlSXRlbUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1pdGVtLWZpZWxkJztcbmltcG9ydCB7IFRpdGxlRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3RpdGxlLWRyb3Bkb3duJztcbmltcG9ydCB7IFN0cmluZ0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zdHJpbmctaW5wdXQnO1xuaW1wb3J0IHtcbiAgVHJlZU1lbnVDb21wb25lbnQsXG4gIFRyZWVNZW51SXRlbUNvbXBvbmVudFxufSBmcm9tICcuL3RyZWUtbWVudSc7XG5pbXBvcnQgeyBTZWFyY2hhYmxlRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3NlYXJjaGFibGUtZHJvcGRvd24nO1xuaW1wb3J0IHsgTGlzdEFjdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWFjdGlvbi1ncm91cCc7XG5pbXBvcnQgeyBTSEFSRURfUElQRVMsIFNIQVJFRF9TRVJWSUNFUywgU0hBUkVEX0RJUkVDVElWRVMgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBCb3R0b21Db25zb2xlQ29tcG9uZW50LCBQYXRjaGVzQ29uc29sZVRhYkNvbXBvbmVudCwgUHJvYmxlbXNDb25zb2xlVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b20tY29uc29sZSc7XG5pbXBvcnQgeyBUZXh0RGlmZkNvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1kaWZmJztcbmltcG9ydCB7IFBhdGNoQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vcGF0Y2gtYWN0aW9ucyc7XG5pbXBvcnQgeyBBZGRPclJlcGxhY2VQYXRjaENvbXBvbmVudCB9IGZyb20gJy4vYWRkLW9yLXJlcGxhY2UtcGF0Y2gnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5TSEFSRURfUElQRVMsXG4gICAgLi4uU0hBUkVEX0RJUkVDVElWRVMsXG4gICAgQWRkRmllbGREcm9wZG93bkNvbXBvbmVudCxcbiAgICBBZGROZXN0ZWRGaWVsZERyb3Bkb3duQ29tcG9uZW50LFxuICAgIEFkZE5ld0VsZW1lbnRCdXR0b25Db21wb25lbnQsXG4gICAgQW55VHlwZUZpZWxkQ29tcG9uZW50LFxuICAgIEF1dG9jb21wbGV0ZUlucHV0Q29tcG9uZW50LFxuICAgIENvbXBsZXhMaXN0RmllbGRDb21wb25lbnQsXG4gICAgT2JqZWN0RmllbGRDb21wb25lbnQsXG4gICAgRWRpdG9yUHJldmlld2VyQ29tcG9uZW50LFxuICAgIEZpbmRSZXBsYWNlQ29tcG9uZW50LFxuICAgIE1vZGFsVmlld0NvbXBvbmVudCxcbiAgICBQcmltaXRpdmVMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUHJpbWl0aXZlRmllbGRDb21wb25lbnQsXG4gICAgUmVmRmllbGRDb21wb25lbnQsXG4gICAgU2VhcmNoYWJsZURyb3Bkb3duQ29tcG9uZW50LFxuICAgIExpc3RBY3Rpb25Hcm91cENvbXBvbmVudCxcbiAgICBUYWJsZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBUYWJsZUl0ZW1GaWVsZENvbXBvbmVudCxcbiAgICBUaXRsZURyb3Bkb3duQ29tcG9uZW50LFxuICAgIFRyZWVNZW51SXRlbUNvbXBvbmVudCxcbiAgICBUcmVlTWVudUNvbXBvbmVudCxcbiAgICBKc29uRWRpdG9yQ29tcG9uZW50LFxuICAgIFN1YlJlY29yZENvbXBvbmVudCxcbiAgICBIdG1sVmlld0NvbXBvbmVudCxcbiAgICBCb3R0b21Db25zb2xlQmFkZ2VzQ29tcG9uZW50LFxuICAgIEJvdHRvbUNvbnNvbGVDb21wb25lbnQsXG4gICAgU3RyaW5nSW5wdXRDb21wb25lbnQsXG4gICAgVGV4dERpZmZDb21wb25lbnQsXG4gICAgUGF0Y2hBY3Rpb25zQ29tcG9uZW50LFxuICAgIFBhdGNoZXNDb25zb2xlVGFiQ29tcG9uZW50LFxuICAgIFByb2JsZW1zQ29uc29sZVRhYkNvbXBvbmVudCxcbiAgICBBZGRPclJlcGxhY2VQYXRjaENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbSnNvbkVkaXRvckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBUb29sdGlwTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXG4gICAgQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgUGFnaW5hdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRhYnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFR5cGVhaGVhZE1vZHVsZS5mb3JSb290KCksXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBTSEFSRURfU0VSVklDRVNcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkVkaXRvck1vZHVsZSB7IH1cblxuZXhwb3J0IHtcbiAgQWRkRmllbGREcm9wZG93bkNvbXBvbmVudCxcbiAgQWRkTmVzdGVkRmllbGREcm9wZG93bkNvbXBvbmVudCxcbiAgQWRkTmV3RWxlbWVudEJ1dHRvbkNvbXBvbmVudCxcbiAgQW55VHlwZUZpZWxkQ29tcG9uZW50LFxuICBBdXRvY29tcGxldGVJbnB1dENvbXBvbmVudCxcbiAgQ29tcGxleExpc3RGaWVsZENvbXBvbmVudCxcbiAgT2JqZWN0RmllbGRDb21wb25lbnQsXG4gIEVkaXRvclByZXZpZXdlckNvbXBvbmVudCxcbiAgQm90dG9tQ29uc29sZUNvbXBvbmVudCxcbiAgRmluZFJlcGxhY2VDb21wb25lbnQsXG4gIE1vZGFsVmlld0NvbXBvbmVudCxcbiAgUHJpbWl0aXZlTGlzdEZpZWxkQ29tcG9uZW50LFxuICBQcmltaXRpdmVGaWVsZENvbXBvbmVudCxcbiAgUmVmRmllbGRDb21wb25lbnQsXG4gIFNlYXJjaGFibGVEcm9wZG93bkNvbXBvbmVudCxcbiAgTGlzdEFjdGlvbkdyb3VwQ29tcG9uZW50LFxuICBUYWJsZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgVGFibGVJdGVtRmllbGRDb21wb25lbnQsXG4gIFRpdGxlRHJvcGRvd25Db21wb25lbnQsXG4gIFRyZWVNZW51SXRlbUNvbXBvbmVudCxcbiAgVHJlZU1lbnVDb21wb25lbnQsXG4gIEpzb25FZGl0b3JDb21wb25lbnQsXG4gIFN1YlJlY29yZENvbXBvbmVudCxcbiAgSHRtbFZpZXdDb21wb25lbnQsXG4gIEJvdHRvbUNvbnNvbGVCYWRnZXNDb21wb25lbnQsXG4gIFN0cmluZ0lucHV0Q29tcG9uZW50LFxuICBUZXh0RGlmZkNvbXBvbmVudCxcbiAgUGF0Y2hBY3Rpb25zQ29tcG9uZW50LFxuICBQYXRjaGVzQ29uc29sZVRhYkNvbXBvbmVudCxcbiAgUHJvYmxlbXNDb25zb2xlVGFiQ29tcG9uZW50LFxuICBBZGRPclJlcGxhY2VQYXRjaENvbXBvbmVudFxufTtcbiJdfQ==