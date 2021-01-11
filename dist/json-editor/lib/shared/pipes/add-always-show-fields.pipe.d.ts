import { PipeTransform } from '@angular/core';
import { Set } from 'immutable';
import { JSONSchema } from '../interfaces';
import * as i0 from "@angular/core";
export declare class AddAlwaysShowFieldsPipe implements PipeTransform {
    transform(fields: Set<string>, schema: JSONSchema): Set<string>;
    static ɵfac: i0.ɵɵFactoryDef<AddAlwaysShowFieldsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<AddAlwaysShowFieldsPipe, "addAlwaysShowFields">;
}
//# sourceMappingURL=add-always-show-fields.pipe.d.ts.map