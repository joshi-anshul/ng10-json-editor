import { JSONSchema } from '../interfaces';
import * as i0 from "@angular/core";
export declare class FindReplaceAllService {
    /**
     * Does deep replace when it finds the occurance in an immutable List and Map
     * uses schema to skip disabled properties
     *
     * @param {List<any> | Map<string, any} immutable
     * @param {Object} schema
     * @param {string} find
     * @param {replace} replace
     * @param {boolean} matchWhole - looks for whole match to a string property of immutable
     * @param {Array<any> | Object} diffHtml - TODO: describe
     */
    findReplaceInImmutable(immutable: any, schema: JSONSchema, find: string, replace: string, exact?: boolean, diffHtml?: Array<any> | Object): {
        replaced: any;
        diffHtml: Array<any> | Object;
    };
    static ɵfac: i0.ɵɵFactoryDef<FindReplaceAllService, never>;
    static ɵprov: i0.ɵɵInjectableDef<FindReplaceAllService>;
}
//# sourceMappingURL=find-replace-all.service.d.ts.map