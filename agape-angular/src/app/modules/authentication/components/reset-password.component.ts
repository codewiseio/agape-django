import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { trigger, state, style, transition, animate } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { slideIn, shrinkOut } from '../../../animations';


@Component({
  templateUrl: './reset-password.component.html',
 	animations: [slideIn, shrinkOut]
})
export class ResetPasswordComponent implements OnInit {

    private model: any = {};
    private errorMessage: string;
    private form: FormGroup;
    private formState: string = 'initializing';
    private loading: boolean = false;
    private showPassword: boolean;
    private key: string;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private service: AuthenticationService,
  	private snackBar: MatSnackBar) { }


	ngOnInit() {
		this.key = this.route.snapshot.paramMap.get('key');

		// validate key
		this.service.validateResetPasswordRequest(this.key)
			.toPromise()
			.then( 
				(response) => {
					this.formState = 'pending';

				},
				(response) => {
					console.log(response);
					if ( response.status == 401 || response.status == 404 || response.status == 410 ) {
						this.errorMessage = "This link has expired or is not valid.";
					}
					this.formState = 'error';
				});

		this.form = new FormGroup({
			password: new FormControl('', [ ]),
		});
	}

	/**
	 * Register a user
	 */
	submit() {
		this.loading = true;
		this.service.resetPassword(this.key, this.model.password)
			.toPromise()
			.then( () => {
				this.loading = false;
				this.formState = 'success';
			},
			(response: any) => {
				this.loading = false;
				let message = "";
				if ( response.status == 0 ) {
					message = "Could not connect";
				}
				else {
					message = response.statusText;
				}

				this.snackBar.open(message, null, {
			      duration: 3000,
			    });
			});

		
	}
}
