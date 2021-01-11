import { IDiffResult } from 'diff';
import { TextDiffService } from '../shared/services';
import * as i0 from "@angular/core";
export declare class TextDiffComponent {
    textDiffService: TextDiffService;
    newText: string;
    currentText: string;
    constructor(textDiffService: TextDiffService);
    get diffs(): Array<IDiffResult>;
    static ɵfac: i0.ɵɵFactoryDef<TextDiffComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TextDiffComponent, "text-diff", never, { "newText": "newText"; "currentText": "currentText"; }, {}, never, never>;
}
//# sourceMappingURL=text-diff.component.d.ts.map