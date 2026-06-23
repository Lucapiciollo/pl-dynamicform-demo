import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ConfigForm, FormAction } from '../dynamic-form.interface';
import * as i0 from "@angular/core";
/**
 * Classe astratta base per tutti i template di componenti del DynamicForm.
 *
 * Definisce il contratto minimo che ogni componente figlio deve soddisfare
 * esponendo i metodi di accesso al form control, alla configurazione del campo,
 * al controllo padre e alla lista completa dei gruppi.
 *
 * Il metodo `initialize()` viene chiamato da `LoadChildDirective` dopo la creazione
 * dinamica del componente per eseguire la logica di setup iniziale.
 */
export declare abstract class FormComponentTemplate {
    getFormControl: () => FormControl | FormGroup | FormArray;
    getFormConfig: () => FormAction;
    getFormParent: () => FormControl | FormGroup | FormArray;
    getQuestions: () => ConfigForm;
    initialize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormComponentTemplate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormComponentTemplate, "ng-component", never, {}, {}, never, never, false, never>;
}
