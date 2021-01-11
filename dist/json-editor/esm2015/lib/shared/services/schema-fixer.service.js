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
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "./json-util.service";
import * as i2 from "./component-type.service";
export class SchemaFixerService {
    constructor(jsonUtilService, componentTypeService) {
        this.jsonUtilService = jsonUtilService;
        this.componentTypeService = componentTypeService;
    }
    /**
     * Fixes schema to be in a format that expected by json-editor
     *
     * @param schema - json schema
     * @param config - schema specific options
     * @return - fixed schema
     */
    fixSchema(originalSchema, config) {
        let schema = _.cloneDeep(originalSchema);
        if (config) {
            schema = this.enrichSchemaWithConfig(schema, config);
        }
        schema = this.fixRecursively(schema);
        return schema;
    }
    /**
     * Enriches given schema with given configuration objects
     * puts config into correct places in schema.
     *
     * @param schema - json schema
     * @param config - schema specific options
     */
    enrichSchemaWithConfig(schema, config) {
        return _.mergeWith(schema, config, (currentSchema, currentConfig, key) => {
            if ((key === 'properties' || key === 'items') && !currentSchema) {
                console.warn(`config => ${JSON.stringify(currentConfig, (configKey, value) => {
                    if (typeof value === 'function') {
                        return 'ƒ()';
                    }
                    return value;
                }, 2)} should not be under "${key}" because schema does not have "${key}"`);
                // cancel merge to avoid creating broken json schema
                return null;
            }
            if (currentSchema && key === 'properties') {
                const configKeys = Object.keys(currentConfig);
                configKeys
                    .filter(configKey => !currentSchema[configKey])
                    .forEach(wrongConfigKey => {
                    delete currentConfig[wrongConfigKey];
                    console.warn(wrongConfigKey);
                });
            }
        });
    }
    /**
     * Applies all fixes to schema recursively
     */
    fixRecursively(schema) {
        if (schema.anyOf) {
            schema = this.fixAnyOf(schema);
        }
        else if (schema.allOf) {
            schema = this.fixAllOf(schema);
        }
        if (schema.order) {
            schema = this.fixOrder(schema);
        }
        if (schema.disabled) {
            schema = this.fixDisabled(schema);
        }
        if (schema.alwaysShow) {
            schema = this.fixAlwaysShow(schema);
        }
        if (schema.alwaysShowRegExp) {
            schema = this.fixAlwaysShowRegExp(schema);
        }
        // schema fixes must be done above
        // recursively call for deeper parts of schema
        if (schema.properties) {
            Object.keys(schema.properties)
                .forEach(prop => {
                schema.properties[prop] = this.fixRecursively(schema.properties[prop]);
            });
        }
        else if (schema.items) {
            schema.items = this.fixRecursively(schema.items);
        }
        // fixes that needs above fixes to be done deeply for the current schema
        schema.componentType = this.componentTypeService.getComponentType(schema);
        return schema;
    }
    /**
     * Fixes disabled config to assign the disabled attribute
     * to array items or object properties
     */
    fixDisabled(schema) {
        if (schema.items) {
            schema.items.disabled = true;
        }
        else if (schema.properties) {
            Object.keys(schema.properties)
                .forEach(prop => {
                schema.properties[prop].disabled = true;
            });
        }
        return schema;
    }
    /**
     * Fixes order config to assign the right priority to properties
     */
    fixOrder(schema) {
        const order = schema.order;
        order.forEach((orderKey, index) => {
            const priority = order.length - index;
            if (orderKey in schema.properties) {
                schema.properties[orderKey].priority = priority;
            }
            else {
                console.warn(`${orderKey} defined in order config does not exist in schema.`);
            }
        });
        return schema;
    }
    /**
     * Fixes anyOf schemas with exactly same property structure
     * it merges all enum fields in anyOf elements
     */
    fixAnyOf(schema) {
        const anyOf = schema.anyOf;
        // find existence count of all enum properties in anyOf elements
        // the reason of this, a field could be enum type for some and not for some other anyOf element
        const enumPropCount = {};
        anyOf.forEach(anyOfElement => {
            Object.keys(anyOfElement.properties)
                .filter(prop => anyOfElement.properties[prop].enum)
                .forEach(prop => {
                if (!enumPropCount[prop]) {
                    enumPropCount[prop] = 0;
                }
                enumPropCount[prop]++;
            });
        });
        // combine all enum arrays in anyOf elements
        const enums = {};
        Object.keys(enumPropCount)
            .forEach(prop => {
            anyOf.forEach(anyOfElement => {
                if (!enums[prop]) {
                    enums[prop] = [];
                }
                const enumValues = anyOfElement.properties[prop].enum;
                // check if current field is enum for current anyOf element
                if (enumValues) {
                    enums[prop] = enums[prop].concat(enumValues);
                }
            });
        });
        const fixedSchema = anyOf[0];
        // shallow cleaning of format and pattern
        Object.keys(fixedSchema.properties)
            .forEach(prop => {
            delete fixedSchema.properties[prop].format;
            delete fixedSchema.properties[prop].pattern;
        });
        Object.keys(enumPropCount)
            .forEach(prop => {
            const uniqueEnumValues = Array.from(new Set(enums[prop]));
            // if a field enum for all anyOf elements
            if (enumPropCount[prop] === anyOf.length) {
                // merge all enum values into one
                fixedSchema.properties[prop].enum = uniqueEnumValues;
                // if a field enum for some of anyOf elements
            }
            else {
                // create a autocomplete config so that it will allow any values
                // but autocomplete from enum values from where the field is defined as enum
                delete fixedSchema.properties[prop].enum;
                fixedSchema.properties[prop].autocompletionConfig = {
                    source: uniqueEnumValues,
                    size: 7
                };
            }
        });
        // copy disabled attribute inside fixedSchema because it
        // is outside anyOf element and is ignored
        if (schema.disabled) {
            fixedSchema.disabled = true;
        }
        return fixedSchema;
    }
    fixAllOf(schema) {
        return _.merge({}, ...schema.allOf);
    }
    /**
     * Adds keys that matches `alwaysShowRegExp` to `alwaysShow`.
     * Passes `alwaysShowRegExp` down to children so that it is applied recursively.
     */
    fixAlwaysShowRegExp(schema) {
        if (!schema.alwaysShow) {
            schema.alwaysShow = [];
        }
        Object.keys(schema.properties)
            .forEach(key => {
            // pass alwaysShowRegExp down to apply it recursively.
            const subSchema = schema.properties[key];
            if (subSchema.type === 'object') {
                subSchema.alwaysShowRegExp = schema.alwaysShowRegExp;
            }
            if (key.search(schema.alwaysShowRegExp) > -1) {
                schema.alwaysShow.push(key);
            }
        });
        return schema;
    }
    /**
     * Removes alwayShow fields that aren't in the schema.properties
     * and warns on console.
     */
    fixAlwaysShow(schema) {
        const alwaysShow = schema.alwaysShow;
        schema.alwaysShow = alwaysShow.filter(key => {
            if (schema.properties[key]) {
                return true;
            }
            else {
                console.warn(`${key} is configured as alwaysShow but it is not in ${JSON.stringify(Object.keys(schema.properties))}`);
            }
        });
        return schema;
    }
}
SchemaFixerService.ɵfac = function SchemaFixerService_Factory(t) { return new (t || SchemaFixerService)(i0.ɵɵinject(i1.JsonUtilService), i0.ɵɵinject(i2.ComponentTypeService)); };
SchemaFixerService.ɵprov = i0.ɵɵdefineInjectable({ token: SchemaFixerService, factory: SchemaFixerService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SchemaFixerService, [{
        type: Injectable
    }], function () { return [{ type: i1.JsonUtilService }, { type: i2.ComponentTypeService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWZpeGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL3NjaGVtYS1maXhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFPNUIsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixZQUFvQixlQUFnQyxFQUMxQyxvQkFBMEM7UUFEaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQzFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFBSSxDQUFDO0lBRXpEOzs7Ozs7T0FNRztJQUNILFNBQVMsQ0FBQyxjQUEwQixFQUFFLE1BQXNCO1FBQzFELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0RDtRQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxzQkFBc0IsQ0FBQyxNQUFrQixFQUFFLE1BQXFCO1FBQ3RFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsR0FBRyxLQUFL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QU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O29GQTFPVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgSnNvblV0aWxTZXJ2aWNlIH0gZnJvbSAnLi9qc29uLXV0aWwuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LXR5cGUuc2VydmljZSc7XG5pbXBvcnQgeyBKU09OU2NoZW1hLCBTY2hlbWFPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFGaXhlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUganNvblV0aWxTZXJ2aWNlOiBKc29uVXRpbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRUeXBlU2VydmljZTogQ29tcG9uZW50VHlwZVNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBGaXhlcyBzY2hlbWEgdG8gYmUgaW4gYSBmb3JtYXQgdGhhdCBleHBlY3RlZCBieSBqc29uLWVkaXRvclxuICAgKlxuICAgKiBAcGFyYW0gc2NoZW1hIC0ganNvbiBzY2hlbWFcbiAgICogQHBhcmFtIGNvbmZpZyAtIHNjaGVtYSBzcGVjaWZpYyBvcHRpb25zXG4gICAqIEByZXR1cm4gLSBmaXhlZCBzY2hlbWFcbiAgICovXG4gIGZpeFNjaGVtYShvcmlnaW5hbFNjaGVtYTogSlNPTlNjaGVtYSwgY29uZmlnPzogU2NoZW1hT3B0aW9ucyk6IEpTT05TY2hlbWEge1xuICAgIGxldCBzY2hlbWEgPSBfLmNsb25lRGVlcChvcmlnaW5hbFNjaGVtYSk7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgc2NoZW1hID0gdGhpcy5lbnJpY2hTY2hlbWFXaXRoQ29uZmlnKHNjaGVtYSwgY29uZmlnKTtcbiAgICB9XG4gICAgc2NoZW1hID0gdGhpcy5maXhSZWN1cnNpdmVseShzY2hlbWEpO1xuICAgIHJldHVybiBzY2hlbWE7XG4gIH1cblxuICAvKipcbiAgICogRW5yaWNoZXMgZ2l2ZW4gc2NoZW1hIHdpdGggZ2l2ZW4gY29uZmlndXJhdGlvbiBvYmplY3RzXG4gICAqIHB1dHMgY29uZmlnIGludG8gY29ycmVjdCBwbGFjZXMgaW4gc2NoZW1hLlxuICAgKlxuICAgKiBAcGFyYW0gc2NoZW1hIC0ganNvbiBzY2hlbWFcbiAgICogQHBhcmFtIGNvbmZpZyAtIHNjaGVtYSBzcGVjaWZpYyBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIGVucmljaFNjaGVtYVdpdGhDb25maWcoc2NoZW1hOiBKU09OU2NoZW1hLCBjb25maWc6IFNjaGVtYU9wdGlvbnMpOiBKU09OU2NoZW1hIHtcbiAgICByZXR1cm4gXy5tZXJnZVdpdGgoc2NoZW1hLCBjb25maWcsIChjdXJyZW50U2NoZW1hLCBjdXJyZW50Q29uZmlnLCBrZXkpID0+IHtcbiAgICAgIGlmICgoa2V5ID09PSAncHJvcGVydGllcycgfHwga2V5ID09PSAnaXRlbXMnKSAmJiAhY3VycmVudFNjaGVtYSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYGNvbmZpZyA9PiAke0pTT04uc3RyaW5naWZ5KGN1cnJlbnRDb25maWcsIChjb25maWdLZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuICfGkigpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LCAyKX0gc2hvdWxkIG5vdCBiZSB1bmRlciBcIiR7a2V5fVwiIGJlY2F1c2Ugc2NoZW1hIGRvZXMgbm90IGhhdmUgXCIke2tleX1cImApO1xuICAgICAgICAvLyBjYW5jZWwgbWVyZ2UgdG8gYXZvaWQgY3JlYXRpbmcgYnJva2VuIGpzb24gc2NoZW1hXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRTY2hlbWEgJiYga2V5ID09PSAncHJvcGVydGllcycpIHtcbiAgICAgICAgY29uc3QgY29uZmlnS2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRDb25maWcpO1xuICAgICAgICBjb25maWdLZXlzXG4gICAgICAgICAgLmZpbHRlcihjb25maWdLZXkgPT4gIWN1cnJlbnRTY2hlbWFbY29uZmlnS2V5XSlcbiAgICAgICAgICAuZm9yRWFjaCh3cm9uZ0NvbmZpZ0tleSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgY3VycmVudENvbmZpZ1t3cm9uZ0NvbmZpZ0tleV07XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od3JvbmdDb25maWdLZXkpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgYWxsIGZpeGVzIHRvIHNjaGVtYSByZWN1cnNpdmVseVxuICAgKi9cbiAgcHJpdmF0ZSBmaXhSZWN1cnNpdmVseShzY2hlbWE6IEpTT05TY2hlbWEpOiBKU09OU2NoZW1hIHtcbiAgICBpZiAoc2NoZW1hLmFueU9mKSB7XG4gICAgICBzY2hlbWEgPSB0aGlzLmZpeEFueU9mKHNjaGVtYSk7XG4gICAgfSBlbHNlIGlmIChzY2hlbWEuYWxsT2YpIHtcbiAgICAgIHNjaGVtYSA9IHRoaXMuZml4QWxsT2Yoc2NoZW1hKTtcbiAgICB9XG4gICAgaWYgKHNjaGVtYS5vcmRlcikge1xuICAgICAgc2NoZW1hID0gdGhpcy5maXhPcmRlcihzY2hlbWEpO1xuICAgIH1cbiAgICBpZiAoc2NoZW1hLmRpc2FibGVkKSB7XG4gICAgICBzY2hlbWEgPSB0aGlzLmZpeERpc2FibGVkKHNjaGVtYSk7XG4gICAgfVxuICAgIGlmIChzY2hlbWEuYWx3YXlzU2hvdykge1xuICAgICAgc2NoZW1hID0gdGhpcy5maXhBbHdheXNTaG93KHNjaGVtYSk7XG4gICAgfVxuICAgIGlmIChzY2hlbWEuYWx3YXlzU2hvd1JlZ0V4cCkge1xuICAgICAgc2NoZW1hID0gdGhpcy5maXhBbHdheXNTaG93UmVnRXhwKHNjaGVtYSk7XG4gICAgfVxuICAgIC8vIHNjaGVtYSBmaXhlcyBtdXN0IGJlIGRvbmUgYWJvdmVcblxuICAgIC8vIHJlY3Vyc2l2ZWx5IGNhbGwgZm9yIGRlZXBlciBwYXJ0cyBvZiBzY2hlbWFcbiAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKVxuICAgICAgICAuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1twcm9wXSA9IHRoaXMuZml4UmVjdXJzaXZlbHkoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS5pdGVtcykge1xuICAgICAgc2NoZW1hLml0ZW1zID0gdGhpcy5maXhSZWN1cnNpdmVseShzY2hlbWEuaXRlbXMpO1xuICAgIH1cbiAgICAvLyBmaXhlcyB0aGF0IG5lZWRzIGFib3ZlIGZpeGVzIHRvIGJlIGRvbmUgZGVlcGx5IGZvciB0aGUgY3VycmVudCBzY2hlbWFcbiAgICBzY2hlbWEuY29tcG9uZW50VHlwZSA9IHRoaXMuY29tcG9uZW50VHlwZVNlcnZpY2UuZ2V0Q29tcG9uZW50VHlwZShzY2hlbWEpO1xuXG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXhlcyBkaXNhYmxlZCBjb25maWcgdG8gYXNzaWduIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGVcbiAgICogdG8gYXJyYXkgaXRlbXMgb3Igb2JqZWN0IHByb3BlcnRpZXNcbiAgICovXG4gIHByaXZhdGUgZml4RGlzYWJsZWQoc2NoZW1hOiBKU09OU2NoZW1hKTogSlNPTlNjaGVtYSB7XG4gICAgaWYgKHNjaGVtYS5pdGVtcykge1xuICAgICAgc2NoZW1hLml0ZW1zLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcylcbiAgICAgICAgLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXhlcyBvcmRlciBjb25maWcgdG8gYXNzaWduIHRoZSByaWdodCBwcmlvcml0eSB0byBwcm9wZXJ0aWVzXG4gICAqL1xuICBwcml2YXRlIGZpeE9yZGVyKHNjaGVtYTogSlNPTlNjaGVtYSk6IEpTT05TY2hlbWEge1xuICAgIGNvbnN0IG9yZGVyOiBBcnJheTxzdHJpbmc+ID0gc2NoZW1hLm9yZGVyO1xuICAgIG9yZGVyLmZvckVhY2goKG9yZGVyS2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3JkZXIubGVuZ3RoIC0gaW5kZXg7XG4gICAgICBpZiAob3JkZXJLZXkgaW4gc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbb3JkZXJLZXldLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7b3JkZXJLZXl9IGRlZmluZWQgaW4gb3JkZXIgY29uZmlnIGRvZXMgbm90IGV4aXN0IGluIHNjaGVtYS5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2NoZW1hO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpeGVzIGFueU9mIHNjaGVtYXMgd2l0aCBleGFjdGx5IHNhbWUgcHJvcGVydHkgc3RydWN0dXJlXG4gICAqIGl0IG1lcmdlcyBhbGwgZW51bSBmaWVsZHMgaW4gYW55T2YgZWxlbWVudHNcbiAgICovXG4gIHByaXZhdGUgZml4QW55T2Yoc2NoZW1hOiBKU09OU2NoZW1hKTogSlNPTlNjaGVtYSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2Y7XG5cbiAgICAvLyBmaW5kIGV4aXN0ZW5jZSBjb3VudCBvZiBhbGwgZW51bSBwcm9wZXJ0aWVzIGluIGFueU9mIGVsZW1lbnRzXG4gICAgLy8gdGhlIHJlYXNvbiBvZiB0aGlzLCBhIGZpZWxkIGNvdWxkIGJlIGVudW0gdHlwZSBmb3Igc29tZSBhbmQgbm90IGZvciBzb21lIG90aGVyIGFueU9mIGVsZW1lbnRcbiAgICBjb25zdCBlbnVtUHJvcENvdW50ID0ge307XG4gICAgYW55T2YuZm9yRWFjaChhbnlPZkVsZW1lbnQgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoYW55T2ZFbGVtZW50LnByb3BlcnRpZXMpXG4gICAgICAgIC5maWx0ZXIocHJvcCA9PiBhbnlPZkVsZW1lbnQucHJvcGVydGllc1twcm9wXS5lbnVtKVxuICAgICAgICAuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBpZiAoIWVudW1Qcm9wQ291bnRbcHJvcF0pIHtcbiAgICAgICAgICAgIGVudW1Qcm9wQ291bnRbcHJvcF0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbnVtUHJvcENvdW50W3Byb3BdKys7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gY29tYmluZSBhbGwgZW51bSBhcnJheXMgaW4gYW55T2YgZWxlbWVudHNcbiAgICBjb25zdCBlbnVtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGVudW1Qcm9wQ291bnQpXG4gICAgICAuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgYW55T2YuZm9yRWFjaChhbnlPZkVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmICghZW51bXNbcHJvcF0pIHtcbiAgICAgICAgICAgIGVudW1zW3Byb3BdID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSBhbnlPZkVsZW1lbnQucHJvcGVydGllc1twcm9wXS5lbnVtO1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgZmllbGQgaXMgZW51bSBmb3IgY3VycmVudCBhbnlPZiBlbGVtZW50XG4gICAgICAgICAgaWYgKGVudW1WYWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1zW3Byb3BdID0gZW51bXNbcHJvcF0uY29uY2F0KGVudW1WYWx1ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IGZpeGVkU2NoZW1hID0gYW55T2ZbMF07XG4gICAgLy8gc2hhbGxvdyBjbGVhbmluZyBvZiBmb3JtYXQgYW5kIHBhdHRlcm5cbiAgICBPYmplY3Qua2V5cyhmaXhlZFNjaGVtYS5wcm9wZXJ0aWVzKVxuICAgICAgLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgIGRlbGV0ZSBmaXhlZFNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmZvcm1hdDtcbiAgICAgICAgZGVsZXRlIGZpeGVkU2NoZW1hLnByb3BlcnRpZXNbcHJvcF0ucGF0dGVybjtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoZW51bVByb3BDb3VudClcbiAgICAgIC5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBjb25zdCB1bmlxdWVFbnVtVmFsdWVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGVudW1zW3Byb3BdKSkgYXMgQXJyYXk8c3RyaW5nPjtcbiAgICAgICAgLy8gaWYgYSBmaWVsZCBlbnVtIGZvciBhbGwgYW55T2YgZWxlbWVudHNcbiAgICAgICAgaWYgKGVudW1Qcm9wQ291bnRbcHJvcF0gPT09IGFueU9mLmxlbmd0aCkge1xuICAgICAgICAgIC8vIG1lcmdlIGFsbCBlbnVtIHZhbHVlcyBpbnRvIG9uZVxuICAgICAgICAgIGZpeGVkU2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZW51bSA9IHVuaXF1ZUVudW1WYWx1ZXM7XG4gICAgICAgICAgLy8gaWYgYSBmaWVsZCBlbnVtIGZvciBzb21lIG9mIGFueU9mIGVsZW1lbnRzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGEgYXV0b2NvbXBsZXRlIGNvbmZpZyBzbyB0aGF0IGl0IHdpbGwgYWxsb3cgYW55IHZhbHVlc1xuICAgICAgICAgIC8vIGJ1dCBhdXRvY29tcGxldGUgZnJvbSBlbnVtIHZhbHVlcyBmcm9tIHdoZXJlIHRoZSBmaWVsZCBpcyBkZWZpbmVkIGFzIGVudW1cbiAgICAgICAgICBkZWxldGUgZml4ZWRTY2hlbWEucHJvcGVydGllc1twcm9wXS5lbnVtO1xuICAgICAgICAgIGZpeGVkU2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uYXV0b2NvbXBsZXRpb25Db25maWcgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IHVuaXF1ZUVudW1WYWx1ZXMsXG4gICAgICAgICAgICBzaXplOiA3XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgLy8gY29weSBkaXNhYmxlZCBhdHRyaWJ1dGUgaW5zaWRlIGZpeGVkU2NoZW1hIGJlY2F1c2UgaXRcbiAgICAvLyBpcyBvdXRzaWRlIGFueU9mIGVsZW1lbnQgYW5kIGlzIGlnbm9yZWRcbiAgICBpZiAoc2NoZW1hLmRpc2FibGVkKSB7XG4gICAgICBmaXhlZFNjaGVtYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmaXhlZFNjaGVtYTtcbiAgfVxuXG4gIHByaXZhdGUgZml4QWxsT2Yoc2NoZW1hOiBKU09OU2NoZW1hKTogSlNPTlNjaGVtYSB7XG4gICAgcmV0dXJuIF8ubWVyZ2Uoe30sIC4uLnNjaGVtYS5hbGxPZikgYXMgSlNPTlNjaGVtYTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGtleXMgdGhhdCBtYXRjaGVzIGBhbHdheXNTaG93UmVnRXhwYCB0byBgYWx3YXlzU2hvd2AuXG4gICAqIFBhc3NlcyBgYWx3YXlzU2hvd1JlZ0V4cGAgZG93biB0byBjaGlsZHJlbiBzbyB0aGF0IGl0IGlzIGFwcGxpZWQgcmVjdXJzaXZlbHkuXG4gICAqL1xuICBwcml2YXRlIGZpeEFsd2F5c1Nob3dSZWdFeHAoc2NoZW1hOiBKU09OU2NoZW1hKTogSlNPTlNjaGVtYSB7XG4gICAgaWYgKCFzY2hlbWEuYWx3YXlzU2hvdykge1xuICAgICAgc2NoZW1hLmFsd2F5c1Nob3cgPSBbXTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAvLyBwYXNzIGFsd2F5c1Nob3dSZWdFeHAgZG93biB0byBhcHBseSBpdCByZWN1cnNpdmVseS5cbiAgICAgICAgY29uc3Qgc3ViU2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgaWYgKHN1YlNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHN1YlNjaGVtYS5hbHdheXNTaG93UmVnRXhwID0gc2NoZW1hLmFsd2F5c1Nob3dSZWdFeHA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LnNlYXJjaChzY2hlbWEuYWx3YXlzU2hvd1JlZ0V4cCkgPiAtMSkge1xuICAgICAgICAgIHNjaGVtYS5hbHdheXNTaG93LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsd2F5U2hvdyBmaWVsZHMgdGhhdCBhcmVuJ3QgaW4gdGhlIHNjaGVtYS5wcm9wZXJ0aWVzXG4gICAqIGFuZCB3YXJucyBvbiBjb25zb2xlLlxuICAgKi9cbiAgcHJpdmF0ZSBmaXhBbHdheXNTaG93KHNjaGVtYTogSlNPTlNjaGVtYSk6IEpTT05TY2hlbWEge1xuICAgIGNvbnN0IGFsd2F5c1Nob3cgPSBzY2hlbWEuYWx3YXlzU2hvdztcbiAgICBzY2hlbWEuYWx3YXlzU2hvdyA9IGFsd2F5c1Nob3cuZmlsdGVyKGtleSA9PiB7XG4gICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNba2V5XSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtrZXl9IGlzIGNvbmZpZ3VyZWQgYXMgYWx3YXlzU2hvdyBidXQgaXQgaXMgbm90IGluICR7SlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpKX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2NoZW1hO1xuICB9XG5cbn1cbiJdfQ==