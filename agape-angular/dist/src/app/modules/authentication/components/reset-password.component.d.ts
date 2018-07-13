import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
export declare class ResetPasswordComponent implements OnInit {
    route: ActivatedRoute;
    router: Router;
    service: AuthenticationService;
    snackBar: MatSnackBar;
    model: any;
    errorMessage: string;
    form: FormGroup;
    formState: string;
    loading: boolean;
    showPassword: boolean;
    key: string;
    constructor(route: ActivatedRoute, router: Router, service: AuthenticationService, snackBar: MatSnackBar);
    ngOnInit(): void;
    /**
     * Register a user
     */
    submit(): void;
}
