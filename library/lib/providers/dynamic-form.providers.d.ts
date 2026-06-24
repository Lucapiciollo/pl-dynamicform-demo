/** @format */
import { EnvironmentProviders, Provider } from '@angular/core';
import { DynamicActionEventHandler, DynamicFieldEventHandler } from '../models/dynamic-form-event.model';
import { DynamicFormThemeConfig } from '../models/dynamic-form-theme-config.model';
/**
 * Interfaccia di configurazione runtime del DynamicForm.
 * Viene fornita tramite `provideDynamicForm()` o `PlDynamicFormModule.forRoot()`.
 */
export interface DynamicFormRuntimeConfig {
    events?: Record<string, DynamicFieldEventHandler>;
    actions?: Record<string, DynamicActionEventHandler>;
    theme?: DynamicFormThemeConfig;
    /** Opzioni per i `mat-form-field` della libreria (es. `appearance`, `subscriptSizing`). */
    matFormField?: {
        appearance?: 'fill' | 'outline';
        subscriptSizing?: 'fixed' | 'dynamic';
        floatLabel?: 'always' | 'auto';
        hideRequiredMarker?: boolean;
    };
}
/** Configurazione di default applicata se non viene fornita alcuna configurazione custom. */
export declare const DYNAMIC_FORM_DEFAULT_CONFIG: DynamicFormRuntimeConfig;
/**
 * Unisce la configurazione utente con i default della libreria.
 * Esegue un merge profondo su `theme`, `events` e `actions`.
 *
 * @param config - Configurazione parziale fornita dall'utente.
 * @returns Configurazione completa con tutti i valori di default applicati.
 */
export declare function mergeDynamicFormConfig(config?: DynamicFormRuntimeConfig): DynamicFormRuntimeConfig;
/**
 * Provider per applicazioni standalone (Angular 16+).
 * Da usare in `bootstrapApplication()` o `app.config.ts`.
 *
 * @example
 * ```ts
 * // main.ts
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideDynamicForm({
 *       events: { onNomeChange: ctx => console.log(ctx) },
 *       theme: { name: 'modern-dark' },
 *     }),
 *   ],
 * });
 * ```
 */
export declare function provideDynamicForm(config?: DynamicFormRuntimeConfig): EnvironmentProviders;
/**
 * Provider per applicazioni con `NgModule` (Angular classico).
 * Da usare nell'array `providers` di `AppModule` o di un modulo feature.
 *
 * @example
 * ```ts
 * // app.module.ts
 * @NgModule({
 *   imports: [PlDynamicFormModule],
 *   providers: [
 *     ...provideDynamicFormForModule({
 *       events: { onNomeChange: ctx => console.log(ctx) },
 *     }),
 *   ],
 * })
 * export class AppModule {}
 * ```
 */
export declare function provideDynamicFormForModule(config?: DynamicFormRuntimeConfig): Provider[];
