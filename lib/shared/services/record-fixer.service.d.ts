import { EmptyValueService } from './empty-value.service';
import { ComponentTypeService } from './component-type.service';
import { JSONSchema } from '../interfaces';
import * as i0 from "@angular/core";
export declare class RecordFixerService {
    private emptyValueService;
    private componentTypeService;
    constructor(emptyValueService: EmptyValueService, componentTypeService: ComponentTypeService);
    /**
     * Fixes given record according to given schema, in other words
     * changes it to match the format expected the by te json-editor
     *
     * @param rawRecord - json record to be fixed
     * @param schema - extended schema of rawRecord
     * @return - fixed record
     */
    fixRecord(rawRecord: object, schema: JSONSchema): object;
    /**
     * Visits all parts of record recursivly, along with the subschema of the part
     * and apply required fixes.
     *
     * NOTE: the reason that parent and key are passed instead of the direct value
     * is to be able do some operations that needs the parent such as `delete`.
     *
     * TODO: add special case for arrays because fixes are the same for
     * all elements.
     *
     * @param key - field name or element index
     * @param parent - parent of the field/element
     * @param schema - schema of visited field/element
     */
    private fix;
    /**
     * Deletes given field from the given object.
     * Used for deleting fields that aren't on the schema.
     *
     * TODO: replace this with only `delete` when logging is not necessary!
     */
    private deleteField;
    static ɵfac: i0.ɵɵFactoryDef<RecordFixerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RecordFixerService>;
}
//# sourceMappingURL=record-fixer.service.d.ts.map