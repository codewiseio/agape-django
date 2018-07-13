import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from '../services/authentication.service';
export declare class LoginComponent implements OnInit {
    service: AuthenticationService;
    snackBar: MatSnackBar;
    model: any;
    form: any;
    loading: boolean;
    formState: string;
    showPassword: boolean;
    constructor(service: AuthenticationService, snackBar: MatSnackBar);
    ngOnInit(): void;
    submit(): void;
}
