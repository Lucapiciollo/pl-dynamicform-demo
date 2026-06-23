/** @format */
import { FormControl, FormGroup } from '@angular/forms';
/************************************************************************************************************************************************************* */
/**
 * @author @l.piciollo
 * @param formGroup
 * @param formName
 * @returns Array<string>
 * si occupa di controllare in un formGroup, gli errori di validazione riscontrati per un determinato controller
 */
export declare function GetErrorForm(formGroup: FormGroup, formName: string): Array<string>;
/************************************************************************************************************************************************************* */
/**
 * @author @l.piciollo
 * @param formControl
 * @returns Array<string>
 * si occupa di controllare in un formControl, gli errori di validazione riscontrati
 */
export declare function GetErrorFormControl(formControl: FormControl): Array<string>;
/************************************************************************************************************************************************************* */
/**
 * @author @l.piciollo
 * @param formControl
 * @returns Array<string>
 * si occupa di controllare in un formControl, gli errori di validazione riscontrati
 */
export declare function GetErrorFormControlFromObj(objErrors: Object): Array<string>;
/************************************************************************************************************************************************************* */
