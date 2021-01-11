import { OnChanges, SimpleChanges } from '@angular/core';
import { JsonPatch, JSONSchema } from '../shared/interfaces';
import { JsonSchemaService } from '../shared/services';
import * as i0 from "@angular/core";
export declare class AddOrReplacePatchComponent implements OnChanges {
    private jsonSchemaService;
    patch: JsonPatch;
    schema: JSONSchema;
    constructor(jsonSchemaService: JsonSchemaService);
    ngOnChanges(changes: SimpleChanges): void;
    get leftBorderClass(): string;
    static ɵfac: i0.ɵɵFactoryDef<AddOrReplacePatchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AddOrReplacePatchComponent, "add-or-replace-patch", never, { "patch": "patch"; }, {}, never, never>;
}
//# sourceMappingURL=add-or-replace-patch.component.d.ts.map