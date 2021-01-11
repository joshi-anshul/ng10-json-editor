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
import { Map, List, Seq } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./app-globals.service";
import * as i2 from "./path-util.service";
import * as i3 from "./json-schema.service";
import * as i4 from "./compare-keys-by-schema.service";
export class KeysStoreService {
    constructor(appGlobalsService, pathUtilService, jsonSchemaService, compareKeysBySchemaService) {
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.jsonSchemaService = jsonSchemaService;
        this.compareKeysBySchemaService = compareKeysBySchemaService;
        this.onKeysChange = new Subject();
    }
    forPath(path) {
        return this.keys$Map[path];
    }
    /**
     * Adds a key to the specified path.
     *
     * @param path path to add the key to
     * @param key key to be added
     * @param schema schema that belongs to path (schema.items for table-list)
     */
    addKey(path, key, schema, value) {
        // FIXME: could do O(logn) insert instead of O(nlogn) since the set is already sorted.
        this.keysMap[path] = this.keysMap[path]
            .add(key)
            .sort((a, b) => this.compareKeysBySchemaService.compare(a, b, schema));
        this.keys$Map[path].next(this.keysMap[path]);
        this.onKeysChange.next({ path, keys: this.keysMap[path] });
        const newKeyPath = `${path}${this.pathUtilService.separator}${key}`;
        const keySchema = schema.properties[key];
        if (keySchema.type === 'object' || keySchema.componentType === 'table-list') {
            this.buildKeysMapRecursivelyForPath(value || Map(), newKeyPath, keySchema);
        }
        return newKeyPath;
    }
    deletePath(path) {
        const lastKey = path[path.length - 1];
        const parentPath = this.pathUtilService.toPathString(path.slice(0, -1));
        // don't invoke deleteKey if parentPath is primitive-list
        if (this.keysMap[parentPath]) {
            this.deleteKey(parentPath, lastKey);
        }
    }
    /**
     * Sync keys in store for the given path or its parent, grand parent etc. if necessary
     *
     * @param path path to the (re)set field
     * @param json whole json
     */
    syncKeysForPath(path, json) {
        // search from leaf to root, to find the first path with entry in keys map
        for (let i = path.length - 1; i >= 0; i--) {
            const currentPath = path.slice(0, i);
            const currentPathString = this.pathUtilService.toPathString(currentPath);
            if (this.keysMap[currentPathString]) {
                // path[i] is key that should be added to currentPat
                const key = path[i];
                // if currentPath has the key
                if (this.keysMap[currentPathString].has(key)) {
                    // just build the store keys map for that /current/path/key if it is object or array
                    const keyPath = currentPath.concat(key);
                    const keySchema = this.jsonSchemaService.forPathArray(keyPath);
                    if (keySchema.type === 'object' || keySchema.type === 'array') {
                        this.buildKeysMapRecursivelyForPath(json.getIn(keyPath), keyPath, keySchema);
                    }
                    // if currentPath doesn't have the key
                }
                else {
                    const currentSchema = this.jsonSchemaService.forPathArray(currentPath);
                    // if currentPath is to a table list
                    if (currentSchema.componentType === 'table-list') {
                        // have to rebuild keys map for it because key is here an index we don't know what to add
                        this.buildKeysMapRecursivelyForPath(json.getIn(currentPath), currentPath, currentSchema);
                        // if not to a table list.
                    }
                    else {
                        // just add the key which will build keys map for /current/path/key as well if needed
                        this.addKey(currentPathString, key, currentSchema, json.getIn(currentPath.concat(path[i])));
                    }
                }
                // break when a entry found for a path in keys map
                break;
            }
        }
    }
    deleteKey(parentPath, key) {
        // remove deleted one from parent
        this.keysMap[parentPath] = this.keysMap[parentPath].delete(key);
        this.keys$Map[parentPath].next(this.keysMap[parentPath]);
        this.onKeysChange.next({ path: parentPath, keys: this.keysMap[parentPath] });
        // delete keys for deleted one
        const deletedKeyPath = `${parentPath}${this.pathUtilService.separator}${key}`;
        delete this.keysMap[deletedKeyPath];
        delete this.keys$Map[deletedKeyPath];
        // delete keys for all children of the deleted one
        const deletedKeyPathChildPrefix = deletedKeyPath + this.pathUtilService.separator;
        Object.keys(this.keysMap)
            .filter(path => path.startsWith(deletedKeyPathChildPrefix))
            .forEach(childPath => {
            delete this.keysMap[childPath];
            delete this.keys$Map[childPath];
        });
    }
    /**
     * Swaps keys of given two indices in object list recursively
     */
    swapListElementKeys(listPath, index1, index2) {
        const listSchema = this.jsonSchemaService.forPathArray(listPath);
        if (listSchema.componentType !== 'complex-list') {
            return;
        }
        const listPathString = this.pathUtilService.toPathString(listPath);
        const ps1 = `${listPathString}${this.pathUtilService.separator}${index1}`;
        const ps2 = `${listPathString}${this.pathUtilService.separator}${index2}`;
        const keys1 = this.keysMap[ps1];
        this.setKeys(ps1, this.keysMap[ps2]);
        this.setKeys(ps2, keys1);
        // swap children as well
        const ps1ChildPrefix = ps1 + this.pathUtilService.separator;
        const ps2ChildPrefix = ps2 + this.pathUtilService.separator;
        const childrenSwaps = [];
        Object.keys(this.keysMap)
            .forEach(path => {
            if (path.startsWith(ps1ChildPrefix)) {
                const toPath = path.replace(ps1ChildPrefix, ps2ChildPrefix);
                childrenSwaps.push({ from: path, to: toPath, keys: this.keysMap[path] });
            }
            else if (path.startsWith(ps2ChildPrefix)) {
                const toPath = path.replace(ps2ChildPrefix, ps1ChildPrefix);
                childrenSwaps.push({ from: path, to: toPath, keys: this.keysMap[path] });
            }
        });
        childrenSwaps
            .forEach(swap => {
            this.setKeys(swap.to, swap.keys);
            this.onKeysChange.next({ path: swap.to, keys: this.keysMap[swap.to] });
        });
        childrenSwaps
            .filter(swap => !childrenSwaps.some(otherSwap => swap.from === otherSwap.to))
            .forEach(swap => {
            delete this.keysMap[swap.from];
            delete this.keys$Map[swap.from];
        });
    }
    buildKeysMap(json, schema) {
        this.keys$Map = {};
        this.keysMap = {};
        this.buildKeysMapRecursivelyForPath(json, '', schema);
    }
    buildKeysMapRecursivelyForPath(mapOrList, path, schema) {
        // TODO: remove this and unify typing when #330 is fixed
        const pathString = Array.isArray(path) ? this.pathUtilService.toPathString(path) : path;
        if (!schema) {
            schema = this.jsonSchemaService.forPathString(pathString);
        }
        if (schema.type === 'object') {
            const map = mapOrList || Map();
            const finalKeys = this.buildkeysForObject(pathString, map, schema);
            // recursive call
            finalKeys
                .filter(key => this.isObjectOrArray(schema.properties[key]))
                .forEach(key => {
                const nextPath = `${pathString}${this.pathUtilService.separator}${key}`;
                this.buildKeysMapRecursivelyForPath(map.get(key), nextPath, schema.properties[key]);
            });
        }
        else if (schema.componentType === 'table-list') {
            const list = mapOrList || List();
            this.buildKeysForTableList(pathString, list, schema);
            // there is no recursive call for table list items because they aren't expected to have object or object list as property.
        }
        else if (schema.componentType === 'complex-list') {
            const list = mapOrList || List();
            list.forEach((element, index) => {
                const elementPath = `${pathString}${this.pathUtilService.separator}${index}`;
                this.buildKeysMapRecursivelyForPath(element, elementPath, schema.items);
            });
        }
    }
    // default value for `list`, if this is called for alwaysShow in which case `list` would be undefined
    buildKeysForTableList(path, list = List(), schema) {
        // get present unique keys in all items of table-list
        const keys = Seq.Set(list
            .map(object => object.keySeq().toArray())
            .reduce((pre, cur) => pre.concat(cur), []));
        const itemSchema = schema.items;
        const finalKeys = this.schemafy(keys, itemSchema);
        this.setKeys(path, finalKeys);
    }
    // default value for `map`, if this is called for alwaysShow in which case `map` would be undefined
    buildkeysForObject(path, map = Map(), schema) {
        const finalKeys = this.schemafy(map.keySeq(), schema);
        this.setKeys(path, finalKeys);
        return finalKeys;
    }
    /**
     * Filters keys, add alwaysShow fields and sorts by schema.
     */
    schemafy(keys, schema) {
        return keys
            .concat(schema.required || [])
            .filter(key => this.isNotHidden(key, schema) || this.appGlobalsService.adminMode)
            .concat(schema.alwaysShow || [])
            .sort((a, b) => this.compareKeysBySchemaService.compare(a, b, schema))
            .toOrderedSet();
    }
    isNotHidden(key, schema) {
        if (!schema.properties[key]) {
            throw new Error(`"${key}" is not specified as property in \n${JSON.stringify(schema.properties, undefined, 2)}`);
        }
        return !schema.properties[key].hidden;
    }
    isObjectOrArray(schema) {
        return schema.type === 'object' || schema.type === 'array';
    }
    setKeys(path, keys) {
        this.keysMap[path] = keys;
        if (!this.keys$Map[path]) {
            this.keys$Map[path] = new ReplaySubject(1);
        }
        this.keys$Map[path].next(keys);
    }
}
KeysStoreService.ɵfac = function KeysStoreService_Factory(t) { return new (t || KeysStoreService)(i0.ɵɵinject(i1.AppGlobalsService), i0.ɵɵinject(i2.PathUtilService), i0.ɵɵinject(i3.JsonSchemaService), i0.ɵɵinject(i4.CompareKeysBySchemaService)); };
KeysStoreService.ɵprov = i0.ɵɵdefineInjectable({ token: KeysStoreService, factory: KeysStoreService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(KeysStoreService, [{
        type: Injectable
    }], function () { return [{ type: i1.AppGlobalsService }, { type: i2.PathUtilService }, { type: i3.JsonSchemaService }, { type: i4.CompareKeysBySchemaService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9zZXJ2aWNlcy9rZXlzLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBbUIsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBVS9CLE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0IsWUFBb0IsaUJBQW9DLEVBQzlDLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQywwQkFBc0Q7UUFINUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM5QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBTHpELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQThDLENBQUM7SUFLWixDQUFDO0lBRXJFLE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsTUFBa0IsRUFBRSxLQUFXO1FBRS9ELHNGQUFzRjtRQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FB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QUVPLE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBd0I7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dGQXpPVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcCwgTGlzdCwgT3JkZXJlZFNldCwgU2V0LCBTZXEgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBQYXRoVXRpbFNlcnZpY2UgfSBmcm9tICcuL3BhdGgtdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25TY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi9qc29uLXNjaGVtYS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcEdsb2JhbHNTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtZ2xvYmFscy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBhcmVLZXlzQnlTY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi9jb21wYXJlLWtleXMtYnktc2NoZW1hLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXlzU3RvcmVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBrZXlzJE1hcDogeyBbcGF0aDogc3RyaW5nXTogUmVwbGF5U3ViamVjdDxPcmRlcmVkU2V0PHN0cmluZz4+IH07XG4gIHB1YmxpYyBrZXlzTWFwOiB7IFtwYXRoOiBzdHJpbmddOiBPcmRlcmVkU2V0PHN0cmluZz4gfTtcbiAgcHVibGljIG9uS2V5c0NoYW5nZSA9IG5ldyBTdWJqZWN0PHsgcGF0aDogc3RyaW5nLCBrZXlzOiBPcmRlcmVkU2V0PHN0cmluZz4gfT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcEdsb2JhbHNTZXJ2aWNlOiBBcHBHbG9iYWxzU2VydmljZSxcbiAgICBwcml2YXRlIHBhdGhVdGlsU2VydmljZTogUGF0aFV0aWxTZXJ2aWNlLFxuICAgIHByaXZhdGUganNvblNjaGVtYVNlcnZpY2U6IEpzb25TY2hlbWFTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tcGFyZUtleXNCeVNjaGVtYVNlcnZpY2U6IENvbXBhcmVLZXlzQnlTY2hlbWFTZXJ2aWNlKSB7IH1cblxuICBmb3JQYXRoKHBhdGg6IHN0cmluZyk6IFJlcGxheVN1YmplY3Q8T3JkZXJlZFNldDxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMua2V5cyRNYXBbcGF0aF07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGtleSB0byB0aGUgc3BlY2lmaWVkIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIHBhdGggdG8gYWRkIHRoZSBrZXkgdG9cbiAgICogQHBhcmFtIGtleSBrZXkgdG8gYmUgYWRkZWRcbiAgICogQHBhcmFtIHNjaGVtYSBzY2hlbWEgdGhhdCBiZWxvbmdzIHRvIHBhdGggKHNjaGVtYS5pdGVtcyBmb3IgdGFibGUtbGlzdClcbiAgICovXG4gIGFkZEtleShwYXRoOiBzdHJpbmcsIGtleTogc3RyaW5nLCBzY2hlbWE6IEpTT05TY2hlbWEsIHZhbHVlPzogYW55KTogc3RyaW5nIHtcblxuICAgIC8vIEZJWE1FOiBjb3VsZCBkbyBPKGxvZ24pIGluc2VydCBpbnN0ZWFkIG9mIE8obmxvZ24pIHNpbmNlIHRoZSBzZXQgaXMgYWxyZWFkeSBzb3J0ZWQuXG4gICAgdGhpcy5rZXlzTWFwW3BhdGhdID0gdGhpcy5rZXlzTWFwW3BhdGhdXG4gICAgICAuYWRkKGtleSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmNvbXBhcmVLZXlzQnlTY2hlbWFTZXJ2aWNlLmNvbXBhcmUoYSwgYiwgc2NoZW1hKSkgYXMgT3JkZXJlZFNldDxzdHJpbmc+O1xuICAgIHRoaXMua2V5cyRNYXBbcGF0aF0ubmV4dCh0aGlzLmtleXNNYXBbcGF0aF0pO1xuICAgIHRoaXMub25LZXlzQ2hhbmdlLm5leHQoeyBwYXRoLCBrZXlzOiB0aGlzLmtleXNNYXBbcGF0aF0gfSk7XG4gICAgY29uc3QgbmV3S2V5UGF0aCA9IGAke3BhdGh9JHt0aGlzLnBhdGhVdGlsU2VydmljZS5zZXBhcmF0b3J9JHtrZXl9YDtcblxuICAgIGNvbnN0IGtleVNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2tleV07XG4gICAgaWYgKGtleVNjaGVtYS50eXBlID09PSAnb2JqZWN0JyB8fCBrZXlTY2hlbWEuY29tcG9uZW50VHlwZSA9PT0gJ3RhYmxlLWxpc3QnKSB7XG4gICAgICB0aGlzLmJ1aWxkS2V5c01hcFJlY3Vyc2l2ZWx5Rm9yUGF0aCh2YWx1ZSB8fCBNYXA8c3RyaW5nLCBhbnk+KCksIG5ld0tleVBhdGgsIGtleVNjaGVtYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0tleVBhdGg7XG4gIH1cblxuICBkZWxldGVQYXRoKHBhdGg6IEFycmF5PGFueT4pIHtcbiAgICBjb25zdCBsYXN0S2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHBhcmVudFBhdGggPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcocGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIC8vIGRvbid0IGludm9rZSBkZWxldGVLZXkgaWYgcGFyZW50UGF0aCBpcyBwcmltaXRpdmUtbGlzdFxuICAgIGlmICh0aGlzLmtleXNNYXBbcGFyZW50UGF0aF0pIHtcbiAgICAgIHRoaXMuZGVsZXRlS2V5KHBhcmVudFBhdGgsIGxhc3RLZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5jIGtleXMgaW4gc3RvcmUgZm9yIHRoZSBnaXZlbiBwYXRoIG9yIGl0cyBwYXJlbnQsIGdyYW5kIHBhcmVudCBldGMuIGlmIG5lY2Vzc2FyeVxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBwYXRoIHRvIHRoZSAocmUpc2V0IGZpZWxkXG4gICAqIEBwYXJhbSBqc29uIHdob2xlIGpzb25cbiAgICovXG4gIHN5bmNLZXlzRm9yUGF0aChwYXRoOiBBcnJheTxhbnk+LCBqc29uOiBNYXA8c3RyaW5nLCBhbnk+KSB7XG4gICAgLy8gc2VhcmNoIGZyb20gbGVhZiB0byByb290LCB0byBmaW5kIHRoZSBmaXJzdCBwYXRoIHdpdGggZW50cnkgaW4ga2V5cyBtYXBcbiAgICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoLnNsaWNlKDAsIGkpO1xuICAgICAgY29uc3QgY3VycmVudFBhdGhTdHJpbmcgPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcoY3VycmVudFBhdGgpO1xuICAgICAgaWYgKHRoaXMua2V5c01hcFtjdXJyZW50UGF0aFN0cmluZ10pIHtcbiAgICAgICAgLy8gcGF0aFtpXSBpcyBrZXkgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gY3VycmVudFBhdFxuICAgICAgICBjb25zdCBrZXkgPSBwYXRoW2ldO1xuICAgICAgICAvLyBpZiBjdXJyZW50UGF0aCBoYXMgdGhlIGtleVxuICAgICAgICBpZiAodGhpcy5rZXlzTWFwW2N1cnJlbnRQYXRoU3RyaW5nXS5oYXMoa2V5KSkge1xuICAgICAgICAgIC8vIGp1c3QgYnVpbGQgdGhlIHN0b3JlIGtleXMgbWFwIGZvciB0aGF0IC9jdXJyZW50L3BhdGgva2V5IGlmIGl0IGlzIG9iamVjdCBvciBhcnJheVxuICAgICAgICAgIGNvbnN0IGtleVBhdGggPSBjdXJyZW50UGF0aC5jb25jYXQoa2V5KTtcbiAgICAgICAgICBjb25zdCBrZXlTY2hlbWEgPSB0aGlzLmpzb25TY2hlbWFTZXJ2aWNlLmZvclBhdGhBcnJheShrZXlQYXRoKTtcbiAgICAgICAgICBpZiAoa2V5U2NoZW1hLnR5cGUgPT09ICdvYmplY3QnIHx8IGtleVNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkS2V5c01hcFJlY3Vyc2l2ZWx5Rm9yUGF0aChqc29uLmdldEluKGtleVBhdGgpLCBrZXlQYXRoLCBrZXlTY2hlbWEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpZiBjdXJyZW50UGF0aCBkb2Vzbid0IGhhdmUgdGhlIGtleVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY2hlbWEgPSB0aGlzLmpzb25TY2hlbWFTZXJ2aWNlLmZvclBhdGhBcnJheShjdXJyZW50UGF0aCk7XG4gICAgICAgICAgLy8gaWYgY3VycmVudFBhdGggaXMgdG8gYSB0YWJsZSBsaXN0XG4gICAgICAgICAgaWYgKGN1cnJlbnRTY2hlbWEuY29tcG9uZW50VHlwZSA9PT0gJ3RhYmxlLWxpc3QnKSB7XG4gICAgICAgICAgICAvLyBoYXZlIHRvIHJlYnVpbGQga2V5cyBtYXAgZm9yIGl0IGJlY2F1c2Uga2V5IGlzIGhlcmUgYW4gaW5kZXggd2UgZG9uJ3Qga25vdyB3aGF0IHRvIGFkZFxuICAgICAgICAgICAgdGhpcy5idWlsZEtleXNNYXBSZWN1cnNpdmVseUZvclBhdGgoanNvbi5nZXRJbihjdXJyZW50UGF0aCksIGN1cnJlbnRQYXRoLCBjdXJyZW50U2NoZW1hKTtcbiAgICAgICAgICAgIC8vIGlmIG5vdCB0byBhIHRhYmxlIGxpc3QuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGp1c3QgYWRkIHRoZSBrZXkgd2hpY2ggd2lsbCBidWlsZCBrZXlzIG1hcCBmb3IgL2N1cnJlbnQvcGF0aC9rZXkgYXMgd2VsbCBpZiBuZWVkZWRcbiAgICAgICAgICAgIHRoaXMuYWRkS2V5KGN1cnJlbnRQYXRoU3RyaW5nLCBrZXksIGN1cnJlbnRTY2hlbWEsIGpzb24uZ2V0SW4oY3VycmVudFBhdGguY29uY2F0KHBhdGhbaV0pKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGJyZWFrIHdoZW4gYSBlbnRyeSBmb3VuZCBmb3IgYSBwYXRoIGluIGtleXMgbWFwXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUtleShwYXJlbnRQYXRoOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG4gICAgLy8gcmVtb3ZlIGRlbGV0ZWQgb25lIGZyb20gcGFyZW50XG4gICAgdGhpcy5rZXlzTWFwW3BhcmVudFBhdGhdID0gdGhpcy5rZXlzTWFwW3BhcmVudFBhdGhdLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMua2V5cyRNYXBbcGFyZW50UGF0aF0ubmV4dCh0aGlzLmtleXNNYXBbcGFyZW50UGF0aF0pO1xuICAgIHRoaXMub25LZXlzQ2hhbmdlLm5leHQoeyBwYXRoOiBwYXJlbnRQYXRoLCBrZXlzOiB0aGlzLmtleXNNYXBbcGFyZW50UGF0aF0gfSk7XG4gICAgLy8gZGVsZXRlIGtleXMgZm9yIGRlbGV0ZWQgb25lXG4gICAgY29uc3QgZGVsZXRlZEtleVBhdGggPSBgJHtwYXJlbnRQYXRofSR7dGhpcy5wYXRoVXRpbFNlcnZpY2Uuc2VwYXJhdG9yfSR7a2V5fWA7XG4gICAgZGVsZXRlIHRoaXMua2V5c01hcFtkZWxldGVkS2V5UGF0aF07XG4gICAgZGVsZXRlIHRoaXMua2V5cyRNYXBbZGVsZXRlZEtleVBhdGhdO1xuICAgIC8vIGRlbGV0ZSBrZXlzIGZvciBhbGwgY2hpbGRyZW4gb2YgdGhlIGRlbGV0ZWQgb25lXG4gICAgY29uc3QgZGVsZXRlZEtleVBhdGhDaGlsZFByZWZpeCA9IGRlbGV0ZWRLZXlQYXRoICsgdGhpcy5wYXRoVXRpbFNlcnZpY2Uuc2VwYXJhdG9yO1xuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5c01hcClcbiAgICAgIC5maWx0ZXIocGF0aCA9PiBwYXRoLnN0YXJ0c1dpdGgoZGVsZXRlZEtleVBhdGhDaGlsZFByZWZpeCkpXG4gICAgICAuZm9yRWFjaChjaGlsZFBhdGggPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlzTWFwW2NoaWxkUGF0aF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleXMkTWFwW2NoaWxkUGF0aF07XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2FwcyBrZXlzIG9mIGdpdmVuIHR3byBpbmRpY2VzIGluIG9iamVjdCBsaXN0IHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBzd2FwTGlzdEVsZW1lbnRLZXlzKGxpc3RQYXRoOiBBcnJheTxhbnk+LCBpbmRleDE6IG51bWJlciwgaW5kZXgyOiBudW1iZXIpIHtcbiAgICBjb25zdCBsaXN0U2NoZW1hID0gdGhpcy5qc29uU2NoZW1hU2VydmljZS5mb3JQYXRoQXJyYXkobGlzdFBhdGgpO1xuICAgIGlmIChsaXN0U2NoZW1hLmNvbXBvbmVudFR5cGUgIT09ICdjb21wbGV4LWxpc3QnKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3QgbGlzdFBhdGhTdHJpbmcgPSB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcobGlzdFBhdGgpO1xuICAgIGNvbnN0IHBzMSA9IGAke2xpc3RQYXRoU3RyaW5nfSR7dGhpcy5wYXRoVXRpbFNlcnZpY2Uuc2VwYXJhdG9yfSR7aW5kZXgxfWA7XG4gICAgY29uc3QgcHMyID0gYCR7bGlzdFBhdGhTdHJpbmd9JHt0aGlzLnBhdGhVdGlsU2VydmljZS5zZXBhcmF0b3J9JHtpbmRleDJ9YDtcbiAgICBjb25zdCBrZXlzMSA9IHRoaXMua2V5c01hcFtwczFdO1xuICAgIHRoaXMuc2V0S2V5cyhwczEsIHRoaXMua2V5c01hcFtwczJdKTtcbiAgICB0aGlzLnNldEtleXMocHMyLCBrZXlzMSk7XG4gICAgLy8gc3dhcCBjaGlsZHJlbiBhcyB3ZWxsXG4gICAgY29uc3QgcHMxQ2hpbGRQcmVmaXggPSBwczEgKyB0aGlzLnBhdGhVdGlsU2VydmljZS5zZXBhcmF0b3I7XG4gICAgY29uc3QgcHMyQ2hpbGRQcmVmaXggPSBwczIgKyB0aGlzLnBhdGhVdGlsU2VydmljZS5zZXBhcmF0b3I7XG4gICAgY29uc3QgY2hpbGRyZW5Td2FwczogQXJyYXk8eyBmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcsIGtleXM6IE9yZGVyZWRTZXQ8c3RyaW5nPiB9PiA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5c01hcClcbiAgICAgIC5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKHBzMUNoaWxkUHJlZml4KSkge1xuICAgICAgICAgIGNvbnN0IHRvUGF0aCA9IHBhdGgucmVwbGFjZShwczFDaGlsZFByZWZpeCwgcHMyQ2hpbGRQcmVmaXgpO1xuICAgICAgICAgIGNoaWxkcmVuU3dhcHMucHVzaCh7IGZyb206IHBhdGgsIHRvOiB0b1BhdGgsIGtleXM6IHRoaXMua2V5c01hcFtwYXRoXSB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgocHMyQ2hpbGRQcmVmaXgpKSB7XG4gICAgICAgICAgY29uc3QgdG9QYXRoID0gcGF0aC5yZXBsYWNlKHBzMkNoaWxkUHJlZml4LCBwczFDaGlsZFByZWZpeCk7XG4gICAgICAgICAgY2hpbGRyZW5Td2Fwcy5wdXNoKHsgZnJvbTogcGF0aCwgdG86IHRvUGF0aCwga2V5czogdGhpcy5rZXlzTWFwW3BhdGhdIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBjaGlsZHJlblN3YXBzXG4gICAgICAuZm9yRWFjaChzd2FwID0+IHtcbiAgICAgICAgdGhpcy5zZXRLZXlzKHN3YXAudG8sIHN3YXAua2V5cyk7XG4gICAgICAgIHRoaXMub25LZXlzQ2hhbmdlLm5leHQoeyBwYXRoOiBzd2FwLnRvLCBrZXlzOiB0aGlzLmtleXNNYXBbc3dhcC50b10gfSk7XG4gICAgICB9KTtcbiAgICBjaGlsZHJlblN3YXBzXG4gICAgICAuZmlsdGVyKHN3YXAgPT4gIWNoaWxkcmVuU3dhcHMuc29tZShvdGhlclN3YXAgPT4gc3dhcC5mcm9tID09PSBvdGhlclN3YXAudG8pKVxuICAgICAgLmZvckVhY2goc3dhcCA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleXNNYXBbc3dhcC5mcm9tXTtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5cyRNYXBbc3dhcC5mcm9tXTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYnVpbGRLZXlzTWFwKGpzb246IE1hcDxzdHJpbmcsIGFueT4sIHNjaGVtYTogSlNPTlNjaGVtYSkge1xuICAgIHRoaXMua2V5cyRNYXAgPSB7fTtcbiAgICB0aGlzLmtleXNNYXAgPSB7fTtcbiAgICB0aGlzLmJ1aWxkS2V5c01hcFJlY3Vyc2l2ZWx5Rm9yUGF0aChqc29uLCAnJywgc2NoZW1hKTtcbiAgfVxuXG4gIGJ1aWxkS2V5c01hcFJlY3Vyc2l2ZWx5Rm9yUGF0aChtYXBPckxpc3Q6IGFueSwgcGF0aDogc3RyaW5nIHwgQXJyYXk8YW55Piwgc2NoZW1hPzogSlNPTlNjaGVtYSkge1xuICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGFuZCB1bmlmeSB0eXBpbmcgd2hlbiAjMzMwIGlzIGZpeGVkXG4gICAgY29uc3QgcGF0aFN0cmluZyA9IEFycmF5LmlzQXJyYXkocGF0aCkgPyB0aGlzLnBhdGhVdGlsU2VydmljZS50b1BhdGhTdHJpbmcocGF0aCkgOiBwYXRoO1xuXG4gICAgaWYgKCFzY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IHRoaXMuanNvblNjaGVtYVNlcnZpY2UuZm9yUGF0aFN0cmluZyhwYXRoU3RyaW5nKTtcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBtYXAgPSBtYXBPckxpc3QgYXMgTWFwPHN0cmluZywgYW55PiB8fCBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgICBjb25zdCBmaW5hbEtleXMgPSB0aGlzLmJ1aWxka2V5c0Zvck9iamVjdChwYXRoU3RyaW5nLCBtYXAsIHNjaGVtYSk7XG5cbiAgICAgIC8vIHJlY3Vyc2l2ZSBjYWxsXG4gICAgICBmaW5hbEtleXNcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gdGhpcy5pc09iamVjdE9yQXJyYXkoc2NoZW1hLnByb3BlcnRpZXNba2V5XSkpXG4gICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dFBhdGggPSBgJHtwYXRoU3RyaW5nfSR7dGhpcy5wYXRoVXRpbFNlcnZpY2Uuc2VwYXJhdG9yfSR7a2V5fWA7XG4gICAgICAgICAgdGhpcy5idWlsZEtleXNNYXBSZWN1cnNpdmVseUZvclBhdGgobWFwLmdldChrZXkpLCBuZXh0UGF0aCwgc2NoZW1hLnByb3BlcnRpZXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoc2NoZW1hLmNvbXBvbmVudFR5cGUgPT09ICd0YWJsZS1saXN0Jykge1xuICAgICAgY29uc3QgbGlzdCA9IG1hcE9yTGlzdCBhcyBMaXN0PE1hcDxzdHJpbmcsIGFueT4+IHx8IExpc3Q8TWFwPHN0cmluZywgYW55Pj4oKTtcbiAgICAgIHRoaXMuYnVpbGRLZXlzRm9yVGFibGVMaXN0KHBhdGhTdHJpbmcsIGxpc3QsIHNjaGVtYSk7XG4gICAgICAvLyB0aGVyZSBpcyBubyByZWN1cnNpdmUgY2FsbCBmb3IgdGFibGUgbGlzdCBpdGVtcyBiZWNhdXNlIHRoZXkgYXJlbid0IGV4cGVjdGVkIHRvIGhhdmUgb2JqZWN0IG9yIG9iamVjdCBsaXN0IGFzIHByb3BlcnR5LlxuICAgIH0gZWxzZSBpZiAoc2NoZW1hLmNvbXBvbmVudFR5cGUgPT09ICdjb21wbGV4LWxpc3QnKSB7XG4gICAgICBjb25zdCBsaXN0ID0gbWFwT3JMaXN0IGFzIExpc3Q8TWFwPHN0cmluZywgYW55Pj4gfHwgTGlzdDxNYXA8c3RyaW5nLCBhbnk+PigpO1xuICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50UGF0aCA9IGAke3BhdGhTdHJpbmd9JHt0aGlzLnBhdGhVdGlsU2VydmljZS5zZXBhcmF0b3J9JHtpbmRleH1gO1xuICAgICAgICB0aGlzLmJ1aWxkS2V5c01hcFJlY3Vyc2l2ZWx5Rm9yUGF0aChlbGVtZW50LCBlbGVtZW50UGF0aCwgc2NoZW1hLml0ZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHQgdmFsdWUgZm9yIGBsaXN0YCwgaWYgdGhpcyBpcyBjYWxsZWQgZm9yIGFsd2F5c1Nob3cgaW4gd2hpY2ggY2FzZSBgbGlzdGAgd291bGQgYmUgdW5kZWZpbmVkXG4gIHByaXZhdGUgYnVpbGRLZXlzRm9yVGFibGVMaXN0KHBhdGg6IHN0cmluZywgbGlzdCA9IExpc3Q8TWFwPHN0cmluZywgYW55Pj4oKSwgc2NoZW1hOiBKU09OU2NoZW1hKSB7XG4gICAgLy8gZ2V0IHByZXNlbnQgdW5pcXVlIGtleXMgaW4gYWxsIGl0ZW1zIG9mIHRhYmxlLWxpc3RcbiAgICBjb25zdCBrZXlzID0gU2VxLlNldChsaXN0XG4gICAgICAubWFwKG9iamVjdCA9PiBvYmplY3Qua2V5U2VxKCkudG9BcnJheSgpKVxuICAgICAgLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZS5jb25jYXQoY3VyKSwgW10pKTtcbiAgICBjb25zdCBpdGVtU2NoZW1hID0gc2NoZW1hLml0ZW1zO1xuICAgIGNvbnN0IGZpbmFsS2V5cyA9IHRoaXMuc2NoZW1hZnkoa2V5cywgaXRlbVNjaGVtYSk7XG4gICAgdGhpcy5zZXRLZXlzKHBhdGgsIGZpbmFsS2V5cyk7XG4gIH1cblxuICAvLyBkZWZhdWx0IHZhbHVlIGZvciBgbWFwYCwgaWYgdGhpcyBpcyBjYWxsZWQgZm9yIGFsd2F5c1Nob3cgaW4gd2hpY2ggY2FzZSBgbWFwYCB3b3VsZCBiZSB1bmRlZmluZWRcbiAgcHJpdmF0ZSBidWlsZGtleXNGb3JPYmplY3QocGF0aDogc3RyaW5nLCBtYXAgPSBNYXA8c3RyaW5nLCBhbnk+KCksIHNjaGVtYTogSlNPTlNjaGVtYSk6IE9yZGVyZWRTZXQ8c3RyaW5nPiB7XG4gICAgY29uc3QgZmluYWxLZXlzID0gdGhpcy5zY2hlbWFmeShtYXAua2V5U2VxKCksIHNjaGVtYSk7XG4gICAgdGhpcy5zZXRLZXlzKHBhdGgsIGZpbmFsS2V5cyk7XG4gICAgcmV0dXJuIGZpbmFsS2V5cztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIGtleXMsIGFkZCBhbHdheXNTaG93IGZpZWxkcyBhbmQgc29ydHMgYnkgc2NoZW1hLlxuICAgKi9cbiAgcHJpdmF0ZSBzY2hlbWFmeShrZXlzOiBTZXE8bnVtYmVyLCBzdHJpbmc+LCBzY2hlbWE6IEpTT05TY2hlbWEpOiBPcmRlcmVkU2V0PHN0cmluZz4ge1xuICAgIHJldHVybiBrZXlzXG4gICAgICAuY29uY2F0KHNjaGVtYS5yZXF1aXJlZCB8fCBbXSlcbiAgICAgIC5maWx0ZXIoa2V5ID0+IHRoaXMuaXNOb3RIaWRkZW4oa2V5LCBzY2hlbWEpIHx8IHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UuYWRtaW5Nb2RlKVxuICAgICAgLmNvbmNhdChzY2hlbWEuYWx3YXlzU2hvdyB8fCBbXSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmNvbXBhcmVLZXlzQnlTY2hlbWFTZXJ2aWNlLmNvbXBhcmUoYSwgYiwgc2NoZW1hKSlcbiAgICAgIC50b09yZGVyZWRTZXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNOb3RIaWRkZW4oa2V5OiBzdHJpbmcsIHNjaGVtYTogSlNPTlNjaGVtYSk6IGJvb2xlYW4ge1xuICAgIGlmICghc2NoZW1hLnByb3BlcnRpZXNba2V5XSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7a2V5fVwiIGlzIG5vdCBzcGVjaWZpZWQgYXMgcHJvcGVydHkgaW4gXFxuJHtKU09OLnN0cmluZ2lmeShzY2hlbWEucHJvcGVydGllcywgdW5kZWZpbmVkLCAyKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuICFzY2hlbWEucHJvcGVydGllc1trZXldLmhpZGRlbjtcbiAgfVxuXG4gIHByaXZhdGUgaXNPYmplY3RPckFycmF5KHNjaGVtYTogSlNPTlNjaGVtYSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgfHwgc2NoZW1hLnR5cGUgPT09ICdhcnJheSc7XG4gIH1cblxuICBwcml2YXRlIHNldEtleXMocGF0aDogc3RyaW5nLCBrZXlzOiBPcmRlcmVkU2V0PHN0cmluZz4pIHtcbiAgICB0aGlzLmtleXNNYXBbcGF0aF0gPSBrZXlzO1xuICAgIGlmICghdGhpcy5rZXlzJE1hcFtwYXRoXSkge1xuICAgICAgdGhpcy5rZXlzJE1hcFtwYXRoXSA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgIH1cbiAgICB0aGlzLmtleXMkTWFwW3BhdGhdLm5leHQoa2V5cyk7XG4gIH1cbn1cbiJdfQ==