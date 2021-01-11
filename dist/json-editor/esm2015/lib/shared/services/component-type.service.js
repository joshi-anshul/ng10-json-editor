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
export class ComponentTypeService {
    /**
     * It returns the editor specific type of given schema
     * In other words, which component to use for given schema.
     *
     * Possible values:
     *  - string, number, boolean, object, enum
     *  - primitive-list, table-list, complex-list
     *  - disabled, autocomplete
     *
     * @param {Object} schema
     * @return {string}
     */
    getComponentType(schema) {
        if (!schema) {
            throw new Error('schema is undefined');
        }
        const schemaType = schema.type;
        if (!schemaType) {
            if (Object.keys(schema).length === 0) { // if shema === {} (empty object)
                return 'raw';
            }
        }
        else if (schemaType === 'string') {
            if (schema.autocompletionConfig) {
                return 'autocomplete';
            }
            else if (schema.enum) {
                return 'enum';
            }
        }
        else if (schemaType === 'object') {
            if (schema.properties['$ref']) {
                return 'ref';
            }
        }
        else if (schemaType === 'array') {
            const itemSchema = schema.items;
            if (itemSchema.type === 'object' && !itemSchema.properties['$ref']) {
                // complex-array: if it's an object array
                // if its elements have at least a property with object (not ref-field)
                // or a non-primitive array.
                const isComplexArray = Object.keys(itemSchema.properties)
                    .some(prop => {
                    const propSchema = itemSchema.properties[prop];
                    return (propSchema.type === 'object' && !propSchema.properties['$ref']) ||
                        (propSchema.type === 'array' && (propSchema.items.type === 'object' || propSchema.items.type === 'array'));
                });
                if (isComplexArray) {
                    return 'complex-list';
                }
                else {
                    return 'table-list';
                }
            }
            else {
                // if schema.items.type is not object!
                return 'primitive-list';
            }
        }
        // execution reaches here if schemaType is either
        // 'number', 'integer', 'string' or something else which is currently not supported
        return schemaType;
    }
}
ComponentTypeService.ɵfac = function ComponentTypeService_Factory(t) { return new (t || ComponentTypeService)(); };
ComponentTypeService.ɵprov = i0.ɵɵdefineInjectable({ token: ComponentTypeService, factory: ComponentTypeService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentTypeService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXR5cGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvY29tcG9uZW50LXR5cGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9COzs7Ozs7Ozs7OztPQVdHO0lBQ0gsZ0JBQWdCLENBQUMsTUFBa0I7UUFDakMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN4QztRQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLEVBQUUsaUNBQWlDO2dCQUN2RSxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDbEMsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEVBQUU7Z0JBQy9CLE9BQU8sY0FBYyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDdEIsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO2FBQU0sSUFBSSxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ2xDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO2FBQU0sSUFBSSxVQUFVLEtBQUssT0FBTyxFQUFFO1lBQ2pDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2xFLHlDQUF5QztnQkFDekMsdUVBQXVFO2dCQUN2RSw0QkFBNEI7Z0JBQzVCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztxQkFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNYLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3JFLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDL0csQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLE9BQU8sY0FBYyxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDTCxPQUFPLFlBQVksQ0FBQztpQkFDckI7YUFDRjtpQkFBTTtnQkFDTCxzQ0FBc0M7Z0JBQ3RDLE9BQU8sZ0JBQWdCLENBQUM7YUFDekI7U0FDRjtRQUNELGlEQUFpRDtRQUNqRCxtRkFBbUY7UUFDbkYsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7d0ZBM0RVLG9CQUFvQjs0REFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRUeXBlU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEl0IHJldHVybnMgdGhlIGVkaXRvciBzcGVjaWZpYyB0eXBlIG9mIGdpdmVuIHNjaGVtYVxuICAgKiBJbiBvdGhlciB3b3Jkcywgd2hpY2ggY29tcG9uZW50IHRvIHVzZSBmb3IgZ2l2ZW4gc2NoZW1hLlxuICAgKlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6XG4gICAqICAtIHN0cmluZywgbnVtYmVyLCBib29sZWFuLCBvYmplY3QsIGVudW1cbiAgICogIC0gcHJpbWl0aXZlLWxpc3QsIHRhYmxlLWxpc3QsIGNvbXBsZXgtbGlzdFxuICAgKiAgLSBkaXNhYmxlZCwgYXV0b2NvbXBsZXRlXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0Q29tcG9uZW50VHlwZShzY2hlbWE6IEpTT05TY2hlbWEpOiBzdHJpbmcge1xuICAgIGlmICghc2NoZW1hKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NjaGVtYSBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gc2NoZW1hLnR5cGU7XG4gICAgaWYgKCFzY2hlbWFUeXBlKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoc2NoZW1hKS5sZW5ndGggPT09IDApIHsgLy8gaWYgc2hlbWEgPT09IHt9IChlbXB0eSBvYmplY3QpXG4gICAgICAgIHJldHVybiAncmF3JztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoc2NoZW1hLmF1dG9jb21wbGV0aW9uQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiAnYXV0b2NvbXBsZXRlJztcbiAgICAgIH0gZWxzZSBpZiAoc2NoZW1hLmVudW0pIHtcbiAgICAgICAgcmV0dXJuICdlbnVtJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbJyRyZWYnXSkge1xuICAgICAgICByZXR1cm4gJ3JlZic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICBjb25zdCBpdGVtU2NoZW1hID0gc2NoZW1hLml0ZW1zO1xuICAgICAgaWYgKGl0ZW1TY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgJiYgIWl0ZW1TY2hlbWEucHJvcGVydGllc1snJHJlZiddKSB7XG4gICAgICAgIC8vIGNvbXBsZXgtYXJyYXk6IGlmIGl0J3MgYW4gb2JqZWN0IGFycmF5XG4gICAgICAgIC8vIGlmIGl0cyBlbGVtZW50cyBoYXZlIGF0IGxlYXN0IGEgcHJvcGVydHkgd2l0aCBvYmplY3QgKG5vdCByZWYtZmllbGQpXG4gICAgICAgIC8vIG9yIGEgbm9uLXByaW1pdGl2ZSBhcnJheS5cbiAgICAgICAgY29uc3QgaXNDb21wbGV4QXJyYXkgPSBPYmplY3Qua2V5cyhpdGVtU2NoZW1hLnByb3BlcnRpZXMpXG4gICAgICAgICAgLnNvbWUocHJvcCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wU2NoZW1hID0gaXRlbVNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgICAgICAgICAgcmV0dXJuIChwcm9wU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnICYmICFwcm9wU2NoZW1hLnByb3BlcnRpZXNbJyRyZWYnXSkgfHxcbiAgICAgICAgICAgICAgKHByb3BTY2hlbWEudHlwZSA9PT0gJ2FycmF5JyAmJiAocHJvcFNjaGVtYS5pdGVtcy50eXBlID09PSAnb2JqZWN0JyB8fCBwcm9wU2NoZW1hLml0ZW1zLnR5cGUgPT09ICdhcnJheScpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzQ29tcGxleEFycmF5KSB7XG4gICAgICAgICAgcmV0dXJuICdjb21wbGV4LWxpc3QnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAndGFibGUtbGlzdCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHNjaGVtYS5pdGVtcy50eXBlIGlzIG5vdCBvYmplY3QhXG4gICAgICAgIHJldHVybiAncHJpbWl0aXZlLWxpc3QnO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBleGVjdXRpb24gcmVhY2hlcyBoZXJlIGlmIHNjaGVtYVR5cGUgaXMgZWl0aGVyXG4gICAgLy8gJ251bWJlcicsICdpbnRlZ2VyJywgJ3N0cmluZycgb3Igc29tZXRoaW5nIGVsc2Ugd2hpY2ggaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWRcbiAgICByZXR1cm4gc2NoZW1hVHlwZTtcbiAgfVxufVxuIl19