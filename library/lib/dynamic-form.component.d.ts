/** @format */
import { EventEmitter, OnDestroy, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormControlStatus, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigForm, DynamicFormChangeEvent, DynamicFormLayout, FormAction, FormCompletionStats, TYPE_CONTROL_FORM } from './dynamic-form.interface';
import { FlatFieldRef } from './dynamic-form-introspection.util';
import { DynamicFormJsonSchema } from './models/dynamic-form-json-schema.model';
import * as i0 from "@angular/core";
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
export declare class DynamicFormComponent implements OnDestroy {
    private viewContainerRef;
    /** Configurazione interna del form, costruita da `setRuntimeConfig`. */
    _questions: ConfigForm;
    /**
     * Retrocompatibilità: vecchio input usato dal progetto.
     * Accetta la configurazione Angular runtime già pronta.
     */
    set questions(questions: ConfigForm);
    /**
     * Alias più chiaro per la configurazione Angular runtime.
     * Uso: <dynamic-form [config]="configAngular"></dynamic-form>
     */
    set config(config: ConfigForm);
    /**
     * Nuova modalità JSON puro.
     * Uso: <dynamic-form [json]="jsonSchema"></dynamic-form>
     */
    set json(schema: DynamicFormJsonSchema);
    onFormCreate: EventEmitter<FormGroup | FormArray>;
    onQuestionsCreate: EventEmitter<ConfigForm>;
    /**
     * Emesso ad ogni cambio valore di un qualsiasi campo (anche annidato).
     * Fornisce nome, valore nuovo/precedente, tipo e controllo del campo.
     */
    onChange: EventEmitter<DynamicFormChangeEvent>;
    /** Emesso ad ogni cambio valore, con il valore completo del form (`getValue()`). */
    valueChange: EventEmitter<any>;
    /** Emesso ad ogni cambio valore, con le statistiche di completamento aggiornate. */
    completionChange: EventEmitter<FormCompletionStats>;
    /** Emesso quando lo stato di validità del form cambia (`VALID` / `INVALID` / ...). */
    statusChange: EventEmitter<FormControlStatus>;
    private stepperService;
    private jsonMapper;
    /** Sottoscrizioni di wiring degli output, ripulite ad ogni ricompilazione. */
    private apiSubscriptions;
    /** Mappa nome campo -> riferimento appiattito (inclusi campi annidati). */
    private fieldMap;
    /** Ultimo valore noto per ogni campo, per fornire `previousValue` in `onChange`. */
    private previousValues;
    TYPE_CONTROL_FORM: typeof TYPE_CONTROL_FORM;
    formGroup: FormGroup | FormArray;
    /**
     * Modalità di visualizzazione dei gruppi.
     * - `'default'` — affiancati (comportamento originale)
     * - `'tabs'`    — ogni gruppo in un tab Material
     * - `'steps'`   — ogni gruppo in uno step Material Stepper
     */
    layout: DynamicFormLayout;
    /**
     * Solo per `layout='steps'`: attiva la modalità lineare del stepper.
     * In modalità lineare lo step successivo è raggiungibile solo se quello corrente è valido.
     */
    linear: boolean;
    /**
     * Solo per `layout='steps'`: orientamento del stepper.
     * - `'horizontal'` (default) — step affiancati in orizzontale
     * - `'vertical'`  — step impilati in verticale
     */
    stepperOrientation: 'horizontal' | 'vertical';
    constructor(viewContainerRef: ViewContainerRef);
    /**
     * Normalizza e memorizza la configurazione runtime, poi avvia l'inizializzazione.
     * Scartato se `config` è null/undefined (guard per evitare re-render inutili).
     */
    private setRuntimeConfig;
    /**
     * Trasforma la `ConfigForm` in un `FormGroup` o `FormArray` tramite `StepperService`.
     * - Se il form ha un solo gruppo produce un `FormGroup` piatto.
     * - Se ha più gruppi produce un `FormArray`.
     * Al termine emette `onFormCreate` e `onQuestionsCreate`.
     */
    compile(): void;
    /**
     * Punto di ingresso dell'inizializzazione: delega a `compile()`.
     * Separato per consentire override nelle sottoclassi o hook aggiuntivi in futuro.
     */
    initializeForm(): void;
    /**
     * Restituisce il `FormGroup` reattivo del gruppo all'indice dato.
     * Se il form ha un solo gruppo `formGroup` è già il `FormGroup` diretto;
     * se ha più gruppi `formGroup` è un `FormArray` e si accede all'elemento per indice.
     */
    getGroupForm(index: number): FormGroup | FormArray;
    /**
     * Restituisce `true` se il gruppo all'indice dato è invalido E
     * almeno un controllo al suo interno è stato toccato o modificato.
     * Usato per mostrare l'indicatore di errore su tab/step label.
     */
    isGroupInvalid(index: number): boolean;
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
    private wireConsumerApi;
    private isControlRequired;
    /** Restituisce il valore corrente dell'intero form (`{ ...campi }` o array di gruppi). */
    getValue(): any;
    /** Come `getValue()` ma include anche i campi disabilitati. */
    getRawValue(): any;
    /** Stato di validità globale del form (`'VALID'` / `'INVALID'` / `'PENDING'` / `'DISABLED'`). */
    getStatus(): FormControlStatus | null;
    /** `true` se l'intero form è valido. */
    isValid(): boolean;
    /** Statistiche di completamento correnti dell'intero form. */
    getCompletion(): FormCompletionStats;
    /**
     * Ri-registra le sottoscrizioni interne sui controlli del form.
     *
     * Da chiamare dopo aver aggiunto o rimosso campi a runtime (es. gruppi
     * annidati come gli indirizzi): ricostruisce la mappa dei campi includendo
     * quelli appena creati, così che gli output `onChange` / `valueChange` /
     * `completionChange` / `statusChange` continuino a riflettere l'intero form,
     * inclusi i controlli aggiunti dopo l'inizializzazione.
     */
    refreshControls(): void;
    /**
     * Applica parzialmente dei valori al form.
     * Accetta un oggetto `{ formName: value }` per i form a gruppo singolo,
     * oppure un array per i form multi-gruppo (`FormArray`).
     */
    patchValue(value: any): void;
    /** Reimposta il form (opzionalmente a un valore dato). */
    reset(value?: any): void;
    /**
     * Restituisce il controllo reattivo di un campo per nome, cercandolo anche
     * tra i gruppi annidati. `null` se non esiste.
     */
    getControl(formName: string): AbstractControl | null;
    /** Restituisce la configurazione (`FormAction`) di un campo per nome. */
    getFormAction(formName: string): FormAction | null;
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
    getField(formName: string): FlatFieldRef | null;
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
    setFieldOptions(formName: string, options: any): boolean;
    /**
     * Legge le opzioni correnti di un campo a opzioni. Gestisce sia il caso
     * `WritableSignal` (post-init) sia il valore grezzo.
     */
    getFieldOptions(formName: string): any;
    /** Valore corrente di un singolo campo per nome. */
    getFieldValue(formName: string): any;
    /** Imposta il valore di un singolo campo per nome. */
    setFieldValue(formName: string, value: any, options?: {
        emitEvent?: boolean;
    }): void;
    /** Elenco dei nomi di tutti i campi (inclusi gli annidati). */
    getFieldNames(): string[];
    /**
     * Observable dei cambi di valore di un singolo campo: utile per registrarsi
     * dall'esterno su un campo specifico. `null` se il campo non esiste.
     *
     * @example
     * ```ts
     * this.form.onFieldChange('email')?.subscribe(v => console.log(v));
     * ```
     */
    onFieldChange(formName: string): Observable<any> | null;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormComponent, "dynamic-form", never, { "questions": { "alias": "questions"; "required": false; }; "config": { "alias": "config"; "required": false; }; "json": { "alias": "json"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; "linear": { "alias": "linear"; "required": false; }; "stepperOrientation": { "alias": "stepperOrientation"; "required": false; }; }, { "onFormCreate": "onFormCreate"; "onQuestionsCreate": "onQuestionsCreate"; "onChange": "onChange"; "valueChange": "valueChange"; "completionChange": "completionChange"; "statusChange": "statusChange"; }, never, ["*"], false, never>;
}
