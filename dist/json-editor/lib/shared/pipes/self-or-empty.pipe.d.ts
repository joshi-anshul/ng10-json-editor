import { PipeTransform } from '@angular/core';
import { EmptyValueService } from '../services';
import { JSONSchema } from '../interfaces';
import * as i0 from "@angular/core";
export declare class SelfOrEmptyPipe implements PipeTransform {
    emptyValueService: EmptyValueService;
    constructor(emptyValueService: EmptyValueService);
    /**
     * Transforms a value to empty value if it is undefined,
     * returns self if it is already defined
     *
     * @return - empty value if given value is undefined or value itself.
     */
    transform(value: any, schema: JSONSchema): any;
    static ɵfac: i0.ɵɵFactoryDef<SelfOrEmptyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SelfOrEmptyPipe, "selfOrEmpty">;
}
//# sourceMappingURL=self-or-empty.pipe.d.ts.map