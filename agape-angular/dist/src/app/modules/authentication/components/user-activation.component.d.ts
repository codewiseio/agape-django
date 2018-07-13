import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
export declare class UserActivationComponent implements OnInit {
    route: ActivatedRoute;
    router: Router;
    service: AuthenticationService;
    snackBar: MatSnackBar;
    pageState: string;
    countDown: any;
    count: number;
    constructor(route: ActivatedRoute, router: Router, service: AuthenticationService, snackBar: MatSnackBar);
    ngOnInit(): void;
}
