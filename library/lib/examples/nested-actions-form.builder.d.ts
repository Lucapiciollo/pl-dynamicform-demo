/** @format */
import { FormArray, FormGroup } from '@angular/forms';
import { ConfigForm } from '../dynamic-form.interface';
declare function firstGroup(control: any): FormGroup | null;
declare function groupAt(root: FormGroup | FormArray, path: string): FormGroup | null;
declare function controlAt(root: FormGroup | FormArray, path: string): any;
declare function collectFormErrors(control: any, parentKey?: string): Record<string, any>;
export declare function createNestedActionsFormBuilder(): ConfigForm;
export declare const nestedActionsFormHelpers: {
    firstGroup: typeof firstGroup;
    groupAt: typeof groupAt;
    controlAt: typeof controlAt;
    collectFormErrors: typeof collectFormErrors;
};
export {};
