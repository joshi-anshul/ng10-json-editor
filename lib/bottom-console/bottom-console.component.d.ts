import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BottomConsoleComponent {
    isOpen: boolean;
    activeTab: string;
    onCollapse: EventEmitter<boolean>;
    closePanel(): void;
    isActive(tabName: string): boolean;
    static ɵfac: i0.ɵɵFactoryDef<BottomConsoleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BottomConsoleComponent, "bottom-console", never, { "isOpen": "isOpen"; "activeTab": "activeTab"; }, { "onCollapse": "onCollapse"; }, never, never>;
}
//# sourceMappingURL=bottom-console.component.d.ts.map