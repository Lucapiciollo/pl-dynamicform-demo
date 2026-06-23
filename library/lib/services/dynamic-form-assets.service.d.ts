import { DynamicFormRuntimeConfig } from '../providers/dynamic-form.providers';
import * as i0 from "@angular/core";
/**
 * Carica gli asset globali necessari al DynamicForm senza obbligare l'app host
 * ad aggiungere link/font/stili nel proprio index.html o styles.scss.
 *
 * Nota: gli overlay Material/CDK vivono fuori dal componente, quindi alcuni stili
 * devono essere globali. Li iniettiamo una sola volta nel document head.
 */
export declare class DynamicFormAssetsService {
    private readonly document;
    private readonly config;
    private readonly materialIconsId;
    private readonly materialSymbolsId;
    private readonly globalStylesId;
    private readonly materialSymbolsUrl;
    constructor(document: Document, config: DynamicFormRuntimeConfig | null);
    /**
     * Carica gli asset di default: font Material Icons/Symbols e stili globali runtime.
     * Può essere disabilitato selettivamente tramite `theme.loadMaterialIcons` e
     * `theme.injectRuntimeStyles` nella configurazione.
     */
    loadDefaultAssets(): void;
    /**
     * Aggiunge un elemento `<link rel="stylesheet">` nell'`<head>` del documento.
     * Utilizza l'`id` come guard per evitare inserimenti duplicati.
     *
     * @param id - Identificatore univoco del tag link (usato come attributo `id`).
     * @param href - URL del foglio di stile da caricare.
     */
    private appendStylesheet;
    /**
     * Inietta un blocco `<style>` con i CSS custom property di default del tema
     * e gli stili globali per gli overlay Material/CDK (mat-select, mat-datepicker, ecc.).
     * Gli overlay CDK vivono fuori dall'incapsulamento dei componenti e richiedono
     * stili globali per essere tematizzati correttamente.
     */
    private appendGlobalStyles;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormAssetsService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicFormAssetsService>;
}
