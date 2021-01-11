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
import { Component, EventEmitter, Input, Output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { fromJS } from 'immutable';
import { takeUntil, skipWhile } from 'rxjs/operators';
import { AbstractSubscriberComponent } from './abstract-subscriber';
import * as i0 from "@angular/core";
import * as i1 from "./shared/services";
import * as i2 from "@angular/common";
import * as i3 from "./shared/directives/shortcuts.directive";
import * as i4 from "./modal-view/modal-view.component";
import * as i5 from "./add-field-dropdown/add-field-dropdown.component";
import * as i6 from "ngx-bootstrap/tooltip";
import * as i7 from "./bottom-console-badges/bottom-console-badges.component";
import * as i8 from "./tree-menu/tree-menu.component";
import * as i9 from "@angular/forms";
import * as i10 from "ngx-bootstrap/tabs";
import * as i11 from "./sub-record/sub-record.component";
import * as i12 from "./editor-previewer/editor-previewer.component";
import * as i13 from "./bottom-console/bottom-console.component";
function JsonEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "add-field-dropdown", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelement(3, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 12);
    i0.ɵɵlistener("click", function JsonEditorComponent_div_1_Template_span_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.isPreviewerHidden = !ctx_r7.isPreviewerHidden; });
    i0.ɵɵelement(5, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "bottom-console-badges", 14);
    i0.ɵɵlistener("badgeClick", function JsonEditorComponent_div_1_Template_bottom_console_badges_badgeClick_6_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.openBottomConsole($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 15);
    i0.ɵɵlistener("click", function JsonEditorComponent_div_1_Template_span_click_7_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.isSidebarCollapsed = !ctx_r10.isSidebarCollapsed; });
    i0.ɵɵelement(8, "i", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(2, 7, ctx_r0.keys$))("pathString", ctx_r0.pathString)("schema", ctx_r0.fixedSchema);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("tooltip", ctx_r0.isPreviewerHidden ? "Show Preview" : "Hide Preview");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", !ctx_r0.isPreviewerHidden ? "fa-eye-slash" : "fa-eye");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("rotate", !ctx_r0.isSidebarCollapsed);
} }
function JsonEditorComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "input", 21);
    i0.ɵɵlistener("ngModelChange", function JsonEditorComponent_div_2_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.appGlobalsService.adminMode = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 22);
    i0.ɵɵtext(3, "Enable Admin Mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r11.appGlobalsService.adminMode);
} }
function JsonEditorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "tree-menu", 18);
    i0.ɵɵelement(2, "hr");
    i0.ɵɵtemplate(3, JsonEditorComponent_div_2_div_3_Template, 4, 1, "div", 19);
    i0.ɵɵelement(4, "hr");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.isSidebarCollapsed ? "close" : "open");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("record", ctx_r1._record)("schema", ctx_r1.fixedSchema);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.config.enableAdminModeSwitch);
} }
function JsonEditorComponent_add_field_dropdown_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "add-field-dropdown", 23);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtext(2, "Add field");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(1, 3, ctx_r2.keys$))("pathString", ctx_r2.pathString)("schema", ctx_r2.fixedSchema);
} }
function JsonEditorComponent_tabset_5_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tab", 25);
    i0.ɵɵlistener("select", function JsonEditorComponent_tabset_5_tab_1_Template_tab_select_0_listener() { i0.ɵɵrestoreView(_r17); const tabName_r15 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.activeTabName = tabName_r15; });
    i0.ɵɵelement(1, "sub-record", 26);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabName_r15 = ctx.$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("heading", tabName_r15)("active", ctx_r14.isActiveTab(tabName_r15));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r14._record)("tabName", tabName_r15)("schema", ctx_r14.fixedSchema)("keys", i0.ɵɵpipeBind1(2, 7, ctx_r14.keys$))("pathString", ctx_r14.pathString);
} }
function JsonEditorComponent_tabset_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tabset");
    i0.ɵɵtemplate(1, JsonEditorComponent_tabset_5_tab_1_Template, 3, 9, "tab", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.tabNames)("ngForTrackBy", ctx_r3.trackByElement);
} }
function JsonEditorComponent_sub_record_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sub-record", 27);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r4._record)("schema", ctx_r4.fixedSchema)("keys", i0.ɵɵpipeBind1(1, 4, ctx_r4.keys$))("pathString", ctx_r4.pathString);
} }
function JsonEditorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelement(1, "editor-previewer", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r5.isPreviewerHidden ? "minimizePreview" : "maximizePreview");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", ctx_r5.isPreviewerHidden)("previews", ctx_r5.previews);
} }
function JsonEditorComponent_bottom_console_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bottom-console", 30);
    i0.ɵɵlistener("onCollapse", function JsonEditorComponent_bottom_console_8_Template_bottom_console_onCollapse_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.isBottomConsoleOpen = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("activeTab", ctx_r6.bottomConsoleActiveTab)("isOpen", ctx_r6.isBottomConsoleOpen);
} }
const _c0 = function (a0, a1) { return { "maximizeEditor": a0, "compact": a1 }; };
export class JsonEditorComponent extends AbstractSubscriberComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, jsonUtilService, jsonSchemaService, keysStoreService, recordFixerService, schemaFixerService, tabsUtilService, pathUtilService) {
        super();
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.jsonUtilService = jsonUtilService;
        this.jsonSchemaService = jsonSchemaService;
        this.keysStoreService = keysStoreService;
        this.recordFixerService = recordFixerService;
        this.schemaFixerService = schemaFixerService;
        this.tabsUtilService = tabsUtilService;
        this.pathUtilService = pathUtilService;
        this.recordChange = new EventEmitter();
        this.jsonPatchesChange = new EventEmitter();
        this.validationProblems = new EventEmitter();
        this.pathString = '';
        this.isBottomConsoleOpen = false;
        this.isPreviewerHidden = false;
        this.isSidebarCollapsed = true;
        this.bottomConsoleActiveTab = '';
    }
    ngOnInit() {
        this.isPreviewerHidden = this.config.isPreviewerHiddenOnStart;
        this.appGlobalsService.adminMode$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(adminMode => {
            this.keysStoreService.buildKeysMap(this._record, this.fixedSchema);
        });
        // listen for all changes on json
        this.jsonStoreService.json$
            .pipe(skipWhile(json => json === this._record))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(json => {
            this._record = json;
            // emit the change as plain JS object
            this.lastEmittedRecord = json.toJS();
            this.recordChange.emit(this.lastEmittedRecord);
        });
        // list for all changes on jsonPatches
        this.jsonStoreService.jsonPatches$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patches => {
            this.jsonPatchesChange.emit(patches);
        });
        this.problemsService.internalProblemMap$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(internalProblemMap => {
            this.validationProblems.emit(internalProblemMap);
        });
    }
    ngOnChanges(changes) {
        // throw error if a required input is undefined
        if (changes['schema'] && !this.schema) {
            this.throwInputUndefined('schema');
        }
        if (changes['record'] && !this.record) {
            this.throwInputUndefined('record');
        }
        // warn if an important input is undefined
        if (changes['config'] && !this.config) {
            this.config = {};
            console.warn(`[config] is undefined, make sure that is intended.`);
        }
        const recordChanged = changes['record'] && this.record !== this.lastEmittedRecord;
        const schemaChanged = changes['schema'] || changes['config'];
        if (schemaChanged) {
            this.fixedSchema = this.schemaFixerService.fixSchema(this.schema, this.config.schemaOptions);
            this.jsonSchemaService.setSchema(this.fixedSchema);
        }
        if (schemaChanged || recordChanged) {
            this.record = this.recordFixerService.fixRecord(this.record, this.fixedSchema);
            this.lastEmittedRecord = this.record;
            this._record = fromJS(this.record);
            this.jsonStoreService.setJson(this._record);
            this.keysStoreService.buildKeysMap(this._record, this.fixedSchema);
        }
        if (changes['config']) {
            this.appGlobalsService.config = this.config;
            if (this.config.tabsConfig) {
                this.tabNames = this.tabsUtilService.getTabNames(this.config.tabsConfig);
                this.tabsUtilService.activeTabName$.subscribe(tabName => { this.appGlobalsService.activeTabName = tabName; });
                this.appGlobalsService.activeTabName = this.config.tabsConfig.defaultTabName;
            }
            this.customShortcutKeys = this.config.shortcuts;
        }
        if (recordChanged || changes['config']) {
            this.extractPreviews();
        }
        if (changes['jsonPatches']) {
            if (this.jsonPatches) {
                this.jsonStoreService.setJsonPatches(this.jsonPatches);
            }
        }
        if (changes['problemMap']) {
            this.problemsService.externalProblems = this.problemMap;
        }
        if (changes['templates']) {
            this.appGlobalsService.templates = this.templates || {};
        }
    }
    throwInputUndefined(inputName) {
        throw new Error(`[${inputName}] is undefined!
      if you are fetching ${inputName} async then please consider using:
        <json-editor *ngIf="${inputName}" [${inputName}]="${inputName}" ...> </json-editor>
      in order to wait for it to be fetched before initializing json-editor`);
    }
    /**
     * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
     */
    extractPreviews() {
        if (!this.isPreviewerDisabled) {
            // if url is not set directly, populate it
            this.previews = [];
            this.config.previews
                .forEach(previewConfig => {
                let url;
                if (previewConfig.url) {
                    url = previewConfig.url;
                }
                else if (previewConfig.getUrl) {
                    url = previewConfig.getUrl(this.record);
                }
                else if (previewConfig.urlPath) {
                    try {
                        url = this.jsonUtilService.getValueInPath(this.record, previewConfig.urlPath);
                    }
                    catch (error) {
                        console.warn(`Path ${previewConfig.urlPath} in preview config is not present in the input record`);
                    }
                }
                else {
                    throw new Error('Either url, urlPath or getUrl should be set for a preview');
                }
                if (url) {
                    this.previews.push({
                        name: previewConfig.name,
                        type: previewConfig.type,
                        url: url
                    });
                }
            });
        }
    }
    get keys$() {
        return this.keysStoreService.forPath(this.pathString);
    }
    get isPreviewerDisabled() {
        return (this.config.previews === undefined || this.config.previews.length === 0);
    }
    set activeTabName(tabName) {
        this.appGlobalsService.activeTabName = tabName;
    }
    isActiveTab(tabName) {
        return this.appGlobalsService.activeTabName === tabName;
    }
    get shorterEditorContainerClass() {
        return this.isBottomConsoleOpen ? 'shorter-editor-container' : '';
    }
    openBottomConsole(tabName) {
        this.isBottomConsoleOpen = true;
        this.bottomConsoleActiveTab = tabName;
    }
    trackByElement(index, element) {
        return element;
    }
}
JsonEditorComponent.ɵfac = function JsonEditorComponent_Factory(t) { return new (t || JsonEditorComponent)(i0.ɵɵdirectiveInject(i1.AppGlobalsService), i0.ɵɵdirectiveInject(i1.ProblemsService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.JsonUtilService), i0.ɵɵdirectiveInject(i1.JsonSchemaService), i0.ɵɵdirectiveInject(i1.KeysStoreService), i0.ɵɵdirectiveInject(i1.RecordFixerService), i0.ɵɵdirectiveInject(i1.SchemaFixerService), i0.ɵɵdirectiveInject(i1.TabsUtilService), i0.ɵɵdirectiveInject(i1.PathUtilService)); };
JsonEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonEditorComponent, selectors: [["json-editor"]], inputs: { config: "config", record: "record", schema: "schema", problemMap: "problemMap", jsonPatches: "jsonPatches", templates: "templates" }, outputs: { recordChange: "recordChange", jsonPatchesChange: "jsonPatchesChange", validationProblems: "validationProblems" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 10, vars: 13, consts: [["id", "ng2-json-editor", 1, "editor-container", 3, "ngClass"], ["class", "collapsed-menu-container", 4, "ngIf"], ["class", "menu-container", 3, "ngClass", 4, "ngIf"], ["id", "middle-main-container", 1, "middle", "main-container", 3, "shortcuts", "ngClass"], [3, "fields", "pathString", "schema", 4, "ngIf"], [4, "ngIf"], [3, "value", "schema", "keys", "pathString", 4, "ngIf"], ["id", "right-main-container", "class", "main-container right", 3, "ngClass", 4, "ngIf"], [3, "activeTab", "isOpen", "onCollapse", 4, "ngIf"], [1, "collapsed-menu-container"], [1, "add-field-button", 3, "fields", "pathString", "schema"], ["tooltip", "Add Field", "placement", "right", 1, "fa", "fa-plus", "fa-2x"], ["id", "preview-toggle-icon", "placement", "right", 1, "preview-icon", 3, "tooltip", "click"], [1, "fa", "fa-1x", 3, "ngClass"], [3, "badgeClick"], [1, "open-sidebar-container", 3, "click"], [1, "fa", "fa-angle-right", "fa-4x"], [1, "menu-container", 3, "ngClass"], [3, "record", "schema"], ["class", "admin-mode", "tooltip", "Allows editing all fields (use with care)", 4, "ngIf"], ["tooltip", "Allows editing all fields (use with care)", 1, "admin-mode"], ["id", "admin-mode-checkbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "admin-mode-checkbox", 1, "admin-mode"], [3, "fields", "pathString", "schema"], [3, "heading", "active", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "heading", "active", "select"], [3, "value", "tabName", "schema", "keys", "pathString"], [3, "value", "schema", "keys", "pathString"], ["id", "right-main-container", 1, "main-container", "right", 3, "ngClass"], [3, "hidden", "previews"], [3, "activeTab", "isOpen", "onCollapse"]], template: function JsonEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, JsonEditorComponent_div_1_Template, 9, 9, "div", 1);
        i0.ɵɵtemplate(2, JsonEditorComponent_div_2_Template, 5, 4, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, JsonEditorComponent_add_field_dropdown_4_Template, 3, 5, "add-field-dropdown", 4);
        i0.ɵɵtemplate(5, JsonEditorComponent_tabset_5_Template, 2, 2, "tabset", 5);
        i0.ɵɵtemplate(6, JsonEditorComponent_sub_record_6_Template, 2, 6, "sub-record", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, JsonEditorComponent_div_7_Template, 2, 3, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, JsonEditorComponent_bottom_console_8_Template, 1, 2, "bottom-console", 8);
        i0.ɵɵelement(9, "modal-view");
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.shorterEditorContainerClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.compact);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.compact);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("shortcuts", ctx.customShortcutKeys)("ngClass", i0.ɵɵpureFunction2(10, _c0, ctx.isPreviewerHidden, ctx.config.compact));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.compact);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.tabsConfig);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.tabsConfig);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isPreviewerDisabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.config.compact);
    } }, directives: [i2.NgClass, i2.NgIf, i3.ShortcutsDirective, i4.ModalViewComponent, i5.AddFieldDropdownComponent, i6.TooltipDirective, i7.BottomConsoleBadgesComponent, i8.TreeMenuComponent, i9.CheckboxControlValueAccessor, i9.NgControlStatus, i9.NgModel, i10.TabsetComponent, i2.NgForOf, i10.TabDirective, i11.SubRecordComponent, i12.EditorPreviewerComponent, i13.BottomConsoleComponent], pipes: [i2.AsyncPipe], styles: ["body,html{background-color:#ecf0f1;height:100%;overflow-x:hidden}.editor-container{display:flex;flex-direction:row;height:100%;width:100%}.editor-container,.editor-container .row{margin-left:0;margin-right:0}.bs-tooltip-right{width:120px!important}.shorter-editor-container{height:75%}#ng2-json-editor .dropdown-menu{max-height:400px;overflow-y:auto}#ng2-json-editor .hidden{display:none}#ng2-json-editor th{background-color:#ecf0f1;color:#8e8e8e;font-weight:400;font-weight:700;padding:1px 0 1px 6px}#ng2-json-editor th .dropdown-filter-container{font-weight:400}#ng2-json-editor td{background-color:#f9f9f9;border:none;padding:0}#ng2-json-editor td>*{vertical-align:middle}#ng2-json-editor td.label-holder{background-color:#dae8ef;border-top:1px solid #bdc3c7;padding:3px;white-space:nowrap;width:1%}#ng2-json-editor td.label-holder button{color:#595959}#ng2-json-editor td.error,#ng2-json-editor tr.error td{background-color:#e74c3c!important;color:#fff;transition:all .4s}#ng2-json-editor tbody{border:none}#ng2-json-editor table{margin-bottom:0!important}#ng2-json-editor .main-container.compact{border-left:none}#ng2-json-editor .main-container{border-left:1px solid #a5adb5;font-size:13px;height:100%;overflow:auto}#ng2-json-editor .main-container .tab-container>.nav-tabs{font-size:14px}#ng2-json-editor .main-container>add-field-dropdown div.dropdown{width:100vh}#ng2-json-editor .main-container>add-field-dropdown ul.dropdown-menu{padding-bottom:15px;right:0}#ng2-json-editor .main-container>add-field-dropdown button.btn-add-field-dropdown{background:#fff;font-size:16px;line-height:normal;opacity:.9;padding:5px;width:100%}#ng2-json-editor .main-container>add-field-dropdown button.btn-add-field-dropdown:hover{color:#000;opacity:1}#ng2-json-editor .add-field-dropdown-container{width:100%}#ng2-json-editor .middle.main-container{padding:0}#ng2-json-editor .menu-container{background-color:#2c3e50;display:flex;flex-direction:column;height:100%;justify-content:space-between;opacity:0;overflow-x:hidden;transition:width .1s ease-in;visibility:hidden;width:0}#ng2-json-editor .menu-container div.dropdown{width:100vh}#ng2-json-editor .menu-container ul.dropdown-menu{padding-bottom:15px;right:0}#ng2-json-editor .menu-container button.btn-add-field-dropdown{background:#fff;font-size:16px;line-height:normal;opacity:.9;padding:5px;width:100%}#ng2-json-editor .menu-container button.btn-add-field-dropdown:hover{color:#000;opacity:1}#ng2-json-editor .menu-container.open{opacity:1;padding-left:5px;visibility:visible;width:280px}#ng2-json-editor .collapsed-menu-container{align-items:center;background-color:#1d2d3d;display:flex;flex:0 0 50px;flex-direction:column;height:100%;justify-content:flex-end;position:relative}#ng2-json-editor .collapsed-menu-container .add-field-button{cursor:pointer;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin-bottom:25px;position:absolute;top:0;width:100%}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown{background-color:transparent;display:flex;justify-content:center;margin-top:10px;opacity:1;width:100%}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:active,#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:focus,#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:hover{outline:none}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown i{color:#ddd}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown i:hover{color:#fff}#ng2-json-editor .collapsed-menu-container .preview-icon{align-items:center;border:2px solid #ddd;border-radius:20%;cursor:pointer;display:flex;flex-direction:column;height:30px;justify-content:center;width:30px}#ng2-json-editor .collapsed-menu-container .preview-icon .fa{color:#ddd}#ng2-json-editor .collapsed-menu-container .preview-icon .fa:hover{color:#fff}#ng2-json-editor .collapsed-menu-container .open-sidebar-container{border-right:2px solid #283948;border-top:2px solid #283948;color:#ddd;cursor:pointer;display:flex;justify-content:center;margin-top:20px;width:100%}#ng2-json-editor .collapsed-menu-container .open-sidebar-container:hover{color:#fff;text-shadow:3px 3px 14px #2a5d88}#ng2-json-editor .collapsed-menu-container .open-sidebar-container .fa-angle-right{-ms-transition:all .5s ease-in-out;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}#ng2-json-editor .collapsed-menu-container .open-sidebar-container .fa-angle-right.rotate{-ms-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}#ng2-json-editor .middle.main-container{flex-basis:60%}#ng2-json-editor .middle.main-container.maximizeEditor{flex-grow:2}#ng2-json-editor .right.main-container{flex-basis:40%;flex-shrink:0}#ng2-json-editor .right.main-container.minimizePreview{flex-basis:0%}#ng2-json-editor .right.main-container .btn-toggle{position:fixed;right:0}#ng2-json-editor .editor-btn-delete{background:transparent;border:0;font-weight:700;line-height:1;opacity:.2;padding:0 0 3px 3px;text-shadow:0 1px 0 #fff}#ng2-json-editor .editor-btn-delete:hover{color:red;opacity:.6}#ng2-json-editor .editor-btn-delete.editor-btn-delete-text{font-size:13px;opacity:.5;padding:0}#ng2-json-editor .custom-title-dropdown-item button{background:transparent;border:0;font-size:13px;font-weight:700;line-height:1;opacity:.2;opacity:.5;padding:0;text-shadow:0 1px 0 #fff}#ng2-json-editor .custom-title-dropdown-item button:hover{color:#337ab7;opacity:.6}#ng2-json-editor .editor-btn-move-down{padding-bottom:0}#ng2-json-editor .editor-btn-move-down,#ng2-json-editor .editor-btn-move-up{background:transparent;border:0;font-size:11px;opacity:.2;padding:0}#ng2-json-editor .editor-btn-move-down:hover,#ng2-json-editor .editor-btn-move-up:hover{opacity:.6}#ng2-json-editor ul.pagination-top{margin:-16px 0 0}#ng2-json-editor td.button-holder,#ng2-json-editor th.button-holder{text-align:center;vertical-align:middle;width:40.33px}#ng2-json-editor td.button-holder.sortable,#ng2-json-editor th.button-holder.sortable{width:46px}#ng2-json-editor th.button-holder .add-field-dropdown-container{width:100%}#ng2-json-editor th.button-holder .btn-add-field-dropdown{float:right}#ng2-json-editor label{color:#c1c1c1}#ng2-json-editor .highlight{border:2px solid #ff0!important}#ng2-json-editor table.editable-inner-table{table-layout:fixed}#ng2-json-editor table.editable-inner-table>tbody>tr{border-bottom:1px solid #fff!important}#ng2-json-editor table.editable-inner-table add-new-element-button .button-container{padding-left:6px}#ng2-json-editor table.editable-inner-table label{display:inline;font-weight:400;padding-left:5px}#ng2-json-editor table.editable-inner-table .dropdown-menu{left:inherit;min-width:100px;right:0}#ng2-json-editor .title-dropdown-item button{padding-left:20px!important;padding-right:20px!important;text-align:left;width:100%}#ng2-json-editor .title-dropdown-item:hover{background:#f5f5f5}#ng2-json-editor .tooltip.top .tooltip-arrow{border-top-color:transparent}#ng2-json-editor .tooltip{width:90%}#ng2-json-editor button.btn-toggle{float:right;margin-right:5px;margin-top:5px}#ng2-json-editor .autocomplete-container .dropdown{left:0!important;position:relative!important;top:0!important}#ng2-json-editor div.admin-mode{padding-top:8px;width:100%}#ng2-json-editor label.admin-mode{color:#e0dfdf;font-size:13px;font-weight:400;padding-left:4px;width:90%}#ng2-json-editor hr{border-top:1px solid #757575;margin-bottom:5px;margin-top:5px}#ng2-json-editor .btn.btn-success{background-color:#16a085;border-color:#16a085;color:#fff}#ng2-json-editor .btn.btn-success:active,#ng2-json-editor .btn.btn-success:focus,#ng2-json-editor .btn.btn-success:hover{background-color:#19b698!important;color:#fff}#ng2-json-editor .btn .fa{margin-right:2px}#ng2-json-editor .nav{margin-bottom:3px}#ng2-json-editor .nav-tabs>li.active>a,#ng2-json-editor .nav-tabs>li.active>a:focus,#ng2-json-editor .nav-tabs>li.active>a:hover{background-color:#fff;border-top:1px solid #2c3e50}#ng2-json-editor .nav-tabs>li>a:hover{border:1px solid transparent;border-top-color:#2c3e50;transition:all .4s}#ng2-json-editor .nav.nav-tabs{border-bottom:5px solid #fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.24)}#ng2-json-editor .nav-tabs>li>a{border-radius:0;border-right:1px solid #e0e2e2;margin-right:0}#ng2-json-editor .disabled{cursor:not-allowed}#ng2-json-editor .disabled div{pointer-events:none}#ng2-json-editor .disabled div a,#ng2-json-editor .disabled div button,#ng2-json-editor .disabled div i,#ng2-json-editor .disabled div input,#ng2-json-editor .disabled div string-input>div{opacity:.5}#ng2-json-editor .disabled button{pointer-events:none}#ng2-json-editor .pagination>.active>a{background-color:#31617b;border-color:#31617b}#ng2-json-editor .btn.btn-switch{background-color:#7da0b3}#ng2-json-editor .btn.btn-switch.active{background-color:#31617b}.bottom-console-container{height:25%;overflow:hidden}.bottom-console-container .tab-content{height:90%;overflow:scroll}.red-left-border{border-left:9px solid #e74c3c!important}.max-height-90-vh{max-height:90vh}.max-height-70-vh{max-height:70vh}complex-list-field add-field-dropdown{display:none}.nav-tabs{background:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:1}typeahead-container a[href=\"#\"]{padding:0!important}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonEditorComponent, [{
        type: Component,
        args: [{
                selector: 'json-editor',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    './json-editor.component.scss'
                ],
                templateUrl: './json-editor.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i1.ProblemsService }, { type: i1.JsonStoreService }, { type: i1.JsonUtilService }, { type: i1.JsonSchemaService }, { type: i1.KeysStoreService }, { type: i1.RecordFixerService }, { type: i1.SchemaFixerService }, { type: i1.TabsUtilService }, { type: i1.PathUtilService }]; }, { config: [{
            type: Input
        }], record: [{
            type: Input
        }], schema: [{
            type: Input
        }], problemMap: [{
            type: Input
        }], jsonPatches: [{
            type: Input
        }], templates: [{
            type: Input
        }], recordChange: [{
            type: Output
        }], jsonPatchesChange: [{
            type: Output
        }], validationProblems: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2pzb24tZWRpdG9yLmNvbXBvbmVudC50cyIsImxpYi9qc29uLWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBWSxNQUFNLFdBQVcsQ0FBQztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3JDbEUsOEJBQ0k7SUFBQSw4Q0FFRTs7SUFBQSx3QkFBc0U7SUFDeEUsaUJBQXFCO0lBQ3ZCLGdDQUNFO0lBRHFJLHNOQUFnRDtJQUNyTCx3QkFBbUY7SUFDckYsaUJBQU87SUFDUCxpREFBd0Y7SUFBakUsbU9BQXdDO0lBQUMsaUJBQXdCO0lBQ3hGLGdDQUNFO0lBRG1DLDJOQUFrRDtJQUNyRix3QkFBNEU7SUFDOUUsaUJBQU87SUFDVCxpQkFBTTs7O0lBWGtCLGVBQXdCO0lBQXhCLDJEQUF3QixpQ0FBQSw4QkFBQTtJQUlmLGVBQWlFO0lBQWpFLCtGQUFpRTtJQUMxRSxlQUEwRDtJQUExRCwrRUFBMEQ7SUFJM0MsZUFBb0M7SUFBcEMsb0RBQW9DOzs7O0lBT3pFLCtCQUNFO0lBQUEsaUNBQ0E7SUFEZ0QsOE9BQXlDO0lBQXpGLGlCQUNBO0lBQUEsaUNBQW9E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bUJBQW1CO1FDMUVoQyw4QkFFRTtRQUFBLG9FQUNJO1FBYUosb0VBQ0U7UUFTRiw4QkFDRTtRQUFBLGtHQUN1QjtRQUN2QiwwRUFDRTtRQUlGLGtGQUFpSTtRQUNuSSxpQkFBTTtRQUVOLG9FQUNFO1FBR0osaUJBQU07UUFFTiwwRkFBd0o7UUFFeEosNkJBQ2E7O1FBOUNzQyx5REFBdUM7UUFFbEYsZUFBdUI7UUFBdkIsMENBQXVCO1FBY3hCLGVBQXVCO1FBQXZCLDBDQUF1QjtRQVVrQyxlQUFnQztRQUFoQyxrREFBZ0MsbUZBQUE7UUFDeEUsZUFBc0I7UUFBdEIseUNBQXNCO1FBRWxDLGVBQXlCO1FBQXpCLDRDQUF5QjtRQUtyQixlQUEwQjtRQUExQiw2Q0FBMEI7UUFHVCxlQUE0QjtRQUE1QiwrQ0FBNEI7UUFNN0MsZUFBdUI7UUFBdkIsMENBQXVCOztrREQrQjFCLG1CQUFtQjtjQVYvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1QsOEJBQThCO2lCQUMvQjtnQkFDRCxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs0VkFJVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFFRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNO1lBQ0csa0JBQWtCO2tCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tSlMsIE1hcCwgU2V0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBza2lwV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFic3RyYWN0U3Vic2NyaWJlckNvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3Qtc3Vic2NyaWJlcic7XG5pbXBvcnQge1xuICBBcHBHbG9iYWxzU2VydmljZSxcbiAgSnNvblN0b3JlU2VydmljZSxcbiAgSnNvblV0aWxTZXJ2aWNlLFxuICBKc29uU2NoZW1hU2VydmljZSxcbiAgS2V5c1N0b3JlU2VydmljZSxcbiAgUGF0aFV0aWxTZXJ2aWNlLFxuICBSZWNvcmRGaXhlclNlcnZpY2UsXG4gIFNjaGVtYUZpeGVyU2VydmljZSxcbiAgVGFic1V0aWxTZXJ2aWNlLFxuICBQcm9ibGVtc1NlcnZpY2Vcbn0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMnO1xuXG5pbXBvcnQge1xuICBKc29uRWRpdG9yQ29uZmlnLFxuICBQcmV2aWV3LFxuICBTY2hlbWFWYWxpZGF0aW9uUHJvYmxlbXMsXG4gIEpzb25QYXRjaCxcbiAgU2hvcnRjdXQsXG4gIEN1c3RvbVNob3J0Y3V0S2V5cyxcbiAgSlNPTlNjaGVtYVxufSBmcm9tICcuL3NoYXJlZC9pbnRlcmZhY2VzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqc29uLWVkaXRvcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2pzb24tZWRpdG9yLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vanNvbi1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIEpzb25FZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFN1YnNjcmliZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29uZmlnOiBKc29uRWRpdG9yQ29uZmlnO1xuICBASW5wdXQoKSByZWNvcmQ6IG9iamVjdDtcbiAgLy8gb3JpZ2luYWwgc2NoZW1hXG4gIEBJbnB1dCgpIHNjaGVtYTogYW55O1xuICBASW5wdXQoKSBwcm9ibGVtTWFwOiBTY2hlbWFWYWxpZGF0aW9uUHJvYmxlbXM7XG4gIEBJbnB1dCgpIGpzb25QYXRjaGVzOiBBcnJheTxKc29uUGF0Y2g+O1xuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IHsgW3RlbXBsYXRlTmFtZTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9O1xuXG4gIEBPdXRwdXQoKSByZWNvcmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcbiAgQE91dHB1dCgpIGpzb25QYXRjaGVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxKc29uUGF0Y2g+PigpO1xuICBAT3V0cHV0KCkgdmFsaWRhdGlvblByb2JsZW1zID0gbmV3IEV2ZW50RW1pdHRlcjxTY2hlbWFWYWxpZGF0aW9uUHJvYmxlbXM+KCk7XG5cbiAgcmVhZG9ubHkgcGF0aFN0cmluZyA9ICcnO1xuICBfcmVjb3JkOiBNYXA8c3RyaW5nLCBhbnk+O1xuICB0YWJOYW1lczogQXJyYXk8c3RyaW5nPjtcbiAgcHJldmlld3M6IEFycmF5PFByZXZpZXc+O1xuICBpc0JvdHRvbUNvbnNvbGVPcGVuID0gZmFsc2U7XG4gIGlzUHJldmlld2VySGlkZGVuID0gZmFsc2U7XG4gIGlzU2lkZWJhckNvbGxhcHNlZCA9IHRydWU7XG4gIGJvdHRvbUNvbnNvbGVBY3RpdmVUYWIgPSAnJztcbiAgY3VzdG9tU2hvcnRjdXRLZXlzOiBDdXN0b21TaG9ydGN1dEtleXM7XG4gIC8vIGFsdGVyZWQgc2NoZW1hIGVuY2hhbmNlZCB3aXRoIGNvbmZpZ3NcbiAgZml4ZWRTY2hlbWE6IEpTT05TY2hlbWE7XG5cbiAgLy8gdXNlZCB0byBkZWNpZGUgaWYgdGhlIFtyZWNvcmRdIGlzIGNoYW5nZSBjYXVzZWQgYnkgcmVjb3JkQ2hhbmdlLmVtaXQgb3IgcGFyZW50IGNvbXBvbmVudFxuICBwcml2YXRlIGxhc3RFbWl0dGVkUmVjb3JkOiBvYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFwcEdsb2JhbHNTZXJ2aWNlOiBBcHBHbG9iYWxzU2VydmljZSxcbiAgICBwdWJsaWMgcHJvYmxlbXNTZXJ2aWNlOiBQcm9ibGVtc1NlcnZpY2UsXG4gICAgcHVibGljIGpzb25TdG9yZVNlcnZpY2U6IEpzb25TdG9yZVNlcnZpY2UsXG4gICAgcHVibGljIGpzb25VdGlsU2VydmljZTogSnNvblV0aWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBqc29uU2NoZW1hU2VydmljZTogSnNvblNjaGVtYVNlcnZpY2UsXG4gICAgcHVibGljIGtleXNTdG9yZVNlcnZpY2U6IEtleXNTdG9yZVNlcnZpY2UsXG4gICAgcHVibGljIHJlY29yZEZpeGVyU2VydmljZTogUmVjb3JkRml4ZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBzY2hlbWFGaXhlclNlcnZpY2U6IFNjaGVtYUZpeGVyU2VydmljZSxcbiAgICBwdWJsaWMgdGFic1V0aWxTZXJ2aWNlOiBUYWJzVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzUHJldmlld2VySGlkZGVuID0gdGhpcy5jb25maWcuaXNQcmV2aWV3ZXJIaWRkZW5PblN0YXJ0O1xuICAgIHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UuYWRtaW5Nb2RlJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShhZG1pbk1vZGUgPT4ge1xuICAgICAgICB0aGlzLmtleXNTdG9yZVNlcnZpY2UuYnVpbGRLZXlzTWFwKHRoaXMuX3JlY29yZCwgdGhpcy5maXhlZFNjaGVtYSk7XG4gICAgICB9KTtcblxuICAgIC8vIGxpc3RlbiBmb3IgYWxsIGNoYW5nZXMgb24ganNvblxuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5qc29uJFxuICAgICAgLnBpcGUoc2tpcFdoaWxlKGpzb24gPT4ganNvbiA9PT0gdGhpcy5fcmVjb3JkKSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoanNvbiA9PiB7XG4gICAgICAgIHRoaXMuX3JlY29yZCA9IGpzb247XG4gICAgICAgIC8vIGVtaXQgdGhlIGNoYW5nZSBhcyBwbGFpbiBKUyBvYmplY3RcbiAgICAgICAgdGhpcy5sYXN0RW1pdHRlZFJlY29yZCA9IGpzb24udG9KUygpO1xuICAgICAgICB0aGlzLnJlY29yZENoYW5nZS5lbWl0KHRoaXMubGFzdEVtaXR0ZWRSZWNvcmQpO1xuICAgICAgfSk7XG5cbiAgICAvLyBsaXN0IGZvciBhbGwgY2hhbmdlcyBvbiBqc29uUGF0Y2hlc1xuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5qc29uUGF0Y2hlcyRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocGF0Y2hlcyA9PiB7XG4gICAgICAgIHRoaXMuanNvblBhdGNoZXNDaGFuZ2UuZW1pdChwYXRjaGVzKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5wcm9ibGVtc1NlcnZpY2UuaW50ZXJuYWxQcm9ibGVtTWFwJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShpbnRlcm5hbFByb2JsZW1NYXAgPT4ge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25Qcm9ibGVtcy5lbWl0KGludGVybmFsUHJvYmxlbU1hcCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyB0aHJvdyBlcnJvciBpZiBhIHJlcXVpcmVkIGlucHV0IGlzIHVuZGVmaW5lZFxuICAgIGlmIChjaGFuZ2VzWydzY2hlbWEnXSAmJiAhdGhpcy5zY2hlbWEpIHtcbiAgICAgIHRoaXMudGhyb3dJbnB1dFVuZGVmaW5lZCgnc2NoZW1hJyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydyZWNvcmQnXSAmJiAhdGhpcy5yZWNvcmQpIHtcbiAgICAgIHRoaXMudGhyb3dJbnB1dFVuZGVmaW5lZCgncmVjb3JkJyk7XG4gICAgfVxuXG4gICAgLy8gd2FybiBpZiBhbiBpbXBvcnRhbnQgaW5wdXQgaXMgdW5kZWZpbmVkXG4gICAgaWYgKGNoYW5nZXNbJ2NvbmZpZyddICYmICF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICAgIGNvbnNvbGUud2FybihgW2NvbmZpZ10gaXMgdW5kZWZpbmVkLCBtYWtlIHN1cmUgdGhhdCBpcyBpbnRlbmRlZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWNvcmRDaGFuZ2VkID0gY2hhbmdlc1sncmVjb3JkJ10gJiYgdGhpcy5yZWNvcmQgIT09IHRoaXMubGFzdEVtaXR0ZWRSZWNvcmQ7XG4gICAgY29uc3Qgc2NoZW1hQ2hhbmdlZCA9IGNoYW5nZXNbJ3NjaGVtYSddIHx8IGNoYW5nZXNbJ2NvbmZpZyddO1xuXG4gICAgaWYgKHNjaGVtYUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuZml4ZWRTY2hlbWEgPSB0aGlzLnNjaGVtYUZpeGVyU2VydmljZS5maXhTY2hlbWEodGhpcy5zY2hlbWEsIHRoaXMuY29uZmlnLnNjaGVtYU9wdGlvbnMpO1xuICAgICAgdGhpcy5qc29uU2NoZW1hU2VydmljZS5zZXRTY2hlbWEodGhpcy5maXhlZFNjaGVtYSk7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUNoYW5nZWQgfHwgcmVjb3JkQ2hhbmdlZCkge1xuICAgICAgdGhpcy5yZWNvcmQgPSB0aGlzLnJlY29yZEZpeGVyU2VydmljZS5maXhSZWNvcmQodGhpcy5yZWNvcmQsIHRoaXMuZml4ZWRTY2hlbWEpO1xuICAgICAgdGhpcy5sYXN0RW1pdHRlZFJlY29yZCA9IHRoaXMucmVjb3JkO1xuICAgICAgdGhpcy5fcmVjb3JkID0gZnJvbUpTKHRoaXMucmVjb3JkKTtcbiAgICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5zZXRKc29uKHRoaXMuX3JlY29yZCk7XG4gICAgICB0aGlzLmtleXNTdG9yZVNlcnZpY2UuYnVpbGRLZXlzTWFwKHRoaXMuX3JlY29yZCwgdGhpcy5maXhlZFNjaGVtYSk7XG4gICAgfVxuXG5cbiAgICBpZiAoY2hhbmdlc1snY29uZmlnJ10pIHtcbiAgICAgIHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICBpZiAodGhpcy5jb25maWcudGFic0NvbmZpZykge1xuICAgICAgICB0aGlzLnRhYk5hbWVzID0gdGhpcy50YWJzVXRpbFNlcnZpY2UuZ2V0VGFiTmFtZXModGhpcy5jb25maWcudGFic0NvbmZpZyk7XG4gICAgICAgIHRoaXMudGFic1V0aWxTZXJ2aWNlLmFjdGl2ZVRhYk5hbWUkLnN1YnNjcmliZSh0YWJOYW1lID0+IHsgdGhpcy5hcHBHbG9iYWxzU2VydmljZS5hY3RpdmVUYWJOYW1lID0gdGFiTmFtZTsgfSk7XG4gICAgICAgIHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UuYWN0aXZlVGFiTmFtZSA9IHRoaXMuY29uZmlnLnRhYnNDb25maWcuZGVmYXVsdFRhYk5hbWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VzdG9tU2hvcnRjdXRLZXlzID0gdGhpcy5jb25maWcuc2hvcnRjdXRzO1xuICAgIH1cblxuICAgIGlmIChyZWNvcmRDaGFuZ2VkIHx8IGNoYW5nZXNbJ2NvbmZpZyddKSB7XG4gICAgICB0aGlzLmV4dHJhY3RQcmV2aWV3cygpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWydqc29uUGF0Y2hlcyddKSB7XG4gICAgICBpZiAodGhpcy5qc29uUGF0Y2hlcykge1xuICAgICAgICB0aGlzLmpzb25TdG9yZVNlcnZpY2Uuc2V0SnNvblBhdGNoZXModGhpcy5qc29uUGF0Y2hlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ3Byb2JsZW1NYXAnXSkge1xuICAgICAgdGhpcy5wcm9ibGVtc1NlcnZpY2UuZXh0ZXJuYWxQcm9ibGVtcyA9IHRoaXMucHJvYmxlbU1hcDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlc1sndGVtcGxhdGVzJ10pIHtcbiAgICAgIHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UudGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXMgfHwge307XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0aHJvd0lucHV0VW5kZWZpbmVkKGlucHV0TmFtZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtpbnB1dE5hbWV9XSBpcyB1bmRlZmluZWQhXG4gICAgICBpZiB5b3UgYXJlIGZldGNoaW5nICR7aW5wdXROYW1lfSBhc3luYyB0aGVuIHBsZWFzZSBjb25zaWRlciB1c2luZzpcbiAgICAgICAgPGpzb24tZWRpdG9yICpuZ0lmPVwiJHtpbnB1dE5hbWV9XCIgWyR7aW5wdXROYW1lfV09XCIke2lucHV0TmFtZX1cIiAuLi4+IDwvanNvbi1lZGl0b3I+XG4gICAgICBpbiBvcmRlciB0byB3YWl0IGZvciBpdCB0byBiZSBmZXRjaGVkIGJlZm9yZSBpbml0aWFsaXppbmcganNvbi1lZGl0b3JgXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBQcmV2aWV3Q29uZmlnIGluc3RhbmNlcyB0byBQcmV2aWV3IGluc3RhbmNlcyBhbmQgYXBwZW5kcyB0byBgcHJldmlld3NgIGFycmF5LlxuICAgKi9cbiAgcHJpdmF0ZSBleHRyYWN0UHJldmlld3MoKSB7XG4gICAgaWYgKCF0aGlzLmlzUHJldmlld2VyRGlzYWJsZWQpIHtcbiAgICAgIC8vIGlmIHVybCBpcyBub3Qgc2V0IGRpcmVjdGx5LCBwb3B1bGF0ZSBpdFxuICAgICAgdGhpcy5wcmV2aWV3cyA9IFtdO1xuICAgICAgdGhpcy5jb25maWcucHJldmlld3NcbiAgICAgICAgLmZvckVhY2gocHJldmlld0NvbmZpZyA9PiB7XG4gICAgICAgICAgbGV0IHVybDogc3RyaW5nO1xuICAgICAgICAgIGlmIChwcmV2aWV3Q29uZmlnLnVybCkge1xuICAgICAgICAgICAgdXJsID0gcHJldmlld0NvbmZpZy51cmw7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2aWV3Q29uZmlnLmdldFVybCkge1xuICAgICAgICAgICAgdXJsID0gcHJldmlld0NvbmZpZy5nZXRVcmwodGhpcy5yZWNvcmQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJldmlld0NvbmZpZy51cmxQYXRoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB1cmwgPSB0aGlzLmpzb25VdGlsU2VydmljZS5nZXRWYWx1ZUluUGF0aCh0aGlzLnJlY29yZCwgcHJldmlld0NvbmZpZy51cmxQYXRoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgUGF0aCAke3ByZXZpZXdDb25maWcudXJsUGF0aH0gaW4gcHJldmlldyBjb25maWcgaXMgbm90IHByZXNlbnQgaW4gdGhlIGlucHV0IHJlY29yZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VpdGhlciB1cmwsIHVybFBhdGggb3IgZ2V0VXJsIHNob3VsZCBiZSBzZXQgZm9yIGEgcHJldmlldycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdzLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBwcmV2aWV3Q29uZmlnLm5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6IHByZXZpZXdDb25maWcudHlwZSxcbiAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGtleXMkKCk6IFJlcGxheVN1YmplY3Q8U2V0PHN0cmluZz4+IHtcbiAgICByZXR1cm4gdGhpcy5rZXlzU3RvcmVTZXJ2aWNlLmZvclBhdGgodGhpcy5wYXRoU3RyaW5nKTtcbiAgfVxuXG4gIGdldCBpc1ByZXZpZXdlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZy5wcmV2aWV3cyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuY29uZmlnLnByZXZpZXdzLmxlbmd0aCA9PT0gMFxuICAgICk7XG4gIH1cblxuICBzZXQgYWN0aXZlVGFiTmFtZSh0YWJOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLmFjdGl2ZVRhYk5hbWUgPSB0YWJOYW1lO1xuICB9XG5cbiAgaXNBY3RpdmVUYWIodGFiTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFwcEdsb2JhbHNTZXJ2aWNlLmFjdGl2ZVRhYk5hbWUgPT09IHRhYk5hbWU7XG4gIH1cblxuICBnZXQgc2hvcnRlckVkaXRvckNvbnRhaW5lckNsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNCb3R0b21Db25zb2xlT3BlbiA/ICdzaG9ydGVyLWVkaXRvci1jb250YWluZXInIDogJyc7XG4gIH1cblxuICBvcGVuQm90dG9tQ29uc29sZSh0YWJOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQm90dG9tQ29uc29sZU9wZW4gPSB0cnVlO1xuICAgIHRoaXMuYm90dG9tQ29uc29sZUFjdGl2ZVRhYiA9IHRhYk5hbWU7XG4gIH1cblxuICB0cmFja0J5RWxlbWVudChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG4iLCI8ZGl2IGlkPVwibmcyLWpzb24tZWRpdG9yXCIgY2xhc3M9XCJlZGl0b3ItY29udGFpbmVyXCIgW25nQ2xhc3NdPVwic2hvcnRlckVkaXRvckNvbnRhaW5lckNsYXNzXCI+XG4gIFxuICA8ZGl2ICAqbmdJZj1cIiFjb25maWcuY29tcGFjdFwiIGNsYXNzPVwiY29sbGFwc2VkLW1lbnUtY29udGFpbmVyXCI+XG4gICAgICA8YWRkLWZpZWxkLWRyb3Bkb3duIFtmaWVsZHNdPVwia2V5cyQgfCBhc3luY1wiIFtwYXRoU3RyaW5nXT1cInBhdGhTdHJpbmdcIiBcbiAgICAgIFtzY2hlbWFdPVwiZml4ZWRTY2hlbWFcIiBjbGFzcz1cImFkZC1maWVsZC1idXR0b25cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGZhLTJ4XCIgdG9vbHRpcD1cIkFkZCBGaWVsZFwiIHBsYWNlbWVudD1cInJpZ2h0XCI+PC9pPlxuICAgICAgPC9hZGQtZmllbGQtZHJvcGRvd24+XG4gICAgPHNwYW4gaWQ9XCJwcmV2aWV3LXRvZ2dsZS1pY29uXCIgdG9vbHRpcD1cInt7aXNQcmV2aWV3ZXJIaWRkZW4gPyAnU2hvdyBQcmV2aWV3JyA6ICdIaWRlIFByZXZpZXcnfX1cIiBwbGFjZW1lbnQ9XCJyaWdodFwiY2xhc3M9XCJwcmV2aWV3LWljb25cIiAoY2xpY2spPVwiaXNQcmV2aWV3ZXJIaWRkZW4gPSAhaXNQcmV2aWV3ZXJIaWRkZW5cIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtMXhcIiBbbmdDbGFzc109XCIhaXNQcmV2aWV3ZXJIaWRkZW4gPyAnZmEtZXllLXNsYXNoJyA6ICdmYS1leWUnXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgICA8Ym90dG9tLWNvbnNvbGUtYmFkZ2VzIChiYWRnZUNsaWNrKT1cIm9wZW5Cb3R0b21Db25zb2xlKCRldmVudClcIj48L2JvdHRvbS1jb25zb2xlLWJhZGdlcz5cbiAgICA8c3BhbiBjbGFzcz1cIm9wZW4tc2lkZWJhci1jb250YWluZXJcIiAoY2xpY2spPVwiaXNTaWRlYmFyQ29sbGFwc2VkID0gIWlzU2lkZWJhckNvbGxhcHNlZFwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodCBmYS00eFwiIFtjbGFzcy5yb3RhdGVdPVwiIWlzU2lkZWJhckNvbGxhcHNlZFwiPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCIhY29uZmlnLmNvbXBhY3RcIiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwiaXNTaWRlYmFyQ29sbGFwc2VkID8gJ2Nsb3NlJyA6ICdvcGVuJ1wiPlxuICAgIDx0cmVlLW1lbnUgW3JlY29yZF09XCJfcmVjb3JkXCIgW3NjaGVtYV09XCJmaXhlZFNjaGVtYVwiPjwvdHJlZS1tZW51PlxuICAgIDxocj5cbiAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnLmVuYWJsZUFkbWluTW9kZVN3aXRjaFwiIGNsYXNzPVwiYWRtaW4tbW9kZVwiIHRvb2x0aXA9XCJBbGxvd3MgZWRpdGluZyBhbGwgZmllbGRzICh1c2Ugd2l0aCBjYXJlKVwiPlxuICAgICAgPGlucHV0IGlkPVwiYWRtaW4tbW9kZS1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiYXBwR2xvYmFsc1NlcnZpY2UuYWRtaW5Nb2RlXCIgLz5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImFkbWluLW1vZGVcIiBmb3I9XCJhZG1pbi1tb2RlLWNoZWNrYm94XCI+RW5hYmxlIEFkbWluIE1vZGU8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxocj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cIm1pZGRsZS1tYWluLWNvbnRhaW5lclwiIGNsYXNzPVwibWlkZGxlIG1haW4tY29udGFpbmVyXCIgW3Nob3J0Y3V0c109XCJjdXN0b21TaG9ydGN1dEtleXNcIiBbbmdDbGFzc109XCJ7ICdtYXhpbWl6ZUVkaXRvcicgOiBpc1ByZXZpZXdlckhpZGRlbiwgJ2NvbXBhY3QnIDogY29uZmlnLmNvbXBhY3QgfVwiPlxuICAgIDxhZGQtZmllbGQtZHJvcGRvd24gKm5nSWY9XCJjb25maWcuY29tcGFjdFwiIFtmaWVsZHNdPVwia2V5cyQgfCBhc3luY1wiIFtwYXRoU3RyaW5nXT1cInBhdGhTdHJpbmdcIiBcbiAgICBbc2NoZW1hXT1cImZpeGVkU2NoZW1hXCI+QWRkIGZpZWxkPC9hZGQtZmllbGQtZHJvcGRvd24+XG4gICAgPHRhYnNldCAqbmdJZj1cImNvbmZpZy50YWJzQ29uZmlnXCI+XG4gICAgICA8dGFiICpuZ0Zvcj1cImxldCB0YWJOYW1lIG9mIHRhYk5hbWVzOyB0cmFja0J5OnRyYWNrQnlFbGVtZW50XCIgW2hlYWRpbmddPVwidGFiTmFtZVwiIChzZWxlY3QpPVwiYWN0aXZlVGFiTmFtZSA9IHRhYk5hbWVcIiBbYWN0aXZlXT1cImlzQWN0aXZlVGFiKHRhYk5hbWUpXCI+XG4gICAgICAgIDxzdWItcmVjb3JkIFt2YWx1ZV09XCJfcmVjb3JkXCIgW3RhYk5hbWVdPVwidGFiTmFtZVwiIFtzY2hlbWFdPVwiZml4ZWRTY2hlbWFcIiBba2V5c109XCJrZXlzJCB8IGFzeW5jXCIgW3BhdGhTdHJpbmddPVwicGF0aFN0cmluZ1wiPjwvc3ViLXJlY29yZD5cbiAgICAgIDwvdGFiPlxuICAgIDwvdGFic2V0PlxuICAgIDxzdWItcmVjb3JkICpuZ0lmPVwiIWNvbmZpZy50YWJzQ29uZmlnXCIgW3ZhbHVlXT1cIl9yZWNvcmRcIiBbc2NoZW1hXT1cImZpeGVkU2NoZW1hXCIgW2tleXNdPVwia2V5cyQgfCBhc3luY1wiIFtwYXRoU3RyaW5nXT1cInBhdGhTdHJpbmdcIj48L3N1Yi1yZWNvcmQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJyaWdodC1tYWluLWNvbnRhaW5lclwiICpuZ0lmPVwiIWlzUHJldmlld2VyRGlzYWJsZWRcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyIHJpZ2h0XCIgW25nQ2xhc3NdPVwiaXNQcmV2aWV3ZXJIaWRkZW4gPyAnbWluaW1pemVQcmV2aWV3JyA6ICdtYXhpbWl6ZVByZXZpZXcnIFwiPlxuICAgIDxlZGl0b3ItcHJldmlld2VyIFtoaWRkZW5dPVwiaXNQcmV2aWV3ZXJIaWRkZW5cIiBbcHJldmlld3NdPVwicHJldmlld3NcIj4gPC9lZGl0b3ItcHJldmlld2VyPlxuICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxib3R0b20tY29uc29sZSAqbmdJZj1cIiFjb25maWcuY29tcGFjdFwiIFthY3RpdmVUYWJdPVwiYm90dG9tQ29uc29sZUFjdGl2ZVRhYlwiIFtpc09wZW5dPVwiaXNCb3R0b21Db25zb2xlT3BlblwiIChvbkNvbGxhcHNlKT1cImlzQm90dG9tQ29uc29sZU9wZW4gPSAkZXZlbnRcIj48L2JvdHRvbS1jb25zb2xlPlxuPCEtLSBNb2RhbCBWaWV3IGNvbnRyb2xsZWQgYnkgTW9kYWxTZXJ2aWNlIC0tPlxuPG1vZGFsLXZpZXc+XG48L21vZGFsLXZpZXc+Il19