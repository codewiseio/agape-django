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

    private model: any = {};
    private form: any;
    private showPassword: boolean;
    private loading: boolean = false;
    private formState: string = 'pending';

    constructor(
        private service: AuthenticationService,
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
			(user) => {
				this.formState = 'complete';
				console.log('Created user ');
				console.log(user);
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


