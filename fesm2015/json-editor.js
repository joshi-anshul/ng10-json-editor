import { ɵɵdefineComponent, ɵsetClassMetadata, Component, ɵɵdefineInjectable, Injectable, ɵɵinject, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, Input, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵtext, ɵɵelementEnd, ɵɵreference, ɵɵtemplate, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, ɵɵsanitizeHtml, ChangeDetectorRef, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵpureFunction0, ChangeDetectionStrategy, ViewChild, ɵɵdefinePipe, Pipe, ɵɵpipe, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵprojection, ɵɵprojectionDef, ɵɵpropertyInterpolate1, EventEmitter, Output, ɵɵpipeBind3, ɵɵsanitizeUrl, ɵɵtextInterpolate1, ɵɵstyleProp, ɵɵclassProp, ViewEncapsulation, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpureFunction2, ɵɵpureFunction1, ɵɵtemplateRefExtractor, ɵɵtextInterpolate2, HostListener, ɵɵattribute, ɵɵpureFunction4, ɵɵpropertyInterpolate, ɵɵsanitizeResourceUrl, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { fromJS, List, Map, Seq, Set as Set$1 } from 'immutable';
import { map, distinctUntilChanged, takeUntil, skipWhile, filter } from 'rxjs/operators';
import { Subject, ReplaySubject as ReplaySubject$1, combineLatest, Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { cloneDeep, mergeWith, merge } from 'lodash';
import * as Ajv from 'ajv';
import * as enableCustomErrorMessages from 'ajv-errors';
import { render, ParseError } from 'katex';
import { diffWords } from 'diff';
import { NgIf, NgSwitch, NgSwitchCase, NgForOf, AsyncPipe, NgClass, NgTemplateOutlet, NgSwitchDefault, TitleCasePipe, CommonModule, NgComponentOutlet, NgStyle, NgPlural, NgPluralCase, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { Mousetrap } from 'mousetrap';
import { ModalDirective, ModalModule, ModalBackdropComponent } from 'ngx-bootstrap/modal';
import { BsDropdownDirective, BsDropdownToggleDirective, BsDropdownMenuDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DefaultValueAccessor, NgControlStatus, NgModel, CheckboxControlValueAccessor, NumberValueAccessor, FormsModule, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, RangeValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModelGroup, NgForm } from '@angular/forms';
import { TooltipDirective, TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsetComponent, TabDirective, TabHeadingDirective, TabsModule, NgTranscludeDirective } from 'ngx-bootstrap/tabs';
import { DomSanitizer } from '@angular/platform-browser';
import { PaginationComponent, PaginationModule, PagerComponent } from 'ngx-bootstrap/pagination';
import { BiDirectionalMap } from 'bi-directional-map/dist';
import { TypeaheadDirective, TypeaheadModule, TypeaheadContainerComponent } from 'ngx-bootstrap/typeahead';
import { PopoverDirective, PopoverModule } from 'ngx-bootstrap/popover';
import { CollapseDirective, CollapseModule } from 'ngx-bootstrap/collapse';
import 'rxjs/add/operator/catch';

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
class AbstractSubscriberComponent {
    constructor() {
        this.isDestroyed = new Subject();
    }
    ngOnDestroy() {
        this.isDestroyed.next();
        this.isDestroyed.complete();
    }
}
AbstractSubscriberComponent.ɵfac = function AbstractSubscriberComponent_Factory(t) { return new (t || AbstractSubscriberComponent)(); };
AbstractSubscriberComponent.ɵcmp = ɵɵdefineComponent({ type: AbstractSubscriberComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function AbstractSubscriberComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AbstractSubscriberComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();

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
class AppGlobalsService {
    constructor() {
        this.adminMode$ = new ReplaySubject(1);
        this.activeTabName = '';
        this.tabNameToFirstTopLevelElement = {};
        this.templates = {};
        this._adminMode = false;
    }
    set adminMode(adminMode) {
        this._adminMode = adminMode;
        this.adminMode$.next(this._adminMode);
    }
    get adminMode() {
        return this._adminMode;
    }
    get firstElementPathForCurrentTab() {
        return this.tabNameToFirstTopLevelElement[this.activeTabName];
    }
}
AppGlobalsService.ɵfac = function AppGlobalsService_Factory(t) { return new (t || AppGlobalsService)(); };
AppGlobalsService.ɵprov = ɵɵdefineInjectable({ token: AppGlobalsService, factory: AppGlobalsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AppGlobalsService, [{
        type: Injectable
    }], null, null); })();

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
class PathUtilService {
    constructor() {
        this.separator = '/';
    }
    /**
     *
     * @param path - Element's path
     * @param root - Find nearest or root parent array. True for root and false for nearest array parent
     * @returns - Returns the path to the array parent
     */
    getNearestOrRootArrayParentInPath(path, root) {
        let _path = [];
        const pathLength = path.length;
        for (let index = 0; index < pathLength; index++) {
            _path = root ? path.slice(0, index + 1) : path.slice(0, path.length - index);
            if (typeof _path[_path.length - 1] === 'number') {
                // transform ['arrayParent',0] => ['arrayParent']
                _path.pop();
                break;
            }
        }
        return _path;
    }
    getElementIndexInForwardOrReversePath(path, directPathSearch) {
        return this.findIndexFromPath(path.slice(), directPathSearch);
    }
    /**
     *
     * @param path - The path of an element
     * @param directPathSearch - Flag for define direct or reverse searching in path. Set to true for searching in direct
     * or false for searching in reverse path
     * @returns - Returns found index in path or -1 if not found
     */
    findIndexFromPath(path, directPathSearch) {
        path = directPathSearch ? path : path.reverse();
        for (const index in path) {
            if (!isNaN(path[index])) {
                return path[index];
            }
        }
        return -1;
    }
    /**
     * Converts path array `/` separated path string.
     * Example: from ['foo', 'bar', 0] to '/foo/bar/0'
     */
    toPathString(path) {
        if (path.length === 0) {
            return '';
        }
        else {
            return `${this.separator}${path.join(this.separator)}`;
        }
    }
    /**
     * Converts `/` separated path string to path array.
     * Example from '/foo/bar/0' to ['foo', 'bar', 0]
     */
    toPathArray(pathString) {
        return pathString.split(this.separator)
            .slice(1) // remove the empty
            .map((key) => isNaN(parseInt(key, 10)) ? key : parseInt(key, 10));
    }
}
PathUtilService.ɵfac = function PathUtilService_Factory(t) { return new (t || PathUtilService)(); };
PathUtilService.ɵprov = ɵɵdefineInjectable({ token: PathUtilService, factory: PathUtilService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PathUtilService, [{
        type: Injectable
    }], null, null); })();

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
class RemoteAutocompletionService {
    constructor(http, pathUtilService) {
        this.http = http;
        this.pathUtilService = pathUtilService;
    }
    getAutocompletionResults(options, token) {
        return this.http.get(`${options.url}${token}`)
            .pipe(map(res => this.mapResponseToResults(res, options.path)));
    }
    mapResponseToResults(response, resultsPath) {
        const pathElements = this.pathUtilService.toPathArray(resultsPath);
        let results = response.json();
        pathElements.forEach(pathElement => {
            results = results[pathElement];
        });
        return results;
    }
}
RemoteAutocompletionService.ɵfac = function RemoteAutocompletionService_Factory(t) { return new (t || RemoteAutocompletionService)(ɵɵinject(HttpClient), ɵɵinject(PathUtilService)); };
RemoteAutocompletionService.ɵprov = ɵɵdefineInjectable({ token: RemoteAutocompletionService, factory: RemoteAutocompletionService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RemoteAutocompletionService, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }, { type: PathUtilService }]; }, null); })();

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
class ComponentTypeService {
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
    getComponentType(schema) {
        if (!schema) {
            throw new Error('schema is undefined');
        }
        const schemaType = schema.type;
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
            const itemSchema = schema.items;
            if (itemSchema.type === 'object' && !itemSchema.properties['$ref']) {
                // complex-array: if it's an object array
                // if its elements have at least a property with object (not ref-field)
                // or a non-primitive array.
                const isComplexArray = Object.keys(itemSchema.properties)
                    .some(prop => {
                    const propSchema = itemSchema.properties[prop];
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
    }
}
ComponentTypeService.ɵfac = function ComponentTypeService_Factory(t) { return new (t || ComponentTypeService)(); };
ComponentTypeService.ɵprov = ɵɵdefineInjectable({ token: ComponentTypeService, factory: ComponentTypeService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentTypeService, [{
        type: Injectable
    }], null, null); })();

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
class TabsUtilService {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
        this.activeTabName$ = new ReplaySubject$1(1);
    }
    getTabNames(tabsConfig) {
        const tabNames = tabsConfig.tabs.map(tab => tab.name);
        // insert default tab name at the beginning
        return [tabsConfig.defaultTabName]
            .concat(tabNames);
    }
    getSchemaKeyToTabName(tabsConfig, schema) {
        if (!this.schemaKeyToTabName) {
            // set tab.name for configured keys
            const keyToTabName = tabsConfig.tabs
                .map(tab => {
                const keysWithTabName = {};
                tab.properties.forEach(key => {
                    keysWithTabName[key] = tab.name;
                });
                return keysWithTabName;
            }).reduce((pre, cur) => Object.assign(pre, cur));
            // set defaultTabName for all other keys in the schema
            Object.keys(schema.properties)
                .filter(key => !keyToTabName[key])
                .forEach(key => {
                keyToTabName[key] = tabsConfig.defaultTabName;
            });
            this.schemaKeyToTabName = keyToTabName;
        }
        return this.schemaKeyToTabName;
    }
    // TODO: maybe this could be a decorator
    selectTabIfNeeded(path) {
        if (this.schemaKeyToTabName && path !== '') {
            const tabName = this.schemaKeyToTabName[this.pathUtilService.toPathArray(path)[0]];
            this.activeTabName$.next(tabName);
        }
    }
}
TabsUtilService.ɵfac = function TabsUtilService_Factory(t) { return new (t || TabsUtilService)(ɵɵinject(PathUtilService)); };
TabsUtilService.ɵprov = ɵɵdefineInjectable({ token: TabsUtilService, factory: TabsUtilService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabsUtilService, [{
        type: Injectable
    }], function () { return [{ type: PathUtilService }]; }, null); })();

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
class ListPageChangerService {
    constructor(pathUtilService) {
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
    changePage(fieldPath) {
        const fieldPathArray = this.pathUtilService.toPathArray(fieldPath);
        const listPathArray = this.pathUtilService.getNearestOrRootArrayParentInPath(fieldPathArray, true);
        const listPath = this.pathUtilService.toPathString(listPathArray);
        if (this.pageChange$Map[listPath]) {
            const itemIndex = fieldPathArray[listPathArray.length];
            const itemsPerPage = this.itemsPerPageMap[listPath];
            const page = Math.floor((itemIndex / itemsPerPage) + 1);
            this.pageChange$Map[listPath].next(page);
        }
    }
    registerPaginatedList(listPath, itemsPerPage) {
        this.itemsPerPageMap[listPath] = itemsPerPage;
        this.pageChange$Map[listPath] = new ReplaySubject$1(1);
        return this.pageChange$Map[listPath];
    }
}
ListPageChangerService.ɵfac = function ListPageChangerService_Factory(t) { return new (t || ListPageChangerService)(ɵɵinject(PathUtilService)); };
ListPageChangerService.ɵprov = ɵɵdefineInjectable({ token: ListPageChangerService, factory: ListPageChangerService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListPageChangerService, [{
        type: Injectable
    }], function () { return [{ type: PathUtilService }]; }, null); })();

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
class DomUtilService {
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
DomUtilService.ɵfac = function DomUtilService_Factory(t) { return new (t || DomUtilService)(ɵɵinject(TabsUtilService), ɵɵinject(ListPageChangerService)); };
DomUtilService.ɵprov = ɵɵdefineInjectable({ token: DomUtilService, factory: DomUtilService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DomUtilService, [{
        type: Injectable
    }], function () { return [{ type: TabsUtilService }, { type: ListPageChangerService }]; }, null); })();

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
class EmptyValueService {
    generateEmptyValue(schema) {
        const emptyValue = this.generateEmptyValueRecursively(schema);
        if (typeof emptyValue === 'object') {
            return fromJS(emptyValue);
        }
        else {
            return emptyValue;
        }
    }
    generateEmptyValueRecursively(schema) {
        if (schema.default) {
            return schema.default;
        }
        if (schema.type === 'object') {
            const emptyObject = {};
            Object.keys(schema.properties)
                .filter(prop => {
                const required = schema.required || [];
                const alwaysShow = schema.alwaysShow || [];
                return required.indexOf(prop) > -1 || alwaysShow.indexOf(prop) > -1;
            }).forEach(prop => {
                const propSchema = schema.properties[prop];
                emptyObject[prop] = this.generateEmptyValueRecursively(propSchema);
            });
            return emptyObject;
        }
        if (schema.type === 'array') {
            const emptyArray = [];
            const arrayElementSchema = schema.items;
            if (schema.componentType !== 'complex-list') {
                emptyArray.push(this.generateEmptyValueRecursively(arrayElementSchema));
            }
            return emptyArray;
        }
        return EmptyValueService.defaultValueLookup[schema.type];
    }
}
EmptyValueService.defaultValueLookup = {
    'string': '',
    'boolean': false
};
EmptyValueService.ɵfac = function EmptyValueService_Factory(t) { return new (t || EmptyValueService)(); };
EmptyValueService.ɵprov = ɵɵdefineInjectable({ token: EmptyValueService, factory: EmptyValueService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmptyValueService, [{
        type: Injectable
    }], null, null); })();

class FindReplaceAllService {
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
    findReplaceInImmutable(immutable, schema, find, replace, exact = false, diffHtml) {
        const immutableAsMutable = immutable.asMutable();
        const isList = List.isList(immutable);
        // create empty array or object for the immutable to store diff
        diffHtml = isList ? [] : {};
        immutableAsMutable.forEach((value, key) => {
            const innerSchema = isList ? schema.items : schema.properties[key];
            // ignore disabled and ref fields
            if (innerSchema.disabled || innerSchema.hidden || key === '$ref') {
                return;
                // TODO: is `schema.type === 'string'` better?
            }
            else if (typeof value === 'string') {
                // assign value to diff as initial, if nothing has changed it will remain same
                let diff = value;
                // create html diff for each possible change
                const singleDiffHtml = `<strong style='color: green;'>${replace}</strong><del><em style='color: red;'>${find}</em></del>`;
                if (!exact) {
                    const regExp = new RegExp(find, 'g');
                    const replaced = value.replace(regExp, replace);
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
            else if (List.isList(value) || Map.isMap(value)) {
                // create empty array or object for the value in diffHtml
                const result = this.
                    findReplaceInImmutable(immutableAsMutable.get(key), innerSchema, find, replace, exact, diffHtml[key]);
                diffHtml[key] = result.diffHtml;
                immutableAsMutable.set(key, result.replaced);
            }
        });
        return { replaced: immutableAsMutable.asImmutable(), diffHtml };
    }
}
FindReplaceAllService.ɵfac = function FindReplaceAllService_Factory(t) { return new (t || FindReplaceAllService)(); };
FindReplaceAllService.ɵprov = ɵɵdefineInjectable({ token: FindReplaceAllService, factory: FindReplaceAllService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FindReplaceAllService, [{
        type: Injectable
    }], null, null); })();

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
class SizedStack {
    constructor(size) {
        this.values = new Array();
        this.size = size;
    }
    push(value) {
        this.values.push(value);
        if (this.values.length > this.size) {
            this.values.shift();
        }
    }
    pop() {
        return this.values.pop();
    }
}

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
class JsonSchemaService {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    setSchema(schema) {
        this.schema = schema;
    }
    /**
     * Returns the schema extracted from this path
     */
    forPathArray(path) {
        return path
            .reduce((schema, pathEl) => {
            if (isNaN(pathEl) && pathEl !== '-') {
                return schema.properties[pathEl];
            }
            else {
                return schema.items;
            }
        }, this.schema);
    }
    /**
     * Returns the schema extracted from the json-pointer string
     */
    forPathString(path) {
        const pathArray = this.pathUtilService.toPathArray(path);
        return this.forPathArray(pathArray);
    }
}
JsonSchemaService.ɵfac = function JsonSchemaService_Factory(t) { return new (t || JsonSchemaService)(ɵɵinject(PathUtilService)); };
JsonSchemaService.ɵprov = ɵɵdefineInjectable({ token: JsonSchemaService, factory: JsonSchemaService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonSchemaService, [{
        type: Injectable
    }], function () { return [{ type: PathUtilService }]; }, null); })();

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
class CompareKeysBySchemaService {
    /**
     * @param key1 the first key
     * @param key2 the second key
     * @param schema schema of the parent object
     */
    compare(key1, key2, schema) {
        // Sort by priority, larger is the first.
        const priorty1 = schema.properties[key1].priority || 0;
        const priority2 = schema.properties[key2].priority || 0;
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
    }
}
CompareKeysBySchemaService.ɵfac = function CompareKeysBySchemaService_Factory(t) { return new (t || CompareKeysBySchemaService)(); };
CompareKeysBySchemaService.ɵprov = ɵɵdefineInjectable({ token: CompareKeysBySchemaService, factory: CompareKeysBySchemaService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CompareKeysBySchemaService, [{
        type: Injectable
    }], null, null); })();

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
class KeysStoreService {
    constructor(appGlobalsService, pathUtilService, jsonSchemaService, compareKeysBySchemaService) {
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.jsonSchemaService = jsonSchemaService;
        this.compareKeysBySchemaService = compareKeysBySchemaService;
        this.onKeysChange = new Subject();
    }
    forPath(path) {
        return this.keys$Map[path];
    }
    /**
     * Adds a key to the specified path.
     *
     * @param path path to add the key to
     * @param key key to be added
     * @param schema schema that belongs to path (schema.items for table-list)
     */
    addKey(path, key, schema, value) {
        // FIXME: could do O(logn) insert instead of O(nlogn) since the set is already sorted.
        this.keysMap[path] = this.keysMap[path]
            .add(key)
            .sort((a, b) => this.compareKeysBySchemaService.compare(a, b, schema));
        this.keys$Map[path].next(this.keysMap[path]);
        this.onKeysChange.next({ path, keys: this.keysMap[path] });
        const newKeyPath = `${path}${this.pathUtilService.separator}${key}`;
        const keySchema = schema.properties[key];
        if (keySchema.type === 'object' || keySchema.componentType === 'table-list') {
            this.buildKeysMapRecursivelyForPath(value || Map(), newKeyPath, keySchema);
        }
        return newKeyPath;
    }
    deletePath(path) {
        const lastKey = path[path.length - 1];
        const parentPath = this.pathUtilService.toPathString(path.slice(0, -1));
        // don't invoke deleteKey if parentPath is primitive-list
        if (this.keysMap[parentPath]) {
            this.deleteKey(parentPath, lastKey);
        }
    }
    /**
     * Sync keys in store for the given path or its parent, grand parent etc. if necessary
     *
     * @param path path to the (re)set field
     * @param json whole json
     */
    syncKeysForPath(path, json) {
        // search from leaf to root, to find the first path with entry in keys map
        for (let i = path.length - 1; i >= 0; i--) {
            const currentPath = path.slice(0, i);
            const currentPathString = this.pathUtilService.toPathString(currentPath);
            if (this.keysMap[currentPathString]) {
                // path[i] is key that should be added to currentPat
                const key = path[i];
                // if currentPath has the key
                if (this.keysMap[currentPathString].has(key)) {
                    // just build the store keys map for that /current/path/key if it is object or array
                    const keyPath = currentPath.concat(key);
                    const keySchema = this.jsonSchemaService.forPathArray(keyPath);
                    if (keySchema.type === 'object' || keySchema.type === 'array') {
                        this.buildKeysMapRecursivelyForPath(json.getIn(keyPath), keyPath, keySchema);
                    }
                    // if currentPath doesn't have the key
                }
                else {
                    const currentSchema = this.jsonSchemaService.forPathArray(currentPath);
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
    }
    deleteKey(parentPath, key) {
        // remove deleted one from parent
        this.keysMap[parentPath] = this.keysMap[parentPath].delete(key);
        this.keys$Map[parentPath].next(this.keysMap[parentPath]);
        this.onKeysChange.next({ path: parentPath, keys: this.keysMap[parentPath] });
        // delete keys for deleted one
        const deletedKeyPath = `${parentPath}${this.pathUtilService.separator}${key}`;
        delete this.keysMap[deletedKeyPath];
        delete this.keys$Map[deletedKeyPath];
        // delete keys for all children of the deleted one
        const deletedKeyPathChildPrefix = deletedKeyPath + this.pathUtilService.separator;
        Object.keys(this.keysMap)
            .filter(path => path.startsWith(deletedKeyPathChildPrefix))
            .forEach(childPath => {
            delete this.keysMap[childPath];
            delete this.keys$Map[childPath];
        });
    }
    /**
     * Swaps keys of given two indices in object list recursively
     */
    swapListElementKeys(listPath, index1, index2) {
        const listSchema = this.jsonSchemaService.forPathArray(listPath);
        if (listSchema.componentType !== 'complex-list') {
            return;
        }
        const listPathString = this.pathUtilService.toPathString(listPath);
        const ps1 = `${listPathString}${this.pathUtilService.separator}${index1}`;
        const ps2 = `${listPathString}${this.pathUtilService.separator}${index2}`;
        const keys1 = this.keysMap[ps1];
        this.setKeys(ps1, this.keysMap[ps2]);
        this.setKeys(ps2, keys1);
        // swap children as well
        const ps1ChildPrefix = ps1 + this.pathUtilService.separator;
        const ps2ChildPrefix = ps2 + this.pathUtilService.separator;
        const childrenSwaps = [];
        Object.keys(this.keysMap)
            .forEach(path => {
            if (path.startsWith(ps1ChildPrefix)) {
                const toPath = path.replace(ps1ChildPrefix, ps2ChildPrefix);
                childrenSwaps.push({ from: path, to: toPath, keys: this.keysMap[path] });
            }
            else if (path.startsWith(ps2ChildPrefix)) {
                const toPath = path.replace(ps2ChildPrefix, ps1ChildPrefix);
                childrenSwaps.push({ from: path, to: toPath, keys: this.keysMap[path] });
            }
        });
        childrenSwaps
            .forEach(swap => {
            this.setKeys(swap.to, swap.keys);
            this.onKeysChange.next({ path: swap.to, keys: this.keysMap[swap.to] });
        });
        childrenSwaps
            .filter(swap => !childrenSwaps.some(otherSwap => swap.from === otherSwap.to))
            .forEach(swap => {
            delete this.keysMap[swap.from];
            delete this.keys$Map[swap.from];
        });
    }
    buildKeysMap(json, schema) {
        this.keys$Map = {};
        this.keysMap = {};
        this.buildKeysMapRecursivelyForPath(json, '', schema);
    }
    buildKeysMapRecursivelyForPath(mapOrList, path, schema) {
        // TODO: remove this and unify typing when #330 is fixed
        const pathString = Array.isArray(path) ? this.pathUtilService.toPathString(path) : path;
        if (!schema) {
            schema = this.jsonSchemaService.forPathString(pathString);
        }
        if (schema.type === 'object') {
            const map = mapOrList || Map();
            const finalKeys = this.buildkeysForObject(pathString, map, schema);
            // recursive call
            finalKeys
                .filter(key => this.isObjectOrArray(schema.properties[key]))
                .forEach(key => {
                const nextPath = `${pathString}${this.pathUtilService.separator}${key}`;
                this.buildKeysMapRecursivelyForPath(map.get(key), nextPath, schema.properties[key]);
            });
        }
        else if (schema.componentType === 'table-list') {
            const list = mapOrList || List();
            this.buildKeysForTableList(pathString, list, schema);
            // there is no recursive call for table list items because they aren't expected to have object or object list as property.
        }
        else if (schema.componentType === 'complex-list') {
            const list = mapOrList || List();
            list.forEach((element, index) => {
                const elementPath = `${pathString}${this.pathUtilService.separator}${index}`;
                this.buildKeysMapRecursivelyForPath(element, elementPath, schema.items);
            });
        }
    }
    // default value for `list`, if this is called for alwaysShow in which case `list` would be undefined
    buildKeysForTableList(path, list = List(), schema) {
        // get present unique keys in all items of table-list
        const keys = Seq.Set(list
            .map(object => object.keySeq().toArray())
            .reduce((pre, cur) => pre.concat(cur), []));
        const itemSchema = schema.items;
        const finalKeys = this.schemafy(keys, itemSchema);
        this.setKeys(path, finalKeys);
    }
    // default value for `map`, if this is called for alwaysShow in which case `map` would be undefined
    buildkeysForObject(path, map = Map(), schema) {
        const finalKeys = this.schemafy(map.keySeq(), schema);
        this.setKeys(path, finalKeys);
        return finalKeys;
    }
    /**
     * Filters keys, add alwaysShow fields and sorts by schema.
     */
    schemafy(keys, schema) {
        return keys
            .concat(schema.required || [])
            .filter(key => this.isNotHidden(key, schema) || this.appGlobalsService.adminMode)
            .concat(schema.alwaysShow || [])
            .sort((a, b) => this.compareKeysBySchemaService.compare(a, b, schema))
            .toOrderedSet();
    }
    isNotHidden(key, schema) {
        if (!schema.properties[key]) {
            throw new Error(`"${key}" is not specified as property in \n${JSON.stringify(schema.properties, undefined, 2)}`);
        }
        return !schema.properties[key].hidden;
    }
    isObjectOrArray(schema) {
        return schema.type === 'object' || schema.type === 'array';
    }
    setKeys(path, keys) {
        this.keysMap[path] = keys;
        if (!this.keys$Map[path]) {
            this.keys$Map[path] = new ReplaySubject$1(1);
        }
        this.keys$Map[path].next(keys);
    }
}
KeysStoreService.ɵfac = function KeysStoreService_Factory(t) { return new (t || KeysStoreService)(ɵɵinject(AppGlobalsService), ɵɵinject(PathUtilService), ɵɵinject(JsonSchemaService), ɵɵinject(CompareKeysBySchemaService)); };
KeysStoreService.ɵprov = ɵɵdefineInjectable({ token: KeysStoreService, factory: KeysStoreService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(KeysStoreService, [{
        type: Injectable
    }], function () { return [{ type: AppGlobalsService }, { type: PathUtilService }, { type: JsonSchemaService }, { type: CompareKeysBySchemaService }]; }, null); })();

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
class JsonStoreService {
    constructor(pathUtilService, keysStoreService) {
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
        this.patchesByPath$ = new ReplaySubject$1(1);
        this.json$ = new Subject();
        this.jsonPatches$ = new Subject();
        this.patchesByPath = {};
        // list of reverse patches for changes
        this.history = new SizedStack(10);
    }
    setIn(path, value, allowUndo = true) {
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
    }
    setEmptyListBeforeEachIndexInPath(path) {
        for (let i = 0; i < path.length - 1; i++) {
            const currentPath = path.slice(0, i + 1);
            if (!this.json.hasIn(currentPath) && typeof path[i + 1] === 'number') {
                this.json = this.json.setIn(currentPath, List());
            }
        }
    }
    getIn(path, notSetValue) {
        return this.json.getIn(path, notSetValue);
    }
    removeIn(path) {
        this.pushRevertPatchToHistory(path, 'add');
        this.json = this.json.removeIn(path);
        this.json$.next(this.json);
        this.keysStoreService.deletePath(path);
    }
    pushRevertPatchToHistory(path, revertOp) {
        this.history.push({
            path: this.pathUtilService.toPathString(path),
            op: revertOp,
            value: this.json.getIn(path)
        });
    }
    addIn(path, value) {
        const lastPathElement = path[path.length - 1];
        const isInsert = typeof lastPathElement === 'number' || lastPathElement === '-';
        if (isInsert) {
            const pathWithoutIndex = path.slice(0, path.length - 1);
            let list = this.getIn(pathWithoutIndex) || List();
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
    }
    toImmutable(value) {
        if (typeof value === 'object' && !(List.isList(value) || Map.isMap(value))) {
            return fromJS(value);
        }
        return value;
    }
    /**
     * Moves the element at given index UP or DOWN within the list
     * @param listPath path to a list in json
     * @param index index of the element that is being moved
     * @param direction 1 for DOWN, -1 for UP movement
     * @return new path of the moved element
     */
    moveIn(listPath, index, direction) {
        let list = this.getIn(listPath);
        let newIndex = index + direction;
        if (newIndex >= list.size || newIndex < 0) {
            newIndex = list.size - Math.abs(newIndex);
        }
        const temp = list.get(index);
        list = list
            .set(index, list.get(newIndex))
            .set(newIndex, temp);
        this.setIn(listPath, list);
        this.keysStoreService.swapListElementKeys(listPath, index, newIndex);
        return listPath.concat(newIndex);
    }
    setJson(json) {
        this.json = json;
    }
    setJsonPatches(patches) {
        this.patchesByPath = {};
        patches.forEach(patch => {
            const path = this.getComponentPathForPatch(patch);
            if (!this.patchesByPath[path]) {
                this.patchesByPath[path] = [];
            }
            this.patchesByPath[path].push(patch);
        });
        this.jsonPatches = patches;
        this.patchesByPath$.next(this.patchesByPath);
    }
    rollbackLastChange() {
        const lastChangeReversePatch = this.history.pop();
        if (lastChangeReversePatch) {
            this.applyPatch(lastChangeReversePatch, false);
            return lastChangeReversePatch.path;
        }
        else {
            return undefined;
        }
    }
    applyPatch(patch, allowUndo = true) {
        const path = this.pathUtilService.toPathArray(patch.path);
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
                console.warn(`${patch.op} is not supported!`);
        }
        this.removeJsonPatch(patch);
    }
    rejectPatch(patch) {
        this.removeJsonPatch(patch);
    }
    hasPatch(path) {
        return this.patchesByPath[path] && this.patchesByPath[path].length > 0;
    }
    hasPatchOrChildrenHavePatch(path) {
        if (this.hasPatch(path)) {
            return true;
        }
        if (this.jsonPatches) {
            const childPathPrefix = `${path}${this.pathUtilService.separator}`;
            return this.jsonPatches
                .some(patch => patch.path.startsWith(childPathPrefix));
        }
        return false;
    }
    removeJsonPatch(patch) {
        const path = this.getComponentPathForPatch(patch);
        // don't do anything if it's UNDO json-patch.
        if (this.patchesByPath[path]) {
            const patchIndex = this.patchesByPath[path].indexOf(patch);
            if (patchIndex > -1) {
                this.patchesByPath[path].splice(patchIndex, 1);
                this.patchesByPath$.next(this.patchesByPath);
                const globalPatchIndex = this.jsonPatches.indexOf(patch);
                this.jsonPatches.splice(globalPatchIndex, 1);
                this.jsonPatches$.next(this.jsonPatches);
            }
        }
    }
    getComponentPathForPatch(patch) {
        if (patch.op === 'add') {
            // add patches handled by parent component
            return this.getParentPath(patch.path);
        }
        return patch.path;
    }
    getParentPath(path) {
        const pathArray = this.pathUtilService.toPathArray(path);
        const parentPathArray = pathArray.slice(0, -1);
        return this.pathUtilService.toPathString(parentPathArray);
    }
}
JsonStoreService.ɵfac = function JsonStoreService_Factory(t) { return new (t || JsonStoreService)(ɵɵinject(PathUtilService), ɵɵinject(KeysStoreService)); };
JsonStoreService.ɵprov = ɵɵdefineInjectable({ token: JsonStoreService, factory: JsonStoreService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonStoreService, [{
        type: Injectable
    }], function () { return [{ type: PathUtilService }, { type: KeysStoreService }]; }, null); })();

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
class JsonUtilService {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    /**
     * Returns value of the property located in dot separated path of json.
     */
    getValueInPath(json, path) {
        const pathElements = this.pathUtilService.toPathArray(path);
        let value = json;
        pathElements.forEach(pathElement => {
            value = value[pathElement];
            if (!value) {
                throw new Error(`"${pathElement}" of given path not defined in given json`);
            }
        });
        return value;
    }
}
JsonUtilService.ɵfac = function JsonUtilService_Factory(t) { return new (t || JsonUtilService)(ɵɵinject(PathUtilService)); };
JsonUtilService.ɵprov = ɵɵdefineInjectable({ token: JsonUtilService, factory: JsonUtilService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonUtilService, [{
        type: Injectable
    }], function () { return [{ type: PathUtilService }]; }, null); })();

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
class ModalService {
    constructor() {
        this.options$ = new ReplaySubject$1(1);
        this.display$ = new ReplaySubject$1(1);
    }
    displayModal(options) {
        this.options$.next(options);
        this.display$.next(true);
    }
    closeCurrentModal() {
        this.display$.next(false);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModalService, [{
        type: Injectable
    }], null, null); })();

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
class RecordFixerService {
    constructor(emptyValueService, componentTypeService) {
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
    fixRecord(rawRecord, schema) {
        const record = Object.assign({}, rawRecord);
        Object.keys(record).forEach(field => {
            if (!schema.properties[field]) {
                // Delete if field is not in schema!
                this.deleteField(record, field);
            }
            else {
                // Fix the field and all children.
                this.fix(field, record, schema.properties[field]);
            }
        });
        return record;
    }
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
    fix(key, parent, schema) {
        if (schema.hidden) {
            return;
        }
        // Fixes for each type/condition, can be added below.
        const value = parent[key];
        // Recursive calls
        if (schema.type === 'object') {
            if (!schema.properties) {
                throw new Error(`"${key}"'s schema has "type": "object" but doesn't specify "properties"`);
            }
            else if (!(value instanceof Object)) {
                throw new Error(`"${key}" in ${JSON.stringify(value, null, 2)} is specified as "object" by schema but it is not an object in json`);
            }
            // Looping over record to filter out fields that are not in schema.
            Object.keys(value).forEach(prop => {
                if (!schema.properties[prop]) {
                    // we don't like fields without schema!
                    this.deleteField(value, prop);
                }
                else {
                    this.fix(prop, value, schema.properties[prop]);
                }
            });
        }
        else if (schema.type === 'array') {
            if (!schema.items) {
                throw new Error(`"${key}"'s schema has "type": "array" but doesn't specify "items"`);
            }
            else if (!Array.isArray(value)) {
                throw new Error(`"${key}" in ${JSON.stringify(value, null, 2)} is specified as "array" by schema but it is not an array in json`);
            }
            value.forEach((element, index) => {
                this.fix(index, value, schema.items);
            });
        }
    }
    /**
     * Deletes given field from the given object.
     * Used for deleting fields that aren't on the schema.
     *
     * TODO: replace this with only `delete` when logging is not necessary!
     */
    deleteField(object, field) {
        delete object[field];
        console.warn(`"${field}" is removed from input json since it's not in the schema`);
    }
}
RecordFixerService.ɵfac = function RecordFixerService_Factory(t) { return new (t || RecordFixerService)(ɵɵinject(EmptyValueService), ɵɵinject(ComponentTypeService)); };
RecordFixerService.ɵprov = ɵɵdefineInjectable({ token: RecordFixerService, factory: RecordFixerService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RecordFixerService, [{
        type: Injectable
    }], function () { return [{ type: EmptyValueService }, { type: ComponentTypeService }]; }, null); })();

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
class SchemaFixerService {
    constructor(jsonUtilService, componentTypeService) {
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
    fixSchema(originalSchema, config) {
        let schema = cloneDeep(originalSchema);
        if (config) {
            schema = this.enrichSchemaWithConfig(schema, config);
        }
        schema = this.fixRecursively(schema);
        return schema;
    }
    /**
     * Enriches given schema with given configuration objects
     * puts config into correct places in schema.
     *
     * @param schema - json schema
     * @param config - schema specific options
     */
    enrichSchemaWithConfig(schema, config) {
        return mergeWith(schema, config, (currentSchema, currentConfig, key) => {
            if ((key === 'properties' || key === 'items') && !currentSchema) {
                console.warn(`config => ${JSON.stringify(currentConfig, (configKey, value) => {
                    if (typeof value === 'function') {
                        return 'ƒ()';
                    }
                    return value;
                }, 2)} should not be under "${key}" because schema does not have "${key}"`);
                // cancel merge to avoid creating broken json schema
                return null;
            }
            if (currentSchema && key === 'properties') {
                const configKeys = Object.keys(currentConfig);
                configKeys
                    .filter(configKey => !currentSchema[configKey])
                    .forEach(wrongConfigKey => {
                    delete currentConfig[wrongConfigKey];
                    console.warn(wrongConfigKey);
                });
            }
        });
    }
    /**
     * Applies all fixes to schema recursively
     */
    fixRecursively(schema) {
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
                .forEach(prop => {
                schema.properties[prop] = this.fixRecursively(schema.properties[prop]);
            });
        }
        else if (schema.items) {
            schema.items = this.fixRecursively(schema.items);
        }
        // fixes that needs above fixes to be done deeply for the current schema
        schema.componentType = this.componentTypeService.getComponentType(schema);
        return schema;
    }
    /**
     * Fixes disabled config to assign the disabled attribute
     * to array items or object properties
     */
    fixDisabled(schema) {
        if (schema.items) {
            schema.items.disabled = true;
        }
        else if (schema.properties) {
            Object.keys(schema.properties)
                .forEach(prop => {
                schema.properties[prop].disabled = true;
            });
        }
        return schema;
    }
    /**
     * Fixes order config to assign the right priority to properties
     */
    fixOrder(schema) {
        const order = schema.order;
        order.forEach((orderKey, index) => {
            const priority = order.length - index;
            if (orderKey in schema.properties) {
                schema.properties[orderKey].priority = priority;
            }
            else {
                console.warn(`${orderKey} defined in order config does not exist in schema.`);
            }
        });
        return schema;
    }
    /**
     * Fixes anyOf schemas with exactly same property structure
     * it merges all enum fields in anyOf elements
     */
    fixAnyOf(schema) {
        const anyOf = schema.anyOf;
        // find existence count of all enum properties in anyOf elements
        // the reason of this, a field could be enum type for some and not for some other anyOf element
        const enumPropCount = {};
        anyOf.forEach(anyOfElement => {
            Object.keys(anyOfElement.properties)
                .filter(prop => anyOfElement.properties[prop].enum)
                .forEach(prop => {
                if (!enumPropCount[prop]) {
                    enumPropCount[prop] = 0;
                }
                enumPropCount[prop]++;
            });
        });
        // combine all enum arrays in anyOf elements
        const enums = {};
        Object.keys(enumPropCount)
            .forEach(prop => {
            anyOf.forEach(anyOfElement => {
                if (!enums[prop]) {
                    enums[prop] = [];
                }
                const enumValues = anyOfElement.properties[prop].enum;
                // check if current field is enum for current anyOf element
                if (enumValues) {
                    enums[prop] = enums[prop].concat(enumValues);
                }
            });
        });
        const fixedSchema = anyOf[0];
        // shallow cleaning of format and pattern
        Object.keys(fixedSchema.properties)
            .forEach(prop => {
            delete fixedSchema.properties[prop].format;
            delete fixedSchema.properties[prop].pattern;
        });
        Object.keys(enumPropCount)
            .forEach(prop => {
            const uniqueEnumValues = Array.from(new Set(enums[prop]));
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
    }
    fixAllOf(schema) {
        return merge({}, ...schema.allOf);
    }
    /**
     * Adds keys that matches `alwaysShowRegExp` to `alwaysShow`.
     * Passes `alwaysShowRegExp` down to children so that it is applied recursively.
     */
    fixAlwaysShowRegExp(schema) {
        if (!schema.alwaysShow) {
            schema.alwaysShow = [];
        }
        Object.keys(schema.properties)
            .forEach(key => {
            // pass alwaysShowRegExp down to apply it recursively.
            const subSchema = schema.properties[key];
            if (subSchema.type === 'object') {
                subSchema.alwaysShowRegExp = schema.alwaysShowRegExp;
            }
            if (key.search(schema.alwaysShowRegExp) > -1) {
                schema.alwaysShow.push(key);
            }
        });
        return schema;
    }
    /**
     * Removes alwayShow fields that aren't in the schema.properties
     * and warns on console.
     */
    fixAlwaysShow(schema) {
        const alwaysShow = schema.alwaysShow;
        schema.alwaysShow = alwaysShow.filter(key => {
            if (schema.properties[key]) {
                return true;
            }
            else {
                console.warn(`${key} is configured as alwaysShow but it is not in ${JSON.stringify(Object.keys(schema.properties))}`);
            }
        });
        return schema;
    }
}
SchemaFixerService.ɵfac = function SchemaFixerService_Factory(t) { return new (t || SchemaFixerService)(ɵɵinject(JsonUtilService), ɵɵinject(ComponentTypeService)); };
SchemaFixerService.ɵprov = ɵɵdefineInjectable({ token: SchemaFixerService, factory: SchemaFixerService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SchemaFixerService, [{
        type: Injectable
    }], function () { return [{ type: JsonUtilService }, { type: ComponentTypeService }]; }, null); })();

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
class SchemaValidationService {
    constructor(appGlobalsService) {
        this.appGlobalsService = appGlobalsService;
        // `jsonPointer: true` is required for `avj-errors` package
        this.ajv = new Ajv({ allErrors: true, jsonPointers: true });
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
        enableCustomErrorMessages(this.ajv);
        //  ajv didn't support format:url, so was added using web url regex for validation
        this.ajv.addFormat('url', this.reWebUrl);
        if (this.appGlobalsService.config && this.appGlobalsService.config.customFormatValidation) {
            const customFormats = this.appGlobalsService.config.customFormatValidation;
            Object.keys(customFormats).forEach(key => {
                this.ajv.addFormat(key, customFormats[key].formatChecker);
            });
        }
    }
    /**
     * Validates a specific value against schema
     *
     * Uses: ajv package for json-schema validation
     *
     */
    validateValue(value, schema) {
        const validationErrors = [];
        if (!this.ajv.validate(schema, value)) {
            this.ajv.errors.forEach(error => {
                validationErrors.push({
                    message: error.message,
                    type: 'Error'
                });
            });
        }
        return validationErrors;
    }
}
SchemaValidationService.ɵfac = function SchemaValidationService_Factory(t) { return new (t || SchemaValidationService)(ɵɵinject(AppGlobalsService)); };
SchemaValidationService.ɵprov = ɵɵdefineInjectable({ token: SchemaValidationService, factory: SchemaValidationService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SchemaValidationService, [{
        type: Injectable
    }], function () { return [{ type: AppGlobalsService }]; }, null); })();

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
class ShortcutActionService {
    constructor(emptyValueService, domUtilService, jsonStoreService, jsonSchemaService, pathUtilService, keysStoreService) {
        this.emptyValueService = emptyValueService;
        this.domUtilService = domUtilService;
        this.jsonStoreService = jsonStoreService;
        this.jsonSchemaService = jsonSchemaService;
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
    }
    addToRootAction(path) {
        this.add(path, true);
    }
    addAction(path) {
        this.add(path, false);
    }
    add(path, root) {
        const _path = this.pathUtilService.getNearestOrRootArrayParentInPath(path, root);
        this.addNewElementInArray(_path, this.jsonSchemaService.forPathArray(_path));
    }
    /**
     * @param path - Path of the array parent that the element is about to be inserted
     * @param schema - Schema of the element that is about to be inserted
     */
    addNewElementInArray(path, schema) {
        const itemSchema = schema.items;
        const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        const values = this.jsonStoreService.getIn(path) || List();
        this.jsonStoreService.setIn(path, values.push(emptyValue));
        path.push(values.size);
        this.waitThenFocus(this.pathUtilService.toPathString(path));
    }
    addBelowToRootAction(path) {
        const rootPath = this.pathUtilService.getNearestOrRootArrayParentInPath(path, true);
        const schema = this.jsonSchemaService.forPathArray(rootPath);
        const itemSchema = schema.items;
        const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
        const values = this.jsonStoreService.getIn(rootPath) || List();
        this.jsonStoreService.setIn(rootPath, values.insert(path[1] + 1, emptyValue));
        rootPath.push(path[1] + 1);
        this.waitThenFocus(this.pathUtilService.toPathString(rootPath));
    }
    moveUpAction(path) {
        this.move(path, -1);
    }
    moveDownAction(path) {
        this.move(path, 1);
    }
    moveUpRootAction(path) {
        this.move(path, -1, true);
    }
    moveDownRootAction(path) {
        this.move(path, 1, true);
    }
    /**
     * @param path - Path of the element that is moved
     * @param direction - Movement direction. -1 for UP, +1 for DOWN
     */
    move(path, direction, root = false) {
        this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
        const index = this.pathUtilService.getElementIndexInForwardOrReversePath(path, root);
        path = this.jsonStoreService.moveIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, root), index, direction);
        const pathString = this.pathUtilService.toPathString(path);
        this.waitThenFocus(pathString);
    }
    deleteAction(path) {
        // blur element before delete for ensuring that `commitValueChange` will not show again the deleted value
        this.domUtilService.blurFirstEditableChildById(this.pathUtilService.toPathString(path));
        this.deleteElement(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false), this.pathUtilService.getElementIndexInForwardOrReversePath(path, false));
    }
    /**
     * @param path - Path of the element's array parent
     * @param index - Index of the element that is deleted from array parent path
     */
    deleteElement(path, index) {
        const values = this.jsonStoreService.getIn(path);
        this.jsonStoreService.setIn(path, values.remove(index));
    }
    navigateUpAction(path) {
        this.navigateUpDown(path, -1);
    }
    navigateDownAction(path) {
        this.navigateUpDown(path, 1);
    }
    /**
     * @param path - Path of the element that is focused
     * @param direction - Navigation direction. -1 for UP, +1 for DOWN
     */
    navigateUpDown(path, direction) {
        const values = this.jsonStoreService.getIn(this.pathUtilService.getNearestOrRootArrayParentInPath(path, false));
        if (List.isList(values)) {
            const elemIndexInPath = this.pathUtilService.getElementIndexInForwardOrReversePath(path, true);
            if ((elemIndexInPath + direction) < values.size && (elemIndexInPath + direction) >= 0) {
                path[path.length - 2] = elemIndexInPath + direction;
            }
            else {
                path[path.length - 2] = values.size - Math.abs((elemIndexInPath + direction));
            }
            const pathString = this.pathUtilService.toPathString(path);
            this.domUtilService.focusAndSelectFirstEditableChildById(pathString);
        }
    }
    navigateLeftAction(path) {
        this.navigateRightLeft(path, -1);
    }
    navigateRightAction(path) {
        this.navigateRightLeft(path, 1);
    }
    /**
     * @param path - Path of the element that is focused
     * @param direction - Navigation direction. -1 for LEFT, +1 for RIGHT
     */
    navigateRightLeft(path, direction) {
        const pathString = this.pathUtilService.toPathString(path);
        this.domUtilService.focusRightOrLeftParentCell(pathString, direction);
    }
    /**
     * Copies the current row in table below and sets the value of the previous focused field to empty in the new row
     * @param path - Path
     */
    copyAction(path) {
        this.copyRowOrSchemaBelow(path, false);
    }
    /**
     * Copies the root parent element below(eg creates a new author in authors list)
     * when you edit an author's field)
     * @param path - Path
     */
    copyFromRootAction(path) {
        this.copyRowOrSchemaBelow(path, true);
    }
    /**
     * @param originalPath - Path of the element that is copied
     * @param root - Copy item from parent or root. Set to true for usage as in `copyFromRootAction` and false
     * for usage as in `copyAction`
     */
    copyRowOrSchemaBelow(originalPath, root) {
        const arrayParentPath = this.pathUtilService.getNearestOrRootArrayParentInPath(originalPath, root);
        if (this.jsonSchemaService.forPathArray(arrayParentPath)['items'].hasOwnProperty('properties')) {
            const elemIndex = this.pathUtilService.getElementIndexInForwardOrReversePath(originalPath, root);
            const valuesList = this.jsonStoreService.getIn(arrayParentPath) || List();
            let newValue = valuesList.get(elemIndex);
            const newPath = arrayParentPath.concat(elemIndex + 1);
            let newPathString = this.pathUtilService.toPathString(newPath);
            if (!root) {
                newValue = newValue.set(originalPath[originalPath.length - 1]);
                newPathString = `${newPathString}${this.pathUtilService.separator}${originalPath[originalPath.length - 1]}`;
            }
            this.jsonStoreService.setIn(arrayParentPath, valuesList.insert(elemIndex + 1, newValue));
            this.waitThenFocus(newPathString);
        }
    }
    undoAction() {
        const rolledBackPath = this.jsonStoreService.rollbackLastChange();
        if (rolledBackPath) {
            this.waitThenFocus(rolledBackPath);
        }
    }
    waitThenFocus(path) {
        setTimeout(() => {
            this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
        });
    }
    generateShortcutAction(actionName) {
        return (event) => {
            event.preventDefault();
            const eventTarget = event.target;
            const pathString = eventTarget.getAttribute('data-path');
            if (pathString) {
                this[actionName](this.pathUtilService.toPathArray(pathString));
            }
            return false;
        };
    }
}
ShortcutActionService.ɵfac = function ShortcutActionService_Factory(t) { return new (t || ShortcutActionService)(ɵɵinject(EmptyValueService), ɵɵinject(DomUtilService), ɵɵinject(JsonStoreService), ɵɵinject(JsonSchemaService), ɵɵinject(PathUtilService), ɵɵinject(KeysStoreService)); };
ShortcutActionService.ɵprov = ɵɵdefineInjectable({ token: ShortcutActionService, factory: ShortcutActionService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ShortcutActionService, [{
        type: Injectable
    }], function () { return [{ type: EmptyValueService }, { type: DomUtilService }, { type: JsonStoreService }, { type: JsonSchemaService }, { type: PathUtilService }, { type: KeysStoreService }]; }, null); })();

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
class WindowHrefService {
    constructor() {
        this.hrefWithoutHash = this.getHrefWithoutHash();
    }
    getHrefWithoutHash() {
        const href = window.location.href;
        const lastHashIndex = href.lastIndexOf('#');
        if (lastHashIndex > 0) {
            return href.substring(0, lastHashIndex);
        }
        else {
            return href;
        }
    }
}
WindowHrefService.ɵfac = function WindowHrefService_Factory(t) { return new (t || WindowHrefService)(); };
WindowHrefService.ɵprov = ɵɵdefineInjectable({ token: WindowHrefService, factory: WindowHrefService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WindowHrefService, [{
        type: Injectable
    }], function () { return []; }, null); })();

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
class ProblemsService {
    constructor() {
        this.externalCategorizedProblems$ = new ReplaySubject$1(1);
        this.internalCategorizedProblems$ = new ReplaySubject$1(1);
        this.externalProblemCount$ = new ReplaySubject$1(1);
        this.internalProblemCount$ = new ReplaySubject$1(1);
        this.errorCount$ = this.getTotalDistinctProblemCount$ForType('errors');
        this.warningCount$ = this.getTotalDistinctProblemCount$ForType('warnings');
        this.internalProblemMap$ = new ReplaySubject$1(1);
        this.internalProblemMap = {};
        this.internalCategorizedProblemMap = { errors: {}, warnings: {} };
        this.externalCategorizedProblemMap = { errors: {}, warnings: {} };
        this.externalProblemCount = { errors: 0, warnings: 0 };
        this.internalProblemCount = { errors: 0, warnings: 0 };
        // set default counts to components
        this.externalProblemCount$.next(this.externalProblemCount);
        this.internalProblemCount$.next(this.internalProblemCount);
    }
    getTotalDistinctProblemCount$ForType(type) {
        const external$ = this.externalProblemCount$
            .pipe(map(counts => counts[type]));
        const internal$ = this.internalProblemCount$
            .pipe(map(counts => counts[type]));
        return combineLatest(external$, internal$, (external, internal) => external + internal)
            .pipe(distinctUntilChanged());
    }
    set externalProblems(problems) {
        const { categorizedProblemMap, errorCount, warningCount } = this.categorizeProblemMap(problems);
        this.externalProblemCount = { errors: errorCount, warnings: warningCount };
        this.externalProblemCount$.next(this.externalProblemCount);
        this.externalCategorizedProblemMap = categorizedProblemMap;
        this.externalCategorizedProblems$.next(this.externalCategorizedProblemMap);
    }
    setInternalProblemsForPath(path, problems) {
        this.internalProblemMap[path] = problems;
        this.internalProblemMap$.next(this.internalProblemMap);
        const categorizedProblems = this.categorizeValidationProblems(problems);
        this.internalProblemCount.errors += categorizedProblems.errors.length - this.internalProblemCountForPath(path, 'errors');
        this.internalProblemCount.warnings += categorizedProblems.warnings.length - this.internalProblemCountForPath(path, 'warnings');
        this.internalProblemCount$.next(this.internalProblemCount);
        this.internalCategorizedProblemMap.errors[path] = categorizedProblems.errors;
        this.internalCategorizedProblemMap.warnings[path] = categorizedProblems.warnings;
        this.internalCategorizedProblems$.next(this.internalCategorizedProblemMap);
    }
    internalProblemCountForPath(path, type) {
        if (this.internalCategorizedProblemMap[type][path]) {
            return this.internalCategorizedProblemMap[type][path].length;
        }
        return 0;
    }
    hasProblem(path) {
        const internalProblems = this.internalCategorizedProblemMap.errors[path];
        const externalProblems = this.externalCategorizedProblemMap.errors[path];
        const internalProblemCount = internalProblems ? internalProblems.length : 0;
        const externalProblemCount = externalProblems ? externalProblems.length : 0;
        return (internalProblemCount + externalProblemCount) > 0;
    }
    categorizeProblemMap(problemMap) {
        const categorizedProblemMap = { errors: {}, warnings: {} };
        let errorCount = 0;
        let warningCount = 0;
        Object.keys(problemMap)
            .map(path => {
            const validationProblems = problemMap[path];
            const categorized = this.categorizeValidationProblems(validationProblems);
            return { path, categorized };
        }).forEach(problemsForPath => {
            categorizedProblemMap.errors[problemsForPath.path] = problemsForPath.categorized.errors;
            categorizedProblemMap.warnings[problemsForPath.path] = problemsForPath.categorized.warnings;
            errorCount += problemsForPath.categorized.errors.length;
            warningCount += problemsForPath.categorized.warnings.length;
        });
        return { categorizedProblemMap, errorCount, warningCount };
    }
    categorizeValidationProblems(validationProblems) {
        const categorized = { errors: [], warnings: [] };
        validationProblems.forEach(error => {
            if (error.type === 'Error') {
                categorized.errors.push(error);
            }
            else {
                categorized.warnings.push(error);
            }
        });
        return categorized;
    }
}
ProblemsService.ɵfac = function ProblemsService_Factory(t) { return new (t || ProblemsService)(); };
ProblemsService.ɵprov = ɵɵdefineInjectable({ token: ProblemsService, factory: ProblemsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ProblemsService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class KatexService {
    constructor() {
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
    renderMathInText(text, el) {
        const data = this.splitWithDelimiters(text, this.delimiters);
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'text') {
                fragment.appendChild(document.createTextNode(data[i].data));
            }
            else {
                const span = document.createElement('span');
                const math = data[i].data;
                try {
                    render(math, span, {
                        displayMode: data[i].display,
                    });
                }
                catch (e) {
                    if (!(e instanceof ParseError)) {
                        throw e;
                    }
                    console.error(`KaTeX auto-render: Failed to parse ${data[i].data} with ${e}`);
                    fragment.appendChild(document.createTextNode(data[i].rawData));
                    continue;
                }
                fragment.appendChild(span);
            }
        }
        // clear
        el.innerHTML = '';
        el.appendChild(fragment);
    }
    findEndOfMath(delimiter, text, startIndex) {
        // Adapted from
        // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
        let index = startIndex;
        let braceLevel = 0;
        const delimLength = delimiter.length;
        while (index < text.length) {
            const character = text[index];
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
    }
    splitAtDelimiters(startData, leftDelim, rightDelim, display) {
        const finalData = [];
        for (let i = 0; i < startData.length; i++) {
            if (startData[i].type === 'text') {
                const text = startData[i].data;
                let lookingForLeft = true;
                let currIndex = 0;
                let nextIndex;
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
    }
    splitWithDelimiters(text, delimiters) {
        let data = [{ type: 'text', data: text }];
        for (let i = 0; i < delimiters.length; i++) {
            const delimiter = delimiters[i];
            data = this.splitAtDelimiters(data, delimiter.left, delimiter.right, delimiter.display || false);
        }
        return data;
    }
}
KatexService.ɵfac = function KatexService_Factory(t) { return new (t || KatexService)(); };
KatexService.ɵprov = ɵɵdefineInjectable({ token: KatexService, factory: KatexService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(KatexService, [{
        type: Injectable
    }], null, null); })();

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
class TextDiffService {
    diffByWord(currentText, newText = '') {
        return diffWords(currentText, newText);
    }
}
TextDiffService.ɵfac = function TextDiffService_Factory(t) { return new (t || TextDiffService)(); };
TextDiffService.ɵprov = ɵɵdefineInjectable({ token: TextDiffService, factory: TextDiffService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextDiffService, [{
        type: Injectable
    }], null, null); })();

const SHARED_SERVICES = [
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
class ShortcutsDirective {
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
ShortcutsDirective.ɵfac = function ShortcutsDirective_Factory(t) { return new (t || ShortcutsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ShortcutActionService)); };
ShortcutsDirective.ɵdir = ɵɵdefineDirective({ type: ShortcutsDirective, selectors: [["", "shortcuts", ""]], inputs: { shortcuts: "shortcuts" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ShortcutsDirective, [{
        type: Directive,
        args: [{
                selector: '[shortcuts]'
            }]
    }], function () { return [{ type: ElementRef }, { type: ShortcutActionService }]; }, { shortcuts: [{
            type: Input
        }] }); })();

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
const _c0 = ["modal"];
function ModalViewComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "button", 12);
    ɵɵlistener("click", function ModalViewComponent_div_3_div_9_Template_button_click_1_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(2); return ctx_r3.options.onConfirm(); });
    ɵɵelement(2, "i", 13);
    ɵɵtext(3, " Confirm ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function ModalViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "button", 6);
    ɵɵlistener("click", function ModalViewComponent_div_3_Template_button_click_2_listener() { ɵɵrestoreView(_r6); ɵɵnextContext(); const _r0 = ɵɵreference(1); return _r0.hide(); });
    ɵɵtext(3, "\u00D7");
    ɵɵelementEnd();
    ɵɵelementStart(4, "h4", 7);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 8);
    ɵɵelement(7, "div", 9);
    ɵɵelementStart(8, "div", 10);
    ɵɵtemplate(9, ModalViewComponent_div_3_div_9_Template, 4, 0, "div", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r1.options.title);
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", ctx_r1.options.bodyHtml, ɵɵsanitizeHtml);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", ctx_r1.options.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "confirm");
} }
const _c1 = function () { return { backdrop: false }; };
class ModalViewComponent extends AbstractSubscriberComponent {
    // TODO: unsubcribe on destroy
    constructor(modalService, changeDetectorRef) {
        super();
        this.modalService = modalService;
        this.changeDetectorRef = changeDetectorRef;
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
ModalViewComponent.ɵfac = function ModalViewComponent_Factory(t) { return new (t || ModalViewComponent)(ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(ChangeDetectorRef)); };
ModalViewComponent.ɵcmp = ɵɵdefineComponent({ type: ModalViewComponent, selectors: [["modal-view"]], viewQuery: function ModalViewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modal = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "config", "onShown"], ["modal", "bs-modal"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "close", 3, "click"], [1, "modal-title"], [1, "modal-body"], [3, "innerHTML"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]], template: function ModalViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵlistener("onShown", function ModalViewComponent_Template_div_onShown_0_listener() { return ctx.onShow(); });
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, ModalViewComponent_div_3_Template, 10, 4, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("config", ɵɵpureFunction0(2, _c1));
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.options);
    } }, directives: [ModalDirective, NgIf, NgSwitch, NgSwitchCase], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModalViewComponent, [{
        type: Component,
        args: [{
                selector: 'modal-view',
                styleUrls: [
                    './modal-view.component.scss'
                ],
                templateUrl: './modal-view.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ModalService }, { type: ChangeDetectorRef }]; }, { modal: [{
            type: ViewChild,
            args: ['modal']
        }] }); })();

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
class SortAlphabeticallyPipe {
    transform(set) {
        return set.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
    }
}
SortAlphabeticallyPipe.ɵfac = function SortAlphabeticallyPipe_Factory(t) { return new (t || SortAlphabeticallyPipe)(); };
SortAlphabeticallyPipe.ɵpipe = ɵɵdefinePipe({ name: "sortAlphabetically", type: SortAlphabeticallyPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SortAlphabeticallyPipe, [{
        type: Pipe,
        args: [{
                name: 'sortAlphabetically',
            }]
    }], null, null); })();

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
class FilterByExpressionPipe {
    transform(array, prefix) {
        const pattern = new RegExp(prefix, 'i');
        return array.filter(value => value.match(pattern));
    }
}
FilterByExpressionPipe.ɵfac = function FilterByExpressionPipe_Factory(t) { return new (t || FilterByExpressionPipe)(); };
FilterByExpressionPipe.ɵpipe = ɵɵdefinePipe({ name: "filterByExpression", type: FilterByExpressionPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterByExpressionPipe, [{
        type: Pipe,
        args: [{
                name: 'filterByExpression',
            }]
    }], null, null); })();

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
function AddFieldDropdownComponent_div_0_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "a", 9);
    ɵɵlistener("click", function AddFieldDropdownComponent_div_0_ul_3_li_4_Template_a_click_1_listener() { ɵɵrestoreView(_r5); const key_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(3); return ctx_r4.onFieldSelect(key_r3); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(key_r3);
} }
function AddFieldDropdownComponent_div_0_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 4);
    ɵɵelementStart(1, "li", 5);
    ɵɵelementStart(2, "input", 6);
    ɵɵlistener("ngModelChange", function AddFieldDropdownComponent_div_0_ul_3_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(2); return ctx_r6.expression = $event; })("click", function AddFieldDropdownComponent_div_0_ul_3_Template_input_click_2_listener($event) { ɵɵrestoreView(_r7); return $event.stopPropagation(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(3, "li", 7);
    ɵɵtemplate(4, AddFieldDropdownComponent_div_0_ul_3_li_4_Template, 3, 1, "li", 8);
    ɵɵpipe(5, "sortAlphabetically");
    ɵɵpipe(6, "filterByExpression");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r1.expression);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 2, ɵɵpipeBind2(6, 4, ctx_r1.addableKeys, ctx_r1.expression)));
} }
function AddFieldDropdownComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("onShown", function AddFieldDropdownComponent_div_0_Template_div_onShown_0_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.onDropdownShown(); });
    ɵɵelementStart(1, "button", 2);
    ɵɵprojection(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, AddFieldDropdownComponent_div_0_ul_3_Template, 7, 7, "ul", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("isDisabled", ctx_r0.isDisabled);
} }
const _c0$1 = ["*"];
class AddFieldDropdownComponent {
    constructor(elementRef, domUtilService, keysStoreService) {
        this.elementRef = elementRef;
        this.domUtilService = domUtilService;
        this.keysStoreService = keysStoreService;
        this.expression = '';
        this.hidden = false;
    }
    ngOnChanges(changes) {
        if (changes['schema'] || changes['fields']) {
            this.addableKeys = Set$1.fromKeys(this.schema.properties)
                .subtract(this.fields)
                .filter(field => !this.schema.properties[field].hidden);
            this.hidden = this.addableKeys.size === 0;
        }
    }
    onDropdownShown() {
        setTimeout(() => this.domUtilService.focusFirstInputChildByElement(this.elementRef.nativeElement));
    }
    onFieldSelect(field) {
        const newFieldPathString = this.keysStoreService.addKey(this.pathString, field, this.schema);
        this.domUtilService.focusAndSelectFirstEditableChildById(newFieldPathString);
        this.expression = '';
    }
}
AddFieldDropdownComponent.ɵfac = function AddFieldDropdownComponent_Factory(t) { return new (t || AddFieldDropdownComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(KeysStoreService)); };
AddFieldDropdownComponent.ɵcmp = ɵɵdefineComponent({ type: AddFieldDropdownComponent, selectors: [["add-field-dropdown"]], inputs: { schema: "schema", fields: "fields", pathString: "pathString", isDisabled: "isDisabled" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$1, decls: 1, vars: 1, consts: [["class", "btn-group add-field-dropdown-container", "dropdown", "", "keyboardNav", "true", 3, "isDisabled", "onShown", 4, "ngIf"], ["dropdown", "", "keyboardNav", "true", 1, "btn-group", "add-field-dropdown-container", 3, "isDisabled", "onShown"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-add-field-dropdown"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], [1, "dropdown-filter-container"], ["placeholder", "filter", 3, "ngModel", "ngModelChange", "click"], [1, "divider", "dropdown-divider"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]], template: function AddFieldDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, AddFieldDropdownComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.hidden);
    } }, directives: [NgIf, BsDropdownDirective, BsDropdownToggleDirective, BsDropdownMenuDirective, DefaultValueAccessor, NgControlStatus, NgModel, NgForOf], pipes: [SortAlphabeticallyPipe, FilterByExpressionPipe], styles: [".btn-add-field-dropdown[_ngcontent-%COMP%]{background:transparent;border:0;color:#2f4f4f;float:left;font-size:11px;font-weight:700;line-height:1;margin-bottom:2px;opacity:.4;padding:0 3px;text-shadow:0 1px 0 #fff}.btn-add-field-dropdown[_ngcontent-%COMP%]:hover{color:#00f;opacity:.6}.dropdown-filter-container[_ngcontent-%COMP%]{padding:0 3px}.dropdown-filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddFieldDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'add-field-dropdown',
                styleUrls: [
                    './add-field-dropdown.component.scss'
                ],
                templateUrl: './add-field-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: DomUtilService }, { type: KeysStoreService }]; }, { schema: [{
            type: Input
        }], fields: [{
            type: Input
        }], pathString: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] }); })();

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
function BottomConsoleBadgesComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵlistener("click", function BottomConsoleBadgesComponent_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onBadgeClick($event, "Errors"); });
    ɵɵelementStart(1, "span", 5);
    ɵɵelement(2, "i", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("tooltip", "", ctx_r0.errorCount, " error(s)");
} }
function BottomConsoleBadgesComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 7);
    ɵɵlistener("click", function BottomConsoleBadgesComponent_a_2_Template_a_click_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.onBadgeClick($event, "Warnings"); });
    ɵɵelementStart(1, "span", 8);
    ɵɵelement(2, "i", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("tooltip", "", ctx_r1.warningCount, " warning(s)");
} }
function BottomConsoleBadgesComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 10);
    ɵɵlistener("click", function BottomConsoleBadgesComponent_a_3_Template_a_click_0_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.onBadgeClick($event, "Patches"); });
    ɵɵelementStart(1, "span", 11);
    ɵɵelement(2, "i", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("tooltip", "", ctx_r2.patchCount, " conflicts(s)");
} }
class BottomConsoleBadgesComponent extends AbstractSubscriberComponent {
    constructor(problemsService, changeDetectorRef, jsonStoreService) {
        super();
        this.problemsService = problemsService;
        this.changeDetectorRef = changeDetectorRef;
        this.jsonStoreService = jsonStoreService;
        this.badgeClick = new EventEmitter();
        this.errorCount = 0;
        this.warningCount = 0;
        this.patchCount = 0;
    }
    ngOnInit() {
        this.problemsService.errorCount$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(count => {
            this.errorCount = count;
            // FIXME: use markForCheck() instead
            // markForCheck() wasn't working for mysterious reasons for initial update
            this.changeDetectorRef.detectChanges();
        });
        this.problemsService.warningCount$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(count => {
            this.warningCount = count;
            // FIXME: use markForCheck() instead
            // markForCheck() wasn't working for mysterious reasons for initial update
            this.changeDetectorRef.detectChanges();
        });
        this.jsonStoreService.patchesByPath$
            .pipe(map(patchesByPath => {
            return Object.keys(patchesByPath)
                .map(path => patchesByPath[path].length)
                .reduce((sum, patchCountPerPath) => sum + patchCountPerPath, 0);
        }))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patchCount => {
            this.patchCount = patchCount;
            this.changeDetectorRef.markForCheck();
        });
    }
    onBadgeClick(event, badgeName) {
        event.preventDefault();
        this.badgeClick.emit(badgeName);
    }
}
BottomConsoleBadgesComponent.ɵfac = function BottomConsoleBadgesComponent_Factory(t) { return new (t || BottomConsoleBadgesComponent)(ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(JsonStoreService)); };
BottomConsoleBadgesComponent.ɵcmp = ɵɵdefineComponent({ type: BottomConsoleBadgesComponent, selectors: [["bottom-console-badges"]], outputs: { badgeClick: "badgeClick" }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [[1, "badges-container"], ["class", "error", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["class", "warning", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["class", "patch", "placement", "right", 3, "tooltip", "click", 4, "ngIf"], ["placement", "right", 1, "error", 3, "tooltip", "click"], [1, "error", "fa-stack", "fa-lg"], [1, "fa", "fa-times", "fa-stack-1x", "fa-inverse"], ["placement", "right", 1, "warning", 3, "tooltip", "click"], [1, "warning", "fa-stack", "fa-lg"], [1, "fa", "fa-exclamation", "fa-stack-1x", "fa-inverse"], ["placement", "right", 1, "patch", 3, "tooltip", "click"], [1, "patch", "fa-stack", "fa-lg"], [1, "fa", "fa-bolt", "fa-stack-1x", "fa-inverse"]], template: function BottomConsoleBadgesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, BottomConsoleBadgesComponent_a_1_Template, 3, 1, "a", 1);
        ɵɵtemplate(2, BottomConsoleBadgesComponent_a_2_Template, 3, 1, "a", 2);
        ɵɵtemplate(3, BottomConsoleBadgesComponent_a_3_Template, 3, 1, "a", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.errorCount > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.warningCount > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.patchCount > 0);
    } }, directives: [NgIf, TooltipDirective], styles: [".error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #d14024}.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#d14024;padding-bottom:2px}.warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #fbd503}.warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fbd503}.patch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #f96509}.patch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f96509}a[_ngcontent-%COMP%]{cursor:pointer;padding-top:7px;text-decoration:none}a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:all .35s ease-in-out}a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{font-size:1.1em}.badges-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;width:100%}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;margin-top:5px;width:30px}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-of-type{border-top:2px solid #283948;margin-top:10px}.badges-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{align-items:center;border-radius:20%;display:flex;height:30px}@media screen and (max-width:1440px){.badges-container[_ngcontent-%COMP%]{flex-direction:column}}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BottomConsoleBadgesComponent, [{
        type: Component,
        args: [{
                selector: 'bottom-console-badges',
                styleUrls: [
                    './bottom-console-badges.component.scss'
                ],
                templateUrl: './bottom-console-badges.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ProblemsService }, { type: ChangeDetectorRef }, { type: JsonStoreService }]; }, { badgeClick: [{
            type: Output
        }] }); })();

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
class AddAlwaysShowFieldsPipe {
    transform(fields, schema) {
        const alwaysShowFields = schema.alwaysShow || [];
        return fields.union(alwaysShowFields);
    }
}
AddAlwaysShowFieldsPipe.ɵfac = function AddAlwaysShowFieldsPipe_Factory(t) { return new (t || AddAlwaysShowFieldsPipe)(); };
AddAlwaysShowFieldsPipe.ɵpipe = ɵɵdefinePipe({ name: "addAlwaysShowFields", type: AddAlwaysShowFieldsPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddAlwaysShowFieldsPipe, [{
        type: Pipe,
        args: [{
                name: 'addAlwaysShowFields'
            }]
    }], null, null); })();

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
class FilterHiddenFieldsPipe {
    /**
     * It filters out `hidden` fields
     *
     * @param keys
     * @param schema - the `schema` that has object schema which contains each key in `keys`
     * @return - filtered keys
     */
    transform(keys, schema, adminMode) {
        const schemaProps = schema.properties;
        if (!keys) {
            return undefined;
        }
        return keys
            .filter(key => {
            if (!schemaProps[key]) {
                throw new Error(`"${key}" is not specified as property in \n${JSON.stringify(schemaProps, undefined, 2)}`);
            }
            return !schemaProps[key].hidden || adminMode;
        });
    }
}
FilterHiddenFieldsPipe.ɵfac = function FilterHiddenFieldsPipe_Factory(t) { return new (t || FilterHiddenFieldsPipe)(); };
FilterHiddenFieldsPipe.ɵpipe = ɵɵdefinePipe({ name: "filterHiddenFields", type: FilterHiddenFieldsPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterHiddenFieldsPipe, [{
        type: Pipe,
        args: [{
                name: 'filterHiddenFields',
            }]
    }], null, null); })();

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
function TreeMenuItemComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function TreeMenuItemComponent_a_3_Template_a_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.collapse(); });
    ɵɵtext(1, " [x]");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hidden", ctx_r0.isCollapsed);
} }
function TreeMenuItemComponent_div_4_div_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "tree-menu-item", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("label", key_r7)("value", ctx_r6.value.get(key_r7))("schema", ctx_r6.schema.properties[key_r7])("path", ctx_r6.getChildPath(key_r7))("depth", ctx_r6.depth + 1);
} }
function TreeMenuItemComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TreeMenuItemComponent_div_4_div_2_li_1_Template, 2, 5, "li", 6);
    ɵɵpipe(2, "sortAlphabetically");
    ɵɵpipe(3, "addAlwaysShowFields");
    ɵɵpipe(4, "filterHiddenFields");
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 2, ɵɵpipeBind2(3, 4, ɵɵpipeBind3(4, 7, ctx_r4.keys, ctx_r4.schema, ɵɵpipeBind1(5, 11, ctx_r4.adminMode$)), ctx_r4.schema)))("ngForTrackBy", ctx_r4.trackByElement);
} }
function TreeMenuItemComponent_div_4_div_3_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "tree-menu-item", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("label", i_r10)("value", element_r9)("schema", ctx_r8.schema.items)("path", ctx_r8.getChildPath(i_r10))("depth", ctx_r8.depth + 1);
} }
function TreeMenuItemComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TreeMenuItemComponent_div_4_div_3_li_1_Template, 2, 5, "li", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r5.value)("ngForTrackBy", ctx_r5.trackByElement);
} }
function TreeMenuItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "ul");
    ɵɵtemplate(2, TreeMenuItemComponent_div_4_div_2_Template, 6, 13, "div", 5);
    ɵɵtemplate(3, TreeMenuItemComponent_div_4_div_3_Template, 2, 2, "div", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r1.schema.type)("hidden", ctx_r1.isCollapsed);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "object");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "array");
} }
class TreeMenuItemComponent {
    constructor(windowHrefService, domUtilService, pathUtilService, appGlobalsService) {
        this.windowHrefService = windowHrefService;
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.appGlobalsService = appGlobalsService;
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.href = `${this.windowHrefService.hrefWithoutHash}#${this.path}`;
    }
    ngOnChanges(changes) {
        if (changes['value'] && this.value && this.schema.type === 'object') {
            this.keys = this.value.keySeq().toSet();
        }
    }
    toggle(event) {
        // fix to trigger :focus css after focusAndSelectFirstInputChildById called.
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        this.domUtilService.focusAndSelectFirstEditableChildById(this.path, true);
    }
    collapse() {
        this.isCollapsed = true;
    }
    get isCollapsable() {
        const schemaType = this.schema.type;
        return this.isNotLeaf && (schemaType === 'object' || schemaType === 'array');
    }
    get maxDepth() {
        return this.appGlobalsService.config.menuMaxDepth;
    }
    get isNotLeaf() {
        return this.maxDepth === undefined || this.depth < this.maxDepth;
    }
    get adminMode$() {
        return this.appGlobalsService.adminMode$;
    }
    getChildPath(indexOrKey) {
        return `${this.path}${this.pathUtilService.separator}${indexOrKey}`;
    }
    trackByElement(index, element) {
        return element;
    }
}
TreeMenuItemComponent.ɵfac = function TreeMenuItemComponent_Factory(t) { return new (t || TreeMenuItemComponent)(ɵɵdirectiveInject(WindowHrefService), ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(AppGlobalsService)); };
TreeMenuItemComponent.ɵcmp = ɵɵdefineComponent({ type: TreeMenuItemComponent, selectors: [["tree-menu-item"]], inputs: { label: "label", value: "value", schema: "schema", path: "path", depth: "depth" }, features: [ɵɵNgOnChangesFeature], decls: 5, vars: 4, consts: [[3, "href", "click"], [3, "hidden", "click", 4, "ngIf"], [3, "ngSwitch", "hidden", 4, "ngIf"], [3, "hidden", "click"], [3, "ngSwitch", "hidden"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "label", "value", "schema", "path", "depth"]], template: function TreeMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "a", 0);
        ɵɵlistener("click", function TreeMenuItemComponent_Template_a_click_1_listener($event) { return ctx.toggle($event); });
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, TreeMenuItemComponent_a_3_Template, 2, 1, "a", 1);
        ɵɵtemplate(4, TreeMenuItemComponent_div_4_Template, 4, 4, "div", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("href", ctx.href, ɵɵsanitizeUrl);
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.label);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isCollapsable);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isNotLeaf);
    } }, directives: [NgIf, NgSwitch, NgSwitchCase, NgForOf, TreeMenuItemComponent], pipes: [SortAlphabeticallyPipe, AddAlwaysShowFieldsPipe, FilterHiddenFieldsPipe, AsyncPipe], styles: ["a[_ngcontent-%COMP%]{color:#e0dfdf}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeMenuItemComponent, [{
        type: Component,
        args: [{
                selector: 'tree-menu-item',
                styleUrls: [
                    './tree-menu-item.component.scss'
                ],
                templateUrl: './tree-menu-item.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: WindowHrefService }, { type: DomUtilService }, { type: PathUtilService }, { type: AppGlobalsService }]; }, { label: [{
            type: Input
        }], value: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }], depth: [{
            type: Input
        }] }); })();

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
function TreeMenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "tree-menu-item", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("label", key_r1)("value", ctx_r0.record.get(key_r1))("schema", ctx_r0.schema.properties[key_r1])("path", ctx_r0.getChildPath(key_r1))("depth", 1);
} }
class TreeMenuComponent {
    constructor(domUtilService, pathUtilService, appGlobalsService) {
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.appGlobalsService = appGlobalsService;
        this.prefixOrPath = '';
    }
    ngOnChanges(changes) {
        if (changes['record']) {
            this.keys = this.record.keySeq().toSet();
        }
    }
    getChildPath(key) {
        return `${this.pathUtilService.separator}${key}`;
    }
    trackByElement(index, element) {
        return element;
    }
    get adminMode$() {
        return this.appGlobalsService.adminMode$;
    }
}
TreeMenuComponent.ɵfac = function TreeMenuComponent_Factory(t) { return new (t || TreeMenuComponent)(ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(AppGlobalsService)); };
TreeMenuComponent.ɵcmp = ɵɵdefineComponent({ type: TreeMenuComponent, selectors: [["tree-menu"]], inputs: { record: "record", schema: "schema" }, features: [ɵɵNgOnChangesFeature], decls: 7, vars: 13, consts: [[1, "tree-menu-container"], [1, "menu-item-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "label", "value", "schema", "path", "depth"]], template: function TreeMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "ul", 1);
        ɵɵtemplate(2, TreeMenuComponent_li_2_Template, 2, 5, "li", 2);
        ɵɵpipe(3, "sortAlphabetically");
        ɵɵpipe(4, "addAlwaysShowFields");
        ɵɵpipe(5, "filterHiddenFields");
        ɵɵpipe(6, "async");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 2, ɵɵpipeBind2(4, 4, ɵɵpipeBind3(5, 7, ctx.keys, ctx.schema, ɵɵpipeBind1(6, 11, ctx.adminMode$)), ctx.schema)))("ngForTrackBy", ctx.trackByElement);
    } }, directives: [NgForOf, TreeMenuItemComponent], pipes: [SortAlphabeticallyPipe, AddAlwaysShowFieldsPipe, FilterHiddenFieldsPipe, AsyncPipe], styles: ["div.tree-menu-container[_ngcontent-%COMP%]{overflow-y:auto;padding:8px 2px 0 0;text-align:center}ul.menu-item-container[_ngcontent-%COMP%]{list-style:none;padding-left:0;padding-top:8px;text-align:left}ul.menu-item-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:2px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeMenuComponent, [{
        type: Component,
        args: [{
                selector: 'tree-menu',
                styleUrls: [
                    './tree-menu.component.scss'
                ],
                templateUrl: './tree-menu.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DomUtilService }, { type: PathUtilService }, { type: AppGlobalsService }]; }, { record: [{
            type: Input
        }], schema: [{
            type: Input
        }] }); })();

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
function TitleDropdownComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 4);
    ɵɵprojection(1);
    ɵɵelementEnd();
} }
const _c0$2 = ["*"];
class TitleDropdownComponent {
}
TitleDropdownComponent.ɵfac = function TitleDropdownComponent_Factory(t) { return new (t || TitleDropdownComponent)(); };
TitleDropdownComponent.ɵcmp = ɵɵdefineComponent({ type: TitleDropdownComponent, selectors: [["title-dropdown"]], inputs: { title: "title", isDisabled: "isDisabled" }, ngContentSelectors: _c0$2, decls: 5, vars: 2, consts: [["dropdown", "", 1, "title-dropdown-container", 3, "isDisabled"], ["dropdownToggle", "", 1, "btn", "title-dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"]], template: function TitleDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵtext(2);
        ɵɵelement(3, "span", 2);
        ɵɵelementEnd();
        ɵɵtemplate(4, TitleDropdownComponent_ul_4_Template, 2, 0, "ul", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("isDisabled", ctx.isDisabled);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.title, " ");
    } }, directives: [BsDropdownDirective, BsDropdownToggleDirective, BsDropdownMenuDirective], styles: [".title-dropdown-toggle[_ngcontent-%COMP%]{background:transparent;border:none;color:#c1c1c1;font-size:13px;font-weight:700;padding:0 3px}.title-dropdown-toggle[_ngcontent-%COMP%]:focus{outline:0}.title-dropdown-toggle[_ngcontent-%COMP%]:hover{color:#6b6b6b}.dropdown-menu[_ngcontent-%COMP%]{left:auto;min-width:120px;top:auto}.title-dropdown-container[_ngcontent-%COMP%]{position:relative}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TitleDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'title-dropdown',
                styleUrls: [
                    './title-dropdown.component.scss'
                ],
                templateUrl: './title-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { title: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] }); })();

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
class FindReplaceComponent {
    constructor(changeDetectionRef, domSanitizer, findReplaceAllService, jsonStoreService, modalService) {
        this.changeDetectionRef = changeDetectionRef;
        this.domSanitizer = domSanitizer;
        this.findReplaceAllService = findReplaceAllService;
        this.jsonStoreService = jsonStoreService;
        this.modalService = modalService;
    }
    onKeypress(key) {
        if (key === 'Enter') {
            this.findAndReplace();
        }
    }
    findAndReplace() {
        if (!(this.find && this.replace)) {
            return;
        }
        const value = this.jsonStoreService.getIn(this.path);
        const result = this.findReplaceAllService
            .findReplaceInImmutable(value, this.schema, this.find, this.replace, this.exactPhrase);
        this.replaced = result.replaced;
        const stringyfiedDiffHtml = JSON.stringify(result.diffHtml, undefined, 2);
        this.modalService.displayModal({
            title: 'After Replace',
            bodyHtml: this.domSanitizer.bypassSecurityTrustHtml(`<pre class="max-height-70-vh"><code>${stringyfiedDiffHtml}</code></pre>`),
            type: 'confirm',
            onConfirm: () => {
                this.modalService.closeCurrentModal();
                this.jsonStoreService.setIn(this.path, this.replaced);
                this.cleanParameters();
            }
        });
    }
    cleanParameters() {
        this.find = '';
        this.replace = '';
        this.exactPhrase = false;
        this.changeDetectionRef.markForCheck();
    }
}
FindReplaceComponent.ɵfac = function FindReplaceComponent_Factory(t) { return new (t || FindReplaceComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(FindReplaceAllService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(ModalService)); };
FindReplaceComponent.ɵcmp = ɵɵdefineComponent({ type: FindReplaceComponent, selectors: [["find-replace"]], inputs: { path: "path", schema: "schema" }, decls: 10, vars: 3, consts: [[1, "find-replace-container"], [1, "top-container-item"], ["placeholder", "Find", 3, "ngModel", "ngModelChange", "keypress"], ["placeholder", "Replace", 3, "ngModel", "ngModelChange", "keypress"], [1, "bottom-container-item"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "keypress"], [1, "fa", "fa-arrow-circle-right", 3, "click"]], template: function FindReplaceComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "input", 2);
        ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_2_listener($event) { return ctx.find = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_2_listener($event) { return ctx.onKeypress($event.key); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "div");
        ɵɵelementStart(4, "input", 3);
        ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_4_listener($event) { return ctx.replace = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_4_listener($event) { return ctx.onKeypress($event.key); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 4);
        ɵɵelementStart(6, "label");
        ɵɵtext(7, " Exact phrase ");
        ɵɵelementStart(8, "input", 5);
        ɵɵlistener("ngModelChange", function FindReplaceComponent_Template_input_ngModelChange_8_listener($event) { return ctx.exactPhrase = $event; })("keypress", function FindReplaceComponent_Template_input_keypress_8_listener($event) { return ctx.onKeypress($event.key); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "i", 6);
        ɵɵlistener("click", function FindReplaceComponent_Template_i_click_9_listener() { return ctx.findAndReplace(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.find);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.replace);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.exactPhrase);
    } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel, CheckboxControlValueAccessor], styles: [".find-replace-container[_ngcontent-%COMP%]{margin:4px 3px 3px 2px}.find-replace-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:13px}.top-container-item[_ngcontent-%COMP%]{margin-bottom:3px}.bottom-container-item[_ngcontent-%COMP%]{margin-top:5px}.bottom-container-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;font-size:20px;padding-right:2px}label[_ngcontent-%COMP%]{color:#7e7e7e;font-size:12px;font-weight:400}.find-replace-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .horizontal-padding[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FindReplaceComponent, [{
        type: Component,
        args: [{
                selector: 'find-replace',
                styleUrls: [
                    './find-replace.component.scss'
                ],
                templateUrl: './find-replace.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: DomSanitizer }, { type: FindReplaceAllService }, { type: JsonStoreService }, { type: ModalService }]; }, { path: [{
            type: Input
        }], schema: [{
            type: Input
        }] }); })();

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
 * This is the base class for fields
 * WARNING:
 *  XFieldComponent which extends this class should have all services in this constructor, in their constructor!
 *  EX: constructor(...public appGlobalService: AppGlobalService, ...) {...}
 *
 * It provides trackByFunction from AbstractTrackerComponent, and handles errors for the component.
 */
class AbstractFieldComponent extends AbstractSubscriberComponent {
    constructor(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService) {
        super();
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.jsonStoreService = jsonStoreService;
        this.pathCache = {};
        this.externalErrors = [];
        // patches grouped by op because they different UI representation
        this.replaceJsonPatches = [];
        this.addJsonPatches = [];
    }
    ngOnInit() {
        this.problemsService.externalCategorizedProblems$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(externalCategorizedProblemMap => {
            this.externalErrors = externalCategorizedProblemMap.errors[this.pathString] || [];
            this.changeDetectorRef.markForCheck();
        });
        this.jsonStoreService.patchesByPath$
            .pipe(map(patchesByPath => patchesByPath[this.pathString]))
            .pipe(map(patches => this.groupJsonPatchesByOp(patches)))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patchesByOp => {
            this.removeJsonPatch = patchesByOp.remove[0];
            this.addJsonPatches = patchesByOp.add;
            this.replaceJsonPatches = patchesByOp.replace;
            this.changeDetectorRef.markForCheck();
        });
    }
    groupJsonPatchesByOp(patches) {
        const group = {
            add: [],
            remove: [],
            replace: []
        };
        if (patches) {
            patches.forEach((patch) => {
                const opPatches = group[patch.op];
                opPatches.push(patch);
            });
        }
        return group;
    }
    ngOnChanges(changes) {
        if (changes['path']) {
            this.pathString = this.pathUtilService.toPathString(this.path);
        }
    }
    /**
     * Gets path for child, returns from `pathCache` if it is a hit
     * in order not to re-render child component due to reference change its path.
     *
     * @param key - index or field name for child
     */
    getPathForChild(key) {
        if (!this.pathCache[key] || this.pathCache[key][this.path.length - 1] !== this.path[this.path.length - 1]) {
            this.pathCache[key] = this.path.concat(key);
        }
        return this.pathCache[key];
    }
    hasErrors() {
        return this.externalErrors.length > 0;
    }
    get disabled() {
        return this.schema.disabled && !this.appGlobalsService.adminMode;
    }
    get redLeftBorderClass() {
        return this.removeJsonPatch ? 'red-left-border' : '';
    }
    trackByElement(index, element) {
        return element;
    }
    trackByIndex(index, element) {
        return index;
    }
}
AbstractFieldComponent.ɵfac = function AbstractFieldComponent_Factory(t) { return new (t || AbstractFieldComponent)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(JsonStoreService)); };
AbstractFieldComponent.ɵcmp = ɵɵdefineComponent({ type: AbstractFieldComponent, selectors: [["ng-component"]], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function AbstractFieldComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AbstractFieldComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: PathUtilService }, { type: ChangeDetectorRef }, { type: JsonStoreService }]; }, null); })();

/**
 * Abstract component to share code of common operations of all array fields
 *
 * Instance properties declared here only to resolve syntax errors.
 * Hence they need to be declared in children extending components (with decarators if necessary)
 */
class AbstractListFieldComponent extends AbstractFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
    }
    /**
     * @param index - Index of the element that is moved
     * @param  direction - Movement direction. -1 for UP, +1 for DOWN
     */
    moveElement(index, direction) {
        this.jsonStoreService.moveIn(this.path, index, direction);
    }
    /**
     * @param index - Index of the element to be deleted
     */
    deleteElement(index) {
        const elementPath = this.path.concat(index);
        this.jsonStoreService.removeIn(elementPath);
        // empty list as notSetValue, because there can be lists rendered on the UI, while they are absent in json (alwaysShow)
        this.values = this.jsonStoreService.getIn(this.path, List());
    }
    getPathStringForChild(index) {
        return `${this.pathString}${this.pathUtilService.separator}${index}`;
    }
    hasPatchOrChildrenHavePatch() {
        return this.jsonStoreService.hasPatchOrChildrenHavePatch(this.pathString);
    }
}

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
const _c0$3 = ["table-item-field", ""];
function TableItemFieldComponent_td_0_add_new_element_button_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "add-new-element-button", 5);
} if (rf & 2) {
    const key_r1 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("path", ctx_r3.getPathForChild(key_r1))("schema", ctx_r3.schema.properties[key_r1]);
} }
function TableItemFieldComponent_td_0_patch_actions_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "patch-actions", 6);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("patch", ctx_r4.removeJsonPatch);
} }
function TableItemFieldComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 1);
    ɵɵelement(1, "any-type-field", 2);
    ɵɵpipe(2, "selfOrEmpty");
    ɵɵtemplate(3, TableItemFieldComponent_td_0_add_new_element_button_3_Template, 1, 2, "add-new-element-button", 3);
    ɵɵtemplate(4, TableItemFieldComponent_td_0_patch_actions_4_Template, 1, 1, "patch-actions", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const isFirst_r2 = ctx.first;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r0.schema.properties[key_r1].columnWidth + "%");
    ɵɵproperty("ngClass", isFirst_r2 ? ctx_r0.redLeftBorderClass : "");
    ɵɵadvance(1);
    ɵɵproperty("value", ɵɵpipeBind2(2, 8, ctx_r0.value.get(key_r1), ctx_r0.schema.properties[key_r1]))("schema", ctx_r0.schema.properties[key_r1])("path", ctx_r0.getPathForChild(key_r1));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.schema.properties[key_r1].type === "array");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.removeJsonPatch && isFirst_r2);
} }
const _c1$1 = ["*"];
class TableItemFieldComponent extends AbstractFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
    }
}
TableItemFieldComponent.ɵfac = function TableItemFieldComponent_Factory(t) { return new (t || TableItemFieldComponent)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(ChangeDetectorRef)); };
TableItemFieldComponent.ɵcmp = ɵɵdefineComponent({ type: TableItemFieldComponent, selectors: [["", "table-item-field", ""]], inputs: { value: "value", schema: "schema", path: "path", keys: "keys" }, features: [ɵɵInheritDefinitionFeature], attrs: _c0$3, ngContentSelectors: _c1$1, decls: 2, vars: 2, consts: [[3, "width", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngClass"], [3, "value", "schema", "path"], [3, "path", "schema", 4, "ngIf"], [3, "patch", 4, "ngIf"], [3, "path", "schema"], [3, "patch"]], template: function TableItemFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, TableItemFieldComponent_td_0_Template, 5, 11, "td", 0);
        ɵɵprojection(1);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.keys)("ngForTrackBy", ctx.trackByElement);
    } }, styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableItemFieldComponent, [{
        type: Component,
        args: [{
                // Defined as attribute selector not to break table > tr > td html structure
                // tslint:disable-next-line
                selector: '[table-item-field]',
                styleUrls: [
                    './table-item-field.component.scss'
                ],
                templateUrl: './table-item-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: ChangeDetectorRef }]; }, { value: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }], keys: [{
            type: Input
        }] }); })();

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
function ListActionGroupComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function ListActionGroupComponent_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.onMove.emit(-1); });
    ɵɵelement(1, "i", 5);
    ɵɵelementEnd();
} }
function ListActionGroupComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function ListActionGroupComponent_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onMove.emit(1); });
    ɵɵelement(1, "i", 7);
    ɵɵelementEnd();
} }
class ListActionGroupComponent {
    constructor() {
        this.onDelete = new EventEmitter();
        this.onMove = new EventEmitter();
    }
}
ListActionGroupComponent.ɵfac = function ListActionGroupComponent_Factory(t) { return new (t || ListActionGroupComponent)(); };
ListActionGroupComponent.ɵcmp = ɵɵdefineComponent({ type: ListActionGroupComponent, selectors: [["list-action-group"]], inputs: { canMove: "canMove", isDisabled: "isDisabled" }, outputs: { onDelete: "onDelete", onMove: "onMove" }, decls: 5, vars: 4, consts: [["type", "button", 1, "editor-btn-delete", 3, "click"], [1, "fa", "fa-times"], ["type", "button", "class", "editor-btn-move-up", 3, "click", 4, "ngIf"], ["type", "button", "class", "editor-btn-move-down", 3, "click", 4, "ngIf"], ["type", "button", 1, "editor-btn-move-up", 3, "click"], [1, "fa", "fa-chevron-up"], ["type", "button", 1, "editor-btn-move-down", 3, "click"], [1, "fa", "fa-chevron-down"]], template: function ListActionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "button", 0);
        ɵɵlistener("click", function ListActionGroupComponent_Template_button_click_1_listener() { return ctx.onDelete.emit(); });
        ɵɵelement(2, "i", 1);
        ɵɵelementEnd();
        ɵɵtemplate(3, ListActionGroupComponent_button_3_Template, 2, 0, "button", 2);
        ɵɵtemplate(4, ListActionGroupComponent_button_4_Template, 2, 0, "button", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("disabled", ctx.isDisabled);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.canMove);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.canMove);
    } }, directives: [NgIf], styles: [""], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListActionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'list-action-group',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    './list-action-group.component.scss'
                ],
                templateUrl: './list-action-group.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { canMove: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], onDelete: [{
            type: Output
        }], onMove: [{
            type: Output
        }] }); })();

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
function PatchActionsComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function PatchActionsComponent_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.onAddNewClick(); });
    ɵɵelement(1, "i", 5);
    ɵɵelementEnd();
} }
class PatchActionsComponent {
    constructor(jsonStoreService) {
        this.jsonStoreService = jsonStoreService;
    }
    onAcceptClick() {
        this.jsonStoreService.applyPatch(this.patch);
    }
    onRejectClick() {
        this.jsonStoreService.rejectPatch(this.patch);
    }
    onAddNewClick() {
        this.patch.op = 'add-as-new';
        this.jsonStoreService.applyPatch(this.patch);
    }
}
PatchActionsComponent.ɵfac = function PatchActionsComponent_Factory(t) { return new (t || PatchActionsComponent)(ɵɵdirectiveInject(JsonStoreService)); };
PatchActionsComponent.ɵcmp = ɵɵdefineComponent({ type: PatchActionsComponent, selectors: [["patch-actions"]], inputs: { patch: "patch", addActionEnabled: "addActionEnabled" }, decls: 6, vars: 2, consts: [["tabindex", "-1", 1, "patch-actions-container", 3, "ngClass"], [3, "click"], [1, "fa", "fa-check-circle"], [1, "fa", "fa-times-circle"], [3, "click", 4, "ngIf"], [1, "fa", "fa-plus-circle"]], template: function PatchActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function PatchActionsComponent_Template_button_click_1_listener() { return ctx.onAcceptClick(); });
        ɵɵelement(2, "i", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 1);
        ɵɵlistener("click", function PatchActionsComponent_Template_button_click_3_listener() { return ctx.onRejectClick(); });
        ɵɵelement(4, "i", 3);
        ɵɵelementEnd();
        ɵɵtemplate(5, PatchActionsComponent_button_5_Template, 2, 0, "button", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.patch.op);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.addActionEnabled);
    } }, directives: [NgClass, NgIf], styles: [".patch-actions-container[_ngcontent-%COMP%]{display:inline-block;padding-left:2px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{background-color:transparent;border:none;padding:1px 3px 1.5px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:18px}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%]{color:#27ae60}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-times-circle[_ngcontent-%COMP%]{color:#e74c3c}.patch-actions-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .fa-plus-circle[_ngcontent-%COMP%]{color:#f1c40f}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PatchActionsComponent, [{
        type: Component,
        args: [{
                selector: 'patch-actions',
                styleUrls: [
                    './patch-actions.component.scss'
                ],
                templateUrl: './patch-actions.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: JsonStoreService }]; }, { patch: [{
            type: Input
        }], addActionEnabled: [{
            type: Input
        }] }); })();

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
class TypeOfPipe {
    /**
     * `typeof` with extra 'array'
     */
    transform(value) {
        if (Array.isArray(value)) {
            return 'array';
        }
        return typeof value;
    }
}
TypeOfPipe.ɵfac = function TypeOfPipe_Factory(t) { return new (t || TypeOfPipe)(); };
TypeOfPipe.ɵpipe = ɵɵdefinePipe({ name: "typeOf", type: TypeOfPipe, pure: false });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TypeOfPipe, [{
        type: Pipe,
        args: [{
                name: 'typeOf',
                pure: false
            }]
    }], null, null); })();

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
class SortKeysBySchemaPipe {
    constructor(compareKeysBySchemaService) {
        this.compareKeysBySchemaService = compareKeysBySchemaService;
    }
    /**
     * WARN: uses Array.sort hence mutates the first param
     *
     * @param keys keys in the object
     * @param schema schema of the parent object
     */
    transform(keys, schema) {
        return keys
            .sort((a, b) => this.compareKeysBySchemaService.compare(a, b, schema));
    }
}
SortKeysBySchemaPipe.ɵfac = function SortKeysBySchemaPipe_Factory(t) { return new (t || SortKeysBySchemaPipe)(ɵɵdirectiveInject(CompareKeysBySchemaService)); };
SortKeysBySchemaPipe.ɵpipe = ɵɵdefinePipe({ name: "sortKeysBySchema", type: SortKeysBySchemaPipe, pure: false });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SortKeysBySchemaPipe, [{
        type: Pipe,
        args: [{
                name: 'sortKeysBySchema',
                pure: false,
            }]
    }], function () { return [{ type: CompareKeysBySchemaService }]; }, null); })();

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
class KeysPipe {
    /**
     * Transforms object to array of its keys (Object.keys replacement for templates)
     */
    transform(object) {
        if (!object) {
            return null;
        }
        return Object.keys(object);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = ɵɵdefinePipe({ name: "keys", type: KeysPipe, pure: false });
/*@__PURE__*/ (function () { ɵsetClassMetadata(KeysPipe, [{
        type: Pipe,
        args: [{
                name: 'keys',
                pure: false
            }]
    }], null, null); })();

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
const _c0$4 = function (a0, a1) { return { object: a0, schema: a1 }; };
function AddOrReplacePatchComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext();
    const value_r9 = ctx_r15.value;
    const schema_r10 = ctx_r15.schema;
    ɵɵnextContext();
    const _r3 = ɵɵreference(7);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c0$4, value_r9, schema_r10));
} }
function AddOrReplacePatchComponent_ng_template_4_ng_container_3_ng_template_1_Template(rf, ctx) { }
const _c1$2 = function (a0, a1) { return { array: a0, schema: a1 }; };
function AddOrReplacePatchComponent_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const value_r9 = ctx_r17.value;
    const schema_r10 = ctx_r17.schema;
    ɵɵnextContext();
    const _r5 = ɵɵreference(9);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1$2, value_r9, schema_r10));
} }
function AddOrReplacePatchComponent_ng_template_4_ng_container_4_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { primitive: a0 }; };
function AddOrReplacePatchComponent_ng_template_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_4_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r9 = ɵɵnextContext().value;
    ɵɵnextContext();
    const _r7 = ɵɵreference(11);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r7)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, value_r9));
} }
function AddOrReplacePatchComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 8);
    ɵɵpipe(1, "typeOf");
    ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 9);
    ɵɵtemplate(3, AddOrReplacePatchComponent_ng_template_4_ng_container_3_Template, 2, 5, "ng-container", 9);
    ɵɵtemplate(4, AddOrReplacePatchComponent_ng_template_4_ng_container_4_Template, 2, 4, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r9 = ctx.value;
    ɵɵproperty("ngSwitch", ɵɵpipeBind1(1, 3, value_r9));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", "object");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "array");
} }
function AddOrReplacePatchComponent_ng_template_6_tr_1_ng_template_5_Template(rf, ctx) { }
const _c3 = function (a0, a1) { return { value: a0, schema: a1 }; };
function AddOrReplacePatchComponent_ng_template_6_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵelementStart(2, "label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "td");
    ɵɵtemplate(5, AddOrReplacePatchComponent_ng_template_6_tr_1_ng_template_5_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r23 = ctx.$implicit;
    const ctx_r25 = ɵɵnextContext();
    const object_r20 = ctx_r25.object;
    const schema_r21 = ctx_r25.schema;
    ɵɵnextContext();
    const _r1 = ɵɵreference(5);
    ɵɵadvance(3);
    ɵɵtextInterpolate(key_r23);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c3, object_r20[key_r23], schema_r21.properties[key_r23]));
} }
function AddOrReplacePatchComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "table");
    ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_6_tr_1_Template, 6, 6, "tr", 11);
    ɵɵpipe(2, "sortKeysBySchema");
    ɵɵpipe(3, "keys");
    ɵɵelementEnd();
} if (rf & 2) {
    const object_r20 = ctx.object;
    const schema_r21 = ctx.schema;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 1, ɵɵpipeBind1(3, 4, object_r20), schema_r21));
} }
function AddOrReplacePatchComponent_ng_template_8_tr_1_ng_template_2_Template(rf, ctx) { }
function AddOrReplacePatchComponent_ng_template_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 13);
    ɵɵelementStart(1, "td");
    ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_8_tr_1_ng_template_2_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const schema_r27 = ɵɵnextContext().schema;
    ɵɵnextContext();
    const _r1 = ɵɵreference(5);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, item_r29, schema_r27.items));
} }
function AddOrReplacePatchComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "table");
    ɵɵtemplate(1, AddOrReplacePatchComponent_ng_template_8_tr_1_Template, 3, 5, "tr", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const array_r26 = ctx.array;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", array_r26);
} }
function AddOrReplacePatchComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const primitive_r32 = ctx.primitive;
    ɵɵadvance(1);
    ɵɵtextInterpolate(primitive_r32);
} }
class AddOrReplacePatchComponent {
    constructor(jsonSchemaService) {
        this.jsonSchemaService = jsonSchemaService;
    }
    ngOnChanges(changes) {
        const patchChanges = changes['patch'];
        if (patchChanges) {
            this.schema = this.jsonSchemaService.forPathString(this.patch.path);
        }
    }
    get leftBorderClass() {
        return this.patch.op === 'add' ? 'green-left-border' : 'orange-left-border';
    }
}
AddOrReplacePatchComponent.ɵfac = function AddOrReplacePatchComponent_Factory(t) { return new (t || AddOrReplacePatchComponent)(ɵɵdirectiveInject(JsonSchemaService)); };
AddOrReplacePatchComponent.ɵcmp = ɵɵdefineComponent({ type: AddOrReplacePatchComponent, selectors: [["add-or-replace-patch"]], inputs: { patch: "patch" }, features: [ɵɵNgOnChangesFeature], decls: 12, vars: 8, consts: [["tabindex", "-1", 1, "patch-container", 3, "ngClass", "id"], [1, "grow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "align-self-end", 3, "patch"], ["anyTypeTemplate", ""], ["objectTemplate", ""], ["arrayTemplate", ""], ["primitiveTemplate", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngFor", "ngForOf"], ["class", "array-item", 4, "ngFor", "ngForOf"], [1, "array-item"]], template: function AddOrReplacePatchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, AddOrReplacePatchComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelement(3, "patch-actions", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, AddOrReplacePatchComponent_ng_template_4_Template, 5, 5, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, AddOrReplacePatchComponent_ng_template_6_Template, 4, 6, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵtemplate(8, AddOrReplacePatchComponent_ng_template_8_Template, 2, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵtemplate(10, AddOrReplacePatchComponent_ng_template_10_Template, 2, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(5);
        ɵɵproperty("ngClass", ctx.leftBorderClass)("id", ctx.patch.path);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c3, ctx.patch.value, ctx.schema));
        ɵɵadvance(1);
        ɵɵproperty("patch", ctx.patch);
    } }, directives: [NgClass, NgTemplateOutlet, PatchActionsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, NgForOf], pipes: [TypeOfPipe, SortKeysBySchemaPipe, KeysPipe], styles: ["td[_ngcontent-%COMP%]{padding-right:10px!important;vertical-align:top}.align-self-end[_ngcontent-%COMP%]{align-self:flex-end}.patch-container[_ngcontent-%COMP%]{display:flex;padding-left:4px}.green-left-border[_ngcontent-%COMP%]{border-left:9px solid #2ecc71}.grow[_ngcontent-%COMP%]{flex-grow:1}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddOrReplacePatchComponent, [{
        type: Component,
        args: [{
                selector: 'add-or-replace-patch',
                styleUrls: [
                    './add-or-replace-patch.component.scss'
                ],
                templateUrl: './add-or-replace-patch.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: JsonSchemaService }]; }, { patch: [{
            type: Input
        }] }); })();

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
class UnderscoreToSpacePipe {
    transform(text) {
        return text.replace(/\_/g, ' ');
    }
}
UnderscoreToSpacePipe.ɵfac = function UnderscoreToSpacePipe_Factory(t) { return new (t || UnderscoreToSpacePipe)(); };
UnderscoreToSpacePipe.ɵpipe = ɵɵdefinePipe({ name: "underscoreToSpace", type: UnderscoreToSpacePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnderscoreToSpacePipe, [{
        type: Pipe,
        args: [{
                name: 'underscoreToSpace',
            }]
    }], null, null); })();

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
function TableListFieldComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtext(1);
    ɵɵpipe(2, "underscoreToSpace");
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r0.schema.items.properties[key_r6].columnWidth + "%");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, key_r6), " ");
} }
function TableListFieldComponent_add_field_dropdown_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "add-field-dropdown", 9);
    ɵɵpipe(1, "async");
    ɵɵelement(2, "i", 10);
    ɵɵelement(3, "i", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("fields", ɵɵpipeBind1(1, 4, ctx_r1.keys$))("pathString", ctx_r1.pathString)("schema", ctx_r1.schema.items)("isDisabled", ctx_r1.disabled);
} }
function TableListFieldComponent_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4);
    ɵɵelementStart(1, "list-action-group", 14);
    ɵɵlistener("onMove", function TableListFieldComponent_tr_8_td_2_Template_list_action_group_onMove_1_listener($event) { ɵɵrestoreView(_r12); const i_r8 = ɵɵnextContext().index; const ctx_r10 = ɵɵnextContext(); return ctx_r10.moveElement(i_r8, $event); })("onDelete", function TableListFieldComponent_tr_8_td_2_Template_list_action_group_onDelete_1_listener() { ɵɵrestoreView(_r12); const i_r8 = ɵɵnextContext().index; const ctx_r13 = ɵɵnextContext(); return ctx_r13.deleteElement(i_r8); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵclassProp("sortable", ctx_r9.schema.sortable);
    ɵɵadvance(1);
    ɵɵproperty("canMove", ctx_r9.schema.sortable)("isDisabled", ctx_r9.disabled);
} }
function TableListFieldComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 12);
    ɵɵpipe(1, "async");
    ɵɵtemplate(2, TableListFieldComponent_tr_8_td_2_Template, 2, 4, "td", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const value_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.getPathStringForChild(i_r8))("value", value_r7)("schema", ctx_r2.schema.items)("path", ctx_r2.getPathForChild(i_r8))("keys", ɵɵpipeBind1(1, 6, ctx_r2.keys$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.values.size > 0);
} }
function TableListFieldComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelement(1, "patch-actions", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r3.removeJsonPatch);
} }
function TableListFieldComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "add-or-replace-patch", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const patch_r15 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("patch", patch_r15);
} }
function TableListFieldComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "add-or-replace-patch", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r5.replaceJsonPatches[0]);
} }
class TableListFieldComponent extends AbstractListFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, keysStoreService, changeDetectorRef) {
        super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.keysStoreService = keysStoreService;
        this.changeDetectorRef = changeDetectorRef;
    }
    get keys$() {
        return this.keysStoreService.forPath(this.pathString);
    }
}
TableListFieldComponent.ɵfac = function TableListFieldComponent_Factory(t) { return new (t || TableListFieldComponent)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(KeysStoreService), ɵɵdirectiveInject(ChangeDetectorRef)); };
TableListFieldComponent.ɵcmp = ɵɵdefineComponent({ type: TableListFieldComponent, selectors: [["table-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [ɵɵInheritDefinitionFeature], decls: 12, vars: 14, consts: [[3, "id", "ngClass"], [1, "table", "editable-inner-table"], [1, "thead-inverse"], [3, "width", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "button-holder"], [3, "fields", "pathString", "schema", "isDisabled", 4, "ngIf"], ["table-item-field", "", 3, "id", "value", "schema", "path", "keys", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "add-patch", 4, "ngFor", "ngForOf"], [3, "fields", "pathString", "schema", "isDisabled"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], ["table-item-field", "", 3, "id", "value", "schema", "path", "keys"], ["class", "button-holder", 3, "sortable", 4, "ngIf"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [3, "patch"], [1, "add-patch"]], template: function TableListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "table", 1);
        ɵɵelementStart(2, "thead", 2);
        ɵɵelementStart(3, "tr");
        ɵɵtemplate(4, TableListFieldComponent_th_4_Template, 3, 5, "th", 3);
        ɵɵpipe(5, "async");
        ɵɵelementStart(6, "th", 4);
        ɵɵtemplate(7, TableListFieldComponent_add_field_dropdown_7_Template, 4, 6, "add-field-dropdown", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(8, TableListFieldComponent_tr_8_Template, 3, 8, "tr", 6);
        ɵɵtemplate(9, TableListFieldComponent_tr_9_Template, 2, 1, "tr", 7);
        ɵɵelementEnd();
        ɵɵtemplate(10, TableListFieldComponent_div_10_Template, 2, 1, "div", 8);
        ɵɵtemplate(11, TableListFieldComponent_div_11_Template, 2, 1, "div", 7);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 12, ctx.keys$))("ngForTrackBy", ctx.trackByElement);
        ɵɵadvance(2);
        ɵɵclassProp("sortable", ctx.schema.sortable);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.values.size > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.values)("ngForTrackBy", ctx.trackByIndex);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.removeJsonPatch);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.addJsonPatches);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, directives: [NgClass, NgForOf, NgIf, AddFieldDropdownComponent, TableItemFieldComponent, ListActionGroupComponent, PatchActionsComponent, AddOrReplacePatchComponent], pipes: [AsyncPipe, UnderscoreToSpacePipe], styles: ["table.editable-inner-table[_ngcontent-%COMP%]{border:none}table.editable-inner-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{border:none;color:#c1c1c1;vertical-align:middle}.add-patch[_ngcontent-%COMP%]{margin:8px 0}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'table-list-field',
                styleUrls: [
                    './table-list-field.component.scss'
                ],
                templateUrl: './table-list-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: KeysStoreService }, { type: ChangeDetectorRef }]; }, { values: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();

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
function ObjectFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "add-nested-field-dropdown", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("pathString", ctx_r0.pathString)("schema", ctx_r0.schema)("isDisabled", ctx_r0.disabled);
} }
function ObjectFieldComponent_tr_3_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵelement(1, "add-new-element-button", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r5 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("path", ctx_r6.getPathForChild(key_r5))("schema", ctx_r6.schema.properties[key_r5]);
} }
function ObjectFieldComponent_tr_3_ng_container_9_li_1_ng_template_1_Template(rf, ctx) { }
function ObjectFieldComponent_tr_3_ng_container_9_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 20);
    ɵɵtemplate(1, ObjectFieldComponent_tr_3_ng_container_9_li_1_ng_template_1_Template, 0, 0, "ng-template", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const templateName_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r9.appGlobalsService.templates[templateName_r10]);
} }
function ObjectFieldComponent_tr_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ObjectFieldComponent_tr_3_ng_container_9_li_1_Template, 2, 1, "li", 19);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r5 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r7.getTitleDropdownItemTemplateNamesForChild(key_r5));
} }
function ObjectFieldComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td", 12);
    ɵɵelementStart(2, "div");
    ɵɵelementStart(3, "title-dropdown", 13);
    ɵɵpipe(4, "underscoreToSpace");
    ɵɵtemplate(5, ObjectFieldComponent_tr_3_li_5_Template, 2, 2, "li", 14);
    ɵɵelementStart(6, "li", 15);
    ɵɵelementStart(7, "button", 16);
    ɵɵlistener("click", function ObjectFieldComponent_tr_3_Template_button_click_7_listener() { ɵɵrestoreView(_r14); const key_r5 = ctx.$implicit; const ctx_r13 = ɵɵnextContext(); return ctx_r13.deleteField(key_r5); });
    ɵɵtext(8, "Delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(9, ObjectFieldComponent_tr_3_ng_container_9_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "td");
    ɵɵelement(11, "any-type-field", 17);
    ɵɵpipe(12, "selfOrEmpty");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("title", ɵɵpipeBind1(4, 7, key_r5))("isDisabled", ctx_r1.isPropertyDisabled(key_r5));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.schema.properties[key_r5].type === "array");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r1.getTitleDropdownItemTemplateNamesForChild(key_r5));
    ɵɵadvance(2);
    ɵɵproperty("value", ɵɵpipeBind2(12, 9, ctx_r1.value.get(key_r5), ctx_r1.schema.properties[key_r5]))("schema", ctx_r1.schema.properties[key_r5])("path", ctx_r1.getPathForChild(key_r5));
} }
function ObjectFieldComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td", 12);
    ɵɵelement(2, "title-dropdown", 13);
    ɵɵpipe(3, "underscoreToSpace");
    ɵɵpipe(4, "lastPathElement");
    ɵɵelementEnd();
    ɵɵelementStart(5, "td");
    ɵɵelement(6, "add-or-replace-patch", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const patch_r15 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("title", ɵɵpipeBind1(3, 3, ɵɵpipeBind1(4, 5, patch_r15.path)))("isDisabled", true);
    ɵɵadvance(4);
    ɵɵproperty("patch", patch_r15);
} }
function ObjectFieldComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelement(1, "patch-actions", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r3.removeJsonPatch);
} }
function ObjectFieldComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "add-or-replace-patch", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r4.replaceJsonPatches[0]);
} }
class ObjectFieldComponent extends AbstractFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef, keysStoreService) {
        super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.keysStoreService = keysStoreService;
        this.isComplexListFieldItem = false;
    }
    get keys$() {
        return this.keysStoreService.forPath(this.pathString);
    }
    deleteField(name) {
        const fieldPath = this.path.concat(name);
        this.jsonStoreService.removeIn(fieldPath);
    }
    isPropertyDisabled(name) {
        return this.schema.properties[name].disabled && !this.appGlobalsService.adminMode;
    }
    getTitleDropdownItemTemplateNamesForChild(key) {
        return this.schema.properties[key].titleDropdownItemTemplateNames;
    }
}
ObjectFieldComponent.ɵfac = function ObjectFieldComponent_Factory(t) { return new (t || ObjectFieldComponent)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(KeysStoreService)); };
ObjectFieldComponent.ɵcmp = ɵɵdefineComponent({ type: ObjectFieldComponent, selectors: [["object-field"]], inputs: { value: "value", schema: "schema", path: "path", isComplexListFieldItem: "isComplexListFieldItem" }, features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 16, consts: [[3, "id"], ["class", "pull-right", 4, "ngIf"], [1, "table", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "button-holder"], [3, "fields", "pathString", "schema", "isDisabled"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], [1, "pull-right"], [3, "pathString", "schema", "isDisabled"], [1, "label-holder"], [3, "title", "isDisabled"], ["class", "title-dropdown-item", 4, "ngIf"], [1, "title-dropdown-item"], ["type", "button", 1, "editor-btn-delete", "editor-btn-delete-text", 3, "click"], [3, "value", "schema", "path"], [3, "path", "schema"], ["class", "title-dropdown-item custom-title-dropdown-item", 4, "ngFor", "ngForOf"], [1, "title-dropdown-item", "custom-title-dropdown-item"], [3, "ngTemplateOutlet"], [3, "patch"]], template: function ObjectFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ObjectFieldComponent_div_1_Template, 2, 3, "div", 1);
        ɵɵelementStart(2, "table", 2);
        ɵɵtemplate(3, ObjectFieldComponent_tr_3_Template, 13, 12, "tr", 3);
        ɵɵpipe(4, "async");
        ɵɵtemplate(5, ObjectFieldComponent_tr_5_Template, 7, 7, "tr", 4);
        ɵɵtemplate(6, ObjectFieldComponent_tr_6_Template, 2, 1, "tr", 5);
        ɵɵelementStart(7, "tr");
        ɵɵelementStart(8, "td", 6);
        ɵɵelementStart(9, "add-field-dropdown", 7);
        ɵɵpipe(10, "async");
        ɵɵelement(11, "i", 8);
        ɵɵelement(12, "i", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(13, ObjectFieldComponent_div_13_Template, 2, 1, "div", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.pathString);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isComplexListFieldItem);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ctx.redLeftBorderClass);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 12, ctx.keys$))("ngForTrackBy", ctx.trackByElement);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.addJsonPatches);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.removeJsonPatch);
        ɵɵadvance(3);
        ɵɵproperty("fields", ɵɵpipeBind1(10, 14, ctx.keys$))("pathString", ctx.pathString)("schema", ctx.schema)("isDisabled", ctx.disabled);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, styles: ["table.table[_ngcontent-%COMP%]{background-color:#f9f9f9}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ObjectFieldComponent, [{
        type: Component,
        args: [{
                selector: 'object-field',
                styleUrls: [
                    './object-field.component.scss'
                ],
                templateUrl: './object-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: ChangeDetectorRef }, { type: KeysStoreService }]; }, { value: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }], isComplexListFieldItem: [{
            type: Input
        }] }); })();

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
function ComplexListFieldComponent_div_1_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 10);
    ɵɵelementStart(1, "button", 16);
    ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_span_6_Template_button_click_1_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(3); return ctx_r12.onFoundNavigate(-1); });
    ɵɵtext(2, "\u276E");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r9.currentFound <= 0);
} }
function ComplexListFieldComponent_div_1_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 10);
    ɵɵelementStart(1, "button", 16);
    ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_span_7_Template_button_click_1_listener() { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(3); return ctx_r14.onFoundNavigate(1); });
    ɵɵtext(2, "\u276F");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r10.currentFound >= ctx_r10.foundIndices.length - 1);
} }
function ComplexListFieldComponent_div_1_div_1_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " Nothing found ");
    ɵɵelementEnd();
} }
function ComplexListFieldComponent_div_1_div_1_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ctx_r17.currentFound + 1, " of ", ctx_r17.foundIndices.length, " ");
} }
function ComplexListFieldComponent_div_1_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_1_span_8_span_1_Template, 2, 0, "span", 18);
    ɵɵtemplate(2, ComplexListFieldComponent_div_1_div_1_span_8_span_2_Template, 2, 2, "span", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵproperty("ngSwitch", ctx_r11.foundIndices.length);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", 0);
} }
function ComplexListFieldComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 9);
    ɵɵelementStart(2, "span", 10);
    ɵɵelementStart(3, "button", 11);
    ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_1_Template_button_click_3_listener() { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(2); return ctx_r18.onFindClick(); });
    ɵɵelement(4, "i", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "input", 13);
    ɵɵlistener("ngModelChange", function ComplexListFieldComponent_div_1_div_1_Template_input_ngModelChange_5_listener($event) { ɵɵrestoreView(_r19); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.findExpression = $event; })("keypress", function ComplexListFieldComponent_div_1_div_1_Template_input_keypress_5_listener($event) { ɵɵrestoreView(_r19); const ctx_r21 = ɵɵnextContext(2); return ctx_r21.onFindInputKeypress($event.key); });
    ɵɵelementEnd();
    ɵɵtemplate(6, ComplexListFieldComponent_div_1_div_1_span_6_Template, 3, 1, "span", 14);
    ɵɵtemplate(7, ComplexListFieldComponent_div_1_div_1_span_7_Template, 3, 1, "span", 14);
    ɵɵtemplate(8, ComplexListFieldComponent_div_1_div_1_span_8_Template, 3, 2, "span", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r5.findExpression);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.shouldDisplayFoundNavigation);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.shouldDisplayFoundNavigation);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.foundIndices);
} }
function ComplexListFieldComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "label", 21);
    ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_2_Template_label_click_1_listener() { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.shouldDisplayOnlyEditFormItems = false; });
    ɵɵtext(2, "All");
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 21);
    ɵɵlistener("click", function ComplexListFieldComponent_div_1_div_2_Template_label_click_3_listener() { ɵɵrestoreView(_r23); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.shouldDisplayOnlyEditFormItems = true; });
    ɵɵtext(4, "To Edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("active", !ctx_r6.shouldDisplayOnlyEditFormItems);
    ɵɵadvance(2);
    ɵɵclassProp("active", ctx_r6.shouldDisplayOnlyEditFormItems);
} }
function ComplexListFieldComponent_div_1_div_3_ng_template_1_Template(rf, ctx) { }
function ComplexListFieldComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_3_ng_template_1_Template, 0, 0, "ng-template", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.headerItemTemplate);
} }
function ComplexListFieldComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "label", 23);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "br");
    ɵɵelementStart(4, "pagination", 24);
    ɵɵlistener("pageChanged", function ComplexListFieldComponent_div_1_div_4_Template_pagination_pageChanged_4_listener($event) { ɵɵrestoreView(_r27); const ctx_r26 = ɵɵnextContext(2); return ctx_r26.onPageChange($event.page); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ctx_r8.paginatableItems.size, " ", ctx_r8.path[ctx_r8.path.length - 1], " ");
    ɵɵadvance(2);
    ɵɵproperty("totalItems", ctx_r8.paginatableItems.size)("ngModel", ctx_r8.currentPage)("maxSize", ctx_r8.navigator.maxVisiblePageCount)("itemsPerPage", ctx_r8.navigator.itemsPerPage)("boundaryLinks", true)("rotate", false)("firstText", "\u276E\u276E")("previousText", "\u276E")("nextText", "\u276F")("lastText", "\u276F\u276F");
} }
function ComplexListFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, ComplexListFieldComponent_div_1_div_1_Template, 9, 4, "div", 6);
    ɵɵtemplate(2, ComplexListFieldComponent_div_1_div_2_Template, 5, 4, "div", 8);
    ɵɵtemplate(3, ComplexListFieldComponent_div_1_div_3_Template, 2, 1, "div", 6);
    ɵɵtemplate(4, ComplexListFieldComponent_div_1_div_4_Template, 5, 12, "div", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.navigator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.shouldDisplayViewTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.headerItemTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.navigator);
} }
function ComplexListFieldComponent_div_3_span_2_ng_template_1_Template(rf, ctx) { }
const _c0$5 = function (a0) { return { item: a0 }; };
function ComplexListFieldComponent_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, ComplexListFieldComponent_div_3_span_2_ng_template_1_Template, 0, 0, "ng-template", 26);
    ɵɵelementStart(2, "a", 27);
    ɵɵlistener("click", function ComplexListFieldComponent_div_3_span_2_Template_a_click_2_listener() { ɵɵrestoreView(_r34); const item_r28 = ɵɵnextContext().$implicit; const ctx_r32 = ɵɵnextContext(); return item_r28.editFormDisplayedByUser = !ctx_r32.shouldDisplayEditableFieldsForItem(item_r28); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = ɵɵnextContext().$implicit;
    const ctx_r29 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r29.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c0$5, ctx_r29.values.get(item_r28.index)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r29.shouldDisplayEditableFieldsForItem(item_r28) ? "Hide Fields" : "Show Fields", " ");
} }
function ComplexListFieldComponent_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "object-field", 28);
    ɵɵelementStart(2, "div", 29);
    ɵɵelementStart(3, "div", 30);
    ɵɵelementStart(4, "list-action-group", 31);
    ɵɵlistener("onMove", function ComplexListFieldComponent_div_3_span_3_Template_list_action_group_onMove_4_listener($event) { ɵɵrestoreView(_r38); const item_r28 = ɵɵnextContext().$implicit; const ctx_r36 = ɵɵnextContext(); return ctx_r36.moveElement(item_r28.index, $event); })("onDelete", function ComplexListFieldComponent_div_3_span_3_Template_list_action_group_onDelete_4_listener() { ɵɵrestoreView(_r38); const item_r28 = ɵɵnextContext().$implicit; const ctx_r39 = ɵɵnextContext(); return ctx_r39.deleteElement(item_r28.index); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = ɵɵnextContext().$implicit;
    const ctx_r30 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r30.values.get(item_r28.index))("schema", ctx_r30.schema.items)("path", ctx_r30.getPathForChild(item_r28.index))("isComplexListFieldItem", true);
    ɵɵadvance(3);
    ɵɵproperty("canMove", ctx_r30.sortable)("isDisabled", ctx_r30.disabled || ctx_r30.hasPatchOrChildrenHavePatch());
} }
function ComplexListFieldComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 25);
    ɵɵtemplate(2, ComplexListFieldComponent_div_3_span_2_Template, 4, 5, "span", 6);
    ɵɵtemplate(3, ComplexListFieldComponent_div_3_span_3_Template, 5, 6, "span", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.shouldDisplayViewTemplate && ctx_r1.values.get(item_r28.index).keySeq().size != 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.shouldDisplayEditableFieldsForItem(item_r28));
} }
function ComplexListFieldComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵelement(1, "patch-actions", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r2.removeJsonPatch);
} }
function ComplexListFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵelement(1, "add-or-replace-patch", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const patch_r42 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("patch", patch_r42);
} }
function ComplexListFieldComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "add-or-replace-patch", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r4.replaceJsonPatches[0]);
} }
class ComplexListFieldComponent extends AbstractListFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, domUtilService, pathUtilService, changeDetectorRef, listPageChangerService) {
        super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.listPageChangerService = listPageChangerService;
        this.currentFound = 0;
        this.currentPage = 1;
        this._shouldDisplayOnlyEditFormItems = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.navigator = this.schema.longListNavigatorConfig;
        this.paginatableItems = this.getPaginatableItems();
        this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
        if (this.navigator) {
            this.listPageChangerService
                .registerPaginatedList(this.pathString, this.navigator.itemsPerPage)
                .pipe(skipWhile(page => page === this.currentPage))
                .pipe(takeUntil(this.isDestroyed))
                .subscribe(page => this.onPageChange(page));
        }
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        const valuesChange = changes['values'];
        if (valuesChange && !valuesChange.isFirstChange()) {
            const preSize = valuesChange.previousValue.size;
            const curSize = valuesChange.currentValue.size;
            if (curSize !== preSize) {
                if (this.navigator) {
                    // check if element added in the end by comparing the last elements
                    const elementAddedToEnd = valuesChange.previousValue.equals(valuesChange.currentValue.pop());
                    const lastPage = this.getPageForIndex(curSize - 1);
                    // change the page if a new element is added in the end and it's not on the last page
                    if (curSize > preSize && this.currentPage !== lastPage && elementAddedToEnd) {
                        this.currentPage = lastPage;
                    }
                }
            }
            this.paginatableItems = this.getPaginatableItems();
            this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
        }
    }
    hasProblemOrPatch(index) {
        const itemPath = this.getPathStringForChild(index);
        return this.problemsService.hasProblem(itemPath) || this.jsonStoreService.hasPatchOrChildrenHavePatch(itemPath);
    }
    get headerItemTemplate() {
        return this.appGlobalsService.templates[this.navigator.headerItemTemplateName];
    }
    onFindClick() {
        // clear for new search
        this.foundIndices = [];
        this.currentFound = 0;
        // search to look for the first match
        if (this.navigator.findSingle) {
            const foundIndex = this.values
                .findIndex(value => this.navigator.findSingle(value, this.findExpression));
            if (foundIndex > -1) {
                this.foundIndices.push(foundIndex);
            }
        }
        // search to look for all matches
        if (this.foundIndices.length === 0 && this.navigator.findMultiple) {
            this.values
                .forEach((value, index) => {
                if (this.navigator.findMultiple(value, this.findExpression)) {
                    this.foundIndices.push(index);
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
    }
    onFindInputKeypress(key) {
        if (key === 'Enter') {
            this.onFindClick();
        }
    }
    onFoundNavigate(direction) {
        // No bound checks, since the buttons are disabled in these cases.
        this.currentFound += direction;
        this.navigateToItem(this.foundIndices[this.currentFound]);
    }
    navigateToItem(index) {
        const item = this.paginatableItems.get(index);
        if (!item.editFormDisplayedByUser) {
            item.editFormDisplayedByUser = true;
            this.changeDetectorRef.markForCheck();
        }
        const itemPath = this.path.concat(index);
        const itemId = this.pathUtilService.toPathString(itemPath);
        setTimeout(() => this.domUtilService.focusAndSelectFirstEditableChildById(itemId));
    }
    onPageChange(page) {
        this.currentPage = page;
        this.paginatedItems = this.getPaginatableItemsForPage(page);
    }
    getPaginatableItemsForPage(page) {
        if (this.navigator) {
            const begin = (page - 1) * this.navigator.itemsPerPage;
            const end = (page * this.navigator.itemsPerPage);
            return this.paginatableItems.slice(begin, end);
        }
        else {
            return this.paginatableItems;
        }
    }
    getPaginatableItems() {
        const { viewTemplateConfig } = this.schema;
        return this.values
            .map((value, index) => {
            const paginatableItem = this.paginatableItems ? this.paginatableItems.get(index) : null;
            const isNewItem = paginatableItem == null;
            const editFormDisplayedByUser = isNewItem ? null : paginatableItem.editFormDisplayedByUser;
            const shouldDisplayEditForm = viewTemplateConfig ? viewTemplateConfig.showEditForm(value) : true;
            return { index, shouldDisplayEditForm, editFormDisplayedByUser };
        }).filter(item => {
            if (this.shouldDisplayOnlyEditFormItems) {
                return item.shouldDisplayEditForm;
            }
            else {
                return true;
            }
        });
    }
    getPageForIndex(index) {
        return Math.floor((index / this.navigator.itemsPerPage) + 1);
    }
    get customTemplate() {
        return this.appGlobalsService.templates[this.schema.viewTemplateConfig.itemTemplateName];
    }
    get shouldDisplayViewTemplate() {
        return this.schema.viewTemplateConfig !== undefined;
    }
    get sortable() {
        return this.schema.sortable && !this.shouldDisplayOnlyEditFormItems;
    }
    shouldDisplayEditableFieldsForItem(item) {
        // override default display state that is based on viewTemplateConfig.showEditForm(item) with user action
        const shouldDisplayEditForm = item.editFormDisplayedByUser != null ? item.editFormDisplayedByUser : item.shouldDisplayEditForm;
        return shouldDisplayEditForm || this.hasProblemOrPatch(item.index);
    }
    set shouldDisplayOnlyEditFormItems(value) {
        this.currentPage = 1;
        this._shouldDisplayOnlyEditFormItems = value;
        this.paginatableItems = this.getPaginatableItems();
        this.paginatedItems = this.getPaginatableItemsForPage(this.currentPage);
    }
    get shouldDisplayOnlyEditFormItems() {
        return this._shouldDisplayOnlyEditFormItems;
    }
}
ComplexListFieldComponent.ɵfac = function ComplexListFieldComponent_Factory(t) { return new (t || ComplexListFieldComponent)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ListPageChangerService)); };
ComplexListFieldComponent.ɵcmp = ɵɵdefineComponent({ type: ComplexListFieldComponent, selectors: [["complex-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 7, vars: 8, consts: [[3, "id"], ["class", "top-bar-container", 4, "ngIf"], [3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-right", 4, "ngIf"], ["class", "complex-list-field-wrapper", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "top-bar-container"], ["class", "btn-group", 4, "ngIf"], [1, "input-group", "input-group-sm"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", "find-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "search", "placeholder", "Find", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["class", "input-group-btn", 4, "ngIf"], ["class", "input-group-addon transparent borderless", 3, "ngSwitch", 4, "ngIf"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "input-group-addon", "transparent", "borderless", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn-group"], [1, "btn", "btn-switch", 3, "click"], [3, "ngTemplateOutlet"], [1, "item-count-label"], [1, "pagination-sm", "pagination-top", 3, "totalItems", "ngModel", "maxSize", "itemsPerPage", "boundaryLinks", "rotate", "firstText", "previousText", "nextText", "lastText", "pageChanged"], [1, "complex-list-field-wrapper"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["href", "javascript:void(0)", 3, "click"], [3, "value", "schema", "path", "isComplexListFieldItem"], [1, "row", "element-button-container"], [1, "col-md-12", "text-right"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [1, "text-right"], [3, "patch"]], template: function ComplexListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ComplexListFieldComponent_div_1_Template, 5, 4, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, ComplexListFieldComponent_div_3_Template, 4, 2, "div", 3);
        ɵɵtemplate(4, ComplexListFieldComponent_div_4_Template, 2, 1, "div", 4);
        ɵɵelementEnd();
        ɵɵtemplate(5, ComplexListFieldComponent_div_5_Template, 2, 1, "div", 5);
        ɵɵtemplate(6, ComplexListFieldComponent_div_6_Template, 2, 1, "div", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.pathString);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.navigator || ctx.shouldDisplayViewTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ctx.redLeftBorderClass);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.paginatedItems)("ngForTrackBy", ctx.trackByElement);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.removeJsonPatch);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.addJsonPatches);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, directives: [NgIf, NgClass, NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, PaginationComponent, ObjectFieldComponent, ListActionGroupComponent, PatchActionsComponent, AddOrReplacePatchComponent], styles: [".complex-list-field-wrapper[_ngcontent-%COMP%]{box-shadow:0 0 3px 1px rgba(0,0,0,.25);margin:10px 15px 15px 10px;padding:5px}.top-bar-container[_ngcontent-%COMP%]{align-items:center;background-color:#fff;box-shadow:inset 0 .5px 0 0 #fff,0 1px 2px 0 #b3b3b3;display:flex;justify-content:space-between;padding:0 15px;position:-webkit-sticky;position:sticky;top:46px;width:100%;z-index:1}.item-count-label[_ngcontent-%COMP%]{position:relative;top:-19px}.transparent[_ngcontent-%COMP%]{background:transparent}.borderless[_ngcontent-%COMP%]{border:none}.find-button[_ngcontent-%COMP%]{color:#2f4f4f}.find-button[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%]{opacity:.83}.element-button-container[_ngcontent-%COMP%]{padding-top:8px}.element-button-container[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%]{padding:0}label.btn[_ngcontent-%COMP%]{color:#fff!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComplexListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'complex-list-field',
                styleUrls: [
                    './complex-list-field.component.scss'
                ],
                templateUrl: './complex-list-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: DomUtilService }, { type: PathUtilService }, { type: ChangeDetectorRef }, { type: ListPageChangerService }]; }, { values: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();

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
function PrimitiveListFieldComponent_tr_3_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 8);
    ɵɵelementStart(1, "list-action-group", 9);
    ɵɵlistener("onMove", function PrimitiveListFieldComponent_tr_3_td_3_Template_list_action_group_onMove_1_listener($event) { ɵɵrestoreView(_r9); const i_r5 = ɵɵnextContext().index; const ctx_r7 = ɵɵnextContext(); return ctx_r7.moveElement(i_r5, $event); })("onDelete", function PrimitiveListFieldComponent_tr_3_td_3_Template_list_action_group_onDelete_1_listener() { ɵɵrestoreView(_r9); const i_r5 = ɵɵnextContext().index; const ctx_r10 = ɵɵnextContext(); return ctx_r10.deleteElement(i_r5); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵclassProp("sortable", ctx_r6.schema.sortable);
    ɵɵadvance(1);
    ɵɵproperty("canMove", ctx_r6.schema.sortable)("isDisabled", ctx_r6.disabled);
} }
function PrimitiveListFieldComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵelement(2, "any-type-field", 6);
    ɵɵelementEnd();
    ɵɵtemplate(3, PrimitiveListFieldComponent_tr_3_td_3_Template, 2, 4, "td", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("value", value_r4)("schema", ctx_r0.schema.items)("path", ctx_r0.getPathForChild(i_r5));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.values.size > 0);
} }
function PrimitiveListFieldComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelement(1, "patch-actions", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r1.removeJsonPatch);
} }
function PrimitiveListFieldComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelement(1, "add-or-replace-patch", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const patch_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("patch", patch_r12);
} }
function PrimitiveListFieldComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelement(1, "add-or-replace-patch", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r3.replaceJsonPatches[0]);
} }
class PrimitiveListFieldComponent extends AbstractListFieldComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef) {
        super(appGlobalsService, problemsService, jsonStoreService, pathUtilService, changeDetectorRef);
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.pathUtilService = pathUtilService;
        this.changeDetectorRef = changeDetectorRef;
    }
}
PrimitiveListFieldComponent.ɵfac = function PrimitiveListFieldComponent_Factory(t) { return new (t || PrimitiveListFieldComponent)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(ChangeDetectorRef)); };
PrimitiveListFieldComponent.ɵcmp = ɵɵdefineComponent({ type: PrimitiveListFieldComponent, selectors: [["primitive-list-field"]], inputs: { values: "values", schema: "schema", path: "path" }, features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 10, consts: [[3, "id", "ngClass"], [1, "wide"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "value", "schema", "path"], ["class", "button-holder", 3, "sortable", 4, "ngIf"], [1, "button-holder"], [3, "canMove", "isDisabled", "onMove", "onDelete"], [3, "patch"]], template: function PrimitiveListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "table", 2);
        ɵɵtemplate(3, PrimitiveListFieldComponent_tr_3_Template, 4, 4, "tr", 3);
        ɵɵpipe(4, "selfOrEmpty");
        ɵɵtemplate(5, PrimitiveListFieldComponent_tr_5_Template, 2, 1, "tr", 4);
        ɵɵelementEnd();
        ɵɵelementStart(6, "table", 2);
        ɵɵtemplate(7, PrimitiveListFieldComponent_tr_7_Template, 2, 1, "tr", 5);
        ɵɵtemplate(8, PrimitiveListFieldComponent_tr_8_Template, 2, 1, "tr", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ɵɵpipeBind2(4, 7, ctx.values, ctx.schema))("ngForTrackBy", ctx.trackByIndex);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.removeJsonPatch);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.addJsonPatches);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.replaceJsonPatches && ctx.replaceJsonPatches[0]);
    } }, styles: ["td[_ngcontent-%COMP%]{padding:0!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PrimitiveListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'primitive-list-field',
                styleUrls: [
                    './primitive-list-field.component.scss'
                ],
                templateUrl: './primitive-list-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: PathUtilService }, { type: ChangeDetectorRef }]; }, { values: [{
            type: Input
        }], schema: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();

class ContentModelDirective {
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
ContentModelDirective.ɵfac = function ContentModelDirective_Factory(t) { return new (t || ContentModelDirective)(ɵɵdirectiveInject(ElementRef)); };
ContentModelDirective.ɵdir = ɵɵdefineDirective({ type: ContentModelDirective, selectors: [["", "contentModel", ""]], hostBindings: function ContentModelDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("blur", function ContentModelDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keypress", function ContentModelDirective_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); });
    } }, inputs: { contentModel: "contentModel" }, outputs: { contentModelChange: "contentModelChange" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ContentModelDirective, [{
        type: Directive,
        args: [{
                selector: '[contentModel]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { contentModel: [{
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
const _c0$6 = ["latexPreview"];
class StringInputComponent {
    constructor(domUtilService, katexService) {
        this.domUtilService = domUtilService;
        this.katexService = katexService;
        this.blur = new EventEmitter();
        this.onKeypress = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const valueChange = changes['value'];
        if (valueChange) {
            this.contentModel = this.value;
            if (this.latexPreviewEnabled && !valueChange.firstChange) {
                this.renderLatex();
            }
        }
    }
    ngOnInit() {
        if (this.shouldShowLatexPreview) {
            this.latexPreviewShown = true;
        }
    }
    ngAfterViewInit() {
        // render latex preview on init, if it's enabled and value is not empty
        if (this.shouldShowLatexPreview) {
            this.renderLatex();
        }
    }
    onBlur() {
        if (this.shouldShowLatexPreview) {
            this.latexPreviewShown = true;
            this.value = this.contentModel;
        }
        this.blur.emit();
    }
    renderLatex() {
        this.katexService.renderMathInText(this.value, this.latexPreviewEl.nativeElement);
    }
    hideLatexPreview(contentEditableEl) {
        this.latexPreviewShown = false;
        setTimeout(() => contentEditableEl.focus());
    }
    contentModelChange(value) {
        this.contentModel = value;
        this.valueChange.emit(value);
    }
    get shouldShowLatexPreview() {
        return this.latexPreviewEnabled && Boolean(this.value);
    }
}
StringInputComponent.ɵfac = function StringInputComponent_Factory(t) { return new (t || StringInputComponent)(ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(KatexService)); };
StringInputComponent.ɵcmp = ɵɵdefineComponent({ type: StringInputComponent, selectors: [["string-input"]], viewQuery: function StringInputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$6, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.latexPreviewEl = _t.first);
    } }, inputs: { value: "value", disabled: "disabled", pathString: "pathString", placeholder: "placeholder", tabIndex: "tabIndex", latexPreviewEnabled: "latexPreviewEnabled" }, outputs: { blur: "blur", onKeypress: "onKeypress", valueChange: "valueChange" }, features: [ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[3, "tabindex", "contentModel", "contentModelChange", "blur", "keypress"], ["contentEditable", ""], [3, "click", "blur"], ["latexPreview", ""]], template: function StringInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "span", 0, 1);
        ɵɵlistener("contentModelChange", function StringInputComponent_Template_span_contentModelChange_0_listener($event) { return ctx.contentModelChange($event); })("blur", function StringInputComponent_Template_span_blur_0_listener() { return ctx.onBlur(); })("keypress", function StringInputComponent_Template_span_keypress_0_listener($event) { return ctx.onKeypress.emit($event); });
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵlistener("click", function StringInputComponent_Template_div_click_2_listener() { ɵɵrestoreView(_r2); const _r0 = ɵɵreference(1); return ctx.hideLatexPreview(_r0); })("blur", function StringInputComponent_Template_div_blur_2_listener() { ɵɵrestoreView(_r2); const _r0 = ɵɵreference(1); return ctx.hideLatexPreview(_r0); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("hidden", ctx.latexPreviewShown);
        ɵɵproperty("tabindex", ctx.tabIndex)("contentModel", ctx.contentModel);
        ɵɵattribute("contenteditable", !ctx.disabled)("data-path", ctx.pathString)("placeholder", ctx.placeholder || "\u2063\u2063");
        ɵɵadvance(2);
        ɵɵclassProp("hidden", !ctx.latexPreviewEnabled || !ctx.latexPreviewShown);
    } }, directives: [ContentModelDirective], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StringInputComponent, [{
        type: Component,
        args: [{
                selector: 'string-input',
                styleUrls: [
                    './string-input.component.scss'
                ],
                templateUrl: './string-input.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DomUtilService }, { type: KatexService }]; }, { latexPreviewEl: [{
            type: ViewChild,
            args: ['latexPreview']
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], pathString: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], latexPreviewEnabled: [{
            type: Input
        }], blur: [{
            type: Output
        }], onKeypress: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();

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
const _c0$7 = ["filterInput"];
const _c1$3 = ["dropdown"];
function SearchableDropdownComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 7, 8);
    ɵɵlistener("ngModelChange", function SearchableDropdownComponent_input_3_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.expression = $event; })("keyup.enter", function SearchableDropdownComponent_input_3_Template_input_keyup_enter_0_listener() { ɵɵrestoreView(_r7); const ctx_r8 = ɵɵnextContext(); return ctx_r8.onEnterKeyUp(); })("blur", function SearchableDropdownComponent_input_3_Template_input_blur_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r9 = ɵɵnextContext(); return ctx_r9.onInputBlur($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("placeholder", ctx_r1.placeholder)("ngModel", ctx_r1.expression);
    ɵɵattribute("data-path", ctx_r1.pathString);
} }
function SearchableDropdownComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 11);
    ɵɵelementStart(1, "a", 12);
    ɵɵlistener("click", function SearchableDropdownComponent_ul_5_li_1_Template_a_click_1_listener() { ɵɵrestoreView(_r13); const displayValue_r11 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(2); return ctx_r12.onItemClick(displayValue_r11); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const displayValue_r11 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(displayValue_r11);
} }
function SearchableDropdownComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 9);
    ɵɵtemplate(1, SearchableDropdownComponent_ul_5_li_1_Template, 3, 1, "li", 10);
    ɵɵpipe(2, "filterByExpression");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 1, ctx_r2.displayValues, ctx_r2.expression));
} }
function SearchableDropdownComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13);
    ɵɵlistener("focus", function SearchableDropdownComponent_ng_template_6_Template_span_focus_0_listener() { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(); return ctx_r14.showDropdown(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r4.tabIndex);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.biDisplayValueMap.getValue(ctx_r4.value));
} }
class SearchableDropdownComponent {
    constructor() {
        this.onSelect = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['value']) {
            this.placeholder = this.value || this.placeholder || '';
        }
        if (changes['displayValueMap'] || changes['items']) {
            this.displayValueMap = this.displayValueMap || Object.create(null);
            this.biDisplayValueMap = new BiDirectionalMap(this.displayValueMap);
            // set original value as display value for not configured items.
            this.items
                .filter(item => !this.displayValueMap[item])
                .forEach(item => {
                this.biDisplayValueMap.set(item, item);
            });
            this.displayValues = Array.from(this.biDisplayValueMap.values());
        }
    }
    onItemClick(displayValue) {
        const originalValue = this.biDisplayValueMap.getKey(displayValue);
        this.onSelect.emit(originalValue);
        // only necessary to force closing when selected is item equals to value
        // in which case dropdown doesn't close automatically for some reason
        this.dropdown.hide();
    }
    onEnterKeyUp() {
        if (this.shortcutMap && this.shortcutMap[this.expression]) {
            this.onItemClick(this.shortcutMap[this.expression]);
        }
        this.dropdown.hide();
    }
    showDropdown() {
        this.dropdown.show();
        this.expression = '';
        setTimeout(() => {
            this.filterInputElRef.nativeElement.focus();
        });
    }
    onInputBlur(event) {
        // this avoids closing dropdown when an item is selected
        // so that onItemClick() can be executed properly before closing.
        const relatedTarget = event.relatedTarget;
        if (!relatedTarget || relatedTarget.className !== 'dropdown-item') {
            this.dropdown.hide();
        }
        this.onBlur.emit();
    }
}
SearchableDropdownComponent.ɵfac = function SearchableDropdownComponent_Factory(t) { return new (t || SearchableDropdownComponent)(); };
SearchableDropdownComponent.ɵcmp = ɵɵdefineComponent({ type: SearchableDropdownComponent, selectors: [["searchable-dropdown"]], viewQuery: function SearchableDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$7, true);
        ɵɵviewQuery(_c1$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterInputElRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
    } }, inputs: { items: "items", shortcutMap: "shortcutMap", displayValueMap: "displayValueMap", value: "value", pathString: "pathString", tabIndex: "tabIndex", placeholder: "placeholder" }, outputs: { onSelect: "onSelect", onBlur: "onBlur" }, features: [ɵɵNgOnChangesFeature], decls: 8, vars: 2, consts: [["dropdown", "", "keyboardNav", "true", 1, "btn-group"], ["dropdown", "bs-dropdown"], [1, "toggle-container"], ["class", "value", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf", "ngIfElse"], [1, "fa", "fa-caret-down", 3, "click"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["valueDisplayTemplate", ""], [1, "value", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter", "blur"], ["filterInput", ""], ["role", "menu", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "value", 3, "tabindex", "focus"]], template: function SearchableDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, SearchableDropdownComponent_input_3_Template, 2, 3, "input", 3);
        ɵɵelementStart(4, "i", 4);
        ɵɵlistener("click", function SearchableDropdownComponent_Template_i_click_4_listener() { return ctx.showDropdown(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(5, SearchableDropdownComponent_ul_5_Template, 3, 4, "ul", 5);
        ɵɵelementEnd();
        ɵɵtemplate(6, SearchableDropdownComponent_ng_template_6_Template, 2, 2, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        const _r3 = ɵɵreference(7);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", _r0.isOpen)("ngIfElse", _r3);
    } }, directives: [BsDropdownDirective, NgIf, BsDropdownMenuDirective, DefaultValueAccessor, NgControlStatus, NgModel, NgForOf], pipes: [FilterByExpressionPipe], styles: ["div.btn-group[_ngcontent-%COMP%]{width:100%}.dropdown-menu[_ngcontent-%COMP%]{left:0!important}.toggle-container[_ngcontent-%COMP%]{display:inline-flex;width:100%}.toggle-container[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{flex-grow:1}.dropdown-toggle[_ngcontent-%COMP%]{box-shadow:none!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SearchableDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'searchable-dropdown',
                styleUrls: [
                    './searchable-dropdown.component.scss'
                ],
                templateUrl: './searchable-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { items: [{
            type: Input
        }], shortcutMap: [{
            type: Input
        }], displayValueMap: [{
            type: Input
        }], value: [{
            type: Input
        }], pathString: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], onSelect: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], filterInputElRef: [{
            type: ViewChild,
            args: ['filterInput']
        }], dropdown: [{
            type: ViewChild,
            args: ['dropdown']
        }] }); })();

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
const _c0$8 = function (a0, a1, a2, a3) { return { item: a0, index: a1, match: a2, query: a3 }; };
function AutocompleteInputComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("mousedown", function AutocompleteInputComponent_ng_template_0_Template_div_mousedown_0_listener() { ɵɵrestoreView(_r7); const match_r4 = ctx.match; const ctx_r6 = ɵɵnextContext(); return ctx_r6.onMatchWrapperMouseDown(match_r4); });
    ɵɵtemplate(1, AutocompleteInputComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const match_r4 = ctx.match;
    const ctx_r1 = ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.customItemTemplate || _r2)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c0$8, match_r4.item, ctx_r1.i, match_r4, ctx_r1.query));
} }
function AutocompleteInputComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const match_r8 = ctx.match;
    ɵɵtextInterpolate1(" ", match_r8.value, "\n");
} }
class AutocompleteInputComponent {
    constructor(remoteAutocompletionService, appGlobalsService) {
        this.remoteAutocompletionService = remoteAutocompletionService;
        this.appGlobalsService = appGlobalsService;
        this.onValueChange = new EventEmitter();
        this.onCompletionSelect = new EventEmitter();
        this.onKeypress = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngOnInit() {
        if (this.autocompletionConfig.url) {
            // remote
            this.typeaheadOptionField = this.getDotSeparatedOptionField() || 'text';
            this.dataSource = Observable.create((observer) => {
                if (this.value && this.value.length > 0) {
                    observer.next(this.value);
                }
            }).mergeMap((token) => this.remoteAutocompletionService.getAutocompletionResults(this.autocompletionConfig, token));
        }
        else {
            // local
            this.typeaheadOptionField = this.getDotSeparatedOptionField() || '';
            this.dataSource = this.autocompletionConfig.source;
        }
    }
    get customItemTemplate() {
        return this.appGlobalsService.templates[this.autocompletionConfig.itemTemplateName];
    }
    getDotSeparatedOptionField() {
        const { optionField } = this.autocompletionConfig;
        return optionField && optionField.replace(AutocompleteInputComponent.slashesRegExp, '.');
    }
    onModelChange(value) {
        this.value = value;
        this.onValueChange.emit(value);
    }
    onMatchSelect(match) {
        this.onCompletionSelect.emit(match.item);
    }
    onMatchWrapperMouseDown(match) {
        this.onModelChange(match.value);
        this.onMatchSelect(match);
    }
}
AutocompleteInputComponent.slashesRegExp = new RegExp('/', 'g');
AutocompleteInputComponent.ɵfac = function AutocompleteInputComponent_Factory(t) { return new (t || AutocompleteInputComponent)(ɵɵdirectiveInject(RemoteAutocompletionService), ɵɵdirectiveInject(AppGlobalsService)); };
AutocompleteInputComponent.ɵcmp = ɵɵdefineComponent({ type: AutocompleteInputComponent, selectors: [["autocomplete-input"]], inputs: { autocompletionConfig: "autocompletionConfig", value: "value", pathString: "pathString", tabIndex: "tabIndex", placeholder: "placeholder" }, outputs: { onValueChange: "onValueChange", onCompletionSelect: "onCompletionSelect", onKeypress: "onKeypress", onBlur: "onBlur" }, decls: 6, vars: 9, consts: [["matchWrapper", ""], ["defaultItemTemplate", ""], [1, "autocomplete-container"], [3, "ngModel", "typeahead", "typeaheadOptionsLimit", "typeaheadOptionField", "typeaheadItemTemplate", "typeaheadWaitMs", "tabindex", "placeholder", "ngModelChange", "keypress", "blur", "typeaheadOnSelect"], [2, "width", "100%", "height", "100%", "padding", "3px 20px", 3, "mousedown"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function AutocompleteInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AutocompleteInputComponent_ng_template_0_Template, 2, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, AutocompleteInputComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementStart(4, "div", 2);
        ɵɵelementStart(5, "input", 3);
        ɵɵlistener("ngModelChange", function AutocompleteInputComponent_Template_input_ngModelChange_5_listener($event) { return ctx.onModelChange($event); })("keypress", function AutocompleteInputComponent_Template_input_keypress_5_listener($event) { return ctx.onKeypress.emit($event); })("blur", function AutocompleteInputComponent_Template_input_blur_5_listener() { return ctx.onBlur.emit(); })("typeaheadOnSelect", function AutocompleteInputComponent_Template_input_typeaheadOnSelect_5_listener($event) { return ctx.onMatchSelect($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(5);
        ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
        ɵɵproperty("ngModel", ctx.value)("typeahead", ctx.dataSource)("typeaheadOptionsLimit", ctx.autocompletionConfig.size)("typeaheadOptionField", ctx.typeaheadOptionField)("typeaheadItemTemplate", _r0)("typeaheadWaitMs", 200)("tabindex", ctx.tabIndex);
        ɵɵattribute("data-path", ctx.pathString);
    } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel, TypeaheadDirective, NgTemplateOutlet], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutocompleteInputComponent, [{
        type: Component,
        args: [{
                selector: 'autocomplete-input',
                styleUrls: [
                    './autocomplete-input.component.scss'
                ],
                templateUrl: './autocomplete-input.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: RemoteAutocompletionService }, { type: AppGlobalsService }]; }, { autocompletionConfig: [{
            type: Input
        }], value: [{
            type: Input
        }], pathString: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], onValueChange: [{
            type: Output
        }], onCompletionSelect: [{
            type: Output
        }], onKeypress: [{
            type: Output
        }], onBlur: [{
            type: Output
        }] }); })();

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
const _c0$9 = function (a0, a1) { return { added: a0, removed: a1 }; };
function TextDiffComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const diff_r1 = ctx.$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c0$9, diff_r1.added, diff_r1.removed));
    ɵɵadvance(1);
    ɵɵtextInterpolate(diff_r1.value);
} }
class TextDiffComponent {
    constructor(textDiffService) {
        this.textDiffService = textDiffService;
    }
    get diffs() {
        return this.textDiffService
            .diffByWord(this.currentText, this.newText);
    }
}
TextDiffComponent.ɵfac = function TextDiffComponent_Factory(t) { return new (t || TextDiffComponent)(ɵɵdirectiveInject(TextDiffService)); };
TextDiffComponent.ɵcmp = ɵɵdefineComponent({ type: TextDiffComponent, selectors: [["text-diff"]], inputs: { newText: "newText", currentText: "currentText" }, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function TextDiffComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TextDiffComponent_span_0_Template, 2, 5, "span", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.diffs);
    } }, directives: [NgForOf, NgClass], styles: [".added[_ngcontent-%COMP%]{color:green;font-weight:700}.removed[_ngcontent-%COMP%]{color:red;text-decoration:line-through}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextDiffComponent, [{
        type: Component,
        args: [{
                selector: 'text-diff',
                templateUrl: './text-diff.component.html',
                styleUrls: [
                    './text-diff.component.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TextDiffService }]; }, { newText: [{
            type: Input
        }], currentText: [{
            type: Input
        }] }); })();

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
function PrimitiveFieldComponent_ng_template_3_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const error_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", error_r12.message, " ");
} }
function PrimitiveFieldComponent_ng_template_3_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const error_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", error_r13.message, " ");
} }
function PrimitiveFieldComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 10);
    ɵɵtemplate(1, PrimitiveFieldComponent_ng_template_3_li_1_Template, 2, 1, "li", 11);
    ɵɵtemplate(2, PrimitiveFieldComponent_ng_template_3_li_2_Template, 2, 1, "li", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.internalErrors);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.externalErrors);
} }
function PrimitiveFieldComponent_td_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "string-input", 15);
    ɵɵlistener("valueChange", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_valueChange_1_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.onValueChange($event); })("blur", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_blur_1_listener() { ɵɵrestoreView(_r21); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.onBlur(); })("onKeypress", function PrimitiveFieldComponent_td_5_div_1_Template_string_input_onKeypress_1_listener($event) { ɵɵrestoreView(_r21); const ctx_r23 = ɵɵnextContext(2); return ctx_r23.onKeypress($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("pathString", ctx_r14.pathString)("value", ctx_r14.value)("disabled", ctx_r14.disabled)("tabIndex", ctx_r14.tabIndex)("latexPreviewEnabled", ctx_r14.schema.latexPreviewEnabled)("placeholder", ctx_r14.schema.title);
} }
function PrimitiveFieldComponent_td_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "searchable-dropdown", 16);
    ɵɵlistener("onSelect", function PrimitiveFieldComponent_td_5_div_2_Template_searchable_dropdown_onSelect_1_listener($event) { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.onSearchableDropdownSelect($event); })("onBlur", function PrimitiveFieldComponent_td_5_div_2_Template_searchable_dropdown_onBlur_1_listener() { ɵɵrestoreView(_r25); const ctx_r26 = ɵɵnextContext(2); return ctx_r26.onBlur(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("pathString", ctx_r15.pathString)("value", ctx_r15.value)("placeholder", ctx_r15.schema.title)("items", ctx_r15.schema.enum)("shortcutMap", ctx_r15.schema.enumShorcutMap)("displayValueMap", ctx_r15.schema.enumDisplayValueMap)("tabIndex", ctx_r15.tabIndex);
} }
function PrimitiveFieldComponent_td_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "autocomplete-input", 17);
    ɵɵlistener("onBlur", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onBlur_1_listener() { ɵɵrestoreView(_r28); const ctx_r27 = ɵɵnextContext(2); return ctx_r27.onBlur(); })("onKeypress", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onKeypress_1_listener($event) { ɵɵrestoreView(_r28); const ctx_r29 = ɵɵnextContext(2); return ctx_r29.onKeypress($event); })("onValueChange", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onValueChange_1_listener($event) { ɵɵrestoreView(_r28); const ctx_r30 = ɵɵnextContext(2); return ctx_r30.onValueChange($event); })("onCompletionSelect", function PrimitiveFieldComponent_td_5_div_3_Template_autocomplete_input_onCompletionSelect_1_listener($event) { ɵɵrestoreView(_r28); const ctx_r31 = ɵɵnextContext(2); return ctx_r31.onCompletionSelect($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("pathString", ctx_r16.pathString)("value", ctx_r16.value)("autocompletionConfig", ctx_r16.schema.autocompletionConfig)("placeholder", ctx_r16.schema.title)("tabIndex", ctx_r16.tabIndex);
} }
function PrimitiveFieldComponent_td_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 18);
    ɵɵlistener("ngModelChange", function PrimitiveFieldComponent_td_5_div_4_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r33); const ctx_r32 = ɵɵnextContext(2); return ctx_r32.value = $event; })("blur", function PrimitiveFieldComponent_td_5_div_4_Template_input_blur_1_listener() { ɵɵrestoreView(_r33); const ctx_r34 = ɵɵnextContext(2); return ctx_r34.onBlur(); })("keypress", function PrimitiveFieldComponent_td_5_div_4_Template_input_keypress_1_listener($event) { ɵɵrestoreView(_r33); const ctx_r35 = ɵɵnextContext(2); return ctx_r35.onKeypress($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r17.value)("tabindex", ctx_r17.tabIndex)("placeholder", ctx_r17.schema.title);
    ɵɵattribute("data-path", ctx_r17.pathString);
} }
function PrimitiveFieldComponent_td_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 19);
    ɵɵlistener("ngModelChange", function PrimitiveFieldComponent_td_5_div_5_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r37); const ctx_r36 = ɵɵnextContext(2); return ctx_r36.value = $event; })("ngModelChange", function PrimitiveFieldComponent_td_5_div_5_Template_input_ngModelChange_1_listener() { ɵɵrestoreView(_r37); const ctx_r38 = ɵɵnextContext(2); return ctx_r38.onBlur(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r18.value)("placeholder", ctx_r18.schema.title);
} }
function PrimitiveFieldComponent_td_5_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ## Not recognized type: ", ctx_r19.valueType, " ");
} }
function PrimitiveFieldComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtemplate(1, PrimitiveFieldComponent_td_5_div_1_Template, 2, 6, "div", 13);
    ɵɵtemplate(2, PrimitiveFieldComponent_td_5_div_2_Template, 2, 7, "div", 13);
    ɵɵtemplate(3, PrimitiveFieldComponent_td_5_div_3_Template, 2, 5, "div", 13);
    ɵɵtemplate(4, PrimitiveFieldComponent_td_5_div_4_Template, 2, 4, "div", 13);
    ɵɵtemplate(5, PrimitiveFieldComponent_td_5_div_5_Template, 2, 2, "div", 13);
    ɵɵtemplate(6, PrimitiveFieldComponent_td_5_div_6_Template, 2, 1, "div", 14);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r0 = ɵɵreference(4);
    ɵɵclassProp("disabled", ctx_r2.disabled);
    ɵɵpropertyInterpolate("placement", ctx_r2.tooltipPosition);
    ɵɵproperty("tooltip", _r0)("isDisabled", !ctx_r2.hasErrors());
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "string");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "autocomplete");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "integer");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "boolean");
} }
function PrimitiveFieldComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 20);
    ɵɵelement(1, "i", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("href", ctx_r3.schema.linkBuilder(ctx_r3.value), ɵɵsanitizeUrl);
} }
function PrimitiveFieldComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 20);
    ɵɵelement(1, "i", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("href", ctx_r4.value, ɵɵsanitizeUrl);
} }
function PrimitiveFieldComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelement(1, "patch-actions", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r5.removeJsonPatch);
} }
const _c0$a = function (a0, a1) { return { currentValue: a0, patchValue: a1 }; };
function PrimitiveFieldComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 23);
    ɵɵtext(1);
    ɵɵelement(2, "i", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const _r8 = ɵɵreference(13);
    ɵɵproperty("popover", _r8)("popoverContext", ɵɵpureFunction2(3, _c0$a, ctx_r7.value, ctx_r7.replaceJsonPatches[0].value));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.value, " ");
} }
function PrimitiveFieldComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "text-diff", 25);
    ɵɵelement(1, "patch-actions", 26);
} if (rf & 2) {
    const currentValue_r39 = ctx.currentValue;
    const patchValue_r40 = ctx.patchValue;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("currentText", currentValue_r39.toString())("newText", patchValue_r40 ? patchValue_r40.toString() : "");
    ɵɵadvance(1);
    ɵɵproperty("patch", ctx_r9.replaceJsonPatches[0])("addActionEnabled", ctx_r9.isPathToAnIndex);
} }
class PrimitiveFieldComponent extends AbstractFieldComponent {
    constructor(schemaValidationService, componentTypeService, appGlobalsService, problemsService, jsonStoreService, keysStoreService, pathUtilService, domUtilService, changeDetectorRef) {
        super(appGlobalsService, problemsService, pathUtilService, changeDetectorRef, jsonStoreService);
        this.schemaValidationService = schemaValidationService;
        this.componentTypeService = componentTypeService;
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.keysStoreService = keysStoreService;
        this.pathUtilService = pathUtilService;
        this.domUtilService = domUtilService;
        this.changeDetectorRef = changeDetectorRef;
        this.internalErrors = [];
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.value !== this.schema.default) {
            this.lastCommitedValue = this.value;
        }
        this.problemsService
            .internalCategorizedProblems$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(internalCategorizedErrorMap => {
            this.internalErrors = internalCategorizedErrorMap.errors[this.pathString] || [];
        });
        this.appGlobalsService
            .adminMode$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(adminMode => {
            this.changeDetectorRef.markForCheck();
        });
        this.validate();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.internalErrors.length > 0) {
            this.problemsService.setInternalProblemsForPath(this.pathString, []);
        }
    }
    commitValueChange() {
        this.validate();
        this.lastCommitedValue = this.value;
        this.jsonStoreService.setIn(this.path, this.value);
        if (this.schema.onValueChange) {
            // setTimeout to workaround the case when the value is changed back to previous value inside onValuChange callback
            setTimeout(() => this.schema.onValueChange(this.path, this.value, this.jsonStoreService, this.keysStoreService));
        }
    }
    onBlur() {
        this.domUtilService.clearHighlight();
        if (this.value !== this.lastCommitedValue) {
            this.commitValueChange();
        }
    }
    onKeypress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            document.activeElement.blur();
        }
    }
    onValueChange(value) {
        this.value = value;
    }
    onSearchableDropdownSelect(value) {
        this.onValueChange(value);
        this.commitValueChange();
    }
    onCompletionSelect(selection) {
        this.commitValueChange();
        const onCompletionSelect = this.schema.autocompletionConfig.onCompletionSelect;
        if (onCompletionSelect) {
            onCompletionSelect(this.path, selection, this.jsonStoreService, this.keysStoreService);
        }
    }
    get tabIndex() {
        return this.disabled ? -1 : 1;
    }
    get tooltipPosition() {
        if (this.pathString.startsWith(this.appGlobalsService.firstElementPathForCurrentTab)) {
            return 'bottom';
        }
        else {
            return 'top';
        }
    }
    hasErrors() {
        return super.hasErrors() || this.internalErrors.length > 0;
    }
    get errorClass() {
        return !this.replaceJsonPatches[0] && this.hasErrors() ? 'error' : '';
    }
    get isPathToAnIndex() {
        return typeof this.path[this.path.length - 1] === 'number';
    }
    validate() {
        if (this.value != null && this.value !== '' && this.externalErrors.length === 0) {
            this.internalErrors = this.schemaValidationService.validateValue(this.value, this.schema);
            this.problemsService.setInternalProblemsForPath(this.pathString, this.internalErrors);
        }
    }
}
PrimitiveFieldComponent.ɵfac = function PrimitiveFieldComponent_Factory(t) { return new (t || PrimitiveFieldComponent)(ɵɵdirectiveInject(SchemaValidationService), ɵɵdirectiveInject(ComponentTypeService), ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(KeysStoreService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(ChangeDetectorRef)); };
PrimitiveFieldComponent.ɵcmp = ɵɵdefineComponent({ type: PrimitiveFieldComponent, selectors: [["primitive-field"]], inputs: { schema: "schema", path: "path", value: "value" }, features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 9, consts: [[3, "id", "ngClass"], [1, "primitive-field-container", 3, "ngSwitch"], [3, "ngClass"], ["errorsTooltipTemplate", ""], ["class", "value-container", "container", "body", 3, "disabled", "tooltip", "isDisabled", "placement", 4, "ngIf", "ngIfElse"], [1, "link-button-container"], ["class", "no-decoration", "target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], ["patchTemplate", ""], ["mergePopover", ""], [1, "tooltip-left-align"], [4, "ngFor", "ngForOf"], ["container", "body", 1, "value-container", 3, "tooltip", "isDisabled", "placement"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "pathString", "value", "disabled", "tabIndex", "latexPreviewEnabled", "placeholder", "valueChange", "blur", "onKeypress"], [3, "pathString", "value", "placeholder", "items", "shortcutMap", "displayValueMap", "tabIndex", "onSelect", "onBlur"], [3, "pathString", "value", "autocompletionConfig", "placeholder", "tabIndex", "onBlur", "onKeypress", "onValueChange", "onCompletionSelect"], ["type", "number", 3, "ngModel", "tabindex", "placeholder", "ngModelChange", "blur", "keypress"], ["type", "checkbox", 3, "ngModel", "placeholder", "ngModelChange"], ["target", "_blank", 1, "no-decoration", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-link"], [3, "patch"], ["type", "button", "popoverTitle", "Merge", "container", "body", 1, "btn", "btn-default", "btn-merge", "orange-left-border", 3, "popover", "popoverContext"], [1, "fa", "fa-bolt"], [3, "currentText", "newText"], [3, "patch", "addActionEnabled"]], template: function PrimitiveFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "table", 1);
        ɵɵelementStart(2, "tr", 2);
        ɵɵtemplate(3, PrimitiveFieldComponent_ng_template_3_Template, 3, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, PrimitiveFieldComponent_td_5_Template, 7, 10, "td", 4);
        ɵɵelementStart(6, "td", 5);
        ɵɵtemplate(7, PrimitiveFieldComponent_a_7_Template, 2, 1, "a", 6);
        ɵɵtemplate(8, PrimitiveFieldComponent_a_8_Template, 2, 1, "a", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, PrimitiveFieldComponent_tr_9_Template, 2, 1, "tr", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(10, PrimitiveFieldComponent_ng_template_10_Template, 3, 6, "ng-template", null, 8, ɵɵtemplateRefExtractor);
        ɵɵtemplate(12, PrimitiveFieldComponent_ng_template_12_Template, 2, 4, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r6 = ɵɵreference(11);
        ɵɵproperty("id", ctx.pathString)("ngClass", ctx.redLeftBorderClass);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.schema.componentType);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ctx.errorClass);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.replaceJsonPatches[0])("ngIfElse", _r6);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.schema.linkBuilder);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.schema.linkBuilder && ctx.schema.format === "url");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.removeJsonPatch);
    } }, directives: [NgClass, NgSwitch, NgIf, NgForOf, TooltipDirective, NgSwitchCase, NgSwitchDefault, StringInputComponent, SearchableDropdownComponent, AutocompleteInputComponent, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, CheckboxControlValueAccessor, PatchActionsComponent, PopoverDirective, TextDiffComponent], styles: ["td.value-container input,td.value-container span[contenteditable=true]{background-color:transparent;border:none;display:inline-block;transition:all .5s ease;vertical-align:middle;width:100%}table.primitive-field-container{width:100%}td.link-button-container{width:22px}td.value-container{padding:3px 3px 3px 6px!important;width:100%}td.value-container:hover{background-color:#ffa!important}a.no-decoration{text-decoration:none}[contenteditable=true]{min-height:18px;word-break:break-word}[contenteditable=true]:empty:before{color:#a9a9a9;content:attr(placeholder);display:block}.tooltip-left-align{margin-left:12px;padding:0}.btn-merge{background:transparent;border:none;text-align:left;white-space:normal;width:100%}.orange-left-border{border-left:9px solid #e67e22;border-radius:0}.fa-bolt{color:#e67e22}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PrimitiveFieldComponent, [{
        type: Component,
        args: [{
                selector: 'primitive-field',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    './primitive-field.component.scss'
                ],
                templateUrl: './primitive-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: SchemaValidationService }, { type: ComponentTypeService }, { type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: KeysStoreService }, { type: PathUtilService }, { type: DomUtilService }, { type: ChangeDetectorRef }]; }, { schema: [{
            type: Input
        }], path: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

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
function RefFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "primitive-field", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r0.ref)("schema", ctx_r0.schema["properties"]["$ref"])("path", ctx_r0.refPath);
} }
function RefFieldComponent_div_2_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function RefFieldComponent_div_2_div_1_button_1_Template_button_click_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(3); return ctx_r6.onPreviewClick($event); });
    ɵɵelement(1, "i", 5);
    ɵɵelementEnd();
} }
function RefFieldComponent_div_2_div_1_div_2_1_ng_template_0_Template(rf, ctx) { }
const _c0$b = function (a0) { return { response: a0 }; };
function RefFieldComponent_div_2_div_1_div_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, RefFieldComponent_div_2_div_1_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0$b, ctx_r8.refData));
} }
function RefFieldComponent_div_2_div_1_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} }
function RefFieldComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, RefFieldComponent_div_2_div_1_div_2_1_Template, 1, 4, undefined, 1);
    ɵɵtemplate(2, RefFieldComponent_div_2_div_1_div_2_i_2_Template, 1, 0, "i", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.refData);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.refData);
} }
function RefFieldComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, RefFieldComponent_div_2_div_1_button_1_Template, 2, 0, "button", 3);
    ɵɵtemplate(2, RefFieldComponent_div_2_div_1_div_2_Template, 3, 2, "div", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.shouldDisplayTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.shouldDisplayTemplate);
} }
function RefFieldComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "a", 9);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("href", ctx_r3.anchorHref, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.anchorDisplay);
} }
function RefFieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, RefFieldComponent_div_2_div_1_Template, 3, 2, "div", 1);
    ɵɵtemplate(2, RefFieldComponent_div_2_div_2_Template, 3, 2, "div", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isTemplateEnabled);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isTemplateEnabled);
} }
class RefFieldComponent {
    constructor(http, changeDetectorRef, appGlobalsService, pathUtilService) {
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.isPreviewButtonHidden = false;
    }
    ngOnChanges(changes) {
        if (this.refConfig) {
            const valueChange = changes['value'];
            const schemaChange = changes['schema'];
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
    }
    onPreviewClick() {
        this.isPreviewButtonHidden = true;
        this.fetchRef();
    }
    get customTemplate() {
        return this.appGlobalsService.templates[this.refConfig.templateName];
    }
    get refConfig() {
        return this.schema.refFieldConfig;
    }
    get ref() {
        return this.value.get('$ref');
    }
    get anchorHref() {
        return this.anchorAttributes ? this.anchorAttributes.href : this.ref;
    }
    get anchorDisplay() {
        return this.anchorAttributes ? this.anchorAttributes.display : this.ref;
    }
    get isTemplateEnabled() {
        return this.refConfig !== undefined && this.refConfig.templateName !== undefined;
    }
    get shouldDisplayTemplate() {
        return this.isPreviewButtonHidden || !this.refConfig.lazy;
    }
    get shouldDisplayInputField() {
        return this.refConfig !== undefined && this.refConfig.displayInputField;
    }
    fetchRef() {
        this.refData = undefined;
        this.http
            .get(this.ref, this.requestOptions)
            .pipe(map((res) => res.json())).subscribe(data => {
            this.refData = data;
            this.changeDetectorRef.markForCheck();
        });
    }
    createRequestOptionsWithConfig() {
        const headers = new Headers();
        if (this.refConfig.headers) {
            this.refConfig.headers
                .forEach(header => headers.append(header.name, header.value));
        }
        return { headers };
    }
}
RefFieldComponent.ɵfac = function RefFieldComponent_Factory(t) { return new (t || RefFieldComponent)(ɵɵdirectiveInject(HttpClient), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(PathUtilService)); };
RefFieldComponent.ɵcmp = ɵɵdefineComponent({ type: RefFieldComponent, selectors: [["ref-field"]], inputs: { schema: "schema", value: "value", path: "path" }, features: [ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "id"], [4, "ngIf"], [3, "value", "schema", "path"], ["class", "btn-preview-template", 3, "click", 4, "ngIf"], [1, "btn-preview-template", 3, "click"], [1, "fa", "fa-eye"], ["class", "fa fa-spinner fa-spin align-center", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "fa", "fa-spinner", "fa-spin", "align-center"], ["target", "_blank", 1, "break-word", 3, "href"]], template: function RefFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, RefFieldComponent_div_1_Template, 2, 3, "div", 1);
        ɵɵtemplate(2, RefFieldComponent_div_2_Template, 3, 2, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.pathString);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.shouldDisplayInputField);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.ref);
    } }, directives: [NgIf, PrimitiveFieldComponent, NgTemplateOutlet], styles: ["button.btn-preview-template[_ngcontent-%COMP%]{background:transparent;border:0;height:100%;width:100%}.align-center[_ngcontent-%COMP%]{text-align:center;width:100%}.break-word[_ngcontent-%COMP%]{word-break:break-word}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RefFieldComponent, [{
        type: Component,
        args: [{
                selector: 'ref-field',
                styleUrls: [
                    './ref-field.component.scss'
                ],
                templateUrl: './ref-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: HttpClient }, { type: ChangeDetectorRef }, { type: AppGlobalsService }, { type: PathUtilService }]; }, { schema: [{
            type: Input
        }], value: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();

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
function AnyTypeFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "table-list-field", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("values", ctx_r0.value)("schema", ctx_r0.schema)("path", ctx_r0.path);
} }
function AnyTypeFieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "complex-list-field", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("values", ctx_r1.value)("schema", ctx_r1.schema)("path", ctx_r1.path);
} }
function AnyTypeFieldComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "primitive-list-field", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("values", ctx_r2.value)("schema", ctx_r2.schema)("path", ctx_r2.path);
} }
function AnyTypeFieldComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "object-field", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r3.value)("schema", ctx_r3.schema)("path", ctx_r3.path);
} }
function AnyTypeFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "ref-field", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r4.value)("schema", ctx_r4.schema)("path", ctx_r4.path);
} }
function AnyTypeFieldComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "primitive-field", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r5.value)("schema", ctx_r5.schema)("path", ctx_r5.path);
} }
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
class AnyTypeFieldComponent {
}
AnyTypeFieldComponent.ɵfac = function AnyTypeFieldComponent_Factory(t) { return new (t || AnyTypeFieldComponent)(); };
AnyTypeFieldComponent.ɵcmp = ɵɵdefineComponent({ type: AnyTypeFieldComponent, selectors: [["any-type-field"]], inputs: { schema: "schema", path: "path", value: "value" }, decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "values", "schema", "path"], [3, "value", "schema", "path"]], template: function AnyTypeFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, AnyTypeFieldComponent_div_1_Template, 2, 3, "div", 1);
        ɵɵtemplate(2, AnyTypeFieldComponent_div_2_Template, 2, 3, "div", 1);
        ɵɵtemplate(3, AnyTypeFieldComponent_div_3_Template, 2, 3, "div", 1);
        ɵɵtemplate(4, AnyTypeFieldComponent_div_4_Template, 2, 3, "div", 1);
        ɵɵtemplate(5, AnyTypeFieldComponent_div_5_Template, 2, 3, "div", 1);
        ɵɵtemplate(6, AnyTypeFieldComponent_div_6_Template, 2, 3, "div", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.schema.componentType);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "table-list");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "complex-list");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "primitive-list");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "object");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "ref");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, TableListFieldComponent, ComplexListFieldComponent, PrimitiveListFieldComponent, ObjectFieldComponent, RefFieldComponent, PrimitiveFieldComponent], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AnyTypeFieldComponent, [{
        type: Component,
        args: [{
                selector: 'any-type-field',
                styleUrls: [
                    './any-type-field.component.scss'
                ],
                templateUrl: './any-type-field.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { schema: [{
            type: Input
        }], path: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

class AddNewElementButtonComponent {
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
AddNewElementButtonComponent.ɵfac = function AddNewElementButtonComponent_Factory(t) { return new (t || AddNewElementButtonComponent)(ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(EmptyValueService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(KeysStoreService)); };
AddNewElementButtonComponent.ɵcmp = ɵɵdefineComponent({ type: AddNewElementButtonComponent, selectors: [["add-new-element-button"]], inputs: { path: "path", schema: "schema" }, decls: 3, vars: 2, consts: [[1, "button-container"], ["type", "button", 1, "btn-new-field", 3, "click"]], template: function AddNewElementButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function AddNewElementButtonComponent_Template_button_click_1_listener() { return ctx.addNewElement(); });
        ɵɵtext(2, "Add new");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("disabled", ctx.schema.disabled);
    } }, styles: ["div.button-container[_ngcontent-%COMP%]{display:inline-block;width:100%}.btn-new-field[_ngcontent-%COMP%]{background:transparent;border:0;bottom:-5px;font-size:13px;font-weight:700;left:-5px;opacity:.5;padding:0;text-shadow:0 1px 0 #fff}.btn-new-field[_ngcontent-%COMP%]:hover{color:green!important;opacity:.6}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddNewElementButtonComponent, [{
        type: Component,
        args: [{
                selector: 'add-new-element-button',
                styleUrls: [
                    './add-new-element-button.component.scss'
                ],
                templateUrl: './add-new-element-button.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DomUtilService }, { type: EmptyValueService }, { type: JsonStoreService }, { type: PathUtilService }, { type: KeysStoreService }]; }, { path: [{
            type: Input
        }], schema: [{
            type: Input
        }] }); })();

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
class SelfOrEmptyPipe {
    constructor(emptyValueService) {
        this.emptyValueService = emptyValueService;
    }
    /**
     * Transforms a value to empty value if it is undefined,
     * returns self if it is already defined
     *
     * @return - empty value if given value is undefined or value itself.
     */
    transform(value, schema) {
        return value ? value : this.emptyValueService.generateEmptyValue(schema);
    }
}
SelfOrEmptyPipe.ɵfac = function SelfOrEmptyPipe_Factory(t) { return new (t || SelfOrEmptyPipe)(ɵɵdirectiveInject(EmptyValueService)); };
SelfOrEmptyPipe.ɵpipe = ɵɵdefinePipe({ name: "selfOrEmpty", type: SelfOrEmptyPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelfOrEmptyPipe, [{
        type: Pipe,
        args: [{
                name: 'selfOrEmpty',
            }]
    }], function () { return [{ type: EmptyValueService }]; }, null); })();

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
class SetFirstElementPathPipe {
    constructor(appGlobalsService, pathUtilService) {
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
    }
    transform(fields, tabName) {
        this.appGlobalsService.tabNameToFirstTopLevelElement[tabName] = `${this.pathUtilService.separator}${fields.first()}`;
        return fields;
    }
}
SetFirstElementPathPipe.ɵfac = function SetFirstElementPathPipe_Factory(t) { return new (t || SetFirstElementPathPipe)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(PathUtilService)); };
SetFirstElementPathPipe.ɵpipe = ɵɵdefinePipe({ name: "setFirstElementPath", type: SetFirstElementPathPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SetFirstElementPathPipe, [{
        type: Pipe,
        args: [{
                name: 'setFirstElementPath'
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: PathUtilService }]; }, null); })();

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
function SubRecordComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td");
    ɵɵelementStart(1, "slide-toggle", 7);
    ɵɵlistener("valueChange", function SubRecordComponent_tr_3_td_1_Template_slide_toggle_valueChange_1_listener($event) { ɵɵrestoreView(_r5); const key_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(2); return ctx_r4.onToggleValueChange(key_r3, $event); });
    ɵɵpipe(2, "selfOrEmpty");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("id", "/" + key_r3)("value", ɵɵpipeBind2(2, 5, ctx_r2.value.get(key_r3), ctx_r2.schema.properties[key_r3]))("onText", key_r3)("offText", key_r3)("onColor", ctx_r2.schema.properties[key_r3].toggleColor);
} }
function SubRecordComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 5);
    ɵɵtemplate(1, SubRecordComponent_tr_3_td_1_Template, 3, 8, "td", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.keysByType.toggles)("ngForTrackBy", ctx_r0.trackByElement);
} }
function SubRecordComponent_div_4_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 12);
    ɵɵelement(1, "add-new-element-button", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("path", ctx_r8.getPathForChild(key_r7))("schema", ctx_r8.schema.properties[key_r7]);
} }
function SubRecordComponent_div_4_div_1_ng_container_9_li_1_ng_template_1_Template(rf, ctx) { }
function SubRecordComponent_div_4_div_1_ng_container_9_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 19);
    ɵɵtemplate(1, SubRecordComponent_div_4_div_1_ng_container_9_li_1_ng_template_1_Template, 0, 0, "ng-template", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const templateName_r12 = ctx.$implicit;
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r11.appGlobalsService.templates[templateName_r12]);
} }
function SubRecordComponent_div_4_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SubRecordComponent_div_4_div_1_ng_container_9_li_1_Template, 2, 1, "li", 18);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r7 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r9.getTitleDropdownItemTemplateNamesForChild(key_r7));
} }
function SubRecordComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "tr");
    ɵɵelementStart(2, "td", 9);
    ɵɵelementStart(3, "title-dropdown", 10);
    ɵɵpipe(4, "underscoreToSpace");
    ɵɵtemplate(5, SubRecordComponent_div_4_div_1_li_5_Template, 2, 2, "li", 11);
    ɵɵelementStart(6, "li", 12);
    ɵɵelementStart(7, "button", 13);
    ɵɵlistener("click", function SubRecordComponent_div_4_div_1_Template_button_click_7_listener() { ɵɵrestoreView(_r16); const key_r7 = ctx.$implicit; const ctx_r15 = ɵɵnextContext(2); return ctx_r15.deleteField(key_r7); });
    ɵɵtext(8, "Delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(9, SubRecordComponent_div_4_div_1_ng_container_9_Template, 2, 1, "ng-container", 4);
    ɵɵelement(10, "li", 14);
    ɵɵelementStart(11, "li", 15);
    ɵɵlistener("click", function SubRecordComponent_div_4_div_1_Template_li_click_11_listener($event) { ɵɵrestoreView(_r16); return $event.stopPropagation(); });
    ɵɵelement(12, "find-replace", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "tr");
    ɵɵelementStart(14, "td");
    ɵɵelement(15, "any-type-field", 17);
    ɵɵpipe(16, "selfOrEmpty");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("title", ɵɵpipeBind1(4, 9, key_r7))("isDisabled", ctx_r6.isDisabled(key_r7));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r6.schema.properties[key_r7].type === "array");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r6.getTitleDropdownItemTemplateNamesForChild(key_r7));
    ɵɵadvance(3);
    ɵɵproperty("path", ctx_r6.getPathForChild(key_r7))("schema", ctx_r6.schema.properties[key_r7]);
    ɵɵadvance(3);
    ɵɵproperty("value", ɵɵpipeBind2(16, 11, ctx_r6.value.get(key_r7), ctx_r6.schema.properties[key_r7]))("schema", ctx_r6.schema.properties[key_r7])("path", ctx_r6.getPathForChild(key_r7));
} }
function SubRecordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, SubRecordComponent_div_4_div_1_Template, 17, 14, "div", 8);
    ɵɵpipe(2, "setFirstElementPath");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 2, ctx_r1.keysByType.others, ctx_r1.tabName))("ngForTrackBy", ctx_r1.trackByElement);
} }
class SubRecordComponent {
    constructor(jsonStoreService, appGlobalsService, tabsUtilService, keysStoreService) {
        this.jsonStoreService = jsonStoreService;
        this.appGlobalsService = appGlobalsService;
        this.tabsUtilService = tabsUtilService;
        this.keysStoreService = keysStoreService;
        this.pathCache = {};
    }
    ngOnChanges(changes) {
        if (changes['keys']) {
            let keys;
            if (this.tabName) {
                const keyToTabName = this.tabsUtilService.getSchemaKeyToTabName(this.appGlobalsService.config.tabsConfig, this.schema);
                keys = this.keys
                    .filter(key => keyToTabName[key] === this.tabName);
            }
            else {
                keys = this.keys;
            }
            this.keysByType = keys
                .groupBy(key => this.isToggle(key) ? 'toggles' : 'others')
                .toObject();
        }
    }
    // delete only work for others, not toggles (UPDATE: config comment if this changes)
    deleteField(field) {
        this.jsonStoreService.removeIn(this.getPathForChild(field));
    }
    getPathForChild(key) {
        if (!this.pathCache[key]) {
            this.pathCache[key] = [key];
        }
        return this.pathCache[key];
    }
    onToggleValueChange(field, value) {
        this.jsonStoreService.setIn(this.getPathForChild(field), value);
    }
    isToggle(field) {
        return this.schema.properties[field].toggleColor !== undefined;
    }
    isDisabled(key) {
        return this.schema.properties[key].disabled && !this.appGlobalsService.adminMode;
    }
    trackByElement(index, element) {
        return element;
    }
    getTitleDropdownItemTemplateNamesForChild(key) {
        return this.schema.properties[key].titleDropdownItemTemplateNames;
    }
}
SubRecordComponent.ɵfac = function SubRecordComponent_Factory(t) { return new (t || SubRecordComponent)(ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(TabsUtilService), ɵɵdirectiveInject(KeysStoreService)); };
SubRecordComponent.ɵcmp = ɵɵdefineComponent({ type: SubRecordComponent, selectors: [["sub-record"]], inputs: { value: "value", schema: "schema", tabName: "tabName", keys: "keys", pathString: "pathString" }, features: [ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [[1, "record-fields-container"], [1, "table"], [1, "field-wrapper"], ["class", "align-right", 4, "ngIf"], [4, "ngIf"], [1, "align-right"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "value", "onText", "offText", "onColor", "valueChange"], ["class", "field-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "label-holder"], [3, "title", "isDisabled"], ["class", "title-dropdown-item", 4, "ngIf"], [1, "title-dropdown-item"], ["type", "button", 1, "editor-btn-delete", "editor-btn-delete-text", 3, "click"], [1, "divider"], [1, "title-dropdown-item", 3, "click"], [3, "path", "schema"], [3, "value", "schema", "path"], ["class", "title-dropdown-item custom-title-dropdown-item", 4, "ngFor", "ngForOf"], [1, "title-dropdown-item", "custom-title-dropdown-item"], [3, "ngTemplateOutlet"]], template: function SubRecordComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "table", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, SubRecordComponent_tr_3_Template, 2, 2, "tr", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, SubRecordComponent_div_4_Template, 3, 5, "div", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.keysByType.toggles);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.keysByType.others);
    } }, directives: [NgIf, NgForOf, TitleDropdownComponent, FindReplaceComponent, AnyTypeFieldComponent, AddNewElementButtonComponent, NgTemplateOutlet], pipes: [SelfOrEmptyPipe, SetFirstElementPathPipe, UnderscoreToSpacePipe], styles: ["tr.align-right[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:100%}tr.align-right[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   slide-toggle[_ngcontent-%COMP%]{float:right}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubRecordComponent, [{
        type: Component,
        args: [{
                selector: 'sub-record',
                styleUrls: [
                    './sub-record.component.scss'
                ],
                templateUrl: './sub-record.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: JsonStoreService }, { type: AppGlobalsService }, { type: TabsUtilService }, { type: KeysStoreService }]; }, { value: [{
            type: Input
        }], schema: [{
            type: Input
        }], tabName: [{
            type: Input
        }], keys: [{
            type: Input
        }], pathString: [{
            type: Input
        }] }); })();

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
class SanitizeUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    /**
     * Transforms url to safe url that can be used for `<script src>` or `<iframe src>`
     *
     * @param {string} url
     * @return {SafeResourceUrl}
     */
    transform(url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SanitizeUrlPipe.ɵfac = function SanitizeUrlPipe_Factory(t) { return new (t || SanitizeUrlPipe)(ɵɵdirectiveInject(DomSanitizer)); };
SanitizeUrlPipe.ɵpipe = ɵɵdefinePipe({ name: "sanitizeUrl", type: SanitizeUrlPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SanitizeUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'sanitizeUrl',
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

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
class HtmlViewComponent {
}
HtmlViewComponent.ɵfac = function HtmlViewComponent_Factory(t) { return new (t || HtmlViewComponent)(); };
HtmlViewComponent.ɵcmp = ɵɵdefineComponent({ type: HtmlViewComponent, selectors: [["html-view"]], inputs: { url: "url" }, decls: 2, vars: 3, consts: [[1, "fit-parent", 3, "data"]], template: function HtmlViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "object", 0);
        ɵɵpipe(1, "sanitizeUrl");
    } if (rf & 2) {
        ɵɵproperty("data", ɵɵpipeBind1(1, 1, ctx.url), ɵɵsanitizeResourceUrl);
    } }, pipes: [SanitizeUrlPipe], styles: [".fit-parent[_ngcontent-%COMP%]{height:100%;width:100%}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HtmlViewComponent, [{
        type: Component,
        args: [{
                selector: 'html-view',
                styleUrls: [
                    './html-view.component.scss'
                ],
                templateUrl: './html-view.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { url: [{
            type: Input
        }] }); })();

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
function EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 7);
    ɵɵlistener("click", function EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template_span_click_0_listener() { ɵɵrestoreView(_r6); const preview_r1 = ɵɵnextContext(2).$implicit; const ctx_r4 = ɵɵnextContext(); return ctx_r4.openUrlInNewWindow(preview_r1.url); });
    ɵɵelement(1, "i", 8);
    ɵɵelementEnd();
} }
function EditorPreviewerComponent_tab_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, EditorPreviewerComponent_tab_2_div_2_ng_template_1_Template, 2, 0, "ng-template", 5);
    ɵɵelement(2, "html-view", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const preview_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵproperty("url", preview_r1.url);
} }
function EditorPreviewerComponent_tab_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tab", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, EditorPreviewerComponent_tab_2_div_2_Template, 3, 1, "div", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const preview_r1 = ctx.$implicit;
    ɵɵproperty("heading", preview_r1.name);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", preview_r1.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "html");
} }
class EditorPreviewerComponent {
    openUrlInNewWindow(url) {
        window.open(url, 'Preview', 'left=20,top=20,width=750,height=750');
    }
    trackByIndex(index, element) {
        return index;
    }
}
EditorPreviewerComponent.ɵfac = function EditorPreviewerComponent_Factory(t) { return new (t || EditorPreviewerComponent)(); };
EditorPreviewerComponent.ɵcmp = ɵɵdefineComponent({ type: EditorPreviewerComponent, selectors: [["editor-previewer"]], inputs: { previews: "previews" }, decls: 3, vars: 2, consts: [[3, "heading", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "heading"], [3, "ngSwitch"], ["class", "preview-container", 4, "ngSwitchCase"], [1, "preview-container"], ["tabHeading", ""], [3, "url"], [1, "preview-link", 3, "click"], [1, "fa", "fa-external-link"]], template: function EditorPreviewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "tabset");
        ɵɵtemplate(2, EditorPreviewerComponent_tab_2_Template, 3, 3, "tab", 0);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.previews)("ngForTrackBy", ctx.trackByIndex);
    } }, directives: [TabsetComponent, NgForOf, TabDirective, NgSwitch, NgSwitchCase, TabHeadingDirective, HtmlViewComponent], styles: ["div.preview-container[_ngcontent-%COMP%]{height:95vh;width:100%}span.preview-link[_ngcontent-%COMP%]{color:#337ab7;cursor:pointer}span.preview-link[_ngcontent-%COMP%]:hover{color:#6495ed}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorPreviewerComponent, [{
        type: Component,
        args: [{
                selector: 'editor-previewer',
                styleUrls: [
                    './editor-previewer.component.scss'
                ],
                templateUrl: './editor-previewer.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { previews: [{
            type: Input
        }] }); })();

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
function ProblemsConsoleTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 3);
    ɵɵtext(1);
    ɵɵpipe(2, "titlecase");
    ɵɵelementStart(3, "span", 4);
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClassName);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, ctx_r0.problemType), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.problemCount);
} }
function ProblemsConsoleTabComponent_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6);
    ɵɵlistener("click", function ProblemsConsoleTabComponent_ng_container_2_li_1_Template_li_click_0_listener() { ɵɵrestoreView(_r8); const key_r3 = ɵɵnextContext().$implicit; const ctx_r6 = ɵɵnextContext(); return ctx_r6.focusAndSelectPath(key_r3); });
    ɵɵelement(1, "i", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const problem_r5 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r4.iconClassName);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", problem_r5.message, " ");
} }
function ProblemsConsoleTabComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProblemsConsoleTabComponent_ng_container_2_li_1_Template, 3, 2, "li", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.internalProblemMap[key_r3]);
} }
function ProblemsConsoleTabComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6);
    ɵɵlistener("click", function ProblemsConsoleTabComponent_ng_container_4_li_1_Template_li_click_0_listener() { ɵɵrestoreView(_r14); const key_r9 = ɵɵnextContext().$implicit; const ctx_r12 = ɵɵnextContext(); return ctx_r12.focusAndSelectPath(key_r9); });
    ɵɵelement(1, "i", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const problem_r11 = ctx.$implicit;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r10.iconClassName);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", problem_r11.message, " ");
} }
function ProblemsConsoleTabComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProblemsConsoleTabComponent_ng_container_4_li_1_Template, 3, 2, "li", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const key_r9 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.externalProblemMap[key_r9]);
} }
class ProblemsConsoleTabComponent extends AbstractSubscriberComponent {
    constructor(domUtilService, pathUtilService, problemsService, changeDetectorRef) {
        super();
        this.domUtilService = domUtilService;
        this.pathUtilService = pathUtilService;
        this.problemsService = problemsService;
        this.changeDetectorRef = changeDetectorRef;
        this.problemCount = 0;
    }
    ngOnInit() {
        this.problemsService.externalCategorizedProblems$
            .pipe(map(categorizedProblemMap => categorizedProblemMap[this.problemType]))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(problemMap => {
            this.externalProblemMap = problemMap;
            this.changeDetectorRef.markForCheck();
        });
        this.problemsService.internalCategorizedProblems$
            .pipe(map(categorizedProblemMap => categorizedProblemMap[this.problemType]))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(problemMap => {
            this.internalProblemMap = problemMap;
            this.changeDetectorRef.markForCheck();
        });
        // TODO: create WarningsConsoleTabComponent with same template to avoid `if`
        const problemCount$ = this.problemType === 'errors' ? this.problemsService.errorCount$ : this.problemsService.warningCount$;
        problemCount$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(problemCount => {
            this.problemCount = problemCount;
        });
        this.iconClassName = this.problemType === 'errors' ? 'fa fa-times' : 'fa fa-exclamation-triangle';
    }
    focusAndSelectPath(path) {
        this.domUtilService.focusAndSelectFirstEditableChildById(path, true);
    }
}
ProblemsConsoleTabComponent.ɵfac = function ProblemsConsoleTabComponent_Factory(t) { return new (t || ProblemsConsoleTabComponent)(ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(ChangeDetectorRef)); };
ProblemsConsoleTabComponent.ɵcmp = ɵɵdefineComponent({ type: ProblemsConsoleTabComponent, selectors: [["problems-console-tab"]], inputs: { problemType: "problemType" }, features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["tabHeading", ""], [1, "list-group"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "badge"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function ProblemsConsoleTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ProblemsConsoleTabComponent_ng_template_0_Template, 5, 5, "ng-template", 0);
        ɵɵelementStart(1, "ul", 1);
        ɵɵtemplate(2, ProblemsConsoleTabComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵɵpipe(3, "keys");
        ɵɵtemplate(4, ProblemsConsoleTabComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵɵpipe(5, "keys");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 2, ctx.internalProblemMap));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 4, ctx.externalProblemMap));
    } }, directives: [TabHeadingDirective, NgForOf, NgClass], pipes: [KeysPipe, TitleCasePipe], styles: [".list-group-item[_ngcontent-%COMP%]:hover{background-color:#faebcc}.list-group-item[_ngcontent-%COMP%]:hover > .title[_ngcontent-%COMP%]{text-decoration:underline}.list-group-item[_ngcontent-%COMP%]:hover.nested{background-color:#e2dcd1}.list-group-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0074d9;cursor:pointer}", ".fa-exclamation-triangle[_ngcontent-%COMP%]{color:#f1c40f}.fa-times[_ngcontent-%COMP%]{color:#d14024}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ProblemsConsoleTabComponent, [{
        type: Component,
        args: [{
                selector: 'problems-console-tab',
                styleUrls: [
                    '../abstract-console-tab/abstract-console-tab.component.scss',
                    './problems-console-tab.component.scss'
                ],
                templateUrl: './problems-console-tab.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DomUtilService }, { type: PathUtilService }, { type: ProblemsService }, { type: ChangeDetectorRef }]; }, { problemType: [{
            type: Input
        }] }); })();

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
function PatchesConsoleTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 4);
    ɵɵtext(1, " Conflicts ");
    ɵɵelementStart(2, "span", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.patches.length);
} }
function PatchesConsoleTabComponent_div_1_ng_template_1_Template(rf, ctx) { }
function PatchesConsoleTabComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, PatchesConsoleTabComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementStart(2, "button", 8);
    ɵɵlistener("click", function PatchesConsoleTabComponent_div_1_Template_button_click_2_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.acceptAll(); });
    ɵɵtext(3, "Accept All");
    ɵɵelement(4, "i", 9);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 10);
    ɵɵlistener("click", function PatchesConsoleTabComponent_div_1_Template_button_click_5_listener() { ɵɵrestoreView(_r5); const ctx_r6 = ɵɵnextContext(); return ctx_r6.rejectAll(); });
    ɵɵtext(6, "Reject All");
    ɵɵelement(7, "i", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.customHeaderTemplate);
} }
function PatchesConsoleTabComponent_li_3_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_span_1_Template_span_click_0_listener() { ɵɵrestoreView(_r11); const path_r7 = ɵɵnextContext().$implicit; const ctx_r10 = ɵɵnextContext(); return ctx_r10.focusPatch(ctx_r10.patchesByPath[path_r7][0]); });
    ɵɵelement(1, "i", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const path_r7 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ctx_r8.patchesByPath[path_r7][0].path, " - ", ctx_r8.patchesByPath[path_r7][0].op, " ");
} }
function PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵelementStart(1, "span", 15);
    ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template_span_click_1_listener() { ɵɵrestoreView(_r18); const patch_r16 = ctx.$implicit; const ctx_r17 = ɵɵnextContext(3); return ctx_r17.focusPatch(patch_r16); });
    ɵɵelement(2, "i", 4);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const patch_r16 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", patch_r16.path, " - ", patch_r16.op, " ");
} }
function PatchesConsoleTabComponent_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 15);
    ɵɵlistener("click", function PatchesConsoleTabComponent_li_3_ng_container_2_Template_span_click_1_listener() { ɵɵrestoreView(_r20); const _r14 = ɵɵreference(5); return _r14.toggle(); });
    ɵɵelement(2, "i", 16);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "ul", 17, 18);
    ɵɵtemplate(6, PatchesConsoleTabComponent_li_3_ng_container_2_li_6_Template, 4, 2, "li", 19);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const path_r7 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-controls", path_r7 + "-collapse");
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", path_r7, " (", ctx_r9.patchesByPath[path_r7].length, ") ");
    ɵɵadvance(1);
    ɵɵproperty("collapse", true);
    ɵɵattribute("id", path_r7 + "-collapse");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r9.patchesByPath[path_r7]);
} }
function PatchesConsoleTabComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 12);
    ɵɵtemplate(1, PatchesConsoleTabComponent_li_3_span_1_Template, 3, 2, "span", 13);
    ɵɵtemplate(2, PatchesConsoleTabComponent_li_3_ng_container_2_Template, 7, 6, "ng-container", 14);
    ɵɵelementEnd();
} if (rf & 2) {
    const path_r7 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.patchesByPath[path_r7].length === 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.patchesByPath[path_r7].length > 1);
} }
class PatchesConsoleTabComponent extends AbstractSubscriberComponent {
    constructor(domUtilService, appGlobalsService, pathUtilService, jsonStoreService, changeDetectorRef) {
        super();
        this.domUtilService = domUtilService;
        this.appGlobalsService = appGlobalsService;
        this.pathUtilService = pathUtilService;
        this.jsonStoreService = jsonStoreService;
        this.changeDetectorRef = changeDetectorRef;
        this.patchesByPath = {};
    }
    ngOnInit() {
        this.jsonStoreService.patchesByPath$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patchesByPath => {
            this.patchesByPath = patchesByPath;
            this.changeDetectorRef.markForCheck();
        });
    }
    focusPatch(patch) {
        this.domUtilService.focusPatch(patch);
    }
    get patches() {
        return Object
            .keys(this.patchesByPath)
            .reduce((patches, path) => patches.concat(this.patchesByPath[path]), []);
    }
    get customHeaderTemplate() {
        return this.appGlobalsService.templates.patchesHeaderTemplate;
    }
    acceptAll() {
        this.patches
            .forEach(patch => this.jsonStoreService.applyPatch(patch));
    }
    rejectAll() {
        this.patches
            .forEach(patch => this.jsonStoreService.rejectPatch(patch));
    }
}
PatchesConsoleTabComponent.ɵfac = function PatchesConsoleTabComponent_Factory(t) { return new (t || PatchesConsoleTabComponent)(ɵɵdirectiveInject(DomUtilService), ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(ChangeDetectorRef)); };
PatchesConsoleTabComponent.ɵcmp = ɵɵdefineComponent({ type: PatchesConsoleTabComponent, selectors: [["patches-console-tab"]], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["tabHeading", ""], ["class", "header-container", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "fa", "fa-bolt"], [1, "badge"], [1, "header-container"], [3, "ngTemplateOutlet"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check", "icon-padding-left"], [1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-times", "icon-padding-left"], [1, "list-group-item"], ["role", "button", "class", "title", 3, "click", 4, "ngIf"], [4, "ngIf"], ["role", "button", 1, "title", 3, "click"], [1, "fa", "fa-expand"], [1, "list-group", 3, "collapse"], ["collapse", "bs-collapse"], ["class", "list-group-item nested", 4, "ngFor", "ngForOf"], [1, "list-group-item", "nested"]], template: function PatchesConsoleTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PatchesConsoleTabComponent_ng_template_0_Template, 4, 1, "ng-template", 0);
        ɵɵtemplate(1, PatchesConsoleTabComponent_div_1_Template, 8, 1, "div", 1);
        ɵɵelementStart(2, "ul", 2);
        ɵɵtemplate(3, PatchesConsoleTabComponent_li_3_Template, 3, 2, "li", 3);
        ɵɵpipe(4, "sortAlphabetically");
        ɵɵpipe(5, "keys");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.patches && ctx.patches.length > 0);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 2, ɵɵpipeBind1(5, 4, ctx.patchesByPath)));
    } }, directives: [TabHeadingDirective, NgIf, NgForOf, NgTemplateOutlet, CollapseDirective], pipes: [SortAlphabeticallyPipe, KeysPipe], styles: [".list-group-item[_ngcontent-%COMP%]:hover{background-color:#faebcc}.list-group-item[_ngcontent-%COMP%]:hover > .title[_ngcontent-%COMP%]{text-decoration:underline}.list-group-item[_ngcontent-%COMP%]:hover.nested{background-color:#e2dcd1}.list-group-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0074d9;cursor:pointer}", ".fa-bolt[_ngcontent-%COMP%]{color:#e67e22}.icon-padding-left[_ngcontent-%COMP%]{padding-left:8px}.header-container[_ngcontent-%COMP%]{padding:8px}.header-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-left:4px;margin-right:4px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PatchesConsoleTabComponent, [{
        type: Component,
        args: [{
                selector: 'patches-console-tab',
                styleUrls: [
                    '../abstract-console-tab/abstract-console-tab.component.scss',
                    './patches-console-tab.component.scss'
                ],
                templateUrl: './patches-console-tab.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DomUtilService }, { type: AppGlobalsService }, { type: PathUtilService }, { type: JsonStoreService }, { type: ChangeDetectorRef }]; }, null); })();

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
function BottomConsoleComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 6);
} }
function BottomConsoleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "tabset");
    ɵɵelementStart(2, "tab", 2);
    ɵɵelement(3, "problems-console-tab", 3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "tab", 2);
    ɵɵelement(5, "problems-console-tab", 3);
    ɵɵelementEnd();
    ɵɵelementStart(6, "tab", 2);
    ɵɵelement(7, "patches-console-tab");
    ɵɵelementEnd();
    ɵɵelementStart(8, "tab", 4);
    ɵɵlistener("select", function BottomConsoleComponent_div_0_Template_tab_select_8_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.closePanel(); });
    ɵɵtemplate(9, BottomConsoleComponent_div_0_ng_template_9_Template, 1, 0, "ng-template", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("active", ctx_r0.isActive("Errors"));
    ɵɵadvance(1);
    ɵɵproperty("problemType", "errors");
    ɵɵadvance(1);
    ɵɵproperty("active", ctx_r0.isActive("Warnings"));
    ɵɵadvance(1);
    ɵɵproperty("problemType", "warnings");
    ɵɵadvance(1);
    ɵɵproperty("active", ctx_r0.isActive("Patches"));
    ɵɵadvance(2);
    ɵɵproperty("customClass", "pull-right");
} }
class BottomConsoleComponent {
    constructor() {
        this.isOpen = false;
        this.activeTab = '';
        this.onCollapse = new EventEmitter();
    }
    closePanel() {
        this.onCollapse.emit(false);
    }
    isActive(tabName) {
        return tabName === this.activeTab;
    }
}
BottomConsoleComponent.ɵfac = function BottomConsoleComponent_Factory(t) { return new (t || BottomConsoleComponent)(); };
BottomConsoleComponent.ɵcmp = ɵɵdefineComponent({ type: BottomConsoleComponent, selectors: [["bottom-console"]], inputs: { isOpen: "isOpen", activeTab: "activeTab" }, outputs: { onCollapse: "onCollapse" }, decls: 1, vars: 1, consts: [["class", "bottom-console-container", 4, "ngIf"], [1, "bottom-console-container"], [3, "active"], [3, "problemType"], [3, "customClass", "select"], ["tabHeading", ""], [1, "fa", "fa-window-close"]], template: function BottomConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, BottomConsoleComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isOpen);
    } }, directives: [NgIf, TabsetComponent, TabDirective, ProblemsConsoleTabComponent, PatchesConsoleTabComponent, TabHeadingDirective], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BottomConsoleComponent, [{
        type: Component,
        args: [{
                selector: 'bottom-console',
                styleUrls: [
                    './bottom-console.component.scss'
                ],
                templateUrl: './bottom-console.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { isOpen: [{
            type: Input
        }], activeTab: [{
            type: Input
        }], onCollapse: [{
            type: Output
        }] }); })();

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
function JsonEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "add-field-dropdown", 10);
    ɵɵpipe(2, "async");
    ɵɵelement(3, "i", 11);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 12);
    ɵɵlistener("click", function JsonEditorComponent_div_1_Template_span_click_4_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.isPreviewerHidden = !ctx_r7.isPreviewerHidden; });
    ɵɵelement(5, "i", 13);
    ɵɵelementEnd();
    ɵɵelementStart(6, "bottom-console-badges", 14);
    ɵɵlistener("badgeClick", function JsonEditorComponent_div_1_Template_bottom_console_badges_badgeClick_6_listener($event) { ɵɵrestoreView(_r8); const ctx_r9 = ɵɵnextContext(); return ctx_r9.openBottomConsole($event); });
    ɵɵelementEnd();
    ɵɵelementStart(7, "span", 15);
    ɵɵlistener("click", function JsonEditorComponent_div_1_Template_span_click_7_listener() { ɵɵrestoreView(_r8); const ctx_r10 = ɵɵnextContext(); return ctx_r10.isSidebarCollapsed = !ctx_r10.isSidebarCollapsed; });
    ɵɵelement(8, "i", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("fields", ɵɵpipeBind1(2, 7, ctx_r0.keys$))("pathString", ctx_r0.pathString)("schema", ctx_r0.fixedSchema);
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("tooltip", ctx_r0.isPreviewerHidden ? "Show Preview" : "Hide Preview");
    ɵɵadvance(1);
    ɵɵproperty("ngClass", !ctx_r0.isPreviewerHidden ? "fa-eye-slash" : "fa-eye");
    ɵɵadvance(3);
    ɵɵclassProp("rotate", !ctx_r0.isSidebarCollapsed);
} }
function JsonEditorComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "input", 21);
    ɵɵlistener("ngModelChange", function JsonEditorComponent_div_2_div_3_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(2); return ctx_r12.appGlobalsService.adminMode = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 22);
    ɵɵtext(3, "Enable Admin Mode");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r11.appGlobalsService.adminMode);
} }
function JsonEditorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵelement(1, "tree-menu", 18);
    ɵɵelement(2, "hr");
    ɵɵtemplate(3, JsonEditorComponent_div_2_div_3_Template, 4, 1, "div", 19);
    ɵɵelement(4, "hr");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.isSidebarCollapsed ? "close" : "open");
    ɵɵadvance(1);
    ɵɵproperty("record", ctx_r1._record)("schema", ctx_r1.fixedSchema);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.config.enableAdminModeSwitch);
} }
function JsonEditorComponent_add_field_dropdown_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "add-field-dropdown", 23);
    ɵɵpipe(1, "async");
    ɵɵtext(2, "Add field");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("fields", ɵɵpipeBind1(1, 3, ctx_r2.keys$))("pathString", ctx_r2.pathString)("schema", ctx_r2.fixedSchema);
} }
function JsonEditorComponent_tabset_5_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tab", 25);
    ɵɵlistener("select", function JsonEditorComponent_tabset_5_tab_1_Template_tab_select_0_listener() { ɵɵrestoreView(_r17); const tabName_r15 = ctx.$implicit; const ctx_r16 = ɵɵnextContext(2); return ctx_r16.activeTabName = tabName_r15; });
    ɵɵelement(1, "sub-record", 26);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const tabName_r15 = ctx.$implicit;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("heading", tabName_r15)("active", ctx_r14.isActiveTab(tabName_r15));
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r14._record)("tabName", tabName_r15)("schema", ctx_r14.fixedSchema)("keys", ɵɵpipeBind1(2, 7, ctx_r14.keys$))("pathString", ctx_r14.pathString);
} }
function JsonEditorComponent_tabset_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tabset");
    ɵɵtemplate(1, JsonEditorComponent_tabset_5_tab_1_Template, 3, 9, "tab", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.tabNames)("ngForTrackBy", ctx_r3.trackByElement);
} }
function JsonEditorComponent_sub_record_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sub-record", 27);
    ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r4._record)("schema", ctx_r4.fixedSchema)("keys", ɵɵpipeBind1(1, 4, ctx_r4.keys$))("pathString", ctx_r4.pathString);
} }
function JsonEditorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelement(1, "editor-previewer", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r5.isPreviewerHidden ? "minimizePreview" : "maximizePreview");
    ɵɵadvance(1);
    ɵɵproperty("hidden", ctx_r5.isPreviewerHidden)("previews", ctx_r5.previews);
} }
function JsonEditorComponent_bottom_console_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "bottom-console", 30);
    ɵɵlistener("onCollapse", function JsonEditorComponent_bottom_console_8_Template_bottom_console_onCollapse_0_listener($event) { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(); return ctx_r18.isBottomConsoleOpen = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("activeTab", ctx_r6.bottomConsoleActiveTab)("isOpen", ctx_r6.isBottomConsoleOpen);
} }
const _c0$c = function (a0, a1) { return { "maximizeEditor": a0, "compact": a1 }; };
class JsonEditorComponent extends AbstractSubscriberComponent {
    constructor(appGlobalsService, problemsService, jsonStoreService, jsonUtilService, jsonSchemaService, keysStoreService, recordFixerService, schemaFixerService, tabsUtilService, pathUtilService) {
        super();
        this.appGlobalsService = appGlobalsService;
        this.problemsService = problemsService;
        this.jsonStoreService = jsonStoreService;
        this.jsonUtilService = jsonUtilService;
        this.jsonSchemaService = jsonSchemaService;
        this.keysStoreService = keysStoreService;
        this.recordFixerService = recordFixerService;
        this.schemaFixerService = schemaFixerService;
        this.tabsUtilService = tabsUtilService;
        this.pathUtilService = pathUtilService;
        this.recordChange = new EventEmitter();
        this.jsonPatchesChange = new EventEmitter();
        this.validationProblems = new EventEmitter();
        this.pathString = '';
        this.isBottomConsoleOpen = false;
        this.isPreviewerHidden = false;
        this.isSidebarCollapsed = true;
        this.bottomConsoleActiveTab = '';
    }
    ngOnInit() {
        this.isPreviewerHidden = this.config.isPreviewerHiddenOnStart;
        this.appGlobalsService.adminMode$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(adminMode => {
            this.keysStoreService.buildKeysMap(this._record, this.fixedSchema);
        });
        // listen for all changes on json
        this.jsonStoreService.json$
            .pipe(skipWhile(json => json === this._record))
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(json => {
            this._record = json;
            // emit the change as plain JS object
            this.lastEmittedRecord = json.toJS();
            this.recordChange.emit(this.lastEmittedRecord);
        });
        // list for all changes on jsonPatches
        this.jsonStoreService.jsonPatches$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(patches => {
            this.jsonPatchesChange.emit(patches);
        });
        this.problemsService.internalProblemMap$
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(internalProblemMap => {
            this.validationProblems.emit(internalProblemMap);
        });
    }
    ngOnChanges(changes) {
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
            console.warn(`[config] is undefined, make sure that is intended.`);
        }
        const recordChanged = changes['record'] && this.record !== this.lastEmittedRecord;
        const schemaChanged = changes['schema'] || changes['config'];
        if (schemaChanged) {
            this.fixedSchema = this.schemaFixerService.fixSchema(this.schema, this.config.schemaOptions);
            this.jsonSchemaService.setSchema(this.fixedSchema);
        }
        if (schemaChanged || recordChanged) {
            this.record = this.recordFixerService.fixRecord(this.record, this.fixedSchema);
            this.lastEmittedRecord = this.record;
            this._record = fromJS(this.record);
            this.jsonStoreService.setJson(this._record);
            this.keysStoreService.buildKeysMap(this._record, this.fixedSchema);
        }
        if (changes['config']) {
            this.appGlobalsService.config = this.config;
            if (this.config.tabsConfig) {
                this.tabNames = this.tabsUtilService.getTabNames(this.config.tabsConfig);
                this.tabsUtilService.activeTabName$.subscribe(tabName => { this.appGlobalsService.activeTabName = tabName; });
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
    }
    throwInputUndefined(inputName) {
        throw new Error(`[${inputName}] is undefined!
      if you are fetching ${inputName} async then please consider using:
        <json-editor *ngIf="${inputName}" [${inputName}]="${inputName}" ...> </json-editor>
      in order to wait for it to be fetched before initializing json-editor`);
    }
    /**
     * Converts PreviewConfig instances to Preview instances and appends to `previews` array.
     */
    extractPreviews() {
        if (!this.isPreviewerDisabled) {
            // if url is not set directly, populate it
            this.previews = [];
            this.config.previews
                .forEach(previewConfig => {
                let url;
                if (previewConfig.url) {
                    url = previewConfig.url;
                }
                else if (previewConfig.getUrl) {
                    url = previewConfig.getUrl(this.record);
                }
                else if (previewConfig.urlPath) {
                    try {
                        url = this.jsonUtilService.getValueInPath(this.record, previewConfig.urlPath);
                    }
                    catch (error) {
                        console.warn(`Path ${previewConfig.urlPath} in preview config is not present in the input record`);
                    }
                }
                else {
                    throw new Error('Either url, urlPath or getUrl should be set for a preview');
                }
                if (url) {
                    this.previews.push({
                        name: previewConfig.name,
                        type: previewConfig.type,
                        url: url
                    });
                }
            });
        }
    }
    get keys$() {
        return this.keysStoreService.forPath(this.pathString);
    }
    get isPreviewerDisabled() {
        return (this.config.previews === undefined || this.config.previews.length === 0);
    }
    set activeTabName(tabName) {
        this.appGlobalsService.activeTabName = tabName;
    }
    isActiveTab(tabName) {
        return this.appGlobalsService.activeTabName === tabName;
    }
    get shorterEditorContainerClass() {
        return this.isBottomConsoleOpen ? 'shorter-editor-container' : '';
    }
    openBottomConsole(tabName) {
        this.isBottomConsoleOpen = true;
        this.bottomConsoleActiveTab = tabName;
    }
    trackByElement(index, element) {
        return element;
    }
}
JsonEditorComponent.ɵfac = function JsonEditorComponent_Factory(t) { return new (t || JsonEditorComponent)(ɵɵdirectiveInject(AppGlobalsService), ɵɵdirectiveInject(ProblemsService), ɵɵdirectiveInject(JsonStoreService), ɵɵdirectiveInject(JsonUtilService), ɵɵdirectiveInject(JsonSchemaService), ɵɵdirectiveInject(KeysStoreService), ɵɵdirectiveInject(RecordFixerService), ɵɵdirectiveInject(SchemaFixerService), ɵɵdirectiveInject(TabsUtilService), ɵɵdirectiveInject(PathUtilService)); };
JsonEditorComponent.ɵcmp = ɵɵdefineComponent({ type: JsonEditorComponent, selectors: [["json-editor"]], inputs: { config: "config", record: "record", schema: "schema", problemMap: "problemMap", jsonPatches: "jsonPatches", templates: "templates" }, outputs: { recordChange: "recordChange", jsonPatchesChange: "jsonPatchesChange", validationProblems: "validationProblems" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 10, vars: 13, consts: [["id", "ng2-json-editor", 1, "editor-container", 3, "ngClass"], ["class", "collapsed-menu-container", 4, "ngIf"], ["class", "menu-container", 3, "ngClass", 4, "ngIf"], ["id", "middle-main-container", 1, "middle", "main-container", 3, "shortcuts", "ngClass"], [3, "fields", "pathString", "schema", 4, "ngIf"], [4, "ngIf"], [3, "value", "schema", "keys", "pathString", 4, "ngIf"], ["id", "right-main-container", "class", "main-container right", 3, "ngClass", 4, "ngIf"], [3, "activeTab", "isOpen", "onCollapse", 4, "ngIf"], [1, "collapsed-menu-container"], [1, "add-field-button", 3, "fields", "pathString", "schema"], ["tooltip", "Add Field", "placement", "right", 1, "fa", "fa-plus", "fa-2x"], ["id", "preview-toggle-icon", "placement", "right", 1, "preview-icon", 3, "tooltip", "click"], [1, "fa", "fa-1x", 3, "ngClass"], [3, "badgeClick"], [1, "open-sidebar-container", 3, "click"], [1, "fa", "fa-angle-right", "fa-4x"], [1, "menu-container", 3, "ngClass"], [3, "record", "schema"], ["class", "admin-mode", "tooltip", "Allows editing all fields (use with care)", 4, "ngIf"], ["tooltip", "Allows editing all fields (use with care)", 1, "admin-mode"], ["id", "admin-mode-checkbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "admin-mode-checkbox", 1, "admin-mode"], [3, "fields", "pathString", "schema"], [3, "heading", "active", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "heading", "active", "select"], [3, "value", "tabName", "schema", "keys", "pathString"], [3, "value", "schema", "keys", "pathString"], ["id", "right-main-container", 1, "main-container", "right", 3, "ngClass"], [3, "hidden", "previews"], [3, "activeTab", "isOpen", "onCollapse"]], template: function JsonEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, JsonEditorComponent_div_1_Template, 9, 9, "div", 1);
        ɵɵtemplate(2, JsonEditorComponent_div_2_Template, 5, 4, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, JsonEditorComponent_add_field_dropdown_4_Template, 3, 5, "add-field-dropdown", 4);
        ɵɵtemplate(5, JsonEditorComponent_tabset_5_Template, 2, 2, "tabset", 5);
        ɵɵtemplate(6, JsonEditorComponent_sub_record_6_Template, 2, 6, "sub-record", 6);
        ɵɵelementEnd();
        ɵɵtemplate(7, JsonEditorComponent_div_7_Template, 2, 3, "div", 7);
        ɵɵelementEnd();
        ɵɵtemplate(8, JsonEditorComponent_bottom_console_8_Template, 1, 2, "bottom-console", 8);
        ɵɵelement(9, "modal-view");
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.shorterEditorContainerClass);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.config.compact);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.config.compact);
        ɵɵadvance(1);
        ɵɵproperty("shortcuts", ctx.customShortcutKeys)("ngClass", ɵɵpureFunction2(10, _c0$c, ctx.isPreviewerHidden, ctx.config.compact));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.config.compact);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.config.tabsConfig);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.config.tabsConfig);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isPreviewerDisabled);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.config.compact);
    } }, directives: [NgClass, NgIf, ShortcutsDirective, ModalViewComponent, AddFieldDropdownComponent, TooltipDirective, BottomConsoleBadgesComponent, TreeMenuComponent, CheckboxControlValueAccessor, NgControlStatus, NgModel, TabsetComponent, NgForOf, TabDirective, SubRecordComponent, EditorPreviewerComponent, BottomConsoleComponent], pipes: [AsyncPipe], styles: ["body,html{background-color:#ecf0f1;height:100%;overflow-x:hidden}.editor-container{display:flex;flex-direction:row;height:100%;width:100%}.editor-container,.editor-container .row{margin-left:0;margin-right:0}.bs-tooltip-right{width:120px!important}.shorter-editor-container{height:75%}#ng2-json-editor .dropdown-menu{max-height:400px;overflow-y:auto}#ng2-json-editor .hidden{display:none}#ng2-json-editor th{background-color:#ecf0f1;color:#8e8e8e;font-weight:400;font-weight:700;padding:1px 0 1px 6px}#ng2-json-editor th .dropdown-filter-container{font-weight:400}#ng2-json-editor td{background-color:#f9f9f9;border:none;padding:0}#ng2-json-editor td>*{vertical-align:middle}#ng2-json-editor td.label-holder{background-color:#dae8ef;border-top:1px solid #bdc3c7;padding:3px;white-space:nowrap;width:1%}#ng2-json-editor td.label-holder button{color:#595959}#ng2-json-editor td.error,#ng2-json-editor tr.error td{background-color:#e74c3c!important;color:#fff;transition:all .4s}#ng2-json-editor tbody{border:none}#ng2-json-editor table{margin-bottom:0!important}#ng2-json-editor .main-container.compact{border-left:none}#ng2-json-editor .main-container{border-left:1px solid #a5adb5;font-size:13px;height:100%;overflow:auto}#ng2-json-editor .main-container .tab-container>.nav-tabs{font-size:14px}#ng2-json-editor .main-container>add-field-dropdown div.dropdown{width:100vh}#ng2-json-editor .main-container>add-field-dropdown ul.dropdown-menu{padding-bottom:15px;right:0}#ng2-json-editor .main-container>add-field-dropdown button.btn-add-field-dropdown{background:#fff;font-size:16px;line-height:normal;opacity:.9;padding:5px;width:100%}#ng2-json-editor .main-container>add-field-dropdown button.btn-add-field-dropdown:hover{color:#000;opacity:1}#ng2-json-editor .add-field-dropdown-container{width:100%}#ng2-json-editor .middle.main-container{padding:0}#ng2-json-editor .menu-container{background-color:#2c3e50;display:flex;flex-direction:column;height:100%;justify-content:space-between;opacity:0;overflow-x:hidden;transition:width .1s ease-in;visibility:hidden;width:0}#ng2-json-editor .menu-container div.dropdown{width:100vh}#ng2-json-editor .menu-container ul.dropdown-menu{padding-bottom:15px;right:0}#ng2-json-editor .menu-container button.btn-add-field-dropdown{background:#fff;font-size:16px;line-height:normal;opacity:.9;padding:5px;width:100%}#ng2-json-editor .menu-container button.btn-add-field-dropdown:hover{color:#000;opacity:1}#ng2-json-editor .menu-container.open{opacity:1;padding-left:5px;visibility:visible;width:280px}#ng2-json-editor .collapsed-menu-container{align-items:center;background-color:#1d2d3d;display:flex;flex:0 0 50px;flex-direction:column;height:100%;justify-content:flex-end;position:relative}#ng2-json-editor .collapsed-menu-container .add-field-button{cursor:pointer;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin-bottom:25px;position:absolute;top:0;width:100%}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown{background-color:transparent;display:flex;justify-content:center;margin-top:10px;opacity:1;width:100%}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:active,#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:focus,#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown:hover{outline:none}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown i{color:#ddd}#ng2-json-editor .collapsed-menu-container .add-field-button .btn-add-field-dropdown i:hover{color:#fff}#ng2-json-editor .collapsed-menu-container .preview-icon{align-items:center;border:2px solid #ddd;border-radius:20%;cursor:pointer;display:flex;flex-direction:column;height:30px;justify-content:center;width:30px}#ng2-json-editor .collapsed-menu-container .preview-icon .fa{color:#ddd}#ng2-json-editor .collapsed-menu-container .preview-icon .fa:hover{color:#fff}#ng2-json-editor .collapsed-menu-container .open-sidebar-container{border-right:2px solid #283948;border-top:2px solid #283948;color:#ddd;cursor:pointer;display:flex;justify-content:center;margin-top:20px;width:100%}#ng2-json-editor .collapsed-menu-container .open-sidebar-container:hover{color:#fff;text-shadow:3px 3px 14px #2a5d88}#ng2-json-editor .collapsed-menu-container .open-sidebar-container .fa-angle-right{-ms-transition:all .5s ease-in-out;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}#ng2-json-editor .collapsed-menu-container .open-sidebar-container .fa-angle-right.rotate{-ms-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}#ng2-json-editor .middle.main-container{flex-basis:60%}#ng2-json-editor .middle.main-container.maximizeEditor{flex-grow:2}#ng2-json-editor .right.main-container{flex-basis:40%;flex-shrink:0}#ng2-json-editor .right.main-container.minimizePreview{flex-basis:0%}#ng2-json-editor .right.main-container .btn-toggle{position:fixed;right:0}#ng2-json-editor .editor-btn-delete{background:transparent;border:0;font-weight:700;line-height:1;opacity:.2;padding:0 0 3px 3px;text-shadow:0 1px 0 #fff}#ng2-json-editor .editor-btn-delete:hover{color:red;opacity:.6}#ng2-json-editor .editor-btn-delete.editor-btn-delete-text{font-size:13px;opacity:.5;padding:0}#ng2-json-editor .custom-title-dropdown-item button{background:transparent;border:0;font-size:13px;font-weight:700;line-height:1;opacity:.2;opacity:.5;padding:0;text-shadow:0 1px 0 #fff}#ng2-json-editor .custom-title-dropdown-item button:hover{color:#337ab7;opacity:.6}#ng2-json-editor .editor-btn-move-down{padding-bottom:0}#ng2-json-editor .editor-btn-move-down,#ng2-json-editor .editor-btn-move-up{background:transparent;border:0;font-size:11px;opacity:.2;padding:0}#ng2-json-editor .editor-btn-move-down:hover,#ng2-json-editor .editor-btn-move-up:hover{opacity:.6}#ng2-json-editor ul.pagination-top{margin:-16px 0 0}#ng2-json-editor td.button-holder,#ng2-json-editor th.button-holder{text-align:center;vertical-align:middle;width:40.33px}#ng2-json-editor td.button-holder.sortable,#ng2-json-editor th.button-holder.sortable{width:46px}#ng2-json-editor th.button-holder .add-field-dropdown-container{width:100%}#ng2-json-editor th.button-holder .btn-add-field-dropdown{float:right}#ng2-json-editor label{color:#c1c1c1}#ng2-json-editor .highlight{border:2px solid #ff0!important}#ng2-json-editor table.editable-inner-table{table-layout:fixed}#ng2-json-editor table.editable-inner-table>tbody>tr{border-bottom:1px solid #fff!important}#ng2-json-editor table.editable-inner-table add-new-element-button .button-container{padding-left:6px}#ng2-json-editor table.editable-inner-table label{display:inline;font-weight:400;padding-left:5px}#ng2-json-editor table.editable-inner-table .dropdown-menu{left:inherit;min-width:100px;right:0}#ng2-json-editor .title-dropdown-item button{padding-left:20px!important;padding-right:20px!important;text-align:left;width:100%}#ng2-json-editor .title-dropdown-item:hover{background:#f5f5f5}#ng2-json-editor .tooltip.top .tooltip-arrow{border-top-color:transparent}#ng2-json-editor .tooltip{width:90%}#ng2-json-editor button.btn-toggle{float:right;margin-right:5px;margin-top:5px}#ng2-json-editor .autocomplete-container .dropdown{left:0!important;position:relative!important;top:0!important}#ng2-json-editor div.admin-mode{padding-top:8px;width:100%}#ng2-json-editor label.admin-mode{color:#e0dfdf;font-size:13px;font-weight:400;padding-left:4px;width:90%}#ng2-json-editor hr{border-top:1px solid #757575;margin-bottom:5px;margin-top:5px}#ng2-json-editor .btn.btn-success{background-color:#16a085;border-color:#16a085;color:#fff}#ng2-json-editor .btn.btn-success:active,#ng2-json-editor .btn.btn-success:focus,#ng2-json-editor .btn.btn-success:hover{background-color:#19b698!important;color:#fff}#ng2-json-editor .btn .fa{margin-right:2px}#ng2-json-editor .nav{margin-bottom:3px}#ng2-json-editor .nav-tabs>li.active>a,#ng2-json-editor .nav-tabs>li.active>a:focus,#ng2-json-editor .nav-tabs>li.active>a:hover{background-color:#fff;border-top:1px solid #2c3e50}#ng2-json-editor .nav-tabs>li>a:hover{border:1px solid transparent;border-top-color:#2c3e50;transition:all .4s}#ng2-json-editor .nav.nav-tabs{border-bottom:5px solid #fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.24)}#ng2-json-editor .nav-tabs>li>a{border-radius:0;border-right:1px solid #e0e2e2;margin-right:0}#ng2-json-editor .disabled{cursor:not-allowed}#ng2-json-editor .disabled div{pointer-events:none}#ng2-json-editor .disabled div a,#ng2-json-editor .disabled div button,#ng2-json-editor .disabled div i,#ng2-json-editor .disabled div input,#ng2-json-editor .disabled div string-input>div{opacity:.5}#ng2-json-editor .disabled button{pointer-events:none}#ng2-json-editor .pagination>.active>a{background-color:#31617b;border-color:#31617b}#ng2-json-editor .btn.btn-switch{background-color:#7da0b3}#ng2-json-editor .btn.btn-switch.active{background-color:#31617b}.bottom-console-container{height:25%;overflow:hidden}.bottom-console-container .tab-content{height:90%;overflow:scroll}.red-left-border{border-left:9px solid #e74c3c!important}.max-height-90-vh{max-height:90vh}.max-height-70-vh{max-height:70vh}complex-list-field add-field-dropdown{display:none}.nav-tabs{background:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:1}typeahead-container a[href=\"#\"]{padding:0!important}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonEditorComponent, [{
        type: Component,
        args: [{
                selector: 'json-editor',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    './json-editor.component.scss'
                ],
                templateUrl: './json-editor.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AppGlobalsService }, { type: ProblemsService }, { type: JsonStoreService }, { type: JsonUtilService }, { type: JsonSchemaService }, { type: KeysStoreService }, { type: RecordFixerService }, { type: SchemaFixerService }, { type: TabsUtilService }, { type: PathUtilService }]; }, { config: [{
            type: Input
        }], record: [{
            type: Input
        }], schema: [{
            type: Input
        }], problemMap: [{
            type: Input
        }], jsonPatches: [{
            type: Input
        }], templates: [{
            type: Input
        }], recordChange: [{
            type: Output
        }], jsonPatchesChange: [{
            type: Output
        }], validationProblems: [{
            type: Output
        }] }); })();

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
class LastPathElementPipe {
    constructor(pathUtilService) {
        this.pathUtilService = pathUtilService;
    }
    transform(path) {
        return path
            .substring(path.lastIndexOf('/') + 1);
    }
}
LastPathElementPipe.ɵfac = function LastPathElementPipe_Factory(t) { return new (t || LastPathElementPipe)(ɵɵdirectiveInject(PathUtilService)); };
LastPathElementPipe.ɵpipe = ɵɵdefinePipe({ name: "lastPathElement", type: LastPathElementPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LastPathElementPipe, [{
        type: Pipe,
        args: [{
                name: 'lastPathElement'
            }]
    }], function () { return [{ type: PathUtilService }]; }, null); })();

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
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 10);
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "lastPathElement");
    ɵɵelementEnd();
} if (rf & 2) {
    const path_r2 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, path_r2));
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "a", 12);
    ɵɵlistener("click", function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template_a_click_1_listener() { ɵɵrestoreView(_r13); const key_r10 = ctx.$implicit; const path_r2 = ɵɵnextContext(2).$implicit; const ctx_r11 = ɵɵnextContext(2); return ctx_r11.onFieldSelect(path_r2, key_r10); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const key_r10 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(key_r10);
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_1_Template, 1, 0, "li", 8);
    ɵɵtemplate(2, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_2_Template, 3, 3, "li", 9);
    ɵɵtemplate(3, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_li_3_Template, 3, 1, "li", 6);
    ɵɵpipe(4, "sortAlphabetically");
    ɵɵelementEnd();
} if (rf & 2) {
    const addableKeys_r5 = ctx.$implicit;
    const isFirst_r3 = ɵɵnextContext().first;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !isFirst_r3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !isFirst_r3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 3, addableKeys_r5));
} }
function AddNestedFieldDropdownComponent_ul_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_div_1_Template, 5, 5, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const path_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.addableKeysForPath(path_r2));
} }
function AddNestedFieldDropdownComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 5);
    ɵɵtemplate(1, AddNestedFieldDropdownComponent_ul_4_div_1_Template, 2, 1, "div", 6);
    ɵɵpipe(2, "sortAlphabetically");
    ɵɵpipe(3, "keys");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ɵɵpipeBind1(3, 3, ctx_r0.nestedKeysMap)));
} }
class AddNestedFieldDropdownComponent extends AbstractSubscriberComponent {
    constructor(keysStoreService, jsonSchemaService, pathUtilService, domUtilService) {
        super();
        this.keysStoreService = keysStoreService;
        this.jsonSchemaService = jsonSchemaService;
        this.pathUtilService = pathUtilService;
        this.domUtilService = domUtilService;
    }
    ngOnChanges(changes) {
        const pathStringChange = changes['pathString'];
        if (pathStringChange) {
            this.nestedKeysMap = {};
            this.nestedKeysMap[this.pathString] = this.keysStoreService.keysMap[this.pathString];
            const nestedPathPrefix = this.pathString + this.pathUtilService.separator;
            Object.keys(this.keysStoreService.keysMap)
                .filter(path => path.startsWith(nestedPathPrefix))
                .forEach(path => {
                this.nestedKeysMap[path] = this.keysStoreService.keysMap[path];
            });
            if (this.keysChangeSubscription) {
                this.keysChangeSubscription.unsubscribe();
            }
            this.keysChangeSubscription = this.keysStoreService.onKeysChange
                .pipe(filter(change => change.path.startsWith(this.pathString)))
                .pipe(takeUntil(this.isDestroyed))
                .subscribe(change => { this.nestedKeysMap[change.path] = change.keys; });
        }
    }
    /**
     * Return keys that could be added for the given path.
     *
     * @return schema key - hidden keys - existing keys
     */
    addableKeysForPath(path) {
        const keys = this.nestedKeysMap[path];
        const schema = this.jsonSchemaService.forPathString(path);
        // || schema.items.properties is to handle the keys when the path belongs to table-list.
        const schemaProps = schema.properties || schema.items.properties;
        const schemaKeys = Set$1(Object.keys(schemaProps)
            .filter(key => !schemaProps[key].hidden));
        const addableKeys = schemaKeys.subtract(keys);
        return addableKeys.size > 0 ? addableKeys : undefined;
    }
    onFieldSelect(path, key) {
        let schema = this.jsonSchemaService.forPathString(path);
        if (schema.componentType === 'table-list') {
            schema = schema.items;
        }
        const newKeyPath = this.keysStoreService.addKey(path, key, schema);
        if (this.keysStoreService.keysMap[newKeyPath]) {
            this.nestedKeysMap[newKeyPath] = this.keysStoreService.keysMap[newKeyPath];
        }
        this.domUtilService.focusAndSelectFirstEditableChildById(newKeyPath);
    }
}
AddNestedFieldDropdownComponent.ɵfac = function AddNestedFieldDropdownComponent_Factory(t) { return new (t || AddNestedFieldDropdownComponent)(ɵɵdirectiveInject(KeysStoreService), ɵɵdirectiveInject(JsonSchemaService), ɵɵdirectiveInject(PathUtilService), ɵɵdirectiveInject(DomUtilService)); };
AddNestedFieldDropdownComponent.ɵcmp = ɵɵdefineComponent({ type: AddNestedFieldDropdownComponent, selectors: [["add-nested-field-dropdown"]], inputs: { schema: "schema", pathString: "pathString", isDisabled: "isDisabled" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["dropdown", "", "keyboardNav", "true", 1, "btn-group", "add-field-dropdown-container", 3, "isDisabled"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-add-field-dropdown"], [1, "fa", "fa-plus"], [1, "fa", "fa-caret-down"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "divider dropdown-divider", 4, "ngIf"], ["class", "dropdown-header title", 4, "ngIf"], [1, "divider", "dropdown-divider"], [1, "dropdown-header", "title"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]], template: function AddNestedFieldDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵelement(2, "i", 2);
        ɵɵelement(3, "i", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, AddNestedFieldDropdownComponent_ul_4_Template, 4, 5, "ul", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("isDisabled", ctx.isDisabled);
    } }, directives: [BsDropdownDirective, BsDropdownToggleDirective, BsDropdownMenuDirective, NgForOf, NgIf], pipes: [SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe], styles: [".btn-add-field-dropdown[_ngcontent-%COMP%]{background:transparent;border:0;color:#2f4f4f;float:left;font-size:11px;font-weight:700;line-height:1;margin-bottom:2px;opacity:.4;padding:0 3px;text-shadow:0 1px 0 #fff}.btn-add-field-dropdown[_ngcontent-%COMP%]:hover{color:#00f;opacity:.6}.dropdown-filter-container[_ngcontent-%COMP%]{padding:0 3px}.dropdown-filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}", ".dropdown-header.title[_ngcontent-%COMP%]{font-size:13.5px;font-weight:700;padding-left:10px}.dropdown-divider[_ngcontent-%COMP%]{margin:4px 0}.dropdown-menu[_ngcontent-%COMP%]{left:auto;right:0}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]{clear:both;color:#333;display:block;font-weight:400;line-height:1.42857;padding:3px 20px;white-space:nowrap}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5;color:#262626;text-decoration:none}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddNestedFieldDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'add-nested-field-dropdown',
                styleUrls: [
                    './add-field-dropdown.component.scss',
                    './add-nested-field-dropdown.component.scss'
                ],
                templateUrl: './add-nested-field-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: KeysStoreService }, { type: JsonSchemaService }, { type: PathUtilService }, { type: DomUtilService }]; }, { schema: [{
            type: Input
        }], pathString: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] }); })();

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
class DifferentKeysPipe {
    transform(object, keys) {
        return Set$1.fromKeys(object).subtract(keys);
    }
}
DifferentKeysPipe.ɵfac = function DifferentKeysPipe_Factory(t) { return new (t || DifferentKeysPipe)(); };
DifferentKeysPipe.ɵpipe = ɵɵdefinePipe({ name: "differentKeys", type: DifferentKeysPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DifferentKeysPipe, [{
        type: Pipe,
        args: [{
                name: 'differentKeys'
            }]
    }], null, null); })();

const SHARED_PIPES = [
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

const SHARED_DIRECTIVES = [
    ShortcutsDirective,
    ContentModelDirective
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
class JsonEditorModule {
}
JsonEditorModule.ɵmod = ɵɵdefineNgModule({ type: JsonEditorModule });
JsonEditorModule.ɵinj = ɵɵdefineInjector({ factory: function JsonEditorModule_Factory(t) { return new (t || JsonEditorModule)(); }, providers: SHARED_SERVICES, imports: [[
            TooltipModule.forRoot(),
            CollapseModule.forRoot(),
            PopoverModule.forRoot(),
            BsDropdownModule.forRoot(),
            PaginationModule.forRoot(),
            ModalModule.forRoot(),
            TabsModule.forRoot(),
            TypeaheadModule.forRoot(),
            CommonModule,
            FormsModule,
            HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(JsonEditorModule, { declarations: [AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
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
        AddOrReplacePatchComponent], imports: [TooltipModule, CollapseModule, PopoverModule, BsDropdownModule, PaginationModule, ModalModule, TabsModule, TypeaheadModule, CommonModule,
        FormsModule,
        HttpClientModule], exports: [JsonEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ...SHARED_PIPES,
                    ...SHARED_DIRECTIVES,
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
                ],
                exports: [JsonEditorComponent],
                imports: [
                    TooltipModule.forRoot(),
                    CollapseModule.forRoot(),
                    PopoverModule.forRoot(),
                    BsDropdownModule.forRoot(),
                    PaginationModule.forRoot(),
                    ModalModule.forRoot(),
                    TabsModule.forRoot(),
                    TypeaheadModule.forRoot(),
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                providers: SHARED_SERVICES
            }]
    }], null, null); })();
ɵɵsetComponentScope(ObjectFieldComponent, [TooltipDirective, CollapseDirective, PopoverDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, PagerComponent, PaginationComponent, ModalBackdropComponent, ModalDirective, TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective, TypeaheadContainerComponent, TypeaheadDirective, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
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
    AddOrReplacePatchComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe]);
ɵɵsetComponentScope(PrimitiveListFieldComponent, [TooltipDirective, CollapseDirective, PopoverDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, PagerComponent, PaginationComponent, ModalBackdropComponent, ModalDirective, TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective, TypeaheadContainerComponent, TypeaheadDirective, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
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
    AddOrReplacePatchComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe]);
ɵɵsetComponentScope(TableItemFieldComponent, [TooltipDirective, CollapseDirective, PopoverDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, PagerComponent, PaginationComponent, ModalBackdropComponent, ModalDirective, TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective, TypeaheadContainerComponent, TypeaheadDirective, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, ShortcutsDirective, ContentModelDirective, AddFieldDropdownComponent,
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
    AddOrReplacePatchComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, AddAlwaysShowFieldsPipe, DifferentKeysPipe, FilterByExpressionPipe, FilterHiddenFieldsPipe, SanitizeUrlPipe, SelfOrEmptyPipe, UnderscoreToSpacePipe, SetFirstElementPathPipe, SortAlphabeticallyPipe, KeysPipe, LastPathElementPipe, TypeOfPipe, SortKeysBySchemaPipe]);

/*
 * Public API Surface of json-editor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddFieldDropdownComponent, AddNestedFieldDropdownComponent, AddNewElementButtonComponent, AddOrReplacePatchComponent, AnyTypeFieldComponent, AutocompleteInputComponent, BottomConsoleBadgesComponent, BottomConsoleComponent, ComplexListFieldComponent, EditorPreviewerComponent, FindReplaceComponent, HtmlViewComponent, JsonEditorComponent, JsonEditorModule, ListActionGroupComponent, ModalViewComponent, ObjectFieldComponent, PatchActionsComponent, PatchesConsoleTabComponent, PrimitiveFieldComponent, PrimitiveListFieldComponent, ProblemsConsoleTabComponent, RefFieldComponent, SearchableDropdownComponent, StringInputComponent, SubRecordComponent, TableItemFieldComponent, TableListFieldComponent, TextDiffComponent, TitleDropdownComponent, TreeMenuComponent, TreeMenuItemComponent };
//# sourceMappingURL=json-editor.js.map
