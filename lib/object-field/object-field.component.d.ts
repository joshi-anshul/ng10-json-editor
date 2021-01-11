import { ChangeDetectorRef } from '@angular/core';
import { Map, Set } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { AbstractFieldComponent } from '../abstract-field';
import { AppGlobalsService, JsonStoreService, PathUtilService, KeysStoreService, ProblemsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class ObjectFieldComponent extends AbstractFieldComponent {
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    jsonStoreService: JsonStoreService;
    pathUtilService: PathUtilService;
    changeDetectorRef: ChangeDetectorRef;
    keysStoreService: KeysStoreService;
    value: Map<string, any>;
    schema: JSONSchema;
    path: Array<any>;
    isComplexListFieldItem: boolean;
    constructor(appGlobalsService: AppGlobalsService, problemsService: ProblemsService, jsonStoreService: JsonStoreService, pathUtilService: PathUtilService, changeDetectorRef: ChangeDetectorRef, keysStoreService: KeysStoreService);
    get keys$(): ReplaySubject<Set<string>>;
    deleteField(name: string): void;
    isPropertyDisabled(name: string): boolean;
    getTitleDropdownItemTemplateNamesForChild(key: string): Array<string>;
    static ɵfac: i0.ɵɵFactoryDef<ObjectFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ObjectFieldComponent, "object-field", never, { "value": "value"; "schema": "schema"; "path": "path"; "isComplexListFieldItem": "isComplexListFieldItem"; }, {}, never, never>;
}
//# sourceMappingURL=object-field.component.d.ts.map