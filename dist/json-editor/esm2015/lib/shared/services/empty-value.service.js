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
import { fromJS } from 'immutable';
import * as i0 from "@angular/core";
export class EmptyValueService {
    generateEmptyValue(schema) {
        const emptyValue = this.generateEmptyValueRecursively(schema);
        if (typeof emptyValue === 'object') {
            return fromJS(emptyValue);
        }
        else {
            return emptyValue;
        }
    }
    generateEmptyValueRecursively(schema) {
        if (schema.default) {
            return schema.default;
        }
        if (schema.type === 'object') {
            const emptyObject = {};
            Object.keys(schema.properties)
                .filter(prop => {
                const required = schema.required || [];
                const alwaysShow = schema.alwaysShow || [];
                return required.indexOf(prop) > -1 || alwaysShow.indexOf(prop) > -1;
            }).forEach(prop => {
                const propSchema = schema.properties[prop];
                emptyObject[prop] = this.generateEmptyValueRecursively(propSchema);
            });
            return emptyObject;
        }
        if (schema.type === 'array') {
            const emptyArray = [];
            const arrayElementSchema = schema.items;
            if (schema.componentType !== 'complex-list') {
                emptyArray.push(this.generateEmptyValueRecursively(arrayElementSchema));
            }
            return emptyArray;
        }
        return EmptyValueService.defaultValueLookup[schema.type];
    }
}
EmptyValueService.defaultValueLookup = {
    'string': '',
    'boolean': false
};
EmptyValueService.ɵfac = function EmptyValueService_Factory(t) { return new (t || EmptyValueService)(); };
EmptyValueService.ɵprov = i0.ɵɵdefineInjectable({ token: EmptyValueService, factory: EmptyValueService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmptyValueService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktdmFsdWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvZW1wdHktdmFsdWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBS25DLE1BQU0sT0FBTyxpQkFBaUI7SUFPNUIsa0JBQWtCLENBQUMsTUFBa0I7UUFDbkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxPQUFPLFVBQVUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFTyw2QkFBNkIsQ0FBQyxNQUFrQjtRQUN0RCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2lCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO2dCQUMzQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7WUFDTCxPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDM0IsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssY0FBYyxFQUFFO2dCQUMzQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7YUFDekU7WUFDRCxPQUFPLFVBQVUsQ0FBQztTQUNuQjtRQUVELE9BQU8saUJBQWlCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7O0FBM0NjLG9DQUFrQixHQUFHO0lBQ2xDLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztrRkFMUyxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21KUyB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7IEpTT05TY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtcHR5VmFsdWVTZXJ2aWNlIHtcblxuICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0VmFsdWVMb29rdXAgPSB7XG4gICAgJ3N0cmluZyc6ICcnLFxuICAgICdib29sZWFuJzogZmFsc2VcbiAgfTtcblxuICBnZW5lcmF0ZUVtcHR5VmFsdWUoc2NoZW1hOiBKU09OU2NoZW1hKTogYW55IHtcbiAgICBjb25zdCBlbXB0eVZhbHVlID0gdGhpcy5nZW5lcmF0ZUVtcHR5VmFsdWVSZWN1cnNpdmVseShzY2hlbWEpO1xuICAgIGlmICh0eXBlb2YgZW1wdHlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmcm9tSlMoZW1wdHlWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbXB0eVZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVFbXB0eVZhbHVlUmVjdXJzaXZlbHkoc2NoZW1hOiBKU09OU2NoZW1hKTogYW55IHtcbiAgICBpZiAoc2NoZW1hLmRlZmF1bHQpIHtcbiAgICAgIHJldHVybiBzY2hlbWEuZGVmYXVsdDtcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBlbXB0eU9iamVjdCA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpXG4gICAgICAgIC5maWx0ZXIocHJvcCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQgfHwgW107XG4gICAgICAgICAgY29uc3QgYWx3YXlzU2hvdyA9IHNjaGVtYS5hbHdheXNTaG93IHx8IFtdO1xuICAgICAgICAgIHJldHVybiByZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTEgfHwgYWx3YXlzU2hvdy5pbmRleE9mKHByb3ApID4gLTE7XG4gICAgICAgIH0pLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcFNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgICAgICAgIGVtcHR5T2JqZWN0W3Byb3BdID0gdGhpcy5nZW5lcmF0ZUVtcHR5VmFsdWVSZWN1cnNpdmVseShwcm9wU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gZW1wdHlPYmplY3Q7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBjb25zdCBlbXB0eUFycmF5ID0gW107XG4gICAgICBjb25zdCBhcnJheUVsZW1lbnRTY2hlbWEgPSBzY2hlbWEuaXRlbXM7XG4gICAgICBpZiAoc2NoZW1hLmNvbXBvbmVudFR5cGUgIT09ICdjb21wbGV4LWxpc3QnKSB7XG4gICAgICAgIGVtcHR5QXJyYXkucHVzaCh0aGlzLmdlbmVyYXRlRW1wdHlWYWx1ZVJlY3Vyc2l2ZWx5KGFycmF5RWxlbWVudFNjaGVtYSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5QXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEVtcHR5VmFsdWVTZXJ2aWNlLmRlZmF1bHRWYWx1ZUxvb2t1cFtzY2hlbWEudHlwZV07XG4gIH1cblxufVxuIl19