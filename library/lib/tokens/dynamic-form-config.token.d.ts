/** @format */
import { InjectionToken } from '@angular/core';
/**
 * `InjectionToken` per la configurazione runtime del DynamicForm.
 *
 * Usato internamente da tutti i servizi della libreria per accedere
 * a eventi, azioni e impostazioni del tema.
 * Non iniettare direttamente: usare `provideDynamicForm()` o `provideDynamicFormForModule()`.
 *
 * Il factory di default applica il tema `modern-dark`; viene sovrascritto
 * se viene fornita una configurazione esplicita.
 */
export declare const DYNAMIC_FORM_RUNTIME_CONFIG: InjectionToken<any>;
