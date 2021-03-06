import * as i0 from "@angular/core";
export declare class PathUtilService {
    readonly separator = "/";
    /**
     *
     * @param path - Element's path
     * @param root - Find nearest or root parent array. True for root and false for nearest array parent
     * @returns - Returns the path to the array parent
     */
    getNearestOrRootArrayParentInPath(path: Array<any>, root: boolean): Array<any>;
    getElementIndexInForwardOrReversePath(path: Array<any>, directPathSearch: boolean): number;
    /**
     *
     * @param path - The path of an element
     * @param directPathSearch - Flag for define direct or reverse searching in path. Set to true for searching in direct
     * or false for searching in reverse path
     * @returns - Returns found index in path or -1 if not found
     */
    findIndexFromPath(path: Array<any>, directPathSearch: boolean): number;
    /**
     * Converts path array `/` separated path string.
     * Example: from ['foo', 'bar', 0] to '/foo/bar/0'
     */
    toPathString(path: Array<any>): string;
    /**
     * Converts `/` separated path string to path array.
     * Example from '/foo/bar/0' to ['foo', 'bar', 0]
     */
    toPathArray(pathString: string): Array<any>;
    static ɵfac: i0.ɵɵFactoryDef<PathUtilService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PathUtilService>;
}
//# sourceMappingURL=path-util.service.d.ts.map