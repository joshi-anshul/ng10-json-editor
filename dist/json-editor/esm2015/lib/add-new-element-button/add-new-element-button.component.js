import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../shared/services";
export class AddNewElementButtonComponent {
    constructor(domUtilService, emptyValueService, jsonStoreService, pathUtilService, keyStoreService) {
        this.domUtilService = domUtilService;
        this.emptyValueService = emptyValueService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.keyStoreService = keyStoreService;
    }
    addNewElement() {
        const itemSchema = this.schema.items;
        const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        const values = this.jsonStoreService.getIn(this.path);
        const insertIndex = values ? values.size : 0;
        const insertPath = this.path.concat(insertIndex);
        this.jsonStoreService.addIn(insertPath, emptyValue);
        // focus on the new added element
        const insertPathString = this.pathUtilService.toPathString(insertPath);
        setTimeout(() => {
            this.domUtilService.focusAndSelectFirstEditableChildById(insertPathString);
        });
    }
}
AddNewElementButtonComponent.ɵfac = function AddNewElementButtonComponent_Factory(t) { return new (t || AddNewElementButtonComponent)(i0.ɵɵdirectiveInject(i1.DomUtilService), i0.ɵɵdirectiveInject(i1.EmptyValueService), i0.ɵɵdirectiveInject(i1.JsonStoreService), i0.ɵɵdirectiveInject(i1.PathUtilService), i0.ɵɵdirectiveInject(i1.KeysStoreService)); };
AddNewElementButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddNewElementButtonComponent, selectors: [["add-new-element-button"]], inputs: { path: "path", schema: "schema" }, decls: 3, vars: 2, consts: [[1, "button-container"], ["type", "button", 1, "btn-new-field", 3, "click"]], template: function AddNewElementButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function AddNewElementButtonComponent_Template_button_click_1_listener() { return ctx.addNewElement(); });
        i0.ɵɵtext(2, "Add new");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.schema.disabled);
    } }, styles: ["div.button-container[_ngcontent-%COMP%]{display:inline-block;width:100%}.btn-new-field[_ngcontent-%COMP%]{background:transparent;border:0;bottom:-5px;font-size:13px;font-weight:700;left:-5px;opacity:.5;padding:0;text-shadow:0 1px 0 #fff}.btn-new-field[_ngcontent-%COMP%]:hover{color:green!important;opacity:.6}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddNewElementButtonComponent, [{
        type: Component,
        args: [{
                selector: 'add-new-element-button',
                styleUrls: [
                    './add-new-element-button.component.scss'
                ],
                templateUrl: './add-new-element-button.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DomUtilService }, { type: i1.EmptyValueService }, { type: i1.JsonStoreService }, { type: i1.PathUtilService }, { type: i1.KeysStoreService }]; }, { path: [{
            type: Input
        }], schema: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW5ldy1lbGVtZW50LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvYWRkLW5ldy1lbGVtZW50LWJ1dHRvbi9hZGQtbmV3LWVsZW1lbnQtYnV0dG9uLmNvbXBvbmVudC50cyIsImxpYi9hZGQtbmV3LWVsZW1lbnQtYnV0dG9uL2FkZC1uZXctZWxlbWVudC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWUxRSxNQUFNLE9BQU8sNEJBQTRCO0lBS3ZDLFlBQW1CLGNBQThCLEVBQ3hDLGlCQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsZUFBaUM7UUFKdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWtCO0lBQUksQ0FBQztJQUUvQyxhQUFhO1FBQ1gsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sTUFBTSxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELGlDQUFpQztRQUNqQyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLG9DQUFvQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3R0F2QlUsNEJBQTRCO2lFQUE1Qiw0QkFBNEI7UUNmekMsOEJBQ0U7UUFBQSxpQ0FBc0U7UUFBMUIseUdBQVMsbUJBQWUsSUFBQztRQUFDLHVCQUFPO1FBQUEsaUJBQVM7UUFDeEYsaUJBQU07O1FBRkQsK0NBQWtDOztrRERlMUIsNEJBQTRCO2NBUnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUU7b0JBQ1QseUNBQXlDO2lCQUMxQztnQkFDRCxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs2TEFHVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cblxuaW1wb3J0IHsgRG9tVXRpbFNlcnZpY2UsIEVtcHR5VmFsdWVTZXJ2aWNlLCBKc29uU3RvcmVTZXJ2aWNlLCBQYXRoVXRpbFNlcnZpY2UsIEtleXNTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRkLW5ldy1lbGVtZW50LWJ1dHRvbicsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL2FkZC1uZXctZWxlbWVudC1idXR0b24uY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtbmV3LWVsZW1lbnQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQWRkTmV3RWxlbWVudEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgcGF0aDogQXJyYXk8YW55PjtcbiAgQElucHV0KCkgc2NoZW1hOiBKU09OU2NoZW1hO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkb21VdGlsU2VydmljZTogRG9tVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIGVtcHR5VmFsdWVTZXJ2aWNlOiBFbXB0eVZhbHVlU2VydmljZSxcbiAgICBwdWJsaWMganNvblN0b3JlU2VydmljZTogSnNvblN0b3JlU2VydmljZSxcbiAgICBwdWJsaWMgcGF0aFV0aWxTZXJ2aWNlOiBQYXRoVXRpbFNlcnZpY2UsXG4gICAgcHVibGljIGtleVN0b3JlU2VydmljZTogS2V5c1N0b3JlU2VydmljZSkgeyB9XG5cbiAgYWRkTmV3RWxlbWVudCgpIHtcbiAgICBjb25zdCBpdGVtU2NoZW1hID0gdGhpcy5zY2hlbWEuaXRlbXM7XG4gICAgY29uc3QgZW1wdHlWYWx1ZSA9IHRoaXMuZW1wdHlWYWx1ZVNlcnZpY2UuZ2VuZXJhdGVFbXB0eVZhbHVlKGl0ZW1TY2hlbWEpO1xuICAgIGNvbnN0IHZhbHVlczogTGlzdDxhbnk+ID0gdGhpcy5qc29uU3RvcmVTZXJ2aWNlLmdldEluKHRoaXMucGF0aCk7XG4gICAgY29uc3QgaW5zZXJ0SW5kZXggPSB2YWx1ZXMgPyB2YWx1ZXMuc2l6ZSA6IDA7XG4gICAgY29uc3QgaW5zZXJ0UGF0aCA9IHRoaXMucGF0aC5jb25jYXQoaW5zZXJ0SW5kZXgpO1xuICAgIHRoaXMuanNvblN0b3JlU2VydmljZS5hZGRJbihpbnNlcnRQYXRoLCBlbXB0eVZhbHVlKTtcbiAgICAvLyBmb2N1cyBvbiB0aGUgbmV3IGFkZGVkIGVsZW1lbnRcbiAgICBjb25zdCBpbnNlcnRQYXRoU3RyaW5nID0gdGhpcy5wYXRoVXRpbFNlcnZpY2UudG9QYXRoU3RyaW5nKGluc2VydFBhdGgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kb21VdGlsU2VydmljZS5mb2N1c0FuZFNlbGVjdEZpcnN0RWRpdGFibGVDaGlsZEJ5SWQoaW5zZXJ0UGF0aFN0cmluZyk7XG4gICAgfSk7XG4gIH1cblxufVxuIiwiPGRpdiBbY2xhc3MuZGlzYWJsZWRdPVwic2NoZW1hLmRpc2FibGVkXCIgIGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1uZXctZmllbGRcIiAoY2xpY2spPVwiYWRkTmV3RWxlbWVudCgpXCI+QWRkIG5ldzwvYnV0dG9uPlxuPC9kaXY+Il19