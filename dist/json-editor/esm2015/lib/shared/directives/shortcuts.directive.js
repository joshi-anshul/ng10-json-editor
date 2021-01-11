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
import { Directive, Input } from '@angular/core';
import { Mousetrap } from 'mousetrap';
import * as i0 from "@angular/core";
import * as i1 from "../services";
export class ShortcutsDirective {
    constructor(el, shortcutActionService) {
        this.el = el;
        this.shortcutActionService = shortcutActionService;
        // actions with default shortcut keys, update with the custom keys later
        this.actionNameToShortcut = {
            add: {
                key: 'alt+a',
                action: this.shortcutActionService.generateShortcutAction('addAction')
            },
            addToRoot: {
                key: 'mod+shift+a',
                action: this.shortcutActionService.generateShortcutAction('addToRootAction')
            },
            addBelowToRoot: {
                key: 'mod+shift+b',
                action: this.shortcutActionService.generateShortcutAction('addBelowToRootAction')
            },
            moveUp: {
                key: 'mod+shift+up',
                action: this.shortcutActionService.generateShortcutAction('moveUpAction')
            },
            moveDown: {
                key: 'mod+shift+down',
                action: this.shortcutActionService.generateShortcutAction('moveDownAction')
            },
            moveUpRoot: {
                key: 'mod+alt+up',
                action: this.shortcutActionService.generateShortcutAction('moveUpRootAction')
            },
            moveDownRoot: {
                key: 'mod+alt+down',
                action: this.shortcutActionService.generateShortcutAction('moveDownRootAction')
            },
            delete: {
                key: 'mod+backspace',
                action: this.shortcutActionService.generateShortcutAction('deleteAction')
            },
            navigateUp: {
                key: 'mod+up',
                action: this.shortcutActionService.generateShortcutAction('navigateUpAction')
            },
            navigateDown: {
                key: 'mod+down',
                action: this.shortcutActionService.generateShortcutAction('navigateDownAction')
            },
            navigateLeft: {
                key: 'mod+left',
                action: this.shortcutActionService.generateShortcutAction('navigateLeftAction')
            },
            navigateRight: {
                key: 'mod+right',
                action: this.shortcutActionService.generateShortcutAction('navigateRightAction')
            },
            copy: {
                key: 'alt+c',
                action: this.shortcutActionService.generateShortcutAction('copyAction')
            },
            copyFromRoot: {
                key: 'mod+alt+r',
                action: this.shortcutActionService.generateShortcutAction('copyFromRootAction')
            },
            undo: {
                key: 'mod+alt+z',
                action: this.shortcutActionService.generateShortcutAction('undoAction')
            }
        };
        this.mousetrap = new Mousetrap(this.el.nativeElement);
    }
    ngOnChanges(changes) {
        const customShortcutKeysChange = changes['shortcuts'];
        if (customShortcutKeysChange) {
            const actionNames = Object.keys(this.actionNameToShortcut);
            // if custom shortcut keys are set
            if (this.shortcuts) {
                actionNames.forEach(actionName => {
                    const shortcut = this.actionNameToShortcut[actionName];
                    if (this.shortcuts[actionName]) {
                        // override shortcut key
                        shortcut.key = this.shortcuts[actionName];
                    }
                    this.mousetrap.bind(shortcut.key, shortcut.action);
                });
            }
            else {
                actionNames.forEach(actionName => {
                    const shortcut = this.actionNameToShortcut[actionName];
                    this.mousetrap.bind(shortcut.key, shortcut.action);
                });
            }
        }
    }
    ngOnDestroy() {
        Object.keys(this.actionNameToShortcut)
            .forEach(actionName => {
            this.mousetrap.unbind(this.actionNameToShortcut[actionName].key);
        });
    }
}
ShortcutsDirective.ɵfac = function ShortcutsDirective_Factory(t) { return new (t || ShortcutsDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ShortcutActionService)); };
ShortcutsDirective.ɵdir = i0.ɵɵdefineDirective({ type: ShortcutsDirective, selectors: [["", "shortcuts", ""]], inputs: { shortcuts: "shortcuts" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShortcutsDirective, [{
        type: Directive,
        args: [{
                selector: '[shortcuts]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ShortcutActionService }]; }, { shortcuts: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXRzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvZGlyZWN0aXZlcy9zaG9ydGN1dHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFFTCxTQUFTLEVBQ1QsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDUCxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQVE3QixNQUFNLE9BQU8sa0JBQWtCO0lBcUU3QixZQUFvQixFQUFjLEVBQ3hCLHFCQUE0QztRQURsQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ3hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFsRXRELHdFQUF3RTtRQUN2RCx5QkFBb0IsR0FBdUM7WUFDMUUsR0FBRyxFQUFFO2dCQUNILEdBQUcsRUFBRSxPQUFPO2dCQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDO2FBQ3ZFO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEdBQUcsRUFBRSxhQUFhO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDO2FBQzdFO1lBQ0QsY0FBYyxFQUFFO2dCQUNkLEdBQUcsRUFBRSxhQUFhO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDO2FBQ2xGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxjQUFjO2dCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLGNBQWMs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QU07Z0JBQ0wsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUVGO0lBQ0gsQ0FBQztJQUdELFdBQVc7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzthQUNuQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7b0ZBeEdVLGtCQUFrQjt1REFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FIOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCO2lHQUdVLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgbmcyLWpzb24tZWRpdG9yLlxuICogQ29weXJpZ2h0IChDKSAyMDE2IENFUk4uXG4gKlxuICogbmcyLWpzb24tZWRpdG9yIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBuZzItanNvbi1lZGl0b3IgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0XG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIG5nMi1qc29uLWVkaXRvcjsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBJbmMuLFxuICogNTkgVGVtcGxlIFBsYWNlLCBTdWl0ZSAzMzAsIEJvc3RvbiwgTUEgMDIxMTEtMTMwNywgVVNBLlxuICogSW4gYXBwbHlpbmcgdGhpcyBsaWNlbnNlLCBDRVJOIGRvZXMgbm90XG4gKiB3YWl2ZSB0aGUgcHJpdmlsZWdlcyBhbmQgaW1tdW5pdGllcyBncmFudGVkIHRvIGl0IGJ5IHZpcnR1ZSBvZiBpdHMgc3RhdHVzXG4gKiBhcyBhbiBJbnRlcmdvdmVybm1lbnRhbCBPcmdhbml6YXRpb24gb3Igc3VibWl0IGl0c2VsZiB0byBhbnkganVyaXNkaWN0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb3VzZXRyYXBJbnN0YW5jZSxcbk1vdXNldHJhcCB9IGZyb20gJ21vdXNldHJhcCc7XG5cbmltcG9ydCB7IFNob3J0Y3V0QWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IFNob3J0Y3V0LCBDdXN0b21TaG9ydGN1dEtleXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Nob3J0Y3V0c10nXG59KVxuZXhwb3J0IGNsYXNzIFNob3J0Y3V0c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gY3VzdG9tIHNob3J0Y3V0IGtleXNcbiAgQElucHV0KCkgc2hvcnRjdXRzOiBDdXN0b21TaG9ydGN1dEtleXM7XG5cbiAgLy8gYWN0aW9ucyB3aXRoIGRlZmF1bHQgc2hvcnRjdXQga2V5cywgdXBkYXRlIHdpdGggdGhlIGN1c3RvbSBrZXlzIGxhdGVyXG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uTmFtZVRvU2hvcnRjdXQ6IHsgW2FjdGlvbk5hbWU6IHN0cmluZ106IFNob3J0Y3V0IH0gPSB7XG4gICAgYWRkOiB7XG4gICAgICBrZXk6ICdhbHQrYScsXG4gICAgICBhY3Rpb246IHRoaXMuc2hvcnRjdXRBY3Rpb25TZXJ2aWNlLmdlbmVyYXRlU2hvcnRjdXRBY3Rpb24oJ2FkZEFjdGlvbicpXG4gICAgfSxcbiAgICBhZGRUb1Jvb3Q6IHtcbiAgICAgIGtleTogJ21vZCtzaGlmdCthJyxcbiAgICAgIGFjdGlvbjogdGhpcy5zaG9ydGN1dEFjdGlvblNlcnZpY2UuZ2VuZXJhdGVTaG9ydGN1dEFjdGlvbignYWRkVG9Sb290QWN0aW9uJylcbiAgICB9LFxuICAgIGFkZEJlbG93VG9Sb290OiB7XG4gICAgICBrZXk6ICdtb2Qrc2hpZnQrYicsXG4gICAgICBhY3Rpb246IHRoaXMuc2hvcnRjdXRBY3Rpb25TZXJ2aWNlLmdlbmVyYXRlU2hvcnRjdXRBY3Rpb24oJ2FkZEJlbG93VG9Sb290QWN0aW9uJylcbiAgICB9LFxuICAgIG1vdmVVcDoge1xuICAgICAga2V5OiAnbW9kK3NoaWZ0K3VwJyxcbiAgICAgIGFjdGlvbjogdGhpcy5zaG9ydGN1dEFjdGlvblNlcnZpY2UuZ2VuZXJhdGVTaG9ydGN1dEFjdGlvbignbW92ZVVwQWN0aW9uJylcbiAgICB9LFxuICAgIG1vdmVEb3duOiB7XG4gICAgICBrZXk6ICdtb2Qrc2hpZnQrZG93bicsXG4gICAgICBhY3Rpb246IHRoaXMuc2hvcnRjdXRBY3Rpb25TZXJ2aWNlLmdlbmVyYXRlU2hvcnRjdXRBY3Rpb24oJ21vdmVEb3duQWN0aW9uJylcbiAgICB9LFxuICAgIG1vdmVVcFJvb3Q6IHtcbiAgICAgIGtleTogJ21vZCthbHQrdXAnLFxuICAgICAgYWN0aW9uOiB0aGlzLnNob3J0Y3V0QWN0aW9uU2VydmljZS5nZW5lcmF0ZVNob3J0Y3V0QWN0aW9uKCdtb3ZlVXBSb290QWN0aW9uJylcbiAgICB9LFxuICAgIG1vdmVEb3duUm9vdDoge1xuICAgICAga2V5OiAnbW9kK2FsdCtkb3duJyxcbiAgICAgIGFjdGlvbjogdGhpcy5zaG9ydGN1dEFjdGlvblNlcnZpY2UuZ2VuZXJhdGVTaG9ydGN1dEFjdGlvbignbW92ZURvd25Sb290QWN0aW9uJylcbiAgICB9LFxuICAgIGRlbGV0ZToge1xuICAgICAga2V5OiAnbW9kK2JhY2tzcGFjZScsXG4gICAgICBhY3Rpb246IHRoaXMuc2hvcnRjdXRBY3Rpb25TZXJ2aWNlLmdlbmVyYXRlU2hvcnRjdXRBY3Rpb24oJ2RlbGV0ZUFjdGlvbicpXG4gICAgfSxcbiAgICBuYXZpZ2F0ZVVwOiB7XG4gICAgICBrZXk6ICdtb2QrdXAnLFxuICAgICAgYWN0aW9uOiB0aGlzLnNob3J0Y3V0QWN0aW9uU2VydmljZS5nZW5lcmF0ZVNob3J0Y3V0QWN0aW9uKCduYXZpZ2F0ZVVwQWN0aW9uJylcbiAgICB9LFxuICAgIG5hdmlnYXRlRG93bjoge1xuICAgICAga2V5OiAnbW9kK2Rvd24nLFxuICAgICAgYWN0aW9uOiB0aGlzLnNob3J0Y3V0QWN0aW9uU2VydmljZS5nZW5lcmF0ZVNob3J0Y3V0QWN0aW9uKCduYXZpZ2F0ZURvd25BY3Rpb24nKVxuICAgIH0sXG4gICAgbmF2aWdhdGVMZWZ0OiB7XG4gICAgICBrZXk6ICdtb2QrbGVmdCcsXG4gICAgICBhY3Rpb246IHRoaXMuc2hvcnRjdXRBY3Rpb25TZXJ2aWNlLmdlbmVyYXRlU2hvcnRjdXRBY3Rpb24oJ25hdmlnYXRlTGVmdEFjdGlvbicpXG4gICAgfSxcbiAgICBuYXZpZ2F0ZVJpZ2h0OiB7XG4gICAgICBrZXk6ICdtb2QrcmlnaHQnLFxuICAgICAgYWN0aW9uOiB0aGlzLnNob3J0Y3V0QWN0aW9uU2VydmljZS5nZW5lcmF0ZVNob3J0Y3V0QWN0aW9uKCduYXZpZ2F0ZVJpZ2h0QWN0aW9uJylcbiAgICB9LFxuICAgIGNvcHk6IHtcbiAgICAgIGtleTogJ2FsdCtjJyxcbiAgICAgIGFjdGlvbjogdGhpcy5zaG9ydGN1dEFjdGlvblNlcnZpY2UuZ2VuZXJhdGVTaG9ydGN1dEFjdGlvbignY29weUFjdGlvbicpXG4gICAgfSxcbiAgICBjb3B5RnJvbVJvb3Q6IHtcbiAgICAgIGtleTogJ21vZCthbHQrcicsXG4gICAgICBhY3Rpb246IHRoaXMuc2hvcnRjdXRBY3Rpb25TZXJ2aWNlLmdlbmVyYXRlU2hvcnRjdXRBY3Rpb24oJ2NvcHlGcm9tUm9vdEFjdGlvbicpXG4gICAgfSxcbiAgICB1bmRvOiB7XG4gICAgICBrZXk6ICdtb2QrYWx0K3onLFxuICAgICAgYWN0aW9uOiB0aGlzLnNob3J0Y3V0QWN0aW9uU2VydmljZS5nZW5lcmF0ZVNob3J0Y3V0QWN0aW9uKCd1bmRvQWN0aW9uJylcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgbW91c2V0cmFwOiBNb3VzZXRyYXBJbnN0YW5jZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2hvcnRjdXRBY3Rpb25TZXJ2aWNlOiBTaG9ydGN1dEFjdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLm1vdXNldHJhcCA9IG5ldyBNb3VzZXRyYXAodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBjdXN0b21TaG9ydGN1dEtleXNDaGFuZ2UgPSBjaGFuZ2VzWydzaG9ydGN1dHMnXTtcbiAgICBpZiAoY3VzdG9tU2hvcnRjdXRLZXlzQ2hhbmdlKSB7XG4gICAgICBjb25zdCBhY3Rpb25OYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aW9uTmFtZVRvU2hvcnRjdXQpO1xuICAgICAgLy8gaWYgY3VzdG9tIHNob3J0Y3V0IGtleXMgYXJlIHNldFxuICAgICAgaWYgKHRoaXMuc2hvcnRjdXRzKSB7XG4gICAgICAgIGFjdGlvbk5hbWVzLmZvckVhY2goYWN0aW9uTmFtZSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSB0aGlzLmFjdGlvbk5hbWVUb1Nob3J0Y3V0W2FjdGlvbk5hbWVdO1xuICAgICAgICAgIGlmICh0aGlzLnNob3J0Y3V0c1thY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgLy8gb3ZlcnJpZGUgc2hvcnRjdXQga2V5XG4gICAgICAgICAgICBzaG9ydGN1dC5rZXkgPSB0aGlzLnNob3J0Y3V0c1thY3Rpb25OYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tb3VzZXRyYXAuYmluZChzaG9ydGN1dC5rZXksIHNob3J0Y3V0LmFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uTmFtZXMuZm9yRWFjaChhY3Rpb25OYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBzaG9ydGN1dCA9IHRoaXMuYWN0aW9uTmFtZVRvU2hvcnRjdXRbYWN0aW9uTmFtZV07XG4gICAgICAgICAgdGhpcy5tb3VzZXRyYXAuYmluZChzaG9ydGN1dC5rZXksIHNob3J0Y3V0LmFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFjdGlvbk5hbWVUb1Nob3J0Y3V0KVxuICAgICAgLmZvckVhY2goYWN0aW9uTmFtZSA9PiB7XG4gICAgICAgIHRoaXMubW91c2V0cmFwLnVuYmluZCh0aGlzLmFjdGlvbk5hbWVUb1Nob3J0Y3V0W2FjdGlvbk5hbWVdLmtleSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19