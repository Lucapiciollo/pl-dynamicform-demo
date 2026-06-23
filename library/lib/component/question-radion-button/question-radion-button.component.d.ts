/**
 * @format
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class QuestionRadioButtonComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    constructor(injector: Injector, element: ElementRef);
    getOptions(): Array<any>;
    getOptionValue(option: any): any;
    getOptionDescription(option: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuestionRadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuestionRadioButtonComponent, "app-radiobutton", never, {}, {}, never, never, false, never>;
}
