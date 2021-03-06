import { OnInit, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { AppGlobalsService, PathUtilService, JsonStoreService, ProblemsService } from '../shared/services';
import { ValidationProblem, PathCache, JSONSchema, JsonPatch } from '../shared/interfaces';
import * as i0 from "@angular/core";
/**
 * This is the base class for fields
 * WARNING:
 *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
 *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
 *
 * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
 */
export declare abstract class AbstractFieldComponent extends AbstractSubscriberComponent implements OnInit, OnDestroy, OnChanges {
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    pathUtilService: PathUtilService;
    changeDetectorRef: ChangeDetectorRef;
    jsonStoreService: JsonStoreService;
    path: Array<any>;
    pathString: string;
    pathCache: PathCache;
    externalErrors: Array<ValidationProblem>;
    schema: JSONSchema;
    replaceJsonPatches: Array<JsonPatch>;
    addJsonPatches: Array<JsonPatch>;
    removeJsonPatch: JsonPatch;
    constructor(appGlobalsService: AppGlobalsService, problemsService: ProblemsService, pathUtilService: PathUtilService, changeDetectorRef: ChangeDetectorRef, jsonStoreService: JsonStoreService);
    ngOnInit(): void;
    private groupJsonPatchesByOp;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Gets path for child, returns from `pathCache` if it is a hit
     * in order not to re-render child component due to reference change its path.
     *
     * @param key - index or field name for child
     */
    getPathForChild(key: any): Array<any>;
    hasErrors(): boolean;
    get disabled(): boolean;
    get redLeftBorderClass(): string;
    trackByElement(index: number, element: any): any;
    trackByIndex(index: number, element: any): number;
    static ɵfac: i0.ɵɵFactoryDef<AbstractFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AbstractFieldComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=abstract-field.component.d.ts.map