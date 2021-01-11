import { OnChanges, SimpleChanges } from '@angular/core';
import { Map, Set } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { DomUtilService, PathUtilService, AppGlobalsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class TreeMenuComponent implements OnChanges {
    private domUtilService;
    private pathUtilService;
    private appGlobalsService;
    record: Map<string, any>;
    schema: JSONSchema;
    keys: Set<string>;
    private prefixOrPath;
    constructor(domUtilService: DomUtilService, pathUtilService: PathUtilService, appGlobalsService: AppGlobalsService);
    ngOnChanges(changes: SimpleChanges): void;
    getChildPath(key: string): string;
    trackByElement(index: number, element: any): any;
    get adminMode$(): ReplaySubject<boolean>;
    static ɵfac: i0.ɵɵFactoryDef<TreeMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TreeMenuComponent, "tree-menu", never, { "record": "record"; "schema": "schema"; }, {}, never, never>;
}
//# sourceMappingURL=tree-menu.component.d.ts.map