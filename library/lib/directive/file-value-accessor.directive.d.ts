/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @create date 2022-11-18 12:54:14
 * @modify date 2022-11-18 12:54:14
 * @desc [description]
 */
import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FileValueAccessorDirective implements ControlValueAccessor {
    private element;
    private render;
    onChange: any;
    _handleInput(event: Event): void;
    /************************************************************************************************************************************************************************ */
    constructor(element: ElementRef, render: Renderer2);
    /************************************************************************************************************************************************************************ */
    registerOnTouched(fn: any): void;
    /************************************************************************************************************************************************************************ */
    setDisabledState?(isDisabled: boolean): void;
    /************************************************************************************************************************************************************************ */
    writeValue(value: any): void;
    /************************************************************************************************************************************************************************ */
    registerOnChange(fn: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileValueAccessorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FileValueAccessorDirective, "input[type=file]", never, {}, {}, never, never, false, never>;
}
