/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-29 19:47:50
 * @modify date 2022-03-29 19:47:50
 * @desc [description]
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class CheckboxComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    /************************************************************************************************************************************************************************ */
    constructor(injector: Injector, element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "app-checkbox", never, {}, {}, never, never, false, never>;
}
