/**
 * @format
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class InputTimeComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    constructor(injector: Injector, element: ElementRef);
    ngAfterViewInit(): void;
    onOpenedChange(opened: boolean): void;
    getOptions(): Array<{
        id: string;
        description: string;
    }>;
    private setOptions;
    getTimeIntervals(interval?: number, format?: string): Array<{
        id: string;
        description: string;
    }>;
    isHourVisible(hour: {
        id: string;
        description: string;
    }): boolean;
    private timeToNumber;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTimeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTimeComponent, "app-input-time", never, {}, {}, never, never, false, never>;
}
