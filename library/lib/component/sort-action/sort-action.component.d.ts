/** @format */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
type SortDirection = 'ASC' | 'DESC';
export declare class SortActionComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    constructor(injector: Injector, element: ElementRef);
    getSortValue(): SortDirection;
    getToggleIcon(): string | null;
    toggleSort(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortActionComponent, "app-sort-action", never, {}, {}, never, never, false, never>;
}
export {};
