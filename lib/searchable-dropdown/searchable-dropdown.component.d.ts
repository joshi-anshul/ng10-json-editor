import { EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { BiDirectionalMap } from 'bi-directional-map/dist';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import * as i0 from "@angular/core";
export declare class SearchableDropdownComponent implements OnChanges {
    items: Array<string>;
    shortcutMap: {
        [key: string]: string;
    };
    displayValueMap: {
        [key: string]: string;
    };
    value: string;
    pathString: string;
    tabIndex: number;
    placeholder: string;
    expression: string;
    biDisplayValueMap: BiDirectionalMap<string, string>;
    displayValues: Array<string>;
    onSelect: EventEmitter<string>;
    onBlur: EventEmitter<void>;
    filterInputElRef: ElementRef;
    dropdown: BsDropdownDirective;
    ngOnChanges(changes: SimpleChanges): void;
    onItemClick(displayValue: string): void;
    onEnterKeyUp(): void;
    showDropdown(): void;
    onInputBlur(event: FocusEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<SearchableDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SearchableDropdownComponent, "searchable-dropdown", never, { "items": "items"; "shortcutMap": "shortcutMap"; "displayValueMap": "displayValueMap"; "value": "value"; "pathString": "pathString"; "tabIndex": "tabIndex"; "placeholder": "placeholder"; }, { "onSelect": "onSelect"; "onBlur": "onBlur"; }, never, never>;
}
//# sourceMappingURL=searchable-dropdown.component.d.ts.map