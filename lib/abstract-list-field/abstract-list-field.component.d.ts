import { ChangeDetectorRef } from '@angular/core';
import { List } from 'immutable';
import { AbstractFieldComponent } from '../abstract-field';
import { JsonStoreService, AppGlobalsService, PathUtilService, ProblemsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
/**
 * Abstract component to share code of common operations of all array fields
 *
 * Instance properties declared here only to resolve syntax errors.
 * Hence they need to be declared in children extending components (with decarators if necessary)
 */
export declare abstract class AbstractListFieldComponent extends AbstractFieldComponent {
    appGlobalsService: AppGlobalsService;
    problemsService: ProblemsService;
    jsonStoreService: JsonStoreService;
    pathUtilService: PathUtilService;
    changeDetectorRef: ChangeDetectorRef;
    values: List<any>;
    schema: JSONSchema;
    path: Array<any>;
    constructor(appGlobalsService: AppGlobalsService, problemsService: ProblemsService, jsonStoreService: JsonStoreService, pathUtilService: PathUtilService, changeDetectorRef: ChangeDetectorRef);
    /**
     * @param index - Index of the element that is moved
     * @param  direction - Movement direction. -1 for UP, +1 for DOWN
     */
    moveElement(index: number, direction: number): void;
    /**
     * @param index - Index of the element to be deleted
     */
    deleteElement(index: number): void;
    getPathStringForChild(index: number): string;
    hasPatchOrChildrenHavePatch(): boolean;
}
//# sourceMappingURL=abstract-list-field.component.d.ts.map