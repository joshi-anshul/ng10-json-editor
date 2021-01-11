import { JSONSchema } from '../interfaces';
import * as i0 from "@angular/core";
export declare class ComponentTypeService {
    /**
     * It returns the editor specific type of given schema
     * In other words, which component to use for given schema.
     *
     * Possible values:
     *  - string, number, boolean, object, enum
     *  - primitive-list, table-list, complex-list
     *  - disabled, autocomplete
     *
     * @param {Object} schema
     * @return {string}
     */
    getComponentType(schema: JSONSchema): string;
    static ɵfac: i0.ɵɵFactoryDef<ComponentTypeService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ComponentTypeService>;
}
//# sourceMappingURL=component-type.service.d.ts.map