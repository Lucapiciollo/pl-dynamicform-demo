/**
 * Injection tokens separati per evitare cicli di import tra BaseComponent e PlDynamicFormModule
 */
import { InjectionToken } from '@angular/core';
import { ErrorMessageConfig } from '../component/error-message-utils';
export declare const DATE_PIPE: InjectionToken<any>;
export declare const DATE_PIPE_TIME: InjectionToken<any>;
export declare const COMBO_PAGING_INIT: InjectionToken<{
    count: number;
    page: number;
}>;
/** @deprecated Refuso storico: usare `COMBO_PAGING_INIT`. Mantiene la stessa identità del token. */
export declare const COMBO_PAING_INIT: InjectionToken<{
    count: number;
    page: number;
}>;
export declare const COUNT_PAGINATOR: InjectionToken<{
    count: number;
}>;
export declare const RANGE_COUNT_PAGINATOR: InjectionToken<number[]>;
export declare const MAX_ELEMENT_COMBO_SHOW: InjectionToken<{
    maxElementShow: number;
}>;
export declare const MAX_DATE_CALENDAR: InjectionToken<string>;
export declare const MIN_DATE_CALENDAR: InjectionToken<string>;
/**
 * Token opzionale per configurare i messaggi di errore dei form.
 * Se non fornito, vengono usati i messaggi di default della libreria.
 * Passare un Record<string, string> con chiavi dei validator Angular e messaggi custom.
 * Esempio: { required: 'Obbligatorio', min: 'Min {0}', myCustomValidator: 'Messaggio custom' }
 */
export declare const ERROR_MESSAGE_CONFIG: InjectionToken<ErrorMessageConfig>;
