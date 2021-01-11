/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { AbstractSubscriberComponent } from '../abstract-subscriber';
import { ModalService } from '../shared/services';
import { ModalOptions } from '../shared/interfaces';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'modal-view',
  styleUrls: [
    './modal-view.component.scss'
  ],
  templateUrl: './modal-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalViewComponent extends AbstractSubscriberComponent implements OnInit {

  @ViewChild('modal') modal: ModalDirective;
  options: ModalOptions;

  // TODO: unsubcribe on destroy
  constructor(private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.modalService
      .display$
      .pipe(takeUntil(this.isDestroyed))
      .subscribe(display => {
        display ? this.modal.show() : this.modal.hide();
      });
    this.modalService
      .options$
      .pipe(takeUntil(this.isDestroyed))
      .subscribe(options => {
        this.options = options;
        this.changeDetectorRef.markForCheck();
      });
  }

  onShow() {
    if (this.options && this.options.onShow) {
      this.options.onShow();
    }
  }
}
