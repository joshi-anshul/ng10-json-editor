import { DomUtilService, EmptyValueService, JsonStoreService, PathUtilService, KeysStoreService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class AddNewElementButtonComponent {
    domUtilService: DomUtilService;
    emptyValueService: EmptyValueService;
    jsonStoreService: JsonStoreService;
    pathUtilService: PathUtilService;
    keyStoreService: KeysStoreService;
    path: Array<any>;
    schema: JSONSchema;
    constructor(domUtilService: DomUtilService, emptyValueService: EmptyValueService, jsonStoreService: JsonStoreService, pathUtilService: PathUtilService, keyStoreService: KeysStoreService);
    addNewElement(): void;
    static ɵfac: i0.ɵɵFactoryDef<AddNewElementButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AddNewElementButtonComponent, "add-new-element-button", never, { "path": "path"; "schema": "schema"; }, {}, never, never>;
}
//# sourceMappingURL=add-new-element-button.component.d.ts.map