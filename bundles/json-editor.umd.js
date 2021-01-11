(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('immutable'), require('rxjs/operators'), require('rxjs'), require('rxjs/ReplaySubject'), require('@angular/common/http'), require('lodash'), require('ajv'), require('ajv-errors'), require('katex'), require('diff'), require('@angular/common'), require('mousetrap'), require('ngx-bootstrap/modal'), require('ngx-bootstrap/dropdown'), require('@angular/forms'), require('ngx-bootstrap/tooltip'), require('ngx-bootstrap/tabs'), require('@angular/platform-browser'), require('ngx-bootstrap/pagination'), require('bi-directional-map/dist'), require('ngx-bootstrap/typeahead'), require('ngx-bootstrap/popover'), require('ngx-bootstrap/collapse'), require('rxjs/add/operator/catch')) :
    typeof define === 'function' && define.amd ? define('json-editor', ['exports', '@angular/core', 'immutable', 'rxjs/operators', 'rxjs', 'rxjs/ReplaySubject', '@angular/common/http', 'lodash', 'ajv', 'ajv-errors', 'katex', 'diff', '@angular/common', 'mousetrap', 'ngx-bootstrap/modal', 'ngx-bootstrap/dropdown', '@angular/forms', 'ngx-bootstrap/tooltip', 'ngx-bootstrap/tabs', '@angular/platform-browser', 'ngx-bootstrap/pagination', 'bi-directional-map/dist', 'ngx-bootstrap/typeahead', 'ngx-bootstrap/popover', 'ngx-bootstrap/collapse', 'rxjs/add/operator/catch'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['json-editor'] = {}, global.ng.core, global.immutable, global.rxjs.operators, global.rxjs, global.rxjs.ReplaySubject, global.ng.common.http, global._, global.Ajv, global.enableCustomErrorMessages, global.katex, global.diff, global.ng.common, global.mousetrap, global.i21, global.i19, global.ng.forms, global.i16, global.i22, global.ng.platformBrowser, global.i20, global.dist, global.i23, global.i18, global.i17));
}(this, (function (exports, i0, immutable, operators, rxjs, ReplaySubject, i1, _, Ajv, enableCustomErrorMessages, katex, diff, i24, mousetrap, i21, i19, i25, i16, i22, i1$1, i20, dist, i23, i18, i17) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) { return e; } else {
            var n = Object.create(null);
            if (e) {
                Object.keys(e).forEach(function (k) {
                    if (k !== 'default') {
                        var d = Object.getOwnPropertyDescriptor(e, k);
                        Object.defineProperty(n, k, d.get ? d : {
                            enumerable: true,
                            get: function () {
                                return e[k];
                            }
                        });
                    }
                });
            }
            n['default'] = e;
            return Object.freeze(n);
        }
    }

    var ___namespace = /*#__PURE__*/_interopNamespace(_);
    var Ajv__namespace = /*#__PURE__*/_interopNamespace(Ajv);
    var enableCustomErrorMessages__namespace = /*#__PURE__*/_interopNamespace(enableCustomErrorMessages);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var AbstractSubscriberComponent = /** @class */ (function () {
        function AbstractSubscriberComponent() {
            this.isDestroyed = new rxjs.Subject();
        }
        AbstractSubscriberComponent.prototype.ngOnDestroy = function () {
            this.isDestroyed.next();
            this.isDestroyed.complete();
        };
        return AbstractSubscriberComponent;
    }());
    AbstractSubscriberComponent.ɵfac = function AbstractSubscriberComponent_Factory(t) { return new (t || AbstractSubscriberComponent)(); };
    AbstractSubscriberComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AbstractSubscriberComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function AbstractSubscriberComponent_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AbstractSubscriberComponent, [{
                type: i0.Component,
                args: [{
                        template: ''
                    }]
            }], null, null);
    })();

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
    var AppGlobalsService = /** @class */ (function () {
        function AppGlobalsService() {
            this.adminMode$ = new ReplaySubject.ReplaySubject(1);
            this.activeTabName = '';
            this.tabNameToFirstTopLevelElement = {};
            this.templates = {};
            this._adminMode = false;
        }
        Object.defineProperty(AppGlobalsService.prototype, "adminMode", {
            get: function () {
                return this._adminMode;
            },
            set: function (adminMode) {
                this._adminMode = adminMode;
                this.adminMode$.next(this._adminMode);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppGlobalsService.prototype, "firstElementPathForCurrentTab", {
            get: function () {
                return this.tabNameToFirstTopLevelElement[this.activeTabName];
            },
            enumerable: false,
            configurable: true
        });
        return AppGlobalsService;
    }());
    AppGlobalsService.ɵfac = function AppGlobalsService_Factory(t) { return new (t || AppGlobalsService)(); };
    AppGlobalsService.ɵprov = i0.ɵɵdefineInjectable({ token: AppGlobalsService, factory: AppGlobalsService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AppGlobalsService, [{
                type: i0.Injectable
            }], null, null);
    })();

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
    var PathUtilService = /** @class */ (function () {
        function PathUtilService() {
            this.separator = '/';
        }
        /**
         *
         * @param path - Element's path
         * @param root - Find nearest or root parent array. True for root and false for nearest array parent
         * @returns - Returns the path to the array parent
         */
        PathUtilService.prototype.getNearestOrRootArrayParentInPath = function (path, root) {
            var _path = [];
            var pathLength = path.length;
            for (var index = 0; index < pathLength; index++) {
                _path = root ? path.slice(0, index + 1) : path.slice(0, path.length - index);
                if (typeof _path[_path.length - 1] === 'number') {
                    // transform ['arrayParent',0] => ['arrayParent']
                    _path.pop();
                    break;
                }
            }
            return _path;
        };
        PathUtilService.prototype.getElementIndexInForwardOrReversePath = function (path, directPathSearch) {
            return this.findIndexFromPath(path.slice(), directPathSearch);
        };
        /**
         *
         * @param path - The path of an element
         * @param directPathSearch - Flag for define direct or reverse searching in path. Set to true for searching in direct
         * or false for searching in reverse path
         * @returns - Returns found index in path or -1 if not found
         */
        PathUtilService.prototype.findIndexFromPath = function (path, directPathSearch) {
            path = directPathSearch ? path : path.reverse();
            for (var index in path) {
                if (!isNaN(path[index])) {
                    return path[index];
                }
            }
            return -1;
        };
        /**
         * Converts path array `/` separated path string.
         * Example: from ['foo', 'bar', 0] to '/foo/bar/0'
         */
        PathUtilService.prototype.toPathString = function (path) {
            if (path.length === 0) {
                return '';
            }
            else {
                return "" + this.separator + path.join(this.separator);
            }
        };
        /**
         * Converts `/` separated path string to path array.
         * Example from '/foo/bar/0' to ['foo', 'bar', 0]
         */
        PathUtilService.prototype.toPathArray = function (pathString) {
            return pathString.split(this.separator)
                .slice(1) // remove the empty
                .map(function (key) { return isNaN(parseInt(key, 10)) ? key : parseInt(key, 10); });
        };
        return PathUtilService;
    }());
    PathUtilService.ɵfac = function PathUtilService_Factory(t) { return new (t || PathUtilService)(); };
    PathUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: PathUtilService, factory: PathUtilService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PathUtilService, [{
                type: i0.Injectable
            }], null, null);
    })();

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
    var RemoteAutocompletionService = /** @class */ (function () {
        function RemoteAutocompletionService(http, pathUtilService) {
            this.http = http;
            this.pathUtilService = pathUtilService;
        }
        RemoteAutocompletionService.prototype.getAutocompletionResults = function (options, token) {
            var _this = this;
            return this.http.get("" + options.url + token)
                .pipe(operators.map(function (res) { return _this.mapResponseToResults(res, options.path); }));
        };
        RemoteAutocompletionService.prototype.mapResponseToResults = function (response, resultsPath) {
            var pathElements = this.pathUtilService.toPathArray(resultsPath);
            var results = response.json();
            pathElements.forEach(function (pathElement) {
                results = results[pathElement];
            });
            return results;
        };
        return RemoteAutocompletionService;
    }());
    RemoteAutocompletionService.ɵfac = function RemoteAutocompletionService_Factory(t) { return new (t || RemoteAutocompletionService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(PathUtilService)); };
    RemoteAutocompletionService.ɵprov = i0.ɵɵdefineInjectable({ token: RemoteAutocompletionService, factory: RemoteAutocompletionService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RemoteAutocompletionService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1.HttpClient }, { type: PathUtilService }]; }, null);
    })();

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
    var ComponentTypeService = /** @class */ (function () {
        function ComponentTypeService() {
        }
        /**
         * It returns the editor specific type of given schema
         * In other words, which component to use for given schema.
         *
         * Possible values:
         *  - string, number, boolean, object, enum
         *  - primitive-list, table-list, complex-list
         *  - disabled, autocomplete
         *
         * @param {Object} schema
         * @return {string}
         */
        ComponentTypeService.prototype.getComponentType = function (schema) {
            if (!schema) {
                throw new Error('schema is undefined');
            }
            var schemaType = schema.type;
            if (!schemaType) {
                if (Object.keys(schema).length === 0) { // if shema === {} (empty object)
                    return 'raw';
                }
            }
            else if (schemaType === 'string') {
                if (schema.autocompletionConfig) {
                    return 'autocomplete';
                }
                else if (schema.enum) {
                    return 'enum';
                }
            }
            else if (schemaType === 'object') {
                if (schema.properties['$ref']) {
                    return 'ref';
                }
            }
            else if (schemaType === 'array') {
                var itemSchema_1 = schema.items;
                if (itemSchema_1.type === 'object' && !itemSchema_1.properties['$ref']) {
                    // complex-array: if it's an object array
                    // if its elements have at least a property with object (not ref-field)
                    // or a non-primitive array.
                    var isComplexArray = Object.keys(itemSchema_1.properties)
                        .some(function (prop) {
                        var propSchema = itemSchema_1.properties[prop];
                        return (propSchema.type === 'object' && !propSchema.properties['$ref']) ||
                            (propSchema.type === 'array' && (propSchema.items.type === 'object' || propSchema.items.type === 'array'));
                    });
                    if (isComplexArray) {
                        return 'complex-list';
                    }
                    else {
                        return 'table-list';
                    }
                }
                else {
                    // if schema.items.type is not object!
                    return 'primitive-list';
                }
            }
            // execution reaches here if schemaType is either
            // 'number', 'integer', 'string' or something else which is currently not supported
            return schemaType;
        };
        return ComponentTypeService;
    }());
    ComponentTypeService.ɵfac = function ComponentTypeService_Factory(t) { return new (t || ComponentTypeService)(); };
    ComponentTypeService.ɵprov = i0.ɵɵdefineInjectable({ token: ComponentTypeService, factory: ComponentTypeService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ComponentTypeService, [{
                type: i0.Injectable
            }], null, null);
    })();

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
    var TabsUtilService = /** @class */ (function () {
        function TabsUtilService(pathUtilService) {
            this.pathUtilService = pathUtilService;
            this.activeTabName$ = new rxjs.ReplaySubject(1);
        }
        TabsUtilService.prototype.getTabNames = function (tabsConfig) {
            var tabNames = tabsConfig.tabs.map(function (tab) { return tab.name; });
            // insert default tab name at the beginning
            return [tabsConfig.defaultTabName]
                .concat(tabNames);
        };
        TabsUtilService.prototype.getSchemaKeyToTabName = function (tabsConfig, schema) {
            if (!this.schemaKeyToTabName) {
                // set tab.name for configured keys
                var keyToTabName_1 = tabsConfig.tabs
                    .map(function (tab) {
                    var keysWithTabName = {};
                    tab.properties.forEach(function (key) {
                        keysWithTabName[key] = tab.name;
                    });
                    return keysWithTabName;
                }).reduce(function (pre, cur) { return Object.assign(pre, cur); });
                // set defaultTabName for all other keys in the schema
                Object.keys(schema.properties)
                    .filter(function (key) { return !keyToTabName_1[key]; })
                    .forEach(function (key) {
                    keyToTabName_1[key] = tabsConfig.defaultTabName;
                });
                this.schemaKeyToTabName = keyToTabName_1;
            }
            return this.schemaKeyToTabName;
        };
        // TODO: maybe this could be a decorator
        TabsUtilService.prototype.selectTabIfNeeded = function (path) {
            if (this.schemaKeyToTabName && path !== '') {
                var tabName = this.schemaKeyToTabName[this.pathUtilService.toPathArray(path)[0]];
                this.activeTabName$.next(tabName);
            }
        };
        return TabsUtilService;
    }());
    TabsUtilService.ɵfac = function TabsUtilService_Factory(t) { return new (t || TabsUtilService)(i0.ɵɵinject(PathUtilService)); };
    TabsUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: TabsUtilService, factory: TabsUtilService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TabsUtilService, [{
                type: i0.Injectable
            }], function () { return [{ type: PathUtilService }]; }, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var ListPageChangerService = /** @class */ (function () {
        function ListPageChangerService(pathUtilService) {
            this.pathUtilService = pathUtilService;
            this.pageChange$Map = {};
            this.itemsPerPageMap = {};
        }
        /**
         * Changes the page of the list so that requested item is visible on UI
         * It doesn't do anything if given path's parent is not paginated list.
         *
         * @param itemPath path to a list item
         */
        ListPageChangerService.prototype.changePage = function (fieldPath) {
            var fieldPathArray = this.pathUtilService.toPathArray(fieldPath);
            var listPathArray = this.pathUtilService.getNearestOrRootArrayParentInPath(fieldPathArray, true);
            var listPath = this.pathUtilService.toPathString(listPathArray);
            if (this.pageChange$Map[listPath]) {
                var itemIndex = fieldPathArray[listPathArray.length];
                var itemsPerPage = this.itemsPerPageMap[listPath];
                var page = Math.floor((itemIndex / itemsPerPage) + 1);
                this.pageChange$Map[listPath].next(page);
            }
        };
        ListPageChangerService.prototype.registerPaginatedList = function (listPath, itemsPerPage) {
            this.itemsPerPageMap[listPath] = itemsPerPage;
            this.pageChange$Map[listPath] = new rxjs.ReplaySubject(1);
            return this.pageChange$Map[listPath];
        };
        return ListPageChangerService;
    }());
    ListPageChangerService.ɵfac = function ListPageChangerService_Factory(t) { return new (t || ListPageChangerService)(i0.ɵɵinject(PathUtilService)); };
    ListPageChangerService.ɵprov = i0.ɵɵdefineInjectable({ token: ListPageChangerService, factory: ListPageChangerService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ListPageChangerService, [{
                type: i0.Injectable
            }], function () { return [{ type: PathUtilService }]; }, null);
    })();

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
    var DomUtilService = /** @class */ (function () {
        function DomUtilService(tabsUtilService, listPageChangerService) {
            this.tabsUtilService = tabsUtilService;
            this.listPageChangerService = listPageChangerService;
            this.editableSelector = '.value-container input, span[contenteditable=true], .switch-input, searchable-dropdown span.value';
            // highlight class is defined in json-editor.component.scss
            this.highlightClass = 'highlight';
        }
        DomUtilService.prototype.focusAndSelectFirstEditableChildById = function (id, highlight) {
            var _this = this;
            if (highlight === void 0) { highlight = false; }
            this.tabsUtilService.selectTabIfNeeded(id);
            this.listPageChangerService.changePage(id);
            setTimeout(function () {
                var el = document.getElementById(id);
                if (el) {
                    var firstEditable_1 = el.querySelector(_this.editableSelector);
                    if (firstEditable_1) {
                        if (firstEditable_1.classList.contains('hidden')) {
                            // has latex preview, click to disable to preview
                            firstEditable_1.nextElementSibling.click();
                            setTimeout(function () {
                                _this.focusAndSelectContent(firstEditable_1, highlight);
                            });
                        }
                        else {
                            _this.focusAndSelectContent(firstEditable_1, highlight);
                        }
                    }
                    else {
                        // if element doesn't have any input, open add-field-dropdown if it exists.
                        _this.openDropdown(el);
                    }
                }
            });
        };
        DomUtilService.prototype.focusAndSelectContent = function (el, highlight) {
            el.focus();
            this.selectAllContent(el);
            if (highlight) {
                el.classList.add(this.highlightClass);
                this.highlightedElement = el;
            }
        };
        DomUtilService.prototype.focusFirstInputChildByElement = function (el) {
            var firstInput = el.querySelector('input');
            if (firstInput) {
                firstInput.focus();
            }
        };
        DomUtilService.prototype.focusRightOrLeftParentCell = function (id, direction) {
            var el = document.getElementById(id);
            if (el && el.tabIndex) {
                var elementParentCell = el.parentElement;
                while (elementParentCell.nodeName !== 'TD') {
                    elementParentCell = elementParentCell.parentElement;
                }
                var nextSibling = direction > 0 ? elementParentCell.nextElementSibling : elementParentCell.previousElementSibling;
                while (nextSibling && nextSibling.nodeName === 'TD') {
                    var inputElement = nextSibling.querySelector("input[tabindex='1'], span[contenteditable=true][tabindex='1']");
                    if (inputElement) {
                        inputElement.focus();
                        this.selectAllContent(inputElement);
                        break;
                    }
                    nextSibling = direction > 0 ? nextSibling.nextElementSibling : nextSibling.previousElementSibling;
                }
            }
        };
        DomUtilService.prototype.blurFirstEditableChildById = function (id) {
            var el = document.getElementById(id);
            var firstEditable = el.querySelector(this.editableSelector);
            if (firstEditable) {
                firstEditable.blur();
            }
        };
        DomUtilService.prototype.clearHighlight = function () {
            if (this.highlightedElement) {
                this.highlightedElement.classList.remove(this.highlightClass);
                this.highlightedElement = undefined;
            }
        };
        DomUtilService.prototype.focusPatch = function (patch) {
            this.tabsUtilService.selectTabIfNeeded(patch.path);
            this.listPageChangerService.changePage(patch.path);
            setTimeout(function () {
                var el = document.getElementById(patch.path);
                var mergeButton = el.querySelector('.btn-merge');
                if (mergeButton) {
                    mergeButton.focus();
                    mergeButton.click();
                }
                else {
                    var patchActionsContainer = el.querySelector("." + patch.op + ".patch-actions-container");
                    if (patchActionsContainer) {
                        patchActionsContainer.focus();
                    }
                }
            });
        };
        DomUtilService.prototype.selectAllContent = function (el) {
            if (el instanceof HTMLInputElement) {
                el.select();
            }
            else {
                // select all content for contenteditable element.
                var range = document.createRange();
                range.selectNodeContents(el);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        };
        DomUtilService.prototype.openDropdown = function (el) {
            var dropdown = el.querySelector('div.btn-group');
            if (dropdown) {
                var dropDownButton = dropdown.querySelector('button');
                if (dropDownButton) {
                    dropDownButton.click();
                }
            }
        };
        return DomUtilService;
    }());
    DomUtilService.ɵfac = function DomUtilService_Factory(t) { return new (t || DomUtilService)(i0.ɵɵinject(TabsUtilService), i0.ɵɵinject(ListPageChangerService)); };
    DomUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: DomUtilService, factory: DomUtilService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DomUtilService, [{
                type: i0.Injectable
            }], function () { return [{ type: TabsUtilService }, { type: ListPageChangerService }]; }, null);
    })();

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
    var EmptyValueService = /** @class */ (function () {
        function EmptyValueService() {
        }
        EmptyValueService.prototype.generateEmptyValue = function (schema) {
            var emptyValue = this.generateEmptyValueRecursively(schema);
            if (typeof emptyValue === 'object') {
                return immutable.fromJS(emptyValue);
            }
            else {
                return emptyValue;
            }
        };
        EmptyValueService.prototype.generateEmptyValueRecursively = function (schema) {
            var _this = this;
            if (schema.default) {
                return schema.default;
            }
            if (schema.type === 'object') {
                var emptyObject_1 = {};
                Object.keys(schema.properties)
                    .filter(function (prop) {
                    var required = schema.required || [];
                    var alwaysShow = schema.alwaysShow || [];
                    return required.indexOf(prop) > -1 || alwaysShow.indexOf(prop) > -1;
                }).forEach(function (prop) {
                    var propSchema = schema.properties[prop];
                    emptyObject_1[prop] = _this.generateEmptyValueRecursively(propSchema);
                });
                return emptyObject_1;
            }
            if (schema.type === 'array') {
                var emptyArray = [];
                var arrayElementSchema = schema.items;
                if (schema.componentType !== 'complex-list') {
                    emptyArray.push(this.generateEmptyValueRecursively(arrayElementSchema));
                }
                return emptyArray;
            }
            return EmptyValueService.defaultValueLookup[schema.type];
        };
        return EmptyValueService;
    }());
    EmptyValueService.defaultValueLookup = {
        'string': '',
        'boolean': false
    };
    EmptyValueService.ɵfac = function EmptyValueService_Factory(t) { return new (t || EmptyValueService)(); };
    EmptyValueService.ɵprov = i0.ɵɵdefineInjectable({ token: EmptyValueService, factory: EmptyValueService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EmptyValueService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FindReplaceAllService = /** @class */ (function () {
        function FindReplaceAllService() {
        }
        // TODO: fix compiler errors when type of immutable `List<any> | Map<string, any>`
        /**
         * Does deep replace when it finds the occurance in an immutable List and Map
         * uses schema to skip disabled properties
         *
         * @param {List<any> | Map<string, any} immutable
         * @param {Object} schema
         * @param {string} find
         * @param {replace} replace
         * @param {boolean} matchWhole - looks for whole match to a string property of immutable
         * @param {Array<any> | Object} diffHtml - TODO: describe
         */
        FindReplaceAllService.prototype.findReplaceInImmutable = function (immutable$1, schema, find, replace, exact, diffHtml) {
            var _this = this;
            if (exact === void 0) { exact = false; }
            var immutableAsMutable = immutable$1.asMutable();
            var isList = immutable.List.isList(immutable$1);
            // create empty array or object for the immutable to store diff
            diffHtml = isList ? [] : {};
            immutableAsMutable.forEach(function (value, key) {
                var innerSchema = isList ? schema.items : schema.properties[key];
                // ignore disabled and ref fields
                if (innerSchema.disabled || innerSchema.hidden || key === '$ref') {
                    return;
                    // TODO: is `schema.type === 'string'` better?
                }
                else if (typeof value === 'string') {
                    // assign value to diff as initial, if nothing has changed it will remain same
                    var diff = value;
                    // create html diff for each possible change
                    var singleDiffHtml = "<strong style='color: green;'>" + replace + "</strong><del><em style='color: red;'>" + find + "</em></del>";
                    if (!exact) {
                        var regExp = new RegExp(find, 'g');
                        var replaced = value.replace(regExp, replace);
                        immutableAsMutable.set(key, replaced);
                        // create diff for multiple changes in value
                        diff = diff.replace(regExp, singleDiffHtml);
                    }
                    else if (value === find) {
                        immutableAsMutable.set(key, replace);
                        diff = singleDiffHtml;
                    }
                    diffHtml[key] = diff;
                    // TODO: is `schema.type === 'object' || schema.type === 'array'` better?
                }
                else if (immutable.List.isList(value) || immutable.Map.isMap(value)) {
                    // create empty array or object for the value in diffHtml
                    var result = _this.
                        findReplaceInImmutable(immutableAsMutable.get(key), innerSchema, find, replace, exact, diffHtml[key]);
                    diffHtml[key] = result.diffHtml;
                    immutableAsMutable.set(key, result.replaced);
                }
            });
            return { replaced: immutableAsMutable.asImmutable(), diffHtml: diffHtml };
        };
        return FindReplaceAllService;
    }());
    FindReplaceAllService.ɵfac = function FindReplaceAllService_Factory(t) { return new (t || FindReplaceAllService)(); };
    FindReplaceAllService.ɵprov = i0.ɵɵdefineInjectable({ token: FindReplaceAllService, factory: FindReplaceAllService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FindReplaceAllService, [{
                type: i0.Injectable
            }], null, null);
    })();

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
    var SizedStack = /** @class */ (function () {
        function SizedStack(size) {
            this.values = new Array();
            this.size = size;
        }
        SizedStack.prototype.push = function (value) {
            this.values.push(value);
            if (this.values.length > this.size) {
                this.values.shift();
            }
        };
        SizedStack.prototype.pop = function () {
            return this.values.pop();
        };
        return SizedStack;
    }());

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
    var JsonSchemaService = /** @class */ (function () {
        function JsonSchemaService(pathUtilService) {
            this.pathUtilService = pathUtilService;
        }
        JsonSchemaService.prototype.setSchema = function (schema) {
            this.schema = schema;
        };
        /**
         * Returns the schema extracted from this path
         */
        JsonSchemaService.prototype.forPathArray = function (path) {
            return path
                .reduce(function (schema, pathEl) {
                if (isNaN(pathEl) && pathEl !== '-') {
                    return schema.properties[pathEl];
                }
                else {
                    return schema.items;
                }
            }, this.schema);
        };
        /**
         * Returns the schema extracted from the json-pointer string
         */
        JsonSchemaService.prototype.forPathString = function (path) {
            var pathArray = this.pathUtilService.toPathArray(path);
            return this.forPathArray(pathArray);
        };
        return JsonSchemaService;
    }());
    JsonSchemaService.ɵfac = function JsonSchemaService_Factory(t) { return new (t || JsonSchemaService)(i0.ɵɵinject(PathUtilService)); };
    JsonSchemaService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonSchemaService, factory: JsonSchemaService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(JsonSchemaService, [{
                type: i0.Injectable
            }], function () { return [{ type: PathUtilService }]; }, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2018 CERN.
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
    var CompareKeysBySchemaService = /** @class */ (function () {
        function CompareKeysBySchemaService() {
        }
        /**
         * @param key1 the first key
         * @param key2 the second key
         * @param schema schema of the parent object
         */
        CompareKeysBySchemaService.prototype.compare = function (key1, key2, schema) {
            // Sort by priority, larger is the first.
            var priorty1 = schema.properties[key1].priority || 0;
            var priority2 = schema.properties[key2].priority || 0;
            if (priorty1 > priority2) {
                return -1;
            }
            if (priorty1 < priority2) {
                return 1;
            }
            // Sort alphabetically.
            if (key1 < key2) {
                return -1;
            }
            if (key1 > key2) {
                return 1;
            }
            return 0;
        };
        return CompareKeysBySchemaService;
    }());
    CompareKeysBySchemaService.ɵfac = function CompareKeysBySchemaService_Factory(t) { return new (t || CompareKeysBySchemaService)(); };
    CompareKeysBySchemaService.ɵprov = i0.ɵɵdefineInjectable({ token: CompareKeysBySchemaService, factory: CompareKeysBySchemaService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CompareKeysBySchemaService, [{
                type: i0.Injectable
            }], null, null);
    })();

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
    var KeysStoreService = /** @class */ (function () {
        function KeysStoreService(appGlobalsService, pathUtilService, jsonSchemaService, compareKeysBySchemaService) {
            this.appGlobalsService = appGlobalsService;
            this.pathUtilService = pathUtilService;
            this.jsonSchemaService = jsonSchemaService;
            this.compareKeysBySchemaService = compareKeysBySchemaService;
            this.onKeysChange = new rxjs.Subject();
        }
        KeysStoreService.prototype.forPath = function (path) {
            return this.keys$Map[path];
        };
        /**
         * Adds a key to the specified path.
         *
         * @param path path to add the key to
         * @param key key to be added
         * @param schema schema that belongs to path (schema.items for table-list)
         */
        KeysStoreService.prototype.addKey = function (path, key, schema, value) {
            var _this = this;
            // FIXME: could do O(logn) insert instead of O(nlogn) since the set is already sorted.
            this.keysMap[path] = this.keysMap[path]
                .add(key)
                .sort(function (a, b) { return _this.compareKeysBySchemaService.compare(a, b, schema); });
            this.keys$Map[path].next(this.keysMap[path]);
            this.onKeysChange.next({ path: path, keys: this.keysMap[path] });
            var newKeyPath = "" + path + this.pathUtilService.separator + key;
            var keySchema = schema.properties[key];
            if (keySchema.type === 'object' || keySchema.componentType === 'table-list') {
                this.buildKeysMapRecursivelyForPath(value || immutable.Map(), newKeyPath, keySchema);
            }
            return newKeyPath;
        };
        KeysStoreService.prototype.deletePath = function (path) {
            var lastKey = path[path.length - 1];
            var parentPath = this.pathUtilService.toPathString(path.slice(0, -1));
            // don't invoke deleteKey if parentPath is primitive-list
            if (this.keysMap[parentPath]) {
                this.deleteKey(parentPath, lastKey);
            }
        };
        /**
         * Sync keys in store for the given path or its parent, grand parent etc. if necessary
         *
         * @param path path to the (re)set field
         * @param json whole json
         */
        KeysStoreService.prototype.syncKeysForPath = function (path, json) {
            // search from leaf to root, to find the first path with entry in keys map
            for (var i = path.length - 1; i >= 0; i--) {
                var currentPath = path.slice(0, i);
                var currentPathString = this.pathUtilService.toPathString(currentPath);
                if (this.keysMap[currentPathString]) {
                    // path[i] is key that should be added to currentPat
                    var key = path[i];
                    // if currentPath has the key
                    if (this.keysMap[currentPathString].has(key)) {
                        // just build the store keys map for that /current/path/key if it is object or array
                        var keyPath = currentPath.concat(key);
                        var keySchema = this.jsonSchemaService.forPathArray(keyPath);
                        if (keySchema.type === 'object' || keySchema.type === 'array') {
                            this.buildKeysMapRecursivelyForPath(json.getIn(keyPath), keyPath, keySchema);
                        }
                        // if currentPath doesn't have the key
                    }
                    else {
                        var currentSchema = this.jsonSchemaService.forPathArray(currentPath);
                        // if currentPath is to a table list
                        if (currentSchema.componentType === 'table-list') {
                            // have to rebuild keys map for it because key is here an index we don't know what to add
                            this.buildKeysMapRecursivelyForPath(json.getIn(currentPath), currentPath, currentSchema);
                            // if not to a table list.
                        }
                        else {
                            // just add the key which will build keys map for /current/path/key as well if needed
                            this.addKey(currentPathString, key, currentSchema, json.getIn(currentPath.concat(path[i])));
                        }
                    }
                    // break when a entry found for a path in keys map
                    break;
                }
            }
        };
        KeysStoreService.prototype.deleteKey = function (parentPath, key) {
            var _this = this;
            // remove deleted one from parent
            this.keysMap[parentPath] = this.keysMap[parentPath].delete(key);
            this.keys$Map[parentPath].next(this.keysMap[parentPath]);
            this.onKeysChange.next({ path: parentPath, keys: this.keysMap[parentPath] });
            // delete keys for deleted one
            var deletedKeyPath = "" + parentPath + this.pathUtilService.separator + key;
            delete this.keysMap[deletedKeyPath];
            delete this.keys$Map[deletedKeyPath];
            // delete keys for all children of the deleted one
            var deletedKeyPathChildPrefix = deletedKeyPath + this.pathUtilService.separator;
            Object.keys(this.keysMap)
                .filter(function (path) { return path.startsWith(deletedKeyPathChildPrefix); })
                .forEach(function (childPath) {
                delete _this.keysMap[childPath];
                delete _this.keys$Map[childPath];
            });
        };
        /**
         * Swaps keys of given two indices in object list recursively
         */
        KeysStoreService.prototype.swapListElementKeys = function (listPath, index1, index2) {
            var _this = this;
            var listSchema = this.jsonSchemaService.forPathArray(listPath);
            if (listSchema.componentType !== 'complex-list') {
                return;
            }
            var listPathString = this.pathUtilService.toPathString(listPath);
            var ps1 = "" + listPathString + this.pathUtilService.separator + index1;
            var ps2 = "" + listPathString + this.pathUtilService.separator + index2;
            var keys1 = this.keysMap[ps1];
            this.setKeys(ps1, this.keysMap[ps2]);
            this.setKeys(ps2, keys1);
            // swap children as well
            var ps1ChildPrefix = ps1 + this.pathUtilService.separator;
            var ps2ChildPrefix = ps2 + this.pathUtilService.separator;
            var childrenSwaps = [];
            Object.keys(this.keysMap)
                .forEach(function (path) {
                if (path.startsWith(ps1ChildPrefix)) {
                    var toPath = path.replace(ps1ChildPrefix, ps2ChildPrefix);
                    childrenSwaps.push({ from: path, to: toPath, keys: _this.keysMap[path] });
                }
                else if (path.startsWith(ps2ChildPrefix)) {
                    var toPath = path.replace(ps2ChildPrefix, ps1ChildPrefix);
                    childrenSwaps.push({ from: path, to: toPath, keys: _this.keysMap[path] });
                }
            });
            childrenSwaps
                .forEach(function (swap) {
                _this.setKeys(swap.to, swap.keys);
                _this.onKeysChange.next({ path: swap.to, keys: _this.keysMap[swap.to] });
            });
            childrenSwaps
                .filter(function (swap) { return !childrenSwaps.some(function (otherSwap) { return swap.from === otherSwap.to; }); })
                .forEach(function (swap) {
                delete _this.keysMap[swap.from];
                delete _this.keys$Map[swap.from];
            });
        };
        KeysStoreService.prototype.buildKeysMap = function (json, schema) {
            this.keys$Map = {};
            this.keysMap = {};
            this.buildKeysMapRecursivelyForPath(json, '', schema);
        };
        KeysStoreService.prototype.buildKeysMapRecursivelyForPath = function (mapOrList, path, schema) {
            var _this = this;
            // TODO: remove this and unify typing when #330 is fixed
            var pathString = Array.isArray(path) ? this.pathUtilService.toPathString(path) : path;
            if (!schema) {
                schema = this.jsonSchemaService.forPathString(pathString);
            }
            if (schema.type === 'object') {
                var map_1 = mapOrList || immutable.Map();
                var finalKeys = this.buildkeysForObject(pathString, map_1, schema);
                // recursive call
                finalKeys
                    .filter(function (key) { return _this.isObjectOrArray(schema.properties[key]); })
                    .forEach(function (key) {
                    var nextPath = "" + pathString + _this.pathUtilService.separator + key;
                    _this.buildKeysMapRecursivelyForPath(map_1.get(key), nextPath, schema.properties[key]);
                });
            }
            else if (schema.componentType === 'table-list') {
                var list = mapOrList || immutable.List();
                this.buildKeysForTableList(pathString, list, schema);
                // there is no recursive call for table list items because they aren't expected to have object or object list as property.
            }
            else if (schema.componentType === 'complex-list') {
                var list = mapOrList || immutable.List();
                list.forEach(function (element, index) {
                    var elementPath = "" + pathString + _this.pathUtilService.separator + index;
                    _this.buildKeysMapRecursivelyForPath(element, elementPath, schema.items);
                });
            }
        };
        // default value for `list`, if this is called for alwaysShow in which case `list` would be undefined
        KeysStoreService.prototype.buildKeysForTableList = function (path, list, schema) {
            if (list === void 0) { list = immutable.List(); }
            // get present unique keys in all items of table-list
            var keys = immutable.Seq.Set(list
                .map(function (object) { return object.keySeq().toArray(); })
                .reduce(function (pre, cur) { return pre.concat(cur); }, []));
            var itemSchema = schema.items;
            var finalKeys = this.schemafy(keys, itemSchema);
            this.setKeys(path, finalKeys);
        };
        // default value for `map`, if this is called for alwaysShow in which case `map` would be undefined
        KeysStoreService.prototype.buildkeysForObject = function (path, map, schema) {
            if (map === void 0) { map = immutable.Map(); }
            var finalKeys = this.schemafy(map.keySeq(), schema);
            this.setKeys(path, finalKeys);
            return finalKeys;
        };
        /**
         * Filters keys, add alwaysShow fields and sorts by schema.
         */
        KeysStoreService.prototype.schemafy = function (keys, schema) {
            var _this = this;
            return keys
                .concat(schema.required || [])
                .filter(function (key) { return _this.isNotHidden(key, schema) || _this.appGlobalsService.adminMode; })
                .concat(schema.alwaysShow || [])
                .sort(function (a, b) { return _this.compareKeysBySchemaService.compare(a, b, schema); })
                .toOrderedSet();
        };
        KeysStoreService.prototype.isNotHidden = function (key, schema) {
            if (!schema.properties[key]) {
                throw new Error("\"" + key + "\" is not specified as property in \n" + JSON.stringify(schema.properties, undefined, 2));
            }
            return !schema.properties[key].hidden;
        };
        KeysStoreService.prototype.isObjectOrArray = function (schema) {
            return schema.type === 'object' || schema.type === 'array';
        };
        KeysStoreService.prototype.setKeys = function (path, keys) {
            this.keysMap[path] = keys;
            if (!this.keys$Map[path]) {
                this.keys$Map[path] = new rxjs.ReplaySubject(1);
            }
            this.keys$Map[path].next(keys);
        };
        return KeysStoreService;
    }());
    KeysStoreService.ɵfac = function KeysStoreService_Factory(t) { return new (t || KeysStoreService)(i0.ɵɵinject(AppGlobalsService), i0.ɵɵinject(PathUtilService), i0.ɵɵinject(JsonSchemaService), i0.ɵɵinject(CompareKeysBySchemaService)); };
    KeysStoreService.ɵprov = i0.ɵɵdefineInjectable({ token: KeysStoreService, factory: KeysStoreService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(KeysStoreService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppGlobalsService }, { type: PathUtilService }, { type: JsonSchemaService }, { type: CompareKeysBySchemaService }]; }, null);
    })();

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
    var JsonStoreService = /** @class */ (function () {
        function JsonStoreService(pathUtilService, keysStoreService) {
            this.pathUtilService = pathUtilService;
            this.keysStoreService = keysStoreService;
            this.patchesByPath$ = new rxjs.ReplaySubject(1);
            this.json$ = new rxjs.Subject();
            this.jsonPatches$ = new rxjs.Subject();
            this.patchesByPath = {};
            // list of reverse patches for changes
            this.history = new SizedStack(10);
        }
        JsonStoreService.prototype.setIn = function (path, value, allowUndo) {
            if (allowUndo === void 0) { allowUndo = true; }
            if (value === '' || value === undefined) {
                this.removeIn(path);
                return;
            }
            value = this.toImmutable(value);
            // immutablejs setIn creates Map for keys that don't exist in path
            // therefore List() should be set manually for some of those keys.
            this.setEmptyListBeforeEachIndexInPath(path);
            if (allowUndo) {
                this.pushRevertPatchToHistory(path, 'replace');
            }
            // set new value
            this.json = this.json.setIn(path, value);
            this.keysStoreService.syncKeysForPath(path, this.json);
            this.json$.next(this.json);
        };
        JsonStoreService.prototype.setEmptyListBeforeEachIndexInPath = function (path) {
            for (var i = 0; i < path.length - 1; i++) {
                var currentPath = path.slice(0, i + 1);
                if (!this.json.hasIn(currentPath) && typeof path[i + 1] === 'number') {
                    this.json = this.json.setIn(currentPath, immutable.List());
                }
            }
        };
        JsonStoreService.prototype.getIn = function (path, notSetValue) {
            return this.json.getIn(path, notSetValue);
        };
        JsonStoreService.prototype.removeIn = function (path) {
            this.pushRevertPatchToHistory(path, 'add');
            this.json = this.json.removeIn(path);
            this.json$.next(this.json);
            this.keysStoreService.deletePath(path);
        };
        JsonStoreService.prototype.pushRevertPatchToHistory = function (path, revertOp) {
            this.history.push({
                path: this.pathUtilService.toPathString(path),
                op: revertOp,
                value: this.json.getIn(path)
            });
        };
        JsonStoreService.prototype.addIn = function (path, value) {
            var lastPathElement = path[path.length - 1];
            var isInsert = typeof lastPathElement === 'number' || lastPathElement === '-';
            if (isInsert) {
                var pathWithoutIndex = path.slice(0, path.length - 1);
                var list = this.getIn(pathWithoutIndex) || immutable.List();
                value = this.toImmutable(value);
                if (lastPathElement === '-') {
                    list = list.push(value);
                    path[path.length - 1] = list.size - 1;
                }
                else {
                    list = list.insert(lastPathElement, value);
                }
                // allowUndo=false to avoid creating replace history patch when adding an item to a list.
                this.setIn(pathWithoutIndex, list, false);
            }
            else {
                this.setIn(path, value);
            }
        };
        JsonStoreService.prototype.toImmutable = function (value) {
            if (typeof value === 'object' && !(immutable.List.isList(value) || immutable.Map.isMap(value))) {
                return immutable.fromJS(value);
            }
            return value;
        };
        /**
         * Moves the element at given index UP or DOWN within the list
         * @param listPath path to a list in json
         * @param index index of the element that is being moved
         * @param direction 1 for DOWN, -1 for UP movement
         * @return new path of the moved element
         */
        JsonStoreService.prototype.moveIn = function (listPath, index, direction) {
            var list = this.getIn(listPath);
            var newIndex = index + direction;
            if (newIndex >= list.size || newIndex < 0) {
                newIndex = list.size - Math.abs(newIndex);
            }
            var temp = list.get(index);
            list = list
                .set(index, list.get(newIndex))
                .set(newIndex, temp);
            this.setIn(listPath, list);
            this.keysStoreService.swapListElementKeys(listPath, index, newIndex);
            return listPath.concat(newIndex);
        };
        JsonStoreService.prototype.setJson = function (json) {
            this.json = json;
        };
        JsonStoreService.prototype.setJsonPatches = function (patches) {
            var _this = this;
            this.patchesByPath = {};
            patches.forEach(function (patch) {
                var path = _this.getComponentPathForPatch(patch);
                if (!_this.patchesByPath[path]) {
                    _this.patchesByPath[path] = [];
                }
                _this.patchesByPath[path].push(patch);
            });
            this.jsonPatches = patches;
            this.patchesByPath$.next(this.patchesByPath);
        };
        JsonStoreService.prototype.rollbackLastChange = function () {
            var lastChangeReversePatch = this.history.pop();
            if (lastChangeReversePatch) {
                this.applyPatch(lastChangeReversePatch, false);
                return lastChangeReversePatch.path;
            }
            else {
                return undefined;
            }
        };
        JsonStoreService.prototype.applyPatch = function (patch, allowUndo) {
            if (allowUndo === void 0) { allowUndo = true; }
            var path = this.pathUtilService.toPathArray(patch.path);
            switch (patch.op) {
                case 'replace':
                    this.setIn(path, patch.value, allowUndo);
                    break;
                case 'remove':
                    this.removeIn(path);
                    break;
                case 'add':
                // custom type for adding a replace patch as new.
                case 'add-as-new':
                    this.addIn(path, patch.value);
                    break;
                default:
                    console.warn(patch.op + " is not supported!");
            }
            this.removeJsonPatch(patch);
        };
        JsonStoreService.prototype.rejectPatch = function (patch) {
            this.removeJsonPatch(patch);
        };
        JsonStoreService.prototype.hasPatch = function (path) {
            return this.patchesByPath[path] && this.patchesByPath[path].length > 0;
        };
        JsonStoreService.prototype.hasPatchOrChildrenHavePatch = function (path) {
            if (this.hasPatch(path)) {
                return true;
            }
            if (this.jsonPatches) {
                var childPathPrefix_1 = "" + path + this.pathUtilService.separator;
                return this.jsonPatches
                    .some(function (patch) { return patch.path.startsWith(childPathPrefix_1); });
            }
            return false;
        };
        JsonStoreService.prototype.removeJsonPatch = function (patch) {
            var path = this.getComponentPathForPatch(patch);
            // don't do anything if it's UNDO json-patch.
            if (this.patchesByPath[path]) {
                var patchIndex = this.patchesByPath[path].indexOf(patch);
                if (patchIndex > -1) {
                    this.patchesByPath[path].splice(patchIndex, 1);
                    this.patchesByPath$.next(this.patchesByPath);
                    var globalPatchIndex = this.jsonPatches.indexOf(patch);
                    this.jsonPatches.splice(globalPatchIndex, 1);
                    this.jsonPatches$.next(this.jsonPatches);
                }
            }
        };
        JsonStoreService.prototype.getComponentPathForPatch = function (patch) {
            if (patch.op === 'add') {
                // add patches handled by parent component
                return this.getParentPath(patch.path);
            }
            return patch.path;
        };
        JsonStoreService.prototype.getParentPath = function (path) {
            var pathArray = this.pathUtilService.toPathArray(path);
            var parentPathArray = pathArray.slice(0, -1);
            return this.pathUtilService.toPathString(parentPathArray);
        };
        return JsonStoreService;
    }());
    JsonStoreService.ɵfac = function JsonStoreService_Factory(t) { return new (t || JsonStoreService)(i0.ɵɵinject(PathUtilService), i0.ɵɵinject(KeysStoreService)); };
    JsonStoreService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonStoreService, factory: JsonStoreService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(JsonStoreService, [{
                type: i0.Injectable
            }], function () { return [{ type: PathUtilService }, { type: KeysStoreService }]; }, null);
    })();

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
    var JsonUtilService = /** @class */ (function () {
        function JsonUtilService(pathUtilService) {
            this.pathUtilService = pathUtilService;
        }
        /**
         * Returns value of the property located in dot separated path of json.
         */
        JsonUtilService.prototype.getValueInPath = function (json, path) {
            var pathElements = this.pathUtilService.toPathArray(path);
            var value = json;
            pathElements.forEach(function (pathElement) {
                value = value[pathElement];
                if (!value) {
                    throw new Error("\"" + pathElement + "\" of given path not defined in given json");
                }
            });
            return value;
        };
        return JsonUtilService;
    }());
    JsonUtilService.ɵfac = function JsonUtilService_Factory(t) { return new (t || JsonUtilService)(i0.ɵɵinject(PathUtilService)); };
    JsonUtilService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonUtilService, factory: JsonUtilService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(JsonUtilService, [{
                type: i0.Injectable
            }], function () { return [{ type: PathUtilService }]; }, null);
    })();

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
    var ModalService = /** @class */ (function () {
        function ModalService() {
            this.options$ = new rxjs.ReplaySubject(1);
            this.display$ = new rxjs.ReplaySubject(1);
        }
        ModalService.prototype.displayModal = function (options) {
            this.options$.next(options);
            this.display$.next(true);
        };
        ModalService.prototype.closeCurrentModal = function () {
            this.display$.next(false);
        };
        return ModalService;
    }());
    ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
    ModalService.ɵprov = i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ModalService, [{
                type: i0.Injectable
            }], null, null);
    })();

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
    var RecordFixerService = /** @class */ (function () {
        function RecordFixerService(emptyValueService, componentTypeService) {
            this.emptyValueService = emptyValueService;
            this.componentTypeService = componentTypeService;
        }
        /**
         * Fixes given record according to given schema, in other words
         * changes it to match the format expected the by te json-editor
         *
         * @param rawRecord - json record to be fixed
         * @param schema - extended schema of rawRecord
         * @return - fixed record
         */
        RecordFixerService.prototype.fixRecord = function (rawRecord, schema) {
            var _this = this;
            var record = Object.assign({}, rawRecord);
            Object.keys(record).forEach(function (field) {
                if (!schema.properties[field]) {
                    // Delete if field is not in schema!
                    _this.deleteField(record, field);
                }
                else {
                    // Fix the field and all children.
                    _this.fix(field, record, schema.properties[field]);
                }
            });
            return record;
        };
        /**
         * Visits all parts of record recursivly, along with the subschema of the part
         * and apply required fixes.
         *
         * NOTE: the reason that parent and key are passed instead of the direct value
         * is to be able do some operations that needs the parent such as `delete`.
         *
         * TODO: add special case for arrays because fixes are the same for
         * all elements.
         *
         * @param key - field name or element index
         * @param parent - parent of the field/element
         * @param schema - schema of visited field/element
         */
        RecordFixerService.prototype.fix = function (key, parent, schema) {
            var _this = this;
            if (schema.hidden) {
                return;
            }
            // Fixes for each type/condition, can be added below.
            var value = parent[key];
            // Recursive calls
            if (schema.type === 'object') {
                if (!schema.properties) {
                    throw new Error("\"" + key + "\"'s schema has \"type\": \"object\" but doesn't specify \"properties\"");
                }
                else if (!(value instanceof Object)) {
                    throw new Error("\"" + key + "\" in " + JSON.stringify(value, null, 2) + " is specified as \"object\" by schema but it is not an object in json");
                }
                // Looping over record to filter out fields that are not in schema.
                Object.keys(value).forEach(function (prop) {
                    if (!schema.properties[prop]) {
                        // we don't like fields without schema!
                        _this.deleteField(value, prop);
                    }
                    else {
                        _this.fix(prop, value, schema.properties[prop]);
                    }
                });
            }
            else if (schema.type === 'array') {
                if (!schema.items) {
                    throw new Error("\"" + key + "\"'s schema has \"type\": \"array\" but doesn't specify \"items\"");
                }
                else if (!Array.isArray(value)) {
                    throw new Error("\"" + key + "\" in " + JSON.stringify(value, null, 2) + " is specified as \"array\" by schema but it is not an array in json");
                }
                value.forEach(function (element, index) {
                    _this.fix(index, value, schema.items);
                });
            }
        };
        /**
         * Deletes given field from the given object.
         * Used for deleting fields that aren't on the schema.
         *
         * TODO: replace this with only `delete` when logging is not necessary!
         */
        RecordFixerService.prototype.deleteField = function (object, field) {
            delete object[field];
            console.warn("\"" + field + "\" is removed from input json since it's not in the schema");
        };
        return RecordFixerService;
    }());
    RecordFixerService.ɵfac = function RecordFixerService_Factory(t) { return new (t || RecordFixerService)(i0.ɵɵinject(EmptyValueService), i0.ɵɵinject(ComponentTypeService)); };
    RecordFixerService.ɵprov = i0.ɵɵdefineInjectable({ token: RecordFixerService, factory: RecordFixerService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RecordFixerService, [{
                type: i0.Injectable
            }], function () { return [{ type: EmptyValueService }, { type: ComponentTypeService }]; }, null);
    })();

    var SchemaFixerService = /** @class */ (function () {
        function SchemaFixerService(jsonUtilService, componentTypeService) {
            this.jsonUtilService = jsonUtilService;
            this.componentTypeService = componentTypeService;
        }
        /**
         * Fixes schema to be in a format that expected by json-editor
         *
         * @param schema - json schema
         * @param config - schema specific options
         * @return - fixed schema
         */
        SchemaFixerService.prototype.fixSchema = function (originalSchema, config) {
            var schema = _.cloneDeep(originalSchema);
            if (config) {
                schema = this.enrichSchemaWithConfig(schema, config);
            }
            schema = this.fixRecursively(schema);
            return schema;
        };
        /**
         * Enriches given schema with given configuration objects
         * puts config into correct places in schema.
         *
         * @param schema - json schema
         * @param config - schema specific options
         */
        SchemaFixerService.prototype.enrichSchemaWithConfig = function (schema, config) {
            return _.mergeWith(schema, config, function (currentSchema, currentConfig, key) {
                if ((key === 'properties' || key === 'items') && !currentSchema) {
                    console.warn("config => " + JSON.stringify(currentConfig, function (configKey, value) {
                        if (typeof value === 'function') {
                            return 'ƒ()';
                        }
                        return value;
                    }, 2) + " should not be under \"" + key + "\" because schema does not have \"" + key + "\"");
                    // cancel merge to avoid creating broken json schema
                    return null;
                }
                if (currentSchema && key === 'properties') {
                    var configKeys = Object.keys(currentConfig);
                    configKeys
                        .filter(function (configKey) { return !currentSchema[configKey]; })
                        .forEach(function (wrongConfigKey) {
                        delete currentConfig[wrongConfigKey];
                        console.warn(wrongConfigKey);
                    });
                }
            });
        };
        /**
         * Applies all fixes to schema recursively
         */
        SchemaFixerService.prototype.fixRecursively = function (schema) {
            var _this = this;
            if (schema.anyOf) {
                schema = this.fixAnyOf(schema);
            }
            else if (schema.allOf) {
                schema = this.fixAllOf(schema);
            }
            if (schema.order) {
                schema = this.fixOrder(schema);
            }
            if (schema.disabled) {
                schema = this.fixDisabled(schema);
            }
            if (schema.alwaysShow) {
                schema = this.fixAlwaysShow(schema);
            }
            if (schema.alwaysShowRegExp) {
                schema = this.fixAlwaysShowRegExp(schema);
            }
            // schema fixes must be done above
            // recursively call for deeper parts of schema
            if (schema.properties) {
                Object.keys(schema.properties)
                    .forEach(function (prop) {
                    schema.properties[prop] = _this.fixRecursively(schema.properties[prop]);
                });
            }
            else if (schema.items) {
                schema.items = this.fixRecursively(schema.items);
            }
            // fixes that needs above fixes to be done deeply for the current schema
            schema.componentType = this.componentTypeService.getComponentType(schema);
            return schema;
        };
        /**
         * Fixes disabled config to assign the disabled attribute
         * to array items or object properties
         */
        SchemaFixerService.prototype.fixDisabled = function (schema) {
            if (schema.items) {
                schema.items.disabled = true;
            }
            else if (schema.properties) {
                Object.keys(schema.properties)
                    .forEach(function (prop) {
                    schema.properties[prop].disabled = true;
                });
            }
            return schema;
        };
        /**
         * Fixes order config to assign the right priority to properties
         */
        SchemaFixerService.prototype.fixOrder = function (schema) {
            var order = schema.order;
            order.forEach(function (orderKey, index) {
                var priority = order.length - index;
                if (orderKey in schema.properties) {
                    schema.properties[orderKey].priority = priority;
                }
                else {
                    console.warn(orderKey + " defined in order config does not exist in schema.");
                }
            });
            return schema;
        };
        /**
         * Fixes anyOf schemas with exactly same property structure
         * it merges all enum fields in anyOf elements
         */
        SchemaFixerService.prototype.fixAnyOf = function (schema) {
            var anyOf = schema.anyOf;
            // find existence count of all enum properties in anyOf elements
            // the reason of this, a field could be enum type for some and not for some other anyOf element
            var enumPropCount = {};
            anyOf.forEach(function (anyOfElement) {
                Object.keys(anyOfElement.properties)
                    .filter(function (prop) { return anyOfElement.properties[prop].enum; })
                    .forEach(function (prop) {
                    if (!enumPropCount[prop]) {
                        enumPropCount[prop] = 0;
                    }
                    enumPropCount[prop]++;
                });
            });
            // combine all enum arrays in anyOf elements
            var enums = {};
            Object.keys(enumPropCount)
                .forEach(function (prop) {
                anyOf.forEach(function (anyOfElement) {
                    if (!enums[prop]) {
                        enums[prop] = [];
                    }
                    var enumValues = anyOfElement.properties[prop].enum;
                    // check if current field is enum for current anyOf element
                    if (enumValues) {
                        enums[prop] = enums[prop].concat(enumValues);
                    }
                });
            });
            var fixedSchema = anyOf[0];
            // shallow cleaning of format and pattern
            Object.keys(fixedSchema.properties)
                .forEach(function (prop) {
                delete fixedSchema.properties[prop].format;
                delete fixedSchema.properties[prop].pattern;
            });
            Object.keys(enumPropCount)
                .forEach(function (prop) {
                var uniqueEnumValues = Array.from(new Set(enums[prop]));
                // if a field enum for all anyOf elements
                if (enumPropCount[prop] === anyOf.length) {
                    // merge all enum values into one
                    fixedSchema.properties[prop].enum = uniqueEnumValues;
                    // if a field enum for some of anyOf elements
                }
                else {
                    // create a autocomplete config so that it will allow any values
                    // but autocomplete from enum values from where the field is defined as enum
                    delete fixedSchema.properties[prop].enum;
                    fixedSchema.properties[prop].autocompletionConfig = {
                        source: uniqueEnumValues,
                        size: 7
                    };
                }
            });
            // copy disabled attribute inside fixedSchema because it
            // is outside anyOf element and is ignored
            if (schema.disabled) {
                fixedSchema.disabled = true;
            }
            return fixedSchema;
        };
        SchemaFixerService.prototype.fixAllOf = function (schema) {
            return _.merge.apply(___namespace, __spread([{}], schema.allOf));
        };
        /**
         * Adds keys that matches `alwaysShowRegExp` to `alwaysShow`.
         * Passes `alwaysShowRegExp` down to children so that it is applied recursively.
         */
        SchemaFixerService.prototype.fixAlwaysShowRegExp = function (schema) {
            if (!schema.alwaysShow) {
                schema.alwaysShow = [];
            }
            Object.keys(schema.properties)
                .forEach(function (key) {
                // pass alwaysShowRegExp down to apply it recursively.
                var subSchema = schema.properties[key];
                if (subSchema.type === 'object') {
                    subSchema.alwaysShowRegExp = schema.alwaysShowRegExp;
                }
                if (key.search(schema.alwaysShowRegExp) > -1) {
                    schema.alwaysShow.push(key);
                }
            });
            return schema;
        };
        /**
         * Removes alwayShow fields that aren't in the schema.properties
         * and warns on console.
         */
        SchemaFixerService.prototype.fixAlwaysShow = function (schema) {
            var alwaysShow = schema.alwaysShow;
            schema.alwaysShow = alwaysShow.filter(function (key) {
                if (schema.properties[key]) {
                    return true;
                }
                else {
                    console.warn(key + " is configured as alwaysShow but it is not in " + JSON.stringify(Object.keys(schema.properties)));
                }
            });
            return schema;
        };
        return SchemaFixerService;
    }());
    SchemaFixerService.ɵfac = function SchemaFixerService_Factory(t) { return new (t || SchemaFixerService)(i0.ɵɵinject(JsonUtilService), i0.ɵɵinject(ComponentTypeService)); };
    SchemaFixerService.ɵprov = i0.ɵɵdefineInjectable({ token: SchemaFixerService, factory: SchemaFixerService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SchemaFixerService, [{
                type: i0.Injectable
            }], function () { return [{ type: JsonUtilService }, { type: ComponentTypeService }]; }, null);
    })();

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
    var SchemaValidationService = /** @class */ (function () {
        function SchemaValidationService(appGlobalsService) {
            var _this = this;
            this.appGlobalsService = appGlobalsService;
            // `jsonPointer: true` is required for `avj-errors` package
            this.ajv = new Ajv__namespace({ allErrors: true, jsonPointers: true });
            // https://gist.github.com/dperini/729294
            this.reWebUrl = new RegExp('^' +
                // protocol identifier
                '(?:(?:https?|ftp)://)' +
                // user:pass authentication
                '(?:\\S+(?::\\S*)?@)?' +
                '(?:' +
                // IP address exclusion
                // private & local networks
                '(?!(?:10)(?:\\.\\d{1,3}){3})' +
                '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
                '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
                // IP address dotted notation octets
                // excludes loopback network 0.0.0.0
                // excludes reserved space >= 224.0.0.0
                // excludes network & broacast addresses
                // (first & last IP address of each class)
                '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
                '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
                '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
                '|' +
                'localhost' +
                '|' +
                // host name
                '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
                // domain name
                '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
                // TLD identifier
                '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
                // TLD may end with dot
                '\\.?' +
                ')' +
                // port number
                '(?::\\d{2,5})?' +
                // resource path
                '(?:[/?#]\\S*)?' +
                '$', 'i');
            enableCustomErrorMessages__namespace(this.ajv);
            //  ajv didn't support format:url, so was added using web url regex for validation
            this.ajv.addFormat('url', this.reWebUrl);
            if (this.appGlobalsService.config && this.appGlobalsService.config.customFormatValidation) {
                var customFormats_1 = this.appGlobalsService.config.customFormatValidation;
                Object.keys(customFormats_1).forEach(function (key) {
                    _this.ajv.addFormat(key, customFormats_1[key].formatChecker);
                });
            }
        }
        /**
         * Validates a specific value against schema
         *
         * Uses: ajv package for json-schema validation
         *
         */
        SchemaValidationService.prototype.validateValue = function (value, schema) {
            var validationErrors = [];
            if (!this.ajv.validate(schema, value)) {
                this.ajv.errors.forEach(function (error) {
                    validationErrors.push({
                        message: error.message,
                        type: 'Error'
                    });
                });
            }
            return validationErrors;
        };
        return SchemaValidationService;
    }());
    SchemaValidationService.ɵfac = function SchemaValidationService_Factory(t) { return new (t || SchemaValidationService)(i0.ɵɵinject(AppGlobalsService)); };
    SchemaValidationService.ɵprov = i0.ɵɵdefineInjectable({ token: SchemaValidationService, factory: SchemaValidationService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SchemaValidationService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppGlobalsService }]; }, null);
    })();

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
    var ShortcutActionService = /** @class */ (function () {
        function ShortcutActionService(emptyValueService, domUtilService, jsonStoreService, jsonSchemaService, pathUtilService, keysStoreService) {
            this.emptyValueService = emptyValueService;
            this.domUtilService = domUtilService;
            this.jsonStoreService = jsonStoreService;
            this.jsonSchemaService = jsonSchemaService;
            this.pathUtilService = pathUtilService;
            this.keysStoreService = keysStoreService;
        }
        ShortcutActionService.prototype.addToRootAction = function (path) {
            this.add(path, true);
        };
        ShortcutActionService.prototype.addAction = function (path) {
            this.add(path, false);
        };
        ShortcutActionService.prototype.add = function (path, root) {
            var _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
            this.addNewElementInArray(_path, this.jsonSchemaService.forPathArray(_path));
        };
        /**
         * @param path - Path of the array parent that the element is about to be inserted
         * @param schema - Schema of the element that is about to be inserted
         */
        ShortcutActionService.prototype.addNewElementInArray = function (path, schema) {
            var itemSchema = schema.items;
            var emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
            var values = this.jsonStoreService.getIn(path) || immutable.List();
            this.jsonStoreService.setIn(path, values.push(emptyValue));
            path.push(values.size);
            this.waitThenFocus(this.pathUtilService.toPathString(path));
        };
        ShortcutActionService.prototype.addBelowToRootAction = function (path) {
            var rootPath = this.pathUtilService.getNearestOrRootArrayParentInPath(path, true);
            var schema = this.jsonSchemaService.forPathArray(rootPath);
            var itemSchema = schema.items;
            var emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
            var values = this.jsonStoreService.getIn(rootPath) || immutable.List();
            this.jsonStoreService.setIn(rootPath, values.insert(path[1] + 1, emptyValue));
            rootPath.push(path[1] + 1);
            this.waitThenFocus(this.pathUtilService.toPathString(rootPath));
        };
        ShortcutActionService.prototype.moveUpAction = function (path) {
            this.move(path, -1);
        };
        ShortcutActionService.prototype.moveDownAction = function (path) {
            this.move(path, 1);
        };
        ShortcutActionService.prototype.moveUpRootAction = function (path) {
            this.move(path, -1, true);
        };
        ShortcutActionService.prototype.moveDownRootAction = function (path) {
            this.move(path, 1, true);
        };
        /**
         * @param path - Path of the element that is moved
         * @param direction - Movement direction. -1 for UP, +1 for DOWN
         */
        ShortcutActionService.prototype.move = function (path, direction, root) {
            if (root === void 0) { root = false; }
            this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
            var index = this.pathUtilService.getElementIndexInForwardOrReversePath(path, root);
            path = this.jsonStoreService.moveIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, root), index, direction);
            var pathString = this.pathUtilService.toPathString(path);
            this.waitThenFocus(pathString);
        };
        ShortcutActionService.prototype.deleteAction = function (path) {
            // blur element before delete for ensuring that `commitValueChange` will not show again the deleted value
            this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
            this.deleteElement(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false), this.pathUtilService.getElementIndexInForwardOrReversePath(path, false));
        };
        /**
         * @param path - Path of the element's array parent
         * @param index - Index of the element that is deleted from array parent path
         */
        ShortcutActionService.prototype.deleteElement = function (path, index) {
            var values = this.jsonStoreService.getIn(path);
            this.jsonStoreService.setIn(path, values.remove(index));
        };
        ShortcutActionService.prototype.navigateUpAction = function (path) {
            this.navigateUpDown(path, -1);
        };
        ShortcutActionService.prototype.navigateDownAction = function (path) {
            this.navigateUpDown(path, 1);
        };
        /**
         * @param path - Path of the element that is focused
         * @param direction - Navigation direction. -1 for UP, +1 for DOWN
         */
        ShortcutActionService.prototype.navigateUpDown = function (path, direction) {
            var values = this.jsonStoreService.getIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
            if (immutable.List.isList(values)) {
                var elemIndexInPath = this.pathUtilService.getElementIndexInForwardOrReversePath(path, true);
                if ((elemIndexInPath + direction) < values.size && (elemIndexInPath + direction) >= 0) {
                    path[path.length - 2] = elemIndexInPath + direction;
                }
                else {
                    path[path.length - 2] = values.size - Math.abs((elemIndexInPath + direction));
                }
                var pathString = this.pathUtilService.toPathString(path);
                this.domUtilService.focusAndSelectFirstEditableChildById(pathString);
            }
        };
        ShortcutActionService.prototype.navigateLeftAction = function (path) {
            this.navigateRightLeft(path, -1);
        };
        ShortcutActionService.prototype.navigateRightAction = function (path) {
            this.navigateRightLeft(path, 1);
        };
        /**
         * @param path - Path of the element that is focused
         * @param direction - Navigation direction. -1 for LEFT, +1 for RIGHT
         */
        ShortcutActionService.prototype.navigateRightLeft = function (path, direction) {
            var pathString = this.pathUtilService.toPathString(path);
            this.domUtilService.focusRightOrLeftParentCell(pathString, direction);
        };
        /**
         * Copies the current row in table below and sets the value of the previous focused field to empty in the new row
         * @param path - Path
         */
        ShortcutActionService.prototype.copyAction = function (path) {
            this.copyRowOrSchemaBelow(path, false);
        };
        /**
         * Copies the root parent element below(eg creates a new author in authors list)
         * when you edit an author's field)
         * @param path - Path
         */
        ShortcutActionService.prototype.copyFromRootAction = function (path) {
            this.copyRowOrSchemaBelow(path, true);
        };
        /**
         * @param originalPath - Path of the element that is copied
         * @param root - Copy item from parent or root. Set to true for usage as in `copyFromRootAction` and false
         * for usage as in `copyAction`
         */
        ShortcutActionService.prototype.copyRowOrSchemaBelow = function (originalPath, root) {
            var arrayParentPath = this.pathUtilService.getNearestOrRootArrayParentInPath(originalPath, root);
            if (this.jsonSchemaService.forPathArray(arrayParentPath)['items'].hasOwnProperty('properties')) {
                var elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
                var valuesList = this.jsonStoreService.getIn(arrayParentPath) || immutable.List();
                var newValue = valuesList.get(elemIndex);
                var newPath = arrayParentPath.concat(elemIndex + 1);
                var newPathString = this.pathUtilService.toPathString(newPath);
                if (!root) {
                    newValue = newValue.set(originalPath[originalPath.length - 1]);
                    newPathString = "" + newPathString + this.pathUtilService.separator + originalPath[originalPath.length - 1];
                }
                this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
                this.waitThenFocus(newPathString);
            }
        };
        ShortcutActionService.prototype.undoAction = function () {
            var rolledBackPath = this.jsonStoreService.rollbackLastChange();
            if (rolledBackPath) {
                this.waitThenFocus(rolledBackPath);
            }
        };
        ShortcutActionService.prototype.waitThenFocus = function (path) {
            var _this = this;
            setTimeout(function () {
                _this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
            });
        };
        ShortcutActionService.prototype.generateShortcutAction = function (actionName) {
            var _this = this;
            return function (event) {
                event.preventDefault();
                var eventTarget = event.target;
                var pathString = eventTarget.getAttribute('data-path');
                if (pathString) {
                    _this[actionName](_this.pathUtilService.toPathArray(pathString));
                }
                return false;
            };
        };
        return ShortcutActionService;
    }());
    ShortcutActionService.ɵfac = function ShortcutActionService_Factory(t) { return new (t || ShortcutActionService)(i0.ɵɵinject(EmptyValueService), i0.ɵɵinject(DomUtilService), i0.ɵɵinject(JsonStoreService), i0.ɵɵinject(JsonSchemaService), i0.ɵɵinject(PathUtilService), i0.ɵɵinject(KeysStoreService)); };
    ShortcutActionService.ɵprov = i0.ɵɵdefineInjectable({ token: ShortcutActionService, factory: ShortcutActionService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ShortcutActionService, [{
                type: i0.Injectable
            }], function () { return [{ type: EmptyValueService }, { type: DomUtilService }, { type: JsonStoreService }, { type: JsonSchemaService }, { type: PathUtilService }, { type: KeysStoreService }]; }, null);
    })();

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
    var WindowHrefService = /** @class */ (function () {
        function WindowHrefService() {
            this.hrefWithoutHash = this.getHrefWithoutHash();
        }
        WindowHrefService.prototype.getHrefWithoutHash = function () {
            var href = window.location.href;
            var lastHashIndex = href.lastIndexOf('#');
            if (lastHashIndex > 0) {
                return href.substring(0, lastHashIndex);
            }
            else {
                return href;
            }
        };
        return WindowHrefService;
    }());
    WindowHrefService.ɵfac = function WindowHrefService_Factory(t) { return new (t || WindowHrefService)(); };
    WindowHrefService.ɵprov = i0.ɵɵdefineInjectable({ token: WindowHrefService, factory: WindowHrefService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WindowHrefService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var ProblemsService = /** @class */ (function () {
        function ProblemsService() {
            this.externalCategorizedProblems$ = new rxjs.ReplaySubject(1);
            this.internalCategorizedProblems$ = new rxjs.ReplaySubject(1);
            this.externalProblemCount$ = new rxjs.ReplaySubject(1);
            this.internalProblemCount$ = new rxjs.ReplaySubject(1);
            this.errorCount$ = this.getTotalDistinctProblemCount$ForType('errors');
            this.warningCount$ = this.getTotalDistinctProblemCount$ForType('warnings');
            this.internalProblemMap$ = new rxjs.ReplaySubject(1);
            this.internalProblemMap = {};
            this.internalCategorizedProblemMap = { errors: {}, warnings: {} };
            this.externalCategorizedProblemMap = { errors: {}, warnings: {} };
            this.externalProblemCount = { errors: 0, warnings: 0 };
            this.internalProblemCount = { errors: 0, warnings: 0 };
            // set default counts to components
            this.externalProblemCount$.next(this.externalProblemCount);
            this.internalProblemCount$.next(this.internalProblemCount);
        }
        ProblemsService.prototype.getTotalDistinctProblemCount$ForType = function (type) {
            var external$ = this.externalProblemCount$
                .pipe(operators.map(function (counts) { return counts[type]; }));
            var internal$ = this.internalProblemCount$
                .pipe(operators.map(function (counts) { return counts[type]; }));
            return rxjs.combineLatest(external$, internal$, function (external, internal) { return external + internal; })
                .pipe(operators.distinctUntilChanged());
        };
        Object.defineProperty(ProblemsService.prototype, "externalProblems", {
            set: function (problems) {
                var _a = this.categorizeProblemMap(problems), categorizedProblemMap = _a.categorizedProblemMap, errorCount = _a.errorCount, warningCount = _a.warningCount;
                this.externalProblemCount = { errors: errorCount, warnings: warningCount };
                this.externalProblemCount$.next(this.externalProblemCount);
                this.externalCategorizedProblemMap = categorizedProblemMap;
                this.externalCategorizedProblems$.next(this.externalCategorizedProblemMap);
            },
            enumerable: false,
            configurable: true
        });
        ProblemsService.prototype.setInternalProblemsForPath = function (path, problems) {
            this.internalProblemMap[path] = problems;
            this.internalProblemMap$.next(this.internalProblemMap);
            var categorizedProblems = this.categorizeValidationProblems(problems);
            this.internalProblemCount.errors += categorizedProblems.errors.length - this.internalProblemCountForPath(path, 'errors');
            this.internalProblemCount.warnings += categorizedProblems.warnings.length - this.internalProblemCountForPath(path, 'warnings');
            this.internalProblemCount$.next(this.internalProblemCount);
            this.internalCategorizedProblemMap.errors[path] = categorizedProblems.errors;
            this.internalCategorizedProblemMap.warnings[path] = categorizedProblems.warnings;
            this.internalCategorizedProblems$.next(this.internalCategorizedProblemMap);
        };
        ProblemsService.prototype.internalProblemCountForPath = function (path, type) {
            if (this.internalCategorizedProblemMap[type][path]) {
                return this.internalCategorizedProblemMap[type][path].length;
            }
            return 0;
        };
        ProblemsService.prototype.hasProblem = function (path) {
            var internalProblems = this.internalCategorizedProblemMap.errors[path];
            var externalProblems = this.externalCategorizedProblemMap.errors[path];
            var internalProblemCount = internalProblems ? internalProblems.length : 0;
            var externalProblemCount = externalProblems ? externalProblems.length : 0;
            return (internalProblemCount + externalProblemCount) > 0;
        };
        ProblemsService.prototype.categorizeProblemMap = function (problemMap) {
            var _this = this;
            var categorizedProblemMap = { errors: {}, warnings: {} };
            var errorCount = 0;
            var warningCount = 0;
            Object.keys(problemMap)
                .map(function (path) {
                var validationProblems = problemMap[path];
                var categorized = _this.categorizeValidationProblems(validationProblems);
                return { path: path, categorized: categorized };
            }).forEach(function (problemsForPath) {
                categorizedProblemMap.errors[problemsForPath.path] = problemsForPath.categorized.errors;
                categorizedProblemMap.warnings[problemsForPath.path] = problemsForPath.categorized.warnings;
                errorCount += problemsForPath.categorized.errors.length;
                warningCount += problemsForPath.categorized.warnings.length;
            });
            return { categorizedProblemMap: categorizedProblemMap, errorCount: errorCount, warningCount: warningCount };
        };
        ProblemsService.prototype.categorizeValidationProblems = function (validationProblems) {
            var categorized = { errors: [], warnings: [] };
            validationProblems.forEach(function (error) {
                if (error.type === 'Error') {
                    categorized.errors.push(error);
                }
                else {
                    categorized.warnings.push(error);
                }
            });
            return categorized;
        };
        return ProblemsService;
    }());
    ProblemsService.ɵfac = function ProblemsService_Factory(t) { return new (t || ProblemsService)(); };
    ProblemsService.ɵprov = i0.ɵɵdefineInjectable({ token: ProblemsService, factory: ProblemsService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ProblemsService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var KatexService = /** @class */ (function () {
        function KatexService() {
            this.delimiters = [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                // FIXME check if we need the ones below
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false },
            ];
        }
        /**
        *
        * Receives text that can contain LaTeX formulas. The formulas will be
        * identified using `this.delimiters` and rendered inside the passed
        * HTMLElement
        *
        * NOTE: The HTMLElement is expected to have a single child and this
        * will be replaced by the HTML with formatted LaTeX
        *
        * @param {string} text - text to be formatted with LaTeX
        * @param {HTMLElement} el - the HTMLElement where the LaTeX should be rendered
        */
        KatexService.prototype.renderMathInText = function (text, el) {
            var data = this.splitWithDelimiters(text, this.delimiters);
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < data.length; i++) {
                if (data[i].type === 'text') {
                    fragment.appendChild(document.createTextNode(data[i].data));
                }
                else {
                    var span = document.createElement('span');
                    var math = data[i].data;
                    try {
                        katex.render(math, span, {
                            displayMode: data[i].display,
                        });
                    }
                    catch (e) {
                        if (!(e instanceof katex.ParseError)) {
                            throw e;
                        }
                        console.error("KaTeX auto-render: Failed to parse " + data[i].data + " with " + e);
                        fragment.appendChild(document.createTextNode(data[i].rawData));
                        continue;
                    }
                    fragment.appendChild(span);
                }
            }
            // clear
            el.innerHTML = '';
            el.appendChild(fragment);
        };
        KatexService.prototype.findEndOfMath = function (delimiter, text, startIndex) {
            // Adapted from
            // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
            var index = startIndex;
            var braceLevel = 0;
            var delimLength = delimiter.length;
            while (index < text.length) {
                var character = text[index];
                if (braceLevel <= 0 &&
                    text.slice(index, index + delimLength) === delimiter) {
                    return index;
                }
                else if (character === '\\') {
                    index++;
                }
                else if (character === '{') {
                    braceLevel++;
                }
                else if (character === '}') {
                    braceLevel--;
                }
                index++;
            }
            return -1;
        };
        KatexService.prototype.splitAtDelimiters = function (startData, leftDelim, rightDelim, display) {
            var finalData = [];
            for (var i = 0; i < startData.length; i++) {
                if (startData[i].type === 'text') {
                    var text = startData[i].data;
                    var lookingForLeft = true;
                    var currIndex = 0;
                    var nextIndex = void 0;
                    nextIndex = text.indexOf(leftDelim);
                    if (nextIndex !== -1) {
                        currIndex = nextIndex;
                        finalData.push({
                            type: 'text',
                            data: text.slice(0, currIndex),
                        });
                        lookingForLeft = false;
                    }
                    while (true) {
                        if (lookingForLeft) {
                            nextIndex = text.indexOf(leftDelim, currIndex);
                            if (nextIndex === -1) {
                                break;
                            }
                            finalData.push({
                                type: 'text',
                                data: text.slice(currIndex, nextIndex),
                            });
                            currIndex = nextIndex;
                        }
                        else {
                            nextIndex = this.findEndOfMath(rightDelim, text, currIndex + leftDelim.length);
                            if (nextIndex === -1) {
                                break;
                            }
                            finalData.push({
                                type: 'math',
                                data: text.slice(currIndex + leftDelim.length, nextIndex),
                                rawData: text.slice(currIndex, nextIndex + rightDelim.length),
                                display: display,
                            });
                            currIndex = nextIndex + rightDelim.length;
                        }
                        lookingForLeft = !lookingForLeft;
                    }
                    finalData.push({
                        type: 'text',
                        data: text.slice(currIndex),
                    });
                }
                else {
                    finalData.push(startData[i]);
                }
            }
            return finalData;
        };
        KatexService.prototype.splitWithDelimiters = function (text, delimiters) {
            var data = [{ type: 'text', data: text }];
            for (var i = 0; i < delimiters.length; i++) {
                var delimiter = delimiters[i];
                data = this.splitAtDelimiters(data, delimiter.left, delimiter.right, delimiter.display || false);
            }
            return data;
        };
        return KatexService;
    }());
    KatexService.ɵfac = function KatexService_Factory(t) { return new (t || KatexService)(); };
    KatexService.ɵprov = i0.ɵɵdefineInjectable({ token: KatexService, factory: KatexService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(KatexService, [{
                type: i0.Injectable
            }], null, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var TextDiffService = /** @class */ (function () {
        function TextDiffService() {
        }
        TextDiffService.prototype.diffByWord = function (currentText, newText) {
            if (newText === void 0) { newText = ''; }
            return diff.diffWords(currentText, newText);
        };
        return TextDiffService;
    }());
    TextDiffService.ɵfac = function TextDiffService_Factory(t) { return new (t || TextDiffService)(); };
    TextDiffService.ɵprov = i0.ɵɵdefineInjectable({ token: TextDiffService, factory: TextDiffService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TextDiffService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var SHARED_SERVICES = [
        AppGlobalsService,
        RemoteAutocompletionService,
        ComponentTypeService,
        DomUtilService,
        EmptyValueService,
        FindReplaceAllService,
        JsonStoreService,
        JsonUtilService,
        KeysStoreService,
        JsonSchemaService,
        PathUtilService,
        ModalService,
        RecordFixerService,
        SchemaFixerService,
        SchemaValidationService,
        ShortcutActionService,
        WindowHrefService,
        TabsUtilService,
        ProblemsService,
        KatexService,
        TextDiffService,
        ListPageChangerService,
        CompareKeysBySchemaService
    ];

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
    var ShortcutsDirective = /** @class */ (function () {
        function ShortcutsDirective(el, shortcutActionService) {
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
            this.mousetrap = new mousetrap.Mousetrap(this.el.nativeElement);
        }
        ShortcutsDirective.prototype.ngOnChanges = function (changes) {
            var _this = this;
            var customShortcutKeysChange = changes['shortcuts'];
            if (customShortcutKeysChange) {
                var actionNames = Object.keys(this.actionNameToShortcut);
                // if custom shortcut keys are set
                if (this.shortcuts) {
                    actionNames.forEach(function (actionName) {
                        var shortcut = _this.actionNameToShortcut[actionName];
                        if (_this.shortcuts[actionName]) {
                            // override shortcut key
                            shortcut.key = _this.shortcuts[actionName];
                        }
                        _this.mousetrap.bind(shortcut.key, shortcut.action);
                    });
                }
                else {
                    actionNames.forEach(function (actionName) {
                        var shortcut = _this.actionNameToShortcut[actionName];
                        _this.mousetrap.bind(shortcut.key, shortcut.action);
                    });
                }
            }
        };
        ShortcutsDirective.prototype.ngOnDestroy = function () {
            var _this = this;
            Object.keys(this.actionNameToShortcut)
                .forEach(function (actionName) {
                _this.mousetrap.unbind(_this.actionNameToShortcut[actionName].key);
            });
        };
        return ShortcutsDirective;
    }());
    ShortcutsDirective.ɵfac = function ShortcutsDirective_Factory(t) { return new (t || ShortcutsDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(ShortcutActionService)); };
    ShortcutsDirective.ɵdir = i0.ɵɵdefineDirective({ type: ShortcutsDirective, selectors: [["", "shortcuts", ""]], inputs: { shortcuts: "shortcuts" }, features: [i0.ɵɵNgOnChangesFeature] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ShortcutsDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[shortcuts]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: ShortcutActionService }]; }, { shortcuts: [{
                    type: i0.Input
                }] });
    })();

    var _c0 = ["modal"];
    function ModalViewComponent_div_3_div_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "button", 12);
            i0.ɵɵlistener("click", function ModalViewComponent_div_3_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.options.onConfirm(); });
            i0.ɵɵelement(2, "i", 13);
            i0.ɵɵtext(3, " Confirm ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function ModalViewComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵelementStart(1, "div", 5);
            i0.ɵɵelementStart(2, "button", 6);
            i0.ɵɵlistener("click", function ModalViewComponent_div_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r6_1); i0.ɵɵnextContext(); var _r0 = i0.ɵɵreference(1); return _r0.hide(); });
            i0.ɵɵtext(3, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h4", 7);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 8);
            i0.ɵɵelement(7, "div", 9);
            i0.ɵɵelementStart(8, "div", 10);
            i0.ɵɵtemplate(9, ModalViewComponent_div_3_div_9_Template, 4, 0, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx_r1.options.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", ctx_r1.options.bodyHtml, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx_r1.options.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "confirm");
        }
    }
    var _c1 = function () { return { backdrop: false }; };
    var ModalViewComponent = /** @class */ (function (_super) {
        __extends(ModalViewComponent, _super);
        // TODO: unsubcribe on destroy
        function ModalViewComponent(modalService, changeDetectorRef) {
            var _this = _super.call(this) || this;
            _this.modalService = modalService;
            _this.changeDetectorRef = changeDetectorRef;
            return _this;
        }
        ModalViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.modalService
                .display$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (display) {
                display ? _this.modal.show() : _this.modal.hide();
            });
            this.modalService
                .options$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (options) {
                _this.options = options;
                _this.changeDetectorRef.markForCheck();
            });
        };
        ModalViewComponent.prototype.onShow = function () {
            if (this.options && this.options.onShow) {
                this.options.onShow();
            }
        };
        return ModalViewComponent;
    }(AbstractSubscriberComponent));
    ModalViewComponent.ɵfac = function ModalViewComponent_Factory(t) { return new (t || ModalViewComponent)(i0.ɵɵdirectiveInject(ModalService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    ModalViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalViewComponent, selectors: [["modal-view"]], viewQuery: function ModalViewComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "config", "onShown"], ["modal", "bs-modal"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "close", 3, "click"], [1, "modal-title"], [1, "modal-body"], [3, "innerHTML"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]], template: function ModalViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵlistener("onShown", function ModalViewComponent_Template_div_onShown_0_listener() { return ctx.onShow(); });
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, ModalViewComponent_div_3_Template, 10, 4, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("config", i0.ɵɵpureFunction0(2, _c1));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.options);
            }
        }, directives: [i21.ModalDirective, i24.NgIf, i24.NgSwitch, i24.NgSwitchCase], styles: [""], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ModalViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'modal-view',
                        styleUrls: [
                            './modal-view.component.scss'
                        ],
                        templateUrl: './modal-view.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: ModalService }, { type: i0.ChangeDetectorRef }]; }, { modal: [{
                    type: i0.ViewChild,
                    args: ['modal']
                }] });
    })();

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
    var SortAlphabeticallyPipe = /** @class */ (function () {
        function SortAlphabeticallyPipe() {
        }
        SortAlphabeticallyPipe.prototype.transform = function (set) {
            return set.sort(function (a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            });
        };
        return SortAlphabeticallyPipe;
    }());
    SortAlphabeticallyPipe.ɵfac = function SortAlphabeticallyPipe_Factory(t) { return new (t || SortAlphabeticallyPipe)(); };
    SortAlphabeticallyPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "sortAlphabetically", type: SortAlphabeticallyPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SortAlphabeticallyPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'sortAlphabetically',
                    }]
            }], null, null);
    })();

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
    var FilterByExpressionPipe = /** @class */ (function () {
        function FilterByExpressionPipe() {
        }
        FilterByExpressionPipe.prototype.transform = function (array, prefix) {
            var pattern = new RegExp(prefix, 'i');
            return array.filter(function (value) { return value.match(pattern); });
        };
        return FilterByExpressionPipe;
    }());
    FilterByExpressionPipe.ɵfac = function FilterByExpressionPipe_Factory(t) { return new (t || FilterByExpressionPipe)(); };
    FilterByExpressionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filterByExpression", type: FilterByExpressionPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilterByExpressionPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'filterByExpression',
                    }]
            }], null, null);
    })();

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
    function AddFieldDropdownComponent_div_0_ul_3_li_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵelementStart(1, "a", 9);
            i0.ɵɵlistener("click", function AddFieldDropdownComponent_div_0_ul_3_li_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r5_1); var key_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(3); return ctx_r4.onFieldSelect(key_r3); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r3 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(key_r3);
        }
    }
    function AddFieldDropdownComponent_div_0_ul_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ul", 4);
            i0.ɵɵelementStart(1, "li", 5);
            i0.ɵɵelementStart(2, "input", 6);
            i0.ɵɵlistener("ngModelChange", function AddFieldDropdownComponent_div_0_ul_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.expression = $event; })("click", function AddFieldDropdownComponent_div_0_ul_3_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r7_1); return $event.stopPropagation(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "li", 7);
            i0.ɵɵtemplate(4, AddFieldDropdownComponent_div_0_ul_3_li_4_Template, 3, 1, "li", 8);
            i0.ɵɵpipe(5, "sortAlphabetically");
            i0.ɵɵpipe(6, "filterByExpression");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r1.expression);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 2, i0.ɵɵpipeBind2(6, 4, ctx_r1.addableKeys, ctx_r1.expression)));
        }
    }
    function AddFieldDropdownComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵlistener("onShown", function AddFieldDropdownComponent_div_0_Template_div_onShown_0_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onDropdownShown(); });
            i0.ɵɵelementStart(1, "button", 2);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, AddFieldDropdownComponent_div_0_ul_3_Template, 7, 7, "ul", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("isDisabled", ctx_r0.isDisabled);
        }
    }
    var _c0$1 = ["*"];
    var AddFieldDropdownComponent = /** @class */ (function () {
        function AddFieldDropdownComponent(elementRef, domUtilService, keysStoreService) {
            this.elementRef = elementRef;
            this.domUtilService = domUtilService;
            this.keysStoreService = keysStoreService;
            this.expression = '';
            this.hidden = false;
        }
        AddFieldDropdownComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['schema'] || changes['fields']) {
                this.addableKeys = immutable.Set.fromKeys(this.schema.properties)
                    .subtract(this.fields)
                    .filter(function (field) { return !_this.schema.properties[field].hidden; });
                this.hidden = this.addableKeys.size === 0;
            }
        };
        AddFieldDropdownComponent.prototype.onDropdownShown = function () {
            var _this = this;
            setTimeout(function () { return _this.domUtilService.focusFirstInputChildByElement(_this.elementRef.nativeElement); });
        };
        AddFieldDropdownComponent.prototype.onFieldSelect = function (field) {
            var newFieldPathString = this.keysStoreService.addKey(this.pathString, field, this.schema);
            this.domUtilService.focusAndSelectFirstEditableChildById(newFieldPathString);
            this.expression = '';
        };
        return AddFieldDropdownComponent;
    }());
    AddFieldDropdownComponent.ɵfac = function AddFieldDropdownComponent_Factory(t) { return new (t || AddFieldDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(KeysStoreService)); };
    AddFieldDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddFieldDropdownComponent, selectors: [["add-field-dropdown"]], inputs: { schema: "schema", fields: "fields", pathString: "pathString", isDisabled: "isDisabled" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$1, decls: 1, vars: 1, consts: [["class", "btn-group add-field-dropdown-container", "dropdown", "", "keyboardNav", "true", 3, "isDisabled", "onShown", 4, "ngIf"], ["dropdown", "", "keyboardNav", "true", 1, "btn-group", "add-field-dropdown-container", 3, "isDisabled", "onShown"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-add-field-dropdown"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], [1, "dropdown-filter-container"], ["placeholder", "filter", 3, "ngModel", "ngModelChange", "click"], [1, "divider", "dropdown-divider"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]], template: function AddFieldDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, AddFieldDropdownComponent_div_0_Template, 4, 1, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.hidden);
            }
        }, directives: [i24.NgIf, i19.BsDropdownDirective, i19.BsDropdownToggleDirective, i19.BsDropdownMenuDirective, i25.DefaultValueAccessor, i25.NgControlStatus, i25.NgModel, i24.NgForOf], pipes: [SortAlphabeticallyPipe, FilterByExpressionPipe], styles: [".btn-add-field-dropdown[_ngcontent-%COMP%]{background:transparent;border:0;color:#2f4f4f;float:left;font-size:11px;font-weight:700;line-height:1;margin-bottom:2px;opacity:.4;padding:0 3px;text-shadow:0 1px 0 #fff}.btn-add-field-dropdown[_ngcontent-%COMP%]:hover{color:#00f;opacity:.6}.dropdown-filter-container[_ngcontent-%COMP%]{padding:0 3px}.dropdown-filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AddFieldDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'add-field-dropdown',
                        styleUrls: [
                            './add-field-dropdown.component.scss'
                        ],
                        templateUrl: './add-field-dropdown.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: DomUtilService }, { type: KeysStoreService }]; }, { schema: [{
                    type: i0.Input
                }], fields: [{
                    type: i0.Input
                }], pathString: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }] });
    })();

    function BottomConsoleBadgesComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 4);
            i0.ɵɵlistener("click", function BottomConsoleBadgesComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onBadgeClick($event, "Errors"); });
            i0.ɵɵelementStart(1, "span", 5);
            i0.ɵɵelement(2, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵpropertyInterpolate1("tooltip", "", ctx_r0.errorCount, " error(s)");
        }
    }
    function BottomConsoleBadgesComponent_a_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 7);
            i0.ɵɵlistener("click", function BottomConsoleBadgesComponent_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onBadgeClick($event, "Warnings"); });
            i0.ɵɵelementStart(1, "span", 8);
            i0.ɵɵelement(2, "i", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵpropertyInterpolate1("tooltip", "", ctx_r1.warningCount, " warning(s)");
        }
    }
    function BottomConsoleBadgesComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 10);
            i0.ɵɵlistener("click", function BottomConsoleBadgesComponent_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onBadgeClick($event, "Patches"); });
            i0.ɵɵelementStart(1, "span", 11);
            i0.ɵɵelement(2, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵpropertyInterpolate1("tooltip", "", ctx_r2.patchCount, " conflicts(s)");
        }
    }
    var BottomConsoleBadgesComponent = /** @class */ (function (_super) {
        __extends(BottomConsoleBadgesComponent, _super);
        function BottomConsoleBadgesComponent(problemsService, changeDetectorRef, jsonStoreService) {
            var _this = _super.call(this) || this;
            _this.problemsService = problemsService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.jsonStoreService = jsonStoreService;
            _this.badgeClick = new i0.EventEmitter();
            _this.errorCount = 0;
            _this.warningCount = 0;
            _this.patchCount = 0;
            return _this;
        }
        BottomConsoleBadgesComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.problemsService.errorCount$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (count) {
                _this.errorCount = count;
                // FIXME: use markForCheck() instead
                // markForCheck() wasn't working for mysterious reasons for initial update
                _this.changeDetectorRef.detectChanges();
            });
            this.problemsService.warningCount$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (count) {
                _this.warningCount = count;
                // FIXME: use markForCheck() instead
                // markForCheck() wasn't working for mysterious reasons for initial update
                _this.changeDetectorRef.detectChanges();
            });
            this.jsonStoreService.patchesByPath$
                .pipe(operators.map(function (patchesByPath) {
                return Object.keys(patchesByPath)
                    .map(function (path) { return patchesByPath[path].length; })
                    .reduce(function (sum, patchCountPerPath) { return sum + patchCountPerPath; }, 0);
            }))
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (patchCount) {
                _this.patchCount = patchCount;
                _this.changeDetectorRef.markForCheck();
            });
        };
        BottomConsoleBadgesComponent.prototype.onBadgeClick = function (event, badgeName) {
            event.preventDefault();
            this.badgeClick.emit(badgeName);
        };
        return BottomConsoleBadgesComponent;
    }(AbstractSubscriberComponent));
    BottomConsoleBadgesComponent.ɵfac = function BottomConsoleBadgesComponent_Factory(t) { return new (t || BottomConsoleBadgesComponent)(i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(JsonStoreService)); };
    BottomConsoleBadgesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BottomConsoleBadgesComponent, selectors: [["bottom-console-badges"]], outputs: { badgeClick: "badgeClick" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [[1, "badges-container"], ["class", "error", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["class", "warning", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["class", "patch", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["placement", "right", 1, "error", 3, "tooltip", "click"], [1, "error", "fa-stack", "fa-lg"], [1, "fa", "fa-times", "fa-stack-1x", "fa-inverse"], ["placement", "right", 1, "warning", 3, "tooltip", "click"], [1, "warning", "fa-stack", "fa-lg"], [1, "fa", "fa-exclamation", "fa-stack-1x", "fa-inverse"], ["placement", "right", 1, "patch", 3, "tooltip", "click"], [1, "patch", "fa-stack", "fa-lg"], [1, "fa", "fa-bolt", "fa-stack-1x", "fa-inverse"]], template: function BottomConsoleBadgesComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, BottomConsoleBadgesComponent_a_1_Template, 3, 1, "a", 1);
                i0.ɵɵtemplate(2, BottomConsoleBadgesComponent_a_2_Template, 3, 1, "a", 2);
                i0.ɵɵtemplate(3, BottomConsoleBadgesComponent_a_3_Template, 3, 1, "a", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.errorCount > 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.warningCount > 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.patchCount > 0);
            }
        }, directives: [i24.NgIf, i16.TooltipDirective], styles: [".error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #d14024}.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#d14024;padding-bottom:2px}.warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #fbd503}.warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fbd503}.patch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #f96509}.patch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f96509}a[_ngcontent-%COMP%]{cursor:pointer;padding-top:7px;text-decoration:none}a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:all .35s ease-in-out}a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{font-size:1.1em}.badges-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;width:100%}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;margin-top:5px;width:30px}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-of-type{border-top:2px solid #283948;margin-top:10px}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{align-items:center;border-radius:20%;display:flex;height:30px}@media screen and (max-width:1440px){.badges-container[_ngcontent-%COMP%]{flex-direction:column}}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BottomConsoleBadgesComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-console-badges',
                        styleUrls: [
                            './bottom-console-badges.component.scss'
                        ],
                        templateUrl: './bottom-console-badges.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: ProblemsService }, { type: i0.ChangeDetectorRef }, { type: JsonStoreService }]; }, { badgeClick: [{
                    type: i0.Output
                }] });
    })();

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
    var AddAlwaysShowFieldsPipe = /** @class */ (function () {
        function AddAlwaysShowFieldsPipe() {
        }
        AddAlwaysShowFieldsPipe.prototype.transform = function (fields, schema) {
            var alwaysShowFields = schema.alwaysShow || [];
            return fields.union(alwaysShowFields);
        };
        return AddAlwaysShowFieldsPipe;
    }());
    AddAlwaysShowFieldsPipe.ɵfac = function AddAlwaysShowFieldsPipe_Factory(t) { return new (t || AddAlwaysShowFieldsPipe)(); };
    AddAlwaysShowFieldsPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "addAlwaysShowFields", type: AddAlwaysShowFieldsPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AddAlwaysShowFieldsPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'addAlwaysShowFields'
                    }]
            }], null, null);
    })();

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
    var FilterHiddenFieldsPipe = /** @class */ (function () {
        function FilterHiddenFieldsPipe() {
        }
        /**
         * It filters out `hidden` fields
         *
         * @param keys
         * @param schema - the `schema` that has object schema which contains each key in `keys`
         * @return - filtered keys
         */
        FilterHiddenFieldsPipe.prototype.transform = function (keys, schema, adminMode) {
            var schemaProps = schema.properties;
            if (!keys) {
                return undefined;
            }
            return keys
                .filter(function (key) {
                if (!schemaProps[key]) {
                    throw new Error("\"" + key + "\" is not specified as property in \n" + JSON.stringify(schemaProps, undefined, 2));
                }
                return !schemaProps[key].hidden || adminMode;
            });
        };
        return FilterHiddenFieldsPipe;
    }());
    FilterHiddenFieldsPipe.ɵfac = function FilterHiddenFieldsPipe_Factory(t) { return new (t || FilterHiddenFieldsPipe)(); };
    FilterHiddenFieldsPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filterHiddenFields", type: FilterHiddenFieldsPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilterHiddenFieldsPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'filterHiddenFields',
                    }]
            }], null, null);
    })();

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
    function TreeMenuItemComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 3);
            i0.ɵɵlistener("click", function TreeMenuItemComponent_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.collapse(); });
            i0.ɵɵtext(1, " [x]");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("hidden", ctx_r0.isCollapsed);
        }
    }
    function TreeMenuItemComponent_div_4_div_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵelement(1, "tree-menu-item", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r7 = ctx.$implicit;
            var ctx_r6 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", key_r7)("value", ctx_r6.value.get(key_r7))("schema", ctx_r6.schema.properties[key_r7])("path", ctx_r6.getChildPath(key_r7))("depth", ctx_r6.depth + 1);
        }
    }
    function TreeMenuItemComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, TreeMenuItemComponent_div_4_div_2_li_1_Template, 2, 5, "li", 6);
            i0.ɵɵpipe(2, "sortAlphabetically");
            i0.ɵɵpipe(3, "addAlwaysShowFields");
            i0.ɵɵpipe(4, "filterHiddenFields");
            i0.ɵɵpipe(5, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 2, i0.ɵɵpipeBind2(3, 4, i0.ɵɵpipeBind3(4, 7, ctx_r4.keys, ctx_r4.schema, i0.ɵɵpipeBind1(5, 11, ctx_r4.adminMode$)), ctx_r4.schema)))("ngForTrackBy", ctx_r4.trackByElement);
        }
    }
    function TreeMenuItemComponent_div_4_div_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵelement(1, "tree-menu-item", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r9 = ctx.$implicit;
            var i_r10 = ctx.index;
            var ctx_r8 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", i_r10)("value", element_r9)("schema", ctx_r8.schema.items)("path", ctx_r8.getChildPath(i_r10))("depth", ctx_r8.depth + 1);
        }
    }
    function TreeMenuItemComponent_div_4_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, TreeMenuItemComponent_div_4_div_3_li_1_Template, 2, 5, "li", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r5.value)("ngForTrackBy", ctx_r5.trackByElement);
        }
    }
    function TreeMenuItemComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵelementStart(1, "ul");
            i0.ɵɵtemplate(2, TreeMenuItemComponent_div_4_div_2_Template, 6, 13, "div", 5);
            i0.ɵɵtemplate(3, TreeMenuItemComponent_div_4_div_3_Template, 2, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngSwitch", ctx_r1.schema.type)("hidden", ctx_r1.isCollapsed);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngSwitchCase", "object");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "array");
        }
    }
    var TreeMenuItemComponent = /** @class */ (function () {
        function TreeMenuItemComponent(windowHrefService, domUtilService, pathUtilService, appGlobalsService) {
            this.windowHrefService = windowHrefService;
            this.domUtilService = domUtilService;
            this.pathUtilService = pathUtilService;
            this.appGlobalsService = appGlobalsService;
            this.isCollapsed = true;
        }
        TreeMenuItemComponent.prototype.ngOnInit = function () {
            this.href = this.windowHrefService.hrefWithoutHash + "#" + this.path;
        };
        TreeMenuItemComponent.prototype.ngOnChanges = function (changes) {
            if (changes['value'] && this.value && this.schema.type === 'object') {
                this.keys = this.value.keySeq().toSet();
            }
        };
        TreeMenuItemComponent.prototype.toggle = function (event) {
            // fix to trigger :focus css after focusAndSelectFirstInputChildById called.
            event.preventDefault();
            this.isCollapsed = !this.isCollapsed;
            this.domUtilService.focusAndSelectFirstEditableChildById(this.path, true);
        };
        TreeMenuItemComponent.prototype.collapse = function () {
            this.isCollapsed = true;
        };
        Object.defineProperty(TreeMenuItemComponent.prototype, "isCollapsable", {
            get: function () {
                var schemaType = this.schema.type;
                return this.isNotLeaf && (schemaType === 'object' || schemaType === 'array');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TreeMenuItemComponent.prototype, "maxDepth", {
            get: function () {
                return this.appGlobalsService.config.menuMaxDepth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TreeMenuItemComponent.prototype, "isNotLeaf", {
            get: function () {
                return this.maxDepth === undefined || this.depth < this.maxDepth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TreeMenuItemComponent.prototype, "adminMode$", {
            get: function () {
                return this.appGlobalsService.adminMode$;
            },
            enumerable: false,
            configurable: true
        });
        TreeMenuItemComponent.prototype.getChildPath = function (indexOrKey) {
            return "" + this.path + this.pathUtilService.separator + indexOrKey;
        };
        TreeMenuItemComponent.prototype.trackByElement = function (index, element) {
            return element;
        };
        return TreeMenuItemComponent;
    }());
    TreeMenuItemComponent.ɵfac = function TreeMenuItemComponent_Factory(t) { return new (t || TreeMenuItemComponent)(i0.ɵɵdirectiveInject(WindowHrefService), i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(AppGlobalsService)); };
    TreeMenuItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TreeMenuItemComponent, selectors: [["tree-menu-item"]], inputs: { label: "label", value: "value", schema: "schema", path: "path", depth: "depth" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 4, consts: [[3, "href", "click"], [3, "hidden", "click", 4, "ngIf"], [3, "ngSwitch", "hidden", 4, "ngIf"], [3, "hidden", "click"], [3, "ngSwitch", "hidden"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "label", "value", "schema", "path", "depth"]], template: function TreeMenuItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "a", 0);
                i0.ɵɵlistener("click", function TreeMenuItemComponent_Template_a_click_1_listener($event) { return ctx.toggle($event); });
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, TreeMenuItemComponent_a_3_Template, 2, 1, "a", 1);
                i0.ɵɵtemplate(4, TreeMenuItemComponent_div_4_Template, 4, 4, "div", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("href", ctx.href, i0.ɵɵsanitizeUrl);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(ctx.label);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isCollapsable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isNotLeaf);
            }
        }, directives: [i24.NgIf, i24.NgSwitch, i24.NgSwitchCase, i24.NgForOf, TreeMenuItemComponent], pipes: [SortAlphabeticallyPipe, AddAlwaysShowFieldsPipe, FilterHiddenFieldsPipe, i24.AsyncPipe], styles: ["a[_ngcontent-%COMP%]{color:#e0dfdf}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TreeMenuItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'tree-menu-item',
                        styleUrls: [
                            './tree-menu-item.component.scss'
                        ],
                        templateUrl: './tree-menu-item.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: WindowHrefService }, { type: DomUtilService }, { type: PathUtilService }, { type: AppGlobalsService }]; }, { label: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }], depth: [{
                    type: i0.Input
                }] });
    })();

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
    function TreeMenuComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵelement(1, "tree-menu-item", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", key_r1)("value", ctx_r0.record.get(key_r1))("schema", ctx_r0.schema.properties[key_r1])("path", ctx_r0.getChildPath(key_r1))("depth", 1);
        }
    }
    var TreeMenuComponent = /** @class */ (function () {
        function TreeMenuComponent(domUtilService, pathUtilService, appGlobalsService) {
            this.domUtilService = domUtilService;
            this.pathUtilService = pathUtilService;
            this.appGlobalsService = appGlobalsService;
            this.prefixOrPath = '';
        }
        TreeMenuComponent.prototype.ngOnChanges = function (changes) {
            if (changes['record']) {
                this.keys = this.record.keySeq().toSet();
            }
        };
        TreeMenuComponent.prototype.getChildPath = function (key) {
            return "" + this.pathUtilService.separator + key;
        };
        TreeMenuComponent.prototype.trackByElement = function (index, element) {
            return element;
        };
        Object.defineProperty(TreeMenuComponent.prototype, "adminMode$", {
            get: function () {
                return this.appGlobalsService.adminMode$;
            },
            enumerable: false,
            configurable: true
        });
        return TreeMenuComponent;
    }());
    TreeMenuComponent.ɵfac = function TreeMenuComponent_Factory(t) { return new (t || TreeMenuComponent)(i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(AppGlobalsService)); };
    TreeMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TreeMenuComponent, selectors: [["tree-menu"]], inputs: { record: "record", schema: "schema" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 13, consts: [[1, "tree-menu-container"], [1, "menu-item-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "label", "value", "schema", "path", "depth"]], template: function TreeMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "ul", 1);
                i0.ɵɵtemplate(2, TreeMenuComponent_li_2_Template, 2, 5, "li", 2);
                i0.ɵɵpipe(3, "sortAlphabetically");
                i0.ɵɵpipe(4, "addAlwaysShowFields");
                i0.ɵɵpipe(5, "filterHiddenFields");
                i0.ɵɵpipe(6, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, i0.ɵɵpipeBind2(4, 4, i0.ɵɵpipeBind3(5, 7, ctx.keys, ctx.schema, i0.ɵɵpipeBind1(6, 11, ctx.adminMode$)), ctx.schema)))("ngForTrackBy", ctx.trackByElement);
            }
        }, directives: [i24.NgForOf, TreeMenuItemComponent], pipes: [SortAlphabeticallyPipe, AddAlwaysShowFieldsPipe, FilterHiddenFieldsPipe, i24.AsyncPipe], styles: ["div.tree-menu-container[_ngcontent-%COMP%]{overflow-y:auto;padding:8px 2px 0 0;text-align:center}ul.menu-item-container[_ngcontent-%COMP%]{list-style:none;padding-left:0;padding-top:8px;text-align:left}ul.menu-item-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:2px}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TreeMenuComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'tree-menu',
                        styleUrls: [
                            './tree-menu.component.scss'
                        ],
                        templateUrl: './tree-menu.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: DomUtilService }, { type: PathUtilService }, { type: AppGlobalsService }]; }, { record: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }] });
    })();

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
    function TitleDropdownComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 4);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        }
    }
    var _c0$2 = ["*"];
    var TitleDropdownComponent = /** @class */ (function () {
        function TitleDropdownComponent() {
        }
        return TitleDropdownComponent;
    }());
    TitleDropdownComponent.ɵfac = function TitleDropdownComponent_Factory(t) { return new (t || TitleDropdownComponent)(); };
    TitleDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TitleDropdownComponent, selectors: [["title-dropdown"]], inputs: { title: "title", isDisabled: "isDisabled" }, ngContentSelectors: _c0$2, decls: 5, vars: 2, consts: [["dropdown", "", 1, "title-dropdown-container", 3, "isDisabled"], ["dropdownToggle", "", 1, "btn", "title-dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"]], template: function TitleDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵtext(2);
                i0.ɵɵelement(3, "span", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, TitleDropdownComponent_ul_4_Template, 2, 0, "ul", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("isDisabled", ctx.isDisabled);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
            }
        }, directives: [i19.BsDropdownDirective, i19.BsDropdownToggleDirective, i19.BsDropdownMenuDirective], styles: [".title-dropdown-toggle[_ngcontent-%COMP%]{background:transparent;border:none;color:#c1c1c1;font-size:13px;font-weight:700;padding:0 3px}.title-dropdown-toggle[_ngcontent-%COMP%]:focus{outline:0}.title-dropdown-toggle[_ngcontent-%COMP%]:hover{color:#6b6b6b}.dropdown-menu[_ngcontent-%COMP%]{left:auto;min-width:120px;top:auto}.title-dropdown-container[_ngcontent-%COMP%]{position:relative}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TitleDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'title-dropdown',
                        styleUrls: [
                            './title-dropdown.component.scss'
                        ],
                        templateUrl: './title-dropdown.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { title: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }] });
    })();

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
    var FindReplaceComponent = /** @class */ (function () {
        function FindReplaceComponent(changeDetectionRef, domSanitizer, findReplaceAllService, jsonStoreService, modalService) {
            this.changeDetectionRef = changeDetectionRef;
            this.domSanitizer = domSanitizer;
            this.findReplaceAllService = findReplaceAllService;
            this.jsonStoreService = jsonStoreService;
            this.modalService = modalService;
        }
        FindReplaceComponent.prototype.onKeypress = function (key) {
            if (key === 'Enter') {
                this.findAndReplace();
            }
        };
        FindReplaceComponent.prototype.findAndReplace = function () {
            var _this = this;
            if (!(this.find && this.replace)) {
                return;
            }
            var value = this.jsonStoreService.getIn(this.path);
            var result = this.findReplaceAllService
                .findReplaceInImmutable(value, this.schema, this.find, this.replace, this.exactPhrase);
            this.replaced = result.replaced;
            var stringyfiedDiffHtml = JSON.stringify(result.diffHtml, undefined, 2);
            this.modalService.displayModal({
                title: 'After Replace',
                bodyHtml: this.domSanitizer.bypassSecurityTrustHtml("<pre class=\"max-height-70-vh\"><code>" + stringyfiedDiffHtml + "</code></pre>"),
                type: 'confirm',
                onConfirm: function () {
                    _this.modalService.closeCurrentModal();
                    _this.jsonStoreService.setIn(_this.path, _this.replaced);
                    _this.cleanParameters();
                }
            });
        };
        FindReplaceComponent.prototype.cleanParameters = function () {
            this.find = '';
            this.replace = '';
            this.exactPhrase = false;
            this.changeDetectionRef.markForCheck();
        };
        return FindReplaceComponent;
    }());
    FindReplaceComponent.ɵfac = function FindReplaceComponent_Factory(t) { return new (t || FindReplaceComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$1.DomSanitizer), i0.ɵɵdirectiveInject(FindReplaceAllService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(ModalService)); };
    FindReplaceComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FindReplaceComponent, selectors: [["find-replace"]], inputs: { path: "path", schema: "schema" }, decls: 10, vars: 3, consts: [[1, "find-replace-container"], [1, "top-container-item"], ["placeholder", "Find", 3, "ngModel", "ngModelChange", "keypress"], ["placeholder", "Replace", 3, "ngModel", "ngModelChange", "keypress"], [1, "bottom-container-item"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "keypress"], [1, "fa", "fa-arrow-circle-right", 3, "click"]], template: function FindReplaceComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "input", 2);
                i0.ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_2_listener($event) { return ctx.find = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_2_listener($event) { return ctx.onKeypress($event.key); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div");
                i0.ɵɵelementStart(4, "input", 3);
                i0.ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_4_listener($event) { return ctx.replace = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_4_listener($event) { return ctx.onKeypress($event.key); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵelementStart(6, "label");
                i0.ɵɵtext(7, " Exact phrase ");
                i0.ɵɵelementStart(8, "input", 5);
                i0.ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_8_listener($event) { return ctx.exactPhrase = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_8_listener($event) { return ctx.onKeypress($event.key); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "i", 6);
                i0.ɵɵlistener("click", function FindReplaceComponent_Template_i_click_9_listener() { return ctx.findAndReplace(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.find);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.replace);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.exactPhrase);
            }
        }, directives: [i25.DefaultValueAccessor, i25.NgControlStatus, i25.NgModel, i25.CheckboxControlValueAccessor], styles: [".find-replace-container[_ngcontent-%COMP%]{margin:4px 3px 3px 2px}.find-replace-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:13px}.top-container-item[_ngcontent-%COMP%]{margin-bottom:3px}.bottom-container-item[_ngcontent-%COMP%]{margin-top:5px}.bottom-container-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;font-size:20px;padding-right:2px}label[_ngcontent-%COMP%]{color:#7e7e7e;font-size:12px;font-weight:400}.find-replace-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .horizontal-padding[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FindReplaceComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'find-replace',
                        styleUrls: [
                            './find-replace.component.scss'
                        ],
                        templateUrl: './find-replace.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$1.DomSanitizer }, { type: FindReplaceAllService }, { type: JsonStoreService }, { type: ModalService }]; }, { path: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }] });
    })();

    /**
     * This is the base class for fields
     * WARNING:
     *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
     *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
     *
     * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
     */
    var AbstractFieldComponent = /** @class */ (function (_super) {
        __extends(AbstractFieldComponent, _super);
        function AbstractFieldComponent(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService) {
            var _this = _super.call(this) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.pathUtilService = pathUtilService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.jsonStoreService = jsonStoreService;
            _this.pathCache = {};
            _this.externalErrors = [];
            // patches grouped by op because they different UI representation
            _this.replaceJsonPatches = [];
            _this.addJsonPatches = [];
            return _this;
        }
        AbstractFieldComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.problemsService.externalCategorizedProblems$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (externalCategorizedProblemMap) {
                _this.externalErrors = externalCategorizedProblemMap.errors[_this.pathString] || [];
                _this.changeDetectorRef.markForCheck();
            });
            this.jsonStoreService.patchesByPath$
                .pipe(operators.map(function (patchesByPath) { return patchesByPath[_this.pathString]; }))
                .pipe(operators.map(function (patches) { return _this.groupJsonPatchesByOp(patches); }))
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (patchesByOp) {
                _this.removeJsonPatch = patchesByOp.remove[0];
                _this.addJsonPatches = patchesByOp.add;
                _this.replaceJsonPatches = patchesByOp.replace;
                _this.changeDetectorRef.markForCheck();
            });
        };
        AbstractFieldComponent.prototype.groupJsonPatchesByOp = function (patches) {
            var group = {
                add: [],
                remove: [],
                replace: []
            };
            if (patches) {
                patches.forEach(function (patch) {
                    var opPatches = group[patch.op];
                    opPatches.push(patch);
                });
            }
            return group;
        };
        AbstractFieldComponent.prototype.ngOnChanges = function (changes) {
            if (changes['path']) {
                this.pathString = this.pathUtilService.toPathString(this.path);
            }
        };
        /**
         * Gets path for child, returns from `pathCache` if it is a hit
         * in order not to re-render child component due to reference change its path.
         *
         * @param key - index or field name for child
         */
        AbstractFieldComponent.prototype.getPathForChild = function (key) {
            if (!this.pathCache[key] || this.pathCache[key][this.path.length - 1] !== this.path[this.path.length - 1]) {
                this.pathCache[key] = this.path.concat(key);
            }
            return this.pathCache[key];
        };
        AbstractFieldComponent.prototype.hasErrors = function () {
            return this.externalErrors.length > 0;
        };
        Object.defineProperty(AbstractFieldComponent.prototype, "disabled", {
            get: function () {
                return this.schema.disabled && !this.appGlobalsService.adminMode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractFieldComponent.prototype, "redLeftBorderClass", {
            get: function () {
                return this.removeJsonPatch ? 'red-left-border' : '';
            },
            enumerable: false,
            configurable: true
        });
        AbstractFieldComponent.prototype.trackByElement = function (index, element) {
            return element;
        };
        AbstractFieldComponent.prototype.trackByIndex = function (index, element) {
            return index;
        };
        return AbstractFieldComponent;
    }(AbstractSubscriberComponent));
    AbstractFieldComponent.ɵfac = function AbstractFieldComponent_Factory(t) { return new (t || AbstractFieldComponent)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(JsonStoreService)); };
    AbstractFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AbstractFieldComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function AbstractFieldComponent_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AbstractFieldComponent, [{
                type: i0.Component,
                args: [{
                        template: ''
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: PathUtilService }, { type: i0.ChangeDetectorRef }, { type: JsonStoreService }]; }, null);
    })();

    /**
     * Abstract component to share code of common operations of all array fields
     *
     * Instance properties declared here only to resolve syntax errors.
     * Hence they need to be declared in children extending components (with decarators if necessary)
     */
    var AbstractListFieldComponent = /** @class */ (function (_super) {
        __extends(AbstractListFieldComponent, _super);
        function AbstractListFieldComponent(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
            var _this = _super.call(this, appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.pathUtilService = pathUtilService;
            _this.changeDetectorRef = changeDetectorRef;
            return _this;
        }
        /**
         * @param index - Index of the element that is moved
         * @param  direction - Movement direction. -1 for UP, +1 for DOWN
         */
        AbstractListFieldComponent.prototype.moveElement = function (index, direction) {
            this.jsonStoreService.moveIn(this.path, index, direction);
        };
        /**
         * @param index - Index of the element to be deleted
         */
        AbstractListFieldComponent.prototype.deleteElement = function (index) {
            var elementPath = this.path.concat(index);
            this.jsonStoreService.removeIn(elementPath);
            // empty list as notSetValue, because there can be lists rendered on the UI, while they are absent in json (alwaysShow)
            this.values = this.jsonStoreService.getIn(this.path, immutable.List());
        };
        AbstractListFieldComponent.prototype.getPathStringForChild = function (index) {
            return "" + this.pathString + this.pathUtilService.separator + index;
        };
        AbstractListFieldComponent.prototype.hasPatchOrChildrenHavePatch = function () {
            return this.jsonStoreService.hasPatchOrChildrenHavePatch(this.pathString);
        };
        return AbstractListFieldComponent;
    }(AbstractFieldComponent));

    var _c0$3 = ["table-item-field", ""];
    function TableItemFieldComponent_td_0_add_new_element_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "add-new-element-button", 5);
        }
        if (rf & 2) {
            var key_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("path", ctx_r3.getPathForChild(key_r1))("schema", ctx_r3.schema.properties[key_r1]);
        }
    }
    function TableItemFieldComponent_td_0_patch_actions_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "patch-actions", 6);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("patch", ctx_r4.removeJsonPatch);
        }
    }
    function TableItemFieldComponent_td_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 1);
            i0.ɵɵelement(1, "any-type-field", 2);
            i0.ɵɵpipe(2, "selfOrEmpty");
            i0.ɵɵtemplate(3, TableItemFieldComponent_td_0_add_new_element_button_3_Template, 1, 2, "add-new-element-button", 3);
            i0.ɵɵtemplate(4, TableItemFieldComponent_td_0_patch_actions_4_Template, 1, 1, "patch-actions", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r1 = ctx.$implicit;
            var isFirst_r2 = ctx.first;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("width", ctx_r0.schema.properties[key_r1].columnWidth + "%");
            i0.ɵɵproperty("ngClass", isFirst_r2 ? ctx_r0.redLeftBorderClass : "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", i0.ɵɵpipeBind2(2, 8, ctx_r0.value.get(key_r1), ctx_r0.schema.properties[key_r1]))("schema", ctx_r0.schema.properties[key_r1])("path", ctx_r0.getPathForChild(key_r1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.schema.properties[key_r1].type === "array");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.removeJsonPatch && isFirst_r2);
        }
    }
    var _c1$1 = ["*"];
    var TableItemFieldComponent = /** @class */ (function (_super) {
        __extends(TableItemFieldComponent, _super);
        function TableItemFieldComponent(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
            var _this = _super.call(this, appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.pathUtilService = pathUtilService;
            _this.changeDetectorRef = changeDetectorRef;
            return _this;
        }
        return TableItemFieldComponent;
    }(AbstractFieldComponent));
    TableItemFieldComponent.ɵfac = function TableItemFieldComponent_Factory(t) { return new (t || TableItemFieldComponent)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    TableItemFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableItemFieldComponent, selectors: [["", "table-item-field", ""]], inputs: { value: "value", schema: "schema", path: "path", keys: "keys" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$3, ngContentSelectors: _c1$1, decls: 2, vars: 2, consts: [[3, "width", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngClass"], [3, "value", "schema", "path"], [3, "path", "schema", 4, "ngIf"], [3, "patch", 4, "ngIf"], [3, "path", "schema"], [3, "patch"]], template: function TableItemFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, TableItemFieldComponent_td_0_Template, 5, 11, "td", 0);
                i0.ɵɵprojection(1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.keys)("ngForTrackBy", ctx.trackByElement);
            }
        }, styles: [""], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TableItemFieldComponent, [{
                type: i0.Component,
                args: [{
                        // Defined as attribute selector not to break table > tr > td html structure
                        // tslint:disable-next-line
                        selector: '[table-item-field]',
                        styleUrls: [
                            './table-item-field.component.scss'
                        ],
                        templateUrl: './table-item-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: i0.ChangeDetectorRef }]; }, { value: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }], keys: [{
                    type: i0.Input
                }] });
    })();

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
    function ListActionGroupComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 4);
            i0.ɵɵlistener("click", function ListActionGroupComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onMove.emit(-1); });
            i0.ɵɵelement(1, "i", 5);
            i0.ɵɵelementEnd();
        }
    }
    function ListActionGroupComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 6);
            i0.ɵɵlistener("click", function ListActionGroupComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onMove.emit(1); });
            i0.ɵɵelement(1, "i", 7);
            i0.ɵɵelementEnd();
        }
    }
    var ListActionGroupComponent = /** @class */ (function () {
        function ListActionGroupComponent() {
            this.onDelete = new i0.EventEmitter();
            this.onMove = new i0.EventEmitter();
        }
        return ListActionGroupComponent;
    }());
    ListActionGroupComponent.ɵfac = function ListActionGroupComponent_Factory(t) { return new (t || ListActionGroupComponent)(); };
    ListActionGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListActionGroupComponent, selectors: [["list-action-group"]], inputs: { canMove: "canMove", isDisabled: "isDisabled" }, outputs: { onDelete: "onDelete", onMove: "onMove" }, decls: 5, vars: 4, consts: [["type", "button", 1, "editor-btn-delete", 3, "click"], [1, "fa", "fa-times"], ["type", "button", "class", "editor-btn-move-up", 3, "click", 4, "ngIf"], ["type", "button", "class", "editor-btn-move-down", 3, "click", 4, "ngIf"], ["type", "button", 1, "editor-btn-move-up", 3, "click"], [1, "fa", "fa-chevron-up"], ["type", "button", 1, "editor-btn-move-down", 3, "click"], [1, "fa", "fa-chevron-down"]], template: function ListActionGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "button", 0);
                i0.ɵɵlistener("click", function ListActionGroupComponent_Template_button_click_1_listener() { return ctx.onDelete.emit(); });
                i0.ɵɵelement(2, "i", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, ListActionGroupComponent_button_3_Template, 2, 0, "button", 2);
                i0.ɵɵtemplate(4, ListActionGroupComponent_button_4_Template, 2, 0, "button", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("disabled", ctx.isDisabled);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.canMove);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.canMove);
            }
        }, directives: [i24.NgIf], styles: [""], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ListActionGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'list-action-group',
                        encapsulation: i0.ViewEncapsulation.None,
                        styleUrls: [
                            './list-action-group.component.scss'
                        ],
                        templateUrl: './list-action-group.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { canMove: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], onDelete: [{
                    type: i0.Output
                }], onMove: [{
                    type: i0.Output
                }] });
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    function PatchActionsComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 1);
            i0.ɵɵlistener("click", function PatchActionsComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onAddNewClick(); });
            i0.ɵɵelement(1, "i", 5);
            i0.ɵɵelementEnd();
        }
    }
    var PatchActionsComponent = /** @class */ (function () {
        function PatchActionsComponent(jsonStoreService) {
            this.jsonStoreService = jsonStoreService;
        }
        PatchActionsComponent.prototype.onAcceptClick = function () {
            this.jsonStoreService.applyPatch(this.patch);
        };
        PatchActionsComponent.prototype.onRejectClick = function () {
            this.jsonStoreService.rejectPatch(this.patch);
        };
        PatchActionsComponent.prototype.onAddNewClick = function () {
            this.patch.op = 'add-as-new';
            this.jsonStoreService.applyPatch(this.patch);
        };
        return PatchActionsComponent;
    }());
    PatchActionsComponent.ɵfac = function PatchActionsComponent_Factory(t) { return new (t || PatchActionsComponent)(i0.ɵɵdirectiveInject(JsonStoreService)); };
    PatchActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PatchActionsComponent, selectors: [["patch-actions"]], inputs: { patch: "patch", addActionEnabled: "addActionEnabled" }, decls: 6, vars: 2, consts: [["tabindex", "-1", 1, "patch-actions-container", 3, "ngClass"], [3, "click"], [1, "fa", "fa-check-circle"], [1, "fa", "fa-times-circle"], [3, "click", 4, "ngIf"], [1, "fa", "fa-plus-circle"]], template: function PatchActionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function PatchActionsComponent_Template_button_click_1_listener() { return ctx.onAcceptClick(); });
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 1);
                i0.ɵɵlistener("click", function PatchActionsComponent_Template_button_click_3_listener() { return ctx.onRejectClick(); });
                i0.ɵɵelement(4, "i", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, PatchActionsComponent_button_5_Template, 2, 0, "button", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.patch.op);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.addActionEnabled);
            }
        }, directives: [i24.NgClass, i24.NgIf], styles: [".patch-actions-container[_ngcontent-%COMP%]{display:inline-block;padding-left:2px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{background-color:transparent;border:none;padding:1px 3px 1.5px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:18px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%]{color:#27ae60}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-times-circle[_ngcontent-%COMP%]{color:#e74c3c}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-plus-circle[_ngcontent-%COMP%]{color:#f1c40f}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PatchActionsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'patch-actions',
                        styleUrls: [
                            './patch-actions.component.scss'
                        ],
                        templateUrl: './patch-actions.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: JsonStoreService }]; }, { patch: [{
                    type: i0.Input
                }], addActionEnabled: [{
                    type: i0.Input
                }] });
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var TypeOfPipe = /** @class */ (function () {
        function TypeOfPipe() {
        }
        /**
         * `typeof` with extra 'array'
         */
        TypeOfPipe.prototype.transform = function (value) {
            if (Array.isArray(value)) {
                return 'array';
            }
            return typeof value;
        };
        return TypeOfPipe;
    }());
    TypeOfPipe.ɵfac = function TypeOfPipe_Factory(t) { return new (t || TypeOfPipe)(); };
    TypeOfPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "typeOf", type: TypeOfPipe, pure: false });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TypeOfPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'typeOf',
                        pure: false
                    }]
            }], null, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2018 CERN.
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
    var SortKeysBySchemaPipe = /** @class */ (function () {
        function SortKeysBySchemaPipe(compareKeysBySchemaService) {
            this.compareKeysBySchemaService = compareKeysBySchemaService;
        }
        /**
         * WARN: uses Array.sort hence mutates the first param
         *
         * @param keys keys in the object
         * @param schema schema of the parent object
         */
        SortKeysBySchemaPipe.prototype.transform = function (keys, schema) {
            var _this = this;
            return keys
                .sort(function (a, b) { return _this.compareKeysBySchemaService.compare(a, b, schema); });
        };
        return SortKeysBySchemaPipe;
    }());
    SortKeysBySchemaPipe.ɵfac = function SortKeysBySchemaPipe_Factory(t) { return new (t || SortKeysBySchemaPipe)(i0.ɵɵdirectiveInject(CompareKeysBySchemaService)); };
    SortKeysBySchemaPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "sortKeysBySchema", type: SortKeysBySchemaPipe, pure: false });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SortKeysBySchemaPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'sortKeysBySchema',
                        pure: false,
                    }]
            }], function () { return [{ type: CompareKeysBySchemaService }]; }, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var KeysPipe = /** @class */ (function () {
        function KeysPipe() {
        }
        /**
         * Transforms object to array of its keys (Object.keys replacement for templates)
         */
        KeysPipe.prototype.transform = function (object) {
            if (!object) {
                return null;
            }
            return Object.keys(object);
        };
        return KeysPipe;
    }());
    KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
    KeysPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "keys", type: KeysPipe, pure: false });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(KeysPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'keys',
                        pure: false
                    }]
            }], null, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    function AddOrReplacePatchComponent_ng_template_2_Template(rf, ctx) { }
    function AddOrReplacePatchComponent_ng_template_4_ng_container_2_ng_template_1_Template(rf, ctx) { }
    var _c0$4 = function (a0, a1) { return { object: a0, schema: a1 }; };
    function AddOrReplacePatchComponent_ng_template_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext();
            var value_r9 = ctx_r15.value;
            var schema_r10 = ctx_r15.schema;
            i0.ɵɵnextContext();
            var _r3 = i0.ɵɵreference(7);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0$4, value_r9, schema_r10));
        }
    }
    function AddOrReplacePatchComponent_ng_template_4_ng_container_3_ng_template_1_Template(rf, ctx) { }
    var _c1$2 = function (a0, a1) { return { array: a0, schema: a1 }; };
    function AddOrReplacePatchComponent_ng_template_4_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 2);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext();
            var value_r9 = ctx_r17.value;
            var schema_r10 = ctx_r17.schema;
            i0.ɵɵnextContext();
            var _r5 = i0.ɵɵreference(9);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c1$2, value_r9, schema_r10));
        }
    }
    function AddOrReplacePatchComponent_ng_template_4_ng_container_4_ng_template_1_Template(rf, ctx) { }
    var _c2 = function (a0) { return { primitive: a0 }; };
    function AddOrReplacePatchComponent_ng_template_4_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 2);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var value_r9 = i0.ɵɵnextContext().value;
            i0.ɵɵnextContext();
            var _r7 = i0.ɵɵreference(11);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, value_r9));
        }
    }
    function AddOrReplacePatchComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 8);
            i0.ɵɵpipe(1, "typeOf");
            i0.ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 9);
            i0.ɵɵtemplate(3, AddOrReplacePatchComponent_ng_template_4_ng_container_3_Template, 2, 5, "ng-container", 9);
            i0.ɵɵtemplate(4, AddOrReplacePatchComponent_ng_template_4_ng_container_4_Template, 2, 4, "ng-container", 10);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var value_r9 = ctx.value;
            i0.ɵɵproperty("ngSwitch", i0.ɵɵpipeBind1(1, 3, value_r9));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngSwitchCase", "object");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "array");
        }
    }
    function AddOrReplacePatchComponent_ng_template_6_tr_1_ng_template_5_Template(rf, ctx) { }
    var _c3 = function (a0, a1) { return { value: a0, schema: a1 }; };
    function AddOrReplacePatchComponent_ng_template_6_tr_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵelementStart(2, "label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "td");
            i0.ɵɵtemplate(5, AddOrReplacePatchComponent_ng_template_6_tr_1_ng_template_5_Template, 0, 0, "ng-template", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r23 = ctx.$implicit;
            var ctx_r25 = i0.ɵɵnextContext();
            var object_r20 = ctx_r25.object;
            var schema_r21 = ctx_r25.schema;
            i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(5);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(key_r23);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c3, object_r20[key_r23], schema_r21.properties[key_r23]));
        }
    }
    function AddOrReplacePatchComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "table");
            i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_6_tr_1_Template, 6, 6, "tr", 11);
            i0.ɵɵpipe(2, "sortKeysBySchema");
            i0.ɵɵpipe(3, "keys");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var object_r20 = ctx.object;
            var schema_r21 = ctx.schema;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind1(3, 4, object_r20), schema_r21));
        }
    }
    function AddOrReplacePatchComponent_ng_template_8_tr_1_ng_template_2_Template(rf, ctx) { }
    function AddOrReplacePatchComponent_ng_template_8_tr_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr", 13);
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_8_tr_1_ng_template_2_Template, 0, 0, "ng-template", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r29 = ctx.$implicit;
            var schema_r27 = i0.ɵɵnextContext().schema;
            i0.ɵɵnextContext();
            var _r1 = i0.ɵɵreference(5);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c3, item_r29, schema_r27.items));
        }
    }
    function AddOrReplacePatchComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "table");
            i0.ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_8_tr_1_Template, 3, 5, "tr", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var array_r26 = ctx.array;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", array_r26);
        }
    }
    function AddOrReplacePatchComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var primitive_r32 = ctx.primitive;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(primitive_r32);
        }
    }
    var AddOrReplacePatchComponent = /** @class */ (function () {
        function AddOrReplacePatchComponent(jsonSchemaService) {
            this.jsonSchemaService = jsonSchemaService;
        }
        AddOrReplacePatchComponent.prototype.ngOnChanges = function (changes) {
            var patchChanges = changes['patch'];
            if (patchChanges) {
                this.schema = this.jsonSchemaService.forPathString(this.patch.path);
            }
        };
        Object.defineProperty(AddOrReplacePatchComponent.prototype, "leftBorderClass", {
            get: function () {
                return this.patch.op === 'add' ? 'green-left-border' : 'orange-left-border';
            },
            enumerable: false,
            configurable: true
        });
        return AddOrReplacePatchComponent;
    }());
    AddOrReplacePatchComponent.ɵfac = function AddOrReplacePatchComponent_Factory(t) { return new (t || AddOrReplacePatchComponent)(i0.ɵɵdirectiveInject(JsonSchemaService)); };
    AddOrReplacePatchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddOrReplacePatchComponent, selectors: [["add-or-replace-patch"]], inputs: { patch: "patch" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 8, consts: [["tabindex", "-1", 1, "patch-container", 3, "ngClass", "id"], [1, "grow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "align-self-end", 3, "patch"], ["anyTypeTemplate", ""], ["objectTemplate", ""], ["arrayTemplate", ""], ["primitiveTemplate", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngFor", "ngForOf"], ["class", "array-item", 4, "ngFor", "ngForOf"], [1, "array-item"]], template: function AddOrReplacePatchComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "patch-actions", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, AddOrReplacePatchComponent_ng_template_4_Template, 5, 5, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(6, AddOrReplacePatchComponent_ng_template_6_Template, 4, 6, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(8, AddOrReplacePatchComponent_ng_template_8_Template, 2, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(10, AddOrReplacePatchComponent_ng_template_10_Template, 2, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(5);
                i0.ɵɵproperty("ngClass", ctx.leftBorderClass)("id", ctx.patch.path);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(5, _c3, ctx.patch.value, ctx.schema));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("patch", ctx.patch);
            }
        }, directives: [i24.NgClass, i24.NgTemplateOutlet, PatchActionsComponent, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgForOf], pipes: [TypeOfPipe, SortKeysBySchemaPipe, KeysPipe], styles: ["td[_ngcontent-%COMP%]{padding-right:10px!important;vertical-align:top}.align-self-end[_ngcontent-%COMP%]{align-self:flex-end}.patch-container[_ngcontent-%COMP%]{display:flex;padding-left:4px}.green-left-border[_ngcontent-%COMP%]{border-left:9px solid #2ecc71}.grow[_ngcontent-%COMP%]{flex-grow:1}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AddOrReplacePatchComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'add-or-replace-patch',
                        styleUrls: [
                            './add-or-replace-patch.component.scss'
                        ],
                        templateUrl: './add-or-replace-patch.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: JsonSchemaService }]; }, { patch: [{
                    type: i0.Input
                }] });
    })();

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
    var UnderscoreToSpacePipe = /** @class */ (function () {
        function UnderscoreToSpacePipe() {
        }
        UnderscoreToSpacePipe.prototype.transform = function (text) {
            return text.replace(/\_/g, ' ');
        };
        return UnderscoreToSpacePipe;
    }());
    UnderscoreToSpacePipe.ɵfac = function UnderscoreToSpacePipe_Factory(t) { return new (t || UnderscoreToSpacePipe)(); };
    UnderscoreToSpacePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "underscoreToSpace", type: UnderscoreToSpacePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UnderscoreToSpacePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'underscoreToSpace',
                    }]
            }], null, null);
    })();

    function TableListFieldComponent_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "underscoreToSpace");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r6 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("width", ctx_r0.schema.items.properties[key_r6].columnWidth + "%");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, key_r6), " ");
        }
    }
    function TableListFieldComponent_add_field_dropdown_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "add-field-dropdown", 9);
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelement(2, "i", 10);
            i0.ɵɵelement(3, "i", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(1, 4, ctx_r1.keys$))("pathString", ctx_r1.pathString)("schema", ctx_r1.schema.items)("isDisabled", ctx_r1.disabled);
        }
    }
    function TableListFieldComponent_tr_8_td_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 4);
            i0.ɵɵelementStart(1, "list-action-group", 14);
            i0.ɵɵlistener("onMove", function TableListFieldComponent_tr_8_td_2_Template_list_action_group_onMove_1_listener($event) { i0.ɵɵrestoreView(_r12_1); var i_r8 = i0.ɵɵnextContext().index; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.moveElement(i_r8, $event); })("onDelete", function TableListFieldComponent_tr_8_td_2_Template_list_action_group_onDelete_1_listener() { i0.ɵɵrestoreView(_r12_1); var i_r8 = i0.ɵɵnextContext().index; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.deleteElement(i_r8); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵclassProp("sortable", ctx_r9.schema.sortable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("canMove", ctx_r9.schema.sortable)("isDisabled", ctx_r9.disabled);
        }
    }
    function TableListFieldComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr", 12);
            i0.ɵɵpipe(1, "async");
            i0.ɵɵtemplate(2, TableListFieldComponent_tr_8_td_2_Template, 2, 4, "td", 13);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var value_r7 = ctx.$implicit;
            var i_r8 = ctx.index;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("id", ctx_r2.getPathStringForChild(i_r8))("value", value_r7)("schema", ctx_r2.schema.items)("path", ctx_r2.getPathForChild(i_r8))("keys", i0.ɵɵpipeBind1(1, 6, ctx_r2.keys$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.values.size > 0);
        }
    }
    function TableListFieldComponent_tr_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelement(1, "patch-actions", 15);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r3.removeJsonPatch);
        }
    }
    function TableListFieldComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 16);
            i0.ɵɵelement(1, "add-or-replace-patch", 15);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var patch_r15 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", patch_r15);
        }
    }
    function TableListFieldComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "add-or-replace-patch", 15);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r5.replaceJsonPatches[0]);
        }
    }
    var TableListFieldComponent = /** @class */ (function (_super) {
        __extends(TableListFieldComponent, _super);
        function TableListFieldComponent(appGlobalsService, problemsService, jsonStoreService, pathUtilService, keysStoreService, changeDetectorRef) {
            var _this = _super.call(this, appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.pathUtilService = pathUtilService;
            _this.keysStoreService = keysStoreService;
            _this.changeDetectorRef = changeDetectorRef;
            return _this;
        }
        Object.defineProperty(TableListFieldComponent.prototype, "keys$", {
            get: function () {
                return this.keysStoreService.forPath(this.pathString);
            },
            enumerable: false,
            configurable: true
        });
        return TableListFieldComponent;
    }(AbstractListFieldComponent));
    TableListFieldComponent.ɵfac = function TableListFieldComponent_Factory(t) { return new (t || TableListFieldComponent)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(KeysStoreService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    TableListFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableListFieldComponent, selectors: [["table-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 14, consts: [[3, "id", "ngClass"], [1, "table", "editable-inner-table"], [1, "thead-inverse"], [3, "width", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "button-holder"], [3, "fields", "pathString", "schema", "isDisabled", 4, "ngIf"], ["table-item-field", "", 3, "id", "value", "schema", "path", "keys", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "add-patch", 4, "ngFor", "ngForOf"], [3, "fields", "pathString", "schema", "isDisabled"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], ["table-item-field", "", 3, "id", "value", "schema", "path", "keys"], ["class", "button-holder", 3, "sortable", 4, "ngIf"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [3, "patch"], [1, "add-patch"]], template: function TableListFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "table", 1);
                i0.ɵɵelementStart(2, "thead", 2);
                i0.ɵɵelementStart(3, "tr");
                i0.ɵɵtemplate(4, TableListFieldComponent_th_4_Template, 3, 5, "th", 3);
                i0.ɵɵpipe(5, "async");
                i0.ɵɵelementStart(6, "th", 4);
                i0.ɵɵtemplate(7, TableListFieldComponent_add_field_dropdown_7_Template, 4, 6, "add-field-dropdown", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, TableListFieldComponent_tr_8_Template, 3, 8, "tr", 6);
                i0.ɵɵtemplate(9, TableListFieldComponent_tr_9_Template, 2, 1, "tr", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, TableListFieldComponent_div_10_Template, 2, 1, "div", 8);
                i0.ɵɵtemplate(11, TableListFieldComponent_div_11_Template, 2, 1, "div", 7);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 12, ctx.keys$))("ngForTrackBy", ctx.trackByElement);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("sortable", ctx.schema.sortable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.values.size > 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.values)("ngForTrackBy", ctx.trackByIndex);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
            }
        }, directives: [i24.NgClass, i24.NgForOf, i24.NgIf, AddFieldDropdownComponent, TableItemFieldComponent, ListActionGroupComponent, PatchActionsComponent, AddOrReplacePatchComponent], pipes: [i24.AsyncPipe, UnderscoreToSpacePipe], styles: ["table.editable-inner-table[_ngcontent-%COMP%]{border:none}table.editable-inner-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{border:none;color:#c1c1c1;vertical-align:middle}.add-patch[_ngcontent-%COMP%]{margin:8px 0}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TableListFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'table-list-field',
                        styleUrls: [
                            './table-list-field.component.scss'
                        ],
                        templateUrl: './table-list-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: KeysStoreService }, { type: i0.ChangeDetectorRef }]; }, { values: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }] });
    })();

    function ObjectFieldComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵelement(1, "add-nested-field-dropdown", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("pathString", ctx_r0.pathString)("schema", ctx_r0.schema)("isDisabled", ctx_r0.disabled);
        }
    }
    function ObjectFieldComponent_tr_3_li_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 15);
            i0.ɵɵelement(1, "add-new-element-button", 18);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("path", ctx_r6.getPathForChild(key_r5))("schema", ctx_r6.schema.properties[key_r5]);
        }
    }
    function ObjectFieldComponent_tr_3_ng_container_9_li_1_ng_template_1_Template(rf, ctx) { }
    function ObjectFieldComponent_tr_3_ng_container_9_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 20);
            i0.ɵɵtemplate(1, ObjectFieldComponent_tr_3_ng_container_9_li_1_ng_template_1_Template, 0, 0, "ng-template", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var templateName_r10 = ctx.$implicit;
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r9.appGlobalsService.templates[templateName_r10]);
        }
    }
    function ObjectFieldComponent_tr_3_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ObjectFieldComponent_tr_3_ng_container_9_li_1_Template, 2, 1, "li", 19);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var key_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r7.getTitleDropdownItemTemplateNamesForChild(key_r5));
        }
    }
    function ObjectFieldComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td", 12);
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵelementStart(3, "title-dropdown", 13);
            i0.ɵɵpipe(4, "underscoreToSpace");
            i0.ɵɵtemplate(5, ObjectFieldComponent_tr_3_li_5_Template, 2, 2, "li", 14);
            i0.ɵɵelementStart(6, "li", 15);
            i0.ɵɵelementStart(7, "button", 16);
            i0.ɵɵlistener("click", function ObjectFieldComponent_tr_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r14_1); var key_r5 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.deleteField(key_r5); });
            i0.ɵɵtext(8, "Delete");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, ObjectFieldComponent_tr_3_ng_container_9_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "td");
            i0.ɵɵelement(11, "any-type-field", 17);
            i0.ɵɵpipe(12, "selfOrEmpty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r5 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", i0.ɵɵpipeBind1(4, 7, key_r5))("isDisabled", ctx_r1.isPropertyDisabled(key_r5));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r1.schema.properties[key_r5].type === "array");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx_r1.getTitleDropdownItemTemplateNamesForChild(key_r5));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", i0.ɵɵpipeBind2(12, 9, ctx_r1.value.get(key_r5), ctx_r1.schema.properties[key_r5]))("schema", ctx_r1.schema.properties[key_r5])("path", ctx_r1.getPathForChild(key_r5));
        }
    }
    function ObjectFieldComponent_tr_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td", 12);
            i0.ɵɵelement(2, "title-dropdown", 13);
            i0.ɵɵpipe(3, "underscoreToSpace");
            i0.ɵɵpipe(4, "lastPathElement");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "td");
            i0.ɵɵelement(6, "add-or-replace-patch", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var patch_r15 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", i0.ɵɵpipeBind1(3, 3, i0.ɵɵpipeBind1(4, 5, patch_r15.path)))("isDisabled", true);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("patch", patch_r15);
        }
    }
    function ObjectFieldComponent_tr_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelement(1, "patch-actions", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r3.removeJsonPatch);
        }
    }
    function ObjectFieldComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "add-or-replace-patch", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r4.replaceJsonPatches[0]);
        }
    }
    var ObjectFieldComponent = /** @class */ (function (_super) {
        __extends(ObjectFieldComponent, _super);
        function ObjectFieldComponent(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef, keysStoreService) {
            var _this = _super.call(this, appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.pathUtilService = pathUtilService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.keysStoreService = keysStoreService;
            _this.isComplexListFieldItem = false;
            return _this;
        }
        Object.defineProperty(ObjectFieldComponent.prototype, "keys$", {
            get: function () {
                return this.keysStoreService.forPath(this.pathString);
            },
            enumerable: false,
            configurable: true
        });
        ObjectFieldComponent.prototype.deleteField = function (name) {
            var fieldPath = this.path.concat(name);
            this.jsonStoreService.removeIn(fieldPath);
        };
        ObjectFieldComponent.prototype.isPropertyDisabled = function (name) {
            return this.schema.properties[name].disabled && !this.appGlobalsService.adminMode;
        };
        ObjectFieldComponent.prototype.getTitleDropdownItemTemplateNamesForChild = function (key) {
            return this.schema.properties[key].titleDropdownItemTemplateNames;
        };
        return ObjectFieldComponent;
    }(AbstractFieldComponent));
    ObjectFieldComponent.ɵfac = function ObjectFieldComponent_Factory(t) { return new (t || ObjectFieldComponent)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(KeysStoreService)); };
    ObjectFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ObjectFieldComponent, selectors: [["object-field"]], inputs: { value: "value", schema: "schema", path: "path", isComplexListFieldItem: "isComplexListFieldItem" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 16, consts: [[3, "id"], ["class", "pull-right", 4, "ngIf"], [1, "table", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "button-holder"], [3, "fields", "pathString", "schema", "isDisabled"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], [1, "pull-right"], [3, "pathString", "schema", "isDisabled"], [1, "label-holder"], [3, "title", "isDisabled"], ["class", "title-dropdown-item", 4, "ngIf"], [1, "title-dropdown-item"], ["type", "button", 1, "editor-btn-delete", "editor-btn-delete-text", 3, "click"], [3, "value", "schema", "path"], [3, "path", "schema"], ["class", "title-dropdown-item custom-title-dropdown-item", 4, "ngFor", "ngForOf"], [1, "title-dropdown-item", "custom-title-dropdown-item"], [3, "ngTemplateOutlet"], [3, "patch"]], template: function ObjectFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, ObjectFieldComponent_div_1_Template, 2, 3, "div", 1);
                i0.ɵɵelementStart(2, "table", 2);
                i0.ɵɵtemplate(3, ObjectFieldComponent_tr_3_Template, 13, 12, "tr", 3);
                i0.ɵɵpipe(4, "async");
                i0.ɵɵtemplate(5, ObjectFieldComponent_tr_5_Template, 7, 7, "tr", 4);
                i0.ɵɵtemplate(6, ObjectFieldComponent_tr_6_Template, 2, 1, "tr", 5);
                i0.ɵɵelementStart(7, "tr");
                i0.ɵɵelementStart(8, "td", 6);
                i0.ɵɵelementStart(9, "add-field-dropdown", 7);
                i0.ɵɵpipe(10, "async");
                i0.ɵɵelement(11, "i", 8);
                i0.ɵɵelement(12, "i", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(13, ObjectFieldComponent_div_13_Template, 2, 1, "div", 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.pathString);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isComplexListFieldItem);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", ctx.redLeftBorderClass);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 12, ctx.keys$))("ngForTrackBy", ctx.trackByElement);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(10, 14, ctx.keys$))("pathString", ctx.pathString)("schema", ctx.schema)("isDisabled", ctx.disabled);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
            }
        }, styles: ["table.table[_ngcontent-%COMP%]{background-color:#f9f9f9}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ObjectFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'object-field',
                        styleUrls: [
                            './object-field.component.scss'
                        ],
                        templateUrl: './object-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: i0.ChangeDetectorRef }, { type: KeysStoreService }]; }, { value: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }], isComplexListFieldItem: [{
                    type: i0.Input
                }] });
    })();

    function ComplexListFieldComponent_div_1_div_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 10);
            i0.ɵɵelementStart(1, "button", 16);
            i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_span_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.onFoundNavigate(-1); });
            i0.ɵɵtext(2, "\u276E");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx_r9.currentFound <= 0);
        }
    }
    function ComplexListFieldComponent_div_1_div_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 10);
            i0.ɵɵelementStart(1, "button", 16);
            i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_span_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onFoundNavigate(1); });
            i0.ɵɵtext(2, "\u276F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx_r10.currentFound >= ctx_r10.foundIndices.length - 1);
        }
    }
    function ComplexListFieldComponent_div_1_div_1_span_8_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, " Nothing found ");
            i0.ɵɵelementEnd();
        }
    }
    function ComplexListFieldComponent_div_1_div_1_span_8_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", ctx_r17.currentFound + 1, " of ", ctx_r17.foundIndices.length, " ");
        }
    }
    function ComplexListFieldComponent_div_1_div_1_span_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 17);
            i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_1_span_8_span_1_Template, 2, 0, "span", 18);
            i0.ɵɵtemplate(2, ComplexListFieldComponent_div_1_div_1_span_8_span_2_Template, 2, 2, "span", 19);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngSwitch", ctx_r11.foundIndices.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", 0);
        }
    }
    function ComplexListFieldComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 9);
            i0.ɵɵelementStart(2, "span", 10);
            i0.ɵɵelementStart(3, "button", 11);
            i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.onFindClick(); });
            i0.ɵɵelement(4, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 13);
            i0.ɵɵlistener("ngModelChange", function ComplexListFieldComponent_div_1_div_1_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.findExpression = $event; })("keypress", function ComplexListFieldComponent_div_1_div_1_Template_input_keypress_5_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onFindInputKeypress($event.key); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ComplexListFieldComponent_div_1_div_1_span_6_Template, 3, 1, "span", 14);
            i0.ɵɵtemplate(7, ComplexListFieldComponent_div_1_div_1_span_7_Template, 3, 1, "span", 14);
            i0.ɵɵtemplate(8, ComplexListFieldComponent_div_1_div_1_span_8_Template, 3, 2, "span", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx_r5.findExpression);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.shouldDisplayFoundNavigation);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.shouldDisplayFoundNavigation);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.foundIndices);
        }
    }
    function ComplexListFieldComponent_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵelementStart(1, "label", 21);
            i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_2_Template_label_click_1_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.shouldDisplayOnlyEditFormItems = false; });
            i0.ɵɵtext(2, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label", 21);
            i0.ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_2_Template_label_click_3_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.shouldDisplayOnlyEditFormItems = true; });
            i0.ɵɵtext(4, "To Edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("active", !ctx_r6.shouldDisplayOnlyEditFormItems);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx_r6.shouldDisplayOnlyEditFormItems);
        }
    }
    function ComplexListFieldComponent_div_1_div_3_ng_template_1_Template(rf, ctx) { }
    function ComplexListFieldComponent_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_3_ng_template_1_Template, 0, 0, "ng-template", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.headerItemTemplate);
        }
    }
    function ComplexListFieldComponent_div_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "label", 23);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "pagination", 24);
            i0.ɵɵlistener("pageChanged", function ComplexListFieldComponent_div_1_div_4_Template_pagination_pageChanged_4_listener($event) { i0.ɵɵrestoreView(_r27_1); var ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onPageChange($event.page); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx_r8.paginatableItems.size, " ", ctx_r8.path[ctx_r8.path.length - 1], " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("totalItems", ctx_r8.paginatableItems.size)("ngModel", ctx_r8.currentPage)("maxSize", ctx_r8.navigator.maxVisiblePageCount)("itemsPerPage", ctx_r8.navigator.itemsPerPage)("boundaryLinks", true)("rotate", false)("firstText", "\u276E\u276E")("previousText", "\u276E")("nextText", "\u276F")("lastText", "\u276F\u276F");
        }
    }
    function ComplexListFieldComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_1_Template, 9, 4, "div", 6);
            i0.ɵɵtemplate(2, ComplexListFieldComponent_div_1_div_2_Template, 5, 4, "div", 8);
            i0.ɵɵtemplate(3, ComplexListFieldComponent_div_1_div_3_Template, 2, 1, "div", 6);
            i0.ɵɵtemplate(4, ComplexListFieldComponent_div_1_div_4_Template, 5, 12, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.navigator);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.shouldDisplayViewTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.headerItemTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.navigator);
        }
    }
    function ComplexListFieldComponent_div_3_span_2_ng_template_1_Template(rf, ctx) { }
    var _c0$5 = function (a0) { return { item: a0 }; };
    function ComplexListFieldComponent_div_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtemplate(1, ComplexListFieldComponent_div_3_span_2_ng_template_1_Template, 0, 0, "ng-template", 26);
            i0.ɵɵelementStart(2, "a", 27);
            i0.ɵɵlistener("click", function ComplexListFieldComponent_div_3_span_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r34_1); var item_r28 = i0.ɵɵnextContext().$implicit; var ctx_r32 = i0.ɵɵnextContext(); return item_r28.editFormDisplayedByUser = !ctx_r32.shouldDisplayEditableFieldsForItem(item_r28); });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r28 = i0.ɵɵnextContext().$implicit;
            var ctx_r29 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r29.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0$5, ctx_r29.values.get(item_r28.index)));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r29.shouldDisplayEditableFieldsForItem(item_r28) ? "Hide Fields" : "Show Fields", " ");
        }
    }
    function ComplexListFieldComponent_div_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelement(1, "object-field", 28);
            i0.ɵɵelementStart(2, "div", 29);
            i0.ɵɵelementStart(3, "div", 30);
            i0.ɵɵelementStart(4, "list-action-group", 31);
            i0.ɵɵlistener("onMove", function ComplexListFieldComponent_div_3_span_3_Template_list_action_group_onMove_4_listener($event) { i0.ɵɵrestoreView(_r38_1); var item_r28 = i0.ɵɵnextContext().$implicit; var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.moveElement(item_r28.index, $event); })("onDelete", function ComplexListFieldComponent_div_3_span_3_Template_list_action_group_onDelete_4_listener() { i0.ɵɵrestoreView(_r38_1); var item_r28 = i0.ɵɵnextContext().$implicit; var ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.deleteElement(item_r28.index); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r28 = i0.ɵɵnextContext().$implicit;
            var ctx_r30 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r30.values.get(item_r28.index))("schema", ctx_r30.schema.items)("path", ctx_r30.getPathForChild(item_r28.index))("isComplexListFieldItem", true);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("canMove", ctx_r30.sortable)("isDisabled", ctx_r30.disabled || ctx_r30.hasPatchOrChildrenHavePatch());
        }
    }
    function ComplexListFieldComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 25);
            i0.ɵɵtemplate(2, ComplexListFieldComponent_div_3_span_2_Template, 4, 5, "span", 6);
            i0.ɵɵtemplate(3, ComplexListFieldComponent_div_3_span_3_Template, 5, 6, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r28 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r1.shouldDisplayViewTemplate && ctx_r1.values.get(item_r28.index).keySeq().size != 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.shouldDisplayEditableFieldsForItem(item_r28));
        }
    }
    function ComplexListFieldComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 32);
            i0.ɵɵelement(1, "patch-actions", 33);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r2.removeJsonPatch);
        }
    }
    function ComplexListFieldComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 25);
            i0.ɵɵelement(1, "add-or-replace-patch", 33);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var patch_r42 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", patch_r42);
        }
    }
    function ComplexListFieldComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "add-or-replace-patch", 33);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r4.replaceJsonPatches[0]);
        }
    }
    var ComplexListFieldComponent = /** @class */ (function (_super) {
        __extends(ComplexListFieldComponent, _super);
        function ComplexListFieldComponent(appGlobalsService, problemsService, jsonStoreService, domUtilService, pathUtilService, changeDetectorRef, listPageChangerService) {
            var _this = _super.call(this, appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.domUtilService = domUtilService;
            _this.pathUtilService = pathUtilService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.listPageChangerService = listPageChangerService;
            _this.currentFound = 0;
            _this.currentPage = 1;
            _this._shouldDisplayOnlyEditFormItems = false;
            return _this;
        }
        ComplexListFieldComponent.prototype.ngOnInit = function () {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.navigator = this.schema.longListNavigatorConfig;
            this.paginatableItems = this.getPaginatableItems();
            this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
            if (this.navigator) {
                this.listPageChangerService
                    .registerPaginatedList(this.pathString, this.navigator.itemsPerPage)
                    .pipe(operators.skipWhile(function (page) { return page === _this.currentPage; }))
                    .pipe(operators.takeUntil(this.isDestroyed))
                    .subscribe(function (page) { return _this.onPageChange(page); });
            }
        };
        ComplexListFieldComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            var valuesChange = changes['values'];
            if (valuesChange && !valuesChange.isFirstChange()) {
                var preSize = valuesChange.previousValue.size;
                var curSize = valuesChange.currentValue.size;
                if (curSize !== preSize) {
                    if (this.navigator) {
                        // check if element added in the end by comparing the last elements
                        var elementAddedToEnd = valuesChange.previousValue.equals(valuesChange.currentValue.pop());
                        var lastPage = this.getPageForIndex(curSize - 1);
                        // change the page if a new element is added in the end and it's not on the last page
                        if (curSize > preSize && this.currentPage !== lastPage && elementAddedToEnd) {
                            this.currentPage = lastPage;
                        }
                    }
                }
                this.paginatableItems = this.getPaginatableItems();
                this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
            }
        };
        ComplexListFieldComponent.prototype.hasProblemOrPatch = function (index) {
            var itemPath = this.getPathStringForChild(index);
            return this.problemsService.hasProblem(itemPath) || this.jsonStoreService.hasPatchOrChildrenHavePatch(itemPath);
        };
        Object.defineProperty(ComplexListFieldComponent.prototype, "headerItemTemplate", {
            get: function () {
                return this.appGlobalsService.templates[this.navigator.headerItemTemplateName];
            },
            enumerable: false,
            configurable: true
        });
        ComplexListFieldComponent.prototype.onFindClick = function () {
            var _this = this;
            // clear for new search
            this.foundIndices = [];
            this.currentFound = 0;
            // search to look for the first match
            if (this.navigator.findSingle) {
                var foundIndex = this.values
                    .findIndex(function (value) { return _this.navigator.findSingle(value, _this.findExpression); });
                if (foundIndex > -1) {
                    this.foundIndices.push(foundIndex);
                }
            }
            // search to look for all matches
            if (this.foundIndices.length === 0 && this.navigator.findMultiple) {
                this.values
                    .forEach(function (value, index) {
                    if (_this.navigator.findMultiple(value, _this.findExpression)) {
                        _this.foundIndices.push(index);
                    }
                });
            }
            // navigate to first search result if found any
            if (this.foundIndices.length > 0) {
                this.navigateToItem(this.foundIndices[0]);
                this.shouldDisplayFoundNavigation = true;
            }
            else {
                this.shouldDisplayFoundNavigation = false;
            }
        };
        ComplexListFieldComponent.prototype.onFindInputKeypress = function (key) {
            if (key === 'Enter') {
                this.onFindClick();
            }
        };
        ComplexListFieldComponent.prototype.onFoundNavigate = function (direction) {
            // No bound checks, since the buttons are disabled in these cases.
            this.currentFound += direction;
            this.navigateToItem(this.foundIndices[this.currentFound]);
        };
        ComplexListFieldComponent.prototype.navigateToItem = function (index) {
            var _this = this;
            var item = this.paginatableItems.get(index);
            if (!item.editFormDisplayedByUser) {
                item.editFormDisplayedByUser = true;
                this.changeDetectorRef.markForCheck();
            }
            var itemPath = this.path.concat(index);
            var itemId = this.pathUtilService.toPathString(itemPath);
            setTimeout(function () { return _this.domUtilService.focusAndSelectFirstEditableChildById(itemId); });
        };
        ComplexListFieldComponent.prototype.onPageChange = function (page) {
            this.currentPage = page;
            this.paginatedItems = this.getPaginatableItemsForPage(page);
        };
        ComplexListFieldComponent.prototype.getPaginatableItemsForPage = function (page) {
            if (this.navigator) {
                var begin = (page - 1) * this.navigator.itemsPerPage;
                var end = (page * this.navigator.itemsPerPage);
                return this.paginatableItems.slice(begin, end);
            }
            else {
                return this.paginatableItems;
            }
        };
        ComplexListFieldComponent.prototype.getPaginatableItems = function () {
            var _this = this;
            var viewTemplateConfig = this.schema.viewTemplateConfig;
            return this.values
                .map(function (value, index) {
                var paginatableItem = _this.paginatableItems ? _this.paginatableItems.get(index) : null;
                var isNewItem = paginatableItem == null;
                var editFormDisplayedByUser = isNewItem ? null : paginatableItem.editFormDisplayedByUser;
                var shouldDisplayEditForm = viewTemplateConfig ? viewTemplateConfig.showEditForm(value) : true;
                return { index: index, shouldDisplayEditForm: shouldDisplayEditForm, editFormDisplayedByUser: editFormDisplayedByUser };
            }).filter(function (item) {
                if (_this.shouldDisplayOnlyEditFormItems) {
                    return item.shouldDisplayEditForm;
                }
                else {
                    return true;
                }
            });
        };
        ComplexListFieldComponent.prototype.getPageForIndex = function (index) {
            return Math.floor((index / this.navigator.itemsPerPage) + 1);
        };
        Object.defineProperty(ComplexListFieldComponent.prototype, "customTemplate", {
            get: function () {
                return this.appGlobalsService.templates[this.schema.viewTemplateConfig.itemTemplateName];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ComplexListFieldComponent.prototype, "shouldDisplayViewTemplate", {
            get: function () {
                return this.schema.viewTemplateConfig !== undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ComplexListFieldComponent.prototype, "sortable", {
            get: function () {
                return this.schema.sortable && !this.shouldDisplayOnlyEditFormItems;
            },
            enumerable: false,
            configurable: true
        });
        ComplexListFieldComponent.prototype.shouldDisplayEditableFieldsForItem = function (item) {
            // override default display state that is based on viewTemplateConfig.showEditForm(item) with user action
            var shouldDisplayEditForm = item.editFormDisplayedByUser != null ? item.editFormDisplayedByUser : item.shouldDisplayEditForm;
            return shouldDisplayEditForm || this.hasProblemOrPatch(item.index);
        };
        Object.defineProperty(ComplexListFieldComponent.prototype, "shouldDisplayOnlyEditFormItems", {
            get: function () {
                return this._shouldDisplayOnlyEditFormItems;
            },
            set: function (value) {
                this.currentPage = 1;
                this._shouldDisplayOnlyEditFormItems = value;
                this.paginatableItems = this.getPaginatableItems();
                this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
            },
            enumerable: false,
            configurable: true
        });
        return ComplexListFieldComponent;
    }(AbstractListFieldComponent));
    ComplexListFieldComponent.ɵfac = function ComplexListFieldComponent_Factory(t) { return new (t || ComplexListFieldComponent)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(ListPageChangerService)); };
    ComplexListFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ComplexListFieldComponent, selectors: [["complex-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 7, vars: 8, consts: [[3, "id"], ["class", "top-bar-container", 4, "ngIf"], [3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-right", 4, "ngIf"], ["class", "complex-list-field-wrapper", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "top-bar-container"], ["class", "btn-group", 4, "ngIf"], [1, "input-group", "input-group-sm"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", "find-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "search", "placeholder", "Find", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["class", "input-group-btn", 4, "ngIf"], ["class", "input-group-addon transparent borderless", 3, "ngSwitch", 4, "ngIf"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "input-group-addon", "transparent", "borderless", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-group"], [1, "btn", "btn-switch", 3, "click"], [3, "ngTemplateOutlet"], [1, "item-count-label"], [1, "pagination-sm", "pagination-top", 3, "totalItems", "ngModel", "maxSize", "itemsPerPage", "boundaryLinks", "rotate", "firstText", "previousText", "nextText", "lastText", "pageChanged"], [1, "complex-list-field-wrapper"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["href", "javascript:void(0)", 3, "click"], [3, "value", "schema", "path", "isComplexListFieldItem"], [1, "row", "element-button-container"], [1, "col-md-12", "text-right"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [1, "text-right"], [3, "patch"]], template: function ComplexListFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, ComplexListFieldComponent_div_1_Template, 5, 4, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, ComplexListFieldComponent_div_3_Template, 4, 2, "div", 3);
                i0.ɵɵtemplate(4, ComplexListFieldComponent_div_4_Template, 2, 1, "div", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, ComplexListFieldComponent_div_5_Template, 2, 1, "div", 5);
                i0.ɵɵtemplate(6, ComplexListFieldComponent_div_6_Template, 2, 1, "div", 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.pathString);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.navigator || ctx.shouldDisplayViewTemplate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", ctx.redLeftBorderClass);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.paginatedItems)("ngForTrackBy", ctx.trackByElement);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
            }
        }, directives: [i24.NgIf, i24.NgClass, i24.NgForOf, i25.DefaultValueAccessor, i25.NgControlStatus, i25.NgModel, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgTemplateOutlet, i20.PaginationComponent, ObjectFieldComponent, ListActionGroupComponent, PatchActionsComponent, AddOrReplacePatchComponent], styles: [".complex-list-field-wrapper[_ngcontent-%COMP%]{box-shadow:0 0 3px 1px rgba(0,0,0,.25);margin:10px 15px 15px 10px;padding:5px}.top-bar-container[_ngcontent-%COMP%]{align-items:center;background-color:#fff;box-shadow:inset 0 .5px 0 0 #fff,0 1px 2px 0 #b3b3b3;display:flex;justify-content:space-between;padding:0 15px;position:-webkit-sticky;position:sticky;top:46px;width:100%;z-index:1}.item-count-label[_ngcontent-%COMP%]{position:relative;top:-19px}.transparent[_ngcontent-%COMP%]{background:transparent}.borderless[_ngcontent-%COMP%]{border:none}.find-button[_ngcontent-%COMP%]{color:#2f4f4f}.find-button[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%]{opacity:.83}.element-button-container[_ngcontent-%COMP%]{padding-top:8px}.element-button-container[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%]{padding:0}label.btn[_ngcontent-%COMP%]{color:#fff!important}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ComplexListFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'complex-list-field',
                        styleUrls: [
                            './complex-list-field.component.scss'
                        ],
                        templateUrl: './complex-list-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: DomUtilService }, { type: PathUtilService }, { type: i0.ChangeDetectorRef }, { type: ListPageChangerService }]; }, { values: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }] });
    })();

    function PrimitiveListFieldComponent_tr_3_td_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 8);
            i0.ɵɵelementStart(1, "list-action-group", 9);
            i0.ɵɵlistener("onMove", function PrimitiveListFieldComponent_tr_3_td_3_Template_list_action_group_onMove_1_listener($event) { i0.ɵɵrestoreView(_r9_1); var i_r5 = i0.ɵɵnextContext().index; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.moveElement(i_r5, $event); })("onDelete", function PrimitiveListFieldComponent_tr_3_td_3_Template_list_action_group_onDelete_1_listener() { i0.ɵɵrestoreView(_r9_1); var i_r5 = i0.ɵɵnextContext().index; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.deleteElement(i_r5); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵclassProp("sortable", ctx_r6.schema.sortable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("canMove", ctx_r6.schema.sortable)("isDisabled", ctx_r6.disabled);
        }
    }
    function PrimitiveListFieldComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵelement(2, "any-type-field", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, PrimitiveListFieldComponent_tr_3_td_3_Template, 2, 4, "td", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var value_r4 = ctx.$implicit;
            var i_r5 = ctx.index;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", value_r4)("schema", ctx_r0.schema.items)("path", ctx_r0.getPathForChild(i_r5));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.values.size > 0);
        }
    }
    function PrimitiveListFieldComponent_tr_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelement(1, "patch-actions", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r1.removeJsonPatch);
        }
    }
    function PrimitiveListFieldComponent_tr_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelement(1, "add-or-replace-patch", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var patch_r12 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", patch_r12);
        }
    }
    function PrimitiveListFieldComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelement(1, "add-or-replace-patch", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r3.replaceJsonPatches[0]);
        }
    }
    var PrimitiveListFieldComponent = /** @class */ (function (_super) {
        __extends(PrimitiveListFieldComponent, _super);
        function PrimitiveListFieldComponent(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
            var _this = _super.call(this, appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.pathUtilService = pathUtilService;
            _this.changeDetectorRef = changeDetectorRef;
            return _this;
        }
        return PrimitiveListFieldComponent;
    }(AbstractListFieldComponent));
    PrimitiveListFieldComponent.ɵfac = function PrimitiveListFieldComponent_Factory(t) { return new (t || PrimitiveListFieldComponent)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PrimitiveListFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PrimitiveListFieldComponent, selectors: [["primitive-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 10, consts: [[3, "id", "ngClass"], [1, "wide"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "value", "schema", "path"], ["class", "button-holder", 3, "sortable", 4, "ngIf"], [1, "button-holder"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [3, "patch"]], template: function PrimitiveListFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "table", 2);
                i0.ɵɵtemplate(3, PrimitiveListFieldComponent_tr_3_Template, 4, 4, "tr", 3);
                i0.ɵɵpipe(4, "selfOrEmpty");
                i0.ɵɵtemplate(5, PrimitiveListFieldComponent_tr_5_Template, 2, 1, "tr", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "table", 2);
                i0.ɵɵtemplate(7, PrimitiveListFieldComponent_tr_7_Template, 2, 1, "tr", 5);
                i0.ɵɵtemplate(8, PrimitiveListFieldComponent_tr_8_Template, 2, 1, "tr", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 7, ctx.values, ctx.schema))("ngForTrackBy", ctx.trackByIndex);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.addJsonPatches);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
            }
        }, styles: ["td[_ngcontent-%COMP%]{padding:0!important}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PrimitiveListFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'primitive-list-field',
                        styleUrls: [
                            './primitive-list-field.component.scss'
                        ],
                        templateUrl: './primitive-list-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: i0.ChangeDetectorRef }]; }, { values: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }] });
    })();

    var ContentModelDirective = /** @class */ (function () {
        function ContentModelDirective(elementRef) {
            this.elementRef = elementRef;
            this.contentModelChange = new i0.EventEmitter();
        }
        ContentModelDirective.prototype.ngOnChanges = function (changes) {
            if (changes['contentModel']) {
                this.refresh();
            }
        };
        ContentModelDirective.prototype.onBlur = function () {
            this.emitContentModelChange();
        };
        ContentModelDirective.prototype.onKeypress = function (event) {
            if (event.key === 'Enter') {
                this.emitContentModelChange();
            }
        };
        ContentModelDirective.prototype.emitContentModelChange = function () {
            var value = this.elementRef.nativeElement.innerText;
            this.contentModelChange.emit(value);
        };
        ContentModelDirective.prototype.refresh = function () {
            this.elementRef.nativeElement.innerText = this.contentModel;
        };
        return ContentModelDirective;
    }());
    ContentModelDirective.ɵfac = function ContentModelDirective_Factory(t) { return new (t || ContentModelDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ContentModelDirective.ɵdir = i0.ɵɵdefineDirective({ type: ContentModelDirective, selectors: [["", "contentModel", ""]], hostBindings: function ContentModelDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("blur", function ContentModelDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keypress", function ContentModelDirective_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); });
            }
        }, inputs: { contentModel: "contentModel" }, outputs: { contentModelChange: "contentModelChange" }, features: [i0.ɵɵNgOnChangesFeature] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ContentModelDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[contentModel]'
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { contentModel: [{
                    type: i0.Input
                }], contentModelChange: [{
                    type: i0.Output
                }], onBlur: [{
                    type: i0.HostListener,
                    args: ['blur']
                }], onKeypress: [{
                    type: i0.HostListener,
                    args: ['keypress', ['$event']]
                }] });
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var _c0$6 = ["latexPreview"];
    var StringInputComponent = /** @class */ (function () {
        function StringInputComponent(domUtilService, katexService) {
            this.domUtilService = domUtilService;
            this.katexService = katexService;
            this.blur = new i0.EventEmitter();
            this.onKeypress = new i0.EventEmitter();
            this.valueChange = new i0.EventEmitter();
        }
        StringInputComponent.prototype.ngOnChanges = function (changes) {
            var valueChange = changes['value'];
            if (valueChange) {
                this.contentModel = this.value;
                if (this.latexPreviewEnabled && !valueChange.firstChange) {
                    this.renderLatex();
                }
            }
        };
        StringInputComponent.prototype.ngOnInit = function () {
            if (this.shouldShowLatexPreview) {
                this.latexPreviewShown = true;
            }
        };
        StringInputComponent.prototype.ngAfterViewInit = function () {
            // render latex preview on init, if it's enabled and value is not empty
            if (this.shouldShowLatexPreview) {
                this.renderLatex();
            }
        };
        StringInputComponent.prototype.onBlur = function () {
            if (this.shouldShowLatexPreview) {
                this.latexPreviewShown = true;
                this.value = this.contentModel;
            }
            this.blur.emit();
        };
        StringInputComponent.prototype.renderLatex = function () {
            this.katexService.renderMathInText(this.value, this.latexPreviewEl.nativeElement);
        };
        StringInputComponent.prototype.hideLatexPreview = function (contentEditableEl) {
            this.latexPreviewShown = false;
            setTimeout(function () { return contentEditableEl.focus(); });
        };
        StringInputComponent.prototype.contentModelChange = function (value) {
            this.contentModel = value;
            this.valueChange.emit(value);
        };
        Object.defineProperty(StringInputComponent.prototype, "shouldShowLatexPreview", {
            get: function () {
                return this.latexPreviewEnabled && Boolean(this.value);
            },
            enumerable: false,
            configurable: true
        });
        return StringInputComponent;
    }());
    StringInputComponent.ɵfac = function StringInputComponent_Factory(t) { return new (t || StringInputComponent)(i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(KatexService)); };
    StringInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StringInputComponent, selectors: [["string-input"]], viewQuery: function StringInputComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$6, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.latexPreviewEl = _t.first);
            }
        }, inputs: { value: "value", disabled: "disabled", pathString: "pathString", placeholder: "placeholder", tabIndex: "tabIndex", latexPreviewEnabled: "latexPreviewEnabled" }, outputs: { blur: "blur", onKeypress: "onKeypress", valueChange: "valueChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[3, "tabindex", "contentModel", "contentModelChange", "blur", "keypress"], ["contentEditable", ""], [3, "click", "blur"], ["latexPreview", ""]], template: function StringInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r2_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "span", 0, 1);
                i0.ɵɵlistener("contentModelChange", function StringInputComponent_Template_span_contentModelChange_0_listener($event) { return ctx.contentModelChange($event); })("blur", function StringInputComponent_Template_span_blur_0_listener() { return ctx.onBlur(); })("keypress", function StringInputComponent_Template_span_keypress_0_listener($event) { return ctx.onKeypress.emit($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵlistener("click", function StringInputComponent_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r2_1); var _r0 = i0.ɵɵreference(1); return ctx.hideLatexPreview(_r0); })("blur", function StringInputComponent_Template_div_blur_2_listener() { i0.ɵɵrestoreView(_r2_1); var _r0 = i0.ɵɵreference(1); return ctx.hideLatexPreview(_r0); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("hidden", ctx.latexPreviewShown);
                i0.ɵɵproperty("tabindex", ctx.tabIndex)("contentModel", ctx.contentModel);
                i0.ɵɵattribute("contenteditable", !ctx.disabled)("data-path", ctx.pathString)("placeholder", ctx.placeholder || "\u2063\u2063");
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("hidden", !ctx.latexPreviewEnabled || !ctx.latexPreviewShown);
            }
        }, directives: [ContentModelDirective], styles: [""], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StringInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'string-input',
                        styleUrls: [
                            './string-input.component.scss'
                        ],
                        templateUrl: './string-input.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: DomUtilService }, { type: KatexService }]; }, { latexPreviewEl: [{
                    type: i0.ViewChild,
                    args: ['latexPreview']
                }], value: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], pathString: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], tabIndex: [{
                    type: i0.Input
                }], latexPreviewEnabled: [{
                    type: i0.Input
                }], blur: [{
                    type: i0.Output
                }], onKeypress: [{
                    type: i0.Output
                }], valueChange: [{
                    type: i0.Output
                }] });
    })();

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
    var _c0$7 = ["filterInput"];
    var _c1$3 = ["dropdown"];
    function SearchableDropdownComponent_input_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 7, 8);
            i0.ɵɵlistener("ngModelChange", function SearchableDropdownComponent_input_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.expression = $event; })("keyup.enter", function SearchableDropdownComponent_input_3_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r7_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onEnterKeyUp(); })("blur", function SearchableDropdownComponent_input_3_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onInputBlur($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("placeholder", ctx_r1.placeholder)("ngModel", ctx_r1.expression);
            i0.ɵɵattribute("data-path", ctx_r1.pathString);
        }
    }
    function SearchableDropdownComponent_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 11);
            i0.ɵɵelementStart(1, "a", 12);
            i0.ɵɵlistener("click", function SearchableDropdownComponent_ul_5_li_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r13_1); var displayValue_r11 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onItemClick(displayValue_r11); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var displayValue_r11 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(displayValue_r11);
        }
    }
    function SearchableDropdownComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 9);
            i0.ɵɵtemplate(1, SearchableDropdownComponent_ul_5_li_1_Template, 3, 1, "li", 10);
            i0.ɵɵpipe(2, "filterByExpression");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, ctx_r2.displayValues, ctx_r2.expression));
        }
    }
    function SearchableDropdownComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 13);
            i0.ɵɵlistener("focus", function SearchableDropdownComponent_ng_template_6_Template_span_focus_0_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.showDropdown(); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("tabindex", ctx_r4.tabIndex);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r4.biDisplayValueMap.getValue(ctx_r4.value));
        }
    }
    var SearchableDropdownComponent = /** @class */ (function () {
        function SearchableDropdownComponent() {
            this.onSelect = new i0.EventEmitter();
            this.onBlur = new i0.EventEmitter();
        }
        SearchableDropdownComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['value']) {
                this.placeholder = this.value || this.placeholder || '';
            }
            if (changes['displayValueMap'] || changes['items']) {
                this.displayValueMap = this.displayValueMap || Object.create(null);
                this.biDisplayValueMap = new dist.BiDirectionalMap(this.displayValueMap);
                // set original value as display value for not configured items.
                this.items
                    .filter(function (item) { return !_this.displayValueMap[item]; })
                    .forEach(function (item) {
                    _this.biDisplayValueMap.set(item, item);
                });
                this.displayValues = Array.from(this.biDisplayValueMap.values());
            }
        };
        SearchableDropdownComponent.prototype.onItemClick = function (displayValue) {
            var originalValue = this.biDisplayValueMap.getKey(displayValue);
            this.onSelect.emit(originalValue);
            // only necessary to force closing when selected is item equals to value
            // in which case dropdown doesn't close automatically for some reason
            this.dropdown.hide();
        };
        SearchableDropdownComponent.prototype.onEnterKeyUp = function () {
            if (this.shortcutMap && this.shortcutMap[this.expression]) {
                this.onItemClick(this.shortcutMap[this.expression]);
            }
            this.dropdown.hide();
        };
        SearchableDropdownComponent.prototype.showDropdown = function () {
            var _this = this;
            this.dropdown.show();
            this.expression = '';
            setTimeout(function () {
                _this.filterInputElRef.nativeElement.focus();
            });
        };
        SearchableDropdownComponent.prototype.onInputBlur = function (event) {
            // this avoids closing dropdown when an item is selected
            // so that onItemClick() can be executed properly before closing.
            var relatedTarget = event.relatedTarget;
            if (!relatedTarget || relatedTarget.className !== 'dropdown-item') {
                this.dropdown.hide();
            }
            this.onBlur.emit();
        };
        return SearchableDropdownComponent;
    }());
    SearchableDropdownComponent.ɵfac = function SearchableDropdownComponent_Factory(t) { return new (t || SearchableDropdownComponent)(); };
    SearchableDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchableDropdownComponent, selectors: [["searchable-dropdown"]], viewQuery: function SearchableDropdownComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$7, true);
                i0.ɵɵviewQuery(_c1$3, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filterInputElRef = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
            }
        }, inputs: { items: "items", shortcutMap: "shortcutMap", displayValueMap: "displayValueMap", value: "value", pathString: "pathString", tabIndex: "tabIndex", placeholder: "placeholder" }, outputs: { onSelect: "onSelect", onBlur: "onBlur" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 2, consts: [["dropdown", "", "keyboardNav", "true", 1, "btn-group"], ["dropdown", "bs-dropdown"], [1, "toggle-container"], ["class", "value", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf", "ngIfElse"], [1, "fa", "fa-caret-down", 3, "click"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["valueDisplayTemplate", ""], [1, "value", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter", "blur"], ["filterInput", ""], ["role", "menu", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "value", 3, "tabindex", "focus"]], template: function SearchableDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, SearchableDropdownComponent_input_3_Template, 2, 3, "input", 3);
                i0.ɵɵelementStart(4, "i", 4);
                i0.ɵɵlistener("click", function SearchableDropdownComponent_Template_i_click_4_listener() { return ctx.showDropdown(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, SearchableDropdownComponent_ul_5_Template, 3, 4, "ul", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, SearchableDropdownComponent_ng_template_6_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                var _r3 = i0.ɵɵreference(7);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", _r0.isOpen)("ngIfElse", _r3);
            }
        }, directives: [i19.BsDropdownDirective, i24.NgIf, i19.BsDropdownMenuDirective, i25.DefaultValueAccessor, i25.NgControlStatus, i25.NgModel, i24.NgForOf], pipes: [FilterByExpressionPipe], styles: ["div.btn-group[_ngcontent-%COMP%]{width:100%}.dropdown-menu[_ngcontent-%COMP%]{left:0!important}.toggle-container[_ngcontent-%COMP%]{display:inline-flex;width:100%}.toggle-container[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{flex-grow:1}.dropdown-toggle[_ngcontent-%COMP%]{box-shadow:none!important}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SearchableDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'searchable-dropdown',
                        styleUrls: [
                            './searchable-dropdown.component.scss'
                        ],
                        templateUrl: './searchable-dropdown.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { items: [{
                    type: i0.Input
                }], shortcutMap: [{
                    type: i0.Input
                }], displayValueMap: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], pathString: [{
                    type: i0.Input
                }], tabIndex: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], onSelect: [{
                    type: i0.Output
                }], onBlur: [{
                    type: i0.Output
                }], filterInputElRef: [{
                    type: i0.ViewChild,
                    args: ['filterInput']
                }], dropdown: [{
                    type: i0.ViewChild,
                    args: ['dropdown']
                }] });
    })();

    /*
     * This file is part of INSPIRE.
     * Copyright (C) 2016 CERN.
     *
     * INSPIRE is free software; you can redistribute it and/or
     * modify it under the terms of the GNU General Public License as
     * published by the Free Software Foundation; either version 2 of the
     * License, or (at your option) any later version.
     *
     * INSPIRE is distributed in the hope that it will be useful, but
     * WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
     * General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with INSPIRE; if not, write to the Free Software Foundation, Inc.,
     * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
     * In applying this license, CERN does not
     * waive the privileges and immunities granted to it by virtue of its status
     * as an Intergovernmental Organization or submit itself to any jurisdiction.
    */
    function AutocompleteInputComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
    var _c0$8 = function (a0, a1, a2, a3) { return { item: a0, index: a1, match: a2, query: a3 }; };
    function AutocompleteInputComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵlistener("mousedown", function AutocompleteInputComponent_ng_template_0_Template_div_mousedown_0_listener() { i0.ɵɵrestoreView(_r7_1); var match_r4 = ctx.match; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onMatchWrapperMouseDown(match_r4); });
            i0.ɵɵtemplate(1, AutocompleteInputComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var match_r4 = ctx.match;
            var ctx_r1 = i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customItemTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0$8, match_r4.item, ctx_r1.i, match_r4, ctx_r1.query));
        }
    }
    function AutocompleteInputComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var match_r8 = ctx.match;
            i0.ɵɵtextInterpolate1(" ", match_r8.value, "\n");
        }
    }
    var AutocompleteInputComponent = /** @class */ (function () {
        function AutocompleteInputComponent(remoteAutocompletionService, appGlobalsService) {
            this.remoteAutocompletionService = remoteAutocompletionService;
            this.appGlobalsService = appGlobalsService;
            this.onValueChange = new i0.EventEmitter();
            this.onCompletionSelect = new i0.EventEmitter();
            this.onKeypress = new i0.EventEmitter();
            this.onBlur = new i0.EventEmitter();
        }
        AutocompleteInputComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.autocompletionConfig.url) {
                // remote
                this.typeaheadOptionField = this.getDotSeparatedOptionField() || 'text';
                this.dataSource = rxjs.Observable.create(function (observer) {
                    if (_this.value && _this.value.length > 0) {
                        observer.next(_this.value);
                    }
                }).mergeMap(function (token) { return _this.remoteAutocompletionService.getAutocompletionResults(_this.autocompletionConfig, token); });
            }
            else {
                // local
                this.typeaheadOptionField = this.getDotSeparatedOptionField() || '';
                this.dataSource = this.autocompletionConfig.source;
            }
        };
        Object.defineProperty(AutocompleteInputComponent.prototype, "customItemTemplate", {
            get: function () {
                return this.appGlobalsService.templates[this.autocompletionConfig.itemTemplateName];
            },
            enumerable: false,
            configurable: true
        });
        AutocompleteInputComponent.prototype.getDotSeparatedOptionField = function () {
            var optionField = this.autocompletionConfig.optionField;
            return optionField && optionField.replace(AutocompleteInputComponent.slashesRegExp, '.');
        };
        AutocompleteInputComponent.prototype.onModelChange = function (value) {
            this.value = value;
            this.onValueChange.emit(value);
        };
        AutocompleteInputComponent.prototype.onMatchSelect = function (match) {
            this.onCompletionSelect.emit(match.item);
        };
        AutocompleteInputComponent.prototype.onMatchWrapperMouseDown = function (match) {
            this.onModelChange(match.value);
            this.onMatchSelect(match);
        };
        return AutocompleteInputComponent;
    }());
    AutocompleteInputComponent.slashesRegExp = new RegExp('/', 'g');
    AutocompleteInputComponent.ɵfac = function AutocompleteInputComponent_Factory(t) { return new (t || AutocompleteInputComponent)(i0.ɵɵdirectiveInject(RemoteAutocompletionService), i0.ɵɵdirectiveInject(AppGlobalsService)); };
    AutocompleteInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteInputComponent, selectors: [["autocomplete-input"]], inputs: { autocompletionConfig: "autocompletionConfig", value: "value", pathString: "pathString", tabIndex: "tabIndex", placeholder: "placeholder" }, outputs: { onValueChange: "onValueChange", onCompletionSelect: "onCompletionSelect", onKeypress: "onKeypress", onBlur: "onBlur" }, decls: 6, vars: 9, consts: [["matchWrapper", ""], ["defaultItemTemplate", ""], [1, "autocomplete-container"], [3, "ngModel", "typeahead", "typeaheadOptionsLimit", "typeaheadOptionField", "typeaheadItemTemplate", "typeaheadWaitMs", "tabindex", "placeholder", "ngModelChange", "keypress", "blur", "typeaheadOnSelect"], [2, "width", "100%", "height", "100%", "padding", "3px 20px", 3, "mousedown"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function AutocompleteInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AutocompleteInputComponent_ng_template_0_Template, 2, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, AutocompleteInputComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵelementStart(5, "input", 3);
                i0.ɵɵlistener("ngModelChange", function AutocompleteInputComponent_Template_input_ngModelChange_5_listener($event) { return ctx.onModelChange($event); })("keypress", function AutocompleteInputComponent_Template_input_keypress_5_listener($event) { return ctx.onKeypress.emit($event); })("blur", function AutocompleteInputComponent_Template_input_blur_5_listener() { return ctx.onBlur.emit(); })("typeaheadOnSelect", function AutocompleteInputComponent_Template_input_typeaheadOnSelect_5_listener($event) { return ctx.onMatchSelect($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵadvance(5);
                i0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
                i0.ɵɵproperty("ngModel", ctx.value)("typeahead", ctx.dataSource)("typeaheadOptionsLimit", ctx.autocompletionConfig.size)("typeaheadOptionField", ctx.typeaheadOptionField)("typeaheadItemTemplate", _r0)("typeaheadWaitMs", 200)("tabindex", ctx.tabIndex);
                i0.ɵɵattribute("data-path", ctx.pathString);
            }
        }, directives: [i25.DefaultValueAccessor, i25.NgControlStatus, i25.NgModel, i23.TypeaheadDirective, i24.NgTemplateOutlet], styles: [""], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AutocompleteInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'autocomplete-input',
                        styleUrls: [
                            './autocomplete-input.component.scss'
                        ],
                        templateUrl: './autocomplete-input.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: RemoteAutocompletionService }, { type: AppGlobalsService }]; }, { autocompletionConfig: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], pathString: [{
                    type: i0.Input
                }], tabIndex: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], onValueChange: [{
                    type: i0.Output
                }], onCompletionSelect: [{
                    type: i0.Output
                }], onKeypress: [{
                    type: i0.Output
                }], onBlur: [{
                    type: i0.Output
                }] });
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var _c0$9 = function (a0, a1) { return { added: a0, removed: a1 }; };
    function TextDiffComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 1);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var diff_r1 = ctx.$implicit;
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0$9, diff_r1.added, diff_r1.removed));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(diff_r1.value);
        }
    }
    var TextDiffComponent = /** @class */ (function () {
        function TextDiffComponent(textDiffService) {
            this.textDiffService = textDiffService;
        }
        Object.defineProperty(TextDiffComponent.prototype, "diffs", {
            get: function () {
                return this.textDiffService
                    .diffByWord(this.currentText, this.newText);
            },
            enumerable: false,
            configurable: true
        });
        return TextDiffComponent;
    }());
    TextDiffComponent.ɵfac = function TextDiffComponent_Factory(t) { return new (t || TextDiffComponent)(i0.ɵɵdirectiveInject(TextDiffService)); };
    TextDiffComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextDiffComponent, selectors: [["text-diff"]], inputs: { newText: "newText", currentText: "currentText" }, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function TextDiffComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, TextDiffComponent_span_0_Template, 2, 5, "span", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.diffs);
            }
        }, directives: [i24.NgForOf, i24.NgClass], styles: [".added[_ngcontent-%COMP%]{color:green;font-weight:700}.removed[_ngcontent-%COMP%]{color:red;text-decoration:line-through}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TextDiffComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'text-diff',
                        templateUrl: './text-diff.component.html',
                        styleUrls: [
                            './text-diff.component.scss'
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: TextDiffService }]; }, { newText: [{
                    type: i0.Input
                }], currentText: [{
                    type: i0.Input
                }] });
    })();

    function PrimitiveFieldComponent_ng_template_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var error_r12 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", error_r12.message, " ");
        }
    }
    function PrimitiveFieldComponent_ng_template_3_li_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var error_r13 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", error_r13.message, " ");
        }
    }
    function PrimitiveFieldComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 10);
            i0.ɵɵtemplate(1, PrimitiveFieldComponent_ng_template_3_li_1_Template, 2, 1, "li", 11);
            i0.ɵɵtemplate(2, PrimitiveFieldComponent_ng_template_3_li_2_Template, 2, 1, "li", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.internalErrors);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.externalErrors);
        }
    }
    function PrimitiveFieldComponent_td_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "string-input", 15);
            i0.ɵɵlistener("valueChange", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onValueChange($event); })("blur", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_blur_1_listener() { i0.ɵɵrestoreView(_r21_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onBlur(); })("onKeypress", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_onKeypress_1_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onKeypress($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("pathString", ctx_r14.pathString)("value", ctx_r14.value)("disabled", ctx_r14.disabled)("tabIndex", ctx_r14.tabIndex)("latexPreviewEnabled", ctx_r14.schema.latexPreviewEnabled)("placeholder", ctx_r14.schema.title);
        }
    }
    function PrimitiveFieldComponent_td_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "searchable-dropdown", 16);
            i0.ɵɵlistener("onSelect", function PrimitiveFieldComponent_td_5_div_2_Template_searchable_dropdown_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onSearchableDropdownSelect($event); })("onBlur", function PrimitiveFieldComponent_td_5_div_2_Template_searchable_dropdown_onBlur_1_listener() { i0.ɵɵrestoreView(_r25_1); var ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onBlur(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("pathString", ctx_r15.pathString)("value", ctx_r15.value)("placeholder", ctx_r15.schema.title)("items", ctx_r15.schema.enum)("shortcutMap", ctx_r15.schema.enumShorcutMap)("displayValueMap", ctx_r15.schema.enumDisplayValueMap)("tabIndex", ctx_r15.tabIndex);
        }
    }
    function PrimitiveFieldComponent_td_5_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "autocomplete-input", 17);
            i0.ɵɵlistener("onBlur", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onBlur_1_listener() { i0.ɵɵrestoreView(_r28_1); var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onBlur(); })("onKeypress", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onKeypress_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.onKeypress($event); })("onValueChange", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onValueChange_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.onValueChange($event); })("onCompletionSelect", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onCompletionSelect_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onCompletionSelect($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("pathString", ctx_r16.pathString)("value", ctx_r16.value)("autocompletionConfig", ctx_r16.schema.autocompletionConfig)("placeholder", ctx_r16.schema.title)("tabIndex", ctx_r16.tabIndex);
        }
    }
    function PrimitiveFieldComponent_td_5_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "input", 18);
            i0.ɵɵlistener("ngModelChange", function PrimitiveFieldComponent_td_5_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r33_1); var ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.value = $event; })("blur", function PrimitiveFieldComponent_td_5_div_4_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r33_1); var ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onBlur(); })("keypress", function PrimitiveFieldComponent_td_5_div_4_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r33_1); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onKeypress($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r17.value)("tabindex", ctx_r17.tabIndex)("placeholder", ctx_r17.schema.title);
            i0.ɵɵattribute("data-path", ctx_r17.pathString);
        }
    }
    function PrimitiveFieldComponent_td_5_div_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "input", 19);
            i0.ɵɵlistener("ngModelChange", function PrimitiveFieldComponent_td_5_div_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r37_1); var ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.value = $event; })("ngModelChange", function PrimitiveFieldComponent_td_5_div_5_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r37_1); var ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.onBlur(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r18.value)("placeholder", ctx_r18.schema.title);
        }
    }
    function PrimitiveFieldComponent_td_5_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ## Not recognized type: ", ctx_r19.valueType, " ");
        }
    }
    function PrimitiveFieldComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 12);
            i0.ɵɵtemplate(1, PrimitiveFieldComponent_td_5_div_1_Template, 2, 6, "div", 13);
            i0.ɵɵtemplate(2, PrimitiveFieldComponent_td_5_div_2_Template, 2, 7, "div", 13);
            i0.ɵɵtemplate(3, PrimitiveFieldComponent_td_5_div_3_Template, 2, 5, "div", 13);
            i0.ɵɵtemplate(4, PrimitiveFieldComponent_td_5_div_4_Template, 2, 4, "div", 13);
            i0.ɵɵtemplate(5, PrimitiveFieldComponent_td_5_div_5_Template, 2, 2, "div", 13);
            i0.ɵɵtemplate(6, PrimitiveFieldComponent_td_5_div_6_Template, 2, 1, "div", 14);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(4);
            i0.ɵɵclassProp("disabled", ctx_r2.disabled);
            i0.ɵɵpropertyInterpolate("placement", ctx_r2.tooltipPosition);
            i0.ɵɵproperty("tooltip", _r0)("isDisabled", !ctx_r2.hasErrors());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "string");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "enum");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "autocomplete");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "integer");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "boolean");
        }
    }
    function PrimitiveFieldComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 20);
            i0.ɵɵelement(1, "i", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("href", ctx_r3.schema.linkBuilder(ctx_r3.value), i0.ɵɵsanitizeUrl);
        }
    }
    function PrimitiveFieldComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 20);
            i0.ɵɵelement(1, "i", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("href", ctx_r4.value, i0.ɵɵsanitizeUrl);
        }
    }
    function PrimitiveFieldComponent_tr_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelement(1, "patch-actions", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r5.removeJsonPatch);
        }
    }
    var _c0$a = function (a0, a1) { return { currentValue: a0, patchValue: a1 }; };
    function PrimitiveFieldComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 23);
            i0.ɵɵtext(1);
            i0.ɵɵelement(2, "i", 24);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            var _r8 = i0.ɵɵreference(13);
            i0.ɵɵproperty("popover", _r8)("popoverContext", i0.ɵɵpureFunction2(3, _c0$a, ctx_r7.value, ctx_r7.replaceJsonPatches[0].value));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r7.value, " ");
        }
    }
    function PrimitiveFieldComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "text-diff", 25);
            i0.ɵɵelement(1, "patch-actions", 26);
        }
        if (rf & 2) {
            var currentValue_r39 = ctx.currentValue;
            var patchValue_r40 = ctx.patchValue;
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵproperty("currentText", currentValue_r39.toString())("newText", patchValue_r40 ? patchValue_r40.toString() : "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("patch", ctx_r9.replaceJsonPatches[0])("addActionEnabled", ctx_r9.isPathToAnIndex);
        }
    }
    var PrimitiveFieldComponent = /** @class */ (function (_super) {
        __extends(PrimitiveFieldComponent, _super);
        function PrimitiveFieldComponent(schemaValidationService, componentTypeService, appGlobalsService, problemsService, jsonStoreService, keysStoreService, pathUtilService, domUtilService, changeDetectorRef) {
            var _this = _super.call(this, appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService) || this;
            _this.schemaValidationService = schemaValidationService;
            _this.componentTypeService = componentTypeService;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.keysStoreService = keysStoreService;
            _this.pathUtilService = pathUtilService;
            _this.domUtilService = domUtilService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.internalErrors = [];
            return _this;
        }
        PrimitiveFieldComponent.prototype.ngOnInit = function () {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            if (this.value !== this.schema.default) {
                this.lastCommitedValue = this.value;
            }
            this.problemsService
                .internalCategorizedProblems$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (internalCategorizedErrorMap) {
                _this.internalErrors = internalCategorizedErrorMap.errors[_this.pathString] || [];
            });
            this.appGlobalsService
                .adminMode$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (adminMode) {
                _this.changeDetectorRef.markForCheck();
            });
            this.validate();
        };
        PrimitiveFieldComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            if (this.internalErrors.length > 0) {
                this.problemsService.setInternalProblemsForPath(this.pathString, []);
            }
        };
        PrimitiveFieldComponent.prototype.commitValueChange = function () {
            var _this = this;
            this.validate();
            this.lastCommitedValue = this.value;
            this.jsonStoreService.setIn(this.path, this.value);
            if (this.schema.onValueChange) {
                // setTimeout to workaround the case when the value is changed back to previous value inside onValuChange callback
                setTimeout(function () { return _this.schema.onValueChange(_this.path, _this.value, _this.jsonStoreService, _this.keysStoreService); });
            }
        };
        PrimitiveFieldComponent.prototype.onBlur = function () {
            this.domUtilService.clearHighlight();
            if (this.value !== this.lastCommitedValue) {
                this.commitValueChange();
            }
        };
        PrimitiveFieldComponent.prototype.onKeypress = function (event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                document.activeElement.blur();
            }
        };
        PrimitiveFieldComponent.prototype.onValueChange = function (value) {
            this.value = value;
        };
        PrimitiveFieldComponent.prototype.onSearchableDropdownSelect = function (value) {
            this.onValueChange(value);
            this.commitValueChange();
        };
        PrimitiveFieldComponent.prototype.onCompletionSelect = function (selection) {
            this.commitValueChange();
            var onCompletionSelect = this.schema.autocompletionConfig.onCompletionSelect;
            if (onCompletionSelect) {
                onCompletionSelect(this.path, selection, this.jsonStoreService, this.keysStoreService);
            }
        };
        Object.defineProperty(PrimitiveFieldComponent.prototype, "tabIndex", {
            get: function () {
                return this.disabled ? -1 : 1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PrimitiveFieldComponent.prototype, "tooltipPosition", {
            get: function () {
                if (this.pathString.startsWith(this.appGlobalsService.firstElementPathForCurrentTab)) {
                    return 'bottom';
                }
                else {
                    return 'top';
                }
            },
            enumerable: false,
            configurable: true
        });
        PrimitiveFieldComponent.prototype.hasErrors = function () {
            return _super.prototype.hasErrors.call(this) || this.internalErrors.length > 0;
        };
        Object.defineProperty(PrimitiveFieldComponent.prototype, "errorClass", {
            get: function () {
                return !this.replaceJsonPatches[0] && this.hasErrors() ? 'error' : '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PrimitiveFieldComponent.prototype, "isPathToAnIndex", {
            get: function () {
                return typeof this.path[this.path.length - 1] === 'number';
            },
            enumerable: false,
            configurable: true
        });
        PrimitiveFieldComponent.prototype.validate = function () {
            if (this.value != null && this.value !== '' && this.externalErrors.length === 0) {
                this.internalErrors = this.schemaValidationService.validateValue(this.value, this.schema);
                this.problemsService.setInternalProblemsForPath(this.pathString, this.internalErrors);
            }
        };
        return PrimitiveFieldComponent;
    }(AbstractFieldComponent));
    PrimitiveFieldComponent.ɵfac = function PrimitiveFieldComponent_Factory(t) { return new (t || PrimitiveFieldComponent)(i0.ɵɵdirectiveInject(SchemaValidationService), i0.ɵɵdirectiveInject(ComponentTypeService), i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(KeysStoreService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PrimitiveFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PrimitiveFieldComponent, selectors: [["primitive-field"]], inputs: { schema: "schema", path: "path", value: "value" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 9, consts: [[3, "id", "ngClass"], [1, "primitive-field-container", 3, "ngSwitch"], [3, "ngClass"], ["errorsTooltipTemplate", ""], ["class", "value-container", "container", "body", 3, "disabled", "tooltip", "isDisabled", "placement", 4, "ngIf", "ngIfElse"], [1, "link-button-container"], ["class", "no-decoration", "target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], ["patchTemplate", ""], ["mergePopover", ""], [1, "tooltip-left-align"], [4, "ngFor", "ngForOf"], ["container", "body", 1, "value-container", 3, "tooltip", "isDisabled", "placement"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "pathString", "value", "disabled", "tabIndex", "latexPreviewEnabled", "placeholder", "valueChange", "blur", "onKeypress"], [3, "pathString", "value", "placeholder", "items", "shortcutMap", "displayValueMap", "tabIndex", "onSelect", "onBlur"], [3, "pathString", "value", "autocompletionConfig", "placeholder", "tabIndex", "onBlur", "onKeypress", "onValueChange", "onCompletionSelect"], ["type", "number", 3, "ngModel", "tabindex", "placeholder", "ngModelChange", "blur", "keypress"], ["type", "checkbox", 3, "ngModel", "placeholder", "ngModelChange"], ["target", "_blank", 1, "no-decoration", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-link"], [3, "patch"], ["type", "button", "popoverTitle", "Merge", "container", "body", 1, "btn", "btn-default", "btn-merge", "orange-left-border", 3, "popover", "popoverContext"], [1, "fa", "fa-bolt"], [3, "currentText", "newText"], [3, "patch", "addActionEnabled"]], template: function PrimitiveFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "table", 1);
                i0.ɵɵelementStart(2, "tr", 2);
                i0.ɵɵtemplate(3, PrimitiveFieldComponent_ng_template_3_Template, 3, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(5, PrimitiveFieldComponent_td_5_Template, 7, 10, "td", 4);
                i0.ɵɵelementStart(6, "td", 5);
                i0.ɵɵtemplate(7, PrimitiveFieldComponent_a_7_Template, 2, 1, "a", 6);
                i0.ɵɵtemplate(8, PrimitiveFieldComponent_a_8_Template, 2, 1, "a", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, PrimitiveFieldComponent_tr_9_Template, 2, 1, "tr", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, PrimitiveFieldComponent_ng_template_10_Template, 3, 6, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(12, PrimitiveFieldComponent_ng_template_12_Template, 2, 4, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r6 = i0.ɵɵreference(11);
                i0.ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitch", ctx.schema.componentType);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", ctx.errorClass);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", !ctx.replaceJsonPatches[0])("ngIfElse", _r6);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.schema.linkBuilder);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.schema.linkBuilder && ctx.schema.format === "url");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.removeJsonPatch);
            }
        }, directives: [i24.NgClass, i24.NgSwitch, i24.NgIf, i24.NgForOf, i16.TooltipDirective, i24.NgSwitchCase, i24.NgSwitchDefault, StringInputComponent, SearchableDropdownComponent, AutocompleteInputComponent, i25.NumberValueAccessor, i25.DefaultValueAccessor, i25.NgControlStatus, i25.NgModel, i25.CheckboxControlValueAccessor, PatchActionsComponent, i18.PopoverDirective, TextDiffComponent], styles: ["td.value-container input,td.value-container span[contenteditable=true]{background-color:transparent;border:none;display:inline-block;transition:all .5s ease;vertical-align:middle;width:100%}table.primitive-field-container{width:100%}td.link-button-container{width:22px}td.value-container{padding:3px 3px 3px 6px!important;width:100%}td.value-container:hover{background-color:#ffa!important}a.no-decoration{text-decoration:none}[contenteditable=true]{min-height:18px;word-break:break-word}[contenteditable=true]:empty:before{color:#a9a9a9;content:attr(placeholder);display:block}.tooltip-left-align{margin-left:12px;padding:0}.btn-merge{background:transparent;border:none;text-align:left;white-space:normal;width:100%}.orange-left-border{border-left:9px solid #e67e22;border-radius:0}.fa-bolt{color:#e67e22}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PrimitiveFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'primitive-field',
                        encapsulation: i0.ViewEncapsulation.None,
                        styleUrls: [
                            './primitive-field.component.scss'
                        ],
                        templateUrl: './primitive-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: SchemaValidationService }, { type: ComponentTypeService }, { type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: KeysStoreService }, { type: PathUtilService }, { type: DomUtilService }, { type: i0.ChangeDetectorRef }]; }, { schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }] });
    })();

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
    function RefFieldComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "primitive-field", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r0.ref)("schema", ctx_r0.schema["properties"]["$ref"])("path", ctx_r0.refPath);
        }
    }
    function RefFieldComponent_div_2_div_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 4);
            i0.ɵɵlistener("click", function RefFieldComponent_div_2_div_1_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(3); return ctx_r6.onPreviewClick($event); });
            i0.ɵɵelement(1, "i", 5);
            i0.ɵɵelementEnd();
        }
    }
    function RefFieldComponent_div_2_div_1_div_2_1_ng_template_0_Template(rf, ctx) { }
    var _c0$b = function (a0) { return { response: a0 }; };
    function RefFieldComponent_div_2_div_1_div_2_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, RefFieldComponent_div_2_div_1_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 7);
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.customTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0$b, ctx_r8.refData));
        }
    }
    function RefFieldComponent_div_2_div_1_div_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
    }
    function RefFieldComponent_div_2_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, RefFieldComponent_div_2_div_1_div_2_1_Template, 1, 4, undefined, 1);
            i0.ɵɵtemplate(2, RefFieldComponent_div_2_div_1_div_2_i_2_Template, 1, 0, "i", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.refData);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r5.refData);
        }
    }
    function RefFieldComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, RefFieldComponent_div_2_div_1_button_1_Template, 2, 0, "button", 3);
            i0.ɵɵtemplate(2, RefFieldComponent_div_2_div_1_div_2_Template, 3, 2, "div", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r2.shouldDisplayTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.shouldDisplayTemplate);
        }
    }
    function RefFieldComponent_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "a", 9);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("href", ctx_r3.anchorHref, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r3.anchorDisplay);
        }
    }
    function RefFieldComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, RefFieldComponent_div_2_div_1_Template, 3, 2, "div", 1);
            i0.ɵɵtemplate(2, RefFieldComponent_div_2_div_2_Template, 3, 2, "div", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.isTemplateEnabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r1.isTemplateEnabled);
        }
    }
    var RefFieldComponent = /** @class */ (function () {
        function RefFieldComponent(http, changeDetectorRef, appGlobalsService, pathUtilService) {
            this.http = http;
            this.changeDetectorRef = changeDetectorRef;
            this.appGlobalsService = appGlobalsService;
            this.pathUtilService = pathUtilService;
            this.isPreviewButtonHidden = false;
        }
        RefFieldComponent.prototype.ngOnChanges = function (changes) {
            if (this.refConfig) {
                var valueChange = changes['value'];
                var schemaChange = changes['schema'];
                if (valueChange && this.refConfig && this.refConfig.anchorBuilder && this.ref) {
                    this.anchorAttributes = this.refConfig.anchorBuilder(this.ref);
                }
                // instead of ngOnInit because requestOptions has to be set before fetching
                if (schemaChange && schemaChange.isFirstChange()) {
                    this.requestOptions = this.createRequestOptionsWithConfig();
                }
                if (valueChange && this.isTemplateEnabled) {
                    if (this.refConfig.lazy) {
                        this.isPreviewButtonHidden = false;
                    }
                    else {
                        this.fetchRef();
                    }
                }
            }
            if (changes['path']) {
                this.pathString = this.pathUtilService.toPathString(this.path);
                this.refPath = this.path.concat('$ref');
            }
        };
        RefFieldComponent.prototype.onPreviewClick = function () {
            this.isPreviewButtonHidden = true;
            this.fetchRef();
        };
        Object.defineProperty(RefFieldComponent.prototype, "customTemplate", {
            get: function () {
                return this.appGlobalsService.templates[this.refConfig.templateName];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RefFieldComponent.prototype, "refConfig", {
            get: function () {
                return this.schema.refFieldConfig;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RefFieldComponent.prototype, "ref", {
            get: function () {
                return this.value.get('$ref');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RefFieldComponent.prototype, "anchorHref", {
            get: function () {
                return this.anchorAttributes ? this.anchorAttributes.href : this.ref;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RefFieldComponent.prototype, "anchorDisplay", {
            get: function () {
                return this.anchorAttributes ? this.anchorAttributes.display : this.ref;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RefFieldComponent.prototype, "isTemplateEnabled", {
            get: function () {
                return this.refConfig !== undefined && this.refConfig.templateName !== undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RefFieldComponent.prototype, "shouldDisplayTemplate", {
            get: function () {
                return this.isPreviewButtonHidden || !this.refConfig.lazy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RefFieldComponent.prototype, "shouldDisplayInputField", {
            get: function () {
                return this.refConfig !== undefined && this.refConfig.displayInputField;
            },
            enumerable: false,
            configurable: true
        });
        RefFieldComponent.prototype.fetchRef = function () {
            var _this = this;
            this.refData = undefined;
            this.http
                .get(this.ref, this.requestOptions)
                .pipe(operators.map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.refData = data;
                _this.changeDetectorRef.markForCheck();
            });
        };
        RefFieldComponent.prototype.createRequestOptionsWithConfig = function () {
            var headers = new Headers();
            if (this.refConfig.headers) {
                this.refConfig.headers
                    .forEach(function (header) { return headers.append(header.name, header.value); });
            }
            return { headers: headers };
        };
        return RefFieldComponent;
    }());
    RefFieldComponent.ɵfac = function RefFieldComponent_Factory(t) { return new (t || RefFieldComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(PathUtilService)); };
    RefFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RefFieldComponent, selectors: [["ref-field"]], inputs: { schema: "schema", value: "value", path: "path" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "id"], [4, "ngIf"], [3, "value", "schema", "path"], ["class", "btn-preview-template", 3, "click", 4, "ngIf"], [1, "btn-preview-template", 3, "click"], [1, "fa", "fa-eye"], ["class", "fa fa-spinner fa-spin align-center", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "fa", "fa-spinner", "fa-spin", "align-center"], ["target", "_blank", 1, "break-word", 3, "href"]], template: function RefFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, RefFieldComponent_div_1_Template, 2, 3, "div", 1);
                i0.ɵɵtemplate(2, RefFieldComponent_div_2_Template, 3, 2, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.pathString);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.shouldDisplayInputField);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.ref);
            }
        }, directives: [i24.NgIf, PrimitiveFieldComponent, i24.NgTemplateOutlet], styles: ["button.btn-preview-template[_ngcontent-%COMP%]{background:transparent;border:0;height:100%;width:100%}.align-center[_ngcontent-%COMP%]{text-align:center;width:100%}.break-word[_ngcontent-%COMP%]{word-break:break-word}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RefFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ref-field',
                        styleUrls: [
                            './ref-field.component.scss'
                        ],
                        templateUrl: './ref-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1.HttpClient }, { type: i0.ChangeDetectorRef }, { type: AppGlobalsService }, { type: PathUtilService }]; }, { schema: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }] });
    })();

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
    function AnyTypeFieldComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "table-list-field", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("values", ctx_r0.value)("schema", ctx_r0.schema)("path", ctx_r0.path);
        }
    }
    function AnyTypeFieldComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "complex-list-field", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("values", ctx_r1.value)("schema", ctx_r1.schema)("path", ctx_r1.path);
        }
    }
    function AnyTypeFieldComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "primitive-list-field", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("values", ctx_r2.value)("schema", ctx_r2.schema)("path", ctx_r2.path);
        }
    }
    function AnyTypeFieldComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "object-field", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r3.value)("schema", ctx_r3.schema)("path", ctx_r3.path);
        }
    }
    function AnyTypeFieldComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "ref-field", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r4.value)("schema", ctx_r4.schema)("path", ctx_r4.path);
        }
    }
    function AnyTypeFieldComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "primitive-field", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r5.value)("schema", ctx_r5.schema)("path", ctx_r5.path);
        }
    }
    /**
     * AnyFieldComponent
     *
     * This is a dummy component that has no logic, just passes @Input to its child and
     * propagates its child's output to its parent.
     *
     * IMPORTANT:
     * On the other hand it has smart template which has logic to decide which type of
     * component to use according to schema.
     */
    var AnyTypeFieldComponent = /** @class */ (function () {
        function AnyTypeFieldComponent() {
        }
        return AnyTypeFieldComponent;
    }());
    AnyTypeFieldComponent.ɵfac = function AnyTypeFieldComponent_Factory(t) { return new (t || AnyTypeFieldComponent)(); };
    AnyTypeFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnyTypeFieldComponent, selectors: [["any-type-field"]], inputs: { schema: "schema", path: "path", value: "value" }, decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "values", "schema", "path"], [3, "value", "schema", "path"]], template: function AnyTypeFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, AnyTypeFieldComponent_div_1_Template, 2, 3, "div", 1);
                i0.ɵɵtemplate(2, AnyTypeFieldComponent_div_2_Template, 2, 3, "div", 1);
                i0.ɵɵtemplate(3, AnyTypeFieldComponent_div_3_Template, 2, 3, "div", 1);
                i0.ɵɵtemplate(4, AnyTypeFieldComponent_div_4_Template, 2, 3, "div", 1);
                i0.ɵɵtemplate(5, AnyTypeFieldComponent_div_5_Template, 2, 3, "div", 1);
                i0.ɵɵtemplate(6, AnyTypeFieldComponent_div_6_Template, 2, 3, "div", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngSwitch", ctx.schema.componentType);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "table-list");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "complex-list");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "primitive-list");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "object");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "ref");
            }
        }, directives: [i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, TableListFieldComponent, ComplexListFieldComponent, PrimitiveListFieldComponent, ObjectFieldComponent, RefFieldComponent, PrimitiveFieldComponent], styles: [""], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AnyTypeFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'any-type-field',
                        styleUrls: [
                            './any-type-field.component.scss'
                        ],
                        templateUrl: './any-type-field.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { schema: [{
                    type: i0.Input
                }], path: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }] });
    })();

    var AddNewElementButtonComponent = /** @class */ (function () {
        function AddNewElementButtonComponent(domUtilService, emptyValueService, jsonStoreService, pathUtilService, keyStoreService) {
            this.domUtilService = domUtilService;
            this.emptyValueService = emptyValueService;
            this.jsonStoreService = jsonStoreService;
            this.pathUtilService = pathUtilService;
            this.keyStoreService = keyStoreService;
        }
        AddNewElementButtonComponent.prototype.addNewElement = function () {
            var _this = this;
            var itemSchema = this.schema.items;
            var emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
            var values = this.jsonStoreService.getIn(this.path);
            var insertIndex = values ? values.size : 0;
            var insertPath = this.path.concat(insertIndex);
            this.jsonStoreService.addIn(insertPath, emptyValue);
            // focus on the new added element
            var insertPathString = this.pathUtilService.toPathString(insertPath);
            setTimeout(function () {
                _this.domUtilService.focusAndSelectFirstEditableChildById(insertPathString);
            });
        };
        return AddNewElementButtonComponent;
    }());
    AddNewElementButtonComponent.ɵfac = function AddNewElementButtonComponent_Factory(t) { return new (t || AddNewElementButtonComponent)(i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(EmptyValueService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(KeysStoreService)); };
    AddNewElementButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddNewElementButtonComponent, selectors: [["add-new-element-button"]], inputs: { path: "path", schema: "schema" }, decls: 3, vars: 2, consts: [[1, "button-container"], ["type", "button", 1, "btn-new-field", 3, "click"]], template: function AddNewElementButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function AddNewElementButtonComponent_Template_button_click_1_listener() { return ctx.addNewElement(); });
                i0.ɵɵtext(2, "Add new");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("disabled", ctx.schema.disabled);
            }
        }, styles: ["div.button-container[_ngcontent-%COMP%]{display:inline-block;width:100%}.btn-new-field[_ngcontent-%COMP%]{background:transparent;border:0;bottom:-5px;font-size:13px;font-weight:700;left:-5px;opacity:.5;padding:0;text-shadow:0 1px 0 #fff}.btn-new-field[_ngcontent-%COMP%]:hover{color:green!important;opacity:.6}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AddNewElementButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'add-new-element-button',
                        styleUrls: [
                            './add-new-element-button.component.scss'
                        ],
                        templateUrl: './add-new-element-button.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: DomUtilService }, { type: EmptyValueService }, { type: JsonStoreService }, { type: PathUtilService }, { type: KeysStoreService }]; }, { path: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }] });
    })();

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
    var SelfOrEmptyPipe = /** @class */ (function () {
        function SelfOrEmptyPipe(emptyValueService) {
            this.emptyValueService = emptyValueService;
        }
        /**
         * Transforms a value to empty value if it is undefined,
         * returns self if it is already defined
         *
         * @return - empty value if given value is undefined or value itself.
         */
        SelfOrEmptyPipe.prototype.transform = function (value, schema) {
            return value ? value : this.emptyValueService.generateEmptyValue(schema);
        };
        return SelfOrEmptyPipe;
    }());
    SelfOrEmptyPipe.ɵfac = function SelfOrEmptyPipe_Factory(t) { return new (t || SelfOrEmptyPipe)(i0.ɵɵdirectiveInject(EmptyValueService)); };
    SelfOrEmptyPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "selfOrEmpty", type: SelfOrEmptyPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelfOrEmptyPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'selfOrEmpty',
                    }]
            }], function () { return [{ type: EmptyValueService }]; }, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    var SetFirstElementPathPipe = /** @class */ (function () {
        function SetFirstElementPathPipe(appGlobalsService, pathUtilService) {
            this.appGlobalsService = appGlobalsService;
            this.pathUtilService = pathUtilService;
        }
        SetFirstElementPathPipe.prototype.transform = function (fields, tabName) {
            this.appGlobalsService.tabNameToFirstTopLevelElement[tabName] = "" + this.pathUtilService.separator + fields.first();
            return fields;
        };
        return SetFirstElementPathPipe;
    }());
    SetFirstElementPathPipe.ɵfac = function SetFirstElementPathPipe_Factory(t) { return new (t || SetFirstElementPathPipe)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(PathUtilService)); };
    SetFirstElementPathPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "setFirstElementPath", type: SetFirstElementPathPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SetFirstElementPathPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'setFirstElementPath'
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: PathUtilService }]; }, null);
    })();

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
    function SubRecordComponent_tr_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵelementStart(1, "slide-toggle", 7);
            i0.ɵɵlistener("valueChange", function SubRecordComponent_tr_3_td_1_Template_slide_toggle_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r5_1); var key_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onToggleValueChange(key_r3, $event); });
            i0.ɵɵpipe(2, "selfOrEmpty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r3 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", "/" + key_r3)("value", i0.ɵɵpipeBind2(2, 5, ctx_r2.value.get(key_r3), ctx_r2.schema.properties[key_r3]))("onText", key_r3)("offText", key_r3)("onColor", ctx_r2.schema.properties[key_r3].toggleColor);
        }
    }
    function SubRecordComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr", 5);
            i0.ɵɵtemplate(1, SubRecordComponent_tr_3_td_1_Template, 3, 8, "td", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.keysByType.toggles)("ngForTrackBy", ctx_r0.trackByElement);
        }
    }
    function SubRecordComponent_div_4_div_1_li_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 12);
            i0.ɵɵelement(1, "add-new-element-button", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r7 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("path", ctx_r8.getPathForChild(key_r7))("schema", ctx_r8.schema.properties[key_r7]);
        }
    }
    function SubRecordComponent_div_4_div_1_ng_container_9_li_1_ng_template_1_Template(rf, ctx) { }
    function SubRecordComponent_div_4_div_1_ng_container_9_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 19);
            i0.ɵɵtemplate(1, SubRecordComponent_div_4_div_1_ng_container_9_li_1_ng_template_1_Template, 0, 0, "ng-template", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var templateName_r12 = ctx.$implicit;
            var ctx_r11 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r11.appGlobalsService.templates[templateName_r12]);
        }
    }
    function SubRecordComponent_div_4_div_1_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, SubRecordComponent_div_4_div_1_ng_container_9_li_1_Template, 2, 1, "li", 18);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var key_r7 = i0.ɵɵnextContext().$implicit;
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r9.getTitleDropdownItemTemplateNamesForChild(key_r7));
        }
    }
    function SubRecordComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵelementStart(1, "tr");
            i0.ɵɵelementStart(2, "td", 9);
            i0.ɵɵelementStart(3, "title-dropdown", 10);
            i0.ɵɵpipe(4, "underscoreToSpace");
            i0.ɵɵtemplate(5, SubRecordComponent_div_4_div_1_li_5_Template, 2, 2, "li", 11);
            i0.ɵɵelementStart(6, "li", 12);
            i0.ɵɵelementStart(7, "button", 13);
            i0.ɵɵlistener("click", function SubRecordComponent_div_4_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r16_1); var key_r7 = ctx.$implicit; var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.deleteField(key_r7); });
            i0.ɵɵtext(8, "Delete");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, SubRecordComponent_div_4_div_1_ng_container_9_Template, 2, 1, "ng-container", 4);
            i0.ɵɵelement(10, "li", 14);
            i0.ɵɵelementStart(11, "li", 15);
            i0.ɵɵlistener("click", function SubRecordComponent_div_4_div_1_Template_li_click_11_listener($event) { i0.ɵɵrestoreView(_r16_1); return $event.stopPropagation(); });
            i0.ɵɵelement(12, "find-replace", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "tr");
            i0.ɵɵelementStart(14, "td");
            i0.ɵɵelement(15, "any-type-field", 17);
            i0.ɵɵpipe(16, "selfOrEmpty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r7 = ctx.$implicit;
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", i0.ɵɵpipeBind1(4, 9, key_r7))("isDisabled", ctx_r6.isDisabled(key_r7));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r6.schema.properties[key_r7].type === "array");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx_r6.getTitleDropdownItemTemplateNamesForChild(key_r7));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("path", ctx_r6.getPathForChild(key_r7))("schema", ctx_r6.schema.properties[key_r7]);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", i0.ɵɵpipeBind2(16, 11, ctx_r6.value.get(key_r7), ctx_r6.schema.properties[key_r7]))("schema", ctx_r6.schema.properties[key_r7])("path", ctx_r6.getPathForChild(key_r7));
        }
    }
    function SubRecordComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, SubRecordComponent_div_4_div_1_Template, 17, 14, "div", 8);
            i0.ɵɵpipe(2, "setFirstElementPath");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 2, ctx_r1.keysByType.others, ctx_r1.tabName))("ngForTrackBy", ctx_r1.trackByElement);
        }
    }
    var SubRecordComponent = /** @class */ (function () {
        function SubRecordComponent(jsonStoreService, appGlobalsService, tabsUtilService, keysStoreService) {
            this.jsonStoreService = jsonStoreService;
            this.appGlobalsService = appGlobalsService;
            this.tabsUtilService = tabsUtilService;
            this.keysStoreService = keysStoreService;
            this.pathCache = {};
        }
        SubRecordComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['keys']) {
                var keys = void 0;
                if (this.tabName) {
                    var keyToTabName_1 = this.tabsUtilService.getSchemaKeyToTabName(this.appGlobalsService.config.tabsConfig, this.schema);
                    keys = this.keys
                        .filter(function (key) { return keyToTabName_1[key] === _this.tabName; });
                }
                else {
                    keys = this.keys;
                }
                this.keysByType = keys
                    .groupBy(function (key) { return _this.isToggle(key) ? 'toggles' : 'others'; })
                    .toObject();
            }
        };
        // delete only work for others, not toggles (UPDATE: config comment if this changes)
        SubRecordComponent.prototype.deleteField = function (field) {
            this.jsonStoreService.removeIn(this.getPathForChild(field));
        };
        SubRecordComponent.prototype.getPathForChild = function (key) {
            if (!this.pathCache[key]) {
                this.pathCache[key] = [key];
            }
            return this.pathCache[key];
        };
        SubRecordComponent.prototype.onToggleValueChange = function (field, value) {
            this.jsonStoreService.setIn(this.getPathForChild(field), value);
        };
        SubRecordComponent.prototype.isToggle = function (field) {
            return this.schema.properties[field].toggleColor !== undefined;
        };
        SubRecordComponent.prototype.isDisabled = function (key) {
            return this.schema.properties[key].disabled && !this.appGlobalsService.adminMode;
        };
        SubRecordComponent.prototype.trackByElement = function (index, element) {
            return element;
        };
        SubRecordComponent.prototype.getTitleDropdownItemTemplateNamesForChild = function (key) {
            return this.schema.properties[key].titleDropdownItemTemplateNames;
        };
        return SubRecordComponent;
    }());
    SubRecordComponent.ɵfac = function SubRecordComponent_Factory(t) { return new (t || SubRecordComponent)(i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(TabsUtilService), i0.ɵɵdirectiveInject(KeysStoreService)); };
    SubRecordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubRecordComponent, selectors: [["sub-record"]], inputs: { value: "value", schema: "schema", tabName: "tabName", keys: "keys", pathString: "pathString" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [[1, "record-fields-container"], [1, "table"], [1, "field-wrapper"], ["class", "align-right", 4, "ngIf"], [4, "ngIf"], [1, "align-right"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "value", "onText", "offText", "onColor", "valueChange"], ["class", "field-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "label-holder"], [3, "title", "isDisabled"], ["class", "title-dropdown-item", 4, "ngIf"], [1, "title-dropdown-item"], ["type", "button", 1, "editor-btn-delete", "editor-btn-delete-text", 3, "click"], [1, "divider"], [1, "title-dropdown-item", 3, "click"], [3, "path", "schema"], [3, "value", "schema", "path"], ["class", "title-dropdown-item custom-title-dropdown-item", 4, "ngFor", "ngForOf"], [1, "title-dropdown-item", "custom-title-dropdown-item"], [3, "ngTemplateOutlet"]], template: function SubRecordComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "table", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, SubRecordComponent_tr_3_Template, 2, 2, "tr", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, SubRecordComponent_div_4_Template, 3, 5, "div", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.keysByType.toggles);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.keysByType.others);
            }
        }, directives: [i24.NgIf, i24.NgForOf, TitleDropdownComponent, FindReplaceComponent, AnyTypeFieldComponent, AddNewElementButtonComponent, i24.NgTemplateOutlet], pipes: [SelfOrEmptyPipe, SetFirstElementPathPipe, UnderscoreToSpacePipe], styles: ["tr.align-right[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:100%}tr.align-right[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   slide-toggle[_ngcontent-%COMP%]{float:right}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SubRecordComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'sub-record',
                        styleUrls: [
                            './sub-record.component.scss'
                        ],
                        templateUrl: './sub-record.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: JsonStoreService }, { type: AppGlobalsService }, { type: TabsUtilService }, { type: KeysStoreService }]; }, { value: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], tabName: [{
                    type: i0.Input
                }], keys: [{
                    type: i0.Input
                }], pathString: [{
                    type: i0.Input
                }] });
    })();

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
    var SanitizeUrlPipe = /** @class */ (function () {
        function SanitizeUrlPipe(domSanitizer) {
            this.domSanitizer = domSanitizer;
        }
        /**
         * Transforms url to safe url that can be used for `<script src>` or `<iframe src>`
         *
         * @param {string} url
         * @return {SafeResourceUrl}
         */
        SanitizeUrlPipe.prototype.transform = function (url) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SanitizeUrlPipe;
    }());
    SanitizeUrlPipe.ɵfac = function SanitizeUrlPipe_Factory(t) { return new (t || SanitizeUrlPipe)(i0.ɵɵdirectiveInject(i1$1.DomSanitizer)); };
    SanitizeUrlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "sanitizeUrl", type: SanitizeUrlPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SanitizeUrlPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'sanitizeUrl',
                    }]
            }], function () { return [{ type: i1$1.DomSanitizer }]; }, null);
    })();

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
    var HtmlViewComponent = /** @class */ (function () {
        function HtmlViewComponent() {
        }
        return HtmlViewComponent;
    }());
    HtmlViewComponent.ɵfac = function HtmlViewComponent_Factory(t) { return new (t || HtmlViewComponent)(); };
    HtmlViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HtmlViewComponent, selectors: [["html-view"]], inputs: { url: "url" }, decls: 2, vars: 3, consts: [[1, "fit-parent", 3, "data"]], template: function HtmlViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "object", 0);
                i0.ɵɵpipe(1, "sanitizeUrl");
            }
            if (rf & 2) {
                i0.ɵɵproperty("data", i0.ɵɵpipeBind1(1, 1, ctx.url), i0.ɵɵsanitizeResourceUrl);
            }
        }, pipes: [SanitizeUrlPipe], styles: [".fit-parent[_ngcontent-%COMP%]{height:100%;width:100%}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HtmlViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'html-view',
                        styleUrls: [
                            './html-view.component.scss'
                        ],
                        templateUrl: './html-view.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { url: [{
                    type: i0.Input
                }] });
    })();

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
    function EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 7);
            i0.ɵɵlistener("click", function EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var preview_r1 = i0.ɵɵnextContext(2).$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.openUrlInNewWindow(preview_r1.url); });
            i0.ɵɵelement(1, "i", 8);
            i0.ɵɵelementEnd();
        }
    }
    function EditorPreviewerComponent_tab_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtemplate(1, EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template, 2, 0, "ng-template", 5);
            i0.ɵɵelement(2, "html-view", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var preview_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("url", preview_r1.url);
        }
    }
    function EditorPreviewerComponent_tab_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tab", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵtemplate(2, EditorPreviewerComponent_tab_2_div_2_Template, 3, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var preview_r1 = ctx.$implicit;
            i0.ɵɵproperty("heading", preview_r1.name);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", preview_r1.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "html");
        }
    }
    var EditorPreviewerComponent = /** @class */ (function () {
        function EditorPreviewerComponent() {
        }
        EditorPreviewerComponent.prototype.openUrlInNewWindow = function (url) {
            window.open(url, 'Preview', 'left=20,top=20,width=750,height=750');
        };
        EditorPreviewerComponent.prototype.trackByIndex = function (index, element) {
            return index;
        };
        return EditorPreviewerComponent;
    }());
    EditorPreviewerComponent.ɵfac = function EditorPreviewerComponent_Factory(t) { return new (t || EditorPreviewerComponent)(); };
    EditorPreviewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditorPreviewerComponent, selectors: [["editor-previewer"]], inputs: { previews: "previews" }, decls: 3, vars: 2, consts: [[3, "heading", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "heading"], [3, "ngSwitch"], ["class", "preview-container", 4, "ngSwitchCase"], [1, "preview-container"], ["tabHeading", ""], [3, "url"], [1, "preview-link", 3, "click"], [1, "fa", "fa-external-link"]], template: function EditorPreviewerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "tabset");
                i0.ɵɵtemplate(2, EditorPreviewerComponent_tab_2_Template, 3, 3, "tab", 0);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.previews)("ngForTrackBy", ctx.trackByIndex);
            }
        }, directives: [i22.TabsetComponent, i24.NgForOf, i22.TabDirective, i24.NgSwitch, i24.NgSwitchCase, i22.TabHeadingDirective, HtmlViewComponent], styles: ["div.preview-container[_ngcontent-%COMP%]{height:95vh;width:100%}span.preview-link[_ngcontent-%COMP%]{color:#337ab7;cursor:pointer}span.preview-link[_ngcontent-%COMP%]:hover{color:#6495ed}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EditorPreviewerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-previewer',
                        styleUrls: [
                            './editor-previewer.component.scss'
                        ],
                        templateUrl: './editor-previewer.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { previews: [{
                    type: i0.Input
                }] });
    })();

    function ProblemsConsoleTabComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 3);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "titlecase");
            i0.ɵɵelementStart(3, "span", 4);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r0.iconClassName);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, ctx_r0.problemType), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r0.problemCount);
        }
    }
    function ProblemsConsoleTabComponent_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 6);
            i0.ɵɵlistener("click", function ProblemsConsoleTabComponent_ng_container_2_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var key_r3 = i0.ɵɵnextContext().$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.focusAndSelectPath(key_r3); });
            i0.ɵɵelement(1, "i", 3);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var problem_r5 = ctx.$implicit;
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx_r4.iconClassName);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", problem_r5.message, " ");
        }
    }
    function ProblemsConsoleTabComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ProblemsConsoleTabComponent_ng_container_2_li_1_Template, 3, 2, "li", 5);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var key_r3 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.internalProblemMap[key_r3]);
        }
    }
    function ProblemsConsoleTabComponent_ng_container_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 6);
            i0.ɵɵlistener("click", function ProblemsConsoleTabComponent_ng_container_4_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r14_1); var key_r9 = i0.ɵɵnextContext().$implicit; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.focusAndSelectPath(key_r9); });
            i0.ɵɵelement(1, "i", 3);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var problem_r11 = ctx.$implicit;
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx_r10.iconClassName);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", problem_r11.message, " ");
        }
    }
    function ProblemsConsoleTabComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ProblemsConsoleTabComponent_ng_container_4_li_1_Template, 3, 2, "li", 5);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var key_r9 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r2.externalProblemMap[key_r9]);
        }
    }
    var ProblemsConsoleTabComponent = /** @class */ (function (_super) {
        __extends(ProblemsConsoleTabComponent, _super);
        function ProblemsConsoleTabComponent(domUtilService, pathUtilService, problemsService, changeDetectorRef) {
            var _this = _super.call(this) || this;
            _this.domUtilService = domUtilService;
            _this.pathUtilService = pathUtilService;
            _this.problemsService = problemsService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.problemCount = 0;
            return _this;
        }
        ProblemsConsoleTabComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.problemsService.externalCategorizedProblems$
                .pipe(operators.map(function (categorizedProblemMap) { return categorizedProblemMap[_this.problemType]; }))
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (problemMap) {
                _this.externalProblemMap = problemMap;
                _this.changeDetectorRef.markForCheck();
            });
            this.problemsService.internalCategorizedProblems$
                .pipe(operators.map(function (categorizedProblemMap) { return categorizedProblemMap[_this.problemType]; }))
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (problemMap) {
                _this.internalProblemMap = problemMap;
                _this.changeDetectorRef.markForCheck();
            });
            // TODO: create WarningsConsoleTabComponent with same template to avoid `if`
            var problemCount$ = this.problemType === 'errors' ? this.problemsService.errorCount$ : this.problemsService.warningCount$;
            problemCount$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (problemCount) {
                _this.problemCount = problemCount;
            });
            this.iconClassName = this.problemType === 'errors' ? 'fa fa-times' : 'fa fa-exclamation-triangle';
        };
        ProblemsConsoleTabComponent.prototype.focusAndSelectPath = function (path) {
            this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
        };
        return ProblemsConsoleTabComponent;
    }(AbstractSubscriberComponent));
    ProblemsConsoleTabComponent.ɵfac = function ProblemsConsoleTabComponent_Factory(t) { return new (t || ProblemsConsoleTabComponent)(i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    ProblemsConsoleTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProblemsConsoleTabComponent, selectors: [["problems-console-tab"]], inputs: { problemType: "problemType" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["tabHeading", ""], [1, "list-group"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "badge"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function ProblemsConsoleTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ProblemsConsoleTabComponent_ng_template_0_Template, 5, 5, "ng-template", 0);
                i0.ɵɵelementStart(1, "ul", 1);
                i0.ɵɵtemplate(2, ProblemsConsoleTabComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
                i0.ɵɵpipe(3, "keys");
                i0.ɵɵtemplate(4, ProblemsConsoleTabComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
                i0.ɵɵpipe(5, "keys");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx.internalProblemMap));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 4, ctx.externalProblemMap));
            }
        }, directives: [i22.TabHeadingDirective, i24.NgForOf, i24.NgClass], pipes: [KeysPipe, i24.TitleCasePipe], styles: [".list-group-item[_ngcontent-%COMP%]:hover{background-color:#faebcc}.list-group-item[_ngcontent-%COMP%]:hover > .title[_ngcontent-%COMP%]{text-decoration:underline}.list-group-item[_ngcontent-%COMP%]:hover.nested{background-color:#e2dcd1}.list-group-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0074d9;cursor:pointer}", ".fa-exclamation-triangle[_ngcontent-%COMP%]{color:#f1c40f}.fa-times[_ngcontent-%COMP%]{color:#d14024}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ProblemsConsoleTabComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'problems-console-tab',
                        styleUrls: [
                            '../abstract-console-tab/abstract-console-tab.component.scss',
                            './problems-console-tab.component.scss'
                        ],
                        templateUrl: './problems-console-tab.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: DomUtilService }, { type: PathUtilService }, { type: ProblemsService }, { type: i0.ChangeDetectorRef }]; }, { problemType: [{
                    type: i0.Input
                }] });
    })();

    function PatchesConsoleTabComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 4);
            i0.ɵɵtext(1, " Conflicts ");
            i0.ɵɵelementStart(2, "span", 5);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r0.patches.length);
        }
    }
    function PatchesConsoleTabComponent_div_1_ng_template_1_Template(rf, ctx) { }
    function PatchesConsoleTabComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵtemplate(1, PatchesConsoleTabComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 7);
            i0.ɵɵelementStart(2, "button", 8);
            i0.ɵɵlistener("click", function PatchesConsoleTabComponent_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.acceptAll(); });
            i0.ɵɵtext(3, "Accept All");
            i0.ɵɵelement(4, "i", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 10);
            i0.ɵɵlistener("click", function PatchesConsoleTabComponent_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.rejectAll(); });
            i0.ɵɵtext(6, "Reject All");
            i0.ɵɵelement(7, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customHeaderTemplate);
        }
    }
    function PatchesConsoleTabComponent_li_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 15);
            i0.ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var path_r7 = i0.ɵɵnextContext().$implicit; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.focusPatch(ctx_r10.patchesByPath[path_r7][0]); });
            i0.ɵɵelement(1, "i", 4);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var path_r7 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx_r8.patchesByPath[path_r7][0].path, " - ", ctx_r8.patchesByPath[path_r7][0].op, " ");
        }
    }
    function PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 20);
            i0.ɵɵelementStart(1, "span", 15);
            i0.ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r18_1); var patch_r16 = ctx.$implicit; var ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.focusPatch(patch_r16); });
            i0.ɵɵelement(2, "i", 4);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var patch_r16 = ctx.$implicit;
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2(" ", patch_r16.path, " - ", patch_r16.op, " ");
        }
    }
    function PatchesConsoleTabComponent_li_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 15);
            i0.ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_ng_container_2_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r20_1); var _r14 = i0.ɵɵreference(5); return _r14.toggle(); });
            i0.ɵɵelement(2, "i", 16);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ul", 17, 18);
            i0.ɵɵtemplate(6, PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template, 4, 2, "li", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var path_r7 = i0.ɵɵnextContext().$implicit;
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("aria-controls", path_r7 + "-collapse");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", path_r7, " (", ctx_r9.patchesByPath[path_r7].length, ") ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("collapse", true);
            i0.ɵɵattribute("id", path_r7 + "-collapse");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r9.patchesByPath[path_r7]);
        }
    }
    function PatchesConsoleTabComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 12);
            i0.ɵɵtemplate(1, PatchesConsoleTabComponent_li_3_span_1_Template, 3, 2, "span", 13);
            i0.ɵɵtemplate(2, PatchesConsoleTabComponent_li_3_ng_container_2_Template, 7, 6, "ng-container", 14);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var path_r7 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.patchesByPath[path_r7].length === 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.patchesByPath[path_r7].length > 1);
        }
    }
    var PatchesConsoleTabComponent = /** @class */ (function (_super) {
        __extends(PatchesConsoleTabComponent, _super);
        function PatchesConsoleTabComponent(domUtilService, appGlobalsService, pathUtilService, jsonStoreService, changeDetectorRef) {
            var _this = _super.call(this) || this;
            _this.domUtilService = domUtilService;
            _this.appGlobalsService = appGlobalsService;
            _this.pathUtilService = pathUtilService;
            _this.jsonStoreService = jsonStoreService;
            _this.changeDetectorRef = changeDetectorRef;
            _this.patchesByPath = {};
            return _this;
        }
        PatchesConsoleTabComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.jsonStoreService.patchesByPath$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (patchesByPath) {
                _this.patchesByPath = patchesByPath;
                _this.changeDetectorRef.markForCheck();
            });
        };
        PatchesConsoleTabComponent.prototype.focusPatch = function (patch) {
            this.domUtilService.focusPatch(patch);
        };
        Object.defineProperty(PatchesConsoleTabComponent.prototype, "patches", {
            get: function () {
                var _this = this;
                return Object
                    .keys(this.patchesByPath)
                    .reduce(function (patches, path) { return patches.concat(_this.patchesByPath[path]); }, []);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PatchesConsoleTabComponent.prototype, "customHeaderTemplate", {
            get: function () {
                return this.appGlobalsService.templates.patchesHeaderTemplate;
            },
            enumerable: false,
            configurable: true
        });
        PatchesConsoleTabComponent.prototype.acceptAll = function () {
            var _this = this;
            this.patches
                .forEach(function (patch) { return _this.jsonStoreService.applyPatch(patch); });
        };
        PatchesConsoleTabComponent.prototype.rejectAll = function () {
            var _this = this;
            this.patches
                .forEach(function (patch) { return _this.jsonStoreService.rejectPatch(patch); });
        };
        return PatchesConsoleTabComponent;
    }(AbstractSubscriberComponent));
    PatchesConsoleTabComponent.ɵfac = function PatchesConsoleTabComponent_Factory(t) { return new (t || PatchesConsoleTabComponent)(i0.ɵɵdirectiveInject(DomUtilService), i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PatchesConsoleTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PatchesConsoleTabComponent, selectors: [["patches-console-tab"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["tabHeading", ""], ["class", "header-container", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "fa", "fa-bolt"], [1, "badge"], [1, "header-container"], [3, "ngTemplateOutlet"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check", "icon-padding-left"], [1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-times", "icon-padding-left"], [1, "list-group-item"], ["role", "button", "class", "title", 3, "click", 4, "ngIf"], [4, "ngIf"], ["role", "button", 1, "title", 3, "click"], [1, "fa", "fa-expand"], [1, "list-group", 3, "collapse"], ["collapse", "bs-collapse"], ["class", "list-group-item nested", 4, "ngFor", "ngForOf"], [1, "list-group-item", "nested"]], template: function PatchesConsoleTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PatchesConsoleTabComponent_ng_template_0_Template, 4, 1, "ng-template", 0);
                i0.ɵɵtemplate(1, PatchesConsoleTabComponent_div_1_Template, 8, 1, "div", 1);
                i0.ɵɵelementStart(2, "ul", 2);
                i0.ɵɵtemplate(3, PatchesConsoleTabComponent_li_3_Template, 3, 2, "li", 3);
                i0.ɵɵpipe(4, "sortAlphabetically");
                i0.ɵɵpipe(5, "keys");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.patches && ctx.patches.length > 0);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 2, i0.ɵɵpipeBind1(5, 4, ctx.patchesByPath)));
            }
        }, directives: [i22.TabHeadingDirective, i24.NgIf, i24.NgForOf, i24.NgTemplateOutlet, i17.CollapseDirective], pipes: [SortAlphabeticallyPipe, KeysPipe], styles: [".list-group-item[_ngcontent-%COMP%]:hover{background-color:#faebcc}.list-group-item[_ngcontent-%COMP%]:hover > .title[_ngcontent-%COMP%]{text-decoration:underline}.list-group-item[_ngcontent-%COMP%]:hover.nested{background-color:#e2dcd1}.list-group-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0074d9;cursor:pointer}", ".fa-bolt[_ngcontent-%COMP%]{color:#e67e22}.icon-padding-left[_ngcontent-%COMP%]{padding-left:8px}.header-container[_ngcontent-%COMP%]{padding:8px}.header-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-left:4px;margin-right:4px}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PatchesConsoleTabComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'patches-console-tab',
                        styleUrls: [
                            '../abstract-console-tab/abstract-console-tab.component.scss',
                            './patches-console-tab.component.scss'
                        ],
                        templateUrl: './patches-console-tab.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: DomUtilService }, { type: AppGlobalsService }, { type: PathUtilService }, { type: JsonStoreService }, { type: i0.ChangeDetectorRef }]; }, null);
    })();

    /*
     * This file is part of ng2-json-editor.
     * Copyright (C) 2017 CERN.
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
    function BottomConsoleComponent_div_0_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 6);
        }
    }
    function BottomConsoleComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "tabset");
            i0.ɵɵelementStart(2, "tab", 2);
            i0.ɵɵelement(3, "problems-console-tab", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "tab", 2);
            i0.ɵɵelement(5, "problems-console-tab", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "tab", 2);
            i0.ɵɵelement(7, "patches-console-tab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "tab", 4);
            i0.ɵɵlistener("select", function BottomConsoleComponent_div_0_Template_tab_select_8_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.closePanel(); });
            i0.ɵɵtemplate(9, BottomConsoleComponent_div_0_ng_template_9_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("active", ctx_r0.isActive("Errors"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("problemType", "errors");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("active", ctx_r0.isActive("Warnings"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("problemType", "warnings");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("active", ctx_r0.isActive("Patches"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("customClass", "pull-right");
        }
    }
    var BottomConsoleComponent = /** @class */ (function () {
        function BottomConsoleComponent() {
            this.isOpen = false;
            this.activeTab = '';
            this.onCollapse = new i0.EventEmitter();
        }
        BottomConsoleComponent.prototype.closePanel = function () {
            this.onCollapse.emit(false);
        };
        BottomConsoleComponent.prototype.isActive = function (tabName) {
            return tabName === this.activeTab;
        };
        return BottomConsoleComponent;
    }());
    BottomConsoleComponent.ɵfac = function BottomConsoleComponent_Factory(t) { return new (t || BottomConsoleComponent)(); };
    BottomConsoleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BottomConsoleComponent, selectors: [["bottom-console"]], inputs: { isOpen: "isOpen", activeTab: "activeTab" }, outputs: { onCollapse: "onCollapse" }, decls: 1, vars: 1, consts: [["class", "bottom-console-container", 4, "ngIf"], [1, "bottom-console-container"], [3, "active"], [3, "problemType"], [3, "customClass", "select"], ["tabHeading", ""], [1, "fa", "fa-window-close"]], template: function BottomConsoleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BottomConsoleComponent_div_0_Template, 10, 6, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.isOpen);
            }
        }, directives: [i24.NgIf, i22.TabsetComponent, i22.TabDirective, ProblemsConsoleTabComponent, PatchesConsoleTabComponent, i22.TabHeadingDirective], styles: [""], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BottomConsoleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-console',
                        styleUrls: [
                            './bottom-console.component.scss'
                        ],
                        templateUrl: './bottom-console.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { isOpen: [{
                    type: i0.Input
                }], activeTab: [{
                    type: i0.Input
                }], onCollapse: [{
                    type: i0.Output
                }] });
    })();

    function JsonEditorComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "add-field-dropdown", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelement(3, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 12);
            i0.ɵɵlistener("click", function JsonEditorComponent_div_1_Template_span_click_4_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.isPreviewerHidden = !ctx_r7.isPreviewerHidden; });
            i0.ɵɵelement(5, "i", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "bottom-console-badges", 14);
            i0.ɵɵlistener("badgeClick", function JsonEditorComponent_div_1_Template_bottom_console_badges_badgeClick_6_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.openBottomConsole($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span", 15);
            i0.ɵɵlistener("click", function JsonEditorComponent_div_1_Template_span_click_7_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.isSidebarCollapsed = !ctx_r10.isSidebarCollapsed; });
            i0.ɵɵelement(8, "i", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(2, 7, ctx_r0.keys$))("pathString", ctx_r0.pathString)("schema", ctx_r0.fixedSchema);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("tooltip", ctx_r0.isPreviewerHidden ? "Show Preview" : "Hide Preview");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", !ctx_r0.isPreviewerHidden ? "fa-eye-slash" : "fa-eye");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("rotate", !ctx_r0.isSidebarCollapsed);
        }
    }
    function JsonEditorComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵelementStart(1, "input", 21);
            i0.ɵɵlistener("ngModelChange", function JsonEditorComponent_div_2_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.appGlobalsService.adminMode = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "label", 22);
            i0.ɵɵtext(3, "Enable Admin Mode");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r11.appGlobalsService.adminMode);
        }
    }
    function JsonEditorComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵelement(1, "tree-menu", 18);
            i0.ɵɵelement(2, "hr");
            i0.ɵɵtemplate(3, JsonEditorComponent_div_2_div_3_Template, 4, 1, "div", 19);
            i0.ɵɵelement(4, "hr");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r1.isSidebarCollapsed ? "close" : "open");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("record", ctx_r1._record)("schema", ctx_r1.fixedSchema);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r1.config.enableAdminModeSwitch);
        }
    }
    function JsonEditorComponent_add_field_dropdown_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "add-field-dropdown", 23);
            i0.ɵɵpipe(1, "async");
            i0.ɵɵtext(2, "Add field");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(1, 3, ctx_r2.keys$))("pathString", ctx_r2.pathString)("schema", ctx_r2.fixedSchema);
        }
    }
    function JsonEditorComponent_tabset_5_tab_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tab", 25);
            i0.ɵɵlistener("select", function JsonEditorComponent_tabset_5_tab_1_Template_tab_select_0_listener() { i0.ɵɵrestoreView(_r17_1); var tabName_r15 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.activeTabName = tabName_r15; });
            i0.ɵɵelement(1, "sub-record", 26);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tabName_r15 = ctx.$implicit;
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("heading", tabName_r15)("active", ctx_r14.isActiveTab(tabName_r15));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r14._record)("tabName", tabName_r15)("schema", ctx_r14.fixedSchema)("keys", i0.ɵɵpipeBind1(2, 7, ctx_r14.keys$))("pathString", ctx_r14.pathString);
        }
    }
    function JsonEditorComponent_tabset_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tabset");
            i0.ɵɵtemplate(1, JsonEditorComponent_tabset_5_tab_1_Template, 3, 9, "tab", 24);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r3.tabNames)("ngForTrackBy", ctx_r3.trackByElement);
        }
    }
    function JsonEditorComponent_sub_record_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "sub-record", 27);
            i0.ɵɵpipe(1, "async");
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", ctx_r4._record)("schema", ctx_r4.fixedSchema)("keys", i0.ɵɵpipeBind1(1, 4, ctx_r4.keys$))("pathString", ctx_r4.pathString);
        }
    }
    function JsonEditorComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 28);
            i0.ɵɵelement(1, "editor-previewer", 29);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r5.isPreviewerHidden ? "minimizePreview" : "maximizePreview");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", ctx_r5.isPreviewerHidden)("previews", ctx_r5.previews);
        }
    }
    function JsonEditorComponent_bottom_console_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bottom-console", 30);
            i0.ɵɵlistener("onCollapse", function JsonEditorComponent_bottom_console_8_Template_bottom_console_onCollapse_0_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.isBottomConsoleOpen = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵproperty("activeTab", ctx_r6.bottomConsoleActiveTab)("isOpen", ctx_r6.isBottomConsoleOpen);
        }
    }
    var _c0$c = function (a0, a1) { return { "maximizeEditor": a0, "compact": a1 }; };
    var JsonEditorComponent = /** @class */ (function (_super) {
        __extends(JsonEditorComponent, _super);
        function JsonEditorComponent(appGlobalsService, problemsService, jsonStoreService, jsonUtilService, jsonSchemaService, keysStoreService, recordFixerService, schemaFixerService, tabsUtilService, pathUtilService) {
            var _this = _super.call(this) || this;
            _this.appGlobalsService = appGlobalsService;
            _this.problemsService = problemsService;
            _this.jsonStoreService = jsonStoreService;
            _this.jsonUtilService = jsonUtilService;
            _this.jsonSchemaService = jsonSchemaService;
            _this.keysStoreService = keysStoreService;
            _this.recordFixerService = recordFixerService;
            _this.schemaFixerService = schemaFixerService;
            _this.tabsUtilService = tabsUtilService;
            _this.pathUtilService = pathUtilService;
            _this.recordChange = new i0.EventEmitter();
            _this.jsonPatchesChange = new i0.EventEmitter();
            _this.validationProblems = new i0.EventEmitter();
            _this.pathString = '';
            _this.isBottomConsoleOpen = false;
            _this.isPreviewerHidden = false;
            _this.isSidebarCollapsed = true;
            _this.bottomConsoleActiveTab = '';
            return _this;
        }
        JsonEditorComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.isPreviewerHidden = this.config.isPreviewerHiddenOnStart;
            this.appGlobalsService.adminMode$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (adminMode) {
                _this.keysStoreService.buildKeysMap(_this._record, _this.fixedSchema);
            });
            // listen for all changes on json
            this.jsonStoreService.json$
                .pipe(operators.skipWhile(function (json) { return json === _this._record; }))
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (json) {
                _this._record = json;
                // emit the change as plain JS object
                _this.lastEmittedRecord = json.toJS();
                _this.recordChange.emit(_this.lastEmittedRecord);
            });
            // list for all changes on jsonPatches
            this.jsonStoreService.jsonPatches$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (patches) {
                _this.jsonPatchesChange.emit(patches);
            });
            this.problemsService.internalProblemMap$
                .pipe(operators.takeUntil(this.isDestroyed))
                .subscribe(function (internalProblemMap) {
                _this.validationProblems.emit(internalProblemMap);
            });
        };
        JsonEditorComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            // throw error if a required input is undefined
            if (changes['schema'] && !this.schema) {
                this.throwInputUndefined('schema');
            }
            if (changes['record'] && !this.record) {
                this.throwInputUndefined('record');
            }
            // warn if an important input is undefined
            if (changes['config'] && !this.config) {
                this.config = {};
                console.warn("[config] is undefined, make sure that is intended.");
            }
            var recordChanged = changes['record'] && this.record !== this.lastEmittedRecord;
            var schemaChanged = changes['schema'] || changes['config'];
            if (schemaChanged) {
                this.fixedSchema = this.schemaFixerService.fixSchema(this.schema, this.config.schemaOptions);
                this.jsonSchemaService.setSchema(this.fixedSchema);
            }
            if (schemaChanged || recordChanged) {
                this.record = this.recordFixerService.fixRecord(this.record, this.fixedSchema);
                this.lastEmittedRecord = this.record;
                this._record = immutable.fromJS(this.record);
                this.jsonStoreService.setJson(this._record);
                this.keysStoreService.buildKeysMap(this._record, this.fixedSchema);
            }
            if (changes['config']) {
                this.appGlobalsService.config = this.config;
                if (this.config.tabsConfig) {
                    this.tabNames = this.tabsUtilService.getTabNames(this.config.tabsConfig);
                    this.tabsUtilService.activeTabName$.subscribe(function (tabName) { _this.appGlobalsService.activeTabName = tabName; });
                    this.appGlobalsService.activeTabName = this.config.tabsConfig.defaultTabName;
                }
                this.customShortcutKeys = this.config.shortcuts;
            }
            if (recordChanged || changes['config']) {
                this.extractPreviews();
            }
            if (changes['jsonPatches']) {
                if (this.jsonPatches) {
                    this.jsonStoreService.setJsonPatches(this.jsonPatches);
                }
            }
            if (changes['problemMap']) {
                this.problemsService.externalProblems = this.problemMap;
            }
            if (changes['templates']) {
                this.appGlobalsService.templates = this.templates || {};
            }
        };
        JsonEditorComponent.prototype.throwInputUndefined = function (inputName) {
            throw new Error("[" + inputName + "] is undefined!\n      if you are fetching " + inputName + " async then please consider using:\n        <json-editor *ngIf=\"" + inputName + "\" [" + inputName + "]=\"" + inputName + "\" ...> </json-editor>\n      in order to wait for it to be fetched before initializing json-editor");
        };
        /**
         * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
         */
        JsonEditorComponent.prototype.extractPreviews = function () {
            var _this = this;
            if (!this.isPreviewerDisabled) {
                // if url is not set directly, populate it
                this.previews = [];
                this.config.previews
                    .forEach(function (previewConfig) {
                    var url;
                    if (previewConfig.url) {
                        url = previewConfig.url;
                    }
                    else if (previewConfig.getUrl) {
                        url = previewConfig.getUrl(_this.record);
                    }
                    else if (previewConfig.urlPath) {
                        try {
                            url = _this.jsonUtilService.getValueInPath(_this.record, previewConfig.urlPath);
                        }
                        catch (error) {
                            console.warn("Path " + previewConfig.urlPath + " in preview config is not present in the input record");
                        }
                    }
                    else {
                        throw new Error('Either url, urlPath or getUrl should be set for a preview');
                    }
                    if (url) {
                        _this.previews.push({
                            name: previewConfig.name,
                            type: previewConfig.type,
                            url: url
                        });
                    }
                });
            }
        };
        Object.defineProperty(JsonEditorComponent.prototype, "keys$", {
            get: function () {
                return this.keysStoreService.forPath(this.pathString);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JsonEditorComponent.prototype, "isPreviewerDisabled", {
            get: function () {
                return (this.config.previews === undefined || this.config.previews.length === 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JsonEditorComponent.prototype, "activeTabName", {
            set: function (tabName) {
                this.appGlobalsService.activeTabName = tabName;
            },
            enumerable: false,
            configurable: true
        });
        JsonEditorComponent.prototype.isActiveTab = function (tabName) {
            return this.appGlobalsService.activeTabName === tabName;
        };
        Object.defineProperty(JsonEditorComponent.prototype, "shorterEditorContainerClass", {
            get: function () {
                return this.isBottomConsoleOpen ? 'shorter-editor-container' : '';
            },
            enumerable: false,
            configurable: true
        });
        JsonEditorComponent.prototype.openBottomConsole = function (tabName) {
            this.isBottomConsoleOpen = true;
            this.bottomConsoleActiveTab = tabName;
        };
        JsonEditorComponent.prototype.trackByElement = function (index, element) {
            return element;
        };
        return JsonEditorComponent;
    }(AbstractSubscriberComponent));
    JsonEditorComponent.ɵfac = function JsonEditorComponent_Factory(t) { return new (t || JsonEditorComponent)(i0.ɵɵdirectiveInject(AppGlobalsService), i0.ɵɵdirectiveInject(ProblemsService), i0.ɵɵdirectiveInject(JsonStoreService), i0.ɵɵdirectiveInject(JsonUtilService), i0.ɵɵdirectiveInject(JsonSchemaService), i0.ɵɵdirectiveInject(KeysStoreService), i0.ɵɵdirectiveInject(RecordFixerService), i0.ɵɵdirectiveInject(SchemaFixerService), i0.ɵɵdirectiveInject(TabsUtilService), i0.ɵɵdirectiveInject(PathUtilService)); };
    JsonEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonEditorComponent, selectors: [["json-editor"]], inputs: { config: "config", record: "record", schema: "schema", problemMap: "problemMap", jsonPatches: "jsonPatches", templates: "templates" }, outputs: { recordChange: "recordChange", jsonPatchesChange: "jsonPatchesChange", validationProblems: "validationProblems" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 10, vars: 13, consts: [["id", "ng2-json-editor", 1, "editor-container", 3, "ngClass"], ["class", "collapsed-menu-container", 4, "ngIf"], ["class", "menu-container", 3, "ngClass", 4, "ngIf"], ["id", "middle-main-container", 1, "middle", "main-container", 3, "shortcuts", "ngClass"], [3, "fields", "pathString", "schema", 4, "ngIf"], [4, "ngIf"], [3, "value", "schema", "keys", "pathString", 4, "ngIf"], ["id", "right-main-container", "class", "main-container right", 3, "ngClass", 4, "ngIf"], [3, "activeTab", "isOpen", "onCollapse", 4, "ngIf"], [1, "collapsed-menu-container"], [1, "add-field-button", 3, "fields", "pathString", "schema"], ["tooltip", "Add Field", "placement", "right", 1, "fa", "fa-plus", "fa-2x"], ["id", "preview-toggle-icon", "placement", "right", 1, "preview-icon", 3, "tooltip", "click"], [1, "fa", "fa-1x", 3, "ngClass"], [3, "badgeClick"], [1, "open-sidebar-container", 3, "click"], [1, "fa", "fa-angle-right", "fa-4x"], [1, "menu-container", 3, "ngClass"], [3, "record", "schema"], ["class", "admin-mode", "tooltip", "Allows editing all fields (use with care)", 4, "ngIf"], ["tooltip", "Allows editing all fields (use with care)", 1, "admin-mode"], ["id", "admin-mode-checkbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "admin-mode-checkbox", 1, "admin-mode"], [3, "fields", "pathString", "schema"], [3, "heading", "active", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "heading", "active", "select"], [3, "value", "tabName", "schema", "keys", "pathString"], [3, "value", "schema", "keys", "pathString"], ["id", "right-main-container", 1, "main-container", "right", 3, "ngClass"], [3, "hidden", "previews"], [3, "activeTab", "isOpen", "onCollapse"]], template: function JsonEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, JsonEditorComponent_div_1_Template, 9, 9, "div", 1);
                i0.ɵɵtemplate(2, JsonEditorComponent_div_2_Template, 5, 4, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵtemplate(4, JsonEditorComponent_add_field_dropdown_4_Template, 3, 5, "add-field-dropdown", 4);
                i0.ɵɵtemplate(5, JsonEditorComponent_tabset_5_Template, 2, 2, "tabset", 5);
                i0.ɵɵtemplate(6, JsonEditorComponent_sub_record_6_Template, 2, 6, "sub-record", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, JsonEditorComponent_div_7_Template, 2, 3, "div", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, JsonEditorComponent_bottom_console_8_Template, 1, 2, "bottom-console", 8);
                i0.ɵɵelement(9, "modal-view");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.shorterEditorContainerClass);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.config.compact);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.config.compact);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("shortcuts", ctx.customShortcutKeys)("ngClass", i0.ɵɵpureFunction2(10, _c0$c, ctx.isPreviewerHidden, ctx.config.compact));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.config.compact);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.config.tabsConfig);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.config.tabsConfig);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.isPreviewerDisabled);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.config.compact);
            }
        }, directives: [i24.NgClass, i24.NgIf, ShortcutsDirective, ModalViewComponent, AddFieldDropdownComponent, i16.TooltipDirective, BottomConsoleBadgesComponent, TreeMenuComponent, i25.CheckboxControlValueAccessor, i25.NgControlStatus, i25.NgModel, i22.TabsetComponent, i24.NgForOf, i22.TabDirective, SubRecordComponent, EditorPreviewerComponent, BottomConsoleComponent], pipes: [i24.AsyncPipe], styles: ["body,html{background-color:#ecf0f1;height:100%;overflow-x:hidden}.editor-container{display:flex;flex-direction:row;height:100%;width:100%}.editor-container,.editor-container .row{margin-left:0;margin-right:0}.bs-tooltip-right{width:120px!important}.shorter-editor-container{height:75%}#ng2-json-editor .dropdown-menu{max-height:400px;overflow-y:auto}#ng2-json-editor .hidden{display:none}#ng2-json-editor th{background-color:#ecf0f1;color:#8e8e8e;font-weight:400;font-weight:700;padding:1px 0 1px 6px}#ng2-json-editor th .dropdown-filter-container{font-weight:400}#ng2-json-editor td{background-color:#f9f9f9;border:none;padding:0}#ng2-json-editor td>*{vertical-align:middle}#ng2-json-editor td.label-holder{background-color:#dae8ef;border-top:1px solid #bdc3c7;padding:3px;white-space:nowrap;width:1%}#ng2-json-editor td.label-holder button{color:#595959}#ng2-json-editor td.error,#ng2-json-editor tr.error td{background-color:#e74c3c!important;color:#fff;transition:all .4s}#ng2-json-editor tbody{border:none}#ng2-json-editor table{margin-bottom:0!important}#ng2-json-editor .main-container.compact{border-left:none}#ng2-json-editor .main-container{border-left:1px solid #a5adb5;font-size:13px;height:100%;overflow:auto}#ng2-json-editor .main-container .tab-container>.nav-tabs{font-size:14px}#ng2-json-editor .main-container>add-field-dropdown div.dropdown{width:100vh}#ng2-json-editor .main-container>add-field-dropdown ul.dropdown-menu{padding-bottom:15px;right:0}#ng2-json-editor .main-container>add-field-dropdown button.btn-add-field-dropdown{background:#fff;font-size:16px;line-height:normal;opacity:.9;padding:5px;width:100%}#ng2-json-editor .main-container>add-field-dropdown button.btn-add-field-dropdown:hover{color:#000;opacity:1}#ng2-json-editor .add-field-dropdown-container{width:100%}#ng2-json-editor .middle.main-container{padding:0}#ng2-json-editor .menu-container{background-color:#2c3e50;display:flex;flex-direction:column;height:100%;justify-content:space-between;opacity:0;overflow-x:hidden;transition:width .1s ease-in;visibility:hidden;width:0}#ng2-json-editor .menu-container div.dropdown{width:100vh}#ng2-json-editor .menu-container ul.dropdown-menu{padding-bottom:15px;right:0}#ng2-json-editor .menu-container button.btn-add-field-dropdown{background:#fff;font-size:16px;line-height:normal;opacity:.9;padding:5px;width:100%}#ng2-json-editor .menu-container button.btn-add-field-dropdown:hover{color:#000;opacity:1}#ng2-json-editor .menu-container.open{opacity:1;padding-left:5px;visibility:visible;width:280px}#ng2-json-editor .collapsed-menu-container{align-items:center;background-color:#1d2d3d;display:flex;flex:0 0 50px;flex-direction:column;height:100%;justify-content:flex-end;position:relative}#ng2-json-editor .collapsed-menu-container .add-field-button{cursor:pointer;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin-bottom:25px;position:absolute;top:0;width:100%}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown{background-color:transparent;display:flex;justify-content:center;margin-top:10px;opacity:1;width:100%}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:active,#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:focus,#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:hover{outline:none}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown i{color:#ddd}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown i:hover{color:#fff}#ng2-json-editor .collapsed-menu-container .preview-icon{align-items:center;border:2px solid #ddd;border-radius:20%;cursor:pointer;display:flex;flex-direction:column;height:30px;justify-content:center;width:30px}#ng2-json-editor .collapsed-menu-container .preview-icon .fa{color:#ddd}#ng2-json-editor .collapsed-menu-container .preview-icon .fa:hover{color:#fff}#ng2-json-editor .collapsed-menu-container .open-sidebar-container{border-right:2px solid #283948;border-top:2px solid #283948;color:#ddd;cursor:pointer;display:flex;justify-content:center;margin-top:20px;width:100%}#ng2-json-editor .collapsed-menu-container .open-sidebar-container:hover{color:#fff;text-shadow:3px 3px 14px #2a5d88}#ng2-json-editor .collapsed-menu-container .open-sidebar-container .fa-angle-right{-ms-transition:all .5s ease-in-out;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}#ng2-json-editor .collapsed-menu-container .open-sidebar-container .fa-angle-right.rotate{-ms-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}#ng2-json-editor .middle.main-container{flex-basis:60%}#ng2-json-editor .middle.main-container.maximizeEditor{flex-grow:2}#ng2-json-editor .right.main-container{flex-basis:40%;flex-shrink:0}#ng2-json-editor .right.main-container.minimizePreview{flex-basis:0%}#ng2-json-editor .right.main-container .btn-toggle{position:fixed;right:0}#ng2-json-editor .editor-btn-delete{background:transparent;border:0;font-weight:700;line-height:1;opacity:.2;padding:0 0 3px 3px;text-shadow:0 1px 0 #fff}#ng2-json-editor .editor-btn-delete:hover{color:red;opacity:.6}#ng2-json-editor .editor-btn-delete.editor-btn-delete-text{font-size:13px;opacity:.5;padding:0}#ng2-json-editor .custom-title-dropdown-item button{background:transparent;border:0;font-size:13px;font-weight:700;line-height:1;opacity:.2;opacity:.5;padding:0;text-shadow:0 1px 0 #fff}#ng2-json-editor .custom-title-dropdown-item button:hover{color:#337ab7;opacity:.6}#ng2-json-editor .editor-btn-move-down{padding-bottom:0}#ng2-json-editor .editor-btn-move-down,#ng2-json-editor .editor-btn-move-up{background:transparent;border:0;font-size:11px;opacity:.2;padding:0}#ng2-json-editor .editor-btn-move-down:hover,#ng2-json-editor .editor-btn-move-up:hover{opacity:.6}#ng2-json-editor ul.pagination-top{margin:-16px 0 0}#ng2-json-editor td.button-holder,#ng2-json-editor th.button-holder{text-align:center;vertical-align:middle;width:40.33px}#ng2-json-editor td.button-holder.sortable,#ng2-json-editor th.button-holder.sortable{width:46px}#ng2-json-editor th.button-holder .add-field-dropdown-container{width:100%}#ng2-json-editor th.button-holder .btn-add-field-dropdown{float:right}#ng2-json-editor label{color:#c1c1c1}#ng2-json-editor .highlight{border:2px solid #ff0!important}#ng2-json-editor table.editable-inner-table{table-layout:fixed}#ng2-json-editor table.editable-inner-table>tbody>tr{border-bottom:1px solid #fff!important}#ng2-json-editor table.editable-inner-table add-new-element-button .button-container{padding-left:6px}#ng2-json-editor table.editable-inner-table label{display:inline;font-weight:400;padding-left:5px}#ng2-json-editor table.editable-inner-table .dropdown-menu{left:inherit;min-width:100px;right:0}#ng2-json-editor .title-dropdown-item button{padding-left:20px!important;padding-right:20px!important;text-align:left;width:100%}#ng2-json-editor .title-dropdown-item:hover{background:#f5f5f5}#ng2-json-editor .tooltip.top .tooltip-arrow{border-top-color:transparent}#ng2-json-editor .tooltip{width:90%}#ng2-json-editor button.btn-toggle{float:right;margin-right:5px;margin-top:5px}#ng2-json-editor .autocomplete-container .dropdown{left:0!important;position:relative!important;top:0!important}#ng2-json-editor div.admin-mode{padding-top:8px;width:100%}#ng2-json-editor label.admin-mode{color:#e0dfdf;font-size:13px;font-weight:400;padding-left:4px;width:90%}#ng2-json-editor hr{border-top:1px solid #757575;margin-bottom:5px;margin-top:5px}#ng2-json-editor .btn.btn-success{background-color:#16a085;border-color:#16a085;color:#fff}#ng2-json-editor .btn.btn-success:active,#ng2-json-editor .btn.btn-success:focus,#ng2-json-editor .btn.btn-success:hover{background-color:#19b698!important;color:#fff}#ng2-json-editor .btn .fa{margin-right:2px}#ng2-json-editor .nav{margin-bottom:3px}#ng2-json-editor .nav-tabs>li.active>a,#ng2-json-editor .nav-tabs>li.active>a:focus,#ng2-json-editor .nav-tabs>li.active>a:hover{background-color:#fff;border-top:1px solid #2c3e50}#ng2-json-editor .nav-tabs>li>a:hover{border:1px solid transparent;border-top-color:#2c3e50;transition:all .4s}#ng2-json-editor .nav.nav-tabs{border-bottom:5px solid #fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.24)}#ng2-json-editor .nav-tabs>li>a{border-radius:0;border-right:1px solid #e0e2e2;margin-right:0}#ng2-json-editor .disabled{cursor:not-allowed}#ng2-json-editor .disabled div{pointer-events:none}#ng2-json-editor .disabled div a,#ng2-json-editor .disabled div button,#ng2-json-editor .disabled div i,#ng2-json-editor .disabled div input,#ng2-json-editor .disabled div string-input>div{opacity:.5}#ng2-json-editor .disabled button{pointer-events:none}#ng2-json-editor .pagination>.active>a{background-color:#31617b;border-color:#31617b}#ng2-json-editor .btn.btn-switch{background-color:#7da0b3}#ng2-json-editor .btn.btn-switch.active{background-color:#31617b}.bottom-console-container{height:25%;overflow:hidden}.bottom-console-container .tab-content{height:90%;overflow:scroll}.red-left-border{border-left:9px solid #e74c3c!important}.max-height-90-vh{max-height:90vh}.max-height-70-vh{max-height:70vh}complex-list-field add-field-dropdown{display:none}.nav-tabs{background:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:1}typeahead-container a[href=\"#\"]{padding:0!important}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(JsonEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'json-editor',
                        encapsulation: i0.ViewEncapsulation.None,
                        styleUrls: [
                            './json-editor.component.scss'
                        ],
                        templateUrl: './json-editor.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: JsonUtilService }, { type: JsonSchemaService }, { type: KeysStoreService }, { type: RecordFixerService }, { type: SchemaFixerService }, { type: TabsUtilService }, { type: PathUtilService }]; }, { config: [{
                    type: i0.Input
                }], record: [{
                    type: i0.Input
                }], schema: [{
                    type: i0.Input
                }], problemMap: [{
                    type: i0.Input
                }], jsonPatches: [{
                    type: i0.Input
                }], templates: [{
                    type: i0.Input
                }], recordChange: [{
                    type: i0.Output
                }], jsonPatchesChange: [{
                    type: i0.Output
                }], validationProblems: [{
                    type: i0.Output
                }] });
    })();

    // All rxjs operators used in the codebase

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
    /**
     * Returs last part of json-pointer string
     * Example: for '/foo/bar/0/thing', returs 'thing'
     */
    var LastPathElementPipe = /** @class */ (function () {
        function LastPathElementPipe(pathUtilService) {
            this.pathUtilService = pathUtilService;
        }
        LastPathElementPipe.prototype.transform = function (path) {
            return path
                .substring(path.lastIndexOf('/') + 1);
        };
        return LastPathElementPipe;
    }());
    LastPathElementPipe.ɵfac = function LastPathElementPipe_Factory(t) { return new (t || LastPathElementPipe)(i0.ɵɵdirectiveInject(PathUtilService)); };
    LastPathElementPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "lastPathElement", type: LastPathElementPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LastPathElementPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'lastPathElement'
                    }]
            }], function () { return [{ type: PathUtilService }]; }, null);
    })();

    function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 10);
        }
    }
    function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 11);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "lastPathElement");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var path_r2 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, path_r2));
        }
    }
    function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵelementStart(1, "a", 12);
            i0.ɵɵlistener("click", function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r13_1); var key_r10 = ctx.$implicit; var path_r2 = i0.ɵɵnextContext(2).$implicit; var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onFieldSelect(path_r2, key_r10); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var key_r10 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(key_r10);
        }
    }
    function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_1_Template, 1, 0, "li", 8);
            i0.ɵɵtemplate(2, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_2_Template, 3, 3, "li", 9);
            i0.ɵɵtemplate(3, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template, 3, 1, "li", 6);
            i0.ɵɵpipe(4, "sortAlphabetically");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var addableKeys_r5 = ctx.$implicit;
            var isFirst_r3 = i0.ɵɵnextContext().first;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !isFirst_r3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !isFirst_r3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 3, addableKeys_r5));
        }
    }
    function AddNestedFieldDropdownComponent_ul_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_Template, 5, 5, "div", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var path_r2 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.addableKeysForPath(path_r2));
        }
    }
    function AddNestedFieldDropdownComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 5);
            i0.ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_Template, 2, 1, "div", 6);
            i0.ɵɵpipe(2, "sortAlphabetically");
            i0.ɵɵpipe(3, "keys");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind1(3, 3, ctx_r0.nestedKeysMap)));
        }
    }
    var AddNestedFieldDropdownComponent = /** @class */ (function (_super) {
        __extends(AddNestedFieldDropdownComponent, _super);
        function AddNestedFieldDropdownComponent(keysStoreService, jsonSchemaService, pathUtilService, domUtilService) {
            var _this = _super.call(this) || this;
            _this.keysStoreService = keysStoreService;
            _this.jsonSchemaService = jsonSchemaService;
            _this.pathUtilService = pathUtilService;
            _this.domUtilService = domUtilService;
            return _this;
        }
        AddNestedFieldDropdownComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            var pathStringChange = changes['pathString'];
            if (pathStringChange) {
                this.nestedKeysMap = {};
                this.nestedKeysMap[this.pathString] = this.keysStoreService.keysMap[this.pathString];
                var nestedPathPrefix_1 = this.pathString + this.pathUtilService.separator;
                Object.keys(this.keysStoreService.keysMap)
                    .filter(function (path) { return path.startsWith(nestedPathPrefix_1); })
                    .forEach(function (path) {
                    _this.nestedKeysMap[path] = _this.keysStoreService.keysMap[path];
                });
                if (this.keysChangeSubscription) {
                    this.keysChangeSubscription.unsubscribe();
                }
                this.keysChangeSubscription = this.keysStoreService.onKeysChange
                    .pipe(operators.filter(function (change) { return change.path.startsWith(_this.pathString); }))
                    .pipe(operators.takeUntil(this.isDestroyed))
                    .subscribe(function (change) { _this.nestedKeysMap[change.path] = change.keys; });
            }
        };
        /**
         * Return keys that could be added for the given path.
         *
         * @return schema key - hidden keys - existing keys
         */
        AddNestedFieldDropdownComponent.prototype.addableKeysForPath = function (path) {
            var keys = this.nestedKeysMap[path];
            var schema = this.jsonSchemaService.forPathString(path);
            // || schema.items.properties is to handle the keys when the path belongs to table-list.
            var schemaProps = schema.properties || schema.items.properties;
            var schemaKeys = immutable.Set(Object.keys(schemaProps)
                .filter(function (key) { return !schemaProps[key].hidden; }));
            var addableKeys = schemaKeys.subtract(keys);
            return addableKeys.size > 0 ? addableKeys : undefined;
        };
        AddNestedFieldDropdownComponent.prototype.onFieldSelect = function (path, key) {
            var schema = this.jsonSchemaService.forPathString(path);
            if (schema.componentType === 'table-list') {
                schema = schema.items;
            }
            var newKeyPath = this.keysStoreService.addKey(path, key, schema);
            if (this.keysStoreService.keysMap[newKeyPath]) {
                this.nestedKeysMap[newKeyPath] = this.keysStoreService.keysMap[newKeyPath];
            }
            this.domUtilService.focusAndSelectFirstEditableChildById(newKeyPath);
        };
        return AddNestedFieldDropdownComponent;
    }(AbstractSubscriberComponent));
    AddNestedFieldDropdownComponent.ɵfac = function AddNestedFieldDropdownComponent_Factory(t) { return new (t || AddNestedFieldDropdownComponent)(i0.ɵɵdirectiveInject(KeysStoreService), i0.ɵɵdirectiveInject(JsonSchemaService), i0.ɵɵdirectiveInject(PathUtilService), i0.ɵɵdirectiveInject(DomUtilService)); };
    AddNestedFieldDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddNestedFieldDropdownComponent, selectors: [["add-nested-field-dropdown"]], inputs: { schema: "schema", pathString: "pathString", isDisabled: "isDisabled" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["dropdown", "", "keyboardNav", "true", 1, "btn-group", "add-field-dropdown-container", 3, "isDisabled"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-add-field-dropdown"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "divider dropdown-divider", 4, "ngIf"], ["class", "dropdown-header title", 4, "ngIf"], [1, "divider", "dropdown-divider"], [1, "dropdown-header", "title"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]], template: function AddNestedFieldDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵelement(3, "i", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, AddNestedFieldDropdownComponent_ul_4_Template, 4, 5, "ul", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("isDisabled", ctx.isDisabled);
            }
        }, directives: [i19.BsDropdownDirective, i19.BsDropdownToggleDirective, i19.BsDropdownMenuDirective, i24.NgForOf, i24.NgIf], pipes: [SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe], styles: [".btn-add-field-dropdown[_ngcontent-%COMP%]{background:transparent;border:0;color:#2f4f4f;float:left;font-size:11px;font-weight:700;line-height:1;margin-bottom:2px;opacity:.4;padding:0 3px;text-shadow:0 1px 0 #fff}.btn-add-field-dropdown[_ngcontent-%COMP%]:hover{color:#00f;opacity:.6}.dropdown-filter-container[_ngcontent-%COMP%]{padding:0 3px}.dropdown-filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}", ".dropdown-header.title[_ngcontent-%COMP%]{font-size:13.5px;font-weight:700;padding-left:10px}.dropdown-divider[_ngcontent-%COMP%]{margin:4px 0}.dropdown-menu[_ngcontent-%COMP%]{left:auto;right:0}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]{clear:both;color:#333;display:block;font-weight:400;line-height:1.42857;padding:3px 20px;white-space:nowrap}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5;color:#262626;text-decoration:none}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AddNestedFieldDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'add-nested-field-dropdown',
                        styleUrls: [
                            './add-field-dropdown.component.scss',
                            './add-nested-field-dropdown.component.scss'
                        ],
                        templateUrl: './add-nested-field-dropdown.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: KeysStoreService }, { type: JsonSchemaService }, { type: PathUtilService }, { type: DomUtilService }]; }, { schema: [{
                    type: i0.Input
                }], pathString: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }] });
    })();

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
    /**
     * It returns array of keys which aren't present in given object
     */
    var DifferentKeysPipe = /** @class */ (function () {
        function DifferentKeysPipe() {
        }
        DifferentKeysPipe.prototype.transform = function (object, keys) {
            return immutable.Set.fromKeys(object).subtract(keys);
        };
        return DifferentKeysPipe;
    }());
    DifferentKeysPipe.ɵfac = function DifferentKeysPipe_Factory(t) { return new (t || DifferentKeysPipe)(); };
    DifferentKeysPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "differentKeys", type: DifferentKeysPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DifferentKeysPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'differentKeys'
                    }]
            }], null, null);
    })();

    var SHARED_PIPES = [
        AddAlwaysShowFieldsPipe,
        DifferentKeysPipe,
        FilterByExpressionPipe,
        FilterHiddenFieldsPipe,
        SanitizeUrlPipe,
        SelfOrEmptyPipe,
        UnderscoreToSpacePipe,
        SetFirstElementPathPipe,
        SortAlphabeticallyPipe,
        KeysPipe,
        LastPathElementPipe,
        TypeOfPipe,
        SortKeysBySchemaPipe
    ];

    var SHARED_DIRECTIVES = [
        ShortcutsDirective,
        ContentModelDirective
    ];

    var JsonEditorModule = /** @class */ (function () {
        function JsonEditorModule() {
        }
        return JsonEditorModule;
    }());
    JsonEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: JsonEditorModule });
    JsonEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function JsonEditorModule_Factory(t) { return new (t || JsonEditorModule)(); }, providers: SHARED_SERVICES, imports: [[
                i16.TooltipModule.forRoot(),
                i17.CollapseModule.forRoot(),
                i18.PopoverModule.forRoot(),
                i19.BsDropdownModule.forRoot(),
                i20.PaginationModule.forRoot(),
                i21.ModalModule.forRoot(),
                i22.TabsModule.forRoot(),
                i23.TypeaheadModule.forRoot(),
                i24.CommonModule,
                i25.FormsModule,
                i1.HttpClientModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(JsonEditorModule, { declarations: [AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
                AddNestedFieldDropdownComponent,
                AddNewElementButtonComponent,
                AnyTypeFieldComponent,
                AutocompleteInputComponent,
                ComplexListFieldComponent,
                ObjectFieldComponent,
                EditorPreviewerComponent,
                FindReplaceComponent,
                ModalViewComponent,
                PrimitiveListFieldComponent,
                PrimitiveFieldComponent,
                RefFieldComponent,
                SearchableDropdownComponent,
                ListActionGroupComponent,
                TableListFieldComponent,
                TableItemFieldComponent,
                TitleDropdownComponent,
                TreeMenuItemComponent,
                TreeMenuComponent,
                JsonEditorComponent,
                SubRecordComponent,
                HtmlViewComponent,
                BottomConsoleBadgesComponent,
                BottomConsoleComponent,
                StringInputComponent,
                TextDiffComponent,
                PatchActionsComponent,
                PatchesConsoleTabComponent,
                ProblemsConsoleTabComponent,
                AddOrReplacePatchComponent], imports: [i16.TooltipModule, i17.CollapseModule, i18.PopoverModule, i19.BsDropdownModule, i20.PaginationModule, i21.ModalModule, i22.TabsModule, i23.TypeaheadModule, i24.CommonModule,
                i25.FormsModule,
                i1.HttpClientModule], exports: [JsonEditorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(JsonEditorModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: __spread(SHARED_PIPES, SHARED_DIRECTIVES, [
                            AddFieldDropdownComponent,
                            AddNestedFieldDropdownComponent,
                            AddNewElementButtonComponent,
                            AnyTypeFieldComponent,
                            AutocompleteInputComponent,
                            ComplexListFieldComponent,
                            ObjectFieldComponent,
                            EditorPreviewerComponent,
                            FindReplaceComponent,
                            ModalViewComponent,
                            PrimitiveListFieldComponent,
                            PrimitiveFieldComponent,
                            RefFieldComponent,
                            SearchableDropdownComponent,
                            ListActionGroupComponent,
                            TableListFieldComponent,
                            TableItemFieldComponent,
                            TitleDropdownComponent,
                            TreeMenuItemComponent,
                            TreeMenuComponent,
                            JsonEditorComponent,
                            SubRecordComponent,
                            HtmlViewComponent,
                            BottomConsoleBadgesComponent,
                            BottomConsoleComponent,
                            StringInputComponent,
                            TextDiffComponent,
                            PatchActionsComponent,
                            PatchesConsoleTabComponent,
                            ProblemsConsoleTabComponent,
                            AddOrReplacePatchComponent
                        ]),
                        exports: [JsonEditorComponent],
                        imports: [
                            i16.TooltipModule.forRoot(),
                            i17.CollapseModule.forRoot(),
                            i18.PopoverModule.forRoot(),
                            i19.BsDropdownModule.forRoot(),
                            i20.PaginationModule.forRoot(),
                            i21.ModalModule.forRoot(),
                            i22.TabsModule.forRoot(),
                            i23.TypeaheadModule.forRoot(),
                            i24.CommonModule,
                            i25.FormsModule,
                            i1.HttpClientModule
                        ],
                        providers: SHARED_SERVICES
                    }]
            }], null, null);
    })();
    i0.ɵɵsetComponentScope(ObjectFieldComponent, [i16.TooltipDirective, i17.CollapseDirective, i18.PopoverDirective, i19.BsDropdownMenuDirective, i19.BsDropdownToggleDirective, i19.BsDropdownDirective, i20.PagerComponent, i20.PaginationComponent, i21.ModalBackdropComponent, i21.ModalDirective, i22.TabDirective, i22.TabsetComponent, i22.TabHeadingDirective, i22.NgTranscludeDirective, i23.TypeaheadContainerComponent, i23.TypeaheadDirective, i24.NgClass, i24.NgComponentOutlet, i24.NgForOf, i24.NgIf, i24.NgTemplateOutlet, i24.NgStyle, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgPlural, i24.NgPluralCase, i25.ɵangular_packages_forms_forms_y, i25.NgSelectOption, i25.ɵangular_packages_forms_forms_x, i25.DefaultValueAccessor, i25.NumberValueAccessor, i25.RangeValueAccessor, i25.CheckboxControlValueAccessor, i25.SelectControlValueAccessor, i25.SelectMultipleControlValueAccessor, i25.RadioControlValueAccessor, i25.NgControlStatus, i25.NgControlStatusGroup, i25.RequiredValidator, i25.MinLengthValidator, i25.MaxLengthValidator, i25.PatternValidator, i25.CheckboxRequiredValidator, i25.EmailValidator, i25.NgModel, i25.NgModelGroup, i25.NgForm, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
        AddNestedFieldDropdownComponent,
        AddNewElementButtonComponent,
        AnyTypeFieldComponent,
        AutocompleteInputComponent,
        ComplexListFieldComponent,
        ObjectFieldComponent,
        EditorPreviewerComponent,
        FindReplaceComponent,
        ModalViewComponent,
        PrimitiveListFieldComponent,
        PrimitiveFieldComponent,
        RefFieldComponent,
        SearchableDropdownComponent,
        ListActionGroupComponent,
        TableListFieldComponent,
        TableItemFieldComponent,
        TitleDropdownComponent,
        TreeMenuItemComponent,
        TreeMenuComponent,
        JsonEditorComponent,
        SubRecordComponent,
        HtmlViewComponent,
        BottomConsoleBadgesComponent,
        BottomConsoleComponent,
        StringInputComponent,
        TextDiffComponent,
        PatchActionsComponent,
        PatchesConsoleTabComponent,
        ProblemsConsoleTabComponent,
        AddOrReplacePatchComponent], [i24.AsyncPipe, i24.UpperCasePipe, i24.LowerCasePipe, i24.JsonPipe, i24.SlicePipe, i24.DecimalPipe, i24.PercentPipe, i24.TitleCasePipe, i24.CurrencyPipe, i24.DatePipe, i24.I18nPluralPipe, i24.I18nSelectPipe, i24.KeyValuePipe, AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe]);
    i0.ɵɵsetComponentScope(PrimitiveListFieldComponent, [i16.TooltipDirective, i17.CollapseDirective, i18.PopoverDirective, i19.BsDropdownMenuDirective, i19.BsDropdownToggleDirective, i19.BsDropdownDirective, i20.PagerComponent, i20.PaginationComponent, i21.ModalBackdropComponent, i21.ModalDirective, i22.TabDirective, i22.TabsetComponent, i22.TabHeadingDirective, i22.NgTranscludeDirective, i23.TypeaheadContainerComponent, i23.TypeaheadDirective, i24.NgClass, i24.NgComponentOutlet, i24.NgForOf, i24.NgIf, i24.NgTemplateOutlet, i24.NgStyle, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgPlural, i24.NgPluralCase, i25.ɵangular_packages_forms_forms_y, i25.NgSelectOption, i25.ɵangular_packages_forms_forms_x, i25.DefaultValueAccessor, i25.NumberValueAccessor, i25.RangeValueAccessor, i25.CheckboxControlValueAccessor, i25.SelectControlValueAccessor, i25.SelectMultipleControlValueAccessor, i25.RadioControlValueAccessor, i25.NgControlStatus, i25.NgControlStatusGroup, i25.RequiredValidator, i25.MinLengthValidator, i25.MaxLengthValidator, i25.PatternValidator, i25.CheckboxRequiredValidator, i25.EmailValidator, i25.NgModel, i25.NgModelGroup, i25.NgForm, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
        AddNestedFieldDropdownComponent,
        AddNewElementButtonComponent,
        AnyTypeFieldComponent,
        AutocompleteInputComponent,
        ComplexListFieldComponent,
        ObjectFieldComponent,
        EditorPreviewerComponent,
        FindReplaceComponent,
        ModalViewComponent,
        PrimitiveListFieldComponent,
        PrimitiveFieldComponent,
        RefFieldComponent,
        SearchableDropdownComponent,
        ListActionGroupComponent,
        TableListFieldComponent,
        TableItemFieldComponent,
        TitleDropdownComponent,
        TreeMenuItemComponent,
        TreeMenuComponent,
        JsonEditorComponent,
        SubRecordComponent,
        HtmlViewComponent,
        BottomConsoleBadgesComponent,
        BottomConsoleComponent,
        StringInputComponent,
        TextDiffComponent,
        PatchActionsComponent,
        PatchesConsoleTabComponent,
        ProblemsConsoleTabComponent,
        AddOrReplacePatchComponent], [i24.AsyncPipe, i24.UpperCasePipe, i24.LowerCasePipe, i24.JsonPipe, i24.SlicePipe, i24.DecimalPipe, i24.PercentPipe, i24.TitleCasePipe, i24.CurrencyPipe, i24.DatePipe, i24.I18nPluralPipe, i24.I18nSelectPipe, i24.KeyValuePipe, AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe]);
    i0.ɵɵsetComponentScope(TableItemFieldComponent, [i16.TooltipDirective, i17.CollapseDirective, i18.PopoverDirective, i19.BsDropdownMenuDirective, i19.BsDropdownToggleDirective, i19.BsDropdownDirective, i20.PagerComponent, i20.PaginationComponent, i21.ModalBackdropComponent, i21.ModalDirective, i22.TabDirective, i22.TabsetComponent, i22.TabHeadingDirective, i22.NgTranscludeDirective, i23.TypeaheadContainerComponent, i23.TypeaheadDirective, i24.NgClass, i24.NgComponentOutlet, i24.NgForOf, i24.NgIf, i24.NgTemplateOutlet, i24.NgStyle, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgPlural, i24.NgPluralCase, i25.ɵangular_packages_forms_forms_y, i25.NgSelectOption, i25.ɵangular_packages_forms_forms_x, i25.DefaultValueAccessor, i25.NumberValueAccessor, i25.RangeValueAccessor, i25.CheckboxControlValueAccessor, i25.SelectControlValueAccessor, i25.SelectMultipleControlValueAccessor, i25.RadioControlValueAccessor, i25.NgControlStatus, i25.NgControlStatusGroup, i25.RequiredValidator, i25.MinLengthValidator, i25.MaxLengthValidator, i25.PatternValidator, i25.CheckboxRequiredValidator, i25.EmailValidator, i25.NgModel, i25.NgModelGroup, i25.NgForm, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
        AddNestedFieldDropdownComponent,
        AddNewElementButtonComponent,
        AnyTypeFieldComponent,
        AutocompleteInputComponent,
        ComplexListFieldComponent,
        ObjectFieldComponent,
        EditorPreviewerComponent,
        FindReplaceComponent,
        ModalViewComponent,
        PrimitiveListFieldComponent,
        PrimitiveFieldComponent,
        RefFieldComponent,
        SearchableDropdownComponent,
        ListActionGroupComponent,
        TableListFieldComponent,
        TableItemFieldComponent,
        TitleDropdownComponent,
        TreeMenuItemComponent,
        TreeMenuComponent,
        JsonEditorComponent,
        SubRecordComponent,
        HtmlViewComponent,
        BottomConsoleBadgesComponent,
        BottomConsoleComponent,
        StringInputComponent,
        TextDiffComponent,
        PatchActionsComponent,
        PatchesConsoleTabComponent,
        ProblemsConsoleTabComponent,
        AddOrReplacePatchComponent], [i24.AsyncPipe, i24.UpperCasePipe, i24.LowerCasePipe, i24.JsonPipe, i24.SlicePipe, i24.DecimalPipe, i24.PercentPipe, i24.TitleCasePipe, i24.CurrencyPipe, i24.DatePipe, i24.I18nPluralPipe, i24.I18nSelectPipe, i24.KeyValuePipe, AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe]);

    /*
     * Public API Surface of json-editor
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AddFieldDropdownComponent = AddFieldDropdownComponent;
    exports.AddNestedFieldDropdownComponent = AddNestedFieldDropdownComponent;
    exports.AddNewElementButtonComponent = AddNewElementButtonComponent;
    exports.AddOrReplacePatchComponent = AddOrReplacePatchComponent;
    exports.AnyTypeFieldComponent = AnyTypeFieldComponent;
    exports.AutocompleteInputComponent = AutocompleteInputComponent;
    exports.BottomConsoleBadgesComponent = BottomConsoleBadgesComponent;
    exports.BottomConsoleComponent = BottomConsoleComponent;
    exports.ComplexListFieldComponent = ComplexListFieldComponent;
    exports.EditorPreviewerComponent = EditorPreviewerComponent;
    exports.FindReplaceComponent = FindReplaceComponent;
    exports.HtmlViewComponent = HtmlViewComponent;
    exports.JsonEditorComponent = JsonEditorComponent;
    exports.JsonEditorModule = JsonEditorModule;
    exports.ListActionGroupComponent = ListActionGroupComponent;
    exports.ModalViewComponent = ModalViewComponent;
    exports.ObjectFieldComponent = ObjectFieldComponent;
    exports.PatchActionsComponent = PatchActionsComponent;
    exports.PatchesConsoleTabComponent = PatchesConsoleTabComponent;
    exports.PrimitiveFieldComponent = PrimitiveFieldComponent;
    exports.PrimitiveListFieldComponent = PrimitiveListFieldComponent;
    exports.ProblemsConsoleTabComponent = ProblemsConsoleTabComponent;
    exports.RefFieldComponent = RefFieldComponent;
    exports.SearchableDropdownComponent = SearchableDropdownComponent;
    exports.StringInputComponent = StringInputComponent;
    exports.SubRecordComponent = SubRecordComponent;
    exports.TableItemFieldComponent = TableItemFieldComponent;
    exports.TableListFieldComponent = TableListFieldComponent;
    exports.TextDiffComponent = TextDiffComponent;
    exports.TitleDropdownComponent = TitleDropdownComponent;
    exports.TreeMenuComponent = TreeMenuComponent;
    exports.TreeMenuItemComponent = TreeMenuItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=json-editor.umd.js.map
