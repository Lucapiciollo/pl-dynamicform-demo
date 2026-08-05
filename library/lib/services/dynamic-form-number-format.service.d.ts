import { DynamicFormRuntimeConfig } from '../providers/dynamic-form.providers';
import * as i0 from "@angular/core";
/**
 * Centralizza la forzatura del separatore decimale (`,` oppure `.`) configurato
 * dall'app host tramite `provideDynamicForm()`/`PlDynamicFormModule.forRoot()`
 * (`numberFormat.decimalSeparator`, default `'.'`).
 *
 * Gestisce SOLO il separatore decimale (es. `1000,10` vs `1000.10`), non il
 * separatore delle migliaia. Il valore del `FormControl` resta sempre un
 * `number` JS standard (quindi validators/BE non sono impattati): la forzatura
 * riguarda esclusivamente cosa l'utente può digitare e cosa viene mostrato.
 */
export declare class DynamicFormNumberFormatService {
    private readonly config;
    constructor(config: DynamicFormRuntimeConfig | null);
    /** Separatore decimale configurato dall'app (default `'.'`). */
    get decimalSeparator(): ',' | '.';
    /** L'altro carattere, tollerato in input (es. digitato da tastierino numerico fisico) ma sempre convertito in `decimalSeparator`. */
    private get alternateSeparator();
    /** `number` JS -> stringa da mostrare nell'input, col separatore configurato. */
    format(value: number | null | undefined): string;
    /** Stringa digitata (idealmente già passata da `sanitizeTyped`) -> `number` JS reale (sempre con `.`), o `null` se non parsabile/vuota. */
    parse(displayValue: string | null | undefined): number | null;
    /**
     * Filtra in tempo reale il testo digitato: solo cifre, un unico separatore decimale
     * (l'eventuale carattere alternativo digitato viene convertito in quello configurato)
     * e un unico segno meno iniziale (numeri negativi ammessi, es. per `optionNumber.min < 0`).
     */
    sanitizeTyped(raw: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormNumberFormatService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicFormNumberFormatService>;
}
