import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
/**
 * AnyFieldComponent
 *
 * This is a dummy component that has no logic, just passes @Input to its child and
 * propagates its child's output to its parent.
 *
 * IMPORTANT:
 * On the other hand it has smart template which has logic to decide which type of
 * component to use according to schema.
 */
export declare class AnyTypeFieldComponent {
    schema: JSONSchema;
    path: Array<any>;
    value: any;
    static ɵfac: i0.ɵɵFactoryDef<AnyTypeFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AnyTypeFieldComponent, "any-type-field", never, { "schema": "schema"; "path": "path"; "value": "value"; }, {}, never, never>;
}
//# sourceMappingURL=any-type-field.component.d.ts.map