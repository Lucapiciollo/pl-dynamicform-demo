/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-03-30 00:30:41
 * @modify date 2022-03-30 00:30:41
 * @desc [description]
 */
import { ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class InputTextComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    /************************************************************************************************************************************************************************ */
    inputs: ElementRef;
    /************************************************************************************************************************************************************************ */
    constructor(injector: Injector, element: ElementRef);
    /************************************************************************************************************************************************************************ */
    onChangeByMic(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTextComponent, "app-input-text", never, {}, {}, never, never, false, never>;
}
