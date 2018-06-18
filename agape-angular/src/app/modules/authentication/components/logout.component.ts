import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { User } from '../models/user';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: './logout.component.html',
  animations: [slideIn, slideOut, shrinkOut]
})
export class LogoutComponent implements OnInit {

    // if form has been submitted and awaiting response
    private loading: boolean = true;
    private formState: string = 'pending';

	constructor(
		private service: AuthenticationService,
		private snackBar: MatSnackBar ) { 		
	}

	ngOnInit() {

		console.log('******LOGGING OUT*******');
		console.log(this.service);

		if ( this.service.user ) {
			this.performLogout();
		}
	}

	performLogout() {
		this.service.logout()
			.then( 
				(user:any) => {
					this.loading = false;

					let message = "Signed out";
					this.formState = 'complete';

					this.snackBar.open(message, null, {
				      duration: 2000,
				    });

				},
				(response: any) => {
					this.loading = false;
					let message = "";
					if ( response.status == 401 ) {
						message = "You could not be signed out.";
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
