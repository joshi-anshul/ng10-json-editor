import { TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { JsonEditorConfig } from '../interfaces';
import * as i0 from "@angular/core";
export declare class AppGlobalsService {
    readonly adminMode$: ReplaySubject<boolean>;
    activeTabName: string;
    tabNameToFirstTopLevelElement: {
        [tabName: string]: string;
    };
    templates: {
        [templateName: string]: TemplateRef<any>;
        patchesHeaderTemplate?: TemplateRef<any>;
    };
    config: JsonEditorConfig;
    private _adminMode;
    set adminMode(adminMode: boolean);
    get adminMode(): boolean;
    get firstElementPathForCurrentTab(): string;
    static ɵfac: i0.ɵɵFactoryDef<AppGlobalsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AppGlobalsService>;
}
//# sourceMappingURL=app-globals.service.d.ts.map