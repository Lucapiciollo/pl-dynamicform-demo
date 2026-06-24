import { ElementRef, Injector, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class DateTimeComponent extends BaseComponent implements OnInit {
    protected injector: Injector;
    protected element: ElementRef;
    readonly dateCtrl: FormControl<Date>;
    readonly timeOptions: import("@angular/core").WritableSignal<{
        id: string;
        description: string;
    }[]>;
    selectedTime: string | null;
    private _minDateToken;
    private _maxDateToken;
    get minDate(): string | null;
    get maxDate(): string | null;
    constructor(injector: Injector, element: ElementRef);
    ngOnInit(): void;
    onDateChange(): void;
    onTimeChange(time: string): void;
    private updateExternalControl;
    onOpenedChange(isOpened: boolean): void;
    private buildTimeIntervals;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateTimeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateTimeComponent, "app-date-time", never, {}, {}, never, never, false, never>;
}
