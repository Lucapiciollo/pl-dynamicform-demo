/**
 * @format
 * @author luca.piciollo
 * @email lucapiciollo@gmail.com
 * @desc ColorComponent — selettore colore con supporto gradiente lineare.
 *       Il valore del FormControl è una stringa CSS:
 *         - colore solido: es. "#FF0000"
 *         - gradiente:     es. "linear-gradient(90deg, #FF0000, #0000FF)"
 */
import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
type ColorMode = 'solid' | 'gradient';
export declare class ColorComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    private cdr;
    panelRef: ElementRef<HTMLElement>;
    hostRef: ElementRef<HTMLElement>;
    isOpen: boolean;
    mode: ColorMode;
    /** Posizioni del pannello overlay rispetto al campo */
    overlayPositions: ConnectedPosition[];
    /** Colore solido corrente */
    solidColor: string;
    /** Colore 1 del gradiente */
    gradientColor1: string;
    /** Colore 2 del gradiente */
    gradientColor2: string;
    /** Angolo del gradiente in gradi */
    gradientAngle: number;
    constructor(injector: Injector, element: ElementRef, cdr: ChangeDetectorRef);
    get currentCssValue(): string;
    get previewStyle(): string;
    get gradientEnabled(): boolean;
    /** Larghezza del pannello overlay = larghezza del mat-form-field */
    get overlayWidth(): number;
    ngOnInit(): void;
    togglePanel(): void;
    closePanel(): void;
    onDocumentClick(event: MouseEvent): void;
    setMode(m: ColorMode): void;
    onSolidChange(color: string): void;
    onGradient1Change(color: string): void;
    onGradient2Change(color: string): void;
    onAngleChange(angle: number): void;
    resetValue(): void;
    private _apply;
    private _syncFromControlValue;
    private _toHex;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorComponent, "app-color", never, {}, {}, never, never, false, never>;
}
export {};
