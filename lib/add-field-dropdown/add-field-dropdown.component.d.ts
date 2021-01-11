import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Set } from 'immutable';
import { DomUtilService, KeysStoreService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class AddFieldDropdownComponent implements OnChanges {
    private elementRef;
    private domUtilService;
    private keysStoreService;
    schema: JSONSchema;
    fields: Set<string>;
    pathString: string;
    isDisabled: boolean;
    addableKeys: any;
    expression: string;
    hidden: boolean;
    constructor(elementRef: ElementRef, domUtilService: DomUtilService, keysStoreService: KeysStoreService);
    ngOnChanges(changes: SimpleChanges): void;
    onDropdownShown(): void;
    onFieldSelect(field: string): void;
    static ɵfac: i0.ɵɵFactoryDef<AddFieldDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AddFieldDropdownComponent, "add-field-dropdown", never, { "schema": "schema"; "fields": "fields"; "pathString": "pathString"; "isDisabled": "isDisabled"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=add-field-dropdown.component.d.ts.map