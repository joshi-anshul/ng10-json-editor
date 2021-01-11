import { Injectable } from '@angular/core';
import { List, Map } from 'immutable';
import * as i0 from "@angular/core";
export class FindReplaceAllService {
    // TODO: fix compiler errors when type of immutable `List<any> | Map<string, any>`
    /**
     * Does deep replace when it finds the occurance in an immutable List and Map
     * uses schema to skip disabled properties
     *
     * @param {List<any> | Map<string, any} immutable
     * @param {Object} schema
     * @param {string} find
     * @param {replace} replace
     * @param {boolean} matchWhole - looks for whole match to a string property of immutable
     * @param {Array<any> | Object} diffHtml - TODO: describe
     */
    findReplaceInImmutable(immutable, schema, find, replace, exact = false, diffHtml) {
        const immutableAsMutable = immutable.asMutable();
        const isList = List.isList(immutable);
        // create empty array or object for the immutable to store diff
        diffHtml = isList ? [] : {};
        immutableAsMutable.forEach((value, key) => {
            const innerSchema = isList ? schema.items : schema.properties[key];
            // ignore disabled and ref fields
            if (innerSchema.disabled || innerSchema.hidden || key === '$ref') {
                return;
                // TODO: is `schema.type === 'string'` better?
            }
            else if (typeof value === 'string') {
                // assign value to diff as initial, if nothing has changed it will remain same
                let diff = value;
                // create html diff for each possible change
                const singleDiffHtml = `<strong style='color: green;'>${replace}</strong><del><em style='color: red;'>${find}</em></del>`;
                if (!exact) {
                    const regExp = new RegExp(find, 'g');
                    const replaced = value.replace(regExp, replace);
                    immutableAsMutable.set(key, replaced);
                    // create diff for multiple changes in value
                    diff = diff.replace(regExp, singleDiffHtml);
                }
                else if (value === find) {
                    immutableAsMutable.set(key, replace);
                    diff = singleDiffHtml;
                }
                diffHtml[key] = diff;
                // TODO: is `schema.type === 'object' || schema.type === 'array'` better?
            }
            else if (List.isList(value) || Map.isMap(value)) {
                // create empty array or object for the value in diffHtml
                const result = this.
                    findReplaceInImmutable(immutableAsMutable.get(key), innerSchema, find, replace, exact, diffHtml[key]);
                diffHtml[key] = result.diffHtml;
                immutableAsMutable.set(key, result.replaced);
            }
        });
        return { replaced: immutableAsMutable.asImmutable(), diffHtml };
    }
}
FindReplaceAllService.ɵfac = function FindReplaceAllService_Factory(t) { return new (t || FindReplaceAllService)(); };
FindReplaceAllService.ɵprov = i0.ɵɵdefineInjectable({ token: FindReplaceAllService, factory: FindReplaceAllService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FindReplaceAllService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1yZXBsYWNlLWFsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2h0bWwvQW5zaHVsLUpvc2hpL0FuZ3VsYXIvR2l0SHVsZnRJbmMvanNvbi1lZGl0b3IvcHJvamVjdHMvanNvbi1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9zZXJ2aWNlcy9maW5kLXJlcGxhY2UtYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFLdEMsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxrRkFBa0Y7SUFDbEY7Ozs7Ozs7Ozs7T0FVRztJQUNILHNCQUFzQixDQUFDLFNBQWMsRUFBRSxNQUFrQixFQUFFLElBQVksRUFBRSxPQUFlLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxRQUE4QjtRQUVySSxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLCtEQUErRDtRQUMvRCxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDeEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25FLGlDQUFpQztZQUNqQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO2dCQUNoRSxPQUFPO2dCQUNQLDhDQUE4QzthQUMvQztpQkFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsOEVBQThFO2dCQUM5RSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLDRDQUE0QztnQkFDNUMsTUFBTSxjQUFjLEdBQUcsaUNBQWlDLE9BQU8seUNBQXlDLElBQUksYUFBYSxDQUFDO2dCQUMxSCxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDckMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2hELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLDRDQUE0QztvQkFDNUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUM3QztxQkFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQ3pCLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQUksR0FBRyxjQUFjLENBQUM7aUJBQ3ZCO2dCQUNELFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLHlFQUF5RTthQUN4RTtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakQseURBQXlEO2dCQUN6RCxNQUFNLE1BQU0sR0FBRyxJQUFJO29CQUNqQixzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4RyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7MEZBcERVLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0LCBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaW5kUmVwbGFjZUFsbFNlcnZpY2Uge1xuXG4gIC8vIFRPRE86IGZpeCBjb21waWxlciBlcnJvcnMgd2hlbiB0eXBlIG9mIGltbXV0YWJsZSBgTGlzdDxhbnk+IHwgTWFwPHN0cmluZywgYW55PmBcbiAgLyoqXG4gICAqIERvZXMgZGVlcCByZXBsYWNlIHdoZW4gaXQgZmluZHMgdGhlIG9jY3VyYW5jZSBpbiBhbiBpbW11dGFibGUgTGlzdCBhbmQgTWFwXG4gICAqIHVzZXMgc2NoZW1hIHRvIHNraXAgZGlzYWJsZWQgcHJvcGVydGllc1xuICAgKlxuICAgKiBAcGFyYW0ge0xpc3Q8YW55PiB8IE1hcDxzdHJpbmcsIGFueX0gaW1tdXRhYmxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbmRcbiAgICogQHBhcmFtIHtyZXBsYWNlfSByZXBsYWNlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWF0Y2hXaG9sZSAtIGxvb2tzIGZvciB3aG9sZSBtYXRjaCB0byBhIHN0cmluZyBwcm9wZXJ0eSBvZiBpbW11dGFibGVcbiAgICogQHBhcmFtIHtBcnJheTxhbnk+IHwgT2JqZWN0fSBkaWZmSHRtbCAtIFRPRE86IGRlc2NyaWJlXG4gICAqL1xuICBmaW5kUmVwbGFjZUluSW1tdXRhYmxlKGltbXV0YWJsZTogYW55LCBzY2hlbWE6IEpTT05TY2hlbWEsIGZpbmQ6IHN0cmluZywgcmVwbGFjZTogc3RyaW5nLCBleGFjdCA9IGZhbHNlLCBkaWZmSHRtbD86IEFycmF5PGFueT4gfCBPYmplY3QpOlxuICAgIHsgcmVwbGFjZWQ6IGFueSwgZGlmZkh0bWw6IEFycmF5PGFueT4gfCBPYmplY3QgfSB7XG4gICAgY29uc3QgaW1tdXRhYmxlQXNNdXRhYmxlID0gaW1tdXRhYmxlLmFzTXV0YWJsZSgpO1xuICAgIGNvbnN0IGlzTGlzdCA9IExpc3QuaXNMaXN0KGltbXV0YWJsZSk7XG4gICAgLy8gY3JlYXRlIGVtcHR5IGFycmF5IG9yIG9iamVjdCBmb3IgdGhlIGltbXV0YWJsZSB0byBzdG9yZSBkaWZmXG4gICAgZGlmZkh0bWwgPSBpc0xpc3QgPyBbXSA6IHt9O1xuICAgIGltbXV0YWJsZUFzTXV0YWJsZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBjb25zdCBpbm5lclNjaGVtYSA9IGlzTGlzdCA/IHNjaGVtYS5pdGVtcyA6IHNjaGVtYS5wcm9wZXJ0aWVzW2tleV07XG4gICAgICAvLyBpZ25vcmUgZGlzYWJsZWQgYW5kIHJlZiBmaWVsZHNcbiAgICAgIGlmIChpbm5lclNjaGVtYS5kaXNhYmxlZCB8fCBpbm5lclNjaGVtYS5oaWRkZW4gfHwga2V5ID09PSAnJHJlZicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBUT0RPOiBpcyBgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnYCBiZXR0ZXI/XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gYXNzaWduIHZhbHVlIHRvIGRpZmYgYXMgaW5pdGlhbCwgaWYgbm90aGluZyBoYXMgY2hhbmdlZCBpdCB3aWxsIHJlbWFpbiBzYW1lXG4gICAgICAgIGxldCBkaWZmID0gdmFsdWU7XG4gICAgICAgIC8vIGNyZWF0ZSBodG1sIGRpZmYgZm9yIGVhY2ggcG9zc2libGUgY2hhbmdlXG4gICAgICAgIGNvbnN0IHNpbmdsZURpZmZIdG1sID0gYDxzdHJvbmcgc3R5bGU9J2NvbG9yOiBncmVlbjsnPiR7cmVwbGFjZX08L3N0cm9uZz48ZGVsPjxlbSBzdHlsZT0nY29sb3I6IHJlZDsnPiR7ZmluZH08L2VtPjwvZGVsPmA7XG4gICAgICAgIGlmICghZXhhY3QpIHtcbiAgICAgICAgICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGZpbmQsICdnJyk7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZWQgPSB2YWx1ZS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZSk7XG4gICAgICAgICAgaW1tdXRhYmxlQXNNdXRhYmxlLnNldChrZXksIHJlcGxhY2VkKTtcbiAgICAgICAgICAvLyBjcmVhdGUgZGlmZiBmb3IgbXVsdGlwbGUgY2hhbmdlcyBpbiB2YWx1ZVxuICAgICAgICAgIGRpZmYgPSBkaWZmLnJlcGxhY2UocmVnRXhwLCBzaW5nbGVEaWZmSHRtbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZpbmQpIHtcbiAgICAgICAgICBpbW11dGFibGVBc011dGFibGUuc2V0KGtleSwgcmVwbGFjZSk7XG4gICAgICAgICAgZGlmZiA9IHNpbmdsZURpZmZIdG1sO1xuICAgICAgICB9XG4gICAgICAgIGRpZmZIdG1sW2tleV0gPSBkaWZmO1xuICAgICAgLy8gVE9ETzogaXMgYHNjaGVtYS50eXBlID09PSAnb2JqZWN0JyB8fCBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J2AgYmV0dGVyP1xuICAgICAgfSBlbHNlIGlmIChMaXN0LmlzTGlzdCh2YWx1ZSkgfHwgTWFwLmlzTWFwKHZhbHVlKSkge1xuICAgICAgICAvLyBjcmVhdGUgZW1wdHkgYXJyYXkgb3Igb2JqZWN0IGZvciB0aGUgdmFsdWUgaW4gZGlmZkh0bWxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5cbiAgICAgICAgICBmaW5kUmVwbGFjZUluSW1tdXRhYmxlKGltbXV0YWJsZUFzTXV0YWJsZS5nZXQoa2V5KSwgaW5uZXJTY2hlbWEsIGZpbmQsIHJlcGxhY2UsIGV4YWN0LCBkaWZmSHRtbFtrZXldKTtcbiAgICAgICAgZGlmZkh0bWxba2V5XSA9IHJlc3VsdC5kaWZmSHRtbDtcbiAgICAgICAgaW1tdXRhYmxlQXNNdXRhYmxlLnNldChrZXksIHJlc3VsdC5yZXBsYWNlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgcmVwbGFjZWQ6IGltbXV0YWJsZUFzTXV0YWJsZS5hc0ltbXV0YWJsZSgpLCBkaWZmSHRtbCB9O1xuICB9XG5cbn1cbiJdfQ==