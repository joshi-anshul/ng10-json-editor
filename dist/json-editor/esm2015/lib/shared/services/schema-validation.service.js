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
import * as Ajv from 'ajv';
import * as enableCustomErrorMessages from 'ajv-errors';
import * as i0 from "@angular/core";
import * as i1 from "./app-globals.service";
export class SchemaValidationService {
    constructor(appGlobalsService) {
        this.appGlobalsService = appGlobalsService;
        // `jsonPointer: true` is required for `avj-errors` package
        this.ajv = new Ajv({ allErrors: true, jsonPointers: true });
        // https://gist.github.com/dperini/729294
        this.reWebUrl = new RegExp('^' +
            // protocol identifier
            '(?:(?:https?|ftp)://)' +
            // user:pass authentication
            '(?:\\S+(?::\\S*)?@)?' +
            '(?:' +
            // IP address exclusion
            // private & local networks
            '(?!(?:10)(?:\\.\\d{1,3}){3})' +
            '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
            '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
            '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
            '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
            '|' +
            'localhost' +
            '|' +
            // host name
            '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
            // domain name
            '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
            // TLD identifier
            '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
            // TLD may end with dot
            '\\.?' +
            ')' +
            // port number
            '(?::\\d{2,5})?' +
            // resource path
            '(?:[/?#]\\S*)?' +
            '$', 'i');
        enableCustomErrorMessages(this.ajv);
        //  ajv didn't support format:url, so was added using web url regex for validation
        this.ajv.addFormat('url', this.reWebUrl);
        if (this.appGlobalsService.config && this.appGlobalsService.config.customFormatValidation) {
            const customFormats = this.appGlobalsService.config.customFormatValidation;
            Object.keys(customFormats).forEach(key => {
                this.ajv.addFormat(key, customFormats[key].formatChecker);
            });
        }
    }
    /**
     * Validates a specific value against schema
     *
     * Uses: ajv package for json-schema validation
     *
     */
    validateValue(value, schema) {
        const validationErrors = [];
        if (!this.ajv.validate(schema, value)) {
            this.ajv.errors.forEach(error => {
                validationErrors.push({
                    message: error.message,
                    type: 'Error'
                });
            });
        }
        return validationErrors;
    }
}
SchemaValidationService.ɵfac = function SchemaValidationService_Factory(t) { return new (t || SchemaValidationService)(i0.ɵɵinject(i1.AppGlobalsService)); };
SchemaValidationService.ɵprov = i0.ɵɵdefineInjectable({ token: SchemaValidationService, factory: SchemaValidationService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SchemaValidationService, [{
        type: Injectable
    }], function () { return [{ type: i1.AppGlobalsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvc2NoZW1hLXZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQzNCLE9BQU8sS0FBSyx5QkFBeUIsTUFBTSxZQUFZLENBQUM7OztBQU14RCxNQUFNLE9BQU8sdUJBQXVCO0lBNkNsQyxZQUFtQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNDdkQsMkRBQTJEO1FBQ25ELFFBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFL0QseUNBQXlDO1FBQ2pDLGFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FDM0IsR0FBRztZQUNILHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsMkJBQTJCO1lBQzNCLHNCQUFzQjtZQUN0QixLQUFLO1lBQ0wsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQiw4QkFBOEI7WUFDOUIsK0NBQStDO1lBQy9DLG9EQUFvRDtZQUNwRCxvQ0FBb0M7WUFDcEMsb0NBQW9DO1lBQ3BDLHVDQUF1QztZQUN2Qyx3Q0FBd0M7WUFDeEMsMENBQTBDO1lBQzFDLHdDQUF3QztZQUN4Qyw0Q0FBNEM7WUFDNUMsZ0RBQWdEO1lBQ2hELEdBQUc7WUFDSCxXQUFXO1lBQ1gsR0FBRztZQUNILFlBQVk7WUFDWiw0REFBNEQ7WUFDNUQsY0FBYztZQUNkLGdFQUFnRTtZQUNoRSxpQkFBaUI7WUFDakIscUNBQXFDO1lBQ3JDLHVCQUF1QjtZQUN2QixNQUFNO1lBQ04sR0FBRztZQUNILGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixHQUFHLEVBQUUsR0FBRyxDQUNULENBQUM7UUFHQSx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEMsa0ZBQWtGO1FBQ2xGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUU7WUFDekYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztZQUUzRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsYUFBYSxDQUFDLEtBQVUsRUFBRSxNQUFrQjtRQUMxQyxNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO29CQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ3RCLElBQUksRUFBRSxPQUFPO2lCQUNkLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7OzhGQTdFVSx1QkFBdUI7K0RBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIG5nMi1qc29uLWVkaXRvci5cbiAqIENvcHlyaWdodCAoQykgMjAxNiBDRVJOLlxuICpcbiAqIG5nMi1qc29uLWVkaXRvciBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBuZzItanNvbi1lZGl0b3I7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLixcbiAqIDU5IFRlbXBsZSBQbGFjZSwgU3VpdGUgMzMwLCBCb3N0b24sIE1BIDAyMTExLTEzMDcsIFVTQS5cbiAqIEluIGFwcGx5aW5nIHRoaXMgbGljZW5zZSwgQ0VSTiBkb2VzIG5vdFxuICogd2FpdmUgdGhlIHByaXZpbGVnZXMgYW5kIGltbXVuaXRpZXMgZ3JhbnRlZCB0byBpdCBieSB2aXJ0dWUgb2YgaXRzIHN0YXR1c1xuICogYXMgYW4gSW50ZXJnb3Zlcm5tZW50YWwgT3JnYW5pemF0aW9uIG9yIHN1Ym1pdCBpdHNlbGYgdG8gYW55IGp1cmlzZGljdGlvbi5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEFqdiBmcm9tICdhanYnO1xuaW1wb3J0ICogYXMgZW5hYmxlQ3VzdG9tRXJyb3JNZXNzYWdlcyBmcm9tICdhanYtZXJyb3JzJztcblxuaW1wb3J0IHsgQXBwR2xvYmFsc1NlcnZpY2UgfSBmcm9tICcuL2FwcC1nbG9iYWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSwgVmFsaWRhdGlvblByb2JsZW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVZhbGlkYXRpb25TZXJ2aWNlIHtcblxuICAvLyBganNvblBvaW50ZXI6IHRydWVgIGlzIHJlcXVpcmVkIGZvciBgYXZqLWVycm9yc2AgcGFja2FnZVxuICBwcml2YXRlIGFqdiA9IG5ldyBBanYoeyBhbGxFcnJvcnM6IHRydWUsIGpzb25Qb2ludGVyczogdHJ1ZSB9KTtcblxuICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kcGVyaW5pLzcyOTI5NFxuICBwcml2YXRlIHJlV2ViVXJsID0gbmV3IFJlZ0V4cChcbiAgICAnXicgK1xuICAgIC8vIHByb3RvY29sIGlkZW50aWZpZXJcbiAgICAnKD86KD86aHR0cHM/fGZ0cCk6Ly8pJyArXG4gICAgLy8gdXNlcjpwYXNzIGF1dGhlbnRpY2F0aW9uXG4gICAgJyg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPycgK1xuICAgICcoPzonICtcbiAgICAvLyBJUCBhZGRyZXNzIGV4Y2x1c2lvblxuICAgIC8vIHByaXZhdGUgJiBsb2NhbCBuZXR3b3Jrc1xuICAgICcoPyEoPzoxMCkoPzpcXFxcLlxcXFxkezEsM30pezN9KScgK1xuICAgICcoPyEoPzoxNjlcXFxcLjI1NHwxOTJcXFxcLjE2OCkoPzpcXFxcLlxcXFxkezEsM30pezJ9KScgK1xuICAgICcoPyExNzJcXFxcLig/OjFbNi05XXwyXFxcXGR8M1swLTFdKSg/OlxcXFwuXFxcXGR7MSwzfSl7Mn0pJyArXG4gICAgLy8gSVAgYWRkcmVzcyBkb3R0ZWQgbm90YXRpb24gb2N0ZXRzXG4gICAgLy8gZXhjbHVkZXMgbG9vcGJhY2sgbmV0d29yayAwLjAuMC4wXG4gICAgLy8gZXhjbHVkZXMgcmVzZXJ2ZWQgc3BhY2UgPj0gMjI0LjAuMC4wXG4gICAgLy8gZXhjbHVkZXMgbmV0d29yayAmIGJyb2FjYXN0IGFkZHJlc3Nlc1xuICAgIC8vIChmaXJzdCAmIGxhc3QgSVAgYWRkcmVzcyBvZiBlYWNoIGNsYXNzKVxuICAgICcoPzpbMS05XVxcXFxkP3wxXFxcXGRcXFxcZHwyWzAxXVxcXFxkfDIyWzAtM10pJyArXG4gICAgJyg/OlxcXFwuKD86MT9cXFxcZHsxLDJ9fDJbMC00XVxcXFxkfDI1WzAtNV0pKXsyfScgK1xuICAgICcoPzpcXFxcLig/OlsxLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNF0pKScgK1xuICAgICd8JyArXG4gICAgJ2xvY2FsaG9zdCcgK1xuICAgICd8JyArXG4gICAgLy8gaG9zdCBuYW1lXG4gICAgJyg/Oig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XS0qKSpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rKScgK1xuICAgIC8vIGRvbWFpbiBuYW1lXG4gICAgJyg/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKicgK1xuICAgIC8vIFRMRCBpZGVudGlmaWVyXG4gICAgJyg/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpJyArXG4gICAgLy8gVExEIG1heSBlbmQgd2l0aCBkb3RcbiAgICAnXFxcXC4/JyArXG4gICAgJyknICtcbiAgICAvLyBwb3J0IG51bWJlclxuICAgICcoPzo6XFxcXGR7Miw1fSk/JyArXG4gICAgLy8gcmVzb3VyY2UgcGF0aFxuICAgICcoPzpbLz8jXVxcXFxTKik/JyArXG4gICAgJyQnLCAnaSdcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwR2xvYmFsc1NlcnZpY2U6IEFwcEdsb2JhbHNTZXJ2aWNlKSB7XG4gICAgZW5hYmxlQ3VzdG9tRXJyb3JNZXNzYWdlcyh0aGlzLmFqdik7XG5cbiAgICAvLyAgYWp2IGRpZG4ndCBzdXBwb3J0IGZvcm1hdDp1cmwsIHNvIHdhcyBhZGRlZCB1c2luZyB3ZWIgdXJsIHJlZ2V4IGZvciB2YWxpZGF0aW9uXG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCd1cmwnLCB0aGlzLnJlV2ViVXJsKTtcbiAgICBpZiAodGhpcy5hcHBHbG9iYWxzU2VydmljZS5jb25maWcgJiYgdGhpcy5hcHBHbG9iYWxzU2VydmljZS5jb25maWcuY3VzdG9tRm9ybWF0VmFsaWRhdGlvbikge1xuICAgICAgY29uc3QgY3VzdG9tRm9ybWF0cyA9IHRoaXMuYXBwR2xvYmFsc1NlcnZpY2UuY29uZmlnLmN1c3RvbUZvcm1hdFZhbGlkYXRpb247XG5cbiAgICAgIE9iamVjdC5rZXlzKGN1c3RvbUZvcm1hdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgdGhpcy5hanYuYWRkRm9ybWF0KGtleSwgY3VzdG9tRm9ybWF0c1trZXldLmZvcm1hdENoZWNrZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHNwZWNpZmljIHZhbHVlIGFnYWluc3Qgc2NoZW1hXG4gICAqXG4gICAqIFVzZXM6IGFqdiBwYWNrYWdlIGZvciBqc29uLXNjaGVtYSB2YWxpZGF0aW9uXG4gICAqXG4gICAqL1xuICB2YWxpZGF0ZVZhbHVlKHZhbHVlOiBhbnksIHNjaGVtYTogSlNPTlNjaGVtYSk6IEFycmF5PFZhbGlkYXRpb25Qcm9ibGVtPiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbkVycm9ycyA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKSkge1xuICAgICAgdGhpcy5hanYuZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgdHlwZTogJ0Vycm9yJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9ycztcbiAgfVxuXG59XG5cblxuIl19