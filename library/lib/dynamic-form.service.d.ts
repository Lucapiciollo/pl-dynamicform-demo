import { FormArray } from '@angular/forms';
import { ConfigForm } from './dynamic-form.interface';
import * as i0 from "@angular/core";
/**
 * Servizio che converte una `ConfigForm` in una struttura `FormArray` di Angular Reactive Forms.
 *
 * Istanziato come provider locale del `DynamicFormComponent` (non singleton),
 * così ogni istanza del form ha il proprio stato di validazione isolato.
 */
export declare class StepperService {
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
    toFormGroup(questions: ConfigForm, formArray?: FormArray<any>): FormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepperService>;
}
