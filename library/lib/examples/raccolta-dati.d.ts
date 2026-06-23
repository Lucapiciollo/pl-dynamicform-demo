/** @format */
export type DietJsonValidator = {
    type: 'required' | 'email' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern';
    value?: any;
    message?: string;
};
export type DietJsonOption = {
    id: any;
    description: string;
    disabled?: boolean;
};
export type DietJsonEvents = {
    initialize?: string;
    change?: string;
    focus?: string;
    blur?: string;
    opened?: string;
    closed?: string;
    search?: string;
    scrollEnd?: string;
};
export type DietJsonAction = {
    label: string;
    name?: string;
    icon?: string;
    cssClassButton?: string[];
    cssClassIcon?: string[];
    visible?: boolean;
    disabled?: boolean;
    event: string;
};
export type DietJsonNode = {
    id?: string;
    title?: string;
    label?: string;
    type: string;
    formName: string;
    placeholder?: string;
    value?: any;
    disabled?: boolean;
    readonly?: boolean;
    resetButton?: boolean;
    autocomplete?: boolean;
    multiple?: boolean;
    css?: {
        class?: string[];
        classRadio?: string[];
        iconCss?: string | string[];
        rows?: number;
        hide?: boolean;
    };
    optionNumber?: {
        min?: number;
        max?: number;
        step?: number;
    };
    optionInputText?: {
        maxlength?: number;
        password?: boolean;
    };
    options?: DietJsonOption[];
    validators?: DietJsonValidator[];
    events?: DietJsonEvents;
    actions?: DietJsonAction[];
    children?: DietJsonNode[];
};
export declare class DietNestedFormJson {
    static build(): DietJsonNode;
    private static registryGroup;
    private static personGroup;
    private static bodyGroup;
    private static preferencesGroup;
    private static weekGroup;
    private static dayGroup;
    private static mealField;
    private static summaryGroup;
    private static col4;
}
