/** @format */
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LanguagePipe implements PipeTransform {
    transform(value: Array<{
        language?: string;
        value?: string;
    }>, languageCode: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LanguagePipe, "language", false>;
}
export declare class TimeToNumberPipe implements PipeTransform {
    transform(time: string): number | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeToNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TimeToNumberPipe, "timeToNumber", false>;
}
