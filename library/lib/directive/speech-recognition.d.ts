/** @format */
import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SpeechDirective {
    private element;
    private renderer;
    private recognition;
    e: any;
    constructor(element: ElementRef, renderer: Renderer2);
    start(): void;
    stop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpeechDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SpeechDirective, "[speech]", never, { "e": { "alias": "e"; "required": false; }; }, {}, never, never, false, never>;
}
