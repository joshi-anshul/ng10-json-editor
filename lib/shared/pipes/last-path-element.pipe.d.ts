import { PipeTransform } from '@angular/core';
import { PathUtilService } from '../services';
import * as i0 from "@angular/core";
/**
 * Returs last part of json-pointer string
 * Example: for '/foo/bar/0/thing', returs 'thing'
 */
export declare class LastPathElementPipe implements PipeTransform {
    private pathUtilService;
    constructor(pathUtilService: PathUtilService);
    transform(path: string): string;
    static ɵfac: i0.ɵɵFactoryDef<LastPathElementPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<LastPathElementPipe, "lastPathElement">;
}
//# sourceMappingURL=last-path-element.pipe.d.ts.map