/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-11-18 12:55:11
 * @modify date 2022-11-18 12:55:11
 * @desc [description]
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class NumberComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    /************************************************************************************************************************************************************************ */
    /************************************************************************************************************************************************************************ */
    constructor(injector: Injector, element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberComponent, "app-number", never, {}, {}, never, never, false, never>;
}
