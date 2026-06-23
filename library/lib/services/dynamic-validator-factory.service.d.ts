import { ValidatorFn } from '@angular/forms';
import { DynamicJsonValidator } from '../models/dynamic-form-json-schema.model';
import * as i0 from "@angular/core";
/**
 * Factory per la creazione di `ValidatorFn` di Angular a partire da descrittori JSON.
 *
 * Consente di definire le validazioni direttamente nello schema JSON del form
 * senza dover scrivere codice Angular specifico.
 *
 * Tipi supportati: `required`, `requiredTrue`, `email`, `min`, `max`,
 * `minLength`, `maxLength`, `pattern`, `nullValidator`.
 */
export declare class DynamicValidatorFactoryService {
    /**
     * Converte un array di descrittori `DynamicJsonValidator` in un array di `ValidatorFn`.
     *
     * I descrittori non riconosciuti vengono mappati a `Validators.nullValidator`
     * per evitare eccezioni runtime.
     *
     * @param validators - Array di descrittori di validazione provenienti dallo schema JSON.
     * @returns Array di `ValidatorFn` pronti per essere passati a un `FormControl`.
     */
    create(validators?: DynamicJsonValidator[]): ValidatorFn[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicValidatorFactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicValidatorFactoryService>;
}
