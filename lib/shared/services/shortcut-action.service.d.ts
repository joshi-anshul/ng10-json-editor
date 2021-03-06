import { EmptyValueService } from './empty-value.service';
import { JsonStoreService } from './json-store.service';
import { JsonSchemaService } from './json-schema.service';
import { DomUtilService } from './dom-util.service';
import { PathUtilService } from './path-util.service';
import { KeysStoreService } from './keys-store.service';
import { ShortcutActionFunction } from '../interfaces';
import * as i0 from "@angular/core";
export declare class ShortcutActionService {
    emptyValueService: EmptyValueService;
    domUtilService: DomUtilService;
    jsonStoreService: JsonStoreService;
    jsonSchemaService: JsonSchemaService;
    pathUtilService: PathUtilService;
    keysStoreService: KeysStoreService;
    constructor(emptyValueService: EmptyValueService, domUtilService: DomUtilService, jsonStoreService: JsonStoreService, jsonSchemaService: JsonSchemaService, pathUtilService: PathUtilService, keysStoreService: KeysStoreService);
    addToRootAction(path: Array<any>): void;
    addAction(path: Array<any>): void;
    private add;
    /**
     * @param path - Path of the array parent that the element is about to be inserted
     * @param schema - Schema of the element that is about to be inserted
     */
    private addNewElementInArray;
    addBelowToRootAction(path: Array<any>): void;
    moveUpAction(path: Array<any>): void;
    moveDownAction(path: Array<any>): void;
    moveUpRootAction(path: Array<any>): void;
    moveDownRootAction(path: Array<any>): void;
    /**
     * @param path - Path of the element that is moved
     * @param direction - Movement direction. -1 for UP, +1 for DOWN
     */
    private move;
    deleteAction(path: Array<any>): void;
    /**
     * @param path - Path of the element's array parent
     * @param index - Index of the element that is deleted from array parent path
     */
    private deleteElement;
    navigateUpAction(path: Array<any>): void;
    navigateDownAction(path: Array<any>): void;
    /**
     * @param path - Path of the element that is focused
     * @param direction - Navigation direction. -1 for UP, +1 for DOWN
     */
    private navigateUpDown;
    navigateLeftAction(path: Array<any>): void;
    navigateRightAction(path: Array<any>): void;
    /**
     * @param path - Path of the element that is focused
     * @param direction - Navigation direction. -1 for LEFT, +1 for RIGHT
     */
    private navigateRightLeft;
    /**
     * Copies the current row in table below and sets the value of the previous focused field to empty in the new row
     * @param path - Path
     */
    copyAction(path: Array<any>): void;
    /**
     * Copies the root parent element below(eg creates a new author in authors list)
     * when you edit an author's field)
     * @param path - Path
     */
    copyFromRootAction(path: Array<any>): void;
    /**
     * @param originalPath - Path of the element that is copied
     * @param root - Copy item from parent or root. Set to true for usage as in `copyFromRootAction` and false
     * for usage as in `copyAction`
     */
    private copyRowOrSchemaBelow;
    undoAction(): void;
    private waitThenFocus;
    generateShortcutAction(actionName: string): ShortcutActionFunction;
    static ɵfac: i0.ɵɵFactoryDef<ShortcutActionService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ShortcutActionService>;
}
//# sourceMappingURL=shortcut-action.service.d.ts.map