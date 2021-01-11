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
import * as i0 from "@angular/core";
export class PathUtilService {
    constructor() {
        this.separator = '/';
    }
    /**
     *
     * @param path - Element's path
     * @param root - Find nearest or root parent array. True for root and false for nearest array parent
     * @returns - Returns the path to the array parent
     */
    getNearestOrRootArrayParentInPath(path, root) {
        let _path = [];
        const pathLength = path.length;
        for (let index = 0; index < pathLength; index++) {
            _path = root ? path.slice(0, index + 1) : path.slice(0, path.length - index);
            if (typeof _path[_path.length - 1] === 'number') {
                // transform ['arrayParent',0] => ['arrayParent']
                _path.pop();
                break;
            }
        }
        return _path;
    }
    getElementIndexInForwardOrReversePath(path, directPathSearch) {
        return this.findIndexFromPath(path.slice(), directPathSearch);
    }
    /**
     *
     * @param path - The path of an element
     * @param directPathSearch - Flag for define direct or reverse searching in path. Set to true for searching in direct
     * or false for searching in reverse path
     * @returns - Returns found index in path or -1 if not found
     */
    findIndexFromPath(path, directPathSearch) {
        path = directPathSearch ? path : path.reverse();
        for (const index in path) {
            if (!isNaN(path[index])) {
                return path[index];
            }
        }
        return -1;
    }
    /**
     * Converts path array `/` separated path string.
     * Example: from ['foo', 'bar', 0] to '/foo/bar/0'
     */
    toPathString(path) {
        if (path.length === 0) {
            return '';
        }
        else {
            return `${this.separator}${path.join(this.separator)}`;
        }
    }
    /**
     * Converts `/` separated path string to path array.
     * Example from '/foo/bar/0' to ['foo', 'bar', 0]
     */
    toPathArray(pathString) {
        return pathString.split(this.separator)
            .slice(1) // remove the empty
            .map((key) => isNaN(parseInt(key, 10)) ? key : parseInt(key, 10));
    }
}
PathUtilService.ɵfac = function PathUtilService_Factory(t) { return new (t || PathUtilService)(); };
PathUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: PathUtilService, factory: PathUtilService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PathUtilService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL3BhdGgtdXRpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBR1csY0FBUyxHQUFHLEdBQUcsQ0FBQztLQWlFMUI7SUEvREM7Ozs7O09BS0c7SUFDSCxpQ0FBaUMsQ0FBQyxJQUFnQixFQUFFLElBQWE7UUFDL0QsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQy9DLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM3RSxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMvQyxpREFBaUQ7Z0JBQ2pELEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDWixNQUFNO2FBQ1A7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHFDQUFxQyxDQUFDLElBQWdCLEVBQUUsZ0JBQXlCO1FBQy9FLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxpQkFBaUIsQ0FBQyxJQUFnQixFQUFFLGdCQUF5QjtRQUMzRCxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksQ0FBQyxJQUFnQjtRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDeEQ7SUFFSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3BDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7YUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs4RUFsRVUsZUFBZTt1REFBZixlQUFlLFdBQWYsZUFBZTtrREFBZixlQUFlO2NBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF0aFV0aWxTZXJ2aWNlIHtcblxuICByZWFkb25seSBzZXBhcmF0b3IgPSAnLyc7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIC0gRWxlbWVudCdzIHBhdGhcbiAgICogQHBhcmFtIHJvb3QgLSBGaW5kIG5lYXJlc3Qgb3Igcm9vdCBwYXJlbnQgYXJyYXkuIFRydWUgZm9yIHJvb3QgYW5kIGZhbHNlIGZvciBuZWFyZXN0IGFycmF5IHBhcmVudFxuICAgKiBAcmV0dXJucyAtIFJldHVybnMgdGhlIHBhdGggdG8gdGhlIGFycmF5IHBhcmVudFxuICAgKi9cbiAgZ2V0TmVhcmVzdE9yUm9vdEFycmF5UGFyZW50SW5QYXRoKHBhdGg6IEFycmF5PGFueT4sIHJvb3Q6IGJvb2xlYW4pOiBBcnJheTxhbnk+IHtcbiAgICBsZXQgX3BhdGggPSBbXTtcbiAgICBjb25zdCBwYXRoTGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIF9wYXRoID0gcm9vdCA/IHBhdGguc2xpY2UoMCwgaW5kZXggKyAxKSA6IHBhdGguc2xpY2UoMCwgcGF0aC5sZW5ndGggLSBpbmRleCk7XG4gICAgICBpZiAodHlwZW9mIF9wYXRoW19wYXRoLmxlbmd0aCAtIDFdID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyB0cmFuc2Zvcm0gWydhcnJheVBhcmVudCcsMF0gPT4gWydhcnJheVBhcmVudCddXG4gICAgICAgIF9wYXRoLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9wYXRoO1xuICB9XG5cbiAgZ2V0RWxlbWVudEluZGV4SW5Gb3J3YXJkT3JSZXZlcnNlUGF0aChwYXRoOiBBcnJheTxhbnk+LCBkaXJlY3RQYXRoU2VhcmNoOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maW5kSW5kZXhGcm9tUGF0aChwYXRoLnNsaWNlKCksIGRpcmVjdFBhdGhTZWFyY2gpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIC0gVGhlIHBhdGggb2YgYW4gZWxlbWVudFxuICAgKiBAcGFyYW0gZGlyZWN0UGF0aFNlYXJjaCAtIEZsYWcgZm9yIGRlZmluZSBkaXJlY3Qgb3IgcmV2ZXJzZSBzZWFyY2hpbmcgaW4gcGF0aC4gU2V0IHRvIHRydWUgZm9yIHNlYXJjaGluZyBpbiBkaXJlY3RcbiAgICogb3IgZmFsc2UgZm9yIHNlYXJjaGluZyBpbiByZXZlcnNlIHBhdGhcbiAgICogQHJldHVybnMgLSBSZXR1cm5zIGZvdW5kIGluZGV4IGluIHBhdGggb3IgLTEgaWYgbm90IGZvdW5kXG4gICAqL1xuICBmaW5kSW5kZXhGcm9tUGF0aChwYXRoOiBBcnJheTxhbnk+LCBkaXJlY3RQYXRoU2VhcmNoOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBwYXRoID0gZGlyZWN0UGF0aFNlYXJjaCA/IHBhdGggOiBwYXRoLnJldmVyc2UoKTtcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIHBhdGgpIHtcbiAgICAgIGlmICghaXNOYU4ocGF0aFtpbmRleF0pKSB7XG4gICAgICAgIHJldHVybiBwYXRoW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHBhdGggYXJyYXkgYC9gIHNlcGFyYXRlZCBwYXRoIHN0cmluZy5cbiAgICogRXhhbXBsZTogZnJvbSBbJ2ZvbycsICdiYXInLCAwXSB0byAnL2Zvby9iYXIvMCdcbiAgICovXG4gIHRvUGF0aFN0cmluZyhwYXRoOiBBcnJheTxhbnk+KTogc3RyaW5nIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3RoaXMuc2VwYXJhdG9yfSR7cGF0aC5qb2luKHRoaXMuc2VwYXJhdG9yKX1gO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGAvYCBzZXBhcmF0ZWQgcGF0aCBzdHJpbmcgdG8gcGF0aCBhcnJheS5cbiAgICogRXhhbXBsZSBmcm9tICcvZm9vL2Jhci8wJyB0byBbJ2ZvbycsICdiYXInLCAwXVxuICAgKi9cbiAgdG9QYXRoQXJyYXkocGF0aFN0cmluZzogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHBhdGhTdHJpbmcuc3BsaXQodGhpcy5zZXBhcmF0b3IpXG4gICAgICAuc2xpY2UoMSkgLy8gcmVtb3ZlIHRoZSBlbXB0eVxuICAgICAgLm1hcCgoa2V5KSA9PiBpc05hTihwYXJzZUludChrZXksIDEwKSkgPyBrZXkgOiBwYXJzZUludChrZXksIDEwKSk7XG4gIH1cbn1cblxuIl19