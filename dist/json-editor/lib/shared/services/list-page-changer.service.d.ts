import { ReplaySubject } from 'rxjs';
import { PathUtilService } from './path-util.service';
import * as i0 from "@angular/core";
export declare class ListPageChangerService {
    private pathUtilService;
    private pageChange$Map;
    private itemsPerPageMap;
    constructor(pathUtilService: PathUtilService);
    /**
     * Changes the page of the list so that requested item is visible on UI
     * It doesn't do anything if given path's parent is not paginated list.
     *
     * @param itemPath path to a list item
     */
    changePage(fieldPath: string): void;
    registerPaginatedList(listPath: string, itemsPerPage: number): ReplaySubject<number>;
    static ɵfac: i0.ɵɵFactoryDef<ListPageChangerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ListPageChangerService>;
}
//# sourceMappingURL=list-page-changer.service.d.ts.map