import { OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
export declare class ModifyCredentialsComponent implements OnInit {
    service: AuthenticationService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    model: any;
    form: any;
    loading: boolean;
    formState: string;
    showPassword: boolean;
    constructor(service: AuthenticationService, dialog: MatDialog, snackBar: MatSnackBar);
    ngOnInit(): void;
    /**
     * ModifyCredentials for a user
     */
    submit(): void;
    confirmPassword(): void;
}
