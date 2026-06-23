/** @format */
import { ElementRef, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class DateRangeComponent extends BaseComponent implements OnInit {
    protected injector: Injector;
    protected element: ElementRef;
    constructor(injector: Injector, element: ElementRef);
    ngOnInit(): void;
    private ensureDateRangeControl;
    openedStream(event: unknown): void;
    closedStream(event: unknown): void;
    applyRange(): void;
    stopOutFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangeComponent, "app-date-range", never, {}, {}, never, never, false, never>;
}
