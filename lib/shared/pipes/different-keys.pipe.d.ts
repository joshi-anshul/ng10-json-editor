import { PipeTransform } from '@angular/core';
import { Set } from 'immutable';
import * as i0 from "@angular/core";
/**
 * It returns array of keys which aren't present in given object
 */
export declare class DifferentKeysPipe implements PipeTransform {
    transform(object: object, keys: Set<string>): Set<string>;
    static ɵfac: i0.ɵɵFactoryDef<DifferentKeysPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<DifferentKeysPipe, "differentKeys">;
}
//# sourceMappingURL=different-keys.pipe.d.ts.map