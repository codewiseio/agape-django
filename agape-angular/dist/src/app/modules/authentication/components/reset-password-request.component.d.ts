import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
export declare class ResetPasswordRequestComponent implements OnInit {
    AuthenticationService: AuthenticationService;
    snackBar: MatSnackBar;
    model: any;
    form: FormGroup;
    formState: string;
    loading: boolean;
    constructor(AuthenticationService: AuthenticationService, snackBar: MatSnackBar);
    ngOnInit(): void;
    /**
     * Submit the form
     */
    submit(): void;
}
