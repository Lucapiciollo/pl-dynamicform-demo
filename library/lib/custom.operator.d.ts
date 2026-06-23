/** @format */
import { OperatorFunction, Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
/**
 * Operatore RxJS custom che accumula le emissioni della sorgente in un buffer
 * e le emette come array dopo che non arrivano nuovi valori per `maxAwaitTime` ms.
 *
 * Opzionalmente, emette solo se il buffer contiene almeno `minOccurrence` elementi.
 * Utile per ridurre il numero di chiamate HTTP quando arrivano rapidamente più eventi.
 *
 * @param project - Funzione di trasformazione applicata all'array accumulato.
 * @param maxAwaitTime - Tempo di debounce in ms (default: 0).
 * @param minOccurrence - N. minimo di elementi nel buffer per emettere (default: 0 = sempre).
 */
export declare function bufferWithMaxAwaitTime<T, R>(project: (value: Array<T>, length: number) => R, maxAwaitTime?: number, minOccurrence?: number | null): OperatorFunction<T, R>;
/**
 * Operatore RxJS che registra automaticamente la subscription nell'`obs` `Subscriber`
 * del componente, garantendo la corretta cancellazione quando il componente viene
 * distrutto senza richiedere l'uso esplicito di `takeUntil`.
 *
 * @param subscriber - Il `Subscriber` del componente a cui aggiungere la subscription.
 */
export declare function autoUnsubscribe<T>(subscriber: Subscriber<any>): (source: Observable<T>) => Observable<T>;
