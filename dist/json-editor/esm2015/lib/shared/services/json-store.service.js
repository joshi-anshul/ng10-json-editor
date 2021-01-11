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
import { Map, List, fromJS } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { SizedStack } from '../classes';
import * as i0 from "@angular/core";
import * as i1 from "./path-util.service";
import * as i2 from "./keys-store.service";
export class JsonStoreService {
    constructor(pathUtilService, keysStoreService) {
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
        this.patchesByPath$ = new ReplaySubject(1);
        this.json$ = new Subject();
        this.jsonPatches$ = new Subject();
        this.patchesByPath = {};
        // list of reverse patches for changes
        this.history = new SizedStack(10);
    }
    setIn(path, value, allowUndo = true) {
        if (value === '' || value === undefined) {
            this.removeIn(path);
            return;
        }
        value = this.toImmutable(value);
        // immutablejs setIn creates Map for keys that don't exist in path
        // therefore List() should be set manually for some of those keys.
        this.setEmptyListBeforeEachIndexInPath(path);
        if (allowUndo) {
            this.pushRevertPatchToHistory(path, 'replace');
        }
        // set new value
        this.json = this.json.setIn(path, value);
        this.keysStoreService.syncKeysForPath(path, this.json);
        this.json$.next(this.json);
    }
    setEmptyListBeforeEachIndexInPath(path) {
        for (let i = 0; i < path.length - 1; i++) {
            const currentPath = path.slice(0, i + 1);
            if (!this.json.hasIn(currentPath) && typeof path[i + 1] === 'number') {
                this.json = this.json.setIn(currentPath, List());
            }
        }
    }
    getIn(path, notSetValue) {
        return this.json.getIn(path, notSetValue);
    }
    removeIn(path) {
        this.pushRevertPatchToHistory(path, 'add');
        this.json = this.json.removeIn(path);
        this.json$.next(this.json);
        this.keysStoreService.deletePath(path);
    }
    pushRevertPatchToHistory(path, revertOp) {
        this.history.push({
            path: this.pathUtilService.toPathString(path),
            op: revertOp,
            value: this.json.getIn(path)
        });
    }
    addIn(path, value) {
        const lastPathElement = path[path.length - 1];
        const isInsert = typeof lastPathElement === 'number' || lastPathElement === '-';
        if (isInsert) {
            const pathWithoutIndex = path.slice(0, path.length - 1);
            let list = this.getIn(pathWithoutIndex) || List();
            value = this.toImmutable(value);
            if (lastPathElement === '-') {
                list = list.push(value);
                path[path.length - 1] = list.size - 1;
            }
            else {
                list = list.insert(lastPathElement, value);
            }
            // allowUndo=false to avoid creating replace history patch when adding an item to a list.
            this.setIn(pathWithoutIndex, list, false);
        }
        else {
            this.setIn(path, value);
        }
    }
    toImmutable(value) {
        if (typeof value === 'object' && !(List.isList(value) || Map.isMap(value))) {
            return fromJS(value);
        }
        return value;
    }
    /**
     * Moves the element at given index UP or DOWN within the list
     * @param listPath path to a list in json
     * @param index index of the element that is being moved
     * @param direction 1 for DOWN, -1 for UP movement
     * @return new path of the moved element
     */
    moveIn(listPath, index, direction) {
        let list = this.getIn(listPath);
        let newIndex = index + direction;
        if (newIndex >= list.size || newIndex < 0) {
            newIndex = list.size - Math.abs(newIndex);
        }
        const temp = list.get(index);
        list = list
            .set(index, list.get(newIndex))
            .set(newIndex, temp);
        this.setIn(listPath, list);
        this.keysStoreService.swapListElementKeys(listPath, index, newIndex);
        return listPath.concat(newIndex);
    }
    setJson(json) {
        this.json = json;
    }
    setJsonPatches(patches) {
        this.patchesByPath = {};
        patches.forEach(patch => {
            const path = this.getComponentPathForPatch(patch);
            if (!this.patchesByPath[path]) {
                this.patchesByPath[path] = [];
            }
            this.patchesByPath[path].push(patch);
        });
        this.jsonPatches = patches;
        this.patchesByPath$.next(this.patchesByPath);
    }
    rollbackLastChange() {
        const lastChangeReversePatch = this.history.pop();
        if (lastChangeReversePatch) {
            this.applyPatch(lastChangeReversePatch, false);
            return lastChangeReversePatch.path;
        }
        else {
            return undefined;
        }
    }
    applyPatch(patch, allowUndo = true) {
        const path = this.pathUtilService.toPathArray(patch.path);
        switch (patch.op) {
            case 'replace':
                this.setIn(path, patch.value, allowUndo);
                break;
            case 'remove':
                this.removeIn(path);
                break;
            case 'add':
            // custom type for adding a replace patch as new.
            case 'add-as-new':
                this.addIn(path, patch.value);
                break;
            default:
                console.warn(`${patch.op} is not supported!`);
        }
        this.removeJsonPatch(patch);
    }
    rejectPatch(patch) {
        this.removeJsonPatch(patch);
    }
    hasPatch(path) {
        return this.patchesByPath[path] && this.patchesByPath[path].length > 0;
    }
    hasPatchOrChildrenHavePatch(path) {
        if (this.hasPatch(path)) {
            return true;
        }
        if (this.jsonPatches) {
            const childPathPrefix = `${path}${this.pathUtilService.separator}`;
            return this.jsonPatches
                .some(patch => patch.path.startsWith(childPathPrefix));
        }
        return false;
    }
    removeJsonPatch(patch) {
        const path = this.getComponentPathForPatch(patch);
        // don't do anything if it's UNDO json-patch.
        if (this.patchesByPath[path]) {
            const patchIndex = this.patchesByPath[path].indexOf(patch);
            if (patchIndex > -1) {
                this.patchesByPath[path].splice(patchIndex, 1);
                this.patchesByPath$.next(this.patchesByPath);
                const globalPatchIndex = this.jsonPatches.indexOf(patch);
                this.jsonPatches.splice(globalPatchIndex, 1);
                this.jsonPatches$.next(this.jsonPatches);
            }
        }
    }
    getComponentPathForPatch(patch) {
        if (patch.op === 'add') {
            // add patches handled by parent component
            return this.getParentPath(patch.path);
        }
        return patch.path;
    }
    getParentPath(path) {
        const pathArray = this.pathUtilService.toPathArray(path);
        const parentPathArray = pathArray.slice(0, -1);
        return this.pathUtilService.toPathString(parentPathArray);
    }
}
JsonStoreService.ɵfac = function JsonStoreService_Factory(t) { return new (t || JsonStoreService)(i0.ɵɵinject(i1.PathUtilService), i0.ɵɵinject(i2.KeysStoreService)); };
JsonStoreService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonStoreService, factory: JsonStoreService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonStoreService, [{
        type: Injectable
    }], function () { return [{ type: i1.PathUtilService }, { type: i2.KeysStoreService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9zZXJ2aWNlcy9qc29uLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFHeEMsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQixZQUFvQixlQUFnQyxFQUMxQyxnQkFBa0M7UUFEeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFabkMsbUJBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDekQsVUFBSyxHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFFaEQsa0JBQWEsR0FBc0IsRUFBRSxDQUFDO1FBSTlDLHNDQUFzQztRQUM5QixZQUFPLEdBQUcsSUFBSSxVQUFVLENBQVksRUFBRSxDQUFDLENBQUM7SUFHQSxDQUFDO0lBRWpELEtBQUssQ0FBQyxJQUFnQixFQUFFLEtBQVUsRUFBRSxTQUFTLEdBQUcsSUFBSTtRQUNsRCxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FB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QUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFN0MsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxQztTQUNGO0lBQ0gsQ0FBQztJQUVPLHdCQUF3QixDQUFDLEtBQWdCO1FBQy9DLElBQUksS0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDdEIsMENBQTBDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFZO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnRkF6TlUsZ0JBQWdCO3dEQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBuZzItanNvbi1lZGl0b3IuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQ0VSTi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcbiAqIFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggbmcyLWpzb24tZWRpdG9yOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIEluYy4sXG4gKiA1OSBUZW1wbGUgUGxhY2UsIFN1aXRlIDMzMCwgQm9zdG9uLCBNQSAwMjExMS0xMzA3LCBVU0EuXG4gKiBJbiBhcHBseWluZyB0aGlzIGxpY2Vuc2UsIENFUk4gZG9lcyBub3RcbiAqIHdhaXZlIHRoZSBwcml2aWxlZ2VzIGFuZCBpbW11bml0aWVzIGdyYW50ZWQgdG8gaXQgYnkgdmlydHVlIG9mIGl0cyBzdGF0dXNcbiAqIGFzIGFuIEludGVyZ292ZXJubWVudGFsIE9yZ2FuaXphdGlvbiBvciBzdWJtaXQgaXRzZWxmIHRvIGFueSBqdXJpc2RpY3Rpb24uXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXAsIExpc3QsIGZyb21KUyB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBhdGhVdGlsU2VydmljZSB9IGZyb20gJy4vcGF0aC11dGlsLnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5c1N0b3JlU2VydmljZSB9IGZyb20gJy4va2V5cy1zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25QYXRjaCwgSnNvblBhdGNoZXNCeVBhdGggfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNpemVkU3RhY2sgfSBmcm9tICcuLi9jbGFzc2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25TdG9yZVNlcnZpY2Uge1xuXG4gIHJlYWRvbmx5IHBhdGNoZXNCeVBhdGgkID0gbmV3IFJlcGxheVN1YmplY3Q8SnNvblBhdGNoZXNCeVBhdGg+KDEpO1xuICByZWFkb25seSBqc29uJCA9IG5ldyBTdWJqZWN0PE1hcDxzdHJpbmcsIGFueT4+KCk7XG4gIHJlYWRvbmx5IGpzb25QYXRjaGVzJCA9IG5ldyBTdWJqZWN0PEFycmF5PEpzb25QYXRjaD4+KCk7XG5cbiAgcHJpdmF0ZSBwYXRjaGVzQnlQYXRoOiBKc29uUGF0Y2hlc0J5UGF0aCA9IHt9O1xuICBwcml2YXRlIGpzb246IE1hcDxzdHJpbmcsIGFueT47XG4gIHByaXZhdGUganNvblBhdGNoZXM6IEFycmF5PEpzb25QYXRjaD47XG5cbiAgLy8gbGlzdCBvZiByZXZlcnNlIHBhdGNoZXMgZm9yIGNoYW5nZXNcbiAgcHJpdmF0ZSBoaXN0b3J5ID0gbmV3IFNpemVkU3RhY2s8SnNvblBhdGNoPigxMCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXRoVXRpbFNlcnZpY2U6IFBhdGhVdGlsU2VydmljZSxcbiAgICBwcml2YXRlIGtleXNTdG9yZVNlcnZpY2U6IEtleXNTdG9yZVNlcnZpY2UpIHsgfVxuXG4gIHNldEluKHBhdGg6IEFycmF5PGFueT4sIHZhbHVlOiBhbnksIGFsbG93VW5kbyA9IHRydWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVtb3ZlSW4ocGF0aCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWUgPSB0aGlzLnRvSW1tdXRhYmxlKHZhbHVlKTtcblxuICAgIC8vIGltbXV0YWJsZWpzIHNldEluIGNyZWF0ZXMgTWFwIGZvciBrZXlzIHRoYXQgZG9uJ3QgZXhpc3QgaW4gcGF0aFxuICAgIC8vIHRoZXJlZm9yZSBMaXN0KCkgc2hvdWxkIGJlIHNldCBtYW51YWxseSBmb3Igc29tZSBvZiB0aG9zZSBrZXlzLlxuICAgIHRoaXMuc2V0RW1wdHlMaXN0QmVmb3JlRWFjaEluZGV4SW5QYXRoKHBhdGgpO1xuXG4gICAgaWYgKGFsbG93VW5kbykge1xuICAgICAgdGhpcy5wdXNoUmV2ZXJ0UGF0Y2hUb0hpc3RvcnkocGF0aCwgJ3JlcGxhY2UnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgdGhpcy5qc29uID0gdGhpcy5qc29uLnNldEluKHBhdGgsIHZhbHVlKTtcblxuICAgIHRoaXMua2V5c1N0b3JlU2VydmljZS5zeW5jS2V5c0ZvclBhdGgocGF0aCwgdGhpcy5qc29uKTtcblxuICAgIHRoaXMuanNvbiQubmV4dCh0aGlzLmpzb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbXB0eUxpc3RCZWZvcmVFYWNoSW5kZXhJblBhdGgocGF0aDogQXJyYXk8YW55Pikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcGF0aC5zbGljZSgwLCBpICsgMSk7XG4gICAgICBpZiAoIXRoaXMuanNvbi5oYXNJbihjdXJyZW50UGF0aCkgJiYgdHlwZW9mIHBhdGhbaSArIDFdID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLmpzb24gPSB0aGlzLmpzb24uc2V0SW4oY3VycmVudFBhdGgsIExpc3QoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SW4ocGF0aDogQXJyYXk8YW55Piwgbm90U2V0VmFsdWU/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmpzb24uZ2V0SW4ocGF0aCwgbm90U2V0VmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlSW4ocGF0aDogQXJyYXk8YW55Pikge1xuICAgIHRoaXMucHVzaFJldmVydFBhdGNoVG9IaXN0b3J5KHBhdGgsICdhZGQnKTtcblxuICAgIHRoaXMuanNvbiA9IHRoaXMuanNvbi5yZW1vdmVJbihwYXRoKTtcbiAgICB0aGlzLmpzb24kLm5leHQodGhpcy5qc29uKTtcbiAgICB0aGlzLmtleXNTdG9yZVNlcnZpY2UuZGVsZXRlUGF0aChwYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHVzaFJldmVydFBhdGNoVG9IaXN0b3J5KHBhdGg6IEFycmF5PGFueT4sIHJldmVydE9wOiBzdHJpbmcpIHtcbiAgICB0aGlzLmhpc3RvcnkucHVzaCh7XG4gICAgICBwYXRoOiB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcocGF0aCksXG4gICAgICBvcDogcmV2ZXJ0T3AsXG4gICAgICB2YWx1ZTogdGhpcy5qc29uLmdldEluKHBhdGgpXG4gICAgfSk7XG4gIH1cblxuICBhZGRJbihwYXRoOiBBcnJheTxhbnk+LCB2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgbGFzdFBhdGhFbGVtZW50ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGlzSW5zZXJ0ID0gdHlwZW9mIGxhc3RQYXRoRWxlbWVudCA9PT0gJ251bWJlcicgfHwgbGFzdFBhdGhFbGVtZW50ID09PSAnLSc7XG4gICAgaWYgKGlzSW5zZXJ0KSB7XG4gICAgICBjb25zdCBwYXRoV2l0aG91dEluZGV4ID0gcGF0aC5zbGljZSgwLCBwYXRoLmxlbmd0aCAtIDEpO1xuICAgICAgbGV0IGxpc3QgPSB0aGlzLmdldEluKHBhdGhXaXRob3V0SW5kZXgpIGFzIExpc3Q8YW55PiB8fCBMaXN0KCk7XG4gICAgICB2YWx1ZSA9IHRoaXMudG9JbW11dGFibGUodmFsdWUpO1xuICAgICAgaWYgKGxhc3RQYXRoRWxlbWVudCA9PT0gJy0nKSB7XG4gICAgICAgIGxpc3QgPSBsaXN0LnB1c2godmFsdWUpO1xuICAgICAgICBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPSBsaXN0LnNpemUgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdCA9IGxpc3QuaW5zZXJ0KGxhc3RQYXRoRWxlbWVudCwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gYWxsb3dVbmRvPWZhbHNlIHRvIGF2b2lkIGNyZWF0aW5nIHJlcGxhY2UgaGlzdG9yeSBwYXRjaCB3aGVuIGFkZGluZyBhbiBpdGVtIHRvIGEgbGlzdC5cbiAgICAgIHRoaXMuc2V0SW4ocGF0aFdpdGhvdXRJbmRleCwgbGlzdCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEluKHBhdGgsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvSW1tdXRhYmxlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICEoTGlzdC5pc0xpc3QodmFsdWUpIHx8IE1hcC5pc01hcCh2YWx1ZSkpKSB7XG4gICAgICByZXR1cm4gZnJvbUpTKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBlbGVtZW50IGF0IGdpdmVuIGluZGV4IFVQIG9yIERPV04gd2l0aGluIHRoZSBsaXN0XG4gICAqIEBwYXJhbSBsaXN0UGF0aCBwYXRoIHRvIGEgbGlzdCBpbiBqc29uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRleCBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGJlaW5nIG1vdmVkXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gMSBmb3IgRE9XTiwgLTEgZm9yIFVQIG1vdmVtZW50XG4gICAqIEByZXR1cm4gbmV3IHBhdGggb2YgdGhlIG1vdmVkIGVsZW1lbnRcbiAgICovXG4gIG1vdmVJbihsaXN0UGF0aDogQXJyYXk8YW55PiwgaW5kZXg6IG51bWJlciwgZGlyZWN0aW9uOiBudW1iZXIpOiBBcnJheTxhbnk+IHtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZ2V0SW4obGlzdFBhdGgpO1xuICAgIGxldCBuZXdJbmRleCA9IGluZGV4ICsgZGlyZWN0aW9uO1xuICAgIGlmIChuZXdJbmRleCA+PSBsaXN0LnNpemUgfHwgbmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCA9IGxpc3Quc2l6ZSAtIE1hdGguYWJzKG5ld0luZGV4KTtcbiAgICB9XG4gICAgY29uc3QgdGVtcCA9IGxpc3QuZ2V0KGluZGV4KTtcbiAgICBsaXN0ID0gbGlzdFxuICAgICAgLnNldChpbmRleCwgbGlzdC5nZXQobmV3SW5kZXgpKVxuICAgICAgLnNldChuZXdJbmRleCwgdGVtcCk7XG4gICAgdGhpcy5zZXRJbihsaXN0UGF0aCwgbGlzdCk7XG5cbiAgICB0aGlzLmtleXNTdG9yZVNlcnZpY2Uuc3dhcExpc3RFbGVtZW50S2V5cyhsaXN0UGF0aCwgaW5kZXgsIG5ld0luZGV4KTtcblxuICAgIHJldHVybiBsaXN0UGF0aC5jb25jYXQobmV3SW5kZXgpO1xuICB9XG5cbiAgc2V0SnNvbihqc29uOiBNYXA8c3RyaW5nLCBhbnk+KSB7XG4gICAgdGhpcy5qc29uID0ganNvbjtcbiAgfVxuXG4gIHNldEpzb25QYXRjaGVzKHBhdGNoZXM6IEFycmF5PEpzb25QYXRjaD4pIHtcbiAgICB0aGlzLnBhdGNoZXNCeVBhdGggPSB7fTtcbiAgICBwYXRjaGVzLmZvckVhY2gocGF0Y2ggPT4ge1xuICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0Q29tcG9uZW50UGF0aEZvclBhdGNoKHBhdGNoKTtcbiAgICAgIGlmICghdGhpcy5wYXRjaGVzQnlQYXRoW3BhdGhdKSB7XG4gICAgICAgIHRoaXMucGF0Y2hlc0J5UGF0aFtwYXRoXSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXRjaGVzQnlQYXRoW3BhdGhdLnB1c2gocGF0Y2gpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5qc29uUGF0Y2hlcyA9IHBhdGNoZXM7XG4gICAgdGhpcy5wYXRjaGVzQnlQYXRoJC5uZXh0KHRoaXMucGF0Y2hlc0J5UGF0aCk7XG4gIH1cblxuICByb2xsYmFja0xhc3RDaGFuZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsYXN0Q2hhbmdlUmV2ZXJzZVBhdGNoID0gdGhpcy5oaXN0b3J5LnBvcCgpO1xuICAgIGlmIChsYXN0Q2hhbmdlUmV2ZXJzZVBhdGNoKSB7XG4gICAgICB0aGlzLmFwcGx5UGF0Y2gobGFzdENoYW5nZVJldmVyc2VQYXRjaCwgZmFsc2UpO1xuICAgICAgcmV0dXJuIGxhc3RDaGFuZ2VSZXZlcnNlUGF0Y2gucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBhcHBseVBhdGNoKHBhdGNoOiBKc29uUGF0Y2gsIGFsbG93VW5kbyA9IHRydWUpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoQXJyYXkocGF0Y2gucGF0aCk7XG4gICAgc3dpdGNoIChwYXRjaC5vcCkge1xuICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgIHRoaXMuc2V0SW4ocGF0aCwgcGF0Y2gudmFsdWUsIGFsbG93VW5kbyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgdGhpcy5yZW1vdmVJbihwYXRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgLy8gY3VzdG9tIHR5cGUgZm9yIGFkZGluZyBhIHJlcGxhY2UgcGF0Y2ggYXMgbmV3LlxuICAgICAgY2FzZSAnYWRkLWFzLW5ldyc6XG4gICAgICAgIHRoaXMuYWRkSW4ocGF0aCwgcGF0Y2gudmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtwYXRjaC5vcH0gaXMgbm90IHN1cHBvcnRlZCFgKTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVKc29uUGF0Y2gocGF0Y2gpO1xuICB9XG5cbiAgcmVqZWN0UGF0Y2gocGF0Y2g6IEpzb25QYXRjaCkge1xuICAgIHRoaXMucmVtb3ZlSnNvblBhdGNoKHBhdGNoKTtcbiAgfVxuXG4gIGhhc1BhdGNoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhdGNoZXNCeVBhdGhbcGF0aF0gJiYgdGhpcy5wYXRjaGVzQnlQYXRoW3BhdGhdLmxlbmd0aCA+IDA7XG4gIH1cblxuICBoYXNQYXRjaE9yQ2hpbGRyZW5IYXZlUGF0Y2gocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzUGF0Y2gocGF0aCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmpzb25QYXRjaGVzKSB7XG4gICAgICBjb25zdCBjaGlsZFBhdGhQcmVmaXggPSBgJHtwYXRofSR7dGhpcy5wYXRoVXRpbFNlcnZpY2Uuc2VwYXJhdG9yfWA7XG4gICAgICByZXR1cm4gdGhpcy5qc29uUGF0Y2hlc1xuICAgICAgICAuc29tZShwYXRjaCA9PiBwYXRjaC5wYXRoLnN0YXJ0c1dpdGgoY2hpbGRQYXRoUHJlZml4KSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlSnNvblBhdGNoKHBhdGNoOiBKc29uUGF0Y2gpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRDb21wb25lbnRQYXRoRm9yUGF0Y2gocGF0Y2gpO1xuICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIGl0J3MgVU5ETyBqc29uLXBhdGNoLlxuICAgIGlmICh0aGlzLnBhdGNoZXNCeVBhdGhbcGF0aF0pIHtcbiAgICAgIGNvbnN0IHBhdGNoSW5kZXggPSB0aGlzLnBhdGNoZXNCeVBhdGhbcGF0aF0uaW5kZXhPZihwYXRjaCk7XG4gICAgICBpZiAocGF0Y2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMucGF0Y2hlc0J5UGF0aFtwYXRoXS5zcGxpY2UocGF0Y2hJbmRleCwgMSk7XG4gICAgICAgIHRoaXMucGF0Y2hlc0J5UGF0aCQubmV4dCh0aGlzLnBhdGNoZXNCeVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGdsb2JhbFBhdGNoSW5kZXggPSB0aGlzLmpzb25QYXRjaGVzLmluZGV4T2YocGF0Y2gpO1xuICAgICAgICB0aGlzLmpzb25QYXRjaGVzLnNwbGljZShnbG9iYWxQYXRjaEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5qc29uUGF0Y2hlcyQubmV4dCh0aGlzLmpzb25QYXRjaGVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudFBhdGhGb3JQYXRjaChwYXRjaDogSnNvblBhdGNoKTogc3RyaW5nIHtcbiAgICBpZiAocGF0Y2gub3AgPT09ICdhZGQnKSB7XG4gICAgICAvLyBhZGQgcGF0Y2hlcyBoYW5kbGVkIGJ5IHBhcmVudCBjb21wb25lbnRcbiAgICAgIHJldHVybiB0aGlzLmdldFBhcmVudFBhdGgocGF0Y2gucGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRjaC5wYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJlbnRQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcGF0aEFycmF5ID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoQXJyYXkocGF0aCk7XG4gICAgY29uc3QgcGFyZW50UGF0aEFycmF5ID0gcGF0aEFycmF5LnNsaWNlKDAsIC0xKTtcbiAgICByZXR1cm4gdGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoU3RyaW5nKHBhcmVudFBhdGhBcnJheSk7XG4gIH1cbn1cbiJdfQ==