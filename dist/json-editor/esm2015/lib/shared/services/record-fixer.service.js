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
import * as i1 from "./empty-value.service";
import * as i2 from "./component-type.service";
export class RecordFixerService {
    constructor(emptyValueService, componentTypeService) {
        this.emptyValueService = emptyValueService;
        this.componentTypeService = componentTypeService;
    }
    /**
     * Fixes given record according to given schema, in other words
     * changes it to match the format expected the by te json-editor
     *
     * @param rawRecord - json record to be fixed
     * @param schema - extended schema of rawRecord
     * @return - fixed record
     */
    fixRecord(rawRecord, schema) {
        const record = Object.assign({}, rawRecord);
        Object.keys(record).forEach(field => {
            if (!schema.properties[field]) {
                // Delete if field is not in schema!
                this.deleteField(record, field);
            }
            else {
                // Fix the field and all children.
                this.fix(field, record, schema.properties[field]);
            }
        });
        return record;
    }
    /**
     * Visits all parts of record recursivly, along with the subschema of the part
     * and apply required fixes.
     *
     * NOTE: the reason that parent and key are passed instead of the direct value
     * is to be able do some operations that needs the parent such as `delete`.
     *
     * TODO: add special case for arrays because fixes are the same for
     * all elements.
     *
     * @param key - field name or element index
     * @param parent - parent of the field/element
     * @param schema - schema of visited field/element
     */
    fix(key, parent, schema) {
        if (schema.hidden) {
            return;
        }
        // Fixes for each type/condition, can be added below.
        const value = parent[key];
        // Recursive calls
        if (schema.type === 'object') {
            if (!schema.properties) {
                throw new Error(`"${key}"'s schema has "type": "object" but doesn't specify "properties"`);
            }
            else if (!(value instanceof Object)) {
                throw new Error(`"${key}" in ${JSON.stringify(value, null, 2)} is specified as "object" by schema but it is not an object in json`);
            }
            // Looping over record to filter out fields that are not in schema.
            Object.keys(value).forEach(prop => {
                if (!schema.properties[prop]) {
                    // we don't like fields without schema!
                    this.deleteField(value, prop);
                }
                else {
                    this.fix(prop, value, schema.properties[prop]);
                }
            });
        }
        else if (schema.type === 'array') {
            if (!schema.items) {
                throw new Error(`"${key}"'s schema has "type": "array" but doesn't specify "items"`);
            }
            else if (!Array.isArray(value)) {
                throw new Error(`"${key}" in ${JSON.stringify(value, null, 2)} is specified as "array" by schema but it is not an array in json`);
            }
            value.forEach((element, index) => {
                this.fix(index, value, schema.items);
            });
        }
    }
    /**
     * Deletes given field from the given object.
     * Used for deleting fields that aren't on the schema.
     *
     * TODO: replace this with only `delete` when logging is not necessary!
     */
    deleteField(object, field) {
        delete object[field];
        console.warn(`"${field}" is removed from input json since it's not in the schema`);
    }
}
RecordFixerService.ɵfac = function RecordFixerService_Factory(t) { return new (t || RecordFixerService)(i0.ɵɵinject(i1.EmptyValueService), i0.ɵɵinject(i2.ComponentTypeService)); };
RecordFixerService.ɵprov = i0.ɵɵdefineInjectable({ token: RecordFixerService, factory: RecordFixerService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RecordFixerService, [{
        type: Injectable
    }], function () { return [{ type: i1.EmptyValueService }, { type: i2.ComponentTypeService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWZpeGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL3JlY29yZC1maXhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPM0MsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixZQUFvQixpQkFBb0MsRUFDOUMsb0JBQTBDO1FBRGhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDOUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUFJLENBQUM7SUFFekQ7Ozs7Ozs7T0FPRztJQUNILFNBQVMsQ0FBQyxTQUFpQixFQUFFLE1BQWtCO1FBQzdDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QixvQ0FBb0M7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSyxHQUFHLENBQUMsR0FBb0IsRUFBRSxNQUEyQixFQUFFLE1BQWtCO1FBQy9FLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxxREFBcUQ7UUFDckQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLGtCQUFrQjtRQUNsQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxrRUFBa0UsQ0FBQyxDQUFDO2FBQzVGO2lCQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUMsRUFBRTtnQkFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7YUFDckk7WUFDRCxtRUFBbUU7WUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM1Qix1Q0FBdUM7b0JBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyw0REFBNEQsQ0FBQyxDQUFDO2FBQ3RGO2lCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsbUVBQW1FLENBQUMsQ0FBQzthQUNuSTtZQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLFdBQVcsQ0FBQyxNQUFjLEVBQUUsS0FBYTtRQUMvQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSywyREFBMkQsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7O29GQXRGVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1wdHlWYWx1ZVNlcnZpY2UgfSBmcm9tICcuL2VtcHR5LXZhbHVlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZVNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC10eXBlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkRml4ZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtcHR5VmFsdWVTZXJ2aWNlOiBFbXB0eVZhbHVlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbXBvbmVudFR5cGVTZXJ2aWNlOiBDb21wb25lbnRUeXBlU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIEZpeGVzIGdpdmVuIHJlY29yZCBhY2NvcmRpbmcgdG8gZ2l2ZW4gc2NoZW1hLCBpbiBvdGhlciB3b3Jkc1xuICAgKiBjaGFuZ2VzIGl0IHRvIG1hdGNoIHRoZSBmb3JtYXQgZXhwZWN0ZWQgdGhlIGJ5IHRlIGpzb24tZWRpdG9yXG4gICAqXG4gICAqIEBwYXJhbSByYXdSZWNvcmQgLSBqc29uIHJlY29yZCB0byBiZSBmaXhlZFxuICAgKiBAcGFyYW0gc2NoZW1hIC0gZXh0ZW5kZWQgc2NoZW1hIG9mIHJhd1JlY29yZFxuICAgKiBAcmV0dXJuIC0gZml4ZWQgcmVjb3JkXG4gICAqL1xuICBmaXhSZWNvcmQocmF3UmVjb3JkOiBvYmplY3QsIHNjaGVtYTogSlNPTlNjaGVtYSk6IG9iamVjdCB7XG4gICAgY29uc3QgcmVjb3JkID0gT2JqZWN0LmFzc2lnbih7fSwgcmF3UmVjb3JkKTtcbiAgICBPYmplY3Qua2V5cyhyZWNvcmQpLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgaWYgKCFzY2hlbWEucHJvcGVydGllc1tmaWVsZF0pIHtcbiAgICAgICAgLy8gRGVsZXRlIGlmIGZpZWxkIGlzIG5vdCBpbiBzY2hlbWEhXG4gICAgICAgIHRoaXMuZGVsZXRlRmllbGQocmVjb3JkLCBmaWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXggdGhlIGZpZWxkIGFuZCBhbGwgY2hpbGRyZW4uXG4gICAgICAgIHRoaXMuZml4KGZpZWxkLCByZWNvcmQsIHNjaGVtYS5wcm9wZXJ0aWVzW2ZpZWxkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlY29yZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXNpdHMgYWxsIHBhcnRzIG9mIHJlY29yZCByZWN1cnNpdmx5LCBhbG9uZyB3aXRoIHRoZSBzdWJzY2hlbWEgb2YgdGhlIHBhcnRcbiAgICogYW5kIGFwcGx5IHJlcXVpcmVkIGZpeGVzLlxuICAgKlxuICAgKiBOT1RFOiB0aGUgcmVhc29uIHRoYXQgcGFyZW50IGFuZCBrZXkgYXJlIHBhc3NlZCBpbnN0ZWFkIG9mIHRoZSBkaXJlY3QgdmFsdWVcbiAgICogaXMgdG8gYmUgYWJsZSBkbyBzb21lIG9wZXJhdGlvbnMgdGhhdCBuZWVkcyB0aGUgcGFyZW50IHN1Y2ggYXMgYGRlbGV0ZWAuXG4gICAqXG4gICAqIFRPRE86IGFkZCBzcGVjaWFsIGNhc2UgZm9yIGFycmF5cyBiZWNhdXNlIGZpeGVzIGFyZSB0aGUgc2FtZSBmb3JcbiAgICogYWxsIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IC0gZmllbGQgbmFtZSBvciBlbGVtZW50IGluZGV4XG4gICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgb2YgdGhlIGZpZWxkL2VsZW1lbnRcbiAgICogQHBhcmFtIHNjaGVtYSAtIHNjaGVtYSBvZiB2aXNpdGVkIGZpZWxkL2VsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZml4KGtleTogc3RyaW5nIHwgbnVtYmVyLCBwYXJlbnQ6IG9iamVjdCB8IEFycmF5PGFueT4sIHNjaGVtYTogSlNPTlNjaGVtYSkge1xuICAgIGlmIChzY2hlbWEuaGlkZGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRml4ZXMgZm9yIGVhY2ggdHlwZS9jb25kaXRpb24sIGNhbiBiZSBhZGRlZCBiZWxvdy5cbiAgICBjb25zdCB2YWx1ZSA9IHBhcmVudFtrZXldO1xuXG4gICAgLy8gUmVjdXJzaXZlIGNhbGxzXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCFzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtrZXl9XCIncyBzY2hlbWEgaGFzIFwidHlwZVwiOiBcIm9iamVjdFwiIGJ1dCBkb2Vzbid0IHNwZWNpZnkgXCJwcm9wZXJ0aWVzXCJgKTtcbiAgICAgIH0gZWxzZSBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7a2V5fVwiIGluICR7SlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpfSBpcyBzcGVjaWZpZWQgYXMgXCJvYmplY3RcIiBieSBzY2hlbWEgYnV0IGl0IGlzIG5vdCBhbiBvYmplY3QgaW4ganNvbmApO1xuICAgICAgfVxuICAgICAgLy8gTG9vcGluZyBvdmVyIHJlY29yZCB0byBmaWx0ZXIgb3V0IGZpZWxkcyB0aGF0IGFyZSBub3QgaW4gc2NoZW1hLlxuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgIGlmICghc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBsaWtlIGZpZWxkcyB3aXRob3V0IHNjaGVtYSFcbiAgICAgICAgICB0aGlzLmRlbGV0ZUZpZWxkKHZhbHVlLCBwcm9wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZpeChwcm9wLCB2YWx1ZSwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBpZiAoIXNjaGVtYS5pdGVtcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtrZXl9XCIncyBzY2hlbWEgaGFzIFwidHlwZVwiOiBcImFycmF5XCIgYnV0IGRvZXNuJ3Qgc3BlY2lmeSBcIml0ZW1zXCJgKTtcbiAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke2tleX1cIiBpbiAke0pTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKX0gaXMgc3BlY2lmaWVkIGFzIFwiYXJyYXlcIiBieSBzY2hlbWEgYnV0IGl0IGlzIG5vdCBhbiBhcnJheSBpbiBqc29uYCk7XG4gICAgICB9XG4gICAgICB2YWx1ZS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpeChpbmRleCwgdmFsdWUsIHNjaGVtYS5pdGVtcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBnaXZlbiBmaWVsZCBmcm9tIHRoZSBnaXZlbiBvYmplY3QuXG4gICAqIFVzZWQgZm9yIGRlbGV0aW5nIGZpZWxkcyB0aGF0IGFyZW4ndCBvbiB0aGUgc2NoZW1hLlxuICAgKlxuICAgKiBUT0RPOiByZXBsYWNlIHRoaXMgd2l0aCBvbmx5IGBkZWxldGVgIHdoZW4gbG9nZ2luZyBpcyBub3QgbmVjZXNzYXJ5IVxuICAgKi9cbiAgcHJpdmF0ZSBkZWxldGVGaWVsZChvYmplY3Q6IG9iamVjdCwgZmllbGQ6IHN0cmluZykge1xuICAgIGRlbGV0ZSBvYmplY3RbZmllbGRdO1xuICAgIGNvbnNvbGUud2FybihgXCIke2ZpZWxkfVwiIGlzIHJlbW92ZWQgZnJvbSBpbnB1dCBqc29uIHNpbmNlIGl0J3Mgbm90IGluIHRoZSBzY2hlbWFgKTtcbiAgfVxufVxuIl19