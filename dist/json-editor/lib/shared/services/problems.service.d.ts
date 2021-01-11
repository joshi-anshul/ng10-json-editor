import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { SchemaValidationProblems, CategorizedValidationProblems, ValidationProblem } from '../interfaces';
import * as i0 from "@angular/core";
export declare class ProblemsService {
    readonly externalCategorizedProblems$: ReplaySubject<CategorizedValidationProblems>;
    readonly internalCategorizedProblems$: ReplaySubject<CategorizedValidationProblems>;
    private readonly externalProblemCount$;
    private readonly internalProblemCount$;
    readonly errorCount$: Observable<number>;
    readonly warningCount$: Observable<number>;
    readonly internalProblemMap$: ReplaySubject<SchemaValidationProblems>;
    private internalProblemMap;
    private internalCategorizedProblemMap;
    private externalCategorizedProblemMap;
    private externalProblemCount;
    private internalProblemCount;
    constructor();
    private getTotalDistinctProblemCount$ForType;
    set externalProblems(problems: SchemaValidationProblems);
    setInternalProblemsForPath(path: string, problems: Array<ValidationProblem>): void;
    private internalProblemCountForPath;
    hasProblem(path: string): boolean;
    private categorizeProblemMap;
    private categorizeValidationProblems;
    static ɵfac: i0.ɵɵFactoryDef<ProblemsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ProblemsService>;
}
//# sourceMappingURL=problems.service.d.ts.map