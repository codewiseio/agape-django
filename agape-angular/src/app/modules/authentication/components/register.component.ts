import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';



import { slideIn, slideOut, shrinkOut } from '../../../animations';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  templateUrl: './register.component.html',
  animations: [slideIn, slideOut, shrinkOut]
})
export class RegisterComponent implements OnInit {

    public model: any = {};
    public form: any;
    public showPassword: boolean;
    public loading: boolean = false;
    public formState: string = 'pending';

    public user: any;


    constructor(
        public service: AuthenticationService,
        public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl('', [ Validators.pattern(EMAIL_REGEX)]),
			password: new FormControl('', [ ]),
		});
	}

	/**
	 * Register a user
	 */
	submit() {
		this.loading = true;
		this.service.register(this.model)
			.then( 
			(response: any) => {
				this.formState = 'complete';

				// TODO: If account requires activation, display the "we just
				// sent you an email message."  If the account is already active
				// display a message and redirect the user to the "next" area

				// this.user = response.user;

				// // this.userState could be
				// 'account-active'
				// 'awaiting-activation'

				console.log('Created user ');
				console.log(response);
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

} // end class RegisterComponent


