import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from '../services/authentication.service';
export declare class LogoutComponent implements OnInit {
    service: AuthenticationService;
    snackBar: MatSnackBar;
    loading: boolean;
    formState: string;
    constructor(service: AuthenticationService, snackBar: MatSnackBar);
    ngOnInit(): void;
    performLogout(): void;
}
