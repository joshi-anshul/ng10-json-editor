import { ChangeDetectorRef } from '@angular/core';
import { List, Map, Set } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { AbstractListFieldComponent } from '../abstract-list-field';
import { AppGlobalsService, JsonStoreService, PathUtilService, KeysStoreService, ProblemsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class TableListFieldComponent extends AbstractListFieldComponent {
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    jsonStoreService: JsonStoreService;
    pathUtilService: PathUtilService;
    keysStoreService: KeysStoreService;
    changeDetectorRef: ChangeDetectorRef;
    values: List<Map<string, any>>;
    schema: JSONSchema;
    path: Array<any>;
    constructor(appGlobalsService: AppGlobalsService, problemsService: ProblemsService, jsonStoreService: JsonStoreService, pathUtilService: PathUtilService, keysStoreService: KeysStoreService, changeDetectorRef: ChangeDetectorRef);
    get keys$(): ReplaySubject<Set<string>>;
    static ɵfac: i0.ɵɵFactoryDef<TableListFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableListFieldComponent, "table-list-field", never, { "values": "values"; "schema": "schema"; "path": "path"; }, {}, never, never>;
}
//# sourceMappingURL=table-list-field.component.d.ts.map