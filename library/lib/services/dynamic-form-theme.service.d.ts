import { DynamicFormThemeConfig, DynamicFormThemeCustomTokens, DynamicFormThemeName } from '../models/dynamic-form-theme-config.model';
import { DynamicFormRuntimeConfig } from '../providers/dynamic-form.providers';
import * as i0 from "@angular/core";
/**
 * Servizio per la gestione del tema visivo del DynamicForm.
 *
 * Applica la classe CSS `df-theme-{nome}` sull'elemento root (body o elemento custom)
 * e inietta CSS custom token per permettere la personalizzazione completa dei colori,
 * tipografia e spaziatura senza modificare i file SCSS della libreria.
 *
 * Temi built-in: `modern-light`, `modern-dark`.
 * È possibile definire temi custom passando un nome arbitrario e i `customTokens`.
 */
export declare class DynamicFormThemeService {
    private readonly document;
    private readonly config;
    private readonly themeClassPrefix;
    constructor(document: Document, config: DynamicFormRuntimeConfig | null);
    /**
     * Inizializza il tema applicando nome e custom token dalla configurazione fornita.
     * Viene chiamato automaticamente da `PlDynamicFormModule` all'avvio.
     */
    init(): void;
    /**
     * Applica la classe `df-theme-{themeName}` sull'elemento root rimuovendo
     * le classi di tema precedenti. Imposta anche l'attributo `data-df-theme`
     * e `data-df-theme-mode` per eventuali query CSS.
     *
     * @param themeName - Nome del tema da applicare (es. `'modern-dark'`).
     */
    applyTheme(themeName: DynamicFormThemeName): void;
    /**
     * Inietta i custom token come CSS custom properties (`--df-*`) sull'elemento root.
     * Permette di sovrascrivere singoli valori del tema senza ridefinire l'intero tema.
     *
     * @param tokens - Oggetto con i token da sovrascrivere (solo le chiavi valorizzate vengono applicate).
     */
    applyCustomTokens(tokens: DynamicFormThemeCustomTokens): void;
    /**
     * Restituisce l'elemento HTML su cui applicare le classi di tema.
     * Priorità: `rootSelector` > `applyToBody` (body) > documentElement.
     */
    getThemeRoot(): HTMLElement;
    /**
     * Restituisce la configurazione tema effettiva, unendo i default con
     * la configurazione opzionale iniettata via `provideDynamicForm()`.
     */
    getThemeConfig(): DynamicFormThemeConfig;
    /** Rimuove dall'elemento root tutte le classi CSS che iniziano con `df-theme-`. */
    private removePreviousThemeClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormThemeService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicFormThemeService>;
}
