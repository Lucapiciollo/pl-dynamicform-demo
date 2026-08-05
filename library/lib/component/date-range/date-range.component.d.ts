/** @format */
import { ElementRef, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import { DateRangePeriodMode, DateRangeStyle } from '../../dynamic-form.interface';
import * as i0 from "@angular/core";
/** Rappresenta un singolo periodo selezionabile nella card UI. */
export interface DateRangePeriod {
    label: string;
    sublabel: string;
    from: Date;
    to: Date;
}
export declare class DateRangeComponent extends BaseComponent implements OnInit {
    protected injector: Injector;
    protected element: ElementRef;
    private _minDateToken;
    private _maxDateToken;
    readonly currentMonth: import("@angular/core").WritableSignal<Date>;
    readonly periods: import("@angular/core").WritableSignal<DateRangePeriod[]>;
    readonly selectedPeriod: import("@angular/core").WritableSignal<DateRangePeriod>;
    readonly panelOpen: import("@angular/core").WritableSignal<boolean>;
    readonly DateRangeStyle: typeof DateRangeStyle;
    get isCardMode(): boolean;
    get periodMode(): DateRangePeriodMode | undefined;
    get minDate(): string | null;
    get maxDate(): string | null;
    get selectedPeriodLabel(): string;
    private fmt;
    get currentMonthLabel(): string;
    constructor(injector: Injector, element: ElementRef);
    ngOnInit(): void;
    openPanel(): void;
    closePanel(): void;
    onDocumentClick(event: MouseEvent): void;
    prevMonth(): void;
    nextMonth(): void;
    selectPeriod(period: DateRangePeriod): void;
    isSelectedPeriod(period: DateRangePeriod): boolean;
    private buildPeriods;
    private ensureDateRangeControl;
    openedStream(event: unknown): void;
    closedStream(event: unknown): void;
    applyRange(): void;
    stopOutFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangeComponent, "app-date-range", never, {}, {}, never, never, false, never>;
}
