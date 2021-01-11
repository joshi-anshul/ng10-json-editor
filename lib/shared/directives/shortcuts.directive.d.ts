import { ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ShortcutActionService } from '../services';
import { CustomShortcutKeys } from '../interfaces';
import * as i0 from "@angular/core";
export declare class ShortcutsDirective implements OnDestroy, OnChanges {
    private el;
    private shortcutActionService;
    shortcuts: CustomShortcutKeys;
    private readonly actionNameToShortcut;
    private mousetrap;
    constructor(el: ElementRef, shortcutActionService: ShortcutActionService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ShortcutsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ShortcutsDirective, "[shortcuts]", never, { "shortcuts": "shortcuts"; }, {}, never>;
}
//# sourceMappingURL=shortcuts.directive.d.ts.map