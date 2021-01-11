import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutocompletionConfig } from '../interfaces';
import { PathUtilService } from './path-util.service';
import * as i0 from "@angular/core";
export declare class RemoteAutocompletionService {
    private http;
    private pathUtilService;
    constructor(http: HttpClient, pathUtilService: PathUtilService);
    getAutocompletionResults(options: AutocompletionConfig, token: string): Observable<Array<object>>;
    private mapResponseToResults;
    static ɵfac: i0.ɵɵFactoryDef<RemoteAutocompletionService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RemoteAutocompletionService>;
}
//# sourceMappingURL=remote-autocompletion.service.d.ts.map