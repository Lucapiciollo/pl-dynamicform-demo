/** @format */
import { FormControl, FormGroup } from '@angular/forms';
/**
 * @author luca.piciollo
 * Messaggi di errore default per la validazione dei form.
 * Possono essere sovrascritti dall'applicazione via ERROR_MESSAGE_CONFIG injection token.
 */
/** Tipo per il dizionario messaggi di errore. */
export type ErrorMessageConfig = Record<string, string>;
/**
 * Inizializza il registro dei messaggi di errore con la configurazione fornita dall'applicazione.
 * Da chiamare nel costruttore di PlDynamicFormModule dopo aver ricevuto ERROR_MESSAGE_CONFIG.
 * Le chiavi non presenti nella configurazione custom manterranno il valore di default.
 */
export declare function setErrorMessages(config: ErrorMessageConfig): void;
/** Legge il dizionario attivo dei messaggi di errore (default + override app). */
export declare function getErrorMessages(): ErrorMessageConfig;
/************************************************************************************************************************************************************* */
export declare function GetErrorForm(formGroup: FormGroup, formName: string): Array<string>;
/************************************************************************************************************************************************************* */
export declare function GetErrorFormControl(formControl: FormControl): Array<string>;
/************************************************************************************************************************************************************* */
export declare function GetErrorFormControlFromObj(objErrors: Object): Array<string>;
/************************************************************************************************************************************************************* */
