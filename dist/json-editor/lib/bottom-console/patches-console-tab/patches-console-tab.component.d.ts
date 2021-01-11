import { OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { AbstractSubscriberComponent } from '../../abstract-subscriber';
import { DomUtilService, PathUtilService, JsonStoreService, AppGlobalsService } from '../../shared/services';
import { JsonPatch, JsonPatchesByPath } from '../../shared/interfaces';
import * as i0 from "@angular/core";
export declare class PatchesConsoleTabComponent extends AbstractSubscriberComponent implements OnInit {
    private domUtilService;
    private appGlobalsService;
    private pathUtilService;
    private jsonStoreService;
    private changeDetectorRef;
    patchesByPath: JsonPatchesByPath;
    constructor(domUtilService: DomUtilService, appGlobalsService: AppGlobalsService, pathUtilService: PathUtilService, jsonStoreService: JsonStoreService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    focusPatch(patch: JsonPatch): void;
    get patches(): Array<JsonPatch>;
    get customHeaderTemplate(): TemplateRef<any>;
    acceptAll(): void;
    rejectAll(): void;
    static ɵfac: i0.ɵɵFactoryDef<PatchesConsoleTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PatchesConsoleTabComponent, "patches-console-tab", never, {}, {}, never, never>;
}
//# sourceMappingURL=patches-console-tab.component.d.ts.map