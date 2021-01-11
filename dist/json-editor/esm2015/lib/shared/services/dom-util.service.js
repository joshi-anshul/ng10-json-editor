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
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./tabs-util.service";
import * as i2 from "./list-page-changer.service";
export class DomUtilService {
    constructor(tabsUtilService, listPageChangerService) {
        this.tabsUtilService = tabsUtilService;
        this.listPageChangerService = listPageChangerService;
        this.editableSelector = '.value-container input, span[contenteditable=true], .switch-input, searchable-dropdown span.value';
        // highlight class is defined in json-editor.component.scss
        this.highlightClass = 'highlight';
    }
    focusAndSelectFirstEditableChildById(id, highlight = false) {
        this.tabsUtilService.selectTabIfNeeded(id);
        this.listPageChangerService.changePage(id);
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                const firstEditable = el.querySelector(this.editableSelector);
                if (firstEditable) {
                    if (firstEditable.classList.contains('hidden')) {
                        // has latex preview, click to disable to preview
                        firstEditable.nextElementSibling.click();
                        setTimeout(() => {
                            this.focusAndSelectContent(firstEditable, highlight);
                        });
                    }
                    else {
                        this.focusAndSelectContent(firstEditable, highlight);
                    }
                }
                else {
                    // if element doesn't have any input, open add-field-dropdown if it exists.
                    this.openDropdown(el);
                }
            }
        });
    }
    focusAndSelectContent(el, highlight) {
        el.focus();
        this.selectAllContent(el);
        if (highlight) {
            el.classList.add(this.highlightClass);
            this.highlightedElement = el;
        }
    }
    focusFirstInputChildByElement(el) {
        const firstInput = el.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    }
    focusRightOrLeftParentCell(id, direction) {
        const el = document.getElementById(id);
        if (el && el.tabIndex) {
            let elementParentCell = el.parentElement;
            while (elementParentCell.nodeName !== 'TD') {
                elementParentCell = elementParentCell.parentElement;
            }
            let nextSibling = direction > 0 ? elementParentCell.nextElementSibling : elementParentCell.previousElementSibling;
            while (nextSibling && nextSibling.nodeName === 'TD') {
                const inputElement = nextSibling.querySelector(`input[tabindex='1'], span[contenteditable=true][tabindex='1']`);
                if (inputElement) {
                    inputElement.focus();
                    this.selectAllContent(inputElement);
                    break;
                }
                nextSibling = direction > 0 ? nextSibling.nextElementSibling : nextSibling.previousElementSibling;
            }
        }
    }
    blurFirstEditableChildById(id) {
        const el = document.getElementById(id);
        const firstEditable = el.querySelector(this.editableSelector);
        if (firstEditable) {
            firstEditable.blur();
        }
    }
    clearHighlight() {
        if (this.highlightedElement) {
            this.highlightedElement.classList.remove(this.highlightClass);
            this.highlightedElement = undefined;
        }
    }
    focusPatch(patch) {
        this.tabsUtilService.selectTabIfNeeded(patch.path);
        this.listPageChangerService.changePage(patch.path);
        setTimeout(() => {
            const el = document.getElementById(patch.path);
            const mergeButton = el.querySelector('.btn-merge');
            if (mergeButton) {
                mergeButton.focus();
                mergeButton.click();
            }
            else {
                const patchActionsContainer = el.querySelector(`.${patch.op}.patch-actions-container`);
                if (patchActionsContainer) {
                    patchActionsContainer.focus();
                }
            }
        });
    }
    selectAllContent(el) {
        if (el instanceof HTMLInputElement) {
            el.select();
        }
        else {
            // select all content for contenteditable element.
            const range = document.createRange();
            range.selectNodeContents(el);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    openDropdown(el) {
        const dropdown = el.querySelector('div.btn-group');
        if (dropdown) {
            const dropDownButton = dropdown.querySelector('button');
            if (dropDownButton) {
                dropDownButton.click();
            }
        }
    }
}
DomUtilService.ɵfac = function DomUtilService_Factory(t) { return new (t || DomUtilService)(i0.ɵɵinject(i1.TabsUtilService), i0.ɵɵinject(i2.ListPageChangerService)); };
DomUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: DomUtilService, factory: DomUtilService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DomUtilService, [{
        type: Injectable
    }], function () { return [{ type: i1.TabsUtilService }, { type: i2.ListPageChangerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLXV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvZG9tLXV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTNDLE1BQU0sT0FBTyxjQUFjO0lBT3pCLFlBQW9CLGVBQWdDLEVBQzFDLHNCQUE4QztRQURwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDMUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQU52QyxxQkFBZ0IsR0FBRyxtR0FBbUcsQ0FBQztRQUN4SSwyREFBMkQ7UUFDMUMsbUJBQWMsR0FBRyxXQUFXLENBQUM7SUFJYyxDQUFDO0lBRTdELG9DQUFvQyxDQUFDLEVBQVUsRUFBRSxTQUFTLEdBQUcsS0FBSztRQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkMsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQWdCLENBQUM7Z0JBQzdFLElBQUksYUFBYSxFQUFFO29CQUNqQixJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUM5QyxpREFBaUQ7d0JB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O1NBQ3JCO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxFQUFlO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkQsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztZQUM3RSxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzs0RUE3SFUsY0FBYztzREFBZCxjQUFjLFdBQWQsY0FBYztrREFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJzVXRpbFNlcnZpY2UgfSBmcm9tICcuL3RhYnMtdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RQYWdlQ2hhbmdlclNlcnZpY2UgfSBmcm9tICcuL2xpc3QtcGFnZS1jaGFuZ2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBKc29uUGF0Y2ggfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbVV0aWxTZXJ2aWNlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IGVkaXRhYmxlU2VsZWN0b3IgPSAnLnZhbHVlLWNvbnRhaW5lciBpbnB1dCwgc3Bhbltjb250ZW50ZWRpdGFibGU9dHJ1ZV0sIC5zd2l0Y2gtaW5wdXQsIHNlYXJjaGFibGUtZHJvcGRvd24gc3Bhbi52YWx1ZSc7XG4gIC8vIGhpZ2hsaWdodCBjbGFzcyBpcyBkZWZpbmVkIGluIGpzb24tZWRpdG9yLmNvbXBvbmVudC5zY3NzXG4gIHByaXZhdGUgcmVhZG9ubHkgaGlnaGxpZ2h0Q2xhc3MgPSAnaGlnaGxpZ2h0JztcbiAgcHJpdmF0ZSBoaWdobGlnaHRlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFic1V0aWxTZXJ2aWNlOiBUYWJzVXRpbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsaXN0UGFnZUNoYW5nZXJTZXJ2aWNlOiBMaXN0UGFnZUNoYW5nZXJTZXJ2aWNlKSB7IH1cblxuICBmb2N1c0FuZFNlbGVjdEZpcnN0RWRpdGFibGVDaGlsZEJ5SWQoaWQ6IHN0cmluZywgaGlnaGxpZ2h0ID0gZmFsc2UpIHtcbiAgICB0aGlzLnRhYnNVdGlsU2VydmljZS5zZWxlY3RUYWJJZk5lZWRlZChpZCk7XG4gICAgdGhpcy5saXN0UGFnZUNoYW5nZXJTZXJ2aWNlLmNoYW5nZVBhZ2UoaWQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgY29uc3QgZmlyc3RFZGl0YWJsZSA9IGVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5lZGl0YWJsZVNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKGZpcnN0RWRpdGFibGUpIHtcbiAgICAgICAgICBpZiAoZmlyc3RFZGl0YWJsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICAvLyBoYXMgbGF0ZXggcHJldmlldywgY2xpY2sgdG8gZGlzYWJsZSB0byBwcmV2aWV3XG4gICAgICAgICAgICAoZmlyc3RFZGl0YWJsZS5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c0FuZFNlbGVjdENvbnRlbnQoZmlyc3RFZGl0YWJsZSwgaGlnaGxpZ2h0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQW5kU2VsZWN0Q29udGVudChmaXJzdEVkaXRhYmxlLCBoaWdobGlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbnkgaW5wdXQsIG9wZW4gYWRkLWZpZWxkLWRyb3Bkb3duIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICB0aGlzLm9wZW5Ecm9wZG93bihlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZm9jdXNBbmRTZWxlY3RDb250ZW50KGVsOiBIVE1MRWxlbWVudCwgaGlnaGxpZ2h0OiBib29sZWFuKSB7XG4gICAgZWwuZm9jdXMoKTtcbiAgICB0aGlzLnNlbGVjdEFsbENvbnRlbnQoZWwpO1xuICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQodGhpcy5oaWdobGlnaHRDbGFzcyk7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkRWxlbWVudCA9IGVsO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzRmlyc3RJbnB1dENoaWxkQnlFbGVtZW50KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGZpcnN0SW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChmaXJzdElucHV0KSB7XG4gICAgICBmaXJzdElucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNSaWdodE9yTGVmdFBhcmVudENlbGwoaWQ6IHN0cmluZywgZGlyZWN0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWwgJiYgZWwudGFiSW5kZXgpIHtcbiAgICAgIGxldCBlbGVtZW50UGFyZW50Q2VsbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICB3aGlsZSAoZWxlbWVudFBhcmVudENlbGwubm9kZU5hbWUgIT09ICdURCcpIHtcbiAgICAgICAgZWxlbWVudFBhcmVudENlbGwgPSBlbGVtZW50UGFyZW50Q2VsbC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gZGlyZWN0aW9uID4gMCA/IGVsZW1lbnRQYXJlbnRDZWxsLm5leHRFbGVtZW50U2libGluZyA6IGVsZW1lbnRQYXJlbnRDZWxsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB3aGlsZSAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdURCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gbmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcihgaW5wdXRbdGFiaW5kZXg9JzEnXSwgc3Bhbltjb250ZW50ZWRpdGFibGU9dHJ1ZV1bdGFiaW5kZXg9JzEnXWApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxDb250ZW50KGlucHV0RWxlbWVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dFNpYmxpbmcgPSBkaXJlY3Rpb24gPiAwID8gbmV4dFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nIDogbmV4dFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBibHVyRmlyc3RFZGl0YWJsZUNoaWxkQnlJZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3QgZmlyc3RFZGl0YWJsZSA9IGVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5lZGl0YWJsZVNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZmlyc3RFZGl0YWJsZSkge1xuICAgICAgZmlyc3RFZGl0YWJsZS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJIaWdobGlnaHQoKSB7XG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50KSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaGlnaGxpZ2h0Q2xhc3MpO1xuICAgICAgdGhpcy5oaWdobGlnaHRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNQYXRjaChwYXRjaDogSnNvblBhdGNoKSB7XG4gICAgdGhpcy50YWJzVXRpbFNlcnZpY2Uuc2VsZWN0VGFiSWZOZWVkZWQocGF0Y2gucGF0aCk7XG4gICAgdGhpcy5saXN0UGFnZUNoYW5nZXJTZXJ2aWNlLmNoYW5nZVBhZ2UocGF0Y2gucGF0aCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhdGNoLnBhdGgpO1xuICAgICAgY29uc3QgbWVyZ2VCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1lcmdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICBpZiAobWVyZ2VCdXR0b24pIHtcbiAgICAgICAgbWVyZ2VCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgbWVyZ2VCdXR0b24uY2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBhdGNoQWN0aW9uc0NvbnRhaW5lciA9IGVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3BhdGNoLm9wfS5wYXRjaC1hY3Rpb25zLWNvbnRhaW5lcmApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAocGF0Y2hBY3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgICAgcGF0Y2hBY3Rpb25zQ29udGFpbmVyLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0QWxsQ29udGVudChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBlbC5zZWxlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VsZWN0IGFsbCBjb250ZW50IGZvciBjb250ZW50ZWRpdGFibGUgZWxlbWVudC5cbiAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbCk7XG4gICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRyb3Bkb3duKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZWwucXVlcnlTZWxlY3RvcignZGl2LmJ0bi1ncm91cCcpO1xuICAgIGlmIChkcm9wZG93bikge1xuICAgICAgY29uc3QgZHJvcERvd25CdXR0b24gPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgIGlmIChkcm9wRG93bkJ1dHRvbikge1xuICAgICAgICBkcm9wRG93bkJ1dHRvbi5jbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=