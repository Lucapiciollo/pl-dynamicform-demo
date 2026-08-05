/** @format */
import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DynamicFormNumberFormatService } from '../services/dynamic-form-number-format.service';
import * as i0 from "@angular/core";
/**
 * Da applicare a un `<input type="text" inputmode="decimal">` legato a un `FormControl`
 * di tipo `number` (campi `app-number`/`app-currency`). Sostituisce l'accessor di default
 * di Angular (`NG_VALUE_ACCESSOR`) così da:
 * - mostrare/accettare in digitazione SOLO il separatore decimale configurato
 *   (`numberFormat.decimalSeparator`, vedi `DynamicFormNumberFormatService`);
 * - mantenere il `FormControl` sempre valorizzato con un vero `number` JS (`.` interno),
 *   quindi Validators/min/max/BE non cambiano comportamento.
 *
 * Nota: non si può ottenere lo stesso risultato lasciando `type="number"`, perché il
 * separatore decimale di un input nativo `number` è deciso dalla locale del browser/OS
 * e non è forzabile via JS/CSS.
 */
export declare class DecimalNumberDirective implements ControlValueAccessor {
    private readonly el;
    private readonly renderer;
    private readonly numberFormat;
    private onChange;
    private onTouched;
    constructor(el: ElementRef<HTMLInputElement>, renderer: Renderer2, numberFormat: DynamicFormNumberFormatService);
    writeValue(value: number | null): void;
    registerOnChange(fn: (value: number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    onInput(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DecimalNumberDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DecimalNumberDirective, "[appDecimalNumber]", never, {}, {}, never, never, false, never>;
}
