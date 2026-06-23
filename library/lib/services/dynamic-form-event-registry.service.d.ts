import { DynamicActionEventHandler, DynamicFieldEventHandler } from '../models/dynamic-form-event.model';
import { DynamicFormRuntimeConfig } from '../providers/dynamic-form.providers';
import * as i0 from "@angular/core";
/**
 * Registro centralizzato degli handler di eventi e azioni del DynamicForm.
 *
 * Mantiene due Map interne:
 * - `events` — handler per i campi (onChange, onInitialize, remoteData, ecc.)
 * - `actions` — handler per i pulsanti di azione dei gruppi
 *
 * Gli handler vengono registrati all'avvio tramite `provideDynamicForm()` e possono
 * essere aggiunti dinamicamente via `registerEvents` / `registerActions`.
 * Il mapping tra nome (stringa) e handler permette di referenziare le funzioni
 * per nome all'interno degli schemi JSON.
 */
export declare class DynamicFormEventRegistryService {
    private readonly events;
    private readonly actions;
    constructor(config?: DynamicFormRuntimeConfig);
    /**
     * Registra un insieme di handler per i campi.
     * @param events - Mappa `{ nomeHandler: fn }` da aggiungere al registro.
     */
    registerEvents(events: Record<string, DynamicFieldEventHandler>): void;
    /**
     * Registra un insieme di handler per i pulsanti di azione.
     * @param actions - Mappa `{ nomeHandler: fn }` da aggiungere al registro.
     */
    registerActions(actions: Record<string, DynamicActionEventHandler>): void;
    /**
     * Restituisce l'handler di campo associato al nome dato, o `undefined` se assente.
     * @param name - Chiave usata nella configurazione del campo (es. `events.change`).
     */
    getEvent(name?: string): DynamicFieldEventHandler | undefined;
    /**
     * Restituisce l'handler di azione associato al nome dato, o `undefined` se assente.
     * @param name - Chiave usata nella configurazione dell'azione (es. `action.event`).
     */
    getAction(name?: string): DynamicActionEventHandler | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormEventRegistryService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicFormEventRegistryService>;
}
