import { ReplaySubject } from 'rxjs';
import { TabsConfig, JSONSchema } from '../interfaces';
import { PathUtilService } from './path-util.service';
import * as i0 from "@angular/core";
export declare class TabsUtilService {
    pathUtilService: PathUtilService;
    private schemaKeyToTabName;
    readonly activeTabName$: ReplaySubject<string>;
    constructor(pathUtilService: PathUtilService);
    getTabNames(tabsConfig: TabsConfig): Array<string>;
    getSchemaKeyToTabName(tabsConfig: TabsConfig, schema: JSONSchema): {
        [key: string]: string;
    };
    selectTabIfNeeded(path: string): void;
    static ɵfac: i0.ɵɵFactoryDef<TabsUtilService, never>;
    static ɵprov: i0.ɵɵInjectableDef<TabsUtilService>;
}
//# sourceMappingURL=tabs-util.service.d.ts.map