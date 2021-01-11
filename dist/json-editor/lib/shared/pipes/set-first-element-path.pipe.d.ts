import { PipeTransform } from '@angular/core';
import { Set } from 'immutable';
import { AppGlobalsService, PathUtilService } from '../services';
import * as i0 from "@angular/core";
export declare class SetFirstElementPathPipe implements PipeTransform {
    appGlobalsService: AppGlobalsService;
    pathUtilService: PathUtilService;
    constructor(appGlobalsService: AppGlobalsService, pathUtilService: PathUtilService);
    transform(fields: Set<string>, tabName: string): Set<string>;
    static ɵfac: i0.ɵɵFactoryDef<SetFirstElementPathPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SetFirstElementPathPipe, "setFirstElementPath">;
}
//# sourceMappingURL=set-first-element-path.pipe.d.ts.map