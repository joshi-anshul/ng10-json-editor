import { JSONSchema } from '../interfaces';
import { PathUtilService } from './path-util.service';
import * as i0 from "@angular/core";
export declare class JsonSchemaService {
    private pathUtilService;
    private schema;
    constructor(pathUtilService: PathUtilService);
    setSchema(schema: JSONSchema): void;
    /**
     * Returns the schema extracted from this path
     */
    forPathArray(path: Array<any>): JSONSchema;
    /**
     * Returns the schema extracted from the json-pointer string
     */
    forPathString(path: string): JSONSchema;
    static ɵfac: i0.ɵɵFactoryDef<JsonSchemaService, never>;
    static ɵprov: i0.ɵɵInjectableDef<JsonSchemaService>;
}
//# sourceMappingURL=json-schema.service.d.ts.map