import { JsonUtilService } from './json-util.service';
import { ComponentTypeService } from './component-type.service';
import { JSONSchema, SchemaOptions } from '../interfaces';
import * as i0 from "@angular/core";
export declare class SchemaFixerService {
    private jsonUtilService;
    private componentTypeService;
    constructor(jsonUtilService: JsonUtilService, componentTypeService: ComponentTypeService);
    /**
     * Fixes schema to be in a format that expected by json-editor
     *
     * @param schema - json schema
     * @param config - schema specific options
     * @return - fixed schema
     */
    fixSchema(originalSchema: JSONSchema, config?: SchemaOptions): JSONSchema;
    /**
     * Enriches given schema with given configuration objects
     * puts config into correct places in schema.
     *
     * @param schema - json schema
     * @param config - schema specific options
     */
    private enrichSchemaWithConfig;
    /**
     * Applies all fixes to schema recursively
     */
    private fixRecursively;
    /**
     * Fixes disabled config to assign the disabled attribute
     * to array items or object properties
     */
    private fixDisabled;
    /**
     * Fixes order config to assign the right priority to properties
     */
    private fixOrder;
    /**
     * Fixes anyOf schemas with exactly same property structure
     * it merges all enum fields in anyOf elements
     */
    private fixAnyOf;
    private fixAllOf;
    /**
     * Adds keys that matches `alwaysShowRegExp` to `alwaysShow`.
     * Passes `alwaysShowRegExp` down to children so that it is applied recursively.
     */
    private fixAlwaysShowRegExp;
    /**
     * Removes alwayShow fields that aren't in the schema.properties
     * and warns on console.
     */
    private fixAlwaysShow;
    static ɵfac: i0.ɵɵFactoryDef<SchemaFixerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SchemaFixerService>;
}
//# sourceMappingURL=schema-fixer.service.d.ts.map