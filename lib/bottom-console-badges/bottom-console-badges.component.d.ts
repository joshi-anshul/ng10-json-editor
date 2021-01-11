import { EventEmitter, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { ProblemsService, JsonStoreService } from '../shared/services';
import * as i0 from "@angular/core";
export declare class BottomConsoleBadgesComponent extends AbstractSubscriberComponent implements OnInit, OnDestroy {
    private problemsService;
    private changeDetectorRef;
    private jsonStoreService;
    badgeClick: EventEmitter<string>;
    errorCount: number;
    warningCount: number;
    patchCount: number;
    constructor(problemsService: ProblemsService, changeDetectorRef: ChangeDetectorRef, jsonStoreService: JsonStoreService);
    ngOnInit(): void;
    onBadgeClick(event: Event, badgeName: string): void;
    static ɵfac: i0.ɵɵFactoryDef<BottomConsoleBadgesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BottomConsoleBadgesComponent, "bottom-console-badges", never, {}, { "badgeClick": "badgeClick"; }, never, never>;
}
//# sourceMappingURL=bottom-console-badges.component.d.ts.map