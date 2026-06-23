/**
 * @format
 * @author luca.piciollo
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as i0 from "@angular/core";
export declare const YEAR_MODE_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare class DateYearComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    private _minDateToken;
    private _maxDateToken;
    get minDate(): Moment | null;
    get maxDate(): Moment | null;
    constructor(injector: Injector, element: ElementRef);
    ngAfterViewInit(): void;
    get currentYear(): number;
    get minYear(): number;
    get maxYear(): number;
    prevYear(): void;
    nextYear(): void;
    private _setYear;
    openedStream(): void;
    closedStream(): void;
    _yearSelectedHandler(chosenDate: Moment, datepicker: MatDatepicker<Moment>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateYearComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateYearComponent, "app-year", never, {}, {}, never, never, false, never>;
}
