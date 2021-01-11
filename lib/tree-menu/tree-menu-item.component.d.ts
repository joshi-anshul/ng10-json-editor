import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Set } from 'immutable';
import { ReplaySubject } from 'rxjs';
import { DomUtilService, WindowHrefService, PathUtilService, AppGlobalsService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class TreeMenuItemComponent implements OnInit, OnChanges {
    private windowHrefService;
    private domUtilService;
    private pathUtilService;
    private appGlobalsService;
    label: string;
    value: any;
    schema: JSONSchema;
    path: string;
    depth: number;
    keys: Set<string>;
    isCollapsed: boolean;
    href: string;
    constructor(windowHrefService: WindowHrefService, domUtilService: DomUtilService, pathUtilService: PathUtilService, appGlobalsService: AppGlobalsService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggle(event: Event): void;
    collapse(): void;
    get isCollapsable(): boolean;
    get maxDepth(): number;
    get isNotLeaf(): boolean;
    get adminMode$(): ReplaySubject<boolean>;
    getChildPath(indexOrKey: number | string): string;
    trackByElement(index: number, element: any): any;
    static ɵfac: i0.ɵɵFactoryDef<TreeMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TreeMenuItemComponent, "tree-menu-item", never, { "label": "label"; "value": "value"; "schema": "schema"; "path": "path"; "depth": "depth"; }, {}, never, never>;
}
//# sourceMappingURL=tree-menu-item.component.d.ts.map