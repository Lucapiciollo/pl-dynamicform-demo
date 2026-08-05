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
    /**
     * L'input di visualizzazione (readonly, [value]="getFileLabel()") non è collegato
     * al form control reale tramite [formControl]/ngControl, quindi MatFormField non può
     * rilevare automaticamente Validators.required e non mostra mai l'asterisco (bug:
     * allegati obbligatori senza asterisco nelle modali). Esponiamo lo stato required
     * qui e lo leghiamo con [required] sull'input, così MatFormField mostra il marker
     * standard esattamente come per gli altri campi.
     */
    isRequired(): boolean;
    getFileLabel(): string;
    onFileChange(event: Event): void;
    clearFile(input: HTMLInputElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileComponent, "app-file", never, {}, {}, never, never, false, never>;
}
