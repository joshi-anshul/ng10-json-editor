import { OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Set } from 'immutable';
import { Subscription } from 'rxjs';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { DomUtilService, PathUtilService, KeysStoreService, JsonSchemaService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class AddNestedFieldDropdownComponent extends AbstractSubscriberComponent implements OnChanges, OnDestroy {
    keysStoreService: KeysStoreService;
    jsonSchemaService: JsonSchemaService;
    pathUtilService: PathUtilService;
    domUtilService: DomUtilService;
    schema: JSONSchema;
    pathString: string;
    isDisabled: boolean;
    nestedKeysMap: {
        [path: string]: Set<string>;
    };
    keysChangeSubscription: Subscription;
    constructor(keysStoreService: KeysStoreService, jsonSchemaService: JsonSchemaService, pathUtilService: PathUtilService, domUtilService: DomUtilService);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Return keys that could be added for the given path.
     *
     * @return schema key - hidden keys - existing keys
     */
    addableKeysForPath(path: string): Set<string>;
    onFieldSelect(path: string, key: string): void;
    static ɵfac: i0.ɵɵFactoryDef<AddNestedFieldDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AddNestedFieldDropdownComponent, "add-nested-field-dropdown", never, { "schema": "schema"; "pathString": "pathString"; "isDisabled": "isDisabled"; }, {}, never, never>;
}
//# sourceMappingURL=add-nested-field-dropdown.component.d.ts.map