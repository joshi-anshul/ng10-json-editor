import { ElementRef, EventEmitter, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { DomUtilService, KatexService } from '../shared/services';
import * as i0 from "@angular/core";
export declare class StringInputComponent implements AfterViewInit, OnInit, OnChanges {
    domUtilService: DomUtilService;
    katexService: KatexService;
    latexPreviewEl: ElementRef;
    value: string;
    disabled: boolean;
    pathString: string;
    placeholder: string;
    tabIndex: number;
    latexPreviewEnabled: boolean;
    blur: EventEmitter<void>;
    onKeypress: EventEmitter<void>;
    valueChange: EventEmitter<string>;
    latexPreviewShown: boolean;
    contentModel: string;
    constructor(domUtilService: DomUtilService, katexService: KatexService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onBlur(): void;
    renderLatex(): void;
    hideLatexPreview(contentEditableEl: HTMLElement): void;
    contentModelChange(value: string): void;
    get shouldShowLatexPreview(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<StringInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StringInputComponent, "string-input", never, { "value": "value"; "disabled": "disabled"; "pathString": "pathString"; "placeholder": "placeholder"; "tabIndex": "tabIndex"; "latexPreviewEnabled": "latexPreviewEnabled"; }, { "blur": "blur"; "onKeypress": "onKeypress"; "valueChange": "valueChange"; }, never, never>;
}
//# sourceMappingURL=string-input.component.d.ts.map