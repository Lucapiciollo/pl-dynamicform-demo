/** @format */
import { TypeComboOption } from '../../dynamic-form.interface';
type KeyCombo = {
    keyId: string | Array<string>;
    keyDescription: string | Array<string>;
};
declare function distinctArray<T extends {
    id?: any;
} = any>(array: T[] | null | undefined): T[];
export declare const Store: import("@angular/core").Type<{
    totalOptions: import("@angular/core").Signal<TypeComboOption>;
    filteredOptions: import("@angular/core").Signal<TypeComboOption>;
    selectedOptions: import("@angular/core").Signal<TypeComboOption>;
    defaultOptions: import("@angular/core").Signal<TypeComboOption>;
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
    distinctArray: typeof distinctArray;
    setFilteredOptions: (newElement: Partial<TypeComboOption | {
        items: Array<any>;
        totalCount: number;
    }> | null | undefined, keyCombo?: KeyCombo, append?: boolean) => void;
    updateFilterOption: (options: TypeComboOption | null | undefined) => void;
    setSelectedOptions: (newElement: Partial<TypeComboOption> | null | undefined) => void;
    setTotalOptions: (newElement: Partial<TypeComboOption | {
        items: Array<any>;
        totalCount: number;
    }> | null | undefined, keyCombo?: KeyCombo) => void;
    setIsLoading: (value: boolean) => void;
    setDefaultOptions: (newElement: Partial<TypeComboOption | {
        items: Array<any>;
        totalCount: number;
    }> | null | undefined, keyCombo?: KeyCombo) => void;
    addDisabledOption: (value: Array<string> | null | undefined) => void;
    updateOptionSelected: (optionId: string, isSelected: boolean, isMultiple: boolean) => void;
} & import("@ngrx/signals").WritableStateSource<{
    totalOptions: TypeComboOption;
    filteredOptions: TypeComboOption;
    selectedOptions: TypeComboOption;
    defaultOptions: TypeComboOption;
    isLoading: boolean;
    disabledOption: Array<string>;
}>>;
export {};
