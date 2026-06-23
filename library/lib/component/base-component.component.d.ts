/**
 * @format
 */
import { DestroyRef, ElementRef, EventEmitter, Injector, Signal, ViewContainerRef, WritableSignal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Subscriber, Subscription } from 'rxjs';
import { IBaseComponent } from './base-component-interface';
import { ConfigForm, Form, FormAction, TypeComboOption, Utility } from '../dynamic-form.interface';
import * as i0 from "@angular/core";
export declare class BaseComponent implements IBaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    onCaptureCam: EventEmitter<File>;
    instance: EventEmitter<{
        instance: BaseComponent;
        name: string;
    }>;
    private obsQuestions;
    private obsAllGroup;
    initPagination: {
        count: number;
        page: number;
        totalCount?: number;
    };
    combotext: {
        maxElementShow: number;
    };
    mySignal: WritableSignal<{
        items: Array<any>;
        totalCount: number;
    } | null>;
    readonly onOptionSetted: Signal<any>;
    destroyRef: DestroyRef;
    getErrorForm: (formGroup: FormGroup, formName: string) => Array<string>;
    getErrorFormControl: (formControl: FormControl) => Array<string>;
    getErrorFormControlFromObj: (errors: Object) => Array<string>;
    control: {
        formAction: FormAction;
    };
    obs: Subscriber<Subscription>;
    setInitialOption: WritableSignal<TypeComboOption | {
        items: Array<any>;
        totalCount: number;
    } | null>;
    _autocomplete: MatAutocompleteTrigger;
    protected selectedItems: any[];
    _allGroup: ConfigForm;
    internalValue: any;
    utils: Utility;
    private readonly _completionSignal;
    private _completionSub;
    signalStoreBase: any;
    formActionIndex: number;
    formGroupIndex: number;
    /**
     * Questo è il gruppo corrente, cioè group.formGroup passato dal DynamicFormComponent.
     */
    group: Array<Form>;
    set allGroup(allGroup: ConfigForm);
    /**
     * ATTENZIONE:
     * Dal template attuale arriva direttamente `formAction`, non il wrapper `{ formAction }`.
     *
     * dynamic-form.component.html:
     * [question]="formAction"
     *
     * Però manteniamo anche compatibilità con eventuale `{ formAction }`.
     */
    set question(config: FormAction | Form);
    set signalStoreValue(value: any);
    constructor(injector: Injector, element: ElementRef);
    /***********************************************************************************************************************************
     * NORMALIZATION
     ***********************************************************************************************************************************/
    private normalizeQuestion;
    private prepareSignalsForOptionBasedControls;
    /***********************************************************************************************************************************
     * INIT
     ***********************************************************************************************************************************/
    ngOnInit(): void;
    ngOnDestroy(): void;
    /***********************************************************************************************************************************
     * SETUP
     ***********************************************************************************************************************************/
    private setupArrayStringSearchOptions;
    private setupComboPagination;
    private setupDisabledState;
    private overrideComboPaginateReset;
    private setupComboEffects;
    private applyCssClasses;
    private listenValueChanges;
    /***********************************************************************************************************************************
     * OPTION SETTER FOR ARRAYSTRING
     ***********************************************************************************************************************************/
    onSetOptionWithSearch: () => void;
    /***********************************************************************************************************************************
     * EMIT EVENTS
     ***********************************************************************************************************************************/
    private emitInitialize;
    callOnChange(prevValue: any, nextValue?: any): void;
    emitOpened(): void;
    emitClosed(): void;
    emitFocus(): void;
    emitBlur(): void;
    emitSearch(search: string): void;
    emitScrollEnd(paging?: {
        count: number;
        page: number;
        totalCount?: number;
    }): void;
    private getOptionSettedSignal;
    /***********************************************************************************************************************************
     * FILTER
     ***********************************************************************************************************************************/
    _filter(value?: string): any;
    /***********************************************************************************************************************************
     * DYNAMIC COMPONENTS
     ***********************************************************************************************************************************/
    container: ViewContainerRef;
    private componentRef;
    ngAfterViewInit(): void;
    createDynamicComponent(): void;
    destroyDynamicComponent(): void;
    /***********************************************************************************************************************************
     * UTILITY
     ***********************************************************************************************************************************/
    private readonly getActionByName;
    private readonly getFormByName;
    private readonly setDefaultOptions;
    private readonly getSelectedOptions;
    private readonly onSettedOptions;
    /***********************************************************************************************************************************
     * FORM COMPLETION
     ***********************************************************************************************************************************/
    private _SKIP_COMPLETION;
    private _getTrackableFormActions;
    private _isFieldFilled;
    private _computeGroupStats;
    private _computeCompletion;
    private _subscribeToCompletion;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseComponent, "ng-component", never, { "formActionIndex": { "alias": "formActionIndex"; "required": false; }; "formGroupIndex": { "alias": "formGroupIndex"; "required": false; }; "group": { "alias": "group"; "required": false; }; "allGroup": { "alias": "allGroup"; "required": false; }; "question": { "alias": "question"; "required": false; }; }, { "onCaptureCam": "onCaptureCam"; "instance": "instance"; }, never, never, false, never>;
}
