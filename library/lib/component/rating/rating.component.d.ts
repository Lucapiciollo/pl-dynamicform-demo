/** @format */
import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { BaseComponent } from '../base-component.component';
import * as i0 from "@angular/core";
export declare class RatingComponent extends BaseComponent {
    protected injector: Injector;
    protected element: ElementRef;
    private cdr;
    private _hoverValue;
    constructor(injector: Injector, element: ElementRef, cdr: ChangeDetectorRef);
    get maxStars(): number;
    get stars(): number[];
    get currentValue(): number;
    get hoverValue(): number;
    setHover(star: number): void;
    clearHover(): void;
    selectStar(star: number): void;
    isActive(star: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "app-rating", never, {}, {}, never, never, false, never>;
}
