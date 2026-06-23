/**
 * @format
 */
import { AfterViewInit, ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class FileComponent extends BaseComponent implements AfterViewInit {
    protected injector: Injector;
    protected element: ElementRef;
    fileInput: ElementRef<HTMLInputElement>;
    constructor(injector: Injector, element: ElementRef);
    ngAfterViewInit(): void;
    getFileLabel(): string;
    onFileChange(event: Event): void;
    clearFile(input: HTMLInputElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileComponent, "app-file", never, {}, {}, never, never, false, never>;
}
