/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
const /** @type {?} */ EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export class RegisterComponent {
    /**
     * @param {?} service
     * @param {?} snackBar
     */
    constructor(service, snackBar) {
        this.service = service;
        this.snackBar = snackBar;
        this.model = {};
        this.loading = false;
        this.formState = 'pending';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
            password: new FormControl('', []),
        });
    }
    /**
     * Register a user
     * @return {?}
     */
    submit() {
        this.loading = true;
        this.service.register(this.model)
            .then((response) => {
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
        }, (response) => {
            this.loading = false;
            let /** @type {?} */ message = "";
            if (response.status == 0) {
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
RegisterComponent.decorators = [
    { type: Component, args: [{
                template: `
<mat-card class="sm-centered-card" [@slideIn] *ngIf="formState == 'pending'"> 

	<form class="register-form" (ngSubmit)="submit()" [formGroup]="form">
		
		<mat-card-title>
		  <span>Sign Up</span>
		</mat-card-title>

		<mat-card-content class="container">

			<div class="row">
				<mat-form-field class="col-12 spacious">
					<input matInput placeholder="Email address" 
						name="email" formControlName="email"
						[(ngModel)]="model.email" 
						required uniqueEmail>

					<mat-error *ngIf="form.controls['email'].hasError('pattern')">
				      Please enter a valid email address
				    </mat-error>
				    <mat-error *ngIf="form.controls['email'].hasError('required')">
				      Please enter a valid email address
				    </mat-error>
				    <mat-error *ngIf="form.controls['email'].hasError('unique')">
				     This email address is already registered
				    </mat-error>
				    
				</mat-form-field>
			</div>
			<div class="row">

				<mat-form-field class="col-12 spacious">
					<input matInput placeholder="Password"
						name="password" type="password" formControlName="password"
						[type]="showPassword ? 'text' : 'password'"
						[(ngModel)]="model.password" 
						required>
					<mat-icon class="toggle-display-password" (click)="showPassword=!showPassword">
						{{showPassword ? 'visibility_off' : 'visibility'}}
					</mat-icon>
				    <mat-error *ngIf="form.controls['password'].hasError('required')">
				     Password is required
				    </mat-error>						
				</mat-form-field>

			</div>
			<div class="clearfix"></div>


		</mat-card-content>
		<mat-card-actions class="container">

			<div class="row flex-sm-row-reverse">
				<div class="col-sm-6 text-right">
					<button mat-button type="submit" [disabled]="loading || !form.valid">Get started</button>
				</div>
				<div class="col-sm-6 text-left">
					<span><a routerLink="/login" routerLinkActive="active">I'm already a member</a></span>
				</div>

			</div>

		</mat-card-actions>

	</form>

	<mat-progress-bar mode="indeterminate" class="valign-bottom" *ngIf="loading"></mat-progress-bar>


</mat-card>


<mat-card class="sm-centered-card" [@slideIn] *ngIf="formState == 'complete'"> 
		<mat-card-title>
		  <span>Account Activation</span>
		</mat-card-title>

		<mat-card-content class="container">
			<div class="row">
				<div class="col-12 spacious">
					We just sent you an email, click the link inside to activate your account.
				</div>
			</div>
		</mat-card-content>
</mat-card>

`,
                animations: [slideIn, slideOut, shrinkOut]
            },] },
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: AuthenticationService },
    { type: MatSnackBar }
];
function RegisterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    RegisterComponent.prototype.model;
    /** @type {?} */
    RegisterComponent.prototype.form;
    /** @type {?} */
    RegisterComponent.prototype.showPassword;
    /** @type {?} */
    RegisterComponent.prototype.loading;
    /** @type {?} */
    RegisterComponent.prototype.formState;
    /** @type {?} */
    RegisterComponent.prototype.user;
    /** @type {?} */
    RegisterComponent.prototype.service;
    /** @type {?} */
    RegisterComponent.prototype.snackBar;
}
// end class RegisterComponent

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHbkUsdUJBQU0sV0FBVyxHQUFHLHNFQUFzRSxDQUFDO0FBNkYzRixNQUFNOzs7OztJQVdGLFlBQ1csU0FDQTtRQURBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7cUJBWEMsRUFBRTt1QkFHSSxLQUFLO3lCQUNKLFNBQVM7S0FPQzs7OztJQUV4QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzlELFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztLQUNIOzs7OztJQUtELE1BQU07UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQy9CLElBQUksQ0FDTCxDQUFDLFFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDOzs7Ozs7OztZQVk1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEIsRUFDRCxDQUFDLFFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLHFCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLEdBQUcsbUJBQW1CLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUM5QjtZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDO0tBQ0o7OztZQXRKRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1Rlg7Z0JBQ0MsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7YUFDM0M7Ozs7WUFyR1EscUJBQXFCO1lBRXJCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cblxuaW1wb3J0IHsgc2xpZGVJbiwgc2xpZGVPdXQsIHNocmlua091dCB9IGZyb20gJy4uLy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5cbmNvbnN0IEVNQUlMX1JFR0VYID0gL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAncGVuZGluZydcIj4gXG5cblx0PGZvcm0gY2xhc3M9XCJyZWdpc3Rlci1mb3JtXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG5cdFx0XG5cdFx0PG1hdC1jYXJkLXRpdGxlPlxuXHRcdCAgPHNwYW4+U2lnbiBVcDwvc3Bhbj5cblx0XHQ8L21hdC1jYXJkLXRpdGxlPlxuXG5cdFx0PG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXJcIj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHQ8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cIm1vZGVsLmVtYWlsXCIgXG5cdFx0XHRcdFx0XHRyZXF1aXJlZCB1bmlxdWVFbWFpbD5cblxuXHRcdFx0XHRcdDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddLmhhc0Vycm9yKCdwYXR0ZXJuJylcIj5cblx0XHRcdFx0ICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1xuXHRcdFx0XHQgICAgPC9tYXQtZXJyb3I+XG5cdFx0XHRcdCAgICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5jb250cm9sc1snZW1haWwnXS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuXHRcdFx0XHQgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXG5cdFx0XHRcdCAgICA8L21hdC1lcnJvcj5cblx0XHRcdFx0ICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddLmhhc0Vycm9yKCd1bmlxdWUnKVwiPlxuXHRcdFx0XHQgICAgIFRoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWRcblx0XHRcdFx0ICAgIDwvbWF0LWVycm9yPlxuXHRcdFx0XHQgICAgXG5cdFx0XHRcdDwvbWF0LWZvcm0tZmllbGQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuXHRcdFx0XHQ8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHQ8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRbdHlwZV09XCJzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwibW9kZWwucGFzc3dvcmRcIiBcblx0XHRcdFx0XHRcdHJlcXVpcmVkPlxuXHRcdFx0XHRcdDxtYXQtaWNvbiBjbGFzcz1cInRvZ2dsZS1kaXNwbGF5LXBhc3N3b3JkXCIgKGNsaWNrKT1cInNob3dQYXNzd29yZD0hc2hvd1Bhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHR7e3Nob3dQYXNzd29yZCA/ICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSd9fVxuXHRcdFx0XHRcdDwvbWF0LWljb24+XG5cdFx0XHRcdCAgICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuXHRcdFx0XHQgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkXG5cdFx0XHRcdCAgICA8L21hdC1lcnJvcj5cdFx0XHRcdFx0XHRcblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cblxuXG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuXHRcdDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwiY29udGFpbmVyXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgZmxleC1zbS1yb3ctcmV2ZXJzZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgIWZvcm0udmFsaWRcIj5HZXQgc3RhcnRlZDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS02IHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdDxzcGFuPjxhIHJvdXRlckxpbms9XCIvbG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+SSdtIGFscmVhZHkgYSBtZW1iZXI8L2E+PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L21hdC1jYXJkLWFjdGlvbnM+XG5cblx0PC9mb3JtPlxuXG5cdDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCIgY2xhc3M9XCJ2YWxpZ24tYm90dG9tXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuXG5cbjwvbWF0LWNhcmQ+XG5cblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0gKm5nSWY9XCJmb3JtU3RhdGUgPT0gJ2NvbXBsZXRlJ1wiPiBcblx0XHQ8bWF0LWNhcmQtdGl0bGU+XG5cdFx0ICA8c3Bhbj5BY2NvdW50IEFjdGl2YXRpb248L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHRXZSBqdXN0IHNlbnQgeW91IGFuIGVtYWlsLCBjbGljayB0aGUgbGluayBpbnNpZGUgdG8gYWN0aXZhdGUgeW91ciBhY2NvdW50LlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbmAsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUluLCBzbGlkZU91dCwgc2hyaW5rT3V0XVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbW9kZWw6IGFueSA9IHt9O1xuICAgIHB1YmxpYyBmb3JtOiBhbnk7XG4gICAgcHVibGljIHNob3dQYXNzd29yZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBmb3JtU3RhdGU6IHN0cmluZyA9ICdwZW5kaW5nJztcblxuICAgIHB1YmxpYyB1c2VyOiBhbnk7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woJycsIFsgVmFsaWRhdG9ycy5wYXR0ZXJuKEVNQUlMX1JFR0VYKV0pLFxuXHRcdFx0cGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBdKSxcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIHVzZXJcblx0ICovXG5cdHN1Ym1pdCgpIHtcblx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdHRoaXMuc2VydmljZS5yZWdpc3Rlcih0aGlzLm1vZGVsKVxuXHRcdFx0LnRoZW4oIFxuXHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5mb3JtU3RhdGUgPSAnY29tcGxldGUnO1xuXG5cdFx0XHRcdC8vIFRPRE86IElmIGFjY291bnQgcmVxdWlyZXMgYWN0aXZhdGlvbiwgZGlzcGxheSB0aGUgXCJ3ZSBqdXN0XG5cdFx0XHRcdC8vIHNlbnQgeW91IGFuIGVtYWlsIG1lc3NhZ2UuXCIgIElmIHRoZSBhY2NvdW50IGlzIGFscmVhZHkgYWN0aXZlXG5cdFx0XHRcdC8vIGRpc3BsYXkgYSBtZXNzYWdlIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgXCJuZXh0XCIgYXJlYVxuXG5cdFx0XHRcdC8vIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXI7XG5cblx0XHRcdFx0Ly8gLy8gdGhpcy51c2VyU3RhdGUgY291bGQgYmVcblx0XHRcdFx0Ly8gJ2FjY291bnQtYWN0aXZlJ1xuXHRcdFx0XHQvLyAnYXdhaXRpbmctYWN0aXZhdGlvbidcblxuXHRcdFx0XHRjb25zb2xlLmxvZygnQ3JlYXRlZCB1c2VyICcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9LFxuXHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdGxldCBtZXNzYWdlID0gXCJcIjtcblx0XHRcdFx0aWYgKCByZXNwb25zZS5zdGF0dXMgPT0gMCApIHtcblx0XHRcdFx0XHRtZXNzYWdlID0gXCJDb3VsZCBub3QgY29ubmVjdFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdG1lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIG51bGwsIHtcblx0XHRcdCAgICAgIGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0ICAgIH0pO1xuXHRcdFx0fSk7XG5cdH1cblxufSAvLyBlbmQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnRcblxuXG4iXX0=