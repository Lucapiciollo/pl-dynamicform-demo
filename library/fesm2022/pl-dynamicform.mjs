import * as i0 from '@angular/core';
import { Pipe, InjectionToken, Inject, Optional, Injectable, makeEnvironmentProviders, EventEmitter, inject, Output, Directive, HostListener, Input, signal, NgModule, DestroyRef, effect, untracked, ViewContainerRef, ViewChild, Component, computed, viewChild, ElementRef, isSignal, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import * as i1$1 from '@angular/common';
import { DOCUMENT, DatePipe, CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { Validators, NG_VALUE_ACCESSOR, FormGroup, FormArray, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Subject, debounceTime, buffer, fromEvent, throttleTime, ReplaySubject, Subscriber, combineLatest, startWith, pairwise, merge, distinctUntilChanged, isObservable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { __decorate } from 'tslib';
import { Camera } from '@ionic-native/camera/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { DocumentScanner, ResponseType } from 'capacitor-document-scanner';
import moment from 'moment';
import { Unsubscribe, Delay } from 'pl-decorator';
import * as i1 from '@angular/platform-browser';
import { A11yModule, LiveAnnouncer } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import * as i2$1 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import * as i2$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i2$3 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import * as i3$1 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i4$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i7 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import * as i2$4 from '@angular/material/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import * as i5$1 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i6 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { signalStore, withState, withComputed, withMethods, patchState, withHooks } from '@ngrx/signals';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { v4 } from 'uuid';

/** @format */
class LanguagePipe {
    transform(value, languageCode) {
        try {
            return value.find(lan => lan.language == languageCode).value;
        }
        catch (e) { }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: LanguagePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.22", ngImport: i0, type: LanguagePipe, isStandalone: false, name: "language" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: LanguagePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'language', standalone: false }]
        }] });
class TimeToNumberPipe {
    transform(time) {
        if (!time || !/^\d{2}:\d{2}:\d{2}?$/.test(time)) {
            return null; // Se il formato non è valido, ritorna null
        }
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 100 + minutes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: TimeToNumberPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.22", ngImport: i0, type: TimeToNumberPipe, isStandalone: false, name: "timeToNumber" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: TimeToNumberPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'timeToNumber',
                    standalone: false,
                }]
        }] });

/** @format */
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
const DYNAMIC_FORM_RUNTIME_CONFIG = new InjectionToken('DYNAMIC_FORM_RUNTIME_CONFIG', {
    providedIn: 'root',
    factory: () => ({
        theme: {
            name: 'modern-dark',
            mode: 'dark',
            applyToBody: true,
            loadMaterialIcons: true,
            injectRuntimeStyles: true,
        },
    }),
});

/** @format */
/**
 * Carica gli asset globali necessari al DynamicForm senza obbligare l'app host
 * ad aggiungere link/font/stili nel proprio index.html o styles.scss.
 *
 * Nota: gli overlay Material/CDK vivono fuori dal componente, quindi alcuni stili
 * devono essere globali. Li iniettiamo una sola volta nel document head.
 */
class DynamicFormAssetsService {
    constructor(document, config) {
        this.document = document;
        this.config = config;
        this.materialIconsId = 'df-material-icons-font';
        this.materialSymbolsId = 'df-material-symbols-font';
        this.globalStylesId = 'df-global-runtime-styles';
        this.materialSymbolsUrl = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..500,0..1,-50..200';
    }
    /**
     * Carica gli asset di default: font Material Icons/Symbols e stili globali runtime.
     * Può essere disabilitato selettivamente tramite `theme.loadMaterialIcons` e
     * `theme.injectRuntimeStyles` nella configurazione.
     */
    loadDefaultAssets() {
        const theme = this.config?.theme ?? {};
        if (theme.loadMaterialIcons !== false) {
            this.appendStylesheet(this.materialIconsId, 'https://fonts.googleapis.com/icon?family=Material+Icons');
            // this.appendStylesheet(
            //   this.materialSymbolsId,
            //   'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
            // );
            this.appendStylesheet(this.materialSymbolsId, this.materialSymbolsUrl);
        }
        if (theme.injectRuntimeStyles !== false) {
            this.appendGlobalStyles();
        }
    }
    /**
     * Aggiunge un elemento `<link rel="stylesheet">` nell'`<head>` del documento.
     * Utilizza l'`id` come guard per evitare inserimenti duplicati.
     *
     * @param id - Identificatore univoco del tag link (usato come attributo `id`).
     * @param href - URL del foglio di stile da caricare.
     */
    appendStylesheet(id, href) {
        if (this.document.getElementById(id)) {
            return;
        }
        const link = this.document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = href;
        this.document.head.appendChild(link);
    }
    /**
     * Inietta un blocco `<style>` con i CSS custom property di default del tema
     * e gli stili globali per gli overlay Material/CDK (mat-select, mat-datepicker, ecc.).
     * Gli overlay CDK vivono fuori dall'incapsulamento dei componenti e richiedono
     * stili globali per essere tematizzati correttamente.
     */
    appendGlobalStyles() {
        if (this.document.getElementById(this.globalStylesId)) {
            return;
        }
        const style = this.document.createElement('style');
        style.id = this.globalStylesId;
        style.textContent = `
/* DynamicForm runtime global styles. Injected once by PlDynamicFormModule. */
:root,
.df-theme-modern-light {
  --df-primary: #2563eb;
  --df-primary-contrast: #ffffff;
  --df-primary-soft: #eff6ff;
  --df-accent: #06b6d4;
  --df-accent-contrast: #ffffff;
  --df-success: #16a34a;
  --df-warning: #f59e0b;
  --df-danger: #dc2626;
  --df-info: #0284c7;
  --df-background: #f8fafc;
  --df-surface: #ffffff;
  --df-surface-soft: #f8fafc;
  --df-surface-alt: #f1f5f9;
  --df-text: #0f172a;
  --df-muted: #64748b;
  --df-muted-text: #64748b;
  --df-border: #dbe3ef;
  --df-border-strong: #b6c3d5;
  --df-radius-sm: 10px;
  --df-radius-md: 14px;
  --df-radius-lg: 18px;
  --df-radius-xl: 24px;
  --df-field-height: 48px;
  --df-field-gap: 16px;
  --df-field-padding-x: 14px;
  --df-shadow-sm: 0 8px 22px rgba(15, 23, 42, 0.08);
  --df-shadow-md: 0 20px 45px rgba(15, 23, 42, 0.16);
  --df-shadow-lg: 0 26px 70px rgba(15, 23, 42, 0.22);
  --df-transition: 180ms ease;
}

.df-theme-modern-dark {
  --df-primary: #60a5fa;
  --df-primary-contrast: #020617;
  --df-primary-soft: rgba(96, 165, 250, 0.16);
  --df-accent: #22d3ee;
  --df-accent-contrast: #020617;
  --df-success: #22c55e;
  --df-warning: #fbbf24;
  --df-danger: #f87171;
  --df-info: #38bdf8;
  --df-background: #020617;
  --df-surface: #0f172a;
  --df-surface-soft: #111827;
  --df-surface-alt: #1e293b;
  --df-text: #e5e7eb;
  --df-muted: #94a3b8;
  --df-muted-text: #94a3b8;
  --df-border: #334155;
  --df-border-strong: #475569;
  --df-shadow-sm: 0 8px 22px rgba(0, 0, 0, 0.28);
  --df-shadow-md: 0 20px 45px rgba(0, 0, 0, 0.42);
  --df-shadow-lg: 0 26px 70px rgba(0, 0, 0, 0.52);
}

body.df-theme-modern-light,
body.df-theme-modern-dark {
  background: var(--df-background);
  color: var(--df-text);
}

dynamic-form,
.df-form,
.df-section-main,
.df-card,
.df-sub-card {
  color: var(--df-text);
}

.df-section-main {
  background: var(--df-surface);
  border: 1px solid var(--df-border);
  border-radius: var(--df-radius-xl);
  box-shadow: var(--df-shadow-sm);
  padding: 18px;
  margin-bottom: 18px;
}

.df-card {
  background: var(--df-surface);
  border: 1px solid var(--df-border);
  border-radius: var(--df-radius-lg);
  box-shadow: var(--df-shadow-sm);
  padding: 16px;
  margin-bottom: 16px;
}

.df-sub-card {
  background: var(--df-surface-alt);
  border: 1px dashed var(--df-border-strong);
  border-radius: var(--df-radius-md);
  padding: 14px;
  margin-top: 10px;
}

/* Material icons loaded automatically by the dynamic form module. */
.mat-icon,
.material-icons,
.mat-ligature-font {
  font-family: 'Material Icons' !important;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-feature-settings: 'liga';
}

.material-symbols-outlined,
.df-symbol-icon {
  font-family: 'Material Symbols Outlined' !important;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.icon-mat,
.df-icon-mat,
.iconCss {
  width: 1.35rem;
  height: 1.35rem;
  min-width: 1.35rem;
  min-height: 1.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.icon-mat.primary,
.df-icon-mat.primary { color: var(--df-primary); }
.icon-mat.muted,
.df-icon-mat.muted { color: var(--df-muted); }
.icon-mat.danger,
.df-icon-mat.danger { color: var(--df-danger); }

.mat-mdc-form-field { width: 100%; }
.mat-mdc-text-field-wrapper { border-radius: var(--df-radius-md) !important; }

.cdk-overlay-pane .mat-mdc-select-panel,
.cdk-overlay-pane .mat-mdc-autocomplete-panel {
  background: var(--df-surface) !important;
  color: var(--df-text) !important;
  border-radius: var(--df-radius-lg) !important;
  box-shadow: var(--df-shadow-md) !important;
  padding: 4px !important;
}

.cdk-overlay-pane .mat-mdc-option {
  color: var(--df-text) !important;
  min-height: 44px !important;
  border-radius: var(--df-radius-sm) !important;
  margin: 2px 0 !important;
}

.cdk-overlay-pane .mat-mdc-option:hover:not(.mdc-list-item--disabled),
.cdk-overlay-pane .mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) {
  background: var(--df-primary-soft) !important;
}

.cdk-overlay-pane .search-container {
  position: sticky;
  top: 0;
  z-index: 3;
  min-height: 48px;
  background: var(--df-surface);
  display: flex;
  align-items: center;
  border-radius: var(--df-radius-md);
  border: 1px solid var(--df-border);
  margin: 4px 4px 8px;
  overflow: hidden;
  box-shadow: var(--df-shadow-sm);
}

.cdk-overlay-pane .search-container input {
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--df-text);
  min-height: 44px;
  padding-right: 12px;
}

.cdk-overlay-pane .search-icon {
  position: absolute;
  left: 12px;
  color: var(--df-muted);
  z-index: 1;
}

.cdk-overlay-pane .mat-datepicker-content,
.cdk-overlay-pane .mat-timepicker-panel {
  background: var(--df-surface) !important;
  color: var(--df-text) !important;
  border-radius: var(--df-radius-lg) !important;
  box-shadow: var(--df-shadow-md) !important;
}

.cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar,
.cdk-overlay-pane .mat-mdc-autocomplete-panel::-webkit-scrollbar { width: 10px; }
.cdk-overlay-pane .mat-mdc-select-panel::-webkit-scrollbar-thumb,
.cdk-overlay-pane .mat-mdc-autocomplete-panel::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: var(--df-border-strong);
  border: 3px solid var(--df-surface);
}
`;
        this.document.head.appendChild(style);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormAssetsService, deps: [{ token: DOCUMENT }, { token: DYNAMIC_FORM_RUNTIME_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormAssetsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormAssetsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DYNAMIC_FORM_RUNTIME_CONFIG]
                }] }] });

/** @format */
/**
 * Registro centralizzato degli handler di eventi e azioni del DynamicForm.
 *
 * Mantiene due Map interne:
 * - `events` — handler per i campi (onChange, onInitialize, remoteData, ecc.)
 * - `actions` — handler per i pulsanti di azione dei gruppi
 *
 * Gli handler vengono registrati all'avvio tramite `provideDynamicForm()` e possono
 * essere aggiunti dinamicamente via `registerEvents` / `registerActions`.
 * Il mapping tra nome (stringa) e handler permette di referenziare le funzioni
 * per nome all'interno degli schemi JSON.
 */
class DynamicFormEventRegistryService {
    constructor(config) {
        this.events = new Map();
        this.actions = new Map();
        if (config?.events)
            this.registerEvents(config.events);
        if (config?.actions)
            this.registerActions(config.actions);
    }
    /**
     * Registra un insieme di handler per i campi.
     * @param events - Mappa `{ nomeHandler: fn }` da aggiungere al registro.
     */
    registerEvents(events) {
        Object.entries(events || {}).forEach(([name, handler]) => this.events.set(name, handler));
    }
    /**
     * Registra un insieme di handler per i pulsanti di azione.
     * @param actions - Mappa `{ nomeHandler: fn }` da aggiungere al registro.
     */
    registerActions(actions) {
        Object.entries(actions || {}).forEach(([name, handler]) => this.actions.set(name, handler));
    }
    /**
     * Restituisce l'handler di campo associato al nome dato, o `undefined` se assente.
     * @param name - Chiave usata nella configurazione del campo (es. `events.change`).
     */
    getEvent(name) {
        return name ? this.events.get(name) : undefined;
    }
    /**
     * Restituisce l'handler di azione associato al nome dato, o `undefined` se assente.
     * @param name - Chiave usata nella configurazione dell'azione (es. `action.event`).
     */
    getAction(name) {
        return name ? this.actions.get(name) : undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormEventRegistryService, deps: [{ token: DYNAMIC_FORM_RUNTIME_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormEventRegistryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormEventRegistryService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DYNAMIC_FORM_RUNTIME_CONFIG]
                }] }] });

/** @format */
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
class DynamicFormThemeService {
    constructor(document, config) {
        this.document = document;
        this.config = config;
        this.themeClassPrefix = 'df-theme-';
    }
    /**
     * Inizializza il tema applicando nome e custom token dalla configurazione fornita.
     * Viene chiamato automaticamente da `PlDynamicFormModule` all'avvio.
     */
    init() {
        const theme = this.getThemeConfig();
        this.applyTheme(theme.name ?? 'modern-light');
        if (theme.customTokens) {
            this.applyCustomTokens(theme.customTokens);
        }
    }
    /**
     * Applica la classe `df-theme-{themeName}` sull'elemento root rimuovendo
     * le classi di tema precedenti. Imposta anche l'attributo `data-df-theme`
     * e `data-df-theme-mode` per eventuali query CSS.
     *
     * @param themeName - Nome del tema da applicare (es. `'modern-dark'`).
     */
    applyTheme(themeName) {
        const root = this.getThemeRoot();
        const theme = this.getThemeConfig();
        this.removePreviousThemeClasses(root);
        root.classList.add(`${this.themeClassPrefix}${themeName}`);
        root.setAttribute('data-df-theme', themeName);
        if (theme.mode) {
            root.setAttribute('data-df-theme-mode', theme.mode);
        }
    }
    /**
     * Inietta i custom token come CSS custom properties (`--df-*`) sull'elemento root.
     * Permette di sovrascrivere singoli valori del tema senza ridefinire l'intero tema.
     *
     * @param tokens - Oggetto con i token da sovrascrivere (solo le chiavi valorizzate vengono applicate).
     */
    applyCustomTokens(tokens) {
        const root = this.getThemeRoot();
        const tokenMap = {
            primary: '--df-primary',
            primaryContrast: '--df-primary-contrast',
            primarySoft: '--df-primary-soft',
            accent: '--df-accent',
            accentContrast: '--df-accent-contrast',
            success: '--df-success',
            warning: '--df-warning',
            danger: '--df-danger',
            info: '--df-info',
            background: '--df-background',
            surface: '--df-surface',
            surfaceSoft: '--df-surface-soft',
            surfaceAlt: '--df-surface-alt',
            text: '--df-text',
            muted: '--df-muted',
            mutedText: '--df-muted-text',
            border: '--df-border',
            borderStrong: '--df-border-strong',
            radiusSm: '--df-radius-sm',
            radiusMd: '--df-radius-md',
            radiusLg: '--df-radius-lg',
            radiusXl: '--df-radius-xl',
            fieldHeight: '--df-field-height',
            fieldGap: '--df-field-gap',
            fieldPaddingX: '--df-field-padding-x',
            shadowSm: '--df-shadow-sm',
            shadowMd: '--df-shadow-md',
            shadowLg: '--df-shadow-lg',
            transition: '--df-transition',
        };
        Object.entries(tokens).forEach(([key, value]) => {
            if (value === undefined || value === null || value === '') {
                return;
            }
            const cssVar = tokenMap[key];
            if (cssVar) {
                root.style.setProperty(cssVar, String(value));
            }
        });
    }
    /**
     * Restituisce l'elemento HTML su cui applicare le classi di tema.
     * Priorità: `rootSelector` > `applyToBody` (body) > documentElement.
     */
    getThemeRoot() {
        const theme = this.getThemeConfig();
        if (theme.rootSelector) {
            const customRoot = this.document.querySelector(theme.rootSelector);
            if (customRoot) {
                return customRoot;
            }
        }
        return theme.applyToBody === false ? this.document.documentElement : this.document.body;
    }
    /**
     * Restituisce la configurazione tema effettiva, unendo i default con
     * la configurazione opzionale iniettata via `provideDynamicForm()`.
     */
    getThemeConfig() {
        return {
            name: 'modern-light',
            mode: 'light',
            applyToBody: true,
            loadMaterialIcons: true,
            injectRuntimeStyles: true,
            ...(this.config?.theme ?? {}),
        };
    }
    /** Rimuove dall'elemento root tutte le classi CSS che iniziano con `df-theme-`. */
    removePreviousThemeClasses(root) {
        Array.from(root.classList)
            .filter(className => className.startsWith(this.themeClassPrefix))
            .forEach(className => root.classList.remove(className));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormThemeService, deps: [{ token: DOCUMENT }, { token: DYNAMIC_FORM_RUNTIME_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormThemeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormThemeService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DYNAMIC_FORM_RUNTIME_CONFIG]
                }] }] });

/** @format */
/**
 * Servizio per la valutazione di condizioni dichiarative JSON sul form.
 *
 * Usato per implementare `visibleWhen` e `disabledWhen` nei campi dello schema JSON:
 * ogni condizione specifica un campo da osservare, un operatore e un valore di confronto.
 * Tutte le condizioni devono essere soddisfatte (AND logico).
 *
 * Operatori supportati: `eq`, `neq`, `in`, `notIn`, `truthy`, `falsy`,
 * `gt`, `gte`, `lt`, `lte`.
 */
class DynamicConditionEvaluatorService {
    /**
     * Valuta un array di condizioni rispetto al form corrente.
     *
     * @param conditions - Array di condizioni da valutare. Array vuoto = sempre `true`.
     * @param form - Il `FormGroup` o `FormArray` di Angular da cui leggere i valori dei campi.
     * @returns `true` se tutte le condizioni sono soddisfatte, `false` altrimenti.
     */
    evaluate(conditions = [], form) {
        if (!conditions.length)
            return true;
        return conditions.every(condition => {
            const value = form.get(condition.field)?.value;
            switch (condition.operator) {
                case 'eq':
                    return value === condition.value;
                case 'neq':
                    return value !== condition.value;
                case 'in':
                    return Array.isArray(condition.value) && condition.value.includes(value);
                case 'notIn':
                    return Array.isArray(condition.value) && !condition.value.includes(value);
                case 'truthy':
                    return !!value;
                case 'falsy':
                    return !value;
                case 'gt':
                    return value > condition.value;
                case 'gte':
                    return value >= condition.value;
                case 'lt':
                    return value < condition.value;
                case 'lte':
                    return value <= condition.value;
                default:
                    return true;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicConditionEvaluatorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicConditionEvaluatorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicConditionEvaluatorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/** @format */
/**
 * Factory per la creazione di `ValidatorFn` di Angular a partire da descrittori JSON.
 *
 * Consente di definire le validazioni direttamente nello schema JSON del form
 * senza dover scrivere codice Angular specifico.
 *
 * Tipi supportati: `required`, `requiredTrue`, `email`, `min`, `max`,
 * `minLength`, `maxLength`, `pattern`, `nullValidator`.
 */
class DynamicValidatorFactoryService {
    /**
     * Converte un array di descrittori `DynamicJsonValidator` in un array di `ValidatorFn`.
     *
     * I descrittori non riconosciuti vengono mappati a `Validators.nullValidator`
     * per evitare eccezioni runtime.
     *
     * @param validators - Array di descrittori di validazione provenienti dallo schema JSON.
     * @returns Array di `ValidatorFn` pronti per essere passati a un `FormControl`.
     */
    create(validators = []) {
        return validators.map(validator => {
            switch (validator.type) {
                case 'required':
                    return Validators.required;
                case 'requiredTrue':
                    return Validators.requiredTrue;
                case 'email':
                    return Validators.email;
                case 'min':
                    return Validators.min(validator.value);
                case 'max':
                    return Validators.max(validator.value);
                case 'minLength':
                    return Validators.minLength(validator.value);
                case 'maxlength':
                case 'maxLength':
                    return Validators.maxLength(validator.value);
                case 'pattern':
                    return Validators.pattern(validator.value);
                case 'nullValidator':
                default:
                    return Validators.nullValidator;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicValidatorFactoryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicValidatorFactoryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicValidatorFactoryService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/** @format */
/** Configurazione di default applicata se non viene fornita alcuna configurazione custom. */
const DYNAMIC_FORM_DEFAULT_CONFIG = {
    theme: {
        name: 'modern-light',
        mode: 'light',
        applyToBody: true,
        loadMaterialIcons: true,
        injectRuntimeStyles: true,
    },
};
/**
 * Unisce la configurazione utente con i default della libreria.
 * Esegue un merge profondo su `theme`, `events` e `actions`.
 *
 * @param config - Configurazione parziale fornita dall'utente.
 * @returns Configurazione completa con tutti i valori di default applicati.
 */
function mergeDynamicFormConfig(config = {}) {
    return {
        ...DYNAMIC_FORM_DEFAULT_CONFIG,
        ...config,
        theme: {
            ...DYNAMIC_FORM_DEFAULT_CONFIG.theme,
            ...(config.theme ?? {}),
            customTokens: {
                ...(DYNAMIC_FORM_DEFAULT_CONFIG.theme?.customTokens ?? {}),
                ...(config.theme?.customTokens ?? {}),
            },
        },
        events: {
            ...(DYNAMIC_FORM_DEFAULT_CONFIG.events ?? {}),
            ...(config.events ?? {}),
        },
        actions: {
            ...(DYNAMIC_FORM_DEFAULT_CONFIG.actions ?? {}),
            ...(config.actions ?? {}),
        },
    };
}
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
function provideDynamicForm(config = {}) {
    return makeEnvironmentProviders([{ provide: DYNAMIC_FORM_RUNTIME_CONFIG, useValue: mergeDynamicFormConfig(config) }]);
}
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
function provideDynamicFormForModule(config = {}) {
    return [{ provide: DYNAMIC_FORM_RUNTIME_CONFIG, useValue: mergeDynamicFormConfig(config) }];
}

/** @format */

/** @format */

/** @format */

/** @format */
/**
 * Operatore RxJS custom che accumula le emissioni della sorgente in un buffer
 * e le emette come array dopo che non arrivano nuovi valori per `maxAwaitTime` ms.
 *
 * Opzionalmente, emette solo se il buffer contiene almeno `minOccurrence` elementi.
 * Utile per ridurre il numero di chiamate HTTP quando arrivano rapidamente più eventi.
 *
 * @param project - Funzione di trasformazione applicata all'array accumulato.
 * @param maxAwaitTime - Tempo di debounce in ms (default: 0).
 * @param minOccurrence - N. minimo di elementi nel buffer per emettere (default: 0 = sempre).
 */
function bufferWithMaxAwaitTime(project, maxAwaitTime = 0, minOccurrence = 0) {
    return source => new Observable(destination => {
        const ListenerSubject = new Subject();
        const debounceListener$ = ListenerSubject.pipe(debounceTime(maxAwaitTime));
        const Listener$ = ListenerSubject.pipe(buffer(debounceListener$));
        Listener$.subscribe((results) => {
            if (minOccurrence && minOccurrence > 0) {
                if (results.length - 1 >= minOccurrence)
                    destination.next(project(results, results.length));
            }
            else
                destination.next(project(results, results.length));
        });
        source.subscribe({
            next: value => {
                ListenerSubject.next(value);
            },
            error: err => {
                ListenerSubject.complete();
                destination.complete();
                destination.error(err);
            },
            complete() {
                ListenerSubject.complete();
                destination.complete();
            },
        });
        return () => destination.unsubscribe();
    });
}
/**
 * Operatore RxJS che registra automaticamente la subscription nell'`obs` `Subscriber`
 * del componente, garantendo la corretta cancellazione quando il componente viene
 * distrutto senza richiedere l'uso esplicito di `takeUntil`.
 *
 * @param subscriber - Il `Subscriber` del componente a cui aggiungere la subscription.
 */
function autoUnsubscribe(subscriber) {
    return (source) => new Observable(observer => {
        const subscription = source.subscribe(observer);
        subscriber.add(subscription);
        return () => {
            subscription.unsubscribe();
            subscriber.remove(subscription);
        };
    });
}

/** @format */
/**
 * Validator custom che verifica che il valore selezionato in un campo combo
 * esista effettivamente nell'elenco delle opzioni disponibili.
 *
 * Utile per prevenire valori "orfani" quando le opzioni vengono aggiornate
 * dinamicamente dopo che il form è già stato compilato.
 *
 * @param formAction - L'azione del form contenente l'array `options` corrente.
 * @returns `ValidatorFn` che restituisce `{ ERROR_OPTION_NOT_VALID: { data } }` se
 *          il valore non è presente nelle opzioni, `null` altrimenti.
 */
function isOptionValid(formAction) {
    return (formControl) => {
        try {
            if (formControl.value != null && !(formControl.value instanceof Array)) {
                let option = formAction.options.find(f => f.id == formControl.value);
                if (option == null) {
                    return { ERROR_OPTION_NOT_VALID: { data: formControl.value } };
                }
                // else {
                //   formControl.setValue(option.id, { emitEvent: false })
                // }
            }
        }
        catch (e) { }
    };
}

let CamScanDirective = class CamScanDirective {
    constructor(element, renderer, sanitizer) {
        this.element = element;
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        this.onCaptureCam = new EventEmitter();
        this.platform = inject(Platform);
        this.fileName = null;
        this.camera = inject(Camera);
        this.alertController = inject(AlertController);
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.scanDocument = async () => {
            const { scannedImages } = await DocumentScanner.scanDocument({
                responseType: ResponseType.Base64,
            });
            if (scannedImages.length > 0) {
                return scannedImages[0];
            }
        };
        if (this.platform.is('cordova')) {
            this.divRowELement = this.renderer.createElement('div');
            this.divColELement = this.renderer.createElement('div');
            this.buttonElement = this.renderer.createElement('button');
            this.iELement = this.renderer.createElement('span');
            this.divRowELement.classList.add('row', 'w-100');
            this.divRowELement.classList.add('col-12', 'text-end');
            this.iELement.classList.add('fa', 'fa-camera', 'mat-icon', 'notranslate', 'material-icons', 'mat-ligature-font', 'mat-icon-no-color');
            this.iELement.style.color = 'var(--primary)';
            this.renderer.appendChild(this.buttonElement, this.iELement);
            this.renderer.appendChild(this.divColELement, this.buttonElement);
            this.renderer.appendChild(this.divRowELement, this.divColELement);
            this.renderer.appendChild(this.element.nativeElement, this.divRowELement);
        }
    }
    async ngAfterViewInit() {
        if (this.platform.is('cordova'))
            fromEvent(this.buttonElement, 'click')
                .pipe(throttleTime(200))
                .subscribe(async (val) => {
                try {
                    this.scanDocument().then(async (imageData) => {
                        // this.camera.getPicture(this.options).then((imageData) => {
                        let base64Image = `data:image/jpeg;base64,${imageData}`;
                        fetch(base64Image)
                            .then(res => res.blob())
                            .then(async (blob) => {
                            (await this.alertController.create({
                                message: `<img src="${base64Image}"  >`,
                                header: 'Nome file',
                                mode: 'ios',
                                cssClass: 'basic-alert-success',
                                subHeader: 'Inserire il nome del file',
                                inputs: [
                                    {
                                        placeholder: 'Nome',
                                        type: 'text',
                                        name: 'nameFile',
                                    },
                                ],
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: value => {
                                            if (value && value.nameFile.trim() != '' && value.nameFile != null) {
                                                this.onCaptureCam.emit([new File([blob], `${value.nameFile || String(moment().milliseconds())}.jpg`, { type: 'image/jpg' })]);
                                            }
                                        },
                                    },
                                    {
                                        text: 'Annulla',
                                    },
                                ],
                            })).present();
                        });
                    }, err => {
                        throw new Error(err);
                    });
                }
                catch (error) {
                    throw new Error(error);
                }
            });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: CamScanDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.22", type: CamScanDirective, isStandalone: false, selector: "[camscan]", outputs: { onCaptureCam: "onCaptureCam" }, ngImport: i0 }); }
};
CamScanDirective = __decorate([
    Unsubscribe()
], CamScanDirective);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: CamScanDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[camscan]',
                    standalone: false,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.DomSanitizer }], propDecorators: { onCaptureCam: [{
                type: Output
            }] } });

/** @format */
class SpeechDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.recognition = null;
        try {
            this.recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
            if (this.recognition) {
                this.recognition.interimResults = false;
                this.recognition.lang = 'it-IT';
                this.recognition.continuous = false;
            }
        }
        catch (error) { }
    }
    start() {
        this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
        this.recognition.start();
        this.recognition.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    const content = event.results[i][0].transcript.trim();
                    const start = this.e.selectionStart;
                    const end = this.e.selectionEnd;
                    if (this.e) {
                        // this.e.value = (this.e.value + ' ' + content).trim();
                        const text = this.e.value;
                        this.e.value = text.slice(0, start) + content.trim() + text.slice(end);
                        const newPos = start + content.length;
                        this.e.setSelectionRange(newPos, newPos);
                        this.e.focus();
                        // this.formControl.setValue((value + " " + content).trim());
                        // (this.e as HTMLInputElement).dispatchEvent(new Event('change'));
                        this.e.dispatchEvent(new CustomEvent('change', {
                            detail: { value: this.e.value, frommic: true },
                        }));
                    }
                }
            }
        };
    }
    stop() {
        setTimeout(() => {
            this.renderer.setStyle(this.element.nativeElement, 'color', '');
            this.recognition.stop();
        }, 1500);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: SpeechDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.22", type: SpeechDirective, isStandalone: false, selector: "[speech]", inputs: { e: "e" }, host: { listeners: { "touchstart": "start()", "mousedown": "start()", "touchend": "stop()", "mouseup": "stop()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: SpeechDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[speech]',
                    standalone: false,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { e: [{
                type: Input
            }], start: [{
                type: HostListener,
                args: ['touchstart']
            }, {
                type: HostListener,
                args: ['mousedown']
            }], stop: [{
                type: HostListener,
                args: ['touchend']
            }, {
                type: HostListener,
                args: ['mouseup']
            }] } });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-09 17:22:39
 * @modify date 2022-03-09 17:22:39
 * @desc [description]
 */
class LoadChildDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: LoadChildDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.22", type: LoadChildDirective, isStandalone: false, selector: "[loadChild]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: LoadChildDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[loadChild]',
                    standalone: false,
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }] });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-11-18 12:54:14
 * @modify date 2022-11-18 12:54:14
 * @desc [description]
 */
class FileValueAccessorDirective {
    _handleInput(event) {
        try {
            this.onChange(event.target.files);
        }
        catch (e) { }
    }
    /************************************************************************************************************************************************************************ */
    constructor(element, render) {
        this.element = element;
        this.render = render;
    }
    /************************************************************************************************************************************************************************ */
    registerOnTouched(fn) { }
    /************************************************************************************************************************************************************************ */
    setDisabledState(isDisabled) { }
    /************************************************************************************************************************************************************************ */
    writeValue(value) {
        try {
            const normalizedValue = value == null ? '' : value;
            this.render.setProperty(this.element.nativeElement, 'value', normalizedValue);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    /************************************************************************************************************************************************************************ */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: FileValueAccessorDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.22", type: FileValueAccessorDirective, isStandalone: false, selector: "input[type=file]", host: { listeners: { "change": "_handleInput($event)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: FileValueAccessorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: FileValueAccessorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[type=file]',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: FileValueAccessorDirective,
                            multi: true,
                        },
                    ],
                    standalone: false,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { _handleInput: [{
                type: HostListener,
                args: ['change', ['$event']]
            }] } });

/** @format */
/**
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-17 08:56:52
 * @modify date 2022-03-17 08:56:52
 * @desc [description]
 */
const ErrorMessage = {
    required: 'Campo obbligatorio',
    email: 'E-mail non valida',
    mismatch: 'Le due password non coincidono',
    pressureError: 'Formato corretto 000/000',
    temperatureError: 'Formato corretto 00.0',
    max: 'Valore massimo: {0}',
    min: 'Valore minimo: {0}',
    conflictTask: 'Codice task già presente',
    ERROR_NO_ONLY_SPACE: 'Inserire un valore valido',
    ERROR_DECIMAL_IS_PRESENT: 'Non sono ammessi valori decimali',
};
/************************************************************************************************************************************************************* */
/**
 * @author @l.piciollo
 * @param formGroup
 * @param formName
 * @returns Array<string>
 * si occupa di controllare in un formGroup, gli errori di validazione riscontrati per un determinato controller
 */
function GetErrorForm(formGroup = new FormGroup({}), formName) {
    try {
        if (formName != null && !formGroup.get(formName)?.valid && (formGroup.get(formName)?.dirty || formGroup.get(formName)?.touched)) {
            return Object.keys(formGroup.get(formName).errors).map(e => {
                try {
                    let msg = ErrorMessage[e];
                    if (formGroup.get(formName).errors[e].requiredLength)
                        msg = ErrorMessage.replace('{0}', formGroup.get(formName).errors[e].requiredLength);
                    if (formGroup.get(formName).errors[e].min) {
                        msg = ErrorMessage.replace('{0}', formGroup.get(formName).errors[e].min);
                    }
                    if (formGroup.get(formName).errors[e].max) {
                        msg = ErrorMessage.replace('{0}', formGroup.get(formName).errors[e].max);
                    }
                    if (formGroup.get(formName).errors[e].minCurrency) {
                        msg = ErrorMessage.replace('{0}', formGroup.get(formName).errors[e].minCurrency);
                    }
                    return msg;
                }
                catch (e) { }
            });
        }
        else if (!formGroup.valid && formName == null && formGroup.dirty) {
            return Object.keys(formGroup.errors).map(e => {
                try {
                    let msg = ErrorMessage[e];
                    return msg;
                }
                catch (e) { }
            });
        }
        else
            return [];
    }
    catch (e) {
        return [];
    }
}
/************************************************************************************************************************************************************* */
/**
 * @author @l.piciollo
 * @param formControl
 * @returns Array<string>
 * si occupa di controllare in un formControl, gli errori di validazione riscontrati
 */
function GetErrorFormControl(formControl) {
    try {
        if (formControl && !formControl.valid && (formControl?.dirty || formControl?.touched)) {
            return Object.keys(formControl.errors)
                .filter(key => {
                return ErrorMessage[key] != null;
            })
                .map(e => {
                try {
                    let msg = ErrorMessage[e];
                    if (formControl.errors[e].requiredLength)
                        msg = ErrorMessage.replace('{0}', formControl.errors[e].requiredLength);
                    else if (formControl.errors[e].min) {
                        msg = ErrorMessage.min.replace('{0}', formControl.errors[e].min);
                    }
                    else if (formControl.errors[e].max) {
                        msg = ErrorMessage.max.replace('{0}', formControl.errors[e].max);
                    }
                    else if (formControl.errors[e].minCurrency) {
                        msg = ErrorMessage.minCurrency.replace('{0}', formControl.errors[e].minCurrency);
                    }
                    return msg;
                }
                catch (e) { }
            });
        }
        else
            return [];
    }
    catch (e) {
        return [];
    }
}
/************************************************************************************************************************************************************* */
/**
 * @author @l.piciollo
 * @param formControl
 * @returns Array<string>
 * si occupa di controllare in un formControl, gli errori di validazione riscontrati
 */
function GetErrorFormControlFromObj(objErrors) {
    try {
        return Object.keys(objErrors).map(key => {
            try {
                let msg = ErrorMessage[key];
                return msg;
            }
            catch (e) { }
        });
    }
    catch (e) {
        return [];
    }
}
/************************************************************************************************************************************************************* */

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-11-18 12:54:53
 * @modify date 2022-11-18 12:54:53
 * @desc [description]
 */

/** @format */
class DietNestedFormJson {
    static build() {
        return {
            id: 'dietCollectionForm',
            title: 'Raccolta informazioni dieta settimanale',
            type: 'GROUP',
            formName: 'root',
            actions: [
                {
                    label: 'Patch anagrafica demo',
                    name: 'Patch anagrafica demo',
                    icon: 'edit_note',
                    cssClassButton: ['btn', 'btn-primary', 'mx-1'],
                    visible: true,
                    disabled: false,
                    event: 'patchRegistryDemo',
                },
                {
                    label: 'Valida anagrafica',
                    name: 'Valida anagrafica',
                    icon: 'check_circle',
                    cssClassButton: ['btn', 'btn-success', 'mx-1'],
                    visible: true,
                    disabled: false,
                    event: 'validateRegistry',
                },
                {
                    label: 'Genera settimana demo',
                    name: 'Genera settimana demo',
                    icon: 'restaurant_menu',
                    cssClassButton: ['btn', 'btn-warning', 'mx-1'],
                    visible: true,
                    disabled: false,
                    event: 'patchWeekDemo',
                },
                {
                    label: 'Copia lunedì su tutta la settimana',
                    name: 'Copia lunedì',
                    icon: 'content_copy',
                    cssClassButton: ['btn', 'btn-info', 'mx-1'],
                    visible: true,
                    disabled: false,
                    event: 'copyMondayToWholeWeek',
                },
                {
                    label: 'Calcola riepilogo',
                    name: 'Calcola riepilogo',
                    icon: 'calculate',
                    cssClassButton: ['btn', 'btn-secondary', 'mx-1'],
                    visible: true,
                    disabled: false,
                    event: 'calculateDietSummary',
                },
                {
                    label: 'Leggi form completo',
                    name: 'Leggi form completo',
                    icon: 'visibility',
                    cssClassButton: ['btn', 'btn-secondary', 'mx-1'],
                    visible: true,
                    disabled: false,
                    event: 'readWholeDietForm',
                },
                {
                    label: 'Reset',
                    name: 'Reset',
                    icon: 'restart_alt',
                    cssClassButton: ['btn', 'btn-danger', 'mx-1'],
                    visible: true,
                    disabled: false,
                    event: 'resetDietForm',
                },
            ],
            children: [
                this.registryGroup(),
                this.weekGroup(),
                this.summaryGroup(),
            ],
        };
    }
    static registryGroup() {
        return {
            id: 'registry',
            title: 'Anagrafica',
            type: 'GROUP',
            formName: 'registry',
            children: [
                this.personGroup(),
                this.bodyGroup(),
                this.preferencesGroup(),
            ],
        };
    }
    static personGroup() {
        return {
            id: 'person',
            title: 'Dati personali',
            type: 'GROUP',
            formName: 'person',
            children: [
                {
                    type: 'TEXT',
                    formName: 'firstName',
                    title: 'Nome',
                    placeholder: 'Inserisci nome',
                    value: '',
                    css: this.col4(),
                    resetButton: true,
                    validators: [
                        {
                            type: 'required',
                            message: 'Nome obbligatorio',
                        },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logFieldChange',
                        focus: 'logFieldChange',
                        blur: 'logFieldChange',
                    },
                },
                {
                    type: 'TEXT',
                    formName: 'lastName',
                    title: 'Cognome',
                    placeholder: 'Inserisci cognome',
                    value: '',
                    css: this.col4(),
                    resetButton: true,
                    validators: [
                        {
                            type: 'required',
                            message: 'Cognome obbligatorio',
                        },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logFieldChange',
                    },
                },
                {
                    type: 'NUMBER',
                    formName: 'age',
                    title: 'Età',
                    placeholder: 'Inserisci età',
                    value: null,
                    css: this.col4(),
                    resetButton: true,
                    optionNumber: {
                        min: 14,
                        max: 100,
                        step: 1,
                    },
                    validators: [
                        {
                            type: 'required',
                            message: 'Età obbligatoria',
                        },
                        {
                            type: 'min',
                            value: 14,
                            message: 'Età minima 14 anni',
                        },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'updateSummaryOnBodyChange',
                    },
                },
                {
                    type: 'RADIOGROUP',
                    formName: 'gender',
                    title: 'Sesso',
                    value: 'M',
                    css: {
                        class: ['col-12', 'col-sm-6', 'col-md-4', 'px-1'],
                        classRadio: ['d-flex', 'gap-3', 'align-items-center'],
                    },
                    options: [
                        { id: 'M', description: 'Maschio' },
                        { id: 'F', description: 'Femmina' },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'updateSummaryOnBodyChange',
                    },
                },
            ],
        };
    }
    static bodyGroup() {
        return {
            id: 'body',
            title: 'Dati corporei',
            type: 'GROUP',
            formName: 'body',
            children: [
                {
                    type: 'NUMBER',
                    formName: 'height',
                    title: 'Altezza cm',
                    placeholder: 'Esempio 178',
                    value: null,
                    css: this.col4(),
                    resetButton: true,
                    optionNumber: {
                        min: 120,
                        max: 230,
                        step: 1,
                    },
                    validators: [
                        {
                            type: 'required',
                            message: 'Altezza obbligatoria',
                        },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'updateSummaryOnBodyChange',
                    },
                },
                {
                    type: 'NUMBER',
                    formName: 'weight',
                    title: 'Peso attuale kg',
                    placeholder: 'Esempio 84',
                    value: null,
                    css: this.col4(),
                    resetButton: true,
                    optionNumber: {
                        min: 30,
                        max: 250,
                        step: 0.1,
                    },
                    validators: [
                        {
                            type: 'required',
                            message: 'Peso obbligatorio',
                        },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'updateSummaryOnBodyChange',
                    },
                },
                {
                    type: 'NUMBER',
                    formName: 'targetWeight',
                    title: 'Peso obiettivo kg',
                    placeholder: 'Esempio 78',
                    value: null,
                    css: this.col4(),
                    resetButton: true,
                    optionNumber: {
                        min: 30,
                        max: 250,
                        step: 0.1,
                    },
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logFieldChange',
                    },
                },
                {
                    type: 'COMBO',
                    formName: 'goal',
                    title: 'Obiettivo',
                    placeholder: 'Seleziona obiettivo',
                    value: 'lose_weight',
                    css: this.col4(),
                    resetButton: true,
                    autocomplete: true,
                    options: [
                        { id: 'lose_weight', description: 'Dimagrimento' },
                        { id: 'maintenance', description: 'Mantenimento' },
                        { id: 'gain_mass', description: 'Massa muscolare' },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'updateSummaryOnGoalChange',
                        opened: 'logFieldInitialize',
                        closed: 'logFieldChange',
                    },
                },
            ],
        };
    }
    static preferencesGroup() {
        return {
            id: 'preferences',
            title: 'Preferenze e vincoli',
            type: 'GROUP',
            formName: 'preferences',
            children: [
                {
                    type: 'COMBO',
                    formName: 'activityLevel',
                    title: 'Livello attività',
                    placeholder: 'Seleziona livello',
                    value: 'medium',
                    css: this.col4(),
                    resetButton: true,
                    autocomplete: true,
                    options: [
                        { id: 'low', description: 'Bassa' },
                        { id: 'medium', description: 'Media' },
                        { id: 'high', description: 'Alta' },
                    ],
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'updateSummaryOnBodyChange',
                    },
                },
                {
                    type: 'ARRAYSTRING',
                    formName: 'allergies',
                    title: 'Allergie',
                    placeholder: 'Aggiungi allergia',
                    value: [],
                    css: this.col4(),
                    resetButton: true,
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logArrayChange',
                        focus: 'logFieldChange',
                        blur: 'logFieldChange',
                    },
                },
                {
                    type: 'ARRAYSTRING',
                    formName: 'dislikedFoods',
                    title: 'Alimenti non graditi',
                    placeholder: 'Aggiungi alimento',
                    value: [],
                    css: this.col4(),
                    resetButton: true,
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logArrayChange',
                    },
                },
            ],
        };
    }
    static weekGroup() {
        return {
            id: 'week',
            title: 'Piano alimentare settimanale',
            type: 'GROUP',
            formName: 'week',
            children: [
                this.dayGroup('monday', 'Lunedì'),
                this.dayGroup('tuesday', 'Martedì'),
                this.dayGroup('wednesday', 'Mercoledì'),
                this.dayGroup('thursday', 'Giovedì'),
                this.dayGroup('friday', 'Venerdì'),
                this.dayGroup('saturday', 'Sabato'),
                this.dayGroup('sunday', 'Domenica'),
            ],
        };
    }
    static dayGroup(formName, title) {
        return {
            id: formName,
            title,
            type: 'GROUP',
            formName,
            children: [
                this.mealField('breakfast', 'Colazione', `Colazione ${title}`),
                this.mealField('morningSnack', 'Spuntino mattina', `Spuntino mattina ${title}`),
                this.mealField('lunch', 'Pranzo', `Pranzo ${title}`),
                this.mealField('afternoonSnack', 'Merenda', `Merenda ${title}`),
                this.mealField('dinner', 'Cena', `Cena ${title}`),
                {
                    type: 'NUMBER',
                    formName: 'waterLiters',
                    title: 'Acqua litri',
                    placeholder: 'Litri acqua',
                    value: 2,
                    css: this.col4(),
                    resetButton: true,
                    optionNumber: {
                        min: 0,
                        max: 5,
                        step: 0.25,
                    },
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logWaterChange',
                    },
                },
                {
                    type: 'TEXTAREA',
                    formName: 'notes',
                    title: `Note ${title.toLowerCase()}`,
                    placeholder: 'Note del giorno',
                    value: '',
                    css: {
                        class: ['col-12', 'px-1'],
                        rows: 3,
                    },
                    resetButton: true,
                    optionInputText: {
                        maxlength: 500,
                    },
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logMealChange',
                        focus: 'logFieldChange',
                        blur: 'logFieldChange',
                    },
                },
            ],
        };
    }
    static mealField(formName, title, placeholder) {
        return {
            type: 'TEXTAREA',
            formName,
            title,
            placeholder,
            value: '',
            css: {
                class: ['col-12', 'col-md-6', 'px-1'],
                rows: 3,
            },
            resetButton: true,
            optionInputText: {
                maxlength: 1000,
            },
            events: {
                initialize: 'logFieldInitialize',
                change: 'logMealChange',
                focus: 'logFieldChange',
                blur: 'logFieldChange',
            },
        };
    }
    static summaryGroup() {
        return {
            id: 'summary',
            title: 'Riepilogo',
            type: 'GROUP',
            formName: 'summary',
            children: [
                {
                    type: 'NUMBER',
                    formName: 'bmi',
                    title: 'BMI',
                    placeholder: 'Calcolato automaticamente',
                    value: null,
                    readonly: true,
                    disabled: true,
                    css: this.col4(),
                    optionNumber: {
                        min: 0,
                        step: 0.1,
                    },
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logFieldChange',
                    },
                },
                {
                    type: 'NUMBER',
                    formName: 'calculatedCalories',
                    title: 'Calorie giornaliere stimate',
                    placeholder: 'Calcolate automaticamente',
                    value: null,
                    readonly: true,
                    disabled: true,
                    css: this.col4(),
                    optionNumber: {
                        min: 0,
                        step: 1,
                    },
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logFieldChange',
                    },
                },
                {
                    type: 'TEXTAREA',
                    formName: 'notes',
                    title: 'Note generali dieta',
                    placeholder: 'Scrivi note generali',
                    value: '',
                    css: {
                        class: ['col-12', 'px-1'],
                        rows: 4,
                    },
                    resetButton: true,
                    optionInputText: {
                        maxlength: 1000,
                    },
                    events: {
                        initialize: 'logFieldInitialize',
                        change: 'logFieldChange',
                    },
                },
            ],
        };
    }
    static col4() {
        return {
            class: ['col-12', 'col-sm-6', 'col-md-4', 'px-1'],
        };
    }
}

/** @format */
/***********************************************************************************************************************************
 * ENUM
 ***********************************************************************************************************************************/
/**
 * Enumerazione di tutti i tipi di controllo supportati dal DynamicForm.
 *
 * Ogni valore corrisponde a uno specifico componente Angular della libreria.
 * Può essere usato sia come valore numerico che come chiave stringa nello schema JSON
 * (es. `'TEXT'`, `'COMBO'`, `'DATARANGE'`).
 */
var TYPE_CONTROL_FORM;
(function (TYPE_CONTROL_FORM) {
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["ARRAYSTRING"] = 0] = "ARRAYSTRING";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["COMBOPAGINATE"] = 1] = "COMBOPAGINATE";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["BUTTON"] = 2] = "BUTTON";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["DATETIME"] = 3] = "DATETIME";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["ACTIONREPORT"] = 4] = "ACTIONREPORT";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["RADIOGROUP"] = 5] = "RADIOGROUP";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["TEXT"] = 6] = "TEXT";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["TEXTAREA"] = 7] = "TEXTAREA";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["CHECKBOX"] = 8] = "CHECKBOX";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["FILE"] = 9] = "FILE";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["CURRENCY"] = 10] = "CURRENCY";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["NUMBER"] = 11] = "NUMBER";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["COMBO"] = 12] = "COMBO";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["DATA"] = 13] = "DATA";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["DATARANGE"] = 14] = "DATARANGE";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["TIME"] = 15] = "TIME";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["GROUP"] = 16] = "GROUP";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["SORTACTION"] = 17] = "SORTACTION";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["YEAR"] = 18] = "YEAR";
    TYPE_CONTROL_FORM[TYPE_CONTROL_FORM["RATING"] = 19] = "RATING";
})(TYPE_CONTROL_FORM || (TYPE_CONTROL_FORM = {}));

/** @format */
function firstGroup(control) {
    if (control instanceof FormArray)
        return control.at(0) || null;
    if (control instanceof FormGroup)
        return control;
    return null;
}
function groupAt$1(root, path) {
    const parts = path.split('.').filter(Boolean);
    let current = root;
    for (const part of parts) {
        current = firstGroup(current);
        if (!current)
            return null;
        current = current.get(part);
    }
    return firstGroup(current);
}
function controlAt$1(root, path) {
    const parts = path.split('.').filter(Boolean);
    const controlName = parts.pop();
    if (!controlName)
        return null;
    const parent = parts.length ? groupAt$1(root, parts.join('.')) : firstGroup(root);
    return parent?.get(controlName) ?? null;
}
function collectFormErrors$1(control, parentKey = '') {
    const errors = {};
    if (control instanceof FormArray) {
        control.controls.forEach((child, index) => {
            Object.assign(errors, collectFormErrors$1(child, `${parentKey}[${index}]`));
        });
        return errors;
    }
    if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(key => {
            const nextKey = parentKey ? `${parentKey}.${key}` : key;
            Object.assign(errors, collectFormErrors$1(control.get(key), nextKey));
        });
        return errors;
    }
    if (control?.errors)
        errors[parentKey] = control.errors;
    return errors;
}
function createNestedActionsFormBuilder() {
    return [
        {
            title: 'Scheda cliente completa',
            class: ['col-12', 'df-section-main'],
            formGroup: [
                {
                    formAction: {
                        title: 'Dati anagrafici',
                        type: TYPE_CONTROL_FORM.GROUP,
                        formName: 'registry',
                        css: { class: ['col-12', 'df-card'] },
                        formGroup: [
                            {
                                title: 'Anagrafica',
                                class: ['col-12', 'df-sub-group'],
                                formGroup: [
                                    {
                                        formAction: {
                                            title: 'Nome',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'firstName',
                                            placeholder: 'Inserisci nome',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(null, {
                                                validators: [Validators.required, Validators.minLength(3)],
                                                updateOn: 'change',
                                            }),
                                            onChange: (_idGroup, _idForm, formControl) => {
                                                console.log('Nome cambiato:', formControl.value);
                                            },
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Cognome',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'lastName',
                                            placeholder: 'Inserisci cognome',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(null, { validators: [Validators.required] }),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Email',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'email',
                                            placeholder: 'nome@email.it',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(null, {
                                                validators: [Validators.required, Validators.email],
                                                updateOn: 'blur',
                                            }),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Telefono',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'phone',
                                            placeholder: 'Telefono',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(null),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Sesso',
                                            type: TYPE_CONTROL_FORM.RADIOGROUP,
                                            formName: 'gender',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl('M'),
                                            options: signal([
                                                { id: 'M', description: 'Maschio' },
                                                { id: 'F', description: 'Femmina' },
                                                { id: 'N', description: 'Non specificato' },
                                            ]),
                                            keyCombo: { keyId: 'id', keyDescription: ['description'] },
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Cliente attivo',
                                            type: TYPE_CONTROL_FORM.CHECKBOX,
                                            formName: 'active',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(true),
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    formAction: {
                        title: 'Documento',
                        type: TYPE_CONTROL_FORM.GROUP,
                        formName: 'document',
                        css: { class: ['col-12', 'df-card'] },
                        formGroup: [
                            {
                                title: 'Dati documento',
                                class: ['col-12', 'df-sub-group'],
                                formGroup: [
                                    {
                                        formAction: {
                                            title: 'Tipo documento',
                                            type: TYPE_CONTROL_FORM.COMBO,
                                            formName: 'documentType',
                                            placeholder: 'Seleziona documento',
                                            css: { class: ['col-12', 'col-md-4'] },
                                            formControl: new FormControl(null, { validators: [Validators.required] }),
                                            options: signal([
                                                { id: 'CI', description: 'Carta identità' },
                                                { id: 'PASS', description: 'Passaporto' },
                                                { id: 'PAT', description: 'Patente' },
                                            ]),
                                            keyCombo: { keyId: 'id', keyDescription: ['description'] },
                                            autocomplete: false,
                                            multiple: false,
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Numero documento',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'documentNumber',
                                            placeholder: 'Numero documento',
                                            css: { class: ['col-12', 'col-md-4'] },
                                            formControl: new FormControl(null, { validators: [Validators.required] }),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Scadenza',
                                            type: TYPE_CONTROL_FORM.DATA,
                                            formName: 'documentExpireDate',
                                            placeholder: 'Data scadenza',
                                            css: { class: ['col-12', 'col-md-4'] },
                                            formControl: new FormControl(null, { validators: [Validators.required] }),
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
            actions: [
                {
                    label: 'Valida anagrafica',
                    visible: true,
                    cssClassButton: ['btn', 'btn-primary', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => {
                        const registry = groupAt$1(formGroup, 'registry');
                        registry?.markAllAsTouched();
                        console.log('Registry valid:', registry?.valid);
                        console.log('Registry value:', registry?.value);
                    },
                },
                {
                    label: 'Patch anagrafica',
                    visible: true,
                    cssClassButton: ['btn', 'btn-secondary', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => {
                        const registry = groupAt$1(formGroup, 'registry');
                        registry?.patchValue({ firstName: 'Luca', lastName: 'Piciollo', email: 'luca@test.it', phone: '3331234567', gender: 'M', active: true });
                        console.log('Patch anagrafica eseguito');
                    },
                },
            ],
        },
        {
            title: 'Indirizzi e residenza',
            class: ['col-12', 'df-section-main'],
            formGroup: [
                {
                    formAction: {
                        title: 'Indirizzo principale',
                        type: TYPE_CONTROL_FORM.GROUP,
                        formName: 'mainAddress',
                        css: { class: ['col-12', 'df-card'] },
                        formGroup: [
                            {
                                title: 'Indirizzo',
                                class: ['col-12', 'df-sub-group'],
                                formGroup: [
                                    {
                                        formAction: {
                                            title: 'Via',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'street',
                                            placeholder: 'Via',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(null),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Civico',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'streetNumber',
                                            placeholder: 'Civico',
                                            css: { class: ['col-12', 'col-md-2'] },
                                            formControl: new FormControl(null),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'CAP',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'zipCode',
                                            placeholder: 'CAP',
                                            css: { class: ['col-12', 'col-md-4'] },
                                            formControl: new FormControl(null, { validators: [Validators.pattern(/^[0-9]{5}$/)] }),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Comune e provincia',
                                            type: TYPE_CONTROL_FORM.GROUP,
                                            formName: 'cityInfo',
                                            css: { class: ['col-12', 'df-sub-card'] },
                                            formGroup: [
                                                {
                                                    title: 'Comune e provincia',
                                                    class: ['col-12', 'df-sub-group'],
                                                    formGroup: [
                                                        {
                                                            formAction: {
                                                                title: 'Comune',
                                                                type: TYPE_CONTROL_FORM.TEXT,
                                                                formName: 'city',
                                                                placeholder: 'Comune',
                                                                css: { class: ['col-12', 'col-md-6'] },
                                                                formControl: new FormControl(null),
                                                            },
                                                        },
                                                        {
                                                            formAction: {
                                                                title: 'Provincia',
                                                                type: TYPE_CONTROL_FORM.TEXT,
                                                                formName: 'province',
                                                                placeholder: 'Provincia',
                                                                css: { class: ['col-12', 'col-md-3'] },
                                                                formControl: new FormControl(null),
                                                            },
                                                        },
                                                        {
                                                            formAction: {
                                                                title: 'Regione',
                                                                type: TYPE_CONTROL_FORM.COMBO,
                                                                formName: 'region',
                                                                placeholder: 'Regione',
                                                                css: { class: ['col-12', 'col-md-3'] },
                                                                formControl: new FormControl(null),
                                                                options: signal([
                                                                    { id: 'LAZIO', description: 'Lazio' },
                                                                    { id: 'UMBRIA', description: 'Umbria' },
                                                                    { id: 'TOSCANA', description: 'Toscana' },
                                                                ]),
                                                                keyCombo: { keyId: 'id', keyDescription: ['description'] },
                                                                autocomplete: true,
                                                                multiple: false,
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    formAction: {
                        title: 'Indirizzo secondario',
                        type: TYPE_CONTROL_FORM.GROUP,
                        formName: 'secondaryAddress',
                        css: { class: ['col-12', 'df-card'] },
                        formGroup: [
                            {
                                title: 'Secondario',
                                class: ['col-12', 'df-sub-group'],
                                formGroup: [
                                    {
                                        formAction: {
                                            title: 'Usa indirizzo secondario',
                                            type: TYPE_CONTROL_FORM.CHECKBOX,
                                            formName: 'enabled',
                                            css: { class: ['col-12'] },
                                            formControl: new FormControl(false),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Via secondaria',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'street',
                                            placeholder: 'Via secondaria',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(null),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Comune secondario',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'city',
                                            placeholder: 'Comune secondario',
                                            css: { class: ['col-12', 'col-md-6'] },
                                            formControl: new FormControl(null),
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
            actions: [
                {
                    label: 'Copia indirizzo principale nel secondario',
                    visible: true,
                    cssClassButton: ['btn', 'btn-warning', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => {
                        const mainAddress = groupAt$1(formGroup, 'mainAddress');
                        const cityInfo = groupAt$1(formGroup, 'mainAddress.cityInfo');
                        const secondaryAddress = groupAt$1(formGroup, 'secondaryAddress');
                        secondaryAddress?.patchValue({ enabled: true, street: mainAddress?.get('street')?.value, city: cityInfo?.get('city')?.value });
                        console.log('Indirizzo copiato');
                    },
                },
            ],
        },
        {
            title: 'Contratto, periodo e importi',
            class: ['col-12', 'df-section-main'],
            formGroup: [
                {
                    formAction: {
                        title: 'Dati contratto',
                        type: TYPE_CONTROL_FORM.GROUP,
                        formName: 'contract',
                        css: { class: ['col-12', 'df-card'] },
                        formGroup: [
                            {
                                title: 'Contratto',
                                class: ['col-12', 'df-sub-group'],
                                formGroup: [
                                    {
                                        formAction: {
                                            title: 'Codice contratto',
                                            type: TYPE_CONTROL_FORM.TEXT,
                                            formName: 'code',
                                            placeholder: 'Codice contratto',
                                            css: { class: ['col-12', 'col-md-4'] },
                                            formControl: new FormControl(null, { validators: [Validators.required] }),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Tipo contratto',
                                            type: TYPE_CONTROL_FORM.COMBO,
                                            formName: 'type',
                                            placeholder: 'Tipo contratto',
                                            css: { class: ['col-12', 'col-md-4'] },
                                            formControl: new FormControl(null),
                                            options: signal([
                                                { id: 'STANDARD', description: 'Standard' },
                                                { id: 'PREMIUM', description: 'Premium' },
                                                { id: 'CUSTOM', description: 'Personalizzato' },
                                            ]),
                                            keyCombo: { keyId: 'id', keyDescription: ['description'] },
                                            autocomplete: false,
                                            multiple: false,
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Attivazione immediata',
                                            type: TYPE_CONTROL_FORM.CHECKBOX,
                                            formName: 'immediateActivation',
                                            css: { class: ['col-12', 'col-md-4'] },
                                            formControl: new FormControl(false),
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Periodo contratto',
                                            type: TYPE_CONTROL_FORM.GROUP,
                                            formName: 'period',
                                            css: { class: ['col-12', 'df-sub-card'] },
                                            formGroup: [
                                                {
                                                    title: 'Periodo',
                                                    class: ['col-12', 'df-sub-group'],
                                                    formGroup: [
                                                        {
                                                            formAction: {
                                                                title: 'Dal',
                                                                type: TYPE_CONTROL_FORM.DATA,
                                                                formName: 'from',
                                                                placeholder: 'Data inizio',
                                                                css: { class: ['col-12', 'col-md-6'] },
                                                                formControl: new FormControl(null),
                                                            },
                                                        },
                                                        {
                                                            formAction: {
                                                                title: 'Al',
                                                                type: TYPE_CONTROL_FORM.DATA,
                                                                formName: 'to',
                                                                placeholder: 'Data fine',
                                                                css: { class: ['col-12', 'col-md-6'] },
                                                                formControl: new FormControl(null),
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        formAction: {
                                            title: 'Importi',
                                            type: TYPE_CONTROL_FORM.GROUP,
                                            formName: 'amounts',
                                            css: { class: ['col-12', 'df-sub-card'] },
                                            formGroup: [
                                                {
                                                    title: 'Importi',
                                                    class: ['col-12', 'df-sub-group'],
                                                    formGroup: [
                                                        {
                                                            formAction: {
                                                                title: 'Imponibile',
                                                                type: TYPE_CONTROL_FORM.CURRENCY,
                                                                formName: 'taxable',
                                                                placeholder: 'Imponibile',
                                                                css: { class: ['col-12', 'col-md-4'] },
                                                                formControl: new FormControl(0, { validators: [Validators.min(0)] }),
                                                                currency: 'EUR',
                                                            },
                                                        },
                                                        {
                                                            formAction: {
                                                                title: 'IVA %',
                                                                type: TYPE_CONTROL_FORM.NUMBER,
                                                                formName: 'vat',
                                                                placeholder: 'IVA',
                                                                css: { class: ['col-12', 'col-md-4'] },
                                                                formControl: new FormControl(22, { validators: [Validators.min(0), Validators.max(100)] }),
                                                            },
                                                        },
                                                        {
                                                            formAction: {
                                                                title: 'Totale',
                                                                type: TYPE_CONTROL_FORM.CURRENCY,
                                                                formName: 'total',
                                                                placeholder: 'Totale',
                                                                css: { class: ['col-12', 'col-md-4'] },
                                                                formControl: new FormControl({ value: 0, disabled: true }),
                                                                currency: 'EUR',
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
            actions: [
                {
                    label: 'Calcola totale',
                    visible: true,
                    cssClassButton: ['btn', 'btn-success', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => {
                        const amounts = groupAt$1(formGroup, 'contract.amounts');
                        const taxable = Number(amounts?.get('taxable')?.value ?? 0);
                        const vat = Number(amounts?.get('vat')?.value ?? 0);
                        amounts?.get('total')?.setValue(Number((taxable + taxable * vat / 100).toFixed(2)));
                    },
                },
                {
                    label: 'Disabilita contratto',
                    visible: true,
                    cssClassButton: ['btn', 'btn-danger', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => groupAt$1(formGroup, 'contract')?.disable(),
                },
                {
                    label: 'Abilita contratto',
                    visible: true,
                    cssClassButton: ['btn', 'btn-info', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => {
                        groupAt$1(formGroup, 'contract')?.enable();
                        controlAt$1(formGroup, 'contract.amounts.total')?.disable();
                    },
                },
            ],
        },
        {
            title: 'Note, allegati e operazioni finali',
            class: ['col-12', 'df-section-main'],
            formGroup: [
                {
                    formAction: {
                        title: 'Note interne',
                        type: TYPE_CONTROL_FORM.TEXTAREA,
                        formName: 'internalNotes',
                        placeholder: 'Scrivi note interne',
                        css: { class: ['col-12'] },
                        formControl: new FormControl(null),
                        rows: 4,
                    },
                },
                {
                    formAction: {
                        title: 'Tag',
                        type: TYPE_CONTROL_FORM.ARRAYSTRING,
                        formName: 'tags',
                        placeholder: 'Aggiungi tag',
                        css: { class: ['col-12'] },
                        formControl: new FormControl(['cliente', 'test', 'annidato']),
                    },
                },
                {
                    formAction: {
                        title: 'Allegato documento',
                        type: TYPE_CONTROL_FORM.FILE,
                        formName: 'attachment',
                        css: { class: ['col-12', 'col-md-6'] },
                        formControl: new FormControl(null),
                        accept: '.pdf,.png,.jpg,.jpeg',
                    },
                },
            ],
            actions: [
                {
                    label: 'Leggi tutto il form',
                    visible: true,
                    cssClassButton: ['btn', 'btn-primary', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => {
                        console.log('FORM COMPLETO:', formGroup);
                        console.log('RAW VALUE:', formGroup instanceof FormGroup ? formGroup.getRawValue() : formGroup.value);
                    },
                },
                {
                    label: 'Valida tutto',
                    visible: true,
                    cssClassButton: ['btn', 'btn-success', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => {
                        formGroup.markAllAsTouched();
                        console.log('Form valido:', formGroup.valid);
                        console.log('Errori:', collectFormErrors$1(formGroup));
                    },
                },
                {
                    label: 'Reset tutto',
                    visible: true,
                    cssClassButton: ['btn', 'btn-secondary', 'me-2', 'mb-2'],
                    action: (_questions, _idForm, formGroup) => formGroup.reset(),
                },
            ],
        },
    ];
}
const nestedActionsFormHelpers = {
    firstGroup,
    groupAt: groupAt$1,
    controlAt: controlAt$1,
    collectFormErrors: collectFormErrors$1,
};

/** @format */
class FixSearchBox {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.appStickyOffset = '-1px';
        this.cssClass = [];
        this.fixSearchBox = true;
    }
    ngAfterViewInit() {
        try {
            if (this.fixSearchBox) {
                this.cssClass?.forEach(cl => this.el?.nativeElement?.classList?.add(cl));
                this.renderer?.setStyle(this.el.nativeElement, 'position', 'sticky');
                this.renderer?.setStyle(this.el.nativeElement, 'top', this.appStickyOffset);
                this.renderer?.setStyle(this.el.nativeElement, 'z-index', '9999');
                // this.renderer?.setStyle(this.el.nativeElement, 'background-color', '#f0f0f0');
                this.renderer?.setStyle(this.el.nativeElement.parentElement, 'padding', '0px');
            }
        }
        catch (e) { }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: FixSearchBox, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.22", type: FixSearchBox, isStandalone: false, selector: "[fixSearchBox]", inputs: { appStickyOffset: "appStickyOffset", cssClass: "cssClass", fixSearchBox: "fixSearchBox" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: FixSearchBox, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fixSearchBox]',
                    standalone: false,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { appStickyOffset: [{
                type: Input
            }], cssClass: [{
                type: Input
            }], fixSearchBox: [{
                type: Input,
                args: [{ required: false }]
            }] } });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-11-18 12:51:45
 * @modify date 2022-11-18 12:51:45
 * @desc [description]
 */
class MaterialModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: MaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.22", ngImport: i0, type: MaterialModule, exports: [MatToolbarModule, MatStepperModule, MatSidenavModule, A11yModule, ClipboardModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, ScrollingModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: MaterialModule, providers: [
            {
                provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: { appearance: 'outline', subscriptSizing: 'fixed' },
            },
        ], imports: [MatToolbarModule, MatStepperModule, MatSidenavModule, A11yModule, ClipboardModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, ScrollingModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: MaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [MatToolbarModule, MatStepperModule, MatSidenavModule, A11yModule, ClipboardModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, ScrollingModule],
                    providers: [
                        {
                            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
                            useValue: { appearance: 'outline', subscriptSizing: 'fixed' },
                        },
                    ],
                }]
        }] });

/**
 * Injection tokens separati per evitare cicli di import tra BaseComponent e PlDynamicFormModule
 */
const DATE_PIPE = new InjectionToken('Default date pipe');
const DATE_PIPE_TIME = new InjectionToken('Default date pipe time');
const COMBO_PAING_INIT = new InjectionToken('Inizializzazione paginazione combo');
const MAX_ELEMENT_COMBO_SHOW = new InjectionToken('Massimo elementi visibile nella descrizione della combo selezionata');
const MAX_DATE_CALENDAR = new InjectionToken('Massima data selezionabile nel calendario');
const MIN_DATE_CALENDAR = new InjectionToken('Minima data selezionabile nel calendario');

/**
 * @format
 */
class BaseComponent {
    set allGroup(allGroup) {
        this._allGroup = allGroup;
        this.obsAllGroup.next(this._allGroup);
        this._subscribeToCompletion();
    }
    /**
     * ATTENZIONE:
     * Dal template attuale arriva direttamente `formAction`, non il wrapper `{ formAction }`.
     *
     * dynamic-form.component.html:
     * [question]="formAction"
     *
     * Però manteniamo anche compatibilità con eventuale `{ formAction }`.
     */
    set question(config) {
        this.utils = {
            getFormByName: this.getFormByName,
            setDefaultOptions: this.setDefaultOptions,
            getSelectedOptions: this.getSelectedOptions,
            onSettedOptions: this.onSettedOptions,
            getActionByName: this.getActionByName,
            formCompletion: this._completionSignal.asReadonly(),
        };
        const normalizedControl = this.normalizeQuestion(config);
        this.control = normalizedControl;
        if (this.control?.formAction) {
            this.control.formAction.instance = this;
        }
        this.prepareSignalsForOptionBasedControls();
        this.obsQuestions.next(this.control);
    }
    set signalStoreValue(value) {
        this.signalStoreBase = value;
    }
    constructor(injector, element) {
        this.injector = injector;
        this.element = element;
        this.onCaptureCam = new EventEmitter();
        this.instance = new EventEmitter();
        this.obsQuestions = new ReplaySubject(1);
        this.obsAllGroup = new ReplaySubject(1);
        this.initPagination = inject(COMBO_PAING_INIT);
        this.combotext = inject(MAX_ELEMENT_COMBO_SHOW);
        this.mySignal = signal(null);
        this.onOptionSetted = signal(null);
        this.destroyRef = inject(DestroyRef);
        this.getErrorForm = GetErrorForm;
        this.getErrorFormControl = GetErrorFormControl;
        this.getErrorFormControlFromObj = GetErrorFormControlFromObj;
        this.control = { formAction: {} };
        this.obs = new Subscriber();
        this.setInitialOption = signal(null);
        this._autocomplete = null;
        this.selectedItems = new Array();
        this._completionSignal = signal({
            total: 0, filled: 0, percentage: 0,
            required: { total: 0, filled: 0, percentage: 0 },
            groups: [],
        });
        this._completionSub = null;
        this.formActionIndex = 0;
        this.formGroupIndex = 0;
        /**
         * Questo è il gruppo corrente, cioè group.formGroup passato dal DynamicFormComponent.
         */
        this.group = null;
        /***********************************************************************************************************************************
         * OPTION SETTER FOR ARRAYSTRING
         ***********************************************************************************************************************************/
        this.onSetOptionWithSearch = () => {
            if (typeof this.control?.formAction?.options !== 'function') {
                this.internalValue = this.control.formAction.options || [];
                Object.defineProperty(this.control.formAction, 'options', {
                    set: newValue => {
                        this.internalValue = newValue;
                        this.signalStoreBase?.updateFilterOption?.(this._filter(null));
                    },
                    get: () => {
                        return this.internalValue;
                    },
                    configurable: true,
                });
            }
        };
        this.componentRef = [];
        /***********************************************************************************************************************************
         * UTILITY
         ***********************************************************************************************************************************/
        this.getActionByName = (actionName, parse) => {
            const actions = JSON["findByKeyAndValue"](this._allGroup, 'label', `${actionName}`, ['formControl', 'instance']) ?? [];
            const response = actions?.length > 1
                ? actions.map(m => ({ name: m.object?.name || m.object?.label, value: m.object }))
                : actions[0]?.object || null;
            parse(response);
        };
        this.getFormByName = (formName, parse) => {
            const forms = JSON["findByKeyAndValue"](this.group, 'formName', `${formName}`, ['formControl', 'instance']) ?? [];
            const response = forms?.length > 1
                ? forms.map(m => ({ name: m.object.formName, value: m.object }))
                : forms[0]?.object || null;
            parse(response, forms);
        };
        this.setDefaultOptions = (formName, parse) => {
            const forms = JSON["findByKeyAndValue"](this.group, 'formName', `${formName}`, ['formControl', 'instance']) ?? [];
            const parsedForm = forms.length > 1
                ? forms.map(m => ({ name: m.object.formName, value: m.object }))
                : forms[0]?.object || null;
            const response = parse(parsedForm);
            if (Array.isArray(parsedForm)) {
                parsedForm.forEach((f) => {
                    f?.value?.instance?.signalStoreBase?.setDefaultOptions(response || []);
                });
                return;
            }
            parsedForm?.instance?.signalStoreBase?.setDefaultOptions(response || []);
        };
        this.getSelectedOptions = (formName, parse) => {
            const forms = JSON["findByKeyAndValue"](this.group, 'formName', `${formName}`, ['formControl', 'instance']) ?? [];
            const parsedForm = forms.length > 1
                ? forms.map(m => ({ name: m.object.formName, value: m.object }))
                : forms[0]?.object || null;
            return parse(parsedForm?.length > 1
                ? parsedForm.map(m => m.value?.instance?.signalStoreBase?.getSelectedOptions)
                : parsedForm?.instance?.signalStoreBase?.getSelectedOptions || null);
        };
        this.onSettedOptions = (formName, parse) => {
            const forms = JSON["findByKeyAndValue"](this.group, 'formName', `${formName}`, ['formControl', 'instance']) ?? [];
            const parsedForm = forms.length > 1
                ? forms.map(m => ({ name: m.object.formName, value: m.object }))
                : forms[0]?.object || null;
            return parse(parsedForm?.length > 1
                ? parsedForm.map(m => m.value?.instance?.signalStoreBase?.getSelectedOptionsFromTotal)
                : parsedForm?.instance?.signalStoreBase?.getSelectedOptionsFromTotal || null);
        };
        /***********************************************************************************************************************************
         * FORM COMPLETION
         ***********************************************************************************************************************************/
        this._SKIP_COMPLETION = new Set([
            TYPE_CONTROL_FORM.GROUP,
        ]);
    }
    /***********************************************************************************************************************************
     * NORMALIZATION
     ***********************************************************************************************************************************/
    normalizeQuestion(config) {
        if (!config) {
            return { formAction: {} };
        }
        if (config?.formAction) {
            return config;
        }
        return {
            formAction: config,
        };
    }
    prepareSignalsForOptionBasedControls() {
        const type = this.control?.formAction?.type;
        if (type === TYPE_CONTROL_FORM.COMBOPAGINATE ||
            type === TYPE_CONTROL_FORM.TIME ||
            type === TYPE_CONTROL_FORM.COMBO ||
            type === TYPE_CONTROL_FORM.RADIOGROUP) {
            this.control.formAction.options =
                typeof this.control.formAction.options === 'function'
                    ? this.control.formAction.options
                    : signal(this.control.formAction.options || null);
            this.control.formAction.optionsDisabled =
                typeof this.control.formAction.optionsDisabled === 'function'
                    ? this.control.formAction.optionsDisabled
                    : signal(this.control.formAction.optionsDisabled || null);
            this.control.formAction.paramsForRemoteData =
                typeof this.control.formAction.paramsForRemoteData === 'function'
                    ? this.control.formAction.paramsForRemoteData
                    : signal(this.control.formAction.paramsForRemoteData || null);
        }
    }
    /***********************************************************************************************************************************
     * INIT
     ***********************************************************************************************************************************/
    ngOnInit() {
        combineLatest({
            control: this.obsQuestions,
            allGroup: this.obsAllGroup,
        })
            .pipe(autoUnsubscribe(this.obs), takeUntilDestroyed(this.destroyRef))
            .subscribe(({ allGroup, control }) => {
            this.control = control;
            this.setupArrayStringSearchOptions(control);
            this.setupComboPagination(control);
            this.setupDisabledState(control);
            this.overrideComboPaginateReset(control, allGroup);
            this.setupComboEffects(control);
            this.applyCssClasses(control);
            this.emitInitialize(control, allGroup);
            this.listenValueChanges(control);
        });
    }
    ngOnDestroy() { }
    /***********************************************************************************************************************************
     * SETUP
     ***********************************************************************************************************************************/
    setupArrayStringSearchOptions(control) {
        if (control?.formAction?.type === TYPE_CONTROL_FORM.ARRAYSTRING) {
            this.onSetOptionWithSearch();
        }
    }
    setupComboPagination(control) {
        if (control?.formAction?.type === TYPE_CONTROL_FORM.COMBOPAGINATE) {
            control.formAction.paging = {
                ...this.initPagination,
                totalCount: control.formAction?.paging?.totalCount ?? this.initPagination?.totalCount ?? 0,
            };
        }
    }
    setupDisabledState(control) {
        const formControl = control?.formAction?.formControl;
        if (!formControl) {
            return;
        }
        if (formControl.disabled) {
            formControl.disable({ emitEvent: false });
        }
        else {
            formControl.enable({ emitEvent: false });
        }
    }
    overrideComboPaginateReset(control, allGroup) {
        if (control?.formAction?.type !== TYPE_CONTROL_FORM.COMBOPAGINATE) {
            return;
        }
        const formControl = control?.formAction?.formControl;
        if (!formControl) {
            return;
        }
        const originalReset = formControl.reset.bind(formControl);
        formControl.reset = (args) => {
            try {
                originalReset(args);
            }
            catch (e) {
                originalReset([args]);
            }
            this.emitInitialize(control, allGroup);
        };
    }
    setupComboEffects(control) {
        if (control?.formAction?.type !== TYPE_CONTROL_FORM.COMBO &&
            control?.formAction?.type !== TYPE_CONTROL_FORM.COMBOPAGINATE) {
            return;
        }
        if (!this.signalStoreBase) {
            return;
        }
        effect(() => {
            const optionsFn = this.control?.formAction?.options;
            if (typeof optionsFn !== 'function') {
                return;
            }
            const opt = optionsFn();
            if (opt != null) {
                untracked(() => {
                    this.signalStoreBase.setSelectedOptions([]);
                    this.signalStoreBase.setFilteredOptions(opt, this.control.formAction?.keyCombo);
                    this.signalStoreBase.setTotalOptions(opt, this.control.formAction?.keyCombo);
                    this.setInitialOption.set(opt);
                });
            }
        }, { injector: this.injector, allowSignalWrites: true });
        effect(() => {
            const disabledFn = this.control?.formAction?.optionsDisabled;
            if (typeof disabledFn !== 'function') {
                return;
            }
            const disable = disabledFn();
            untracked(() => this.signalStoreBase?.addDisabledOption(disable));
        }, { injector: this.injector, allowSignalWrites: true });
    }
    applyCssClasses(control) {
        if (!control?.formAction?.css?.class?.length) {
            return;
        }
        control.formAction.css.class.forEach((c) => {
            this.element?.nativeElement?.classList?.add(c);
        });
    }
    listenValueChanges(control) {
        const formControl = control?.formAction?.formControl;
        if (!formControl) {
            return;
        }
        formControl.valueChanges
            .pipe(autoUnsubscribe(this.obs), takeUntilDestroyed(this.destroyRef), startWith(null), pairwise())
            .subscribe(([prevValue, next]) => {
            const t = control?.formAction?.type;
            // Blocca il trigger generico per COMBO e COMBOPAGINATE (solo il componente custom deve chiamare onChange)
            if (t === TYPE_CONTROL_FORM.GROUP ||
                t === TYPE_CONTROL_FORM.ARRAYSTRING ||
                t === TYPE_CONTROL_FORM.RATING ||
                t === TYPE_CONTROL_FORM.COMBO ||
                t === TYPE_CONTROL_FORM.COMBOPAGINATE ||
                !control?.formAction?.onChange)
                return;
            if (prevValue === next)
                return;
            if (prevValue === null && next === null)
                return;
            this.callOnChange(prevValue, next);
        });
    }
    /***********************************************************************************************************************************
     * EMIT EVENTS
     ***********************************************************************************************************************************/
    emitInitialize(control, allGroup) {
        const formAction = control?.formAction;
        if (!formAction?.onInitialize) {
            return;
        }
        formAction.onInitialize(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, formAction.type, allGroup, formAction.paging ?? this.initPagination ?? null, this.getOptionSettedSignal(), this.utils);
    }
    callOnChange(prevValue, nextValue) {
        const formAction = this.control?.formAction;
        if (!formAction?.onChange) {
            return;
        }
        formAction.onChange(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, formAction.type, prevValue, this._allGroup, this.utils);
    }
    emitOpened() {
        const formAction = this.control?.formAction;
        if (!formAction?.opened) {
            return;
        }
        formAction.opened(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, this._allGroup, this.utils);
    }
    emitClosed() {
        const formAction = this.control?.formAction;
        if (!formAction?.closed) {
            return;
        }
        formAction.closed(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, this._allGroup, this.utils);
    }
    emitFocus() {
        const formAction = this.control?.formAction;
        if (!formAction?.onFocus) {
            return;
        }
        formAction.onFocus(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, this._allGroup, this.utils);
    }
    emitBlur() {
        const formAction = this.control?.formAction;
        if (!formAction?.onBlur) {
            return;
        }
        formAction.onBlur(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, this._allGroup, this.utils);
    }
    emitSearch(search) {
        const formAction = this.control?.formAction;
        if (!formAction?.onSearch) {
            return;
        }
        formAction.onSearch(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, search, this.utils);
    }
    emitScrollEnd(paging) {
        const formAction = this.control?.formAction;
        if (!formAction?.onScrollEnd) {
            return;
        }
        formAction.onScrollEnd(this.formGroupIndex, this.formActionIndex, formAction.formControl, formAction.formName, this.group, paging ?? formAction.paging ?? this.initPagination, this.utils);
    }
    getOptionSettedSignal() {
        if (this.signalStoreBase?.totalOptions) {
            return this.signalStoreBase.totalOptions;
        }
        if (this.signalStoreBase?.getSelectedOptionsFromTotal) {
            return this.signalStoreBase.getSelectedOptionsFromTotal;
        }
        return this.onOptionSetted;
    }
    /***********************************************************************************************************************************
     * FILTER
     ***********************************************************************************************************************************/
    _filter(value = '') {
        const cloned = [...(this.signalStoreBase?.getTotalOptions?.() || [])];
        const filterValue = value?.toString()?.toLowerCase() || null;
        if (filterValue == null) {
            return cloned;
        }
        return cloned.filter((option) => {
            if (filterValue != null && option?.description) {
                return option.description.toLowerCase().includes(filterValue) || option.id == filterValue;
            }
            return false;
        });
    }
    ngAfterViewInit() {
        if (this.container && this.control?.formAction?.componentRef) {
            this.createDynamicComponent();
        }
    }
    createDynamicComponent() {
        this.container.clear();
        this.componentRef = [];
        this.control?.formAction?.componentRef?.forEach(component => {
            const componentRef = this.container.createComponent(component);
            componentRef.instance.getFormControl = () => this.control?.formAction?.formControl;
            componentRef.instance.getFormConfig = () => this.control?.formAction;
            componentRef.instance.getFormParent = () => this.control?.formAction?.formControl?.parent;
            componentRef.instance.getQuestions = () => this._allGroup;
            componentRef.instance.initialize();
            this.componentRef.push(componentRef);
        });
    }
    destroyDynamicComponent() {
        if (this.componentRef) {
            this.componentRef.forEach(c => c.destroy());
        }
    }
    _getTrackableFormActions() {
        if (!this._allGroup)
            return [];
        const result = [];
        for (const group of this._allGroup) {
            for (const form of group.formGroup ?? []) {
                const fa = form?.formAction;
                // Escludi: tipi non tracciabili, campi senza formControl, campi disabled
                // (i disabled sono indicatori visivi, non input utente)
                if (fa?.formControl &&
                    !this._SKIP_COMPLETION.has(fa.type) &&
                    !fa.formControl.disabled) {
                    result.push(fa);
                }
            }
        }
        return result;
    }
    _isFieldFilled(fa) {
        const value = fa.formControl?.value;
        // false = checkbox non spuntata → non compilato
        // null / undefined / '' → non compilato
        if (value === null || value === undefined || value === '' || value === false)
            return false;
        if (Array.isArray(value))
            return value.length > 0;
        return true;
    }
    _computeGroupStats(groupFas) {
        // Solo campi non disabled (coerente con _getTrackableFormActions)
        const trackable = groupFas.filter(fa => !fa.formControl?.disabled);
        const reqFas = trackable.filter(fa => {
            try {
                return fa.formControl?.hasValidator?.(Validators.required) ?? false;
            }
            catch {
                return false;
            }
        });
        const reqTotal = reqFas.length;
        const reqFilled = reqFas.filter(fa => this._isFieldFilled(fa)).length;
        return { total: reqTotal, filled: reqFilled, percentage: reqTotal > 0 ? Math.round((reqFilled / reqTotal) * 100) : 0 };
    }
    _computeCompletion() {
        const fas = this._getTrackableFormActions();
        const total = fas.length;
        const filled = fas.filter(fa => this._isFieldFilled(fa)).length;
        const percentage = total > 0 ? Math.round((filled / total) * 100) : 0;
        const required = this._computeGroupStats(fas);
        const groups = (this._allGroup ?? []).map(group => {
            const groupFas = (group.formGroup ?? [])
                .map(f => f?.formAction)
                .filter(fa => fa?.formControl && !fa.formControl.disabled && !this._SKIP_COMPLETION.has(fa.type));
            const gTotal = groupFas.length;
            const gFilled = groupFas.filter(fa => this._isFieldFilled(fa)).length;
            return {
                id: group.id ?? '',
                title: group.title ?? '',
                total: gTotal,
                filled: gFilled,
                percentage: gTotal > 0 ? Math.round((gFilled / gTotal) * 100) : 0,
                required: this._computeGroupStats(groupFas),
            };
        });
        return { total, filled, percentage, required, groups };
    }
    _subscribeToCompletion() {
        this._completionSub?.unsubscribe();
        this._completionSub = null;
        const fas = this._getTrackableFormActions();
        if (!fas.length) {
            this._completionSignal.set({ total: 0, filled: 0, percentage: 0, required: { total: 0, filled: 0, percentage: 0 }, groups: [] });
            return;
        }
        // Calcolo iniziale sincrono
        this._completionSignal.set(this._computeCompletion());
        // merge è più robusto di combineLatest:
        // - non richiede che tutti abbiano emesso almeno una volta
        // - qualsiasi campo che cambia valore scatta il ricalcolo
        // - i campi disabled sono già esclusi da fas, quindi nessun problema
        //   con FormControl.disabled che non emette sempre su reset()
        this._completionSub = merge(...fas.map(fa => fa.formControl.valueChanges)).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this._completionSignal.set(this._computeCompletion());
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: BaseComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.22", type: BaseComponent, isStandalone: false, selector: "ng-component", inputs: { formActionIndex: "formActionIndex", formGroupIndex: "formGroupIndex", group: "group", allGroup: "allGroup", question: "question" }, outputs: { onCaptureCam: "onCaptureCam", instance: "instance" }, viewQueries: [{ propertyName: "container", first: true, predicate: ["dynamicContainer"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: BaseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: ``,
                    standalone: false,
                }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }], propDecorators: { onCaptureCam: [{
                type: Output
            }], instance: [{
                type: Output
            }], formActionIndex: [{
                type: Input
            }], formGroupIndex: [{
                type: Input
            }], group: [{
                type: Input
            }], allGroup: [{
                type: Input
            }], question: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ['dynamicContainer', { read: ViewContainerRef }]
            }] } });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-30 00:30:41
 * @modify date 2022-03-30 00:30:41
 * @desc [description]
 */
class InputTextComponent extends BaseComponent {
    /************************************************************************************************************************************************************************ */
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    /************************************************************************************************************************************************************************ */
    onChangeByMic(e) {
        if (e && e.detail && e.detail.frommic == true) {
            // this.inputs.nativeElement.value=e.detail.value;
            this.control.formAction?.formControl.markAsPristine();
            this.control.formAction?.formControl.markAsDirty();
            this.control.formAction?.formControl.setValue(e.detail.value);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: InputTextComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: InputTextComponent, isStandalone: false, selector: "app-input-text", viewQueries: [{ propertyName: "inputs", first: true, predicate: ["inputs"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               #inputs\r\n               matInput\r\n               [type]=\"control.formAction?.optionInputText?.password ? 'password' : 'text'\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [maxlength]=\"control.formAction?.optionInputText?.maxlength\"\r\n               (change)=\"onChangeByMic($event)\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            <i\r\n               matSuffix\r\n               class=\"fa fa-microphone text-center fs-20 me-3 iconsMic\"\r\n               speech\r\n               [e]=\"inputs\"\r\n               *ngIf=\"\r\n                  $any(control.formAction?.optionInputText?.password) !== 'password' &&\r\n                  !control.formAction.formControl.disabled &&\r\n                  !control?.formAction?.disableSpeech\r\n               \">\r\n            </i>\r\n\r\n            @if (control.formAction?.resetButton) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl( $any(control.formAction?.formControl) ); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint\r\n         *ngIf=\"control.formAction?.optionInputText?.maxlength || control?.formAction?.hint\"\r\n         [attr.align]=\"'start'\">\r\n         {{ inputs.value.length }}/{{ control.formAction?.optionInputText?.maxlength }}\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "directive", type: SpeechDirective, selector: "[speech]", inputs: ["e"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: InputTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input-text', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               #inputs\r\n               matInput\r\n               [type]=\"control.formAction?.optionInputText?.password ? 'password' : 'text'\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [maxlength]=\"control.formAction?.optionInputText?.maxlength\"\r\n               (change)=\"onChangeByMic($event)\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            <i\r\n               matSuffix\r\n               class=\"fa fa-microphone text-center fs-20 me-3 iconsMic\"\r\n               speech\r\n               [e]=\"inputs\"\r\n               *ngIf=\"\r\n                  $any(control.formAction?.optionInputText?.password) !== 'password' &&\r\n                  !control.formAction.formControl.disabled &&\r\n                  !control?.formAction?.disableSpeech\r\n               \">\r\n            </i>\r\n\r\n            @if (control.formAction?.resetButton) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl( $any(control.formAction?.formControl) ); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint\r\n         *ngIf=\"control.formAction?.optionInputText?.maxlength || control?.formAction?.hint\"\r\n         [attr.align]=\"'start'\">\r\n         {{ inputs.value.length }}/{{ control.formAction?.optionInputText?.maxlength }}\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }], propDecorators: { inputs: [{
                type: ViewChild,
                args: ['inputs']
            }] } });

/** @format */
const initialState = {
    isLoading: false,
    filteredOptions: [],
    selectedOptions: [],
    totalOptions: [],
    defaultOptions: [],
    disabledOption: [],
};
const STATE = new InjectionToken('IState', {
    factory: () => initialState,
});
function asArray(value) {
    return Array.isArray(value) ? [...value] : [];
}
function getByKey(source, key) {
    if (Array.isArray(key)) {
        return key.map(k => source?.[k]).filter(v => v !== null && v !== undefined).join(' ').trim();
    }
    return source?.[key];
}
function normalizeOptions(value, keyCombo = { keyId: 'id', keyDescription: 'description' }) {
    const source = value && typeof value === 'object' && !Array.isArray(value) && Object.prototype.hasOwnProperty.call(value, 'items')
        ? value.items
        : value;
    return asArray(source).map(item => ({
        ...item,
        id: getByKey(item, keyCombo.keyId),
        description: getByKey(item, keyCombo.keyDescription),
    }));
}
function distinctArray(array) {
    const seenIds = new Set();
    const result = [];
    for (const item of asArray(array)) {
        const key = item && typeof item === 'object' ? item.id : item;
        if (seenIds.has(key))
            continue;
        seenIds.add(key);
        result.push(item);
    }
    return result;
}
const Store = signalStore({ protectedState: false }, withState(() => inject(STATE)), withComputed(store => ({
    getFilterOption: computed(() => asArray(store.filteredOptions())),
    getIsLoading: computed(() => store.isLoading()),
    getSelectedOptions: computed(() => [...asArray(store.selectedOptions()), ...asArray(store.defaultOptions())]),
    getSelectedOptionsFromTotal: computed(() => {
        const selectedOptions = asArray(store.selectedOptions());
        const defaultOptions = asArray(store.defaultOptions());
        return untracked(() => [
            ...asArray(store.totalOptions()).filter(f => selectedOptions.some(s => s.id == f.id)),
            ...defaultOptions,
        ]);
    }),
    getTotalOptions: computed(() => asArray(store.totalOptions())),
    getDisabledOptions: computed(() => asArray(store.disabledOption())),
    getDefaultOptions: computed(() => asArray(store.defaultOptions())),
    getConcatStringDescription: computed(() => {
        const description = [...asArray(store.defaultOptions()), ...asArray(store.selectedOptions())]
            .map(m => m?.description)
            .filter(f => !!f && f.length > 0);
        if (description.length > 2)
            return description.join(',');
        return null;
    }),
})), withMethods(store => ({
    distinctArray,
    setFilteredOptions(newElement, keyCombo = { keyId: 'id', keyDescription: 'description' }, append = false) {
        const selected = asArray(store.selectedOptions());
        const current = asArray(store.filteredOptions());
        const next = normalizeOptions(newElement, keyCombo);
        const filteredOptions = append ? distinctArray([...selected, ...current, ...next]) : distinctArray([...selected, ...next]);
        const totalCount = newElement && typeof newElement === 'object' && !Array.isArray(newElement) && Object.prototype.hasOwnProperty.call(newElement, 'totalCount')
            ? Number(newElement.totalCount || 0)
            : undefined;
        patchState(store, state => ({
            ...state,
            filteredOptions,
            isLoading: false,
            ...(totalCount !== undefined ? { storeData: { items: filteredOptions, totalCount } } : {}),
        }));
    },
    updateFilterOption(options) {
        patchState(store, state => ({ ...state, filteredOptions: distinctArray(asArray(options)), isLoading: false }));
    },
    setSelectedOptions(newElement) {
        patchState(store, state => ({ ...state, selectedOptions: asArray(newElement) }));
    },
    setTotalOptions(newElement, keyCombo = { keyId: 'id', keyDescription: 'description' }) {
        patchState(store, state => ({ ...state, totalOptions: distinctArray(normalizeOptions(newElement, keyCombo)) }));
    },
    setIsLoading(value) {
        patchState(store, state => ({ ...state, isLoading: value }));
    },
    setDefaultOptions(newElement, keyCombo = { keyId: 'id', keyDescription: 'description' }) {
        patchState(store, state => ({
            ...state,
            defaultOptions: normalizeOptions(newElement, keyCombo),
            isLoading: false,
        }));
    },
    addDisabledOption(value) {
        patchState(store, state => ({ ...state, disabledOption: asArray(value) }));
    },
    updateOptionSelected(optionId, isSelected, isMultiple) {
        let selectedOptions = asArray(store.selectedOptions());
        const option = asArray(store.filteredOptions()).find(f => f.id == optionId);
        if (!option)
            return;
        if (isMultiple) {
            if (selectedOptions.find((f) => f.id == optionId) != null) {
                selectedOptions = selectedOptions.filter(f => f.id != optionId);
            }
            else {
                selectedOptions.push({ ...option, selected: true });
            }
        }
        else {
            selectedOptions = [{ ...option, selected: true }];
        }
        patchState(store, state => ({ ...state, selectedOptions }));
    },
})), withHooks({
    onInit(store) {
        patchState(store, state => ({
            ...state,
            filteredOptions: [],
            selectedOptions: [],
            totalOptions: [],
            defaultOptions: [],
            storeData: { items: [], totalCount: 0 },
            isLoading: false,
        }));
    },
    onDestroy(store) {
        patchState(store, state => ({
            ...state,
            filteredOptions: [],
            selectedOptions: [],
            totalOptions: [],
            defaultOptions: [],
            storeData: { items: [], totalCount: 0 },
            isLoading: false,
        }));
    },
}));

/**
 * @format
 */
class ComboComponent extends BaseComponent {
    constructor(injector, element, cdr) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
        this.cdr = cdr;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.reachedEnd = false;
        this.resetOption = false;
        this.inputSubject = new Subject();
        this.effectStore = [];
        this.scrollTop = 0;
        this.currentSearchValue = null;
        this.removeScrollListener = null;
        this.scrollBindRetry = 0;
        this.remoteRequestCounter = 0;
        this.lastLoadedItemsCount = 0;
        this.onPanelCloseObs = new Subject();
        this.showOptionDefault = true;
        /**
         * Testo visuale del trigger.
         * Rimane solo come cache visuale, ma il valore vero è sempre nel FormControl reale.
         */
        this.selectedLabelText = signal("");
        /**
         * Cache degli oggetti option completi selezionati.
         * Serve per combo remote/paginate: il FormControl conserva gli id,
         * ma quando cambi pagina/ricerca le option complete potrebbero non essere più
         * nella lista corrente.
         */
        this.selectedOptionsCache = new Map();
        this.filterInput = viewChild("filterInput", {
            read: (ElementRef),
        });
        this.signalStore = inject(Store);
        this.loaderss = signal(false);
        /**
         * compareWith per mat-select.
         * Fondamentale per array multipli, oggetti e id numerici/stringa.
         */
        this.compareMatSelectValues = (a, b) => {
            return this.compareValue(a, b);
        };
        this.clearInput = () => {
            try {
                const input = this.filterInput();
                if (input) {
                    input.nativeElement.value = "";
                }
            }
            catch (e) {
                throw new Error(e);
            }
        };
        this.setInitialOptionWithIdForm = (...args) => {
            const idForm = this.getIdForm();
            if (args.some((arg) => arg === idForm)) {
                return this.setInitialOption(...args);
            }
            return this.setInitialOption(...args, idForm);
        };
        super.signalStoreValue = this.signalStore;
        this.inputSubject
            .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
            .subscribe((valueSearch) => {
            if (!this.isReady()) {
                return;
            }
            this.search(valueSearch ?? "");
        });
    }
    ngOnInit() {
        /**
         * Mantiene eventuali lifecycle ereditati da BaseComponent senza legarci
         * alla firma reale della classe base.
         */
        const baseNgOnInit = Object.getPrototypeOf(ComboComponent.prototype)?.ngOnInit;
        if (typeof baseNgOnInit === "function") {
            baseNgOnInit.call(this);
        }
        queueMicrotask(() => {
            if (!this.isReady()) {
                return;
            }
            this.normalizeControlValueForMultiple();
            this.cacheInitialOptions();
            this.hydrateSelectedOptionsFromCurrentValue();
            this.cacheSelectedVisibleOptions();
            this.keepSelectedOptionsInStores();
            this.refreshSelectedView();
            this.cdr.markForCheck();
        });
        this.control?.formAction?.formControl?.valueChanges
            ?.pipe(takeUntilDestroyed(this.destroyRef))
            ?.subscribe(() => {
            this.normalizeControlValueForMultiple();
            this.hydrateSelectedOptionsFromCurrentValue();
            this.cacheSelectedVisibleOptions();
            this.keepSelectedOptionsInStores();
            this.refreshSelectedView();
            this.cdr.markForCheck();
        });
    }
    isReady() {
        return !!this.control?.formAction?.formControl;
    }
    hasComboValue() {
        const value = this.control?.formAction?.formControl?.value;
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return value !== null && value !== undefined && value !== "";
    }
    refreshSelectedView() {
        if (!this.isReady()) {
            return;
        }
        this.selectedLabelText.set(this.getSelectedLabel(true));
        this.cdr.markForCheck();
    }
    getIdForm() {
        return (this.control?.formAction?.idForm ??
            this.control?.formAction?.id ??
            this.control?.formAction?.name ??
            this.control?.formAction?.key ??
            null);
    }
    getOptionsValue() {
        const options = this.control?.formAction?.options;
        const value = typeof options === "function" ? options() : options;
        if (value &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            Array.isArray(value.items)) {
            return value;
        }
        return Array.isArray(value) ? value : [];
    }
    areJsonEqual(json1, json2) {
        if (typeof json1 !== typeof json2) {
            return false;
        }
        if (Array.isArray(json1) && Array.isArray(json2)) {
            if (json1.length !== json2.length) {
                return false;
            }
            return json1.every((item, index) => this.areJsonEqual(item, json2[index]));
        }
        if (typeof json1 === "object" && json1 !== null && json2 !== null) {
            const keys1 = Object.keys(json1);
            const keys2 = Object.keys(json2);
            if (keys1.length !== keys2.length) {
                return false;
            }
            for (const key of keys1) {
                if (!keys2.includes(key) ||
                    !this.areJsonEqual(json1[key], json2[key])) {
                    return false;
                }
            }
            return true;
        }
        return json1 === json2;
    }
    /***********************************************************************************************************************************
     * OPEN / CLOSE
     ***********************************************************************************************************************************/
    onOpenedChange(opened) {
        if (opened) {
            this.onPanelOpen();
        }
        else {
            this.clearInput();
            this.onPanelClose();
        }
    }
    onPanelOpen() {
        if (!this.isReady()) {
            return;
        }
        try {
            this.normalizeControlValueForMultiple();
            this.cacheInitialOptions();
            this.hydrateSelectedOptionsFromCurrentValue();
            this.cacheSelectedVisibleOptions();
            this.keepSelectedOptionsInStores();
            this.refreshSelectedView();
            this.signalStore.setIsLoading(false);
            this.emitOpened();
            this.focusFilterInputOnOpen();
            if (this.control.formAction.type === TYPE_CONTROL_FORM.COMBO) {
                const filtered = this._filter("");
                this.signalStore.setFilteredOptions(filtered, this.control.formAction.keyCombo, false);
                this.cacheOptions(filtered);
                this.hydrateSelectedOptionsFromCurrentValue();
                this.cacheSelectedVisibleOptions();
                this.keepSelectedOptionsInStores();
                this.refreshSelectedView();
                this.signalStore.setIsLoading(false);
                return;
            }
            if (this.control.formAction.type === TYPE_CONTROL_FORM.COMBOPAGINATE) {
                this.search("");
                if (this.control.formAction?.enableInfiniteScroll === true) {
                    this.bindPanelScrollWithRetry();
                }
                return;
            }
            this.signalStore.setIsLoading(false);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    onPanelClose() {
        if (!this.isReady()) {
            return;
        }
        try {
            this.hydrateSelectedOptionsFromCurrentValue();
            this.cacheSelectedVisibleOptions();
            this.keepSelectedOptionsInStores();
            this.signalStore.setIsLoading(false);
            this.removePanelScrollListener();
            this.effectStore.forEach((m) => m.destroy());
            this.effectStore = [];
            this.showOptionDefault = true;
            this.reachedEnd = false;
            this.scrollBindRetry = 0;
            this.onPanelCloseObs.next();
            /**
             * Non svuotiamo più filteredOptions/totalOptions per le combo multiple.
             * La lista remota/paginata deve conservare selezionati + pagina corrente.
             * Per le combo singole manteniamo il reset storico.
             */
            if (this.control.formAction.type === TYPE_CONTROL_FORM.COMBOPAGINATE &&
                !this.isMultipleSelection()) {
                this.signalStore.setFilteredOptions([], this.control.formAction.keyCombo, false);
                this.control.formAction.paging = {
                    ...this.initPagination,
                };
            }
            if (this.control.formAction.type === TYPE_CONTROL_FORM.COMBOPAGINATE) {
                this.control.formAction.paging = {
                    ...this.initPagination,
                };
            }
            this.refreshSelectedView();
            this.cdr.markForCheck();
            this.emitClosed();
        }
        catch (e) {
            throw new Error(e);
        }
    }
    /***********************************************************************************************************************************
     * SEARCH
     ***********************************************************************************************************************************/
    onInputChange(value) {
        this.inputSubject.next(value ?? "");
    }
    search(value) {
        if (!this.isReady()) {
            return;
        }
        const valueSearch = value ?? "";
        this.emitSearch(valueSearch);
        this.signalStore.setIsLoading(true);
        this.hydrateSelectedOptionsFromCurrentValue();
        this.keepSelectedOptionsInStores();
        this.resetOption = valueSearch.trim() !== "";
        if (this.control.formAction.remoteData &&
            this.control.formAction.type === TYPE_CONTROL_FORM.COMBOPAGINATE) {
            const searchValue = this.resetOption ? valueSearch.trim() : null;
            const currentPaging = this.control.formAction?.paging || this.initPagination;
            const count = currentPaging?.count ??
                this.control.formAction?.pageSize ??
                this.initPagination.count;
            this.currentSearchValue = searchValue;
            this.reachedEnd = false;
            this.scrollTop = 0;
            this.control.formAction.paging = {
                ...currentPaging,
                page: 1,
                count,
                totalCount: 0,
            };
            this.callRemoteData({
                ...this.getRemoteParams(),
                ...this.control.formAction.paging,
                [this.getSearchKey()]: searchValue,
                append: false,
            });
            queueMicrotask(() => {
                const panel = this.selectRef?.panel?.nativeElement;
                if (panel) {
                    panel.scrollTop = 0;
                }
            });
            return;
        }
        if (this.control.formAction.type === TYPE_CONTROL_FORM.COMBO) {
            const filtered = this._filter(valueSearch);
            this.signalStore.setFilteredOptions(filtered, this.control.formAction.keyCombo, false);
            this.cacheOptions(filtered);
            this.hydrateSelectedOptionsFromCurrentValue();
            this.cacheSelectedVisibleOptions();
            this.keepSelectedOptionsInStores();
            this.refreshSelectedView();
            this.signalStore.setIsLoading(false);
            return;
        }
        this.signalStore.setIsLoading(false);
    }
    /***********************************************************************************************************************************
     * SCROLL PAGINATO
     ***********************************************************************************************************************************/
    addEventScroll() {
        this.bindPanelScrollWithRetry();
    }
    canLoadNextPage() {
        const paging = this.control.formAction?.paging || this.initPagination;
        const page = Number(paging?.page ?? 0);
        const count = Number(paging?.count ?? this.control.formAction?.pageSize ?? 25);
        const totalCount = Number(paging?.totalCount ?? 0);
        if (this.lastLoadedItemsCount === 0 && page >= 1) {
            return false;
        }
        if (!totalCount || totalCount <= 0) {
            return this.lastLoadedItemsCount >= count;
        }
        return page * count < totalCount;
    }
    bindPanelScrollWithRetry() {
        this.removePanelScrollListener();
        this.scrollBindRetry = 0;
        const tryBind = () => {
            const panel = this.getSelectPanelElement();
            if (!panel) {
                this.scrollBindRetry++;
                if (this.scrollBindRetry <= 10) {
                    setTimeout(tryBind, 50);
                }
                return;
            }
            this.bindPanelScroll(panel);
        };
        setTimeout(tryBind, 0);
    }
    getSelectPanelElement() {
        const directPanel = this.selectRef?.panel?.nativeElement;
        if (directPanel) {
            return directPanel;
        }
        return document.querySelector(".df-combo-scroll-panel");
    }
    bindPanelScroll(panel) {
        const onScroll = () => {
            this.handlePanelScroll(panel);
        };
        panel.addEventListener("scroll", onScroll, {
            passive: true,
        });
        this.removeScrollListener = () => {
            panel.removeEventListener("scroll", onScroll);
        };
    }
    removePanelScrollListener() {
        if (this.removeScrollListener) {
            this.removeScrollListener();
            this.removeScrollListener = null;
        }
    }
    handlePanelScroll(panel) {
        if (this.control.formAction.type !== TYPE_CONTROL_FORM.COMBOPAGINATE) {
            return;
        }
        if (this.signalStore.getIsLoading()) {
            return;
        }
        this.scrollTop = panel.scrollTop;
        const distanceFromBottom = panel.scrollHeight - panel.scrollTop - panel.clientHeight;
        const threshold = this.control.formAction?.scrollThreshold ?? 64;
        if (distanceFromBottom > threshold) {
            this.reachedEnd = false;
            return;
        }
        if (this.reachedEnd) {
            return;
        }
        if (!this.canLoadNextPage()) {
            return;
        }
        this.reachedEnd = true;
        this.loadNextPage();
    }
    loadNextPage() {
        const paging = this.control.formAction?.paging || this.initPagination;
        const nextPage = Number(paging?.page ?? 1) + 1;
        const count = Number(paging?.count) ||
            Number(this.control.formAction?.pageSize) ||
            Number(this.initPagination.count) ||
            10;
        this.control.formAction.paging = {
            ...paging,
            page: nextPage,
            count,
        };
        this.emitScrollEnd(this.control.formAction.paging);
        this.callRemoteData({
            ...this.getRemoteParams(),
            ...this.control.formAction.paging,
            [this.getSearchKey()]: this.currentSearchValue ?? this.getSearchValue(),
            append: true,
        });
    }
    /***********************************************************************************************************************************
     * REMOTE DATA
     ***********************************************************************************************************************************/
    getSearchKey() {
        const keySearch = this.control?.formAction?.keyCombo?.keySearch;
        return typeof keySearch === "string" ? keySearch : "search";
    }
    getSearchValue() {
        const value = this.filterInput()?.nativeElement?.value?.trim();
        return value ? value : null;
    }
    getRemoteParams() {
        const params = this.control?.formAction?.paramsForRemoteData;
        if (typeof params === "function") {
            return params() || {};
        }
        return params || {};
    }
    compactParams(params) {
        return Object.entries(params || {}).reduce((acc, [key, value]) => {
            if (value !== null && value !== undefined && value !== "") {
                acc[key] = value;
            }
            return acc;
        }, {});
    }
    callRemoteData(param) {
        const remoteData = this.control?.formAction?.remoteData;
        if (!remoteData) {
            this.signalStore.setIsLoading(false);
            this.reachedEnd = false;
            return;
        }
        this.signalStore.setIsLoading(true);
        const payload = {
            param: this.compactParams(param),
            externalStore: this.signalStore,
            setInitialOption: this.setInitialOptionWithIdForm,
            signalStore: this.signalStore,
            formAction: this.control?.formAction,
            formGroup: this.group,
            instance: this,
            idForm: this.getIdForm(),
        };
        const requestId = ++this.remoteRequestCounter;
        try {
            const result = this.resolveRemoteData(remoteData, payload);
            this.handleRemoteDataResult(result, param, requestId);
        }
        catch (error) {
            console.error("[COMBOPAGINATE] remoteData error", error);
            this.signalStore.setIsLoading(false);
            this.reachedEnd = false;
        }
    }
    resolveRemoteData(remoteData, payload) {
        if (isSignal(remoteData)) {
            return remoteData();
        }
        if (typeof remoteData === "function") {
            try {
                return remoteData(payload);
            }
            catch (errorWithPayload) {
                try {
                    return remoteData();
                }
                catch {
                    throw errorWithPayload;
                }
            }
        }
        if (remoteData && typeof remoteData.then === "function") {
            return remoteData;
        }
        if (isObservable(remoteData)) {
            return remoteData;
        }
        return remoteData;
    }
    handleRemoteDataResult(result, param, requestId) {
        if (isObservable(result)) {
            result.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
                next: (response) => this.handleRemoteDataResult(response, param, requestId),
                error: (error) => {
                    console.error("[COMBOPAGINATE] remoteData observable error", error);
                    this.signalStore.setIsLoading(false);
                    this.reachedEnd = false;
                },
            });
            return;
        }
        if (result && typeof result.then === "function") {
            result
                .then((response) => this.handleRemoteDataResult(response, param, requestId))
                .catch((error) => {
                console.error("[COMBOPAGINATE] remoteData promise error", error);
                this.signalStore.setIsLoading(false);
                this.reachedEnd = false;
            });
            return;
        }
        if (typeof result === "function") {
            try {
                const signalValue = result();
                this.handleRemoteDataResult(signalValue, param, requestId);
                return;
            }
            catch (error) {
                console.error("[COMBOPAGINATE] remoteData signal error", error);
                this.signalStore.setIsLoading(false);
                this.reachedEnd = false;
                return;
            }
        }
        if (requestId !== this.remoteRequestCounter) {
            return;
        }
        this.applyRemoteDataResponse(result, param);
    }
    applyRemoteDataResponse(response, param) {
        const append = param?.append === true;
        const keyCombo = this.control?.formAction?.keyCombo;
        if (response === undefined || response === null) {
            this.signalStore.setIsLoading(false);
            this.reachedEnd = false;
            return;
        }
        const normalized = this.normalizeRemoteResponse(response);
        const items = normalized.items;
        const totalCount = normalized.totalCount ?? items.length;
        this.lastLoadedItemsCount = items.length;
        this.cacheOptions(items);
        this.control.formAction.paging = {
            ...(this.control.formAction.paging || this.initPagination),
            totalCount,
        };
        this.signalStore.setFilteredOptions({
            items,
            totalCount,
        }, keyCombo, append);
        const currentTotal = append
            ? this.mergeOptionsDistinct(this.signalStore.getTotalOptions?.() || [], items)
            : this.mergeOptionsDistinct([], items);
        const totalItems = this.shouldExposeMissingSelectedOptions()
            ? this.distinctOptionsByValue([
                ...this.getSelectedCachedOptionsMissingFrom(currentTotal),
                ...currentTotal,
            ])
            : this.distinctOptionsByValue(currentTotal);
        this.signalStore.setTotalOptions({
            /**
             * Non sporco totalOptions con i selezionati durante la normale apertura.
             * Aggiungo i selezionati mancanti solo quando c'è una ricerca attiva,
             * così il filtro remoto non fa sparire ciò che era già selezionato.
             */
            items: totalItems,
            totalCount,
        }, keyCombo);
        this.hydrateSelectedOptionsFromCurrentValue();
        this.cacheSelectedVisibleOptions();
        this.keepSelectedOptionsInStores();
        this.signalStore.setIsLoading(false);
        this.reachedEnd = false;
        this.refreshSelectedView();
        this.cdr.markForCheck();
        queueMicrotask(() => {
            const panel = this.selectRef?.panel?.nativeElement;
            if (panel && append) {
                panel.scrollTop = this.scrollTop;
            }
        });
        queueMicrotask(() => {
            if (this.control.formAction.type === TYPE_CONTROL_FORM.COMBOPAGINATE &&
                this.control.formAction?.enableInfiniteScroll === true) {
                this.bindPanelScrollWithRetry();
            }
        });
    }
    normalizeRemoteResponse(response) {
        if (Array.isArray(response)) {
            return {
                items: response,
                totalCount: response.length,
            };
        }
        if (response?.items && Array.isArray(response.items)) {
            return {
                items: response.items,
                totalCount: response.totalCount ??
                    response.total ??
                    response.countTotal ??
                    response.items.length,
            };
        }
        if (response?.data && Array.isArray(response.data)) {
            return {
                items: response.data,
                totalCount: response.totalCount ??
                    response.total ??
                    response.countTotal ??
                    response.data.length,
            };
        }
        if (response?.result && Array.isArray(response.result)) {
            return {
                items: response.result,
                totalCount: response.totalCount ??
                    response.total ??
                    response.countTotal ??
                    response.result.length,
            };
        }
        return {
            items: [],
            totalCount: 0,
        };
    }
    /***********************************************************************************************************************************
     * VISIBLE OPTIONS / MULTI LIST
     ***********************************************************************************************************************************/
    isPaginatedCombo() {
        return (this.control?.formAction?.type === TYPE_CONTROL_FORM.COMBOPAGINATE ||
            this.control?.formAction?.enableInfiniteScroll === true);
    }
    hasActiveSearch() {
        const inputValue = this.getSearchValue();
        const currentSearch = this.currentSearchValue;
        return !!((typeof inputValue === "string" && inputValue.trim() !== "") ||
            (typeof currentSearch === "string" && currentSearch.trim() !== ""));
    }
    shouldExposeMissingSelectedOptions() {
        /**
         * UX definitiva DynamicForm:
         * - combo normale / multiselect non paginata: ordine naturale sempre;
         * - combo paginata senza ricerca: ordine naturale della pagina/lista corrente;
         * - combo paginata durante ricerca: mostro anche i selezionati mancanti,
         *   perché il filtro remoto può non restituirli ma il valore deve restare
         *   visibile/checked e disponibile nel FormControl.
         */
        return this.isPaginatedCombo() && this.hasActiveSearch();
    }
    getVisibleOptions() {
        const naturalSource = this.getNaturalVisibleOptionSource();
        const source = this.shouldExposeMissingSelectedOptions()
            ? [
                ...this.getSelectedCachedOptionsMissingFrom(naturalSource),
                ...naturalSource,
            ]
            : naturalSource;
        return this.distinctOptionsByValue(source)
            .map((option) => this.normalizeOption(option))
            .filter((option) => !!option && option.hide !== true);
    }
    getNaturalVisibleOptionSource() {
        const defaultOptions = this.signalStore?.getDefaultOptions?.() || [];
        const filterOptions = this.signalStore?.getFilterOption?.() || [];
        const totalOptions = this.signalStore?.getTotalOptions?.() || [];
        const actionOptions = this.normalizeActionOptions(this.getOptionsValue());
        const initialOptions = this.normalizeActionOptions(this.control?.formAction?.initialOptions || []);
        return [
            ...defaultOptions,
            ...filterOptions,
            ...totalOptions,
            ...actionOptions,
            ...initialOptions,
        ];
    }
    getSelectedCachedOptionsMissingFrom(source) {
        const selectedCachedOptions = this.getSelectedCachedOptions();
        const sourceKeys = new Set(this.distinctOptionsByValue(source)
            .map((option) => this.toCompareKey(this.getOptionValue(option))));
        return selectedCachedOptions.filter((option) => {
            const key = this.toCompareKey(this.getOptionValue(option));
            return !sourceKeys.has(key);
        });
    }
    cacheInitialOptions() {
        const initialOptions = this.normalizeActionOptions(this.control?.formAction?.initialOptions || []);
        if (!initialOptions.length) {
            return;
        }
        this.cacheOptions(initialOptions);
        const currentDefaultOptions = this.signalStore?.getDefaultOptions?.() || [];
        const mergedDefaultOptions = this.distinctOptionsByValue([
            ...initialOptions,
            ...currentDefaultOptions,
        ]);
        this.signalStore?.setDefaultOptions?.(mergedDefaultOptions, this.control?.formAction?.keyCombo);
    }
    hydrateSelectedOptionsFromCurrentValue() {
        const formControl = this.control?.formAction?.formControl;
        if (!formControl) {
            return;
        }
        const values = Array.isArray(formControl.value)
            ? formControl.value
            : formControl.value === null ||
                formControl.value === undefined ||
                formControl.value === ""
                ? []
                : [formControl.value];
        const knownOptions = this.getAllKnownOptionsSafe();
        for (const value of values) {
            const option = knownOptions.find((item) => this.compareValue(this.getOptionValue(item), value));
            if (option) {
                this.cacheOption(option);
            }
        }
    }
    keepSelectedOptionsInStores() {
        const selectedOptions = this.distinctOptionsByValue([
            ...this.getSelectedCachedOptions(),
            ...this.getAllKnownOptionsSafe().filter((option) => this.isOptionSelected(option)),
        ]);
        this.signalStore.setSelectedOptions(selectedOptions);
        const currentTotal = this.normalizeActionOptions(this.signalStore?.getTotalOptions?.() || []);
        const totalItems = this.shouldExposeMissingSelectedOptions()
            ? this.distinctOptionsByValue([
                ...this.getSelectedCachedOptionsMissingFrom(currentTotal),
                ...currentTotal,
            ])
            : this.distinctOptionsByValue(currentTotal);
        this.signalStore.setTotalOptions({
            /**
             * In apertura normale non metto i selezionati dentro totalOptions, perché
             * la combo paginata non deve riordinarsi o mostrare extra non richiesti.
             * Durante la ricerca, invece, aggiungo i selezionati mancanti per non
             * perdere il valore scelto mentre il filtro remoto cambia la lista.
             */
            items: totalItems,
            totalCount: Math.max(currentTotal.length, selectedOptions.length),
        }, this.control?.formAction?.keyCombo);
    }
    cacheOption(option) {
        if (!option) {
            return;
        }
        const normalized = this.normalizeOption(option);
        const value = this.getOptionValue(normalized);
        const key = this.toCompareKey(value);
        this.selectedOptionsCache.set(key, normalized);
    }
    cacheOptions(options) {
        for (const option of options || []) {
            this.cacheOption(option);
        }
    }
    cacheSelectedVisibleOptions() {
        const options = [
            ...(this.signalStore?.getDefaultOptions?.() || []),
            ...(this.signalStore?.getFilterOption?.() || []),
            ...(this.signalStore?.getTotalOptions?.() || []),
            ...this.normalizeActionOptions(this.getOptionsValue()),
            ...this.normalizeActionOptions(this.control?.formAction?.initialOptions || []),
        ];
        for (const option of options) {
            if (this.isOptionSelected(option)) {
                this.cacheOption(option);
            }
        }
    }
    getSelectedCachedOptions() {
        const formControl = this.control?.formAction?.formControl;
        if (!formControl) {
            return [];
        }
        const selectedValues = Array.isArray(formControl.value)
            ? formControl.value
            : formControl.value === null ||
                formControl.value === undefined ||
                formControl.value === ""
                ? []
                : [formControl.value];
        return selectedValues
            .map((value) => this.selectedOptionsCache.get(this.toCompareKey(value)))
            .filter(Boolean);
    }
    distinctOptionsByValue(options) {
        const map = new Map();
        for (const option of options || []) {
            if (!option) {
                continue;
            }
            const normalized = this.normalizeOption(option);
            const value = this.getOptionValue(normalized);
            map.set(this.toCompareKey(value), normalized);
        }
        return Array.from(map.values());
    }
    toCompareKey(value) {
        if (value === null || value === undefined) {
            return String(value);
        }
        if (typeof value === "object") {
            try {
                return JSON.stringify(value);
            }
            catch {
                return String(value);
            }
        }
        return String(value);
    }
    /***********************************************************************************************************************************
     * SELECTED LABEL
     ***********************************************************************************************************************************/
    getValueCombo(formControl, smal) {
        return this.getSelectedLabel(smal);
    }
    getSelectedLabel(small = true) {
        if (!this.isReady()) {
            return "";
        }
        const value = this.control.formAction.formControl.value;
        if (value === null || value === undefined || value === "") {
            return this.control?.formAction?.placeholder ?? "";
        }
        const options = this.getAllKnownOptionsSafe();
        if (this.isMultipleSelection()) {
            const values = Array.isArray(value)
                ? value
                : value === null || value === undefined || value === ""
                    ? []
                    : [value];
            if (!values.length) {
                return this.control?.formAction?.placeholder ?? "";
            }
            const descriptions = values
                .map((id) => this.findOptionDescriptionByValue(id, options))
                .filter((description) => !!description);
            if (!descriptions.length) {
                return `${values.length} selezionati`;
            }
            if (!small) {
                return descriptions.join("; ");
            }
            return descriptions.length <= this.combotext.maxElementShow
                ? descriptions.join("; ")
                : `${descriptions
                    .slice(0, this.combotext.maxElementShow)
                    .join("; ")} + ${descriptions.length - this.combotext.maxElementShow}`;
        }
        return (this.findOptionDescriptionByValue(value, options) ||
            this.control?.formAction?.placeholder ||
            "");
    }
    findOptionDescriptionByValue(value, options) {
        const option = options.find((item) => this.optionEqualsValue(item, value));
        if (!option) {
            return typeof value === "object" ? "" : String(value ?? "");
        }
        return option.description || this.getOptionDescription(option);
    }
    optionEqualsValue(option, value) {
        if (option === null ||
            option === undefined ||
            value === null ||
            value === undefined) {
            return false;
        }
        const optionValue = this.getOptionValue(option);
        if (typeof value === "object") {
            const keyId = this.control?.formAction?.keyCombo?.keyId ?? "id";
            if (Array.isArray(keyId)) {
                const valueKey = keyId
                    .map((key) => value?.[key])
                    .filter((v) => v !== null && v !== undefined)
                    .join("|");
                return optionValue == valueKey;
            }
            return optionValue == value?.[keyId];
        }
        return optionValue == value;
    }
    getAllKnownOptionsSafe() {
        const fromCache = Array.from(this.selectedOptionsCache.values());
        const fromInitial = this.normalizeActionOptions(this.control?.formAction?.initialOptions || []);
        const fromTotal = this.signalStore?.getTotalOptions?.() || [];
        const fromSelected = this.signalStore?.getSelectedOptions?.() || [];
        const fromDefault = this.signalStore?.getDefaultOptions?.() || [];
        const fromFiltered = this.signalStore?.getFilterOption?.() || [];
        const fromAction = this.normalizeActionOptions(this.getOptionsValue());
        const key = this.control?.formAction?.keyCombo?.keyId ?? "id";
        const map = new Map();
        for (const item of [
            ...fromCache,
            ...fromInitial,
            ...fromTotal,
            ...fromSelected,
            ...fromDefault,
            ...fromFiltered,
            ...fromAction,
        ]) {
            if (!item) {
                continue;
            }
            const normalized = this.normalizeOption(item);
            const mapKey = this.resolveOptionKey(normalized, key);
            map.set(mapKey, normalized);
        }
        return Array.from(map.values());
    }
    /***********************************************************************************************************************************
     * OPTIONS HELPERS
     ***********************************************************************************************************************************/
    getOptionValue(option) {
        const keyId = this.control?.formAction?.keyCombo?.keyId ?? "id";
        if (Array.isArray(keyId)) {
            return keyId
                .map((key) => option?.[key])
                .filter((value) => value !== null && value !== undefined)
                .join("|");
        }
        return option?.[keyId] ?? option?.id;
    }
    getOptionDescription(option) {
        if (!option) {
            return "";
        }
        const keys = this.control?.formAction?.keyCombo?.keyDescription ?? [
            "description",
        ];
        const keyList = Array.isArray(keys) ? keys : [keys];
        return keyList
            .map((key) => option?.[key])
            .filter((value) => value !== null && value !== undefined && value !== "")
            .join(" - ");
    }
    normalizeActionOptions(value) {
        if (value &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            Array.isArray(value.items)) {
            return value.items.map((item) => this.normalizeOption(item));
        }
        return Array.isArray(value)
            ? value.map((item) => this.normalizeOption(item))
            : [];
    }
    normalizeOption(option) {
        if (!option) {
            return option;
        }
        return {
            ...option,
            id: option.id ?? this.getOptionValue(option),
            description: option.description ?? this.getOptionDescription(option),
        };
    }
    resolveOptionKey(option, key) {
        if (Array.isArray(key)) {
            return key
                .map((k) => option?.[k])
                .filter((value) => value !== null && value !== undefined)
                .join("|");
        }
        return option?.[key] ?? option?.id ?? JSON.stringify(option);
    }
    isCheckboxSelect() {
        return (this.control?.formAction?.checkboxSelect === true ||
            this.control?.formAction?.props?.checkboxSelect === true);
    }
    isMultipleSelection() {
        return (this.control?.formAction?.multiple === true || this.isCheckboxSelect());
    }
    isOptionDisabled(option) {
        return ((this.signalStore.getDisabledOptions() || []).indexOf(option?.id) > -1);
    }
    isOptionSelected(option) {
        const formControl = this.control?.formAction?.formControl;
        if (!formControl) {
            return false;
        }
        const optionValue = this.getOptionValue(option);
        const value = formControl.value;
        if (this.isMultipleSelection()) {
            const values = Array.isArray(value)
                ? value
                : value === null || value === undefined || value === ""
                    ? []
                    : [value];
            return values.some((item) => this.compareValue(item, optionValue));
        }
        return this.compareValue(value, optionValue);
    }
    getResetValue() {
        return this.isMultipleSelection() ? [] : null;
    }
    compareValue(value, optionValue) {
        return this.areJsonEqual(value, optionValue) || value == optionValue;
    }
    normalizeControlValueForMultiple() {
        const formControl = this.control?.formAction?.formControl;
        if (!formControl || !this.isMultipleSelection()) {
            return;
        }
        const value = formControl.value;
        if (Array.isArray(value)) {
            return;
        }
        if (value === null || value === undefined || value === "") {
            formControl.setValue([], { emitEvent: false });
            return;
        }
        formControl.setValue([value], { emitEvent: false });
    }
    mergeOptionsDistinct(current, next) {
        const key = this.control?.formAction?.keyCombo?.keyId ?? "id";
        const map = new Map();
        for (const item of [...(current || []), ...(next || [])]) {
            if (!item) {
                continue;
            }
            const normalized = this.normalizeOption(item);
            const mapKey = this.resolveOptionKey(normalized, key);
            map.set(mapKey, normalized);
        }
        return Array.from(map.values());
    }
    emitFormActionOnChange(ctx) {
        const onChange = this.control?.formAction?.onChange;
        if (typeof onChange !== "function") {
            return;
        }
        // Risolve l'opzione (o le opzioni) selezionata completa, inclusi i campi
        // extra passati dal consumer (es. `extra`), così che siano disponibili
        // nell'handler onChange tramite `payload.option`.
        const option = ctx.option !== undefined
            ? ctx.option
            : this.resolveSelectedOptionsForChange(ctx.value);
        const payload = {
            value: ctx.value,
            formControl: ctx.formControl,
            formAction: this.control.formAction,
            control: this.control,
            option,
            selected: ctx.selected,
            formGroup: this.group,
            form: this.group,
            instance: this,
            idForm: this.getIdForm(),
        };
        if (onChange.length <= 1) {
            onChange(payload);
            return;
        }
        onChange(payload.value, payload.formControl, payload.formAction, payload.control, payload.option, payload.selected, payload.formGroup, payload.instance, payload.idForm, payload);
    }
    /**
     * Restituisce l'oggetto opzione completo (con tutti i campi originali, incluso
     * `extra`) corrispondente al valore corrente del controllo. Per le selezioni
     * multiple restituisce l'array delle opzioni selezionate.
     */
    resolveSelectedOptionsForChange(value) {
        const known = this.getAllKnownOptionsSafe();
        const matchOne = (val) => known.find((opt) => this.compareValue(val, this.getOptionValue(opt))) ??
            null;
        if (this.isMultipleSelection()) {
            const values = Array.isArray(value)
                ? value
                : value === null || value === undefined || value === ""
                    ? []
                    : [value];
            return values.map((v) => matchOne(v)).filter((o) => o != null);
        }
        return matchOne(value);
    }
    onMaterialSelectionChange(event) {
        const formControl = this.control?.formAction?.formControl;
        if (!formControl) {
            return;
        }
        let value = event.value;
        if (this.isMultipleSelection()) {
            value = Array.isArray(value)
                ? value
                : value === null || value === undefined || value === ""
                    ? []
                    : [value];
        }
        formControl.setValue(value);
        formControl.markAsDirty();
        formControl.markAsTouched();
        formControl.updateValueAndValidity();
        this.hydrateSelectedOptionsFromCurrentValue();
        this.cacheSelectedVisibleOptions();
        this.keepSelectedOptionsInStores();
        this.refreshSelectedView();
        this.emitFormActionOnChange({
            value,
            formControl: formControl,
        });
    }
    resetCombo(event) {
        event?.stopPropagation();
        event?.preventDefault();
        const formControl = this.control?.formAction?.formControl;
        if (!formControl) {
            return;
        }
        const value = this.getResetValue();
        formControl.reset(value);
        formControl.markAsDirty();
        formControl.markAsTouched();
        formControl.updateValueAndValidity();
        this.selectedOptionsCache.clear();
        this.signalStore.setSelectedOptions([]);
        this.refreshSelectedView();
        this.emitFormActionOnChange({
            value,
            formControl: formControl,
        });
    }
    focusFilterInputOnOpen() {
        if (!this.control?.formAction?.autocomplete) {
            return;
        }
        this.focusFilterInputWithRetry(0);
    }
    focusFilterInputWithRetry(attempt) {
        const maxAttempts = 12;
        const inputFromViewChild = this.filterInput?.()?.nativeElement;
        const inputFromPanel = this.selectRef?.panel?.nativeElement?.querySelector('[data-df-combo-filter="true"]');
        const input = inputFromViewChild ?? inputFromPanel;
        if (input) {
            input.focus();
            /**
             * Utile quando riapri la combo con testo già presente.
             */
            queueMicrotask(() => {
                try {
                    input.select();
                }
                catch {
                    // alcuni input/browser possono non supportarlo, non blocco nulla
                }
            });
            return;
        }
        if (attempt >= maxAttempts) {
            return;
        }
        setTimeout(() => {
            this.focusFilterInputWithRetry(attempt + 1);
        }, 30);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: ComboComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: ComboComponent, isStandalone: false, selector: "app-combo", providers: [Store], viewQueries: [{ propertyName: "filterInput", first: true, predicate: ["filterInput"], descendants: true, read: ElementRef, isSignal: true }, { propertyName: "selectRef", first: true, predicate: ["selectRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction.css?.hide) {\r\n<ng-container>\r\n   <div class=\"d-flex w-100\">\r\n      <mat-form-field class=\"w-100 customMY\">\r\n         @if (control.formAction?.title) {\r\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\r\n               class=\"mx-1\">\r\n               info_outline\r\n            </mat-icon>\r\n            }\r\n         </mat-label>\r\n         }\r\n\r\n         <mat-select #selectRef class=\"py-0 my-0\" panelClass=\"df-combo-scroll-panel\"\r\n            [matTooltip]=\"(control.formAction.multiple === true || control.formAction.checkboxSelect === true) ? signalStore.getConcatStringDescription() : null\"\r\n            [formControl]=\"$any(control.formAction.formControl)\"\r\n            [multiple]=\"control.formAction.multiple === true || control.formAction.checkboxSelect === true\"\r\n            [compareWith]=\"compareMatSelectValues\" (openedChange)=\"onOpenedChange($event)\"\r\n            (selectionChange)=\"onMaterialSelectionChange($event)\" (focus)=\"emitFocus()\" (blur)=\"emitBlur()\">\r\n\r\n            <mat-select-trigger>\r\n               <span class=\"example-additional-selection\">\r\n                  {{ selectedLabelText() || getSelectedLabel() }}\r\n               </span>\r\n            </mat-select-trigger>\r\n\r\n            @if (control.formAction.autocomplete) {\r\n            <div class=\"search-container border-bottom my-auto py-0\" [fixSearchBox]=\"true\" [appStickyOffset]=\"'-7px'\"\r\n               (click)=\"$event.stopPropagation()\" (mousedown)=\"$event.stopPropagation()\">\r\n\r\n               <span class=\"search-icon my-auto\">\r\n                  <mat-icon class=\"m-auto\">search</mat-icon>\r\n               </span>\r\n\r\n               <input #filterInput data-df-combo-filter=\"true\" matInput class=\"ps-5 py-0\"\r\n                  [matTooltip]=\"control.formAction?.tipContent || null\"\r\n                  [placeholder]=\"control.formAction.placeholder || ''\" (click)=\"$event.stopPropagation()\"\r\n                  (mousedown)=\"$event.stopPropagation()\" (keydown)=\"$event.stopPropagation()\"\r\n                  (input)=\"onInputChange(filterInput.value)\" />\r\n\r\n               @if (signalStore.getIsLoading()) {\r\n               <div class=\"loading-bar-container\">\r\n                  <div class=\"loading-bar\"></div>\r\n               </div>\r\n               }\r\n            </div>\r\n            }\r\n\r\n            @for (option of getVisibleOptions(); track option.id) {\r\n            <mat-option class=\"w-100\" [value]=\"getOptionValue(option)\" [disabled]=\"isOptionDisabled(option)\"\r\n               [class.d-none]=\"option.hide\">\r\n\r\n               <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                  <div class=\"flex-grow-1\">\r\n                     {{ option.description }}\r\n                  </div>\r\n\r\n                  @if (option?.tag) {\r\n                  <div class=\"justify-content-end\">\r\n                     <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"30\" viewBox=\"0 0 80 30\">\r\n                        <rect x=\"0\" y=\"0\" width=\"80\" height=\"30\" rx=\"15\" ry=\"15\" [ngClass]=\"option?.tag.bgTag\" />\r\n\r\n                        <text x=\"50%\" y=\"50%\" font-size=\"10\" font-family=\"Arial, sans-serif\" text-anchor=\"middle\"\r\n                           dominant-baseline=\"middle\" [ngClass]=\"option?.tag.bgText\">\r\n                           {{ option?.tag?.name }}\r\n                        </text>\r\n                     </svg>\r\n                  </div>\r\n                  }\r\n               </div>\r\n            </mat-option>\r\n            }\r\n\r\n            @if (signalStore.getIsLoading()) {\r\n            <mat-option disabled>\r\n               Caricamento...\r\n            </mat-option>\r\n            }\r\n\r\n            @if (!signalStore.getIsLoading() && getVisibleOptions().length === 0) {\r\n            <mat-option disabled>\r\n               Nessun risultato\r\n            </mat-option>\r\n            }\r\n\r\n            @if (showOptionDefault && !(control.formAction.multiple === true || control.formAction.checkboxSelect ===\r\n            true)) {\r\n            <mat-option class=\"d-none\" [value]=\"null\"></mat-option>\r\n            }\r\n         </mat-select>\r\n\r\n         @if (control.formAction?.resetButton && hasComboValue()) {\r\n         <button matSuffix mat-icon-button aria-label=\"Clear\" type=\"button\" (click)=\"resetCombo($event)\">\r\n            <mat-icon>close</mat-icon>\r\n         </button>\r\n         }\r\n\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track $index) {\r\n         <mat-error>{{ error }}</mat-error>\r\n         }\r\n      </mat-form-field>\r\n\r\n      <div #dynamicContainer class=\"\"></div>\r\n   </div>\r\n</ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n", ":host{display:block}::ng-deep .df-combo-scroll-panel{--mat-minimal-pseudo-checkbox-selected-checkmark-color: white;--mat-minimal-pseudo-checkbox-selected-color: #3f51b5}::ng-deep .df-combo-scroll-panel .mat-mdc-option .mdc-list-item__primary-text{width:100%}::ng-deep .df-combo-scroll-panel .mat-mdc-option{min-height:44px}::ng-deep .df-combo-scroll-panel .mat-mdc-option.mdc-list-item--selected{background:#3f51b514}.search-container{position:sticky;top:0;z-index:2;background:#fff;min-height:44px;display:flex;align-items:center}.search-container input{width:100%;box-sizing:border-box}.search-icon{position:absolute;left:10px;display:flex;align-items:center;justify-content:center;pointer-events:none}.loading-bar-container{position:absolute;left:0;right:0;bottom:0;height:2px;overflow:hidden}.loading-bar{height:2px;width:40%;animation:df-combo-loading 1s infinite linear;background:currentColor;opacity:.5}@keyframes df-combo-loading{0%{transform:translate(-100%)}to{transform:translate(300%)}}\n"], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "directive", type: i7.MatSelectTrigger, selector: "mat-select-trigger" }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "directive", type: FixSearchBox, selector: "[fixSearchBox]", inputs: ["appStickyOffset", "cssClass", "fixSearchBox"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: ComboComponent, decorators: [{
            type: Component,
            args: [{ selector: "app-combo", standalone: false, providers: [Store], changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- @format -->\r\n\r\n@if (!control.formAction.css?.hide) {\r\n<ng-container>\r\n   <div class=\"d-flex w-100\">\r\n      <mat-form-field class=\"w-100 customMY\">\r\n         @if (control.formAction?.title) {\r\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\r\n               class=\"mx-1\">\r\n               info_outline\r\n            </mat-icon>\r\n            }\r\n         </mat-label>\r\n         }\r\n\r\n         <mat-select #selectRef class=\"py-0 my-0\" panelClass=\"df-combo-scroll-panel\"\r\n            [matTooltip]=\"(control.formAction.multiple === true || control.formAction.checkboxSelect === true) ? signalStore.getConcatStringDescription() : null\"\r\n            [formControl]=\"$any(control.formAction.formControl)\"\r\n            [multiple]=\"control.formAction.multiple === true || control.formAction.checkboxSelect === true\"\r\n            [compareWith]=\"compareMatSelectValues\" (openedChange)=\"onOpenedChange($event)\"\r\n            (selectionChange)=\"onMaterialSelectionChange($event)\" (focus)=\"emitFocus()\" (blur)=\"emitBlur()\">\r\n\r\n            <mat-select-trigger>\r\n               <span class=\"example-additional-selection\">\r\n                  {{ selectedLabelText() || getSelectedLabel() }}\r\n               </span>\r\n            </mat-select-trigger>\r\n\r\n            @if (control.formAction.autocomplete) {\r\n            <div class=\"search-container border-bottom my-auto py-0\" [fixSearchBox]=\"true\" [appStickyOffset]=\"'-7px'\"\r\n               (click)=\"$event.stopPropagation()\" (mousedown)=\"$event.stopPropagation()\">\r\n\r\n               <span class=\"search-icon my-auto\">\r\n                  <mat-icon class=\"m-auto\">search</mat-icon>\r\n               </span>\r\n\r\n               <input #filterInput data-df-combo-filter=\"true\" matInput class=\"ps-5 py-0\"\r\n                  [matTooltip]=\"control.formAction?.tipContent || null\"\r\n                  [placeholder]=\"control.formAction.placeholder || ''\" (click)=\"$event.stopPropagation()\"\r\n                  (mousedown)=\"$event.stopPropagation()\" (keydown)=\"$event.stopPropagation()\"\r\n                  (input)=\"onInputChange(filterInput.value)\" />\r\n\r\n               @if (signalStore.getIsLoading()) {\r\n               <div class=\"loading-bar-container\">\r\n                  <div class=\"loading-bar\"></div>\r\n               </div>\r\n               }\r\n            </div>\r\n            }\r\n\r\n            @for (option of getVisibleOptions(); track option.id) {\r\n            <mat-option class=\"w-100\" [value]=\"getOptionValue(option)\" [disabled]=\"isOptionDisabled(option)\"\r\n               [class.d-none]=\"option.hide\">\r\n\r\n               <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                  <div class=\"flex-grow-1\">\r\n                     {{ option.description }}\r\n                  </div>\r\n\r\n                  @if (option?.tag) {\r\n                  <div class=\"justify-content-end\">\r\n                     <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"30\" viewBox=\"0 0 80 30\">\r\n                        <rect x=\"0\" y=\"0\" width=\"80\" height=\"30\" rx=\"15\" ry=\"15\" [ngClass]=\"option?.tag.bgTag\" />\r\n\r\n                        <text x=\"50%\" y=\"50%\" font-size=\"10\" font-family=\"Arial, sans-serif\" text-anchor=\"middle\"\r\n                           dominant-baseline=\"middle\" [ngClass]=\"option?.tag.bgText\">\r\n                           {{ option?.tag?.name }}\r\n                        </text>\r\n                     </svg>\r\n                  </div>\r\n                  }\r\n               </div>\r\n            </mat-option>\r\n            }\r\n\r\n            @if (signalStore.getIsLoading()) {\r\n            <mat-option disabled>\r\n               Caricamento...\r\n            </mat-option>\r\n            }\r\n\r\n            @if (!signalStore.getIsLoading() && getVisibleOptions().length === 0) {\r\n            <mat-option disabled>\r\n               Nessun risultato\r\n            </mat-option>\r\n            }\r\n\r\n            @if (showOptionDefault && !(control.formAction.multiple === true || control.formAction.checkboxSelect ===\r\n            true)) {\r\n            <mat-option class=\"d-none\" [value]=\"null\"></mat-option>\r\n            }\r\n         </mat-select>\r\n\r\n         @if (control.formAction?.resetButton && hasComboValue()) {\r\n         <button matSuffix mat-icon-button aria-label=\"Clear\" type=\"button\" (click)=\"resetCombo($event)\">\r\n            <mat-icon>close</mat-icon>\r\n         </button>\r\n         }\r\n\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track $index) {\r\n         <mat-error>{{ error }}</mat-error>\r\n         }\r\n      </mat-form-field>\r\n\r\n      <div #dynamicContainer class=\"\"></div>\r\n   </div>\r\n</ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n", ":host{display:block}::ng-deep .df-combo-scroll-panel{--mat-minimal-pseudo-checkbox-selected-checkmark-color: white;--mat-minimal-pseudo-checkbox-selected-color: #3f51b5}::ng-deep .df-combo-scroll-panel .mat-mdc-option .mdc-list-item__primary-text{width:100%}::ng-deep .df-combo-scroll-panel .mat-mdc-option{min-height:44px}::ng-deep .df-combo-scroll-panel .mat-mdc-option.mdc-list-item--selected{background:#3f51b514}.search-container{position:sticky;top:0;z-index:2;background:#fff;min-height:44px;display:flex;align-items:center}.search-container input{width:100%;box-sizing:border-box}.search-icon{position:absolute;left:10px;display:flex;align-items:center;justify-content:center;pointer-events:none}.loading-bar-container{position:absolute;left:0;right:0;bottom:0;height:2px;overflow:hidden}.loading-bar{height:2px;width:40%;animation:df-combo-loading 1s infinite linear;background:currentColor;opacity:.5}@keyframes df-combo-loading{0%{transform:translate(-100%)}to{transform:translate(300%)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], propDecorators: { selectRef: [{
                type: ViewChild,
                args: ["selectRef"]
            }] } });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-29 19:47:50
 * @modify date 2022-03-29 19:47:50
 * @desc [description]
 */
class CheckboxComponent extends BaseComponent {
    /************************************************************************************************************************************************************************ */
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: CheckboxComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: CheckboxComponent, isStandalone: false, selector: "app-checkbox", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"row customMY w-auto\">\r\n         <div [class]=\"control?.formAction?.css?.classRadio\">\r\n            <mat-checkbox\r\n               class=\"display-contents\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\">\r\n\r\n               {{ control.formAction.title }}\r\n\r\n            </mat-checkbox>\r\n\r\n            @if (control.formAction?.info) {\r\n               <mat-icon\r\n                  [matTooltip]=\"control.formAction?.info.msg\"\r\n                  [style.color]=\"control.formAction?.info.color\"\r\n                  class=\"mx-1 pt-2 p-1\"\r\n                  style=\"font-size: small\">\r\n                  info_outline\r\n               </mat-icon>\r\n            }\r\n         </div>\r\n\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n            <mat-error>{{ error }}</mat-error>\r\n         }\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2$2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-checkbox', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"row customMY w-auto\">\r\n         <div [class]=\"control?.formAction?.css?.classRadio\">\r\n            <mat-checkbox\r\n               class=\"display-contents\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\">\r\n\r\n               {{ control.formAction.title }}\r\n\r\n            </mat-checkbox>\r\n\r\n            @if (control.formAction?.info) {\r\n               <mat-icon\r\n                  [matTooltip]=\"control.formAction?.info.msg\"\r\n                  [style.color]=\"control.formAction?.info.color\"\r\n                  class=\"mx-1 pt-2 p-1\"\r\n                  style=\"font-size: small\">\r\n                  info_outline\r\n               </mat-icon>\r\n            }\r\n         </div>\r\n\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n            <mat-error>{{ error }}</mat-error>\r\n         }\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-11-18 12:55:27
 * @modify date 2022-11-18 12:55:27
 * @desc [description]
 */
class CurrencyComponent extends BaseComponent {
    /************************************************************************************************************************************************************************ */
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: CurrencyComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: CurrencyComponent, isStandalone: false, selector: "app-currency", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               matInput\r\n               type=\"number\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [min]=\"control.formAction?.optionNumber?.min\"\r\n               [max]=\"control.formAction?.optionNumber?.max\"\r\n               [step]=\"control.formAction?.optionNumber?.step || 0.01\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            @if (control.formAction?.currency) {\r\n               <span matSuffix class=\"me-2\">\r\n                  {{ control.formAction.currency }}\r\n               </span>\r\n            }\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint *ngIf=\"control?.formAction?.hint\" [attr.align]=\"'start'\">\r\n         {{ control?.formAction?.hint }}\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i2.MaxValidator, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: ["max"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: CurrencyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-currency', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               matInput\r\n               type=\"number\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [min]=\"control.formAction?.optionNumber?.min\"\r\n               [max]=\"control.formAction?.optionNumber?.max\"\r\n               [step]=\"control.formAction?.optionNumber?.step || 0.01\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            @if (control.formAction?.currency) {\r\n               <span matSuffix class=\"me-2\">\r\n                  {{ control.formAction.currency }}\r\n               </span>\r\n            }\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint *ngIf=\"control?.formAction?.hint\" [attr.align]=\"'start'\">\r\n         {{ control?.formAction?.hint }}\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/** @format */
class DateRangeComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    ngOnInit() {
        super.ngOnInit();
        this.ensureDateRangeControl();
    }
    ensureDateRangeControl() {
        const currentControl = this.control?.formAction?.formControl;
        if (currentControl instanceof FormGroup) {
            if (!currentControl.get('from')) {
                currentControl.addControl('from', new FormControl(null));
            }
            if (!currentControl.get('to')) {
                currentControl.addControl('to', new FormControl(null));
            }
            return;
        }
        this.control.formAction.formControl = new FormGroup({
            from: new FormControl(null),
            to: new FormControl(null),
        });
    }
    openedStream(event) {
        this.ensureDateRangeControl();
        this.emitOpened();
    }
    closedStream(event) {
        this.ensureDateRangeControl();
        const rangeControl = this.control.formAction.formControl;
        if (!rangeControl.get('to')?.value) {
            rangeControl.get('to')?.setValue(rangeControl.get('from')?.value);
        }
        this.emitClosed();
    }
    applyRange() {
        this.ensureDateRangeControl();
        const rangeControl = this.control.formAction.formControl;
        this.control.formAction?.optionDate?.onClose?.(rangeControl.value, rangeControl);
        this.control.formAction?.onClose?.(rangeControl.value, rangeControl, this.utils);
        rangeControl.markAsDirty();
        rangeControl.markAsTouched();
        rangeControl.updateValueAndValidity();
    }
    stopOutFocus() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateRangeComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: DateRangeComponent, isStandalone: false, selector: "app-date-range", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field\r\n            class=\"w-100 customMY\"\r\n            [matTooltip]=\"control.formAction?.tipContent || null\">\r\n\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <mat-date-range-input\r\n               #datainput\r\n               [min]=\"control.formAction?.optionDate?.min\"\r\n               [max]=\"control.formAction?.optionDate?.max\"\r\n               [rangePicker]=\"picker\"\r\n               [formGroup]=\"$any(control.formAction.formControl)\">\r\n\r\n               <input\r\n                  matStartDate\r\n                  formControlName=\"from\"\r\n                  [class.disabled]=\"control.formAction.formControl.disabled\"\r\n                  [placeholder]=\"control.formAction?.placeholder || 'Data inizio'\"\r\n                  (focus)=\"emitFocus()\"\r\n                  (blur)=\"emitBlur()\" />\r\n\r\n               <input\r\n                  matEndDate\r\n                  formControlName=\"to\"\r\n                  [class.disabled]=\"control.formAction.formControl.disabled\"\r\n                  placeholder=\"Data fine\"\r\n                  (focus)=\"emitFocus()\"\r\n                  (blur)=\"emitBlur()\" />\r\n            </mat-date-range-input>\r\n\r\n            <mat-datepicker-toggle\r\n               matIconSuffix\r\n               [for]=\"picker\">\r\n            </mat-datepicker-toggle>\r\n\r\n            <mat-date-range-picker\r\n               #picker\r\n               (opened)=\"openedStream($event)\"\r\n               (closed)=\"closedStream($event)\">\r\n\r\n               <mat-date-range-picker-actions>\r\n                  <button mat-button matDateRangePickerCancel type=\"button\">\r\n                     Chiudi\r\n                  </button>\r\n\r\n                  <button\r\n                     mat-raised-button\r\n                     color=\"primary\"\r\n                     matDateRangePickerApply\r\n                     type=\"button\"\r\n                     (click)=\"applyRange()\">\r\n                     OK\r\n                  </button>\r\n               </mat-date-range-picker-actions>\r\n            </mat-date-range-picker>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @if (control?.formAction?.hint) {\r\n         <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3$1.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3$1.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3$1.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3$1.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i3$1.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i3$1.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i3$1.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-date-range', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field\r\n            class=\"w-100 customMY\"\r\n            [matTooltip]=\"control.formAction?.tipContent || null\">\r\n\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <mat-date-range-input\r\n               #datainput\r\n               [min]=\"control.formAction?.optionDate?.min\"\r\n               [max]=\"control.formAction?.optionDate?.max\"\r\n               [rangePicker]=\"picker\"\r\n               [formGroup]=\"$any(control.formAction.formControl)\">\r\n\r\n               <input\r\n                  matStartDate\r\n                  formControlName=\"from\"\r\n                  [class.disabled]=\"control.formAction.formControl.disabled\"\r\n                  [placeholder]=\"control.formAction?.placeholder || 'Data inizio'\"\r\n                  (focus)=\"emitFocus()\"\r\n                  (blur)=\"emitBlur()\" />\r\n\r\n               <input\r\n                  matEndDate\r\n                  formControlName=\"to\"\r\n                  [class.disabled]=\"control.formAction.formControl.disabled\"\r\n                  placeholder=\"Data fine\"\r\n                  (focus)=\"emitFocus()\"\r\n                  (blur)=\"emitBlur()\" />\r\n            </mat-date-range-input>\r\n\r\n            <mat-datepicker-toggle\r\n               matIconSuffix\r\n               [for]=\"picker\">\r\n            </mat-datepicker-toggle>\r\n\r\n            <mat-date-range-picker\r\n               #picker\r\n               (opened)=\"openedStream($event)\"\r\n               (closed)=\"closedStream($event)\">\r\n\r\n               <mat-date-range-picker-actions>\r\n                  <button mat-button matDateRangePickerCancel type=\"button\">\r\n                     Chiudi\r\n                  </button>\r\n\r\n                  <button\r\n                     mat-raised-button\r\n                     color=\"primary\"\r\n                     matDateRangePickerApply\r\n                     type=\"button\"\r\n                     (click)=\"applyRange()\">\r\n                     OK\r\n                  </button>\r\n               </mat-date-range-picker-actions>\r\n            </mat-date-range-picker>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @if (control?.formAction?.hint) {\r\n         <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/**
 * @format
 * @author luca.piciollo
 */
const YEAR_MODE_FORMATS = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class DateYearComponent extends BaseComponent {
    get minDate() {
        const min = this.control?.formAction?.optionDate?.min;
        return min ? moment(min, 'YYYY').startOf('year') : null;
    }
    get maxDate() {
        const max = this.control?.formAction?.optionDate?.max;
        return max ? moment(max, 'YYYY').endOf('year') : null;
    }
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
        this._minDateToken = inject(MIN_DATE_CALENDAR);
        this._maxDateToken = inject(MAX_DATE_CALENDAR);
    }
    ngAfterViewInit() {
        // Non imporre min/max automatici per l'anno: l'utente deve settare optionDate esplicitamente.
        // I token di default del modulo sono troppo restrittivi per un picker annuale.
        super.ngAfterViewInit?.();
    }
    get currentYear() {
        const v = this.control?.formAction?.formControl?.value;
        if (v && moment.isMoment(v))
            return v.year();
        if (v instanceof Date)
            return v.getFullYear();
        return moment().year();
    }
    get minYear() {
        const min = this.control?.formAction?.optionDate?.min;
        return min ? moment(min, 'YYYY').year() : 1900;
    }
    get maxYear() {
        const max = this.control?.formAction?.optionDate?.max;
        return max ? moment(max, 'YYYY').year() : 2100;
    }
    prevYear() {
        const current = this.currentYear;
        if (current > this.maxYear) {
            // valore fuori range superiore → salta al massimo consentito
            this._setYear(this.maxYear);
        }
        else {
            const y = current - 1;
            if (y >= this.minYear)
                this._setYear(y);
        }
    }
    nextYear() {
        const current = this.currentYear;
        if (current < this.minYear) {
            // valore fuori range inferiore → salta al minimo consentito
            this._setYear(this.minYear);
        }
        else {
            const y = current + 1;
            if (y <= this.maxYear)
                this._setYear(y);
        }
    }
    _setYear(year) {
        const date = moment().year(year).startOf('year');
        this.control.formAction.formControl.setValue(date);
        this.control.formAction.formControl.markAsDirty();
        this.control.formAction.formControl.updateValueAndValidity();
    }
    openedStream() {
        this.emitOpened();
    }
    closedStream() {
        this.emitClosed();
    }
    _yearSelectedHandler(chosenDate, datepicker) {
        this._setYear(chosenDate.year());
        datepicker.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateYearComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: DateYearComponent, isStandalone: false, selector: "app-year", providers: [
            { provide: MAT_DATE_LOCALE, useValue: 'it' },
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE],
            },
            { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DateYearComponent),
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0, template: "<!-- @format -->\n\n@if (!control.formAction?.css?.hide) {\n<ng-container>\n   <div class=\"d-flex w-100\">\n      <mat-form-field class=\"w-100 customMY\">\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\n            {{ control.formAction.title }}\n\n            @if (control.formAction?.info) {\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\n               class=\"mx-1\">\n               info_outline\n            </mat-icon>\n            }\n         </mat-label>\n\n         <button matPrefix mat-icon-button type=\"button\"\n            [disabled]=\"control.formAction.formControl.disabled || currentYear <= minYear\"\n            (click)=\"$event.stopPropagation(); prevYear()\">\n            <mat-icon>chevron_left</mat-icon>\n         </button>\n\n         <input #datainput matInput [matDatepicker]=\"datepicker\" [matTooltip]=\"control.formAction?.tipContent || null\"\n            [min]=\"minDate\" [max]=\"maxDate\" [formControl]=\"$any(control.formAction?.formControl)\"\n            [class.disabled]=\"control.formAction.formControl.disabled\"\n            [placeholder]=\"control.formAction.placeholder || 'AAAA'\" style=\"text-align: center\" readonly\n            (focus)=\"emitFocus()\" (blur)=\"emitBlur()\" />\n\n         <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n\n         <button matSuffix mat-icon-button type=\"button\"\n            [disabled]=\"control.formAction.formControl.disabled || currentYear >= maxYear\"\n            (click)=\"$event.stopPropagation(); nextYear()\">\n            <mat-icon>chevron_right</mat-icon>\n         </button>\n\n         <mat-datepicker #datepicker panelClass=\"jp-year-picker\" startView=\"multi-year\" (opened)=\"openedStream()\"\n            (closed)=\"closedStream()\" (yearSelected)=\"_yearSelectedHandler($event, datepicker)\">\n         </mat-datepicker>\n\n         @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\n         <button matSuffix mat-icon-button aria-label=\"Clear\" type=\"button\"\n            (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\n            <mat-icon>close</mat-icon>\n         </button>\n         }\n      </mat-form-field>\n\n      <div #dynamicContainer class=\"\"></div>\n   </div>\n\n   @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\n   <mat-error>{{ error }}</mat-error>\n   }\n\n   @if (control?.formAction?.hint) {\n   <mat-hint>{{ control.formAction.hint }}</mat-hint>\n   }\n</ng-container>\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateYearComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-year', standalone: false, providers: [
                        { provide: MAT_DATE_LOCALE, useValue: 'it' },
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DateYearComponent),
                            multi: true,
                        },
                    ], template: "<!-- @format -->\n\n@if (!control.formAction?.css?.hide) {\n<ng-container>\n   <div class=\"d-flex w-100\">\n      <mat-form-field class=\"w-100 customMY\">\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\n            {{ control.formAction.title }}\n\n            @if (control.formAction?.info) {\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\n               class=\"mx-1\">\n               info_outline\n            </mat-icon>\n            }\n         </mat-label>\n\n         <button matPrefix mat-icon-button type=\"button\"\n            [disabled]=\"control.formAction.formControl.disabled || currentYear <= minYear\"\n            (click)=\"$event.stopPropagation(); prevYear()\">\n            <mat-icon>chevron_left</mat-icon>\n         </button>\n\n         <input #datainput matInput [matDatepicker]=\"datepicker\" [matTooltip]=\"control.formAction?.tipContent || null\"\n            [min]=\"minDate\" [max]=\"maxDate\" [formControl]=\"$any(control.formAction?.formControl)\"\n            [class.disabled]=\"control.formAction.formControl.disabled\"\n            [placeholder]=\"control.formAction.placeholder || 'AAAA'\" style=\"text-align: center\" readonly\n            (focus)=\"emitFocus()\" (blur)=\"emitBlur()\" />\n\n         <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n\n         <button matSuffix mat-icon-button type=\"button\"\n            [disabled]=\"control.formAction.formControl.disabled || currentYear >= maxYear\"\n            (click)=\"$event.stopPropagation(); nextYear()\">\n            <mat-icon>chevron_right</mat-icon>\n         </button>\n\n         <mat-datepicker #datepicker panelClass=\"jp-year-picker\" startView=\"multi-year\" (opened)=\"openedStream()\"\n            (closed)=\"closedStream()\" (yearSelected)=\"_yearSelectedHandler($event, datepicker)\">\n         </mat-datepicker>\n\n         @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\n         <button matSuffix mat-icon-button aria-label=\"Clear\" type=\"button\"\n            (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\n            <mat-icon>close</mat-icon>\n         </button>\n         }\n      </mat-form-field>\n\n      <div #dynamicContainer class=\"\"></div>\n   </div>\n\n   @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\n   <mat-error>{{ error }}</mat-error>\n   }\n\n   @if (control?.formAction?.hint) {\n   <mat-hint>{{ control.formAction.hint }}</mat-hint>\n   }\n</ng-container>\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/** @format */
class RatingComponent extends BaseComponent {
    constructor(injector, element, cdr) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
        this.cdr = cdr;
        this._hoverValue = 0;
    }
    get maxStars() {
        return this.control?.formAction?.optionRating?.max ?? 5;
    }
    get stars() {
        return Array.from({ length: this.maxStars }, (_, i) => i + 1);
    }
    get currentValue() {
        return this.control?.formAction?.formControl?.value ?? 0;
    }
    get hoverValue() {
        return this._hoverValue;
    }
    setHover(star) {
        if (!this.control?.formAction?.formControl?.disabled) {
            this._hoverValue = star;
            this.cdr.markForCheck();
        }
    }
    clearHover() {
        this._hoverValue = 0;
        this.cdr.markForCheck();
    }
    selectStar(star) {
        const fc = this.control?.formAction?.formControl;
        if (!fc || fc.disabled)
            return;
        const prevValue = fc.value;
        // click sulla stessa stella → porta a 0 (nessuna stella illuminata)
        const newValue = prevValue === star ? 0 : star;
        fc.setValue(newValue);
        fc.markAsDirty();
        fc.updateValueAndValidity();
        this.cdr.markForCheck();
        this.callOnChange(prevValue, newValue);
    }
    isActive(star) {
        const display = this._hoverValue || this.currentValue;
        return star <= display;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: RatingComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: RatingComponent, isStandalone: false, selector: "app-rating", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\n\n@if (!control.formAction?.css?.hide) {\n<ng-container>\n    <div class=\"rating-wrapper customMY\">\n\n        <label class=\"rating-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\n            {{ control.formAction.title }}\n\n            @if (control.formAction?.info) {\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\n                class=\"rating-info-icon\">\n                info_outline\n            </mat-icon>\n            }\n        </label>\n\n        <div class=\"stars-row\" [class.disabled]=\"control.formAction.formControl.disabled\"\n            [matTooltip]=\"control.formAction?.tipContent || null\" (mouseleave)=\"clearHover()\">\n\n            @for (star of stars; track star) {\n            <button type=\"button\" mat-icon-button class=\"star-btn\" [class.active]=\"isActive(star)\"\n                [disabled]=\"control.formAction.formControl.disabled\" (mouseenter)=\"setHover(star)\"\n                (click)=\"$event.stopPropagation(); selectStar(star)\" (focus)=\"emitFocus()\" (blur)=\"emitBlur()\">\n                <mat-icon>{{ isActive(star) ? 'star' : 'star_border' }}</mat-icon>\n            </button>\n            }\n\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\n            <button mat-icon-button type=\"button\" class=\"reset-btn\"\n                (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\n                <mat-icon>close</mat-icon>\n            </button>\n            }\n        </div>\n\n        @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\n        <mat-error class=\"rating-error\">{{ error }}</mat-error>\n        }\n\n        @if (control?.formAction?.hint) {\n        <mat-hint>{{ control.formAction.hint }}</mat-hint>\n        }\n    </div>\n\n    <div #dynamicContainer class=\"\"></div>\n</ng-container>\n}", styles: [":host{display:block}.rating-wrapper{display:flex;flex-direction:column;gap:4px;padding:4px 0 8px}.rating-label{font-size:12px;font-weight:400;color:#0009;line-height:1.2;margin-bottom:2px}.rating-label.disabled{opacity:.4}.rating-info-icon{font-size:14px;width:14px;height:14px;vertical-align:middle;margin-left:4px}.stars-row{display:flex;flex-direction:row;align-items:center;gap:0;margin-left:-4px}.stars-row.disabled{pointer-events:none}.stars-row.disabled .star-btn,.stars-row.disabled .star-btn *{pointer-events:none;--mdc-icon-button-state-layer-color: transparent;--mdc-icon-button-hover-state-layer-opacity: 0;--mat-icon-button-hover-state-layer-opacity: 0}.star-btn{--mdc-icon-button-state-layer-size: 36px;--mdc-icon-button-icon-size: 26px;width:36px;height:36px;padding:0;transition:transform .1s ease}.star-btn .mat-icon{font-size:26px;width:26px;height:26px;line-height:26px;transition:color .12s ease}.star-btn.active .mat-icon{color:#f5a623}.star-btn:not(.active) .mat-icon{color:#f5a6234d}.star-btn:hover:not([disabled]){transform:scale(1.15)}.star-btn[disabled]{opacity:.5;pointer-events:none}.reset-btn{color:#0006;width:28px;height:28px}.reset-btn .mat-icon{font-size:18px;width:18px;height:18px}.rating-error{font-size:12px}\n"], dependencies: [{ kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-rating', standalone: false, template: "<!-- @format -->\n\n@if (!control.formAction?.css?.hide) {\n<ng-container>\n    <div class=\"rating-wrapper customMY\">\n\n        <label class=\"rating-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\n            {{ control.formAction.title }}\n\n            @if (control.formAction?.info) {\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\n                class=\"rating-info-icon\">\n                info_outline\n            </mat-icon>\n            }\n        </label>\n\n        <div class=\"stars-row\" [class.disabled]=\"control.formAction.formControl.disabled\"\n            [matTooltip]=\"control.formAction?.tipContent || null\" (mouseleave)=\"clearHover()\">\n\n            @for (star of stars; track star) {\n            <button type=\"button\" mat-icon-button class=\"star-btn\" [class.active]=\"isActive(star)\"\n                [disabled]=\"control.formAction.formControl.disabled\" (mouseenter)=\"setHover(star)\"\n                (click)=\"$event.stopPropagation(); selectStar(star)\" (focus)=\"emitFocus()\" (blur)=\"emitBlur()\">\n                <mat-icon>{{ isActive(star) ? 'star' : 'star_border' }}</mat-icon>\n            </button>\n            }\n\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\n            <button mat-icon-button type=\"button\" class=\"reset-btn\"\n                (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\n                <mat-icon>close</mat-icon>\n            </button>\n            }\n        </div>\n\n        @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\n        <mat-error class=\"rating-error\">{{ error }}</mat-error>\n        }\n\n        @if (control?.formAction?.hint) {\n        <mat-hint>{{ control.formAction.hint }}</mat-hint>\n        }\n    </div>\n\n    <div #dynamicContainer class=\"\"></div>\n</ng-container>\n}", styles: [":host{display:block}.rating-wrapper{display:flex;flex-direction:column;gap:4px;padding:4px 0 8px}.rating-label{font-size:12px;font-weight:400;color:#0009;line-height:1.2;margin-bottom:2px}.rating-label.disabled{opacity:.4}.rating-info-icon{font-size:14px;width:14px;height:14px;vertical-align:middle;margin-left:4px}.stars-row{display:flex;flex-direction:row;align-items:center;gap:0;margin-left:-4px}.stars-row.disabled{pointer-events:none}.stars-row.disabled .star-btn,.stars-row.disabled .star-btn *{pointer-events:none;--mdc-icon-button-state-layer-color: transparent;--mdc-icon-button-hover-state-layer-opacity: 0;--mat-icon-button-hover-state-layer-opacity: 0}.star-btn{--mdc-icon-button-state-layer-size: 36px;--mdc-icon-button-icon-size: 26px;width:36px;height:36px;padding:0;transition:transform .1s ease}.star-btn .mat-icon{font-size:26px;width:26px;height:26px;line-height:26px;transition:color .12s ease}.star-btn.active .mat-icon{color:#f5a623}.star-btn:not(.active) .mat-icon{color:#f5a6234d}.star-btn:hover:not([disabled]){transform:scale(1.15)}.star-btn[disabled]{opacity:.5;pointer-events:none}.reset-btn{color:#0006;width:28px;height:28px}.reset-btn .mat-icon{font-size:18px;width:18px;height:18px}.rating-error{font-size:12px}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }] });

/**
 * @format
 * @author luca.piciollo
 */
class ArrayStringComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
        this.getList = signal([]);
        this.errorsInchipValue = signal(null);
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.announcer = inject(LiveAnnouncer);
        effect(() => {
            const list = this.getList();
            untracked(() => {
                const control = this.control?.formAction?.formControl;
                if (!control) {
                    return;
                }
                control.setValue(list, { emitEvent: true });
                control.markAsDirty();
                control.updateValueAndValidity();
            });
        });
    }
    ngOnInit() {
        super.ngOnInit();
        const value = this.control?.formAction?.formControl?.value;
        this.getList.set(Array.isArray(value) ? value : []);
    }
    add(event) {
        const value = (event.value || '').trim();
        const currentValue = this.getCurrentValue();
        if (value.length < 1) {
            this.errorsInchipValue.set(this.validateWithExtractedValidators(currentValue));
            return;
        }
        const nextValue = [...currentValue, value];
        this.errorsInchipValue.set(this.validateWithExtractedValidators(nextValue));
        if (Object.keys(this.errorsInchipValue() || {}).length < 1) {
            const prevValue = this.getCurrentValue();
            this.getList.set(nextValue);
            event.chipInput?.clear();
            this.control?.formAction?.action?.(this.control.formAction.formControl);
            this.callOnChange(prevValue, nextValue);
        }
    }
    remove(value) {
        const prevValue = this.getCurrentValue();
        const nextValue = prevValue.filter(item => item !== value);
        this.getList.set(nextValue);
        this.control?.formAction?.action?.(this.control.formAction.formControl);
        this.callOnChange(prevValue, nextValue);
    }
    getCurrentValue() {
        const value = this.control?.formAction?.formControl?.value;
        return Array.isArray(value) ? value : [];
    }
    validateWithExtractedValidators(value) {
        const control = { value };
        const validators = this.control?.formAction?.formControl?.validator
            ? [this.control.formAction.formControl.validator]
            : [];
        const errors = validators.reduce((acc, validator) => ({
            ...acc,
            ...validator(control),
        }), null);
        return errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: ArrayStringComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: ArrayStringComponent, isStandalone: false, selector: "app-arraystring", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <mat-chip-grid #chipGrid>\r\n               @for (option of getCurrentValue(); track option) {\r\n                  <mat-chip-row\r\n                     class=\"p-0 m-0 b-none\"\r\n                     style=\"background-color: transparent\"\r\n                     [editable]=\"!control.formAction.formControl.disabled\"\r\n                     (removed)=\"remove(option)\">\r\n\r\n                     {{ option }}\r\n\r\n                     <button\r\n                        matChipRemove\r\n                        type=\"button\"\r\n                        [attr.aria-label]=\"'remove ' + option\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                     </button>\r\n                  </mat-chip-row>\r\n               }\r\n\r\n               <input\r\n                  placeholder=\"Aggiungi valore...\"\r\n                  [disabled]=\"control.formAction.formControl.disabled\"\r\n                  [matChipInputFor]=\"chipGrid\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                  (focus)=\"emitFocus()\"\r\n                  (blur)=\"emitBlur()\"\r\n                  (matChipInputTokenEnd)=\"add($event)\" />\r\n            </mat-chip-grid>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset(); getList.set([])\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControlFromObj(errorsInchipValue()); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i2$3.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2$3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2$3.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2$3.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: ArrayStringComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-arraystring', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <mat-chip-grid #chipGrid>\r\n               @for (option of getCurrentValue(); track option) {\r\n                  <mat-chip-row\r\n                     class=\"p-0 m-0 b-none\"\r\n                     style=\"background-color: transparent\"\r\n                     [editable]=\"!control.formAction.formControl.disabled\"\r\n                     (removed)=\"remove(option)\">\r\n\r\n                     {{ option }}\r\n\r\n                     <button\r\n                        matChipRemove\r\n                        type=\"button\"\r\n                        [attr.aria-label]=\"'remove ' + option\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                     </button>\r\n                  </mat-chip-row>\r\n               }\r\n\r\n               <input\r\n                  placeholder=\"Aggiungi valore...\"\r\n                  [disabled]=\"control.formAction.formControl.disabled\"\r\n                  [matChipInputFor]=\"chipGrid\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                  (focus)=\"emitFocus()\"\r\n                  (blur)=\"emitBlur()\"\r\n                  (matChipInputTokenEnd)=\"add($event)\" />\r\n            </mat-chip-grid>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset(); getList.set([])\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControlFromObj(errorsInchipValue()); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

class DateComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    openedStream(event, datainput) {
        this.emitOpened();
    }
    closedStream(event) {
        this.emitClosed();
    }
    stopOutFocus(datainput) {
        datainput?.focus?.();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: DateComponent, isStandalone: false, selector: "app-date", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               #datainput\r\n               matInput\r\n               [readonly]=\"control.formAction.readonly\"\r\n               [matDatepicker]=\"datepicker\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [min]=\"control.formAction?.optionDate?.min\"\r\n               [max]=\"control.formAction?.optionDate?.max\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            <mat-datepicker-toggle\r\n               matIconSuffix\r\n               [for]=\"datepicker\"\r\n               (click)=\"stopOutFocus($any(datainput))\">\r\n            </mat-datepicker-toggle>\r\n\r\n            <mat-datepicker\r\n               #datepicker\r\n               (opened)=\"openedStream($event, $any(datainput))\"\r\n               (closed)=\"closedStream($event)\">\r\n               <mat-datepicker-actions>\r\n                  <button mat-button matDatepickerCancel type=\"button\">Chiudi</button>\r\n                  <button mat-raised-button color=\"primary\" matDatepickerApply type=\"button\">OK</button>\r\n               </mat-datepicker-actions>\r\n            </mat-datepicker>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @if (control?.formAction?.hint) {\r\n         <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3$1.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i3$1.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i3$1.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
__decorate([
    Delay(0)
], DateComponent.prototype, "stopOutFocus", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-date', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               #datainput\r\n               matInput\r\n               [readonly]=\"control.formAction.readonly\"\r\n               [matDatepicker]=\"datepicker\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [min]=\"control.formAction?.optionDate?.min\"\r\n               [max]=\"control.formAction?.optionDate?.max\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            <mat-datepicker-toggle\r\n               matIconSuffix\r\n               [for]=\"datepicker\"\r\n               (click)=\"stopOutFocus($any(datainput))\">\r\n            </mat-datepicker-toggle>\r\n\r\n            <mat-datepicker\r\n               #datepicker\r\n               (opened)=\"openedStream($event, $any(datainput))\"\r\n               (closed)=\"closedStream($event)\">\r\n               <mat-datepicker-actions>\r\n                  <button mat-button matDatepickerCancel type=\"button\">Chiudi</button>\r\n                  <button mat-raised-button color=\"primary\" matDatepickerApply type=\"button\">OK</button>\r\n               </mat-datepicker-actions>\r\n            </mat-datepicker>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @if (control?.formAction?.hint) {\r\n         <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }], propDecorators: { stopOutFocus: [] } });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-29 19:47:50
 * @modify date 2022-03-29 19:47:50
 * @desc [description]
 */
class TextareaComponent extends BaseComponent {
    /************************************************************************************************************************************************************************ */
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: TextareaComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: TextareaComponent, isStandalone: false, selector: "app-textarea", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <textarea\r\n               #textareaInput\r\n               matInput\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [rows]=\"control.formAction?.css?.rows || control.formAction?.rows || 4\"\r\n               [maxlength]=\"control.formAction?.optionInputText?.maxlength\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\">\r\n            </textarea>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint\r\n         *ngIf=\"control.formAction?.optionInputText?.maxlength || control?.formAction?.hint\"\r\n         [attr.align]=\"'start'\">\r\n         @if (control.formAction?.optionInputText?.maxlength) {\r\n            {{ textareaInput.value.length }}/{{ control.formAction?.optionInputText?.maxlength }}\r\n         }\r\n\r\n         @if (control?.formAction?.hint) {\r\n            {{ control?.formAction?.hint }}\r\n         }\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-textarea', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <textarea\r\n               #textareaInput\r\n               matInput\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [rows]=\"control.formAction?.css?.rows || control.formAction?.rows || 4\"\r\n               [maxlength]=\"control.formAction?.optionInputText?.maxlength\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\">\r\n            </textarea>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint\r\n         *ngIf=\"control.formAction?.optionInputText?.maxlength || control?.formAction?.hint\"\r\n         [attr.align]=\"'start'\">\r\n         @if (control.formAction?.optionInputText?.maxlength) {\r\n            {{ textareaInput.value.length }}/{{ control.formAction?.optionInputText?.maxlength }}\r\n         }\r\n\r\n         @if (control?.formAction?.hint) {\r\n            {{ control?.formAction?.hint }}\r\n         }\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/**
 * @format
 */
class QuestionRadioButtonComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    getOptions() {
        const options = this.control?.formAction?.options;
        if (!options) {
            return [];
        }
        if (typeof options === 'function') {
            const value = options();
            if (Array.isArray(value)) {
                return value;
            }
            if (value?.items && Array.isArray(value.items)) {
                return value.items;
            }
            return [];
        }
        if (Array.isArray(options)) {
            return options;
        }
        if (options?.items && Array.isArray(options.items)) {
            return options.items;
        }
        return [];
    }
    getOptionValue(option) {
        const keyId = this.control?.formAction?.keyCombo?.keyId;
        if (Array.isArray(keyId)) {
            return keyId
                .map(key => option?.[key])
                .filter(value => value !== null && value !== undefined)
                .join('|');
        }
        if (typeof keyId === 'string') {
            return option?.[keyId] ?? option?.id;
        }
        return option?.id;
    }
    getOptionDescription(option) {
        const keyDescription = this.control?.formAction?.keyCombo?.keyDescription;
        if (Array.isArray(keyDescription)) {
            return keyDescription
                .map(key => option?.[key])
                .filter(value => value !== null && value !== undefined && value !== '')
                .join(' - ');
        }
        if (typeof keyDescription === 'string') {
            return option?.[keyDescription] ?? option?.description ?? '';
        }
        return option?.description ?? option?.name ?? String(option?.id ?? '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: QuestionRadioButtonComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: QuestionRadioButtonComponent, isStandalone: false, selector: "app-radiobutton", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"row customMY w-auto\">\r\n         <label class=\"form-label mb-2\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n               <mat-icon\r\n                  [matTooltip]=\"control.formAction?.info.msg\"\r\n                  [style.color]=\"control.formAction?.info.color\"\r\n                  class=\"mx-1 pt-2 p-1\"\r\n                  style=\"font-size: small\">\r\n                  info_outline\r\n               </mat-icon>\r\n            }\r\n         </label>\r\n\r\n         <mat-radio-group\r\n            [formControl]=\"$any(control.formAction?.formControl)\"\r\n            [class.disabled]=\"control.formAction.formControl.disabled\"\r\n            [matTooltip]=\"control.formAction?.tipContent || null\"\r\n            (focusin)=\"emitFocus()\"\r\n            (focusout)=\"emitBlur()\">\r\n\r\n            @for (option of getOptions(); track getOptionValue(option)) {\r\n               <mat-radio-button\r\n                  class=\"me-3\"\r\n                  [value]=\"getOptionValue(option)\"\r\n                  [disabled]=\"option.disabled\">\r\n                  {{ getOptionDescription(option) }}\r\n               </mat-radio-button>\r\n            }\r\n\r\n         </mat-radio-group>\r\n\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n            <mat-error>{{ error }}</mat-error>\r\n         }\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4$1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i4$1.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: QuestionRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-radiobutton', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"row customMY w-auto\">\r\n         <label class=\"form-label mb-2\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n               <mat-icon\r\n                  [matTooltip]=\"control.formAction?.info.msg\"\r\n                  [style.color]=\"control.formAction?.info.color\"\r\n                  class=\"mx-1 pt-2 p-1\"\r\n                  style=\"font-size: small\">\r\n                  info_outline\r\n               </mat-icon>\r\n            }\r\n         </label>\r\n\r\n         <mat-radio-group\r\n            [formControl]=\"$any(control.formAction?.formControl)\"\r\n            [class.disabled]=\"control.formAction.formControl.disabled\"\r\n            [matTooltip]=\"control.formAction?.tipContent || null\"\r\n            (focusin)=\"emitFocus()\"\r\n            (focusout)=\"emitBlur()\">\r\n\r\n            @for (option of getOptions(); track getOptionValue(option)) {\r\n               <mat-radio-button\r\n                  class=\"me-3\"\r\n                  [value]=\"getOptionValue(option)\"\r\n                  [disabled]=\"option.disabled\">\r\n                  {{ getOptionDescription(option) }}\r\n               </mat-radio-button>\r\n            }\r\n\r\n         </mat-radio-group>\r\n\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n            <mat-error>{{ error }}</mat-error>\r\n         }\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-11-18 12:55:11
 * @modify date 2022-11-18 12:55:11
 * @desc [description]
 */
class NumberComponent extends BaseComponent {
    /************************************************************************************************************************************************************************ */
    /************************************************************************************************************************************************************************ */
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: NumberComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: NumberComponent, isStandalone: false, selector: "app-number", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               matInput\r\n               type=\"number\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [min]=\"control.formAction?.optionNumber?.min\"\r\n               [max]=\"control.formAction?.optionNumber?.max\"\r\n               [step]=\"control.formAction?.optionNumber?.step\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint *ngIf=\"control?.formAction?.hint\" [attr.align]=\"'start'\">\r\n         {{ control?.formAction?.hint }}\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i2.MaxValidator, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: ["max"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: NumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-number', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               matInput\r\n               type=\"number\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               [formControl]=\"$any(control.formAction?.formControl)\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [placeholder]=\"control.formAction.placeholder || ''\"\r\n               [min]=\"control.formAction?.optionNumber?.min\"\r\n               [max]=\"control.formAction?.optionNumber?.max\"\r\n               [step]=\"control.formAction?.optionNumber?.step\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\" />\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      <mat-hint *ngIf=\"control?.formAction?.hint\" [attr.align]=\"'start'\">\r\n         {{ control?.formAction?.hint }}\r\n      </mat-hint>\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/**
 * @format
 */
class DateTimeComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
        this.dateCtrl = new FormControl(null);
        this.timeOptions = signal([]);
        this.selectedTime = null;
    }
    ngOnInit() {
        super.ngOnInit();
        this.timeOptions.set(this.buildTimeIntervals(30, 'HH:mm'));
        const value = this.control?.formAction?.formControl?.value;
        if (value?.date)
            this.dateCtrl.setValue(value.date);
        if (value?.time)
            this.selectedTime = value.time;
    }
    onDateChange() {
        this.updateExternalControl();
    }
    onTimeChange(time) {
        this.selectedTime = time;
        this.updateExternalControl();
    }
    updateExternalControl() {
        const date = this.dateCtrl.value;
        const time = this.selectedTime;
        const newValue = (date || time) ? { date, time } : null;
        const fc = this.control?.formAction?.formControl;
        if (fc) {
            fc.setValue(newValue);
            fc.markAsDirty();
            fc.updateValueAndValidity();
        }
    }
    onOpenedChange(isOpened) {
        if (isOpened) {
            this.emitOpened();
        }
        else {
            this.emitClosed();
        }
    }
    buildTimeIntervals(intervalMinutes = 30, format = 'HH:mm') {
        const times = [];
        const start = moment().startOf('day');
        const end = moment().endOf('day');
        while (start <= end) {
            const id = start.format(format);
            times.push({ id, description: id });
            start.add(intervalMinutes, 'minutes');
        }
        return times;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateTimeComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: DateTimeComponent, isStandalone: false, selector: "app-date-time", providers: [DatePipe], usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n<ng-container>\r\n   <div class=\"d-flex w-100 gap-2 df-datetime-row\">\r\n      <!-- Date picker -->\r\n      <mat-form-field class=\"customMY flex-grow-1\">\r\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\r\n               class=\"mx-1\">\r\n               info_outline\r\n            </mat-icon>\r\n            }\r\n         </mat-label>\r\n\r\n         <input matInput [matDatepicker]=\"datepicker\" [formControl]=\"dateCtrl\" [readonly]=\"control.formAction.readonly\"\r\n            [min]=\"control.formAction?.optionDate?.min\" [max]=\"control.formAction?.optionDate?.max\"\r\n            [placeholder]=\"control.formAction.placeholder || 'GG/MM/AAAA'\" (focus)=\"emitFocus()\" (blur)=\"emitBlur()\"\r\n            (dateChange)=\"onDateChange()\" />\r\n\r\n         <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\r\n\r\n         <mat-datepicker #datepicker (opened)=\"onOpenedChange(true)\" (closed)=\"onOpenedChange(false)\">\r\n            <mat-datepicker-actions>\r\n               <button mat-button matDatepickerCancel type=\"button\">Chiudi</button>\r\n               <button mat-raised-button color=\"primary\" matDatepickerApply type=\"button\">OK</button>\r\n            </mat-datepicker-actions>\r\n         </mat-datepicker>\r\n      </mat-form-field>\r\n\r\n      <!-- Time select -->\r\n      <mat-form-field class=\"customMY\" style=\"max-width: 130px\">\r\n         <mat-label>Ora</mat-label>\r\n         <mat-icon matPrefix class=\"df-time-prefix-icon\">access_time</mat-icon>\r\n\r\n         <mat-select [disabled]=\"control.formAction.formControl.disabled\" [value]=\"selectedTime\" [placeholder]=\"'HH:MM'\"\r\n            (selectionChange)=\"onTimeChange($event.value)\">\r\n            @for (opt of timeOptions(); track opt.id) {\r\n            <mat-option [value]=\"opt.id\">{{ opt.description }}</mat-option>\r\n            }\r\n         </mat-select>\r\n\r\n         @if (selectedTime) {\r\n         <button matSuffix mat-icon-button aria-label=\"Clear time\" type=\"button\"\r\n            (click)=\"$event.stopPropagation(); onTimeChange('')\">\r\n            <mat-icon>close</mat-icon>\r\n         </button>\r\n         }\r\n      </mat-form-field>\r\n\r\n      <div #dynamicContainer class=\"\"></div>\r\n   </div>\r\n\r\n   @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n   <mat-error>{{ error }}</mat-error>\r\n   }\r\n\r\n   @if (control?.formAction?.hint) {\r\n   <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n   }\r\n</ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3$1.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i3$1.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i3$1.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DateTimeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-date-time', providers: [DatePipe], standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n<ng-container>\r\n   <div class=\"d-flex w-100 gap-2 df-datetime-row\">\r\n      <!-- Date picker -->\r\n      <mat-form-field class=\"customMY flex-grow-1\">\r\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\r\n               class=\"mx-1\">\r\n               info_outline\r\n            </mat-icon>\r\n            }\r\n         </mat-label>\r\n\r\n         <input matInput [matDatepicker]=\"datepicker\" [formControl]=\"dateCtrl\" [readonly]=\"control.formAction.readonly\"\r\n            [min]=\"control.formAction?.optionDate?.min\" [max]=\"control.formAction?.optionDate?.max\"\r\n            [placeholder]=\"control.formAction.placeholder || 'GG/MM/AAAA'\" (focus)=\"emitFocus()\" (blur)=\"emitBlur()\"\r\n            (dateChange)=\"onDateChange()\" />\r\n\r\n         <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\r\n\r\n         <mat-datepicker #datepicker (opened)=\"onOpenedChange(true)\" (closed)=\"onOpenedChange(false)\">\r\n            <mat-datepicker-actions>\r\n               <button mat-button matDatepickerCancel type=\"button\">Chiudi</button>\r\n               <button mat-raised-button color=\"primary\" matDatepickerApply type=\"button\">OK</button>\r\n            </mat-datepicker-actions>\r\n         </mat-datepicker>\r\n      </mat-form-field>\r\n\r\n      <!-- Time select -->\r\n      <mat-form-field class=\"customMY\" style=\"max-width: 130px\">\r\n         <mat-label>Ora</mat-label>\r\n         <mat-icon matPrefix class=\"df-time-prefix-icon\">access_time</mat-icon>\r\n\r\n         <mat-select [disabled]=\"control.formAction.formControl.disabled\" [value]=\"selectedTime\" [placeholder]=\"'HH:MM'\"\r\n            (selectionChange)=\"onTimeChange($event.value)\">\r\n            @for (opt of timeOptions(); track opt.id) {\r\n            <mat-option [value]=\"opt.id\">{{ opt.description }}</mat-option>\r\n            }\r\n         </mat-select>\r\n\r\n         @if (selectedTime) {\r\n         <button matSuffix mat-icon-button aria-label=\"Clear time\" type=\"button\"\r\n            (click)=\"$event.stopPropagation(); onTimeChange('')\">\r\n            <mat-icon>close</mat-icon>\r\n         </button>\r\n         }\r\n      </mat-form-field>\r\n\r\n      <div #dynamicContainer class=\"\"></div>\r\n   </div>\r\n\r\n   @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n   <mat-error>{{ error }}</mat-error>\r\n   }\r\n\r\n   @if (control?.formAction?.hint) {\r\n   <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n   }\r\n</ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/**
 * @format
 */
class InputTimeComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit?.();
        const currentOptions = this.getOptions();
        if (currentOptions.length < 1) {
            this.setOptions(this.getTimeIntervals());
        }
    }
    onOpenedChange(opened) {
        if (opened) {
            this.emitOpened();
        }
        else {
            this.emitClosed();
        }
    }
    getOptions() {
        const options = this.control?.formAction?.options;
        if (!options) {
            return [];
        }
        if (typeof options === 'function') {
            const value = options();
            if (Array.isArray(value)) {
                return value;
            }
            if (value?.items && Array.isArray(value.items)) {
                return value.items;
            }
            return [];
        }
        if (Array.isArray(options)) {
            return options;
        }
        if (options?.items && Array.isArray(options.items)) {
            return options.items;
        }
        return [];
    }
    setOptions(options) {
        const currentOptions = this.control?.formAction?.options;
        if (currentOptions && typeof currentOptions.set === 'function') {
            currentOptions.set(options);
            return;
        }
        this.control.formAction.options = signal(options);
    }
    getTimeIntervals(interval = 60, format = 'HH:mm:ss') {
        const times = [];
        const start = moment().startOf('day');
        const end = moment().endOf('day');
        while (start <= end) {
            const id = start.format(format);
            times.push({
                id,
                description: id,
            });
            start.add(interval, 'minutes');
        }
        return times;
    }
    isHourVisible(hour) {
        const min = this.control?.formAction?.optionsTime?.min;
        const max = this.control?.formAction?.optionsTime?.max;
        const hourNumber = this.timeToNumber(hour?.id);
        const minNumber = min ? this.timeToNumber(min) : null;
        const maxNumber = max ? this.timeToNumber(max) : null;
        if (minNumber != null && hourNumber < minNumber) {
            return false;
        }
        if (maxNumber != null && hourNumber > maxNumber) {
            return false;
        }
        return true;
    }
    timeToNumber(value) {
        if (!value) {
            return 0;
        }
        const parts = value.split(':').map(Number);
        const hours = parts[0] || 0;
        const minutes = parts[1] || 0;
        const seconds = parts[2] || 0;
        return hours * 3600 + minutes * 60 + seconds;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: InputTimeComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: InputTimeComponent, isStandalone: false, selector: "app-input-time", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n<ng-container>\r\n   <div class=\"d-flex w-100\">\r\n      <mat-form-field class=\"w-100 customMY\">\r\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\r\n               class=\"mx-1\">\r\n               info_outline\r\n            </mat-icon>\r\n            }\r\n         </mat-label>\r\n\r\n         <mat-icon matPrefix class=\"df-time-prefix-icon\">\r\n            access_time\r\n         </mat-icon>\r\n\r\n         <mat-select [matTooltip]=\"control.formAction?.tipContent || null\"\r\n            [formControl]=\"$any(control.formAction?.formControl)\" [multiple]=\"control.formAction?.multiple\"\r\n            [placeholder]=\"control.formAction.placeholder || ''\" (openedChange)=\"onOpenedChange($event)\"\r\n            (focus)=\"emitFocus()\" (blur)=\"emitBlur()\">\r\n\r\n            @for (hour of getOptions(); track hour.id) {\r\n            @if (isHourVisible(hour)) {\r\n            <mat-option [value]=\"hour.id\">\r\n               <span>\r\n                  {{ hour.description }}\r\n               </span>\r\n            </mat-option>\r\n            }\r\n            }\r\n\r\n         </mat-select>\r\n\r\n         @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n         <button matSuffix mat-icon-button aria-label=\"Clear\" type=\"button\"\r\n            (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n            <mat-icon>close</mat-icon>\r\n         </button>\r\n         }\r\n      </mat-form-field>\r\n\r\n      <div #dynamicContainer class=\"\"></div>\r\n   </div>\r\n\r\n   @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n   <mat-error>{{ error }}</mat-error>\r\n   }\r\n\r\n   @if (control?.formAction?.hint) {\r\n   <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n   }\r\n</ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: InputTimeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input-time', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n<ng-container>\r\n   <div class=\"d-flex w-100\">\r\n      <mat-form-field class=\"w-100 customMY\">\r\n         <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n            {{ control.formAction.title }}\r\n\r\n            @if (control.formAction?.info) {\r\n            <mat-icon [matTooltip]=\"control.formAction?.info.msg\" [style.color]=\"control.formAction?.info.color\"\r\n               class=\"mx-1\">\r\n               info_outline\r\n            </mat-icon>\r\n            }\r\n         </mat-label>\r\n\r\n         <mat-icon matPrefix class=\"df-time-prefix-icon\">\r\n            access_time\r\n         </mat-icon>\r\n\r\n         <mat-select [matTooltip]=\"control.formAction?.tipContent || null\"\r\n            [formControl]=\"$any(control.formAction?.formControl)\" [multiple]=\"control.formAction?.multiple\"\r\n            [placeholder]=\"control.formAction.placeholder || ''\" (openedChange)=\"onOpenedChange($event)\"\r\n            (focus)=\"emitFocus()\" (blur)=\"emitBlur()\">\r\n\r\n            @for (hour of getOptions(); track hour.id) {\r\n            @if (isHourVisible(hour)) {\r\n            <mat-option [value]=\"hour.id\">\r\n               <span>\r\n                  {{ hour.description }}\r\n               </span>\r\n            </mat-option>\r\n            }\r\n            }\r\n\r\n         </mat-select>\r\n\r\n         @if (control.formAction?.resetButton && control.formAction.formControl.value != null) {\r\n         <button matSuffix mat-icon-button aria-label=\"Clear\" type=\"button\"\r\n            (click)=\"$event.stopPropagation(); control.formAction.formControl.reset()\">\r\n            <mat-icon>close</mat-icon>\r\n         </button>\r\n         }\r\n      </mat-form-field>\r\n\r\n      <div #dynamicContainer class=\"\"></div>\r\n   </div>\r\n\r\n   @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n   <mat-error>{{ error }}</mat-error>\r\n   }\r\n\r\n   @if (control?.formAction?.hint) {\r\n   <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n   }\r\n</ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/** @format */
class SortActionComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    getSortValue() {
        const value = this.control?.formAction?.formControl?.value;
        return value === 'DESC' ? 'DESC' : 'ASC';
    }
    getToggleIcon() {
        const icons = this.control?.formAction?.css?.toggleIcons;
        if (!Array.isArray(icons) || icons.length < 2) {
            return null;
        }
        return this.getSortValue() === 'ASC' ? icons[0] : icons[1];
    }
    toggleSort() {
        const formControl = this.control?.formAction?.formControl;
        if (!formControl || formControl.disabled) {
            return;
        }
        const nextValue = this.getSortValue() === 'ASC' ? 'DESC' : 'ASC';
        formControl.setValue(nextValue);
        formControl.markAsDirty();
        formControl.markAsTouched();
        formControl.updateValueAndValidity();
        this.control?.formAction?.toggleAction?.(nextValue);
        this.control?.formAction?.action?.(formControl);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: SortActionComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: SortActionComponent, isStandalone: false, selector: "app-sort-action", usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div\r\n         class=\"df-sort-action row customMY w-auto p-0 text-end\"\r\n         [matTooltip]=\"control.formAction?.tipContent || null\">\r\n\r\n         <button\r\n            mat-icon-button\r\n            type=\"button\"\r\n            [disabled]=\"control.formAction?.formControl?.disabled\"\r\n            [class.disabled]=\"control.formAction?.formControl?.disabled\"\r\n            (focus)=\"emitFocus()\"\r\n            (blur)=\"emitBlur()\"\r\n            (click)=\"toggleSort()\">\r\n\r\n            @if (getToggleIcon(); as icon) {\r\n               <img\r\n                  [ngClass]=\"control.formAction?.css?.iconCss\"\r\n                  [src]=\"icon\"\r\n                  alt=\"sort\" />\r\n            } @else {\r\n               <mat-icon>\r\n                  {{ getSortValue() === 'ASC' ? 'arrow_upward' : 'arrow_downward' }}\r\n               </mat-icon>\r\n            }\r\n\r\n         </button>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @if (control.formAction?.formControl) {\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n            <mat-error>{{ error }}</mat-error>\r\n         }\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: SortActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sort-action', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div\r\n         class=\"df-sort-action row customMY w-auto p-0 text-end\"\r\n         [matTooltip]=\"control.formAction?.tipContent || null\">\r\n\r\n         <button\r\n            mat-icon-button\r\n            type=\"button\"\r\n            [disabled]=\"control.formAction?.formControl?.disabled\"\r\n            [class.disabled]=\"control.formAction?.formControl?.disabled\"\r\n            (focus)=\"emitFocus()\"\r\n            (blur)=\"emitBlur()\"\r\n            (click)=\"toggleSort()\">\r\n\r\n            @if (getToggleIcon(); as icon) {\r\n               <img\r\n                  [ngClass]=\"control.formAction?.css?.iconCss\"\r\n                  [src]=\"icon\"\r\n                  alt=\"sort\" />\r\n            } @else {\r\n               <mat-icon>\r\n                  {{ getSortValue() === 'ASC' ? 'arrow_upward' : 'arrow_downward' }}\r\n               </mat-icon>\r\n            }\r\n\r\n         </button>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @if (control.formAction?.formControl) {\r\n         @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n            <mat-error>{{ error }}</mat-error>\r\n         }\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }] });

/**
 * @format
 */
class FileComponent extends BaseComponent {
    constructor(injector, element) {
        super(injector, element);
        this.injector = injector;
        this.element = element;
    }
    ngAfterViewInit() {
        const fc = this.control?.formAction?.formControl;
        if (!fc)
            return;
        // Quando il FormControl viene resettato (valore null/undefined/empty)
        // ripulisce anche il DOM dell'input nativo, altrimenti il browser ignora
        // la selezione dello stesso file e non triggera il change event.
        fc.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
            if (!value && this.fileInput?.nativeElement) {
                this.fileInput.nativeElement.value = '';
            }
        });
    }
    getFileLabel() {
        const value = this.control?.formAction?.formControl?.value;
        if (!value) {
            return '';
        }
        if (Array.isArray(value)) {
            return value
                .map(file => file?.name)
                .filter(Boolean)
                .join(', ');
        }
        if (value instanceof File) {
            return value.name;
        }
        if (value?.name) {
            return value.name;
        }
        return String(value);
    }
    onFileChange(event) {
        const input = event.target;
        const files = Array.from(input.files || []);
        const formControl = this.control?.formAction?.formControl;
        if (!formControl) {
            return;
        }
        const value = this.control?.formAction?.multiple ? files : files[0] ?? null;
        formControl.setValue(value);
        formControl.markAsDirty();
        formControl.markAsTouched();
        formControl.updateValueAndValidity();
        // Resetta il valore nativo dell'input dopo la selezione: il browser non
        // triggera "change" se si sceglie lo stesso file due volte di fila a meno
        // che l'input non venga prima ripulito.
        input.value = '';
        this.control?.formAction?.action?.(formControl);
    }
    clearFile(input) {
        input.value = '';
        const formControl = this.control?.formAction?.formControl;
        formControl?.reset();
        formControl?.markAsDirty();
        formControl?.updateValueAndValidity();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: FileComponent, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: FileComponent, isStandalone: false, selector: "app-file", viewQueries: [{ propertyName: "fileInput", first: true, predicate: ["fileInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               matInput\r\n               readonly\r\n               [value]=\"getFileLabel()\"\r\n               [placeholder]=\"control.formAction.placeholder || 'Seleziona file'\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\"\r\n               (click)=\"fileInput.click()\" />\r\n\r\n            <input\r\n               #fileInput\r\n               type=\"file\"\r\n               hidden\r\n               [accept]=\"control.formAction?.accept || ''\"\r\n               [multiple]=\"control.formAction?.multiple || false\"\r\n               [disabled]=\"control.formAction.formControl.disabled\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\"\r\n               (change)=\"onFileChange($event)\" />\r\n\r\n            <button\r\n               matSuffix\r\n               mat-icon-button\r\n               type=\"button\"\r\n               aria-label=\"Upload\"\r\n               [disabled]=\"control.formAction.formControl.disabled\"\r\n               (click)=\"$event.stopPropagation(); fileInput.click()\">\r\n               <mat-icon>attach_file</mat-icon>\r\n            </button>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); clearFile(fileInput)\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @if (control?.formAction?.hint) {\r\n         <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: FileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file', standalone: false, template: "<!-- @format -->\r\n\r\n@if (!control.formAction?.css?.hide) {\r\n   <ng-container>\r\n      <div class=\"d-flex w-100\">\r\n         <mat-form-field class=\"w-100 customMY\">\r\n            <mat-label class=\"form-label\" [class.disabled]=\"control.formAction.formControl.disabled\">\r\n               {{ control.formAction.title }}\r\n\r\n               @if (control.formAction?.info) {\r\n                  <mat-icon\r\n                     [matTooltip]=\"control.formAction?.info.msg\"\r\n                     [style.color]=\"control.formAction?.info.color\"\r\n                     class=\"mx-1\">\r\n                     info_outline\r\n                  </mat-icon>\r\n               }\r\n            </mat-label>\r\n\r\n            <input\r\n               matInput\r\n               readonly\r\n               [value]=\"getFileLabel()\"\r\n               [placeholder]=\"control.formAction.placeholder || 'Seleziona file'\"\r\n               [class.disabled]=\"control.formAction.formControl.disabled\"\r\n               [matTooltip]=\"control.formAction?.tipContent || null\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\"\r\n               (click)=\"fileInput.click()\" />\r\n\r\n            <input\r\n               #fileInput\r\n               type=\"file\"\r\n               hidden\r\n               [accept]=\"control.formAction?.accept || ''\"\r\n               [multiple]=\"control.formAction?.multiple || false\"\r\n               [disabled]=\"control.formAction.formControl.disabled\"\r\n               (focus)=\"emitFocus()\"\r\n               (blur)=\"emitBlur()\"\r\n               (change)=\"onFileChange($event)\" />\r\n\r\n            <button\r\n               matSuffix\r\n               mat-icon-button\r\n               type=\"button\"\r\n               aria-label=\"Upload\"\r\n               [disabled]=\"control.formAction.formControl.disabled\"\r\n               (click)=\"$event.stopPropagation(); fileInput.click()\">\r\n               <mat-icon>attach_file</mat-icon>\r\n            </button>\r\n\r\n            @if (control.formAction?.resetButton && control.formAction.formControl.value) {\r\n               <button\r\n                  matSuffix\r\n                  mat-icon-button\r\n                  aria-label=\"Clear\"\r\n                  type=\"button\"\r\n                  (click)=\"$event.stopPropagation(); clearFile(fileInput)\">\r\n                  <mat-icon>close</mat-icon>\r\n               </button>\r\n            }\r\n         </mat-form-field>\r\n\r\n         <div #dynamicContainer class=\"\"></div>\r\n      </div>\r\n\r\n      @for (error of getErrorFormControl($any(control.formAction?.formControl)); track error) {\r\n         <mat-error>{{ error }}</mat-error>\r\n      }\r\n\r\n      @if (control?.formAction?.hint) {\r\n         <mat-hint>{{ control.formAction.hint }}</mat-hint>\r\n      }\r\n   </ng-container>\r\n}", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ElementRef }], propDecorators: { fileInput: [{
                type: ViewChild,
                args: ['fileInput']
            }] } });

/** @format */
/**
 * Servizio che traduce uno schema `DynamicFormJsonSchema` (JSON puro) nella
 * struttura `ConfigForm` usata a runtime dal `DynamicFormComponent`.
 *
 * Rappresenta il bridge tra la modalità dichiarativa JSON e l'API Angular
 * della libreria: crea i `FormControl` / `FormGroup`, istanzia i validator,
 * risolve gli handler di eventi tramite il registro e costruisce i Signal
 * per le opzioni e i dati remoti.
 */ class DynamicFormJsonMapperService {
    constructor(validatorFactory, eventRegistry) {
        this.validatorFactory = validatorFactory;
        this.eventRegistry = eventRegistry;
    }
    /**
     * Punto di ingresso: converte l'intero schema in un array di `Group` (`ConfigForm`).
     * @param schema - Schema JSON del form.
     */
    toConfig(schema) {
        return (schema?.groups || []).map((group, groupIndex) => this.mapGroup(group, groupIndex));
    }
    /** Mappa un singolo gruppo JSON (`DynamicJsonGroup`) nella struttura `Group` runtime. */
    mapGroup(group, groupIndex) {
        return {
            title: group.title,
            class: group.class,
            bottomLabel: group.bottomLabel,
            formGroup: (group.fields || []).map((field, fieldIndex) => this.mapField(field, groupIndex, fieldIndex)),
            actions: (group.actions || []).map(action => this.mapAction(action)),
        };
    }
    /**
     * Mappa un singolo campo JSON nella struttura `Form` runtime.
     * Crea il `FormControl` (o `FormGroup` per DATARANGE), applica i validator
     * e popola tutte le proprietà dell'azione del campo.
     */
    mapField(field, groupIndex, fieldIndex) {
        const type = this.mapType(field.type);
        const validators = this.validatorFactory.create(field.validators);
        const control = type === TYPE_CONTROL_FORM.DATARANGE
            ? new FormGroup({
                from: new FormControl(field.value?.from ?? null),
                to: new FormControl(field.value?.to ?? null),
            })
            : new FormControl({
                value: field.value ?? null,
                disabled: field.disabled ?? false,
            }, validators);
        if (field.disabled && control instanceof FormGroup)
            control.disable();
        const formAction = {
            ...(field.props || {}),
            formName: field.name,
            title: field.title || field.label,
            type,
            disabled: field.disabled,
            readonly: field.readonly ?? false,
            hint: field.hint,
            tipContent: field.tipContent,
            css: field.css || { class: field.class, hide: false },
            formControl: control,
            autocomplete: field.autocomplete,
            multiple: field.multiple,
            keyCombo: field.keyCombo,
            optionNumber: field.optionNumber,
            optionDate: field.optionDate,
            optionTime: field.optionTime,
            options: this.createOptionsSignal(field.options || field.datasource?.options),
            optionsDisabled: this.createReadonlyOptionsSignal(field.disabledOptions),
            paramsForRemoteData: field.paramsForRemoteData ? signal(field.paramsForRemoteData) : undefined,
            paging: field.paging ? { ...field.paging, count: field.paging.count ?? 25, page: field.paging.page ?? 0, totalCount: field.paging.totalCount ?? 0 } : undefined,
            remoteData: this.wrapRemoteData(field.remoteData),
            formGroup: field.children ? field.children.map((child, index) => this.mapGroup(child, index)) : undefined,
            onChange: this.wrapChangeEvent(field.events?.change),
            onInitialize: this.wrapInitializeEvent(field.events?.initialize),
            opened: this.wrapSimpleEvent(field.events?.opened),
            closed: this.wrapSimpleEvent(field.events?.closed),
            action: this.wrapControlAction(field.events?.action),
        };
        return { formAction };
    }
    /** Mappa un'azione JSON di gruppo nel formato runtime `DynamicFormActionButton`. */
    mapAction(action) {
        const handler = this.eventRegistry.getAction(action.event);
        return {
            label: action.label,
            cssClassIcon: action.cssClassIcon,
            cssClassButton: action.cssClassButton,
            disabled: action.disabled,
            visible: action.visible,
            action: (questions, idForm, formGroup) => handler?.({ questions, idForm, formGroup }),
        };
    }
    /**
     * Converte il tipo del campo da stringa (chiave enum) o numero al valore enum `TYPE_CONTROL_FORM`.
     * Lancia un errore esplicito se il tipo non è riconosciuto.
     */
    mapType(type) {
        if (typeof type === 'number')
            return type;
        const value = TYPE_CONTROL_FORM[type];
        if (value === undefined) {
            throw new Error(`DynamicFormJsonMapperService: tipo controllo non valido: ${type}`);
        }
        return value;
    }
    /** Crea un `WritableSignal` per le opzioni del campo se l'array è presente, altrimenti `undefined`. */
    createOptionsSignal(options) {
        return options ? signal(options) : undefined;
    }
    /** Crea un `Signal` readonly per le opzioni disabilitate del campo. */
    createReadonlyOptionsSignal(options) {
        return options ? signal(options) : undefined;
    }
    /**
     * Crea il wrapper per l'evento `onChange` del campo.
     * Risolve il nome dell'handler nel registro eventi e lo adatta alla firma attesa dal componente.
     */
    wrapChangeEvent(eventName) {
        const handler = this.eventRegistry.getEvent(eventName);
        if (!handler)
            return undefined;
        return (idGroup, idForm, formControl, formName, formGroup, type, prevValue, allGroup, utility) => handler({ idGroup, idForm, formControl, formName, formGroup, type, prevValue, allGroup, utility });
    }
    /**
     * Crea il wrapper per l'evento `onInitialize` del campo.
     * Risolve il nome dell'handler nel registro eventi e lo adatta alla firma attesa dal componente.
     */
    wrapInitializeEvent(eventName) {
        const handler = this.eventRegistry.getEvent(eventName);
        if (!handler)
            return undefined;
        return (idGroup, idForm, formControl, formName, formGroup, type, allGroup, paging, onOptionSetted, utility) => handler({ idGroup, idForm, formControl, formName, formGroup, type, allGroup, paging, onOptionSetted, utility });
    }
    /**
     * Crea il wrapper per gli eventi semplici `opened` / `closed` del campo.
     * Il tipo viene passato come `undefined` perché non rilevante in questi eventi.
     */
    wrapSimpleEvent(eventName) {
        const handler = this.eventRegistry.getEvent(eventName);
        if (!handler)
            return undefined;
        return (idGroup, idForm, formControl, formName, formGroup, allGroup, utility) => handler({ idGroup, idForm, formControl, formName, formGroup, type: undefined, allGroup, utility });
    }
    /** Crea il wrapper per l'evento `action` di un campo (es. pulsante inline). */
    wrapControlAction(eventName) {
        const handler = this.eventRegistry.getEvent(eventName);
        if (!handler)
            return undefined;
        return formControl => handler({ idGroup: -1, idForm: -1, formControl, formName: '', formGroup: [], type: undefined, allGroup: [], utility: {} });
    }
    /**
     * Crea il wrapper per il caricamento di dati remoti paginati (`remoteData`).
     * L'handler riceve `{ param, externalStore }` e aggiorna il Signal dello store
     * con i nuovi dati recuperati.
     */
    wrapRemoteData(eventName) {
        const handler = this.eventRegistry.getEvent(eventName);
        if (!handler)
            return undefined;
        return ({ param, externalStore }) => handler({
            idGroup: -1,
            idForm: -1,
            formControl: undefined,
            formName: eventName,
            formGroup: [],
            type: TYPE_CONTROL_FORM.COMBOPAGINATE,
            allGroup: [],
            utility: {},
            param,
            externalStore,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormJsonMapperService, deps: [{ token: DynamicValidatorFactoryService }, { token: DynamicFormEventRegistryService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormJsonMapperService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormJsonMapperService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: DynamicValidatorFactoryService }, { type: DynamicFormEventRegistryService }] });

/** @format */
/**
 * Tipi di campo esclusi dal calcolo del completamento (contenitori, non input).
 */
const SKIP_COMPLETION = new Set([TYPE_CONTROL_FORM.GROUP]);
/**
 * Appiattisce ricorsivamente tutti i campi della `ConfigForm` in una lista lineare,
 * includendo i campi annidati nei gruppi di tipo GROUP.
 *
 * @param allGroup - Configurazione del form.
 * @returns Lista di riferimenti `FlatFieldRef`, uno per ogni campo con un `formControl`.
 */
function flattenFields(allGroup) {
    const result = [];
    if (!allGroup)
        return result;
    allGroup.forEach((group, groupIndex) => {
        for (const form of group.formGroup ?? []) {
            const fa = form?.formAction;
            if (!fa)
                continue;
            collectField(fa, groupIndex, '', result);
        }
    });
    return result;
}
function collectField(fa, groupIndex, parentPath, acc) {
    const name = fa.formName ?? '';
    const path = parentPath ? `${parentPath}.${name}` : name;
    // Gruppo annidato: ricorsione sui figli (formGroup è una ConfigForm = Group[]).
    if (fa.formGroup && fa.formGroup.length) {
        for (const nestedGroup of fa.formGroup) {
            const forms = (nestedGroup.formGroup ?? []);
            for (const child of forms) {
                const childFa = child?.formAction;
                if (childFa)
                    collectField(childFa, groupIndex, path, acc);
            }
        }
        return;
    }
    if (fa.formControl) {
        acc.push({
            formName: name,
            control: fa.formControl,
            type: fa.type,
            formAction: fa,
            groupIndex,
            path,
        });
    }
}
function isFieldFilled(fa) {
    const value = fa.formControl?.value;
    if (value === null || value === undefined || value === '' || value === false)
        return false;
    if (Array.isArray(value))
        return value.length > 0;
    return true;
}
function collectTrackable(allGroup) {
    if (!allGroup)
        return [];
    const result = [];
    for (const group of allGroup) {
        for (const form of group.formGroup ?? []) {
            const fa = form?.formAction;
            if (fa?.formControl &&
                !SKIP_COMPLETION.has(fa.type) &&
                !fa.formControl.disabled) {
                result.push(fa);
            }
        }
    }
    return result;
}
function computeRequiredStats(groupFas) {
    const trackable = groupFas.filter(fa => !fa.formControl?.disabled);
    const reqFas = trackable.filter(fa => {
        try {
            return fa.formControl?.hasValidator?.(Validators.required) ?? false;
        }
        catch {
            return false;
        }
    });
    const reqTotal = reqFas.length;
    const reqFilled = reqFas.filter(fa => isFieldFilled(fa)).length;
    return { total: reqTotal, filled: reqFilled, percentage: reqTotal > 0 ? Math.round((reqFilled / reqTotal) * 100) : 0 };
}
/**
 * Calcola le statistiche di completamento dell'intero form a partire dalla `ConfigForm`.
 *
 * Esclude i campi disabilitati e i contenitori (GROUP). Un campo è considerato
 * "compilato" se ha un valore non vuoto (array non vuoti contano come compilati,
 * `false` di una checkbox conta come non compilato).
 *
 * @param allGroup - Configurazione del form.
 * @returns Statistiche aggregate totali, required e per gruppo.
 */
function computeFormCompletion(allGroup) {
    const fas = collectTrackable(allGroup);
    const total = fas.length;
    const filled = fas.filter(fa => isFieldFilled(fa)).length;
    const percentage = total > 0 ? Math.round((filled / total) * 100) : 0;
    const required = computeRequiredStats(fas);
    const groups = (allGroup ?? []).map(group => {
        const groupFas = (group.formGroup ?? [])
            .map(f => f?.formAction)
            .filter(fa => fa?.formControl && !fa.formControl.disabled && !SKIP_COMPLETION.has(fa.type));
        const gTotal = groupFas.length;
        const gFilled = groupFas.filter(fa => isFieldFilled(fa)).length;
        return {
            id: group.id ?? '',
            title: group.title ?? '',
            total: gTotal,
            filled: gFilled,
            percentage: gTotal > 0 ? Math.round((gFilled / gTotal) * 100) : 0,
            required: computeRequiredStats(groupFas),
        };
    });
    return { total, filled, percentage, required, groups };
}

// Utility per generare UUID v4 (browser safe, no dipendenze esterne)
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/**
 * Builder fluente per la creazione di ConfigForm tipizzati.
 *
 * Il parametro generico `TCtx` rappresenta il tipo del contesto (tipicamente la classe
 * Component) passato a `create(context)`. Quando presente, `addGroup`, `addForm` e
 * `addActions` accettano anche una factory function `(ctx: TCtx) => <valore>`, che riceve
 * il contesto tipizzato e consente di accedere a proprietà e metodi del componente con
 * pieno supporto TypeScript.
 *
 * @example
 * ```ts
 * // Nel componente:
 * this.config = DynamicFormBuilder.create(this)
 *   .addGroup('Sezione')
 *   .addForm(ctx => ({
 *     formName: 'nome',
 *     type: TYPE_CONTROL_FORM.TEXT,
 *     formControl: new FormControl(''),
 *     onChange: () => ctx.onNomeChange(),   // ctx è tipizzato come il tuo Component
 *   }))
 *   .build();
 * ```
 */
class DynamicFormBuilder {
    constructor() {
        this.groups = [];
        this.currentGroupIndex = -1;
    }
    static create(context) {
        const b = new DynamicFormBuilder();
        if (context !== undefined) {
            b._context = context;
        }
        return b;
    }
    /**
     * Crea un builder tipizzato su un modello di form `TModel`: in questo modo
     * `addForm({ formName })` accetta solo nomi presenti tra le chiavi di `TModel`,
     * con controllo a compile-time (autocompletamento + errore sui typo).
     *
     * Usa il pattern a due step per inferire automaticamente il contesto:
     *
     * @example
     * ```ts
     * interface AnagraficaModel {
     *   firstName: string | null;
     *   lastName: string | null;
     *   email: string | null;
     * }
     *
     * this.config = DynamicFormBuilder.forModel<AnagraficaModel>().create(this)
     *   .addGroup('Dati')
     *     .addForm({ formName: 'firstName', type: TYPE_CONTROL_FORM.TEXT, formControl: new FormControl('') })
     *     // .addForm({ formName: 'firstNam', ... }) // ❌ errore: 'firstNam' non è una chiave del modello
     *   .build();
     * ```
     */
    static forModel() {
        return {
            create(context) {
                const b = new DynamicFormBuilder();
                if (context !== undefined) {
                    b._context = context;
                }
                return b;
            },
        };
    }
    /**
     * Crea un nuovo gruppo e lo rende attivo per le addForm successive.
     * `title` può essere una stringa o una factory `(ctx) => string`.
     */
    addGroup(title, classList, id) {
        const resolvedTitle = typeof title === 'function' ? title(this._context) : title;
        const group = {
            title: resolvedTitle,
            class: classList,
            formGroup: [],
        };
        if (id) {
            group.id = id;
        }
        if (!group.id) {
            group.id = uuidv4();
        }
        this.groups.push(group);
        this.currentGroupIndex = this.groups.length - 1;
        return this;
    }
    /**
     * Aggiunge un campo al gruppo attivo.
     * `formAction` può essere un oggetto `FormAction` o una factory `(ctx) => FormAction`.
     * Se il builder è tipizzato su un modello (`forModel<TModel>()`), `formName` è
     * vincolato alle chiavi di `TModel`.
     */
    addForm(formAction) {
        if (this.currentGroupIndex === -1) {
            throw new Error('Devi prima chiamare addGroup(title) prima di addForm!');
        }
        const resolved = (typeof formAction === 'function' ? formAction(this._context) : formAction);
        if (!resolved.id) {
            resolved.id = uuidv4();
        }
        this.groups[this.currentGroupIndex].formGroup.push({ formAction: resolved });
        return this;
    }
    /**
     * Aggiunge azioni (bottoni) al gruppo attivo.
     * `actions` può essere un array o una factory `(ctx) => Array<DynamicFormActionButton>`.
     */
    addActions(actions) {
        if (this.currentGroupIndex === -1) {
            throw new Error('Devi prima chiamare addGroup(title) prima di addActions!');
        }
        const resolved = typeof actions === 'function' ? actions(this._context) : actions;
        this.groups[this.currentGroupIndex].actions = resolved;
        return this;
    }
    /**
     * Restituisce il ConfigForm pronto da passare a <dynamic-form [config]="...">
     * Lancia se non ci sono gruppi o se qualche gruppo è vuoto.
     */
    build() {
        if (this.groups.length === 0) {
            throw new Error('Nessun gruppo aggiunto: usa addGroup prima di build!');
        }
        for (const g of this.groups) {
            if (!g.id) {
                g.id = uuidv4();
            }
            if (!g.formGroup || g.formGroup.length === 0) {
                throw new Error(`Il gruppo \"${g.title}\" non contiene campi: aggiungi almeno un addForm!`);
            }
            for (const f of g.formGroup) {
                if (f && f.formAction && !f.formAction.id) {
                    f.formAction.id = uuidv4();
                }
            }
        }
        return this.groups;
    }
}

/** @format */
// export * from './checkbox/checkbox.component';
// export * from './combo/combo.component';
// export * from './currency/currency.component';
// export * from './date/date.component';
// export * from './date-range/date-range.component';
// export * from './date-time/date-time.component';
// export * from './file/file.component';

/** @format */
/**
 * Servizio che converte una `ConfigForm` in una struttura `FormArray` di Angular Reactive Forms.
 *
 * Istanziato come provider locale del `DynamicFormComponent` (non singleton),
 * così ogni istanza del form ha il proprio stato di validazione isolato.
 */
class StepperService {
    /**
     * Trasforma ricorsivamente la `ConfigForm` in un `FormArray`.
     *
     * Per ogni `Group` crea un `FormGroup` figlio; per ogni `Form` al suo interno
     * aggiunge il `FormControl` (o `FormArray` per i campi di tipo GROUP/nested)
     * come controllo nominato.
     *
     * @param questions - Array di gruppi che descrivono la struttura del form.
     * @param formArray - `FormArray` accumulatore; viene restituito al termine.
     * @returns Il `FormArray` popolato con tutti i controlli.
     */
    toFormGroup(questions, formArray = new FormArray([])) {
        questions?.forEach(question => {
            let uuid = v4();
            if (question.formGroup) {
                formArray.push(new FormGroup({}));
                question['id'] = uuid;
                question.formGroup?.forEach(fg => {
                    const action = fg.formAction;
                    if (action.formGroup) {
                        action.type = TYPE_CONTROL_FORM.GROUP;
                        formArray.controls[formArray.controls.length - 1].addControl(action.formName, new FormArray([]));
                        this.toFormGroup(action.formGroup, formArray.controls[formArray.controls.length - 1].get(action.formName));
                    }
                    else {
                        if (!action.formName) {
                            action.formName = v4();
                        }
                        if (!action.formControl) {
                            action.formControl = new FormControl({ value: null, disabled: action.disabled ?? false });
                        }
                        formArray.controls[formArray.controls.length - 1].addControl(action.formName, action.formControl);
                    }
                });
            }
        });
        return formArray;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: StepperService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: StepperService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: StepperService, decorators: [{
            type: Injectable
        }] });

/** @format */
/**
 * Componente principale della libreria DynamicForm.
 *
 * Accetta la configurazione del form in tre modalità:
 * - `[config]` / `[questions]` — oggetto `ConfigForm` già costruito runtime (API Angular)
 * - `[json]` — schema JSON puro (`DynamicFormJsonSchema`) tradotto automaticamente dal mapper
 *
 * Emette due eventi al completamento dell'inizializzazione:
 * - `(onFormCreate)` — fornisce il `FormGroup` / `FormArray` generato
 * - `(onQuestionsCreate)` — fornisce la `ConfigForm` risolta
 *
 * @example
 * ```html
 * <!-- Con JSON schema -->
 * <dynamic-form [json]="mySchema" (onFormCreate)="onForm($event)"></dynamic-form>
 *
 * <!-- Con ConfigForm runtime -->
 * <dynamic-form [config]="myConfig" (onFormCreate)="onForm($event)"></dynamic-form>
 * ```
 */
class DynamicFormComponent {
    /**
     * Retrocompatibilità: vecchio input usato dal progetto.
     * Accetta la configurazione Angular runtime già pronta.
     */
    set questions(questions) {
        this.setRuntimeConfig(questions);
    }
    /**
     * Alias più chiaro per la configurazione Angular runtime.
     * Uso: <dynamic-form [config]="configAngular"></dynamic-form>
     */
    set config(config) {
        this.setRuntimeConfig(config);
    }
    /**
     * Nuova modalità JSON puro.
     * Uso: <dynamic-form [json]="jsonSchema"></dynamic-form>
     */
    set json(schema) {
        if (!schema)
            return;
        this.setRuntimeConfig(this.jsonMapper.toConfig(schema));
    }
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        /** Configurazione interna del form, costruita da `setRuntimeConfig`. */
        this._questions = null;
        this.onFormCreate = new EventEmitter();
        this.onQuestionsCreate = new EventEmitter();
        /**
         * Emesso ad ogni cambio valore di un qualsiasi campo (anche annidato).
         * Fornisce nome, valore nuovo/precedente, tipo e controllo del campo.
         */
        this.onChange = new EventEmitter();
        /** Emesso ad ogni cambio valore, con il valore completo del form (`getValue()`). */
        this.valueChange = new EventEmitter();
        /** Emesso ad ogni cambio valore, con le statistiche di completamento aggiornate. */
        this.completionChange = new EventEmitter();
        /** Emesso quando lo stato di validità del form cambia (`VALID` / `INVALID` / ...). */
        this.statusChange = new EventEmitter();
        this.stepperService = inject(StepperService);
        this.jsonMapper = inject(DynamicFormJsonMapperService);
        /** Sottoscrizioni di wiring degli output, ripulite ad ogni ricompilazione. */
        this.apiSubscriptions = [];
        /** Mappa nome campo -> riferimento appiattito (inclusi campi annidati). */
        this.fieldMap = new Map();
        /** Ultimo valore noto per ogni campo, per fornire `previousValue` in `onChange`. */
        this.previousValues = new Map();
        this.TYPE_CONTROL_FORM = TYPE_CONTROL_FORM;
        /**
         * Modalità di visualizzazione dei gruppi.
         * - `'default'` — affiancati (comportamento originale)
         * - `'tabs'`    — ogni gruppo in un tab Material
         * - `'steps'`   — ogni gruppo in uno step Material Stepper
         */
        this.layout = 'default';
        /**
         * Solo per `layout='steps'`: attiva la modalità lineare del stepper.
         * In modalità lineare lo step successivo è raggiungibile solo se quello corrente è valido.
         */
        this.linear = false;
        /**
         * Solo per `layout='steps'`: orientamento del stepper.
         * - `'horizontal'` (default) — step affiancati in orizzontale
         * - `'vertical'`  — step impilati in verticale
         */
        this.stepperOrientation = 'horizontal';
    }
    /**
     * Normalizza e memorizza la configurazione runtime, poi avvia l'inizializzazione.
     * Scartato se `config` è null/undefined (guard per evitare re-render inutili).
     */
    setRuntimeConfig(config) {
        if (!config)
            return;
        this._questions = config;
        this.initializeForm();
    }
    /**
     * Trasforma la `ConfigForm` in un `FormGroup` o `FormArray` tramite `StepperService`.
     * - Se il form ha un solo gruppo produce un `FormGroup` piatto.
     * - Se ha più gruppi produce un `FormArray`.
     * Al termine emette `onFormCreate` e `onQuestionsCreate`.
     */
    compile() {
        let fg = this.stepperService.toFormGroup(this._questions)?.controls;
        if (fg && fg.length == 1) {
            this.formGroup = fg[0];
        }
        if (fg && fg.length > 1) {
            this.formGroup = new FormArray([...fg]);
        }
        this.onFormCreate.emit(this.formGroup);
        this.onQuestionsCreate.emit(this._questions);
        this.wireConsumerApi();
    }
    /**
     * Punto di ingresso dell'inizializzazione: delega a `compile()`.
     * Separato per consentire override nelle sottoclassi o hook aggiuntivi in futuro.
     */
    initializeForm() {
        this.compile();
    }
    /**
     * Restituisce il `FormGroup` reattivo del gruppo all'indice dato.
     * Se il form ha un solo gruppo `formGroup` è già il `FormGroup` diretto;
     * se ha più gruppi `formGroup` è un `FormArray` e si accede all'elemento per indice.
     */
    getGroupForm(index) {
        return this.formGroup instanceof FormArray
            ? this.formGroup.at(index)
            : this.formGroup;
    }
    /**
     * Restituisce `true` se il gruppo all'indice dato è invalido E
     * almeno un controllo al suo interno è stato toccato o modificato.
     * Usato per mostrare l'indicatore di errore su tab/step label.
     */
    isGroupInvalid(index) {
        const fg = this.getGroupForm(index);
        return fg ? fg.invalid && (fg.dirty || fg.touched) : false;
    }
    /***********************************************************************************************************************************
     * API PUBBLICA PER IL CONSUMER
     *
     * Metodi pensati per interagire con il form dall'esterno (component padre):
     * leggere/scrivere valori, accedere a controlli annidati, registrarsi sui cambi.
     ***********************************************************************************************************************************/
    /**
     * Collega gli output di alto livello (`onChange`, `valueChange`, `completionChange`,
     * `statusChange`) ai controlli reali del form appena compilato.
     *
     * Ricostruisce la mappa dei campi (inclusi gli annidati), pulisce eventuali
     * sottoscrizioni precedenti ed emette subito uno stato iniziale di completamento/status.
     */
    wireConsumerApi() {
        this.apiSubscriptions.forEach(s => s.unsubscribe());
        this.apiSubscriptions = [];
        this.fieldMap.clear();
        this.previousValues.clear();
        const fields = flattenFields(this._questions);
        for (const field of fields) {
            this.fieldMap.set(field.formName, field);
            this.previousValues.set(field.formName, field.control.value);
        }
        for (const field of fields) {
            const sub = field.control.valueChanges.subscribe(value => {
                const previousValue = this.previousValues.get(field.formName);
                this.previousValues.set(field.formName, value);
                this.onChange.emit({
                    formName: field.formName,
                    value,
                    previousValue,
                    type: field.type,
                    required: this.isControlRequired(field.control),
                    control: field.control,
                    groupIndex: field.groupIndex,
                    path: field.path,
                });
                this.valueChange.emit(this.getValue());
                this.completionChange.emit(this.getCompletion());
            });
            this.apiSubscriptions.push(sub);
        }
        if (this.formGroup) {
            const statusSub = this.formGroup.statusChanges.subscribe(status => this.statusChange.emit(status));
            this.apiSubscriptions.push(statusSub);
        }
        // Stato iniziale.
        this.completionChange.emit(this.getCompletion());
        if (this.formGroup)
            this.statusChange.emit(this.formGroup.status);
    }
    isControlRequired(control) {
        try {
            return typeof control.hasValidator === 'function' && control.hasValidator(Validators.required);
        }
        catch {
            return false;
        }
    }
    /** Restituisce il valore corrente dell'intero form (`{ ...campi }` o array di gruppi). */
    getValue() {
        return this.formGroup ? this.formGroup.value : null;
    }
    /** Come `getValue()` ma include anche i campi disabilitati. */
    getRawValue() {
        return this.formGroup ? this.formGroup.getRawValue?.() ?? this.formGroup.value : null;
    }
    /** Stato di validità globale del form (`'VALID'` / `'INVALID'` / `'PENDING'` / `'DISABLED'`). */
    getStatus() {
        return this.formGroup ? this.formGroup.status : null;
    }
    /** `true` se l'intero form è valido. */
    isValid() {
        return !!this.formGroup && this.formGroup.valid;
    }
    /** Statistiche di completamento correnti dell'intero form. */
    getCompletion() {
        return computeFormCompletion(this._questions);
    }
    /**
     * Ri-registra le sottoscrizioni interne sui controlli del form.
     *
     * Da chiamare dopo aver aggiunto o rimosso campi a runtime (es. gruppi
     * annidati come gli indirizzi): ricostruisce la mappa dei campi includendo
     * quelli appena creati, così che gli output `onChange` / `valueChange` /
     * `completionChange` / `statusChange` continuino a riflettere l'intero form,
     * inclusi i controlli aggiunti dopo l'inizializzazione.
     */
    refreshControls() {
        this.wireConsumerApi();
    }
    /**
     * Applica parzialmente dei valori al form.
     * Accetta un oggetto `{ formName: value }` per i form a gruppo singolo,
     * oppure un array per i form multi-gruppo (`FormArray`).
     */
    patchValue(value) {
        this.formGroup?.patchValue(value);
    }
    /** Reimposta il form (opzionalmente a un valore dato). */
    reset(value) {
        this.formGroup?.reset(value);
    }
    /**
     * Restituisce il controllo reattivo di un campo per nome, cercandolo anche
     * tra i gruppi annidati. `null` se non esiste.
     */
    getControl(formName) {
        return this.fieldMap.get(formName)?.control ?? null;
    }
    /** Restituisce la configurazione (`FormAction`) di un campo per nome. */
    getFormAction(formName) {
        return this.fieldMap.get(formName)?.formAction ?? null;
    }
    /**
     * Restituisce il riferimento completo a un campo: controllo reattivo **e**
     * configurazione (`FormAction`), insieme a tipo, indice di gruppo e path.
     *
     * È il metodo da usare quando si vuole sia leggere/scrivere il valore sia
     * modificare la configurazione del campo (es. opzioni di un combo, handler di
     * paginazione) per rifletterla a runtime. La `FormAction` restituita è il
     * riferimento **vivo** usato dal componente: mutandola si influenza il form.
     *
     * @example
     * ```ts
     * const field = form.getField('citta');
     * field?.formAction;   // configurazione viva del campo
     * field?.control;      // FormControl reattivo
     * ```
     */
    getField(formName) {
        return this.fieldMap.get(formName) ?? null;
    }
    /**
     * Aggiorna in modo reattivo le opzioni di un campo a opzioni (COMBO,
     * COMBOPAGINATE, RADIOGROUP, TIME), riflettendo il cambiamento a runtime.
     *
     * Dopo l'inizializzazione la libreria incapsula `formAction.options` in un
     * `WritableSignal`: questo metodo ne chiama `.set(...)` così l'effect interno
     * rigenera le opzioni mostrate. Se il campo non è ancora inizializzato come
     * signal, assegna direttamente il valore grezzo.
     *
     * @returns `true` se il campo esiste ed è stato aggiornato.
     */
    setFieldOptions(formName, options) {
        const fa = this.getFormAction(formName);
        if (!fa)
            return false;
        const current = fa.options;
        if (typeof current === 'function' && typeof current.set === 'function') {
            current.set(options);
        }
        else {
            fa.options = options;
        }
        return true;
    }
    /**
     * Legge le opzioni correnti di un campo a opzioni. Gestisce sia il caso
     * `WritableSignal` (post-init) sia il valore grezzo.
     */
    getFieldOptions(formName) {
        const fa = this.getFormAction(formName);
        if (!fa)
            return null;
        const current = fa.options;
        return typeof current === 'function' ? current() : (current ?? null);
    }
    /** Valore corrente di un singolo campo per nome. */
    getFieldValue(formName) {
        return this.getControl(formName)?.value ?? null;
    }
    /** Imposta il valore di un singolo campo per nome. */
    setFieldValue(formName, value, options) {
        this.getControl(formName)?.setValue(value, options);
    }
    /** Elenco dei nomi di tutti i campi (inclusi gli annidati). */
    getFieldNames() {
        return Array.from(this.fieldMap.keys());
    }
    /**
     * Observable dei cambi di valore di un singolo campo: utile per registrarsi
     * dall'esterno su un campo specifico. `null` se il campo non esiste.
     *
     * @example
     * ```ts
     * this.form.onFieldChange('email')?.subscribe(v => console.log(v));
     * ```
     */
    onFieldChange(formName) {
        return this.getControl(formName)?.valueChanges ?? null;
    }
    ngOnDestroy() {
        this.apiSubscriptions.forEach(s => s.unsubscribe());
        this.apiSubscriptions = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.22", type: DynamicFormComponent, isStandalone: false, selector: "dynamic-form", inputs: { questions: "questions", config: "config", json: "json", layout: "layout", linear: "linear", stepperOrientation: "stepperOrientation" }, outputs: { onFormCreate: "onFormCreate", onQuestionsCreate: "onQuestionsCreate", onChange: "onChange", valueChange: "valueChange", completionChange: "completionChange", statusChange: "statusChange" }, providers: [StepperService], ngImport: i0, template: "<!-- @format -->\r\n\r\n<!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" /> -->\r\n<div class=\"df-form\">\r\n   <ng-container>\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           DEFAULT \u2014 tutti i gruppi affiancati in una riga (comportamento originale)\r\n           Usa [ngIf] direttamente sul ng-template: si auto-renderizza quando la\r\n           condizione \u00E8 vera, passando _questions come variabile implicita.\r\n           Quando chiamato via ngTemplateOutlet da FormAction (GROUP annidati),\r\n           configForm = formAction.formGroup \u2192 si renderizza sempre indipendentemente\r\n           dal layout. Il check `configForm !== _questions || layout === 'default'`\r\n           distingue i due casi:\r\n             - auto-render root  \u2192 mostra solo in layout 'default'\r\n             - nested GROUP      \u2192 mostra sempre (configForm \u00E8 un altro riferimento)\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n      <ng-template #ConfigForm let-configForm [ngIf]=\"_questions\">\r\n         @if (configForm != null && (configForm !== _questions || layout === 'default')) {\r\n         <div class=\"row g-0\" #containerForm>\r\n            <ng-container *ngFor=\"let data of configForm; let formGroupIndex = index\" [ngTemplateOutlet]=\"TypeForm\"\r\n               [ngTemplateOutletContext]=\"{\r\n                     $implicit: data.formGroup,\r\n                     cssClass: data.class,\r\n                     title: data.title,\r\n                     formGroupIndex: formGroupIndex,\r\n                     group: data,\r\n                     containerForm: containerForm,\r\n                     actions: data.actions || [],\r\n                     cfForm: configForm,\r\n                  }\">\r\n            </ng-container>\r\n         </div>\r\n         }\r\n      </ng-template>\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           TABS \u2014 ogni gruppo in un tab Angular Material\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n      @if (layout === 'tabs' && _questions) {\r\n      <mat-tab-group class=\"df-tab-group\" animationDuration=\"200ms\">\r\n         @for (data of _questions; track data; let formGroupIndex = $index) {\r\n         <mat-tab>\r\n            <ng-template mat-tab-label>\r\n               <span class=\"df-tab-label\" [class.df-tab-label--error]=\"isGroupInvalid(formGroupIndex)\">\r\n                  @if (isGroupInvalid(formGroupIndex)) {\r\n                  <mat-icon class=\"df-tab-error-icon\">error_outline</mat-icon>\r\n                  }\r\n                  {{ data.title || ('Tab ' + (formGroupIndex + 1)) }}\r\n               </span>\r\n            </ng-template>\r\n            <div class=\"df-tab-content pt-3\" #tabContainer>\r\n               <div class=\"row g-0\">\r\n                  <ng-container [ngTemplateOutlet]=\"TypeForm\" [ngTemplateOutletContext]=\"{\r\n                           $implicit: data.formGroup,\r\n                           cssClass: ['col-12', 'p-0'],\r\n                           title: null,\r\n                           formGroupIndex: formGroupIndex,\r\n                           group: data,\r\n                           containerForm: tabContainer,\r\n                           actions: data.actions || [],\r\n                           cfForm: _questions,\r\n                        }\">\r\n                  </ng-container>\r\n               </div>\r\n            </div>\r\n         </mat-tab>\r\n         }\r\n      </mat-tab-group>\r\n      }\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           STEPS \u2014 ogni gruppo in uno step Angular Material Stepper\r\n           Ogni step mostra i bottoni Indietro / Avanti automaticamente.\r\n           Le azioni .addActions() del gruppo vengono mostrate sopra i bottoni nav.\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n      @if (layout === 'steps' && _questions) {\r\n      <mat-stepper [linear]=\"linear\" [orientation]=\"stepperOrientation\" class=\"df-stepper\">\r\n         @for (data of _questions; track data; let formGroupIndex = $index; let isFirst = $first; let isLast = $last) {\r\n         <mat-step [state]=\"isGroupInvalid(formGroupIndex) ? 'error' : undefined\">\r\n            <ng-template matStepLabel>\r\n               <span class=\"df-step-label\" [class.df-step-label--error]=\"isGroupInvalid(formGroupIndex)\">\r\n                  {{ data.title || ('Step ' + (formGroupIndex + 1)) }}\r\n               </span>\r\n            </ng-template>\r\n            <div class=\"df-step-content\" #stepContainer>\r\n               <div class=\"row g-0 mt-2\">\r\n                  <ng-container [ngTemplateOutlet]=\"TypeForm\" [ngTemplateOutletContext]=\"{\r\n                           $implicit: data.formGroup,\r\n                           cssClass: ['col-12', 'p-0'],\r\n                           title: null,\r\n                           formGroupIndex: formGroupIndex,\r\n                           group: data,\r\n                           containerForm: stepContainer,\r\n                           actions: data.actions || [],\r\n                           cfForm: _questions,\r\n                        }\">\r\n                  </ng-container>\r\n               </div>\r\n               <!-- Navigazione step (Indietro / Avanti) -->\r\n               <div class=\"df-step-nav mt-3 d-flex gap-2 flex-wrap align-items-center\">\r\n                  @if (!isFirst) {\r\n                  <button mat-button matStepperPrevious type=\"button\" class=\"df-step-btn-prev\">\r\n                     <mat-icon>arrow_back</mat-icon>\r\n                     Indietro\r\n                  </button>\r\n                  }\r\n                  @if (!isLast) {\r\n                  <button mat-raised-button color=\"primary\" matStepperNext type=\"button\" class=\"df-step-btn-next\">\r\n                     Avanti\r\n                     <mat-icon>arrow_forward</mat-icon>\r\n                  </button>\r\n                  }\r\n               </div>\r\n            </div>\r\n         </mat-step>\r\n         }\r\n      </mat-stepper>\r\n      }\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           TEMPLATE CONDIVISI \u2014 usati da tutti e tre i layout\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n\r\n      <ng-template #TypeForm let-typeForm let-cssClass=\"cssClass\" let-title=\"title\" let-formGroupIndex=\"formGroupIndex\"\r\n         let-group=\"group\" let-containerForm=\"containerForm\" let-actions=\"actions\" let-cfForm=\"cfForm\">\r\n         <div [class]=\"(cssClass || ['col-12', 'p-0']).join(' ')\" *ngIf=\"{isLast: false} as last\">\r\n            @if (title) {\r\n            <div class=\"row mb-4 g-1 ps-1\">\r\n               <div class=\"form-title fs-13\">{{ title }}</div>\r\n            </div>\r\n            }\r\n\r\n            <div class=\"row g-0\">\r\n               @for (data of typeForm; track data; let formActionIndex = $index; let last = $last) {\r\n               <ng-container [ngTemplateOutlet]=\"FormAction\" [ngTemplateOutletContext]=\"{\r\n                        $implicit: data?.formAction || {},\r\n                        formGroupIndex: formGroupIndex,\r\n                        formActionIndex: formActionIndex,\r\n                        group: group.formGroup,\r\n                        containerForm: containerForm,\r\n                     }\">\r\n                  @if (data?.formAction?.title && data?.formAction?.type == TYPE_CONTROL_FORM.GROUP) {\r\n                  <div class=\"form-sub-title\">{{ data?.formAction?.title }}</div>\r\n                  }\r\n               </ng-container>\r\n               }\r\n\r\n               <ng-content></ng-content>\r\n               @for (action of actions; track action; let formActionIndex = $index; let last = $last) {\r\n               <ng-container>\r\n                  @if (action?.visible != null && action?.visible == true) {\r\n                  <button mat-button #button [class]=\"action.cssClassButton?.join(' ')\"\r\n                     [disabled]=\"action?.disabled || false\"\r\n                     (click)=\"action.action(group.formGroup, group.id ?? formGroupIndex, getGroupForm(formGroupIndex), group, formGroupIndex, _questions, formGroup)\"><i\r\n                        #icon [class]=\"action.cssClassIcon?.join(' ')\" aria-hidden=\"true\"> </i>{{ action.label\r\n                     }}</button>\r\n                  }\r\n               </ng-container>\r\n               }\r\n            </div>\r\n         </div>\r\n      </ng-template>\r\n\r\n      <ng-template #FormAction let-formAction let-formGroupIndex=\"formGroupIndex\" let-formActionIndex=\"formActionIndex\"\r\n         let-group=\"group\" let-containerForm=\"containerForm\">\r\n         <ng-container [ngTemplateOutlet]=\"ConfigForm\" [ngTemplateOutletContext]=\"{$implicit: formAction?.formGroup}\">\r\n            @if (!formAction?.css?.hide) {\r\n            <ng-container [ngSwitch]=\"formAction.type\" *ngIf=\"!formAction?.css?.hide\">\r\n               @switch (formAction.type) {\r\n               @case (TYPE_CONTROL_FORM.ARRAYSTRING) {\r\n               <app-arraystring class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-arraystring>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.COMBO) {\r\n               <app-combo class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-combo>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.COMBOPAGINATE) {\r\n               <app-combo class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-combo>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.CHECKBOX) {\r\n               <app-checkbox class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-checkbox>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.CURRENCY) {\r\n               <app-currency class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-currency>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.DATA) {\r\n               <app-date [question]=\"formAction\" [formActionIndex]=\"formActionIndex\" [formGroupIndex]=\"formGroupIndex\"\r\n                  [group]=\"group\" [allGroup]=\"_questions\"></app-date>\r\n               }\r\n\r\n               @case (TYPE_CONTROL_FORM.DATETIME) {\r\n               <app-date-time class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-date-time>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.DATARANGE) {\r\n               <app-date-range class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-date-range>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.TEXT) {\r\n               <app-input-text class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-input-text>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.FILE) {\r\n               <app-file class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-file>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.TIME) {\r\n               <app-input-time class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-input-time>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.NUMBER) {\r\n               <app-number class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-number>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.RADIOGROUP) {\r\n               <app-radiobutton class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-radiobutton>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.TEXTAREA) {\r\n               <app-textarea class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-textarea>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.SORTACTION) {\r\n               <app-sort-action class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-sort-action>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.YEAR) {\r\n               <app-year class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-year>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.RATING) {\r\n               <app-rating class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-rating>\r\n               }\r\n\r\n               }\r\n            </ng-container>\r\n            }\r\n         </ng-container>\r\n      </ng-template>\r\n   </ng-container>\r\n</div>", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "component", type: i2$4.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2$4.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2$4.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2$4.MatStepperNext, selector: "button[matStepperNext]" }, { kind: "directive", type: i2$4.MatStepperPrevious, selector: "button[matStepperPrevious]" }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5$1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i5$1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i5$1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "component", type: ArrayStringComponent, selector: "app-arraystring" }, { kind: "component", type: InputTextComponent, selector: "app-input-text" }, { kind: "component", type: ComboComponent, selector: "app-combo" }, { kind: "component", type: CheckboxComponent, selector: "app-checkbox" }, { kind: "component", type: CurrencyComponent, selector: "app-currency" }, { kind: "component", type: DateComponent, selector: "app-date" }, { kind: "component", type: DateRangeComponent, selector: "app-date-range" }, { kind: "component", type: DateTimeComponent, selector: "app-date-time" }, { kind: "component", type: FileComponent, selector: "app-file" }, { kind: "component", type: InputTimeComponent, selector: "app-input-time" }, { kind: "component", type: NumberComponent, selector: "app-number" }, { kind: "component", type: QuestionRadioButtonComponent, selector: "app-radiobutton" }, { kind: "component", type: TextareaComponent, selector: "app-textarea" }, { kind: "component", type: SortActionComponent, selector: "app-sort-action" }, { kind: "component", type: DateYearComponent, selector: "app-year" }, { kind: "component", type: RatingComponent, selector: "app-rating" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: DynamicFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dynamic-form', providers: [StepperService], standalone: false, template: "<!-- @format -->\r\n\r\n<!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" /> -->\r\n<div class=\"df-form\">\r\n   <ng-container>\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           DEFAULT \u2014 tutti i gruppi affiancati in una riga (comportamento originale)\r\n           Usa [ngIf] direttamente sul ng-template: si auto-renderizza quando la\r\n           condizione \u00E8 vera, passando _questions come variabile implicita.\r\n           Quando chiamato via ngTemplateOutlet da FormAction (GROUP annidati),\r\n           configForm = formAction.formGroup \u2192 si renderizza sempre indipendentemente\r\n           dal layout. Il check `configForm !== _questions || layout === 'default'`\r\n           distingue i due casi:\r\n             - auto-render root  \u2192 mostra solo in layout 'default'\r\n             - nested GROUP      \u2192 mostra sempre (configForm \u00E8 un altro riferimento)\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n      <ng-template #ConfigForm let-configForm [ngIf]=\"_questions\">\r\n         @if (configForm != null && (configForm !== _questions || layout === 'default')) {\r\n         <div class=\"row g-0\" #containerForm>\r\n            <ng-container *ngFor=\"let data of configForm; let formGroupIndex = index\" [ngTemplateOutlet]=\"TypeForm\"\r\n               [ngTemplateOutletContext]=\"{\r\n                     $implicit: data.formGroup,\r\n                     cssClass: data.class,\r\n                     title: data.title,\r\n                     formGroupIndex: formGroupIndex,\r\n                     group: data,\r\n                     containerForm: containerForm,\r\n                     actions: data.actions || [],\r\n                     cfForm: configForm,\r\n                  }\">\r\n            </ng-container>\r\n         </div>\r\n         }\r\n      </ng-template>\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           TABS \u2014 ogni gruppo in un tab Angular Material\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n      @if (layout === 'tabs' && _questions) {\r\n      <mat-tab-group class=\"df-tab-group\" animationDuration=\"200ms\">\r\n         @for (data of _questions; track data; let formGroupIndex = $index) {\r\n         <mat-tab>\r\n            <ng-template mat-tab-label>\r\n               <span class=\"df-tab-label\" [class.df-tab-label--error]=\"isGroupInvalid(formGroupIndex)\">\r\n                  @if (isGroupInvalid(formGroupIndex)) {\r\n                  <mat-icon class=\"df-tab-error-icon\">error_outline</mat-icon>\r\n                  }\r\n                  {{ data.title || ('Tab ' + (formGroupIndex + 1)) }}\r\n               </span>\r\n            </ng-template>\r\n            <div class=\"df-tab-content pt-3\" #tabContainer>\r\n               <div class=\"row g-0\">\r\n                  <ng-container [ngTemplateOutlet]=\"TypeForm\" [ngTemplateOutletContext]=\"{\r\n                           $implicit: data.formGroup,\r\n                           cssClass: ['col-12', 'p-0'],\r\n                           title: null,\r\n                           formGroupIndex: formGroupIndex,\r\n                           group: data,\r\n                           containerForm: tabContainer,\r\n                           actions: data.actions || [],\r\n                           cfForm: _questions,\r\n                        }\">\r\n                  </ng-container>\r\n               </div>\r\n            </div>\r\n         </mat-tab>\r\n         }\r\n      </mat-tab-group>\r\n      }\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           STEPS \u2014 ogni gruppo in uno step Angular Material Stepper\r\n           Ogni step mostra i bottoni Indietro / Avanti automaticamente.\r\n           Le azioni .addActions() del gruppo vengono mostrate sopra i bottoni nav.\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n      @if (layout === 'steps' && _questions) {\r\n      <mat-stepper [linear]=\"linear\" [orientation]=\"stepperOrientation\" class=\"df-stepper\">\r\n         @for (data of _questions; track data; let formGroupIndex = $index; let isFirst = $first; let isLast = $last) {\r\n         <mat-step [state]=\"isGroupInvalid(formGroupIndex) ? 'error' : undefined\">\r\n            <ng-template matStepLabel>\r\n               <span class=\"df-step-label\" [class.df-step-label--error]=\"isGroupInvalid(formGroupIndex)\">\r\n                  {{ data.title || ('Step ' + (formGroupIndex + 1)) }}\r\n               </span>\r\n            </ng-template>\r\n            <div class=\"df-step-content\" #stepContainer>\r\n               <div class=\"row g-0 mt-2\">\r\n                  <ng-container [ngTemplateOutlet]=\"TypeForm\" [ngTemplateOutletContext]=\"{\r\n                           $implicit: data.formGroup,\r\n                           cssClass: ['col-12', 'p-0'],\r\n                           title: null,\r\n                           formGroupIndex: formGroupIndex,\r\n                           group: data,\r\n                           containerForm: stepContainer,\r\n                           actions: data.actions || [],\r\n                           cfForm: _questions,\r\n                        }\">\r\n                  </ng-container>\r\n               </div>\r\n               <!-- Navigazione step (Indietro / Avanti) -->\r\n               <div class=\"df-step-nav mt-3 d-flex gap-2 flex-wrap align-items-center\">\r\n                  @if (!isFirst) {\r\n                  <button mat-button matStepperPrevious type=\"button\" class=\"df-step-btn-prev\">\r\n                     <mat-icon>arrow_back</mat-icon>\r\n                     Indietro\r\n                  </button>\r\n                  }\r\n                  @if (!isLast) {\r\n                  <button mat-raised-button color=\"primary\" matStepperNext type=\"button\" class=\"df-step-btn-next\">\r\n                     Avanti\r\n                     <mat-icon>arrow_forward</mat-icon>\r\n                  </button>\r\n                  }\r\n               </div>\r\n            </div>\r\n         </mat-step>\r\n         }\r\n      </mat-stepper>\r\n      }\r\n\r\n      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n           TEMPLATE CONDIVISI \u2014 usati da tutti e tre i layout\r\n      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n\r\n      <ng-template #TypeForm let-typeForm let-cssClass=\"cssClass\" let-title=\"title\" let-formGroupIndex=\"formGroupIndex\"\r\n         let-group=\"group\" let-containerForm=\"containerForm\" let-actions=\"actions\" let-cfForm=\"cfForm\">\r\n         <div [class]=\"(cssClass || ['col-12', 'p-0']).join(' ')\" *ngIf=\"{isLast: false} as last\">\r\n            @if (title) {\r\n            <div class=\"row mb-4 g-1 ps-1\">\r\n               <div class=\"form-title fs-13\">{{ title }}</div>\r\n            </div>\r\n            }\r\n\r\n            <div class=\"row g-0\">\r\n               @for (data of typeForm; track data; let formActionIndex = $index; let last = $last) {\r\n               <ng-container [ngTemplateOutlet]=\"FormAction\" [ngTemplateOutletContext]=\"{\r\n                        $implicit: data?.formAction || {},\r\n                        formGroupIndex: formGroupIndex,\r\n                        formActionIndex: formActionIndex,\r\n                        group: group.formGroup,\r\n                        containerForm: containerForm,\r\n                     }\">\r\n                  @if (data?.formAction?.title && data?.formAction?.type == TYPE_CONTROL_FORM.GROUP) {\r\n                  <div class=\"form-sub-title\">{{ data?.formAction?.title }}</div>\r\n                  }\r\n               </ng-container>\r\n               }\r\n\r\n               <ng-content></ng-content>\r\n               @for (action of actions; track action; let formActionIndex = $index; let last = $last) {\r\n               <ng-container>\r\n                  @if (action?.visible != null && action?.visible == true) {\r\n                  <button mat-button #button [class]=\"action.cssClassButton?.join(' ')\"\r\n                     [disabled]=\"action?.disabled || false\"\r\n                     (click)=\"action.action(group.formGroup, group.id ?? formGroupIndex, getGroupForm(formGroupIndex), group, formGroupIndex, _questions, formGroup)\"><i\r\n                        #icon [class]=\"action.cssClassIcon?.join(' ')\" aria-hidden=\"true\"> </i>{{ action.label\r\n                     }}</button>\r\n                  }\r\n               </ng-container>\r\n               }\r\n            </div>\r\n         </div>\r\n      </ng-template>\r\n\r\n      <ng-template #FormAction let-formAction let-formGroupIndex=\"formGroupIndex\" let-formActionIndex=\"formActionIndex\"\r\n         let-group=\"group\" let-containerForm=\"containerForm\">\r\n         <ng-container [ngTemplateOutlet]=\"ConfigForm\" [ngTemplateOutletContext]=\"{$implicit: formAction?.formGroup}\">\r\n            @if (!formAction?.css?.hide) {\r\n            <ng-container [ngSwitch]=\"formAction.type\" *ngIf=\"!formAction?.css?.hide\">\r\n               @switch (formAction.type) {\r\n               @case (TYPE_CONTROL_FORM.ARRAYSTRING) {\r\n               <app-arraystring class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-arraystring>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.COMBO) {\r\n               <app-combo class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-combo>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.COMBOPAGINATE) {\r\n               <app-combo class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-combo>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.CHECKBOX) {\r\n               <app-checkbox class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-checkbox>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.CURRENCY) {\r\n               <app-currency class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-currency>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.DATA) {\r\n               <app-date [question]=\"formAction\" [formActionIndex]=\"formActionIndex\" [formGroupIndex]=\"formGroupIndex\"\r\n                  [group]=\"group\" [allGroup]=\"_questions\"></app-date>\r\n               }\r\n\r\n               @case (TYPE_CONTROL_FORM.DATETIME) {\r\n               <app-date-time class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-date-time>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.DATARANGE) {\r\n               <app-date-range class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-date-range>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.TEXT) {\r\n               <app-input-text class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-input-text>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.FILE) {\r\n               <app-file class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-file>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.TIME) {\r\n               <app-input-time class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-input-time>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.NUMBER) {\r\n               <app-number class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-number>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.RADIOGROUP) {\r\n               <app-radiobutton class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-radiobutton>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.TEXTAREA) {\r\n               <app-textarea class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-textarea>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.SORTACTION) {\r\n               <app-sort-action class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-sort-action>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.YEAR) {\r\n               <app-year class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-year>\r\n               }\r\n               @case (TYPE_CONTROL_FORM.RATING) {\r\n               <app-rating class=\"scaled\" [question]=\"formAction\" [formActionIndex]=\"formActionIndex\"\r\n                  [formGroupIndex]=\"formGroupIndex\" [group]=\"group\" [allGroup]=\"_questions\"></app-rating>\r\n               }\r\n\r\n               }\r\n            </ng-container>\r\n            }\r\n         </ng-container>\r\n      </ng-template>\r\n   </ng-container>\r\n</div>", styles: [".df-tab-group{width:100%}.df-tab-group ::ng-deep .mat-mdc-tab-header{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px 12px 0 0;border:1px solid rgba(0,0,0,.08);border-bottom:none;box-shadow:0 -2px 8px #0000000a;padding:0 4px}.df-tab-group ::ng-deep .mat-mdc-tab{min-width:110px;opacity:.6;transition:opacity .2s ease}.df-tab-group ::ng-deep .mat-mdc-tab.mdc-tab--active{opacity:1}.df-tab-group ::ng-deep .mat-mdc-tab:not(.mdc-tab--active):hover{opacity:.82}.df-tab-group ::ng-deep .mdc-tab-indicator__content--underline{border-radius:3px 3px 0 0;border-top-width:3px}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error) .mdc-tab__text-label{color:#d32f2f!important}.df-tab-group ::ng-deep .mat-mdc-tab:has(.df-tab-label--error).mdc-tab--active .mdc-tab-indicator__content--underline{border-color:#d32f2f}.df-tab-group .df-tab-content{padding:20px 12px 12px;background:#fff;border:1px solid rgba(0,0,0,.08);border-top:none;border-radius:0 0 12px 12px;box-shadow:0 4px 16px #0000000d}.df-tab-group .df-tab-label{display:flex;align-items:center;gap:5px;font-weight:500;letter-spacing:.01em}.df-tab-group .df-tab-label--error{color:#d32f2f}.df-tab-group .df-tab-error-icon{font-size:16px;width:16px;height:16px;line-height:16px;color:#d32f2f;animation:df-error-pulse 1.8s ease-in-out infinite}.df-stepper{width:100%;background:transparent}.df-stepper ::ng-deep .mat-stepper-horizontal,.df-stepper ::ng-deep .mat-stepper-vertical,.df-stepper ::ng-deep .mat-horizontal-stepper-wrapper,.df-stepper ::ng-deep .mat-horizontal-content-container{background:transparent}.df-stepper ::ng-deep .mat-horizontal-stepper-header-container{background:linear-gradient(to bottom,#f5f7fa,#fff);border-radius:12px;border:1px solid rgba(0,0,0,.08);margin-bottom:16px;padding:4px 0;box-shadow:0 2px 8px #0000000d}.df-stepper ::ng-deep .mat-step-icon{font-weight:700;box-shadow:0 2px 6px #00000026;transition:box-shadow .2s ease}.df-stepper ::ng-deep .mat-step-icon-selected{box-shadow:0 3px 10px rgba(var(--mdc-theme-primary-rgb, 63, 81, 181),.4)}.df-stepper ::ng-deep .mat-step-icon-state-error{background-color:#d32f2f!important;box-shadow:0 2px 8px #d32f2f66}.df-stepper ::ng-deep .mat-step-label:has(.df-step-label--error) .mat-step-text-label{color:#d32f2f}.df-stepper .df-step-content{padding:20px 12px 8px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 16px #0000000f}.df-stepper .df-step-label{font-weight:500;letter-spacing:.01em}.df-stepper .df-step-label--error{color:#d32f2f;font-weight:600}.df-stepper .df-step-nav{border-top:1px solid rgba(0,0,0,.08);padding-top:12px;margin-top:4px}.df-stepper .df-step-nav .df-step-btn-prev .mat-icon{font-size:18px;width:18px;height:18px}.df-stepper .df-step-nav .df-step-btn-next{margin-left:auto}.df-stepper .df-step-nav .df-step-btn-next .mat-icon{font-size:18px;width:18px;height:18px}@keyframes df-error-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.65;transform:scale(.88)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }], propDecorators: { questions: [{
                type: Input
            }], config: [{
                type: Input
            }], json: [{
                type: Input
            }], onFormCreate: [{
                type: Output
            }], onQuestionsCreate: [{
                type: Output
            }], onChange: [{
                type: Output
            }], valueChange: [{
                type: Output
            }], completionChange: [{
                type: Output
            }], statusChange: [{
                type: Output
            }], layout: [{
                type: Input
            }], linear: [{
                type: Input
            }], stepperOrientation: [{
                type: Input
            }] } });

/** @format */
/**
* @author luca.piciollo
* @email lucapiciollo@gmail.com
* @create date 2022-03-29 19:47:50
* @modify date 2022-03-29 19:47:50
* @desc [description]
*/
const maxYearCalendar = () => {
    return moment().add(1, 'year').endOf('year').toDate().toISOString();
};
const minYearCalendar = () => {
    return moment().subtract(5, 'year').endOf('year').toDate().toISOString();
};
class PlDynamicFormModule {
    constructor(dynamicFormAssets, dynamicFormTheme) {
        this.dynamicFormAssets = dynamicFormAssets;
        this.dynamicFormTheme = dynamicFormTheme;
        this.dynamicFormAssets.loadDefaultAssets();
        this.dynamicFormTheme.init();
    }
    static forRoot(config = {}) {
        return {
            ngModule: PlDynamicFormModule,
            providers: provideDynamicFormForModule(config),
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: PlDynamicFormModule, deps: [{ token: DynamicFormAssetsService }, { token: DynamicFormThemeService }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.22", ngImport: i0, type: PlDynamicFormModule, declarations: [TimeToNumberPipe, ArrayStringComponent, LanguagePipe, CamScanDirective, LoadChildDirective, InputTextComponent, ComboComponent, DynamicFormComponent, CheckboxComponent, CurrencyComponent, DateComponent, DateRangeComponent, DateTimeComponent, FileComponent, InputTimeComponent, NumberComponent, QuestionRadioButtonComponent, TextareaComponent, SpeechDirective, SortActionComponent, FixSearchBox, DateYearComponent, RatingComponent], imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule], exports: [TimeToNumberPipe, DateYearComponent, RatingComponent, ArrayStringComponent, LanguagePipe, LoadChildDirective, CamScanDirective, SortActionComponent, ReactiveFormsModule, FormsModule, ComboComponent, CommonModule, DynamicFormComponent, InputTextComponent, CheckboxComponent, CurrencyComponent, DateComponent, DateRangeComponent, DateTimeComponent, FileComponent, InputTimeComponent, NumberComponent, QuestionRadioButtonComponent, TextareaComponent, MaterialModule, FixSearchBox] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: PlDynamicFormModule, providers: [
            Camera,
            { provide: DATE_PIPE, useValue: { dateFormat: 'yyyy-MM-dd' } },
            {
                provide: DATE_PIPE_TIME,
                useValue: { dateFormat: 'yyyy-MM-ddTHH:mm:ss' },
            },
            { provide: COMBO_PAING_INIT, useValue: { count: 10, page: 1 } },
            { provide: MAX_ELEMENT_COMBO_SHOW, useValue: { maxElementShow: 3 } },
            { provide: MAX_DATE_CALENDAR, useFactory: maxYearCalendar },
            { provide: MIN_DATE_CALENDAR, useFactory: minYearCalendar },
        ], imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, ReactiveFormsModule, FormsModule, CommonModule, MaterialModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.22", ngImport: i0, type: PlDynamicFormModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        Camera,
                        { provide: DATE_PIPE, useValue: { dateFormat: 'yyyy-MM-dd' } },
                        {
                            provide: DATE_PIPE_TIME,
                            useValue: { dateFormat: 'yyyy-MM-ddTHH:mm:ss' },
                        },
                        { provide: COMBO_PAING_INIT, useValue: { count: 10, page: 1 } },
                        { provide: MAX_ELEMENT_COMBO_SHOW, useValue: { maxElementShow: 3 } },
                        { provide: MAX_DATE_CALENDAR, useFactory: maxYearCalendar },
                        { provide: MIN_DATE_CALENDAR, useFactory: minYearCalendar },
                    ],
                    declarations: [TimeToNumberPipe, ArrayStringComponent, LanguagePipe, CamScanDirective, LoadChildDirective, InputTextComponent, ComboComponent, DynamicFormComponent, CheckboxComponent, CurrencyComponent, DateComponent, DateRangeComponent, DateTimeComponent, FileComponent, InputTimeComponent, NumberComponent, QuestionRadioButtonComponent, TextareaComponent, SpeechDirective, SortActionComponent, FixSearchBox, DateYearComponent, RatingComponent],
                    imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
                    exports: [TimeToNumberPipe, DateYearComponent, RatingComponent, ArrayStringComponent, LanguagePipe, LoadChildDirective, CamScanDirective, SortActionComponent, ReactiveFormsModule, FormsModule, ComboComponent, CommonModule, DynamicFormComponent, InputTextComponent, CheckboxComponent, CurrencyComponent, DateComponent, DateRangeComponent, DateTimeComponent, FileComponent, InputTimeComponent, NumberComponent, QuestionRadioButtonComponent, TextareaComponent, MaterialModule, FixSearchBox],
                }]
        }], ctorParameters: () => [{ type: DynamicFormAssetsService }, { type: DynamicFormThemeService }] });

/** @format */
const { groupAt, controlAt, collectFormErrors } = nestedActionsFormHelpers;
const DYNAMIC_FORM_NESTED_EVENTS = {
    events: {
        logFieldChange: ctx => {
            console.log('JSON change event:', ctx.formName, ctx.formControl?.value, ctx.prevValue);
        },
    },
    actions: {
        validateRegistry: ctx => {
            const registry = groupAt(ctx.formGroup, 'registry');
            registry?.markAllAsTouched();
            console.log('JSON registry valid:', registry?.valid);
            console.log('JSON registry value:', registry?.value);
        },
        patchRegistry: ctx => {
            const registry = groupAt(ctx.formGroup, 'registry');
            registry?.patchValue({ firstName: 'Luca', lastName: 'Piciollo', email: 'luca.json@test.it', phone: '3331234567', gender: 'M', active: true });
            console.log('JSON patch anagrafica eseguito');
        },
        calculateTotal: ctx => {
            const amounts = groupAt(ctx.formGroup, 'contract.amounts');
            const taxable = Number(amounts?.get('taxable')?.value ?? 0);
            const vat = Number(amounts?.get('vat')?.value ?? 0);
            controlAt(ctx.formGroup, 'contract.amounts.total')?.setValue(Number((taxable + taxable * vat / 100).toFixed(2)));
        },
        readWholeForm: ctx => {
            console.log('JSON formGroup:', ctx.formGroup);
            console.log('JSON value:', ctx.formGroup?.value);
            console.log('JSON raw value:', ctx.formGroup instanceof FormGroup ? ctx.formGroup.getRawValue() : ctx.formGroup?.value);
            console.log('JSON errors:', collectFormErrors(ctx.formGroup));
        },
    },
};

/**
 * Generated bundle index. Do not edit.
 */

export { ArrayStringComponent, BaseComponent, CamScanDirective, CheckboxComponent, ComboComponent, CurrencyComponent, DYNAMIC_FORM_DEFAULT_CONFIG, DYNAMIC_FORM_NESTED_EVENTS, DYNAMIC_FORM_RUNTIME_CONFIG, DateComponent, DateRangeComponent, DateTimeComponent, DateYearComponent, DietNestedFormJson, DynamicConditionEvaluatorService, DynamicFormAssetsService, DynamicFormBuilder, DynamicFormComponent, DynamicFormEventRegistryService, DynamicFormJsonMapperService, DynamicFormThemeService, DynamicValidatorFactoryService, FileComponent, FileValueAccessorDirective, FixSearchBox, GetErrorForm, GetErrorFormControl, GetErrorFormControlFromObj, InputTextComponent, InputTimeComponent, LanguagePipe, LoadChildDirective, MaterialModule, NumberComponent, PlDynamicFormModule, QuestionRadioButtonComponent, RatingComponent, SortActionComponent, SpeechDirective, TYPE_CONTROL_FORM, TextareaComponent, TimeToNumberPipe, YEAR_MODE_FORMATS, autoUnsubscribe, bufferWithMaxAwaitTime, computeFormCompletion, createNestedActionsFormBuilder, flattenFields, isOptionValid, mergeDynamicFormConfig, nestedActionsFormHelpers, provideDynamicForm, provideDynamicFormForModule };
//# sourceMappingURL=pl-dynamicform.mjs.map
