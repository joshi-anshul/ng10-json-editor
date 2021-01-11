import { TabsUtilService } from './tabs-util.service';
import { ListPageChangerService } from './list-page-changer.service';
import { JsonPatch } from '../interfaces';
import * as i0 from "@angular/core";
export declare class DomUtilService {
    private tabsUtilService;
    private listPageChangerService;
    private readonly editableSelector;
    private readonly highlightClass;
    private highlightedElement;
    constructor(tabsUtilService: TabsUtilService, listPageChangerService: ListPageChangerService);
    focusAndSelectFirstEditableChildById(id: string, highlight?: boolean): void;
    private focusAndSelectContent;
    focusFirstInputChildByElement(el: HTMLElement): void;
    focusRightOrLeftParentCell(id: string, direction: number): void;
    blurFirstEditableChildById(id: string): void;
    clearHighlight(): void;
    focusPatch(patch: JsonPatch): void;
    private selectAllContent;
    private openDropdown;
    static ɵfac: i0.ɵɵFactoryDef<DomUtilService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DomUtilService>;
}
//# sourceMappingURL=dom-util.service.d.ts.map