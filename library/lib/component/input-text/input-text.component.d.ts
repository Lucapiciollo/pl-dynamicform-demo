/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-30 00:30:41
 * @modify date 2022-03-30 00:30:41
 * @desc [description]
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class InputTextComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    /************************************************************************************************************************************************************************ */
    inputs: ElementRef;
    /************************************************************************************************************************************************************************ */
    constructor(injector: Injector, element: ElementRef);
    /************************************************************************************************************************************************************************ */
    /** Pattern della maschera configurata sul campo (stringa vuota se assente). */
    get maskPattern(): string;
    /**
     * Regex dei caratteri ammessi per la maschera. Quando NON è configurata
     * alcuna maschera restituisce una regex permissiva (`[\s\S]`) così che la
     * direttiva `[mask]`, sempre presente nel template, resti un no-op e non
     * filtri spazi o caratteri accentati sui normali campi di testo.
     */
    get maskAllowedRegex(): RegExp | string;
    /** Carattere token della maschera (default `#`). */
    get maskToken(): string;
    /** Se il valore vuoto è valido per la maschera (default `true`). */
    get maskAllowEmpty(): boolean;
    /************************************************************************************************************************************************************************ */
    onChangeByMic(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTextComponent, "app-input-text", never, {}, {}, never, never, false, never>;
}
