import { Validator, FormControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
export declare class UniqueEmailValidatorDirective implements Validator {
    private AuthenticationService;
    constructor(AuthenticationService: AuthenticationService);
    userId: string;
    validate(formControl: FormControl): ValidationErrors;
}
