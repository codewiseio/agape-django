import { OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
export declare class RegisterComponent implements OnInit {
    service: AuthenticationService;
    snackBar: MatSnackBar;
    model: any;
    form: any;
    showPassword: boolean;
    loading: boolean;
    formState: string;
    user: any;
    constructor(service: AuthenticationService, snackBar: MatSnackBar);
    ngOnInit(): void;
    /**
     * Register a user
     */
    submit(): void;
}
