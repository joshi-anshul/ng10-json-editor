import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ContentModelDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.contentModelChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['contentModel']) {
            this.refresh();
        }
    }
    onBlur() {
        this.emitContentModelChange();
    }
    onKeypress(event) {
        if (event.key === 'Enter') {
            this.emitContentModelChange();
        }
    }
    emitContentModelChange() {
        const value = this.elementRef.nativeElement.innerText;
        this.contentModelChange.emit(value);
    }
    refresh() {
        this.elementRef.nativeElement.innerText = this.contentModel;
    }
}
ContentModelDirective.ɵfac = function ContentModelDirective_Factory(t) { return new (t || ContentModelDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ContentModelDirective.ɵdir = i0.ɵɵdefineDirective({ type: ContentModelDirective, selectors: [["", "contentModel", ""]], hostBindings: function ContentModelDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("blur", function ContentModelDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keypress", function ContentModelDirective_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); });
    } }, inputs: { contentModel: "contentModel" }, outputs: { contentModelChange: "contentModelChange" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContentModelDirective, [{
        type: Directive,
        args: [{
                selector: '[contentModel]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { contentModel: [{
            type: Input
        }], contentModelChange: [{
            type: Output
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], onKeypress: [{
            type: HostListener,
            args: ['keypress', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1tb2RlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvaHRtbC9BbnNodWwtSm9zaGkvQW5ndWxhci9HaXRIdWxmdEluYy9qc29uLWVkaXRvci9wcm9qZWN0cy9qc29uLWVkaXRvci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2RpcmVjdGl2ZXMvY29udGVudC1tb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7O0FBS3ZCLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZoQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRVosQ0FBQztJQUUvQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUdELE1BQU07UUFDSixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBR0QsVUFBVSxDQUFDLEtBQW9CO1FBQzdCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDOUQsQ0FBQzs7MEZBakNVLHFCQUFxQjswREFBckIscUJBQXFCO2dHQUFyQixZQUFRLDZGQUFSLHNCQUFrQjs7a0RBQWxCLHFCQUFxQjtjQUhqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs2REFHVSxZQUFZO2tCQUFwQixLQUFLO1lBRUksa0JBQWtCO2tCQUEzQixNQUFNO1lBV1AsTUFBTTtrQkFETCxZQUFZO21CQUFDLE1BQU07WUFNcEIsVUFBVTtrQkFEVCxZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NvbnRlbnRNb2RlbF0nXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRNb2RlbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY29udGVudE1vZGVsOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNvbnRlbnRNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydjb250ZW50TW9kZWwnXSkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmVtaXRDb250ZW50TW9kZWxDaGFuZ2UoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXByZXNzJywgWyckZXZlbnQnXSlcbiAgb25LZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuZW1pdENvbnRlbnRNb2RlbENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdENvbnRlbnRNb2RlbENoYW5nZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcbiAgICB0aGlzLmNvbnRlbnRNb2RlbENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmNvbnRlbnRNb2RlbDtcbiAgfVxufVxuIl19