import { OnInit, ChangeDetectorRef } from '@angular/core';
import { AbstractSubscriberComponent } from '../../abstract-subscriber';
import { DomUtilService, PathUtilService, ProblemsService } from '../../shared/services';
import { SchemaValidationProblems, ProblemCollectionType } from '../../shared/interfaces';
import * as i0 from "@angular/core";
export declare class ProblemsConsoleTabComponent extends AbstractSubscriberComponent implements OnInit {
    domUtilService: DomUtilService;
    pathUtilService: PathUtilService;
    problemsService: ProblemsService;
    changeDetectorRef: ChangeDetectorRef;
    problemType: ProblemCollectionType;
    internalProblemMap: SchemaValidationProblems;
    externalProblemMap: SchemaValidationProblems;
    problemCount: number;
    iconClassName: string;
    constructor(domUtilService: DomUtilService, pathUtilService: PathUtilService, problemsService: ProblemsService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    focusAndSelectPath(path: string): void;
    static ɵfac: i0.ɵɵFactoryDef<ProblemsConsoleTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProblemsConsoleTabComponent, "problems-console-tab", never, { "problemType": "problemType"; }, {}, never, never>;
}
//# sourceMappingURL=problems-console-tab.component.d.ts.map