import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteAutocompletionService, AppGlobalsService } from '../shared/services';
import { AutocompletionConfig } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class AutocompleteInputComponent implements OnInit {
    remoteAutocompletionService: RemoteAutocompletionService;
    appGlobalsService: AppGlobalsService;
    static readonly slashesRegExp: RegExp;
    autocompletionConfig: AutocompletionConfig;
    value: string;
    pathString: string;
    tabIndex: number;
    placeholder: string;
    onValueChange: EventEmitter<string>;
    onCompletionSelect: EventEmitter<string>;
    onKeypress: EventEmitter<KeyboardEvent>;
    onBlur: EventEmitter<void>;
    dataSource: Observable<Array<string | object>> | Array<string | object>;
    typeaheadOptionField: string;
    constructor(remoteAutocompletionService: RemoteAutocompletionService, appGlobalsService: AppGlobalsService);
    ngOnInit(): void;
    get customItemTemplate(): TemplateRef<any>;
    getDotSeparatedOptionField(): string;
    onModelChange(value: string): void;
    onMatchSelect(match: any): void;
    onMatchWrapperMouseDown(match: any): void;
    static ɵfac: i0.ɵɵFactoryDef<AutocompleteInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AutocompleteInputComponent, "autocomplete-input", never, { "autocompletionConfig": "autocompletionConfig"; "value": "value"; "pathString": "pathString"; "tabIndex": "tabIndex"; "placeholder": "placeholder"; }, { "onValueChange": "onValueChange"; "onCompletionSelect": "onCompletionSelect"; "onKeypress": "onKeypress"; "onBlur": "onBlur"; }, never, never>;
}
//# sourceMappingURL=autocomplete-input.component.d.ts.map