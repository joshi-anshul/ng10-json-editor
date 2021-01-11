import { ChangeDetectorRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobalsService, PathUtilService } from '../shared/services';
import { RefConfig, JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class RefFieldComponent implements OnChanges {
    private http;
    private changeDetectorRef;
    private appGlobalsService;
    private pathUtilService;
    schema: JSONSchema;
    value: Map<string, string>;
    path: Array<any>;
    pathString: string;
    refData: object;
    requestOptions: any;
    refPath: Array<any>;
    isPreviewButtonHidden: boolean;
    private anchorAttributes;
    constructor(http: HttpClient, changeDetectorRef: ChangeDetectorRef, appGlobalsService: AppGlobalsService, pathUtilService: PathUtilService);
    ngOnChanges(changes: SimpleChanges): void;
    onPreviewClick(): void;
    get customTemplate(): TemplateRef<any>;
    get refConfig(): RefConfig;
    get ref(): string;
    get anchorHref(): string;
    get anchorDisplay(): string;
    get isTemplateEnabled(): boolean;
    get shouldDisplayTemplate(): boolean;
    get shouldDisplayInputField(): boolean;
    private fetchRef;
    private createRequestOptionsWithConfig;
    static ɵfac: i0.ɵɵFactoryDef<RefFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RefFieldComponent, "ref-field", never, { "schema": "schema"; "value": "value"; "path": "path"; }, {}, never, never>;
}
//# sourceMappingURL=ref-field.component.d.ts.map