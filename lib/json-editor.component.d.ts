import { EventEmitter, OnInit, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { Map, Set } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { AbstractSubscriberComponent } from './abstract-subscriber';
import { AppGlobalsService, JsonStoreService, JsonUtilService, JsonSchemaService, KeysStoreService, PathUtilService, RecordFixerService, SchemaFixerService, TabsUtilService, ProblemsService } from './shared/services';
import { JsonEditorConfig, Preview, SchemaValidationProblems, JsonPatch, CustomShortcutKeys, JSONSchema } from './shared/interfaces';
import * as i0 from "@angular/core";
export declare class JsonEditorComponent extends AbstractSubscriberComponent implements OnChanges, OnInit {
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    jsonStoreService: JsonStoreService;
    jsonUtilService: JsonUtilService;
    jsonSchemaService: JsonSchemaService;
    keysStoreService: KeysStoreService;
    recordFixerService: RecordFixerService;
    schemaFixerService: SchemaFixerService;
    tabsUtilService: TabsUtilService;
    pathUtilService: PathUtilService;
    config: JsonEditorConfig;
    record: object;
    schema: any;
    problemMap: SchemaValidationProblems;
    jsonPatches: Array<JsonPatch>;
    templates: {
        [templateName: string]: TemplateRef<any>;
    };
    recordChange: EventEmitter<Object>;
    jsonPatchesChange: EventEmitter<JsonPatch[]>;
    validationProblems: EventEmitter<SchemaValidationProblems>;
    readonly pathString = "";
    _record: Map<string, any>;
    tabNames: Array<string>;
    previews: Array<Preview>;
    isBottomConsoleOpen: boolean;
    isPreviewerHidden: boolean;
    isSidebarCollapsed: boolean;
    bottomConsoleActiveTab: string;
    customShortcutKeys: CustomShortcutKeys;
    fixedSchema: JSONSchema;
    private lastEmittedRecord;
    constructor(appGlobalsService: AppGlobalsService, problemsService: ProblemsService, jsonStoreService: JsonStoreService, jsonUtilService: JsonUtilService, jsonSchemaService: JsonSchemaService, keysStoreService: KeysStoreService, recordFixerService: RecordFixerService, schemaFixerService: SchemaFixerService, tabsUtilService: TabsUtilService, pathUtilService: PathUtilService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private throwInputUndefined;
    /**
     * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
     */
    private extractPreviews;
    get keys$(): ReplaySubject<Set<string>>;
    get isPreviewerDisabled(): boolean;
    set activeTabName(tabName: string);
    isActiveTab(tabName: any): boolean;
    get shorterEditorContainerClass(): string;
    openBottomConsole(tabName: string): void;
    trackByElement(index: number, element: any): any;
    static ɵfac: i0.ɵɵFactoryDef<JsonEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<JsonEditorComponent, "json-editor", never, { "config": "config"; "record": "record"; "schema": "schema"; "problemMap": "problemMap"; "jsonPatches": "jsonPatches"; "templates": "templates"; }, { "recordChange": "recordChange"; "jsonPatchesChange": "jsonPatchesChange"; "validationProblems": "validationProblems"; }, never, never>;
}
//# sourceMappingURL=json-editor.component.d.ts.map