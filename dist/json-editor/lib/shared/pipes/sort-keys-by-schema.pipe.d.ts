import { PipeTransform } from '@angular/core';
import { JSONSchema } from '../interfaces';
import { CompareKeysBySchemaService } from '../services';
import * as i0 from "@angular/core";
export declare class SortKeysBySchemaPipe implements PipeTransform {
    private compareKeysBySchemaService;
    constructor(compareKeysBySchemaService: CompareKeysBySchemaService);
    /**
     * WARN: uses Array.sort hence mutates the first param
     *
     * @param keys keys in the object
     * @param schema schema of the parent object
     */
    transform(keys: Array<string>, schema: JSONSchema): Array<string>;
    static ɵfac: i0.ɵɵFactoryDef<SortKeysBySchemaPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SortKeysBySchemaPipe, "sortKeysBySchema">;
}
//# sourceMappingURL=sort-keys-by-schema.pipe.d.ts.map