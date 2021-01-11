import { AppGlobalsService } from './app-globals.service';
import { JSONSchema, ValidationProblem } from '../interfaces';
import * as i0 from "@angular/core";
export declare class SchemaValidationService {
    appGlobalsService: AppGlobalsService;
    private ajv;
    private reWebUrl;
    constructor(appGlobalsService: AppGlobalsService);
    /**
     * Validates a specific value against schema
     *
     * Uses: ajv package for json-schema validation
     *
     */
    validateValue(value: any, schema: JSONSchema): Array<ValidationProblem>;
    static ɵfac: i0.ɵɵFactoryDef<SchemaValidationService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SchemaValidationService>;
}
//# sourceMappingURL=schema-validation.service.d.ts.map