/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
import { AuthenticationService } from '../services/authentication.service';
export class LoginComponent {
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
            email: new FormControl('', []),
            password: new FormControl('', []),
        });
    }
    /**
     * @return {?}
     */
    submit() {
        this.loading = true;
        this.service.login(this.model.email, this.model.password)
            .then((user) => {
            this.loading = false;
            let /** @type {?} */ message = "Login Successful";
            this.formState = 'complete';
            this.snackBar.open(message, null, {
                duration: 2000,
            });
        }, (response) => {
            this.loading = false;
            let /** @type {?} */ message = "";
            if (response.status == 401) {
                message = "Incorrect password";
            }
            else if (response.status == 0) {
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
LoginComponent.decorators = [
    { type: Component, args: [{
                template: `
<!-- Display login form if not logged in -->
<mat-card class="sm-centered-card" [@slideIn] *ngIf="formState == 'pending' && ! service.user" > 
	<form class="login-form" (ngSubmit)="submit()" [formGroup]="form">

		<mat-card-title>
		  <span>Sign in</span>
		</mat-card-title>

		<mat-card-content class="container">

			<div class="row">
		
				<mat-form-field class="col-12 spacious">
					<input matInput placeholder="Email address" 
						name="email" formControlName="email"
						[(ngModel)]="model.email" 
						required >
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
				</mat-form-field>

			</div>

			<div class="clearfix"></div>
		</mat-card-content>
		<mat-card-actions class="container">
			<div class="row flex-sm-row-reverse">
				<div class="col-sm-6 text-right">
					<button mat-button type="submit" [disabled]="loading || !form.valid">Go</button>
				</div>
				<div class="col-sm-6 text-left">
					<ul class="plain-list">
						<li><a routerLink="/register" routerLinkActive="active">Create an account</a></li>
						<li><a routerLink="/reset-password" routerLinkActive="active">I forgot my password</a></li>
					</ul>
				</div>

			</div>
		</mat-card-actions>
	</form>
	<mat-progress-bar mode="indeterminate" class="valign-bottom" *ngIf="loading"></mat-progress-bar>

</mat-card>

<!-- Display a message on login successful -->
<mat-card class="sm-centered-card" [@slideIn] *ngIf="formState == 'complete'"> 
		<mat-card-title>
		  <span>Welcome Back!</span>
		</mat-card-title>

		<mat-card-content class="row">
				<div class="col-xs-12 spacious">
					You are now logged in.
				</div>
		</mat-card-content>
</mat-card>


<!-- Display a message if the user is already logged in -->
<mat-card class="sm-centered-card" [@slideIn] *ngIf="formState == 'pending' && service.user"> 
		<mat-card-title>
		  <span>Welcome Back!</span>
		</mat-card-title>

		<mat-card-content class="row">
				<div class="col-xs-12 spacious">
					You are currently logged in as {{service.user.email}}.
				</div>
		</mat-card-content>
	<mat-card-actions class="row">
		<div class="col-sm-12 text-center">
			<button mat-button>
				<a routerLink="/logout" routerLinkActive="active">Sign out</a>
			</button>
		</div>
	</mat-card-actions>
</mat-card>

`,
                animations: [slideIn, slideOut, shrinkOut]
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AuthenticationService },
    { type: MatSnackBar }
];
function LoginComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LoginComponent.prototype.model;
    /** @type {?} */
    LoginComponent.prototype.form;
    /** @type {?} */
    LoginComponent.prototype.loading;
    /** @type {?} */
    LoginComponent.prototype.formState;
    /** @type {?} */
    LoginComponent.prototype.showPassword;
    /** @type {?} */
    LoginComponent.prototype.service;
    /** @type {?} */
    LoginComponent.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQWdHM0UsTUFBTTs7Ozs7SUFZTCxZQUNRLFNBQ0E7UUFEQSxZQUFPLEdBQVAsT0FBTztRQUNQLGFBQVEsR0FBUixRQUFRO3FCQVpJLEVBQUU7dUJBR08sS0FBSzt5QkFDSixTQUFTO0tBVXRDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFHLENBQUM7WUFDL0IsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFHLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkQsSUFBSSxDQUNKLENBQUMsSUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUVyQixxQkFBSSxPQUFPLEdBQUcsa0JBQWtCLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFFNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtnQkFDN0IsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7U0FFTixFQUNELENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIscUJBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNMLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtnQkFDN0IsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7U0FDTixDQUlELENBQUM7S0FDSDs7O1lBM0pELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBGWDtnQkFDQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQzthQUMzQzs7OztZQS9GUSxxQkFBcUI7WUFKckIsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IHNsaWRlSW4sIHNsaWRlT3V0LCBzaHJpbmtPdXQgfSBmcm9tICcuLi8uLi8uLi9hbmltYXRpb25zJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbjwhLS0gRGlzcGxheSBsb2dpbiBmb3JtIGlmIG5vdCBsb2dnZWQgaW4gLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAncGVuZGluZycgJiYgISBzZXJ2aWNlLnVzZXJcIiA+IFxuXHQ8Zm9ybSBjbGFzcz1cImxvZ2luLWZvcm1cIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cblxuXHRcdDxtYXQtY2FyZC10aXRsZT5cblx0XHQgIDxzcGFuPlNpZ24gaW48L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcblx0XHRcdFx0PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiY29sLTEyIHNwYWNpb3VzXCI+XG5cdFx0XHRcdFx0PGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIFxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJtb2RlbC5lbWFpbFwiIFxuXHRcdFx0XHRcdFx0cmVxdWlyZWQgPlxuXHRcdFx0XHQ8L21hdC1mb3JtLWZpZWxkPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cblx0XHRcdFx0PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiY29sLTEyIHNwYWNpb3VzXCI+XG5cdFx0XHRcdFx0PGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0W3R5cGVdPVwic2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXG5cdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cIm1vZGVsLnBhc3N3b3JkXCIgXG5cdFx0XHRcdFx0XHRyZXF1aXJlZD5cblx0XHRcdFx0XHQ8bWF0LWljb24gY2xhc3M9XCJ0b2dnbGUtZGlzcGxheS1wYXNzd29yZFwiIChjbGljayk9XCJzaG93UGFzc3dvcmQ9IXNob3dQYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0e3tzaG93UGFzc3dvcmQgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknfX1cblx0XHRcdFx0XHQ8L21hdC1pY29uPlx0XHRcdFx0XHRcdFxuXHRcdFx0XHQ8L21hdC1mb3JtLWZpZWxkPlxuXG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuXHRcdDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93IGZsZXgtc20tcm93LXJldmVyc2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS02IHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCJsb2FkaW5nIHx8ICFmb3JtLnZhbGlkXCI+R288L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJwbGFpbi1saXN0XCI+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgcm91dGVyTGluaz1cIi9yZWdpc3RlclwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5DcmVhdGUgYW4gYWNjb3VudDwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxhIHJvdXRlckxpbms9XCIvcmVzZXQtcGFzc3dvcmRcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+SSBmb3Jnb3QgbXkgcGFzc3dvcmQ8L2E+PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1hY3Rpb25zPlxuXHQ8L2Zvcm0+XG5cdDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCIgY2xhc3M9XCJ2YWxpZ24tYm90dG9tXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuXG48L21hdC1jYXJkPlxuXG48IS0tIERpc3BsYXkgYSBtZXNzYWdlIG9uIGxvZ2luIHN1Y2Nlc3NmdWwgLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAnY29tcGxldGUnXCI+IFxuXHRcdDxtYXQtY2FyZC10aXRsZT5cblx0XHQgIDxzcGFuPldlbGNvbWUgQmFjayE8L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHRZb3UgYXJlIG5vdyBsb2dnZWQgaW4uXG5cdFx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cblxuPCEtLSBEaXNwbGF5IGEgbWVzc2FnZSBpZiB0aGUgdXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpbiAtLT5cbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmRcIiBbQHNsaWRlSW5dICpuZ0lmPVwiZm9ybVN0YXRlID09ICdwZW5kaW5nJyAmJiBzZXJ2aWNlLnVzZXJcIj4gXG5cdFx0PG1hdC1jYXJkLXRpdGxlPlxuXHRcdCAgPHNwYW4+V2VsY29tZSBCYWNrITwvc3Bhbj5cblx0XHQ8L21hdC1jYXJkLXRpdGxlPlxuXG5cdFx0PG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC14cy0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdFlvdSBhcmUgY3VycmVudGx5IGxvZ2dlZCBpbiBhcyB7e3NlcnZpY2UudXNlci5lbWFpbH19LlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG5cdDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwicm93XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uPlxuXHRcdFx0XHQ8YSByb3V0ZXJMaW5rPVwiL2xvZ291dFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5TaWduIG91dDwvYT5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L21hdC1jYXJkLWFjdGlvbnM+XG48L21hdC1jYXJkPlxuXG5gLFxuICBhbmltYXRpb25zOiBbc2xpZGVJbiwgc2xpZGVPdXQsIHNocmlua091dF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHB1YmxpYyBtb2RlbDogYW55ID0ge307XG4gICAgcHVibGljIGZvcm06IGFueTtcbiAgICAvLyBpZiBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZCBhbmQgYXdhaXRpbmcgcmVzcG9uc2VcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBmb3JtU3RhdGU6IHN0cmluZyA9ICdwZW5kaW5nJztcblxuICAgIC8vIGRpc3BsYXkgcGFzc3dvcmQgdW5vYnNjdXJlZFxuICAgIHB1YmxpYyBzaG93UGFzc3dvcmQ6IGJvb2xlYW47XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgc2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuXHRcdHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIgKSB7IFxuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woJycsIFsgXSksXG5cdFx0XHRwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbIF0pLFxuXHRcdH0pO1xuXHR9XG5cblx0c3VibWl0KCkge1xuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cdFx0dGhpcy5zZXJ2aWNlLmxvZ2luKHRoaXMubW9kZWwuZW1haWwsIHRoaXMubW9kZWwucGFzc3dvcmQpXG5cdFx0XHQudGhlbiggXG5cdFx0XHRcdCh1c2VyOmFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0bGV0IG1lc3NhZ2UgPSBcIkxvZ2luIFN1Y2Nlc3NmdWxcIjtcblx0XHRcdFx0XHR0aGlzLmZvcm1TdGF0ZSA9ICdjb21wbGV0ZSc7XG5cblx0XHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgbnVsbCwge1xuXHRcdFx0XHQgICAgICBkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0ICAgIH0pO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXNwb25zZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0bGV0IG1lc3NhZ2UgPSBcIlwiO1xuXHRcdFx0XHRcdGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDQwMSApIHtcblx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBcIkluY29ycmVjdCBwYXNzd29yZFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDAgKSB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gXCJDb3VsZCBub3QgY29ubmVjdFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdG1lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBudWxsLCB7XG5cdFx0XHRcdCAgICAgIGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHQgICAgfSk7XG5cdFx0XHRcdH1cblxuXG5cblx0XHRcdCk7XG5cdH1cblxufVxuIl19