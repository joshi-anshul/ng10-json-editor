import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContentModelDirective implements OnChanges {
    private elementRef;
    contentModel: string;
    contentModelChange: EventEmitter<string>;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    onBlur(): void;
    onKeypress(event: KeyboardEvent): void;
    private emitContentModelChange;
    private refresh;
    static ɵfac: i0.ɵɵFactoryDef<ContentModelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ContentModelDirective, "[contentModel]", never, { "contentModel": "contentModel"; }, { "contentModelChange": "contentModelChange"; }, never>;
}
//# sourceMappingURL=content-model.directive.d.ts.map