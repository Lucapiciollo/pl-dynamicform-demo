/**
 * @format
 */
import { ChangeDetectorRef, ElementRef, Injector, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSelect, MatSelectChange } from "@angular/material/select";
import { Subject } from "rxjs";
import { BaseComponent } from "../base-component.component";
import * as i0 from "@angular/core";
export declare class ComboComponent extends BaseComponent implements OnInit {
    protected injector: Injector;
    protected element: ElementRef;
    private readonly cdr;
    readonly separatorKeysCodes: readonly [13, 188];
    private reachedEnd;
    private resetOption;
    private inputSubject;
    private effectStore;
    private scrollTop;
    private currentSearchValue;
    private removeScrollListener;
    private scrollBindRetry;
    private remoteRequestCounter;
    private lastLoadedItemsCount;
    onPanelCloseObs: Subject<void>;
    showOptionDefault: boolean;
    /**
     * Testo visuale del trigger.
     * Rimane solo come cache visuale, ma il valore vero è sempre nel FormControl reale.
     */
    readonly selectedLabelText: import("@angular/core").WritableSignal<string>;
    /**
     * Cache degli oggetti option completi selezionati.
     * Serve per combo remote/paginate: il FormControl conserva gli id,
     * ma quando cambi pagina/ricerca le option complete potrebbero non essere più
     * nella lista corrente.
     */
    private readonly selectedOptionsCache;
    private filterInput;
    signalStore: {
        totalOptions: import("@angular/core").Signal<import("../../dynamic-form.interface").TypeComboOption>;
        filteredOptions: import("@angular/core").Signal<import("../../dynamic-form.interface").TypeComboOption>;
        selectedOptions: import("@angular/core").Signal<import("../../dynamic-form.interface").TypeComboOption>;
        defaultOptions: import("@angular/core").Signal<import("../../dynamic-form.interface").TypeComboOption>;
        isLoading: import("@angular/core").Signal<boolean>;
        disabledOption: import("@angular/core").Signal<string[]>;
        getFilterOption: import("@angular/core").Signal<{
            id: any;
            description: string;
            img?: string;
            extra?: any;
            disabled?: boolean;
            default?: boolean;
            hide?: boolean;
            selected?: boolean;
            tag?: {
                bgTag: string;
                bgText: string;
                name: string;
            };
        }[]>;
        getIsLoading: import("@angular/core").Signal<boolean>;
        getSelectedOptions: import("@angular/core").Signal<{
            id: any;
            description: string;
            img?: string;
            extra?: any;
            disabled?: boolean;
            default?: boolean;
            hide?: boolean;
            selected?: boolean;
            tag?: {
                bgTag: string;
                bgText: string;
                name: string;
            };
        }[]>;
        getSelectedOptionsFromTotal: import("@angular/core").Signal<{
            id: any;
            description: string;
            img?: string;
            extra?: any;
            disabled?: boolean;
            default?: boolean;
            hide?: boolean;
            selected?: boolean;
            tag?: {
                bgTag: string;
                bgText: string;
                name: string;
            };
        }[]>;
        getTotalOptions: import("@angular/core").Signal<{
            id: any;
            description: string;
            img?: string;
            extra?: any;
            disabled?: boolean;
            default?: boolean;
            hide?: boolean;
            selected?: boolean;
            tag?: {
                bgTag: string;
                bgText: string;
                name: string;
            };
        }[]>;
        getDisabledOptions: import("@angular/core").Signal<string[]>;
        getDefaultOptions: import("@angular/core").Signal<{
            id: any;
            description: string;
            img?: string;
            extra?: any;
            disabled?: boolean;
            default?: boolean;
            hide?: boolean;
            selected?: boolean;
            tag?: {
                bgTag: string;
                bgText: string;
                name: string;
            };
        }[]>;
        getConcatStringDescription: import("@angular/core").Signal<string>;
        distinctArray: <T extends {
            id?: any;
        } = any>(array: T[] | null | undefined) => T[];
        setFilteredOptions: (newElement: Partial<import("../../dynamic-form.interface").TypeComboOption | {
            items: Array<any>;
            totalCount: number;
        }> | null | undefined, keyCombo?: {
            keyId: string | Array<string>;
            keyDescription: string | Array<string>;
        }, append?: boolean) => void;
        updateFilterOption: (options: import("../../dynamic-form.interface").TypeComboOption | null | undefined) => void;
        setSelectedOptions: (newElement: Partial<import("../../dynamic-form.interface").TypeComboOption> | null | undefined) => void;
        setTotalOptions: (newElement: Partial<import("../../dynamic-form.interface").TypeComboOption | {
            items: Array<any>;
            totalCount: number;
        }> | null | undefined, keyCombo?: {
            keyId: string | Array<string>;
            keyDescription: string | Array<string>;
        }) => void;
        setIsLoading: (value: boolean) => void;
        setDefaultOptions: (newElement: Partial<import("../../dynamic-form.interface").TypeComboOption | {
            items: Array<any>;
            totalCount: number;
        }> | null | undefined, keyCombo?: {
            keyId: string | Array<string>;
            keyDescription: string | Array<string>;
        }) => void;
        addDisabledOption: (value: Array<string> | null | undefined) => void;
        updateOptionSelected: (optionId: string, isSelected: boolean, isMultiple: boolean) => void;
    } & import("@ngrx/signals").WritableStateSource<{
        totalOptions: import("../../dynamic-form.interface").TypeComboOption;
        filteredOptions: import("../../dynamic-form.interface").TypeComboOption;
        selectedOptions: import("../../dynamic-form.interface").TypeComboOption;
        defaultOptions: import("../../dynamic-form.interface").TypeComboOption;
        isLoading: boolean;
        disabledOption: Array<string>;
    }>;
    loaderss: import("@angular/core").WritableSignal<boolean>;
    selectRef: MatSelect;
    /**
     * compareWith per mat-select.
     * Fondamentale per array multipli, oggetti e id numerici/stringa.
     */
    compareMatSelectValues: (a: any, b: any) => boolean;
    constructor(injector: Injector, element: ElementRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    private isReady;
    hasComboValue(): boolean;
    private refreshSelectedView;
    private getIdForm;
    private getOptionsValue;
    areJsonEqual(json1: any, json2: any): boolean;
    /***********************************************************************************************************************************
     * OPEN / CLOSE
     ***********************************************************************************************************************************/
    onOpenedChange(opened: boolean): void;
    onPanelOpen(): void;
    onPanelClose(): void;
    clearInput: () => void;
    /***********************************************************************************************************************************
     * SEARCH
     ***********************************************************************************************************************************/
    onInputChange(value: string): void;
    search(value: string | null): void;
    /***********************************************************************************************************************************
     * SCROLL PAGINATO
     ***********************************************************************************************************************************/
    addEventScroll(): void;
    private canLoadNextPage;
    private bindPanelScrollWithRetry;
    private getSelectPanelElement;
    private bindPanelScroll;
    private removePanelScrollListener;
    private handlePanelScroll;
    private loadNextPage;
    /***********************************************************************************************************************************
     * REMOTE DATA
     ***********************************************************************************************************************************/
    private getSearchKey;
    private getSearchValue;
    private getRemoteParams;
    private compactParams;
    private setInitialOptionWithIdForm;
    private callRemoteData;
    private resolveRemoteData;
    private handleRemoteDataResult;
    private applyRemoteDataResponse;
    private normalizeRemoteResponse;
    /***********************************************************************************************************************************
     * VISIBLE OPTIONS / MULTI LIST
     ***********************************************************************************************************************************/
    private isPaginatedCombo;
    private hasActiveSearch;
    private shouldExposeMissingSelectedOptions;
    getVisibleOptions(): any[];
    private getNaturalVisibleOptionSource;
    private getSelectedCachedOptionsMissingFrom;
    private cacheInitialOptions;
    private hydrateSelectedOptionsFromCurrentValue;
    private keepSelectedOptionsInStores;
    private cacheOption;
    private cacheOptions;
    private cacheSelectedVisibleOptions;
    private getSelectedCachedOptions;
    private distinctOptionsByValue;
    private toCompareKey;
    /***********************************************************************************************************************************
     * SELECTED LABEL
     ***********************************************************************************************************************************/
    getValueCombo(formControl: FormControl, smal: boolean): string;
    getSelectedLabel(small?: boolean): string;
    private findOptionDescriptionByValue;
    private optionEqualsValue;
    private getAllKnownOptionsSafe;
    /***********************************************************************************************************************************
     * OPTIONS HELPERS
     ***********************************************************************************************************************************/
    getOptionValue(option: any): any;
    getOptionDescription(option: any): string;
    private normalizeActionOptions;
    private normalizeOption;
    private resolveOptionKey;
    isCheckboxSelect(): boolean;
    isMultipleSelection(): boolean;
    isOptionDisabled(option: any): boolean;
    isOptionSelected(option: any): boolean;
    getResetValue(): any;
    private compareValue;
    private normalizeControlValueForMultiple;
    private mergeOptionsDistinct;
    private emitFormActionOnChange;
    /**
     * Restituisce l'oggetto opzione completo (con tutti i campi originali, incluso
     * `extra`) corrispondente al valore corrente del controllo. Per le selezioni
     * multiple restituisce l'array delle opzioni selezionate.
     */
    private resolveSelectedOptionsForChange;
    onMaterialSelectionChange(event: MatSelectChange): void;
    resetCombo(event?: Event): void;
    private focusFilterInputOnOpen;
    private focusFilterInputWithRetry;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboComponent, "app-combo", never, {}, {}, never, never, false, never>;
}
