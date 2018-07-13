import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { User } from '../models/user';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  animations: [slideIn, slideOut, shrinkOut]
})
export class LoginComponent implements OnInit {

	public model: any = {};
    public form: any;
    // if form has been submitted and awaiting response
    public loading: boolean = false;
    public formState: string = 'pending';

    // display password unobscured
    public showPassword: boolean;


	constructor(
		public service: AuthenticationService,
		public snackBar: MatSnackBar ) { 

	}

	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl('', [ ]),
			password: new FormControl('', [ ]),
		});
	}

	submit() {
		this.loading = true;
		this.service.login(this.model.email, this.model.password)
			.then( 
				(user:any) => {
					this.loading = false;

					let message = "Login Successful";
					this.formState = 'complete';

					this.snackBar.open(message, null, {
				      duration: 2000,
				    });

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
