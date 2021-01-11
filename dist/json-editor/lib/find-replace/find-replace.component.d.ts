import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FindReplaceAllService, JsonStoreService, ModalService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class FindReplaceComponent {
    changeDetectionRef: ChangeDetectorRef;
    domSanitizer: DomSanitizer;
    findReplaceAllService: FindReplaceAllService;
    jsonStoreService: JsonStoreService;
    modalService: ModalService;
    path: Array<any>;
    schema: JSONSchema;
    private replaced;
    find: string;
    replace: string;
    exactPhrase: boolean;
    constructor(changeDetectionRef: ChangeDetectorRef, domSanitizer: DomSanitizer, findReplaceAllService: FindReplaceAllService, jsonStoreService: JsonStoreService, modalService: ModalService);
    onKeypress(key: string): void;
    findAndReplace(): void;
    private cleanParameters;
    static ɵfac: i0.ɵɵFactoryDef<FindReplaceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FindReplaceComponent, "find-replace", never, { "path": "path"; "schema": "schema"; }, {}, never, never>;
}
//# sourceMappingURL=find-replace.component.d.ts.map