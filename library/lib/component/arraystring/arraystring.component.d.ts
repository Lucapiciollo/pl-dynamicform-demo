/**
 * @format
 * @author luca.piciollo
 */
import { ElementRef, Injector } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';
import { ValidationErrors } from '@angular/forms';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export interface Fruit {
    name: string;
}
export declare class ArrayStringComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    getList: import("@angular/core").WritableSignal<string[]>;
    errorsInchipValue: import("@angular/core").WritableSignal<ValidationErrors>;
    readonly addOnBlur = true;
    readonly separatorKeysCodes: readonly [13, 188];
    readonly announcer: LiveAnnouncer;
    constructor(injector: Injector, element: ElementRef);
    ngOnInit(): void;
    add(event: MatChipInputEvent): void;
    remove(value: string): void;
    getCurrentValue(): string[];
    validateWithExtractedValidators(value: string[]): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayStringComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArrayStringComponent, "app-arraystring", never, {}, {}, never, never, false, never>;
}
