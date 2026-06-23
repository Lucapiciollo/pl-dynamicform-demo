/** @format */
import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class CamScanDirective {
    private element;
    private renderer;
    private sanitizer;
    onCaptureCam: EventEmitter<FileList>;
    platform: Platform;
    fileName: string;
    private camera;
    private alertController;
    private options;
    private divRowELement;
    private divColELement;
    private buttonElement;
    private iELement;
    constructor(element: ElementRef, renderer: Renderer2, sanitizer: DomSanitizer);
    scanDocument: () => Promise<string>;
    ngAfterViewInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamScanDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CamScanDirective, "[camscan]", never, {}, { "onCaptureCam": "onCaptureCam"; }, never, never, false, never>;
}
