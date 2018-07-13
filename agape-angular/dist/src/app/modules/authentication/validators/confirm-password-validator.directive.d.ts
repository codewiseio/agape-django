import { Validator, AbstractControl } from '@angular/forms';
export declare class ConfirmPasswordValidatorDirective implements Validator {
    confirmPassword: string;
    confirmation: string;
    constructor(confirmPassword: string, confirmation: string);
    private readonly isConfirmation;
    validate(formControl: AbstractControl): {
        [key: string]: any;
    };
}
