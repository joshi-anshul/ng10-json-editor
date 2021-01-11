import { ReplaySubject } from 'rxjs';
import { ModalOptions } from '../interfaces';
import * as i0 from "@angular/core";
export declare class ModalService {
    options$: ReplaySubject<ModalOptions>;
    display$: ReplaySubject<boolean>;
    displayModal(options: ModalOptions): void;
    closeCurrentModal(): void;
    static ɵfac: i0.ɵɵFactoryDef<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ModalService>;
}
//# sourceMappingURL=modal.service.d.ts.map