import { JsonStoreService } from '../shared/services';
import { JsonPatch } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class PatchActionsComponent {
    private jsonStoreService;
    patch: JsonPatch;
    addActionEnabled: boolean;
    constructor(jsonStoreService: JsonStoreService);
    onAcceptClick(): void;
    onRejectClick(): void;
    onAddNewClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<PatchActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PatchActionsComponent, "patch-actions", never, { "patch": "patch"; "addActionEnabled": "addActionEnabled"; }, {}, never, never>;
}
//# sourceMappingURL=patch-actions.component.d.ts.map