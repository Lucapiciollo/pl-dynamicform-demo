/** @format */
import { AbstractControl } from '@angular/forms';
import { ConfigForm, FormAction, FormCompletionStats, TYPE_CONTROL_FORM } from './dynamic-form.interface';
/**
 * Riferimento "appiattito" a un singolo campo del form.
 *
 * Permette di accedere a un controllo per nome senza dover navigare manualmente
 * la struttura annidata della `ConfigForm`.
 */
export interface FlatFieldRef {
    /** Nome univoco del campo (`formAction.formName`). */
    formName: string;
    /** Controllo reattivo associato. */
    control: AbstractControl;
    /** Tipo del campo. */
    type: TYPE_CONTROL_FORM;
    /** Configurazione completa del campo. */
    formAction: FormAction;
    /** Indice del gruppo di primo livello che contiene il campo. */
    groupIndex: number;
    /** Percorso puntato dei nomi dei gruppi annidati (es. `parent.child`). */
    path: string;
}
/**
 * Appiattisce ricorsivamente tutti i campi della `ConfigForm` in una lista lineare,
 * includendo i campi annidati nei gruppi di tipo GROUP.
 *
 * @param allGroup - Configurazione del form.
 * @returns Lista di riferimenti `FlatFieldRef`, uno per ogni campo con un `formControl`.
 */
export declare function flattenFields(allGroup: ConfigForm | null | undefined): FlatFieldRef[];
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
export declare function computeFormCompletion(allGroup: ConfigForm | null | undefined): FormCompletionStats;
