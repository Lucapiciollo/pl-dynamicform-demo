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
export declare class TextareaComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    /************************************************************************************************************************************************************************ */
    constructor(injector: Injector, element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaComponent, "app-textarea", never, {}, {}, never, never, false, never>;
}
