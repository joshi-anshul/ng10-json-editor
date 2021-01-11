import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractFieldComponent } from '../abstract-field';
import { AppGlobalsService, ProblemsService, ComponentTypeService, JsonStoreService, KeysStoreService, SchemaValidationService, PathUtilService, DomUtilService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import { ValidationProblem } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class PrimitiveFieldComponent extends AbstractFieldComponent implements OnInit, OnDestroy {
    schemaValidationService: SchemaValidationService;
    componentTypeService: ComponentTypeService;
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    jsonStoreService: JsonStoreService;
    keysStoreService: KeysStoreService;
    pathUtilService: PathUtilService;
    domUtilService: DomUtilService;
    changeDetectorRef: ChangeDetectorRef;
    schema: JSONSchema;
    path: Array<any>;
    value: string | number | boolean;
    internalErrors: Array<ValidationProblem>;
    private lastCommitedValue;
    constructor(schemaValidationService: SchemaValidationService, componentTypeService: ComponentTypeService, appGlobalsService: AppGlobalsService, problemsService: ProblemsService, jsonStoreService: JsonStoreService, keysStoreService: KeysStoreService, pathUtilService: PathUtilService, domUtilService: DomUtilService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    commitValueChange(): void;
    onBlur(): void;
    onKeypress(event: KeyboardEvent): void;
    onValueChange(value: string): void;
    onSearchableDropdownSelect(value: string): void;
    onCompletionSelect(selection: string | object): void;
    get tabIndex(): number;
    get tooltipPosition(): string;
    hasErrors(): boolean;
    get errorClass(): string;
    get isPathToAnIndex(): boolean;
    private validate;
    static ɵfac: i0.ɵɵFactoryDef<PrimitiveFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PrimitiveFieldComponent, "primitive-field", never, { "schema": "schema"; "path": "path"; "value": "value"; }, {}, never, never>;
}
//# sourceMappingURL=primitive-field.component.d.ts.map