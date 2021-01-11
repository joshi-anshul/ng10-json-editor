import { Map } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { PathUtilService } from './path-util.service';
import { KeysStoreService } from './keys-store.service';
import { JsonPatch, JsonPatchesByPath } from '../interfaces';
import * as i0 from "@angular/core";
export declare class JsonStoreService {
    private pathUtilService;
    private keysStoreService;
    readonly patchesByPath$: ReplaySubject<JsonPatchesByPath>;
    readonly json$: Subject<Map<string, any>>;
    readonly jsonPatches$: Subject<JsonPatch[]>;
    private patchesByPath;
    private json;
    private jsonPatches;
    private history;
    constructor(pathUtilService: PathUtilService, keysStoreService: KeysStoreService);
    setIn(path: Array<any>, value: any, allowUndo?: boolean): void;
    private setEmptyListBeforeEachIndexInPath;
    getIn(path: Array<any>, notSetValue?: any): any;
    removeIn(path: Array<any>): void;
    private pushRevertPatchToHistory;
    addIn(path: Array<any>, value: any): void;
    private toImmutable;
    /**
     * Moves the element at given index UP or DOWN within the list
     * @param listPath path to a list in json
     * @param index index of the element that is being moved
     * @param direction 1 for DOWN, -1 for UP movement
     * @return new path of the moved element
     */
    moveIn(listPath: Array<any>, index: number, direction: number): Array<any>;
    setJson(json: Map<string, any>): void;
    setJsonPatches(patches: Array<JsonPatch>): void;
    rollbackLastChange(): string;
    applyPatch(patch: JsonPatch, allowUndo?: boolean): void;
    rejectPatch(patch: JsonPatch): void;
    hasPatch(path: string): boolean;
    hasPatchOrChildrenHavePatch(path: string): boolean;
    private removeJsonPatch;
    private getComponentPathForPatch;
    private getParentPath;
    static ɵfac: i0.ɵɵFactoryDef<JsonStoreService, never>;
    static ɵprov: i0.ɵɵInjectableDef<JsonStoreService>;
}
//# sourceMappingURL=json-store.service.d.ts.map