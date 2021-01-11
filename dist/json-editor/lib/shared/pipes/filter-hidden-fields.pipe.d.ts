import { PipeTransform } from '@angular/core';
import { Set } from 'immutable';
import { JSONSchema } from '../interfaces';
import * as i0 from "@angular/core";
export declare class FilterHiddenFieldsPipe implements PipeTransform {
    /**
     * It filters out `hidden` fields
     *
     * @param keys
     * @param schema - the `schema` that has object schema which contains each key in `keys`
     * @return - filtered keys
     */
    transform(keys: Set<string>, schema: JSONSchema, adminMode: boolean): Set<string>;
    static ɵfac: i0.ɵɵFactoryDef<FilterHiddenFieldsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<FilterHiddenFieldsPipe, "filterHiddenFields">;
}
//# sourceMappingURL=filter-hidden-fields.pipe.d.ts.map