import { ConfigForm } from '../dynamic-form.interface';
import { DynamicFormJsonSchema } from '../models/dynamic-form-json-schema.model';
import { DynamicFormEventRegistryService } from './dynamic-form-event-registry.service';
import { DynamicValidatorFactoryService } from './dynamic-validator-factory.service';
import * as i0 from "@angular/core";
/**
 * Servizio che traduce uno schema `DynamicFormJsonSchema` (JSON puro) nella
 * struttura `ConfigForm` usata a runtime dal `DynamicFormComponent`.
 *
 * Rappresenta il bridge tra la modalità dichiarativa JSON e l'API Angular
 * della libreria: crea i `FormControl` / `FormGroup`, istanzia i validator,
 * risolve gli handler di eventi tramite il registro e costruisce i Signal
 * per le opzioni e i dati remoti.
 */ export declare class DynamicFormJsonMapperService {
    private readonly validatorFactory;
    private readonly eventRegistry;
    constructor(validatorFactory: DynamicValidatorFactoryService, eventRegistry: DynamicFormEventRegistryService);
    /**
     * Punto di ingresso: converte l'intero schema in un array di `Group` (`ConfigForm`).
     * @param schema - Schema JSON del form.
     */
    toConfig(schema: DynamicFormJsonSchema): ConfigForm;
    /** Mappa un singolo gruppo JSON (`DynamicJsonGroup`) nella struttura `Group` runtime. */
    private mapGroup;
    /**
     * Mappa un singolo campo JSON nella struttura `Form` runtime.
     * Crea il `FormControl` (o `FormGroup` per DATARANGE), applica i validator
     * e popola tutte le proprietà dell'azione del campo.
     */
    private mapField;
    /** Mappa un'azione JSON di gruppo nel formato runtime `DynamicFormActionButton`. */
    private mapAction;
    /**
     * Converte il tipo del campo da stringa (chiave enum) o numero al valore enum `TYPE_CONTROL_FORM`.
     * Lancia un errore esplicito se il tipo non è riconosciuto.
     */
    private mapType;
    /** Crea un `WritableSignal` per le opzioni del campo se l'array è presente, altrimenti `undefined`. */
    private createOptionsSignal;
    /** Crea un `Signal` readonly per le opzioni disabilitate del campo. */
    private createReadonlyOptionsSignal;
    /**
     * Crea il wrapper per l'evento `onChange` del campo.
     * Risolve il nome dell'handler nel registro eventi e lo adatta alla firma attesa dal componente.
     */
    private wrapChangeEvent;
    /**
     * Crea il wrapper per l'evento `onInitialize` del campo.
     * Risolve il nome dell'handler nel registro eventi e lo adatta alla firma attesa dal componente.
     */
    private wrapInitializeEvent;
    /**
     * Crea il wrapper per gli eventi semplici `opened` / `closed` del campo.
     * Il tipo viene passato come `undefined` perché non rilevante in questi eventi.
     */
    private wrapSimpleEvent;
    /** Crea il wrapper per l'evento `action` di un campo (es. pulsante inline). */
    private wrapControlAction;
    /**
     * Crea il wrapper per il caricamento di dati remoti paginati (`remoteData`).
     * L'handler riceve `{ param, externalStore }` e aggiorna il Signal dello store
     * con i nuovi dati recuperati.
     */
    private wrapRemoteData;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormJsonMapperService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicFormJsonMapperService>;
}
