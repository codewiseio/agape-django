import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { trigger, state, style, transition, animate } from '@angular/core';
import { slideIn, shrinkOut } from '../../../animations';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './user-activation.component.html',
  animations: [ slideIn, shrinkOut ]
})
export class UserActivationComponent implements OnInit {

  private pageState: string = 'pending';
  private countDown: any;
  private count: number = 5;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private service: AuthenticationService,
    private snackBar: MatSnackBar ) { }


  ngOnInit() {
  	let key = this.route.snapshot.paramMap.get('key');

  	// activate the account
    this.service.activateAccount(key).toPromise().then(
    	() => {
    		this.pageState = 'success';
    	},

      (response) => {

        let message = "";
        if ( response.status == 409 ) {
          this.pageState = 'duplicate';
        }
        else {
          this.pageState = 'fail';
          message = response.statusText;
          this.snackBar.open(message, null, {
              duration: 3000,
            });
        }


      });
  }



}
