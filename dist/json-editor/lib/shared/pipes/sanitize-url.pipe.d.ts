import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SanitizeUrlPipe implements PipeTransform {
    domSanitizer: DomSanitizer;
    constructor(domSanitizer: DomSanitizer);
    /**
     * Transforms url to safe url that can be used for `<script src>` or `<iframe src>`
     *
     * @param {string} url
     * @return {SafeResourceUrl}
     */
    transform(url: string): SafeResourceUrl;
    static ɵfac: i0.ɵɵFactoryDef<SanitizeUrlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SanitizeUrlPipe, "sanitizeUrl">;
}
//# sourceMappingURL=sanitize-url.pipe.d.ts.map