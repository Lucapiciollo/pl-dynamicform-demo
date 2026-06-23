/**
 * Esempio d'uso completo:
 *
 * import { FormControl, Validators } from '@angular/forms';
 * import { TYPE_CONTROL_FORM, DynamicFormActionButton } from './dynamic-form.interface';
 * import { DynamicFormBuilder } from './dynamic-form.builder';
 *
 * // Azioni di gruppo (bottoni in fondo al gruppo)
 * const salvaAction: DynamicFormActionButton = {
 *   label: 'Salva',
 *   visible: true,
 *   action: (questions, idForm, formGroup) => {
 *     // logica di salvataggio
 *     console.log('Salva cliccato', formGroup.value);
 *   }
 * };
 *
 * // Azione a livello di campo (es. bottone custom)
 * const customButton = {
 *   formName: 'bottoneCustom',
 *   type: TYPE_CONTROL_FORM.BUTTON,
 *   title: 'Clicca qui',
 *   action: () => alert('Hai cliccato il bottone!'),
 * };
 *
 * // Usa il builder guidato
 * const config = DynamicFormBuilder.create()
 *   .addGroup('Dati Anagrafici', ['col-12'])
 *     .addForm({
 *       formName: 'nome',
 *       title: 'Nome',
 *       type: TYPE_CONTROL_FORM.TEXT,
 *       formControl: new FormControl('', Validators.required),
 *     })
 *     .addForm(customButton)
 *     .addActions([salvaAction])
 *   .addGroup('Note')
 *     .addForm({
 *       formName: 'note',
 *       title: 'Note',
 *       type: TYPE_CONTROL_FORM.TEXTAREA,
 *       formControl: new FormControl(''),
 *     })
 *   .build();
 *
 * // Passa config a <dynamic-form [config]="config">
 *
 * // Ricorda:
 * // - .addActions() aggiunge bottoni/azioni al gruppo (footer del gruppo)
 * // - .action, .onChange, .onInitialize ecc. sono proprietà del singolo campo (FormAction)
 */
import { ConfigForm, DynamicFormActionButton, FormAction } from './dynamic-form.interface';
/**
 * Chiavi (di tipo string) di un modello di form.
 * Quando `TModel` è `any` si riduce a `string` (nessun vincolo, retro-compatibile).
 */
export type DynamicFormModelKey<TModel> = Extract<keyof TModel, string>;
/**
 * `FormAction` tipizzato su un modello: la proprietà `formName` è vincolata alle
 * chiavi di `TModel`. Con `TModel = any` equivale a un normale `FormAction`.
 */
export type TypedFormAction<TModel> = FormAction & {
    formName?: DynamicFormModelKey<TModel>;
};
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
export declare class DynamicFormBuilder<TCtx = unknown, TModel = any> {
    private _context;
    private groups;
    private currentGroupIndex;
    private constructor();
    /** Crea un builder senza contesto (i callback factory non riceveranno un ctx tipizzato). */
    static create(): DynamicFormBuilder<unknown, any>;
    /** Crea un builder con contesto tipizzato. Il tipo viene inferito automaticamente. */
    static create<T>(context: T): DynamicFormBuilder<T, any>;
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
    static forModel<TModel extends Record<string, any>>(): {
        create(): DynamicFormBuilder<unknown, TModel>;
        create<TCtx>(context: TCtx): DynamicFormBuilder<TCtx, TModel>;
    };
    /**
     * Crea un nuovo gruppo e lo rende attivo per le addForm successive.
     * `title` può essere una stringa o una factory `(ctx) => string`.
     */
    addGroup(title: string | ((ctx: TCtx) => string), classList?: string[], id?: string): this;
    /**
     * Aggiunge un campo al gruppo attivo.
     * `formAction` può essere un oggetto `FormAction` o una factory `(ctx) => FormAction`.
     * Se il builder è tipizzato su un modello (`forModel<TModel>()`), `formName` è
     * vincolato alle chiavi di `TModel`.
     */
    addForm(formAction: TypedFormAction<TModel> | ((ctx: TCtx) => TypedFormAction<TModel>)): this;
    /**
     * Aggiunge azioni (bottoni) al gruppo attivo.
     * `actions` può essere un array o una factory `(ctx) => Array<DynamicFormActionButton>`.
     */
    addActions(actions: Array<DynamicFormActionButton> | ((ctx: TCtx) => Array<DynamicFormActionButton>)): this;
    /**
     * Restituisce il ConfigForm pronto da passare a <dynamic-form [config]="...">
     * Lancia se non ci sono gruppi o se qualche gruppo è vuoto.
     */
    build(): ConfigForm;
}
