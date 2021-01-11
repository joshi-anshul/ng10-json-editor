import { ChangeDetectorRef } from '@angular/core';
import { List } from 'immutable';
import { AbstractListFieldComponent } from '../abstract-list-field';
import { AppGlobalsService, JsonStoreService, PathUtilService, ProblemsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class PrimitiveListFieldComponent extends AbstractListFieldComponent {
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    jsonStoreService: JsonStoreService;
    pathUtilService: PathUtilService;
    changeDetectorRef: ChangeDetectorRef;
    values: List<any>;
    schema: JSONSchema;
    path: Array<any>;
    constructor(appGlobalsService: AppGlobalsService, problemsService: ProblemsService, jsonStoreService: JsonStoreService, pathUtilService: PathUtilService, changeDetectorRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<PrimitiveListFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PrimitiveListFieldComponent, "primitive-list-field", never, { "values": "values"; "schema": "schema"; "path": "path"; }, {}, never, never>;
}
//# sourceMappingURL=primitive-list-field.component.d.ts.map