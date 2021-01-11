/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
 */
import { Injectable } from '@angular/core';
import { List } from 'immutable';
import * as i0 from "@angular/core";
import * as i1 from "./empty-value.service";
import * as i2 from "./dom-util.service";
import * as i3 from "./json-store.service";
import * as i4 from "./json-schema.service";
import * as i5 from "./path-util.service";
import * as i6 from "./keys-store.service";
export class ShortcutActionService {
    constructor(emptyValueService, domUtilService, jsonStoreService, jsonSchemaService, pathUtilService, keysStoreService) {
        this.emptyValueService = emptyValueService;
        this.domUtilService = domUtilService;
        this.jsonStoreService = jsonStoreService;
        this.jsonSchemaService = jsonSchemaService;
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
    }
    addToRootAction(path) {
        this.add(path, true);
    }
    addAction(path) {
        this.add(path, false);
    }
    add(path, root) {
        const _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
        this.addNewElementInArray(_path, this.jsonSchemaService.forPathArray(_path));
    }
    /**
     * @param path - Path of the array parent that the element is about to be inserted
     * @param schema - Schema of the element that is about to be inserted
     */
    addNewElementInArray(path, schema) {
        const itemSchema = schema.items;
        const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        const values = this.jsonStoreService.getIn(path) || List();
        this.jsonStoreService.setIn(path, values.push(emptyValue));
        path.push(values.size);
        this.waitThenFocus(this.pathUtilService.toPathString(path));
    }
    addBelowToRootAction(path) {
        const rootPath = this.pathUtilService.getNearestOrRootArrayParentInPath(path, true);
        const schema = this.jsonSchemaService.forPathArray(rootPath);
        const itemSchema = schema.items;
        const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        const values = this.jsonStoreService.getIn(rootPath) || List();
        this.jsonStoreService.setIn(rootPath, values.insert(path[1] + 1, emptyValue));
        rootPath.push(path[1] + 1);
        this.waitThenFocus(this.pathUtilService.toPathString(rootPath));
    }
    moveUpAction(path) {
        this.move(path, -1);
    }
    moveDownAction(path) {
        this.move(path, 1);
    }
    moveUpRootAction(path) {
        this.move(path, -1, true);
    }
    moveDownRootAction(path) {
        this.move(path, 1, true);
    }
    /**
     * @param path - Path of the element that is moved
     * @param direction - Movement direction. -1 for UP, +1 for DOWN
     */
    move(path, direction, root = false) {
        this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
        const index = this.pathUtilService.getElementIndexInForwardOrReversePath(path, root);
        path = this.jsonStoreService.moveIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, root), index, direction);
        const pathString = this.pathUtilService.toPathString(path);
        this.waitThenFocus(pathString);
    }
    deleteAction(path) {
        // blur element before delete for ensuring that `commitValueChange` will not show again the deleted value
        this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
        this.deleteElement(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false), this.pathUtilService.getElementIndexInForwardOrReversePath(path, false));
    }
    /**
     * @param path - Path of the element's array parent
     * @param index - Index of the element that is deleted from array parent path
     */
    deleteElement(path, index) {
        const values = this.jsonStoreService.getIn(path);
        this.jsonStoreService.setIn(path, values.remove(index));
    }
    navigateUpAction(path) {
        this.navigateUpDown(path, -1);
    }
    navigateDownAction(path) {
        this.navigateUpDown(path, 1);
    }
    /**
     * @param path - Path of the element that is focused
     * @param direction - Navigation direction. -1 for UP, +1 for DOWN
     */
    navigateUpDown(path, direction) {
        const values = this.jsonStoreService.getIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
        if (List.isList(values)) {
            const elemIndexInPath = this.pathUtilService.getElementIndexInForwardOrReversePath(path, true);
            if ((elemIndexInPath + direction) < values.size && (elemIndexInPath + direction) >= 0) {
                path[path.length - 2] = elemIndexInPath + direction;
            }
            else {
                path[path.length - 2] = values.size - Math.abs((elemIndexInPath + direction));
            }
            const pathString = this.pathUtilService.toPathString(path);
            this.domUtilService.focusAndSelectFirstEditableChildById(pathString);
        }
    }
    navigateLeftAction(path) {
        this.navigateRightLeft(path, -1);
    }
    navigateRightAction(path) {
        this.navigateRightLeft(path, 1);
    }
    /**
     * @param path - Path of the element that is focused
     * @param direction - Navigation direction. -1 for LEFT, +1 for RIGHT
     */
    navigateRightLeft(path, direction) {
        const pathString = this.pathUtilService.toPathString(path);
        this.domUtilService.focusRightOrLeftParentCell(pathString, direction);
    }
    /**
     * Copies the current row in table below and sets the value of the previous focused field to empty in the new row
     * @param path - Path
     */
    copyAction(path) {
        this.copyRowOrSchemaBelow(path, false);
    }
    /**
     * Copies the root parent element below(eg creates a new author in authors list)
     * when you edit an author's field)
     * @param path - Path
     */
    copyFromRootAction(path) {
        this.copyRowOrSchemaBelow(path, true);
    }
    /**
     * @param originalPath - Path of the element that is copied
     * @param root - Copy item from parent or root. Set to true for usage as in `copyFromRootAction` and false
     * for usage as in `copyAction`
     */
    copyRowOrSchemaBelow(originalPath, root) {
        const arrayParentPath = this.pathUtilService.getNearestOrRootArrayParentInPath(originalPath, root);
        if (this.jsonSchemaService.forPathArray(arrayParentPath)['items'].hasOwnProperty('properties')) {
            const elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
            const valuesList = this.jsonStoreService.getIn(arrayParentPath) || List();
            let newValue = valuesList.get(elemIndex);
            const newPath = arrayParentPath.concat(elemIndex + 1);
            let newPathString = this.pathUtilService.toPathString(newPath);
            if (!root) {
                newValue = newValue.set(originalPath[originalPath.length - 1]);
                newPathString = `${newPathString}${this.pathUtilService.separator}${originalPath[originalPath.length - 1]}`;
            }
            this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
            this.waitThenFocus(newPathString);
        }
    }
    undoAction() {
        const rolledBackPath = this.jsonStoreService.rollbackLastChange();
        if (rolledBackPath) {
            this.waitThenFocus(rolledBackPath);
        }
    }
    waitThenFocus(path) {
        setTimeout(() => {
            this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
        });
    }
    generateShortcutAction(actionName) {
        return (event) => {
            event.preventDefault();
            const eventTarget = event.target;
            const pathString = eventTarget.getAttribute('data-path');
            if (pathString) {
                this[actionName](this.pathUtilService.toPathArray(pathString));
            }
            return false;
        };
    }
}
ShortcutActionService.ɵfac = function ShortcutActionService_Factory(t) { return new (t || ShortcutActionService)(i0.ɵɵinject(i1.EmptyValueService), i0.ɵɵinject(i2.DomUtilService), i0.ɵɵinject(i3.JsonStoreService), i0.ɵɵinject(i4.JsonSchemaService), i0.ɵɵinject(i5.PathUtilService), i0.ɵɵinject(i6.KeysStoreService)); };
ShortcutActionService.ɵprov = i0.ɵɵdefineInjectable({ token: ShortcutActionService, factory: ShortcutActionService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShortcutActionService, [{
        type: Injectable
    }], function () { return [{ type: i1.EmptyValueService }, { type: i2.DomUtilService }, { type: i3.JsonStoreService }, { type: i4.JsonSchemaService }, { type: i5.PathUtilService }, { type: i6.KeysStoreService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQtYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL3Nob3J0Y3V0LWFjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7QUFXakMsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUFtQixpQkFBb0MsRUFDOUMsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQ2xDLGlCQUFvQyxFQUNwQyxlQUFnQyxFQUNoQyxnQkFBa0M7UUFMeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM5QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUVoRCxlQUFlLENBQUMsSUFBZ0I7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFnQjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sR0FBRyxDQUFDLElBQWdCLEVBQUUsSUFBYTtRQUN6QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFD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QUFDLE1BQTBCLENBQUM7WUFDckQsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6RCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNoRTtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7MEZBcE1VLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBFbXB0eVZhbHVlU2VydmljZSB9IGZyb20gJy4vZW1wdHktdmFsdWUuc2VydmljZSc7XG5pbXBvcnQgeyBKc29uU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9qc29uLXN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvblNjaGVtYVNlcnZpY2UgfSBmcm9tICcuL2pzb24tc2NoZW1hLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9tVXRpbFNlcnZpY2UgfSBmcm9tICcuL2RvbS11dGlsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF0aFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi9wYXRoLXV0aWwuc2VydmljZSc7XG5pbXBvcnQgeyBLZXlzU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9rZXlzLXN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSwgU2hvcnRjdXRBY3Rpb25GdW5jdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2hvcnRjdXRBY3Rpb25TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1wdHlWYWx1ZVNlcnZpY2U6IEVtcHR5VmFsdWVTZXJ2aWNlLFxuICAgIHB1YmxpYyBkb21VdGlsU2VydmljZTogRG9tVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIGpzb25TdG9yZVNlcnZpY2U6IEpzb25TdG9yZVNlcnZpY2UsXG4gICAgcHVibGljIGpzb25TY2hlbWFTZXJ2aWNlOiBKc29uU2NoZW1hU2VydmljZSxcbiAgICBwdWJsaWMgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIGtleXNTdG9yZVNlcnZpY2U6IEtleXNTdG9yZVNlcnZpY2UpIHsgfVxuXG4gIGFkZFRvUm9vdEFjdGlvbihwYXRoOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5hZGQocGF0aCwgdHJ1ZSk7XG4gIH1cblxuICBhZGRBY3Rpb24ocGF0aDogQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuYWRkKHBhdGgsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkKHBhdGg6IEFycmF5PGFueT4sIHJvb3Q6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBfcGF0aCA9IHRoaXMucGF0aFV0aWxTZXJ2aWNlLmdldE5lYXJlc3RPclJvb3RBcnJheVBhcmVudEluUGF0aChwYXRoLCByb290KTtcbiAgICB0aGlzLmFkZE5ld0VsZW1lbnRJbkFycmF5KF9wYXRoLCB0aGlzLmpzb25TY2hlbWFTZXJ2aWNlLmZvclBhdGhBcnJheShfcGF0aCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwYXRoIC0gUGF0aCBvZiB0aGUgYXJyYXkgcGFyZW50IHRoYXQgdGhlIGVsZW1lbnQgaXMgYWJvdXQgdG8gYmUgaW5zZXJ0ZWRcbiAgICogQHBhcmFtIHNjaGVtYSAtIFNjaGVtYSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGFib3V0IHRvIGJlIGluc2VydGVkXG4gICAqL1xuICBwcml2YXRlIGFkZE5ld0VsZW1lbnRJbkFycmF5KHBhdGg6IEFycmF5PGFueT4sIHNjaGVtYTogSlNPTlNjaGVtYSkge1xuICAgIGNvbnN0IGl0ZW1TY2hlbWEgPSBzY2hlbWEuaXRlbXM7XG4gICAgY29uc3QgZW1wdHlWYWx1ZSA9IHRoaXMuZW1wdHlWYWx1ZVNlcnZpY2UuZ2VuZXJhdGVFbXB0eVZhbHVlKGl0ZW1TY2hlbWEpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuanNvblN0b3JlU2VydmljZS5nZXRJbihwYXRoKSB8fCBMaXN0KCk7XG4gICAgdGhpcy5qc29uU3RvcmVTZXJ2aWNlLnNldEluKHBhdGgsIHZhbHVlcy5wdXNoKGVtcHR5VmFsdWUpKTtcbiAgICBwYXRoLnB1c2godmFsdWVzLnNpemUpO1xuICAgIHRoaXMud2FpdFRoZW5Gb2N1cyh0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcocGF0aCkpO1xuICB9XG5cbiAgYWRkQmVsb3dUb1Jvb3RBY3Rpb24ocGF0aDogQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIGNvbnN0IHJvb3RQYXRoID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UuZ2V0TmVhcmVzdE9yUm9vdEFycmF5UGFyZW50SW5QYXRoKHBhdGgsIHRydWUpO1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuanNvblNjaGVtYVNlcnZpY2UuZm9yUGF0aEFycmF5KHJvb3RQYXRoKTtcbiAgICBjb25zdCBpdGVtU2NoZW1hID0gc2NoZW1hLml0ZW1zO1xuICAgIGNvbnN0IGVtcHR5VmFsdWUgPSB0aGlzLmVtcHR5VmFsdWVTZXJ2aWNlLmdlbmVyYXRlRW1wdHlWYWx1ZShpdGVtU2NoZW1hKTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmpzb25TdG9yZVNlcnZpY2UuZ2V0SW4ocm9vdFBhdGgpIHx8IExpc3QoKTtcbiAgICB0aGlzLmpzb25TdG9yZVNlcnZpY2Uuc2V0SW4ocm9vdFBhdGgsIHZhbHVlcy5pbnNlcnQocGF0aFsxXSArIDEsIGVtcHR5VmFsdWUpKTtcbiAgICByb290UGF0aC5wdXNoKHBhdGhbMV0gKyAxKTtcbiAgICB0aGlzLndhaXRUaGVuRm9jdXModGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoU3RyaW5nKHJvb3RQYXRoKSk7XG4gIH1cblxuICBtb3ZlVXBBY3Rpb24ocGF0aDogQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHRoaXMubW92ZShwYXRoLCAtMSk7XG4gIH1cblxuICBtb3ZlRG93bkFjdGlvbihwYXRoOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlKHBhdGgsIDEpO1xuICB9XG5cbiAgbW92ZVVwUm9vdEFjdGlvbihwYXRoOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlKHBhdGgsIC0xLCB0cnVlKTtcbiAgfVxuXG4gIG1vdmVEb3duUm9vdEFjdGlvbihwYXRoOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlKHBhdGgsIDEsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwYXRoIC0gUGF0aCBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIG1vdmVkXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gLSBNb3ZlbWVudCBkaXJlY3Rpb24uIC0xIGZvciBVUCwgKzEgZm9yIERPV05cbiAgICovXG4gIHByaXZhdGUgbW92ZShwYXRoOiBBcnJheTxhbnk+LCBkaXJlY3Rpb246IG51bWJlciwgcm9vdCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5kb21VdGlsU2VydmljZS5ibHVyRmlyc3RFZGl0YWJsZUNoaWxkQnlJZCh0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcocGF0aCkpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UuZ2V0RWxlbWVudEluZGV4SW5Gb3J3YXJkT3JSZXZlcnNlUGF0aChwYXRoLCByb290KTtcbiAgICBwYXRoID0gdGhpcy5qc29uU3RvcmVTZXJ2aWNlLm1vdmVJbih0aGlzLnBhdGhVdGlsU2VydmljZS5nZXROZWFyZXN0T3JSb290QXJyYXlQYXJlbnRJblBhdGgocGF0aCwgcm9vdCksIGluZGV4LCBkaXJlY3Rpb24pO1xuICAgIGNvbnN0IHBhdGhTdHJpbmcgPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcocGF0aCk7XG4gICAgdGhpcy53YWl0VGhlbkZvY3VzKHBhdGhTdHJpbmcpO1xuICB9XG5cbiAgZGVsZXRlQWN0aW9uKHBhdGg6IEFycmF5PGFueT4pIHtcbiAgICAvLyBibHVyIGVsZW1lbnQgYmVmb3JlIGRlbGV0ZSBmb3IgZW5zdXJpbmcgdGhhdCBgY29tbWl0VmFsdWVDaGFuZ2VgIHdpbGwgbm90IHNob3cgYWdhaW4gdGhlIGRlbGV0ZWQgdmFsdWVcbiAgICB0aGlzLmRvbVV0aWxTZXJ2aWNlLmJsdXJGaXJzdEVkaXRhYmxlQ2hpbGRCeUlkKHRoaXMucGF0aFV0aWxTZXJ2aWNlLnRvUGF0aFN0cmluZyhwYXRoKSk7XG4gICAgdGhpcy5kZWxldGVFbGVtZW50KHRoaXMucGF0aFV0aWxTZXJ2aWNlLmdldE5lYXJlc3RPclJvb3RBcnJheVBhcmVudEluUGF0aChwYXRoLCBmYWxzZSksXG4gICAgICB0aGlzLnBhdGhVdGlsU2VydmljZS5nZXRFbGVtZW50SW5kZXhJbkZvcndhcmRPclJldmVyc2VQYXRoKHBhdGgsIGZhbHNlKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHBhdGggLSBQYXRoIG9mIHRoZSBlbGVtZW50J3MgYXJyYXkgcGFyZW50XG4gICAqIEBwYXJhbSBpbmRleCAtIEluZGV4IG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGVsZXRlZCBmcm9tIGFycmF5IHBhcmVudCBwYXRoXG4gICAqL1xuICBwcml2YXRlIGRlbGV0ZUVsZW1lbnQocGF0aDogQXJyYXk8YW55PiwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuanNvblN0b3JlU2VydmljZS5nZXRJbihwYXRoKTtcbiAgICB0aGlzLmpzb25TdG9yZVNlcnZpY2Uuc2V0SW4ocGF0aCwgdmFsdWVzLnJlbW92ZShpbmRleCkpO1xuICB9XG5cbiAgbmF2aWdhdGVVcEFjdGlvbihwYXRoOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0ZVVwRG93bihwYXRoLCAtMSk7XG4gIH1cblxuICBuYXZpZ2F0ZURvd25BY3Rpb24ocGF0aDogQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGVVcERvd24ocGF0aCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHBhdGggLSBQYXRoIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZm9jdXNlZFxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIC0gTmF2aWdhdGlvbiBkaXJlY3Rpb24uIC0xIGZvciBVUCwgKzEgZm9yIERPV05cbiAgICovXG4gIHByaXZhdGUgbmF2aWdhdGVVcERvd24ocGF0aDogQXJyYXk8YW55PiwgZGlyZWN0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmpzb25TdG9yZVNlcnZpY2UuZ2V0SW4odGhpcy5wYXRoVXRpbFNlcnZpY2UuZ2V0TmVhcmVzdE9yUm9vdEFycmF5UGFyZW50SW5QYXRoKHBhdGgsIGZhbHNlKSk7XG4gICAgaWYgKExpc3QuaXNMaXN0KHZhbHVlcykpIHtcbiAgICAgIGNvbnN0IGVsZW1JbmRleEluUGF0aCA9IHRoaXMucGF0aFV0aWxTZXJ2aWNlLmdldEVsZW1lbnRJbmRleEluRm9yd2FyZE9yUmV2ZXJzZVBhdGgocGF0aCwgdHJ1ZSk7XG4gICAgICBpZiAoKGVsZW1JbmRleEluUGF0aCArIGRpcmVjdGlvbikgPCB2YWx1ZXMuc2l6ZSAmJiAoZWxlbUluZGV4SW5QYXRoICsgZGlyZWN0aW9uKSA+PSAwKSB7XG4gICAgICAgIHBhdGhbcGF0aC5sZW5ndGggLSAyXSA9IGVsZW1JbmRleEluUGF0aCArIGRpcmVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGhbcGF0aC5sZW5ndGggLSAyXSA9IHZhbHVlcy5zaXplIC0gTWF0aC5hYnMoKGVsZW1JbmRleEluUGF0aCArIGRpcmVjdGlvbikpO1xuICAgICAgfVxuICAgICAgY29uc3QgcGF0aFN0cmluZyA9IHRoaXMucGF0aFV0aWxTZXJ2aWNlLnRvUGF0aFN0cmluZyhwYXRoKTtcbiAgICAgIHRoaXMuZG9tVXRpbFNlcnZpY2UuZm9jdXNBbmRTZWxlY3RGaXJzdEVkaXRhYmxlQ2hpbGRCeUlkKHBhdGhTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIG5hdmlnYXRlTGVmdEFjdGlvbihwYXRoOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0ZVJpZ2h0TGVmdChwYXRoLCAtMSk7XG4gIH1cblxuICBuYXZpZ2F0ZVJpZ2h0QWN0aW9uKHBhdGg6IEFycmF5PGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRlUmlnaHRMZWZ0KHBhdGgsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwYXRoIC0gUGF0aCBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGZvY3VzZWRcbiAgICogQHBhcmFtIGRpcmVjdGlvbiAtIE5hdmlnYXRpb24gZGlyZWN0aW9uLiAtMSBmb3IgTEVGVCwgKzEgZm9yIFJJR0hUXG4gICAqL1xuICBwcml2YXRlIG5hdmlnYXRlUmlnaHRMZWZ0KHBhdGg6IEFycmF5PGFueT4sIGRpcmVjdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgcGF0aFN0cmluZyA9IHRoaXMucGF0aFV0aWxTZXJ2aWNlLnRvUGF0aFN0cmluZyhwYXRoKTtcbiAgICB0aGlzLmRvbVV0aWxTZXJ2aWNlLmZvY3VzUmlnaHRPckxlZnRQYXJlbnRDZWxsKHBhdGhTdHJpbmcsIGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ29waWVzIHRoZSBjdXJyZW50IHJvdyBpbiB0YWJsZSBiZWxvdyBhbmQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIHByZXZpb3VzIGZvY3VzZWQgZmllbGQgdG8gZW1wdHkgaW4gdGhlIG5ldyByb3dcbiAgICogQHBhcmFtIHBhdGggLSBQYXRoXG4gICAqL1xuICBjb3B5QWN0aW9uKHBhdGg6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmNvcHlSb3dPclNjaGVtYUJlbG93KHBhdGgsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3BpZXMgdGhlIHJvb3QgcGFyZW50IGVsZW1lbnQgYmVsb3coZWcgY3JlYXRlcyBhIG5ldyBhdXRob3IgaW4gYXV0aG9ycyBsaXN0KVxuICAgKiB3aGVuIHlvdSBlZGl0IGFuIGF1dGhvcidzIGZpZWxkKVxuICAgKiBAcGFyYW0gcGF0aCAtIFBhdGhcbiAgICovXG4gIGNvcHlGcm9tUm9vdEFjdGlvbihwYXRoOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5jb3B5Um93T3JTY2hlbWFCZWxvdyhwYXRoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gb3JpZ2luYWxQYXRoIC0gUGF0aCBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGNvcGllZFxuICAgKiBAcGFyYW0gcm9vdCAtIENvcHkgaXRlbSBmcm9tIHBhcmVudCBvciByb290LiBTZXQgdG8gdHJ1ZSBmb3IgdXNhZ2UgYXMgaW4gYGNvcHlGcm9tUm9vdEFjdGlvbmAgYW5kIGZhbHNlXG4gICAqIGZvciB1c2FnZSBhcyBpbiBgY29weUFjdGlvbmBcbiAgICovXG4gIHByaXZhdGUgY29weVJvd09yU2NoZW1hQmVsb3cob3JpZ2luYWxQYXRoOiBBcnJheTxhbnk+LCByb290OiBib29sZWFuKSB7XG4gICAgY29uc3QgYXJyYXlQYXJlbnRQYXRoID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UuZ2V0TmVhcmVzdE9yUm9vdEFycmF5UGFyZW50SW5QYXRoKG9yaWdpbmFsUGF0aCwgcm9vdCk7XG4gICAgaWYgKHRoaXMuanNvblNjaGVtYVNlcnZpY2UuZm9yUGF0aEFycmF5KGFycmF5UGFyZW50UGF0aClbJ2l0ZW1zJ10uaGFzT3duUHJvcGVydHkoJ3Byb3BlcnRpZXMnKSkge1xuICAgICAgY29uc3QgZWxlbUluZGV4ID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UuZ2V0RWxlbWVudEluZGV4SW5Gb3J3YXJkT3JSZXZlcnNlUGF0aChvcmlnaW5hbFBhdGgsIHJvb3QpO1xuICAgICAgY29uc3QgdmFsdWVzTGlzdCA9IHRoaXMuanNvblN0b3JlU2VydmljZS5nZXRJbihhcnJheVBhcmVudFBhdGgpIHx8IExpc3QoKTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlc0xpc3QuZ2V0KGVsZW1JbmRleCk7XG4gICAgICBjb25zdCBuZXdQYXRoID0gYXJyYXlQYXJlbnRQYXRoLmNvbmNhdChlbGVtSW5kZXggKyAxKTtcbiAgICAgIGxldCBuZXdQYXRoU3RyaW5nID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoU3RyaW5nKG5ld1BhdGgpO1xuICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUuc2V0KG9yaWdpbmFsUGF0aFtvcmlnaW5hbFBhdGgubGVuZ3RoIC0gMV0pO1xuICAgICAgICBuZXdQYXRoU3RyaW5nID0gYCR7bmV3UGF0aFN0cmluZ30ke3RoaXMucGF0aFV0aWxTZXJ2aWNlLnNlcGFyYXRvcn0ke29yaWdpbmFsUGF0aFtvcmlnaW5hbFBhdGgubGVuZ3RoIC0gMV19YDtcbiAgICAgIH1cbiAgICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5zZXRJbihhcnJheVBhcmVudFBhdGgsIHZhbHVlc0xpc3QuaW5zZXJ0KGVsZW1JbmRleCArIDEsIG5ld1ZhbHVlKSk7XG4gICAgICB0aGlzLndhaXRUaGVuRm9jdXMobmV3UGF0aFN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdW5kb0FjdGlvbigpIHtcbiAgICBjb25zdCByb2xsZWRCYWNrUGF0aCA9IHRoaXMuanNvblN0b3JlU2VydmljZS5yb2xsYmFja0xhc3RDaGFuZ2UoKTtcbiAgICBpZiAocm9sbGVkQmFja1BhdGgpIHtcbiAgICAgIHRoaXMud2FpdFRoZW5Gb2N1cyhyb2xsZWRCYWNrUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3YWl0VGhlbkZvY3VzKHBhdGg6IHN0cmluZykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kb21VdGlsU2VydmljZS5mb2N1c0FuZFNlbGVjdEZpcnN0RWRpdGFibGVDaGlsZEJ5SWQocGF0aCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZVNob3J0Y3V0QWN0aW9uKGFjdGlvbk5hbWU6IHN0cmluZyk6IFNob3J0Y3V0QWN0aW9uRnVuY3Rpb24ge1xuXG4gICAgcmV0dXJuIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBwYXRoU3RyaW5nID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnKTtcbiAgICAgIGlmIChwYXRoU3RyaW5nKSB7XG4gICAgICAgIHRoaXNbYWN0aW9uTmFtZV0odGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoQXJyYXkocGF0aFN0cmluZykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==