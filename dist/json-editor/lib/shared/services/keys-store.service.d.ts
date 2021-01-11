import { Map, OrderedSet } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { JSONSchema } from '../interfaces';
import { PathUtilService } from './path-util.service';
import { JsonSchemaService } from './json-schema.service';
import { AppGlobalsService } from './app-globals.service';
import { CompareKeysBySchemaService } from './compare-keys-by-schema.service';
import * as i0 from "@angular/core";
export declare class KeysStoreService {
    private appGlobalsService;
    private pathUtilService;
    private jsonSchemaService;
    private compareKeysBySchemaService;
    private keys$Map;
    keysMap: {
        [path: string]: OrderedSet<string>;
    };
    onKeysChange: Subject<{
        path: string;
        keys: OrderedSet<string>;
    }>;
    constructor(appGlobalsService: AppGlobalsService, pathUtilService: PathUtilService, jsonSchemaService: JsonSchemaService, compareKeysBySchemaService: CompareKeysBySchemaService);
    forPath(path: string): ReplaySubject<OrderedSet<string>>;
    /**
     * Adds a key to the specified path.
     *
     * @param path path to add the key to
     * @param key key to be added
     * @param schema schema that belongs to path (schema.items for table-list)
     */
    addKey(path: string, key: string, schema: JSONSchema, value?: any): string;
    deletePath(path: Array<any>): void;
    /**
     * Sync keys in store for the given path or its parent, grand parent etc. if necessary
     *
     * @param path path to the (re)set field
     * @param json whole json
     */
    syncKeysForPath(path: Array<any>, json: Map<string, any>): void;
    deleteKey(parentPath: string, key: string): void;
    /**
     * Swaps keys of given two indices in object list recursively
     */
    swapListElementKeys(listPath: Array<any>, index1: number, index2: number): void;
    buildKeysMap(json: Map<string, any>, schema: JSONSchema): void;
    buildKeysMapRecursivelyForPath(mapOrList: any, path: string | Array<any>, schema?: JSONSchema): void;
    private buildKeysForTableList;
    private buildkeysForObject;
    /**
     * Filters keys, add alwaysShow fields and sorts by schema.
     */
    private schemafy;
    private isNotHidden;
    private isObjectOrArray;
    private setKeys;
    static ɵfac: i0.ɵɵFactoryDef<KeysStoreService, never>;
    static ɵprov: i0.ɵɵInjectableDef<KeysStoreService>;
}
//# sourceMappingURL=keys-store.service.d.ts.map