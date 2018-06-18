import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';

import { slideIn, slideOut, shrinkOut } from '../../../animations';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  	templateUrl: './reset-password-request.component.html',
  	animations: [slideIn, slideOut, shrinkOut]
})
export class ResetPasswordRequestComponent implements OnInit {

    private model: any = {};
    private form: FormGroup;
    private formState: string = 'pending';
    private loading: boolean = false;


    constructor(
        private AuthenticationService: AuthenticationService,
		private snackBar: MatSnackBar) { }

	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl('', [ Validators.pattern(EMAIL_REGEX)])
		});
	}

	/**
	 * Submit the form
	 */
	submit() {
		this.loading = true;
		this.AuthenticationService.resetPasswordRequest(this.model.email)
			.toPromise()
			.then( 
				(user:any) => {
					this.loading = false;
					this.formState = 'complete';
				},
				(response: any) => {
					this.loading = false;
					let message = "";
					if ( response.status == 401 ) {
						message = "Incorrect password";
					}
					else if ( response.status == 0 ) {
						message = "Could not connect";
					}
					else {
						message = response.statusText;
					}

					this.snackBar.open(message, null, {
				      duration: 3000,
				    });
				}

			);
		}
}
