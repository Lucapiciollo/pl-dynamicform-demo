/**
 * @format
 * @author luca.piciollo
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import { MatInput } from '@angular/material/input';
import * as i0 from "@angular/core";
export declare class DateComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    private _minDateToken;
    private _maxDateToken;
    get minDate(): string | null;
    get maxDate(): string | null;
    constructor(injector: Injector, element: ElementRef);
    openedStream(event: unknown, datainput: MatInput): void;
    closedStream(event: unknown): void;
    stopOutFocus(datainput: MatInput): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateComponent, "app-date", never, {}, {}, never, never, false, never>;
}
