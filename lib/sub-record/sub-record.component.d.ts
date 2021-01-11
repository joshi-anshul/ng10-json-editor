import { OnChanges, SimpleChanges } from '@angular/core';
import { Map, Set } from 'immutable';
import { PathCache, JSONSchema } from '../shared/interfaces';
import { JsonStoreService, AppGlobalsService, TabsUtilService, KeysStoreService } from '../shared/services';
import * as i0 from "@angular/core";
export declare class SubRecordComponent implements OnChanges {
    jsonStoreService: JsonStoreService;
    appGlobalsService: AppGlobalsService;
    tabsUtilService: TabsUtilService;
    keysStoreService: KeysStoreService;
    value: Map<string, any>;
    schema: JSONSchema;
    tabName: string;
    keys: Set<string>;
    pathString: string;
    keysByType: {
        others: Set<string>;
        toggles: Set<string>;
    };
    pathCache: PathCache;
    constructor(jsonStoreService: JsonStoreService, appGlobalsService: AppGlobalsService, tabsUtilService: TabsUtilService, keysStoreService: KeysStoreService);
    ngOnChanges(changes: SimpleChanges): void;
    deleteField(field: string): void;
    getPathForChild(key: string): Array<any>;
    onToggleValueChange(field: string, value: boolean): void;
    private isToggle;
    isDisabled(key: any): boolean;
    trackByElement(index: number, element: any): any;
    getTitleDropdownItemTemplateNamesForChild(key: string): Array<string>;
    static ɵfac: i0.ɵɵFactoryDef<SubRecordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SubRecordComponent, "sub-record", never, { "value": "value"; "schema": "schema"; "tabName": "tabName"; "keys": "keys"; "pathString": "pathString"; }, {}, never, never>;
}
//# sourceMappingURL=sub-record.component.d.ts.map