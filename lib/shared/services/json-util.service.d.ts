import { PathUtilService } from './path-util.service';
import * as i0 from "@angular/core";
export declare class JsonUtilService {
    private pathUtilService;
    constructor(pathUtilService: PathUtilService);
    /**
     * Returns value of the property located in dot separated path of json.
     */
    getValueInPath(json: any, path: string): any;
    static ɵfac: i0.ɵɵFactoryDef<JsonUtilService, never>;
    static ɵprov: i0.ɵɵInjectableDef<JsonUtilService>;
}
//# sourceMappingURL=json-util.service.d.ts.map