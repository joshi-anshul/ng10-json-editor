import { ChangeDetectorRef } from '@angular/core';
import { Set } from 'immutable';
import { AbstractFieldComponent } from '../abstract-field';
import { AppGlobalsService, JsonStoreService, PathUtilService, ProblemsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class TableItemFieldComponent extends AbstractFieldComponent {
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    jsonStoreService: JsonStoreService;
    pathUtilService: PathUtilService;
    changeDetectorRef: ChangeDetectorRef;
    value: Map<string, any>;
    schema: JSONSchema;
    path: Array<any>;
    keys: Set<string>;
    constructor(appGlobalsService: AppGlobalsService, problemsService: ProblemsService, jsonStoreService: JsonStoreService, pathUtilService: PathUtilService, changeDetectorRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<TableItemFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableItemFieldComponent, "[table-item-field]", never, { "value": "value"; "schema": "schema"; "path": "path"; "keys": "keys"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=table-item-field.component.d.ts.map