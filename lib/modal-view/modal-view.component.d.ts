import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { ModalService } from '../shared/services';
import { ModalOptions } from '../shared/interfaces';
import * as i0 from "@angular/core";
export declare class ModalViewComponent extends AbstractSubscriberComponent implements OnInit {
    private modalService;
    private changeDetectorRef;
    modal: ModalDirective;
    options: ModalOptions;
    constructor(modalService: ModalService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    onShow(): void;
    static ɵfac: i0.ɵɵFactoryDef<ModalViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModalViewComponent, "modal-view", never, {}, {}, never, never>;
}
//# sourceMappingURL=modal-view.component.d.ts.map