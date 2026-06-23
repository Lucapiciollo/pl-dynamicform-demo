/**
 * Injection tokens separati per evitare cicli di import tra BaseComponent e PlDynamicFormModule
 */
import { InjectionToken } from '@angular/core';
export declare const DATE_PIPE: InjectionToken<any>;
export declare const DATE_PIPE_TIME: InjectionToken<any>;
export declare const COMBO_PAING_INIT: InjectionToken<{
    count: number;
    page: number;
}>;
export declare const MAX_ELEMENT_COMBO_SHOW: InjectionToken<{
    maxElementShow: number;
}>;
export declare const MAX_DATE_CALENDAR: InjectionToken<string>;
export declare const MIN_DATE_CALENDAR: InjectionToken<string>;
