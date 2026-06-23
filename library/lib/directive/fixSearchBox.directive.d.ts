/** @format */
import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FixSearchBox implements AfterViewInit {
    private el;
    private renderer;
    appStickyOffset: string;
    cssClass: Array<string>;
    fixSearchBox: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FixSearchBox, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FixSearchBox, "[fixSearchBox]", never, { "appStickyOffset": { "alias": "appStickyOffset"; "required": false; }; "cssClass": { "alias": "cssClass"; "required": false; }; "fixSearchBox": { "alias": "fixSearchBox"; "required": false; }; }, {}, never, never, false, never>;
}
