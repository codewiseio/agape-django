/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { slideIn, shrinkOut } from '../../../animations';
export class ResetPasswordComponent {
    /**
     * @param {?} route
     * @param {?} router
     * @param {?} service
     * @param {?} snackBar
     */
    constructor(route, router, service, snackBar) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.model = {};
        this.formState = 'initializing';
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.key = this.route.snapshot.paramMap.get('key');
        // validate key
        this.service.validateResetPasswordRequest(this.key)
            .toPromise()
            .then((response) => {
            this.formState = 'pending';
        }, (response) => {
            console.log(response);
            if (response.status == 401 || response.status == 404 || response.status == 410) {
                this.errorMessage = "This link has expired or is not valid.";
            }
            this.formState = 'error';
        });
        this.form = new FormGroup({
            password: new FormControl('', []),
        });
    }
    /**
     * Register a user
     * @return {?}
     */
    submit() {
        this.loading = true;
        this.service.resetPassword(this.key, this.model.password)
            .toPromise()
            .then(() => {
            this.loading = false;
            this.formState = 'success';
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
ResetPasswordComponent.decorators = [
    { type: Component, args: [{
                template: `

<mat-card class="sm-centered-card"  [@slideIn]  *ngIf="formState == 'pending'"> 
	<form class="reset-password-form" (ngSubmit)="submit()" [formGroup]="form">

		<mat-card-title>
		  <span>Choose a password</span>
		</mat-card-title>
		<mat-card-content class="container">
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
		</mat-card-content>
		<mat-card-actions class="container">
			<div class="col-sm-12 text-right">
				<button mat-button type="submit" [disabled]="loading || !form.valid">Save</button>
			</div>
		</mat-card-actions>
	</form>

</mat-card>

<mat-card class="sm-centered-card"  [@slideIn]   *ngIf="formState == 'success'"> 
	<form class="reset-password-form">

		<mat-card-title>
		  <span>Done</span>
		</mat-card-title>
		<mat-card-content class="container">
			<div class="row">
				Your password has been changed. Remember.
			</div>
		</mat-card-content>
		<mat-card-actions class="container">
			<div class="row">
				<div class="col-12 text-right">
					<button mat-button routerLink="/login" routerLinkActive="active"><a routerLink="/login" routerLinkActive="active">Login</a></button>
				</div>
			</div>
		</mat-card-actions>
	</form>

</mat-card>


<mat-card class="sm-centered-card" [@slideIn]    *ngIf="formState == 'error'"> 
	<mat-card-title>
	  <span>Reset Password</span>
	</mat-card-title>
	<mat-card-content class="container">
		<div class="row">
			<div class="col-12">{{this.errorMessage}}</div>
		</div>
	</mat-card-content>


</mat-card>
`,
                animations: [slideIn, shrinkOut]
            },] },
];
/** @nocollapse */
ResetPasswordComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: MatSnackBar }
];
function ResetPasswordComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ResetPasswordComponent.prototype.model;
    /** @type {?} */
    ResetPasswordComponent.prototype.errorMessage;
    /** @type {?} */
    ResetPasswordComponent.prototype.form;
    /** @type {?} */
    ResetPasswordComponent.prototype.formState;
    /** @type {?} */
    ResetPasswordComponent.prototype.loading;
    /** @type {?} */
    ResetPasswordComponent.prototype.showPassword;
    /** @type {?} */
    ResetPasswordComponent.prototype.key;
    /** @type {?} */
    ResetPasswordComponent.prototype.route;
    /** @type {?} */
    ResetPasswordComponent.prototype.router;
    /** @type {?} */
    ResetPasswordComponent.prototype.service;
    /** @type {?} */
    ResetPasswordComponent.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUF5RXpELE1BQU07Ozs7Ozs7SUFVSixZQUNRLE9BQ0EsUUFDQSxTQUNBO1FBSEEsVUFBSyxHQUFMLEtBQUs7UUFDTCxXQUFNLEdBQU4sTUFBTTtRQUNOLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7cUJBWk0sRUFBRTt5QkFHSyxjQUFjO3VCQUNmLEtBQUs7S0FRQzs7OztJQUduQyxRQUFRO1FBQ1AsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUduRCxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDakQsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUNKLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUUzQixFQUNELENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLFlBQVksR0FBRyx3Q0FBd0MsQ0FBQzthQUM3RDtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFHLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0tBQ0g7Ozs7O0lBS0QsTUFBTTtRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkQsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFFLEdBQUcsRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzNCLEVBQ0QsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixxQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxHQUFHLG1CQUFtQixDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDOUI7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO2dCQUM3QixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUdKOzs7WUExSUQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0VYO2dCQUNDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7YUFDakM7Ozs7WUEvRWdCLGNBQWM7WUFBdEIsTUFBTTtZQUdOLHFCQUFxQjtZQUVyQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBzbGlkZUluLCBzaHJpbmtPdXQgfSBmcm9tICcuLi8uLi8uLi9hbmltYXRpb25zJztcblxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiICBbQHNsaWRlSW5dICAqbmdJZj1cImZvcm1TdGF0ZSA9PSAncGVuZGluZydcIj4gXG5cdDxmb3JtIGNsYXNzPVwicmVzZXQtcGFzc3dvcmQtZm9ybVwiIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuXG5cdFx0PG1hdC1jYXJkLXRpdGxlPlxuXHRcdCAgPHNwYW4+Q2hvb3NlIGEgcGFzc3dvcmQ8L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblx0XHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHQ8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRbdHlwZV09XCJzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwibW9kZWwucGFzc3dvcmRcIiBcblx0XHRcdFx0XHRcdHJlcXVpcmVkPlxuXHRcdFx0XHRcdDxtYXQtaWNvbiBjbGFzcz1cInRvZ2dsZS1kaXNwbGF5LXBhc3N3b3JkXCIgKGNsaWNrKT1cInNob3dQYXNzd29yZD0hc2hvd1Bhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHR7e3Nob3dQYXNzd29yZCA/ICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSd9fVxuXHRcdFx0XHRcdDwvbWF0LWljb24+XHRcdFx0XHRcdFx0XG5cdFx0XHRcdDwvbWF0LWZvcm0tZmllbGQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG5cdFx0PG1hdC1jYXJkLWFjdGlvbnMgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHQ8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCJsb2FkaW5nIHx8ICFmb3JtLnZhbGlkXCI+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1hY3Rpb25zPlxuXHQ8L2Zvcm0+XG5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmRcIiAgW0BzbGlkZUluXSAgICpuZ0lmPVwiZm9ybVN0YXRlID09ICdzdWNjZXNzJ1wiPiBcblx0PGZvcm0gY2xhc3M9XCJyZXNldC1wYXNzd29yZC1mb3JtXCI+XG5cblx0XHQ8bWF0LWNhcmQtdGl0bGU+XG5cdFx0ICA8c3Bhbj5Eb25lPC9zcGFuPlxuXHRcdDwvbWF0LWNhcmQtdGl0bGU+XG5cdFx0PG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0WW91ciBwYXNzd29yZCBoYXMgYmVlbiBjaGFuZ2VkLiBSZW1lbWJlci5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtY29udGVudD5cblx0XHQ8bWF0LWNhcmQtYWN0aW9ucyBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG1hdC1idXR0b24gcm91dGVyTGluaz1cIi9sb2dpblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkxvZ2luPC9hPjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtYWN0aW9ucz5cblx0PC9mb3JtPlxuXG48L21hdC1jYXJkPlxuXG5cbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmRcIiBbQHNsaWRlSW5dICAgICpuZ0lmPVwiZm9ybVN0YXRlID09ICdlcnJvcidcIj4gXG5cdDxtYXQtY2FyZC10aXRsZT5cblx0ICA8c3Bhbj5SZXNldCBQYXNzd29yZDwvc3Bhbj5cblx0PC9tYXQtY2FyZC10aXRsZT5cblx0PG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyXCI+e3t0aGlzLmVycm9yTWVzc2FnZX19PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvbWF0LWNhcmQtY29udGVudD5cblxuXG48L21hdC1jYXJkPlxuYCxcbiBcdGFuaW1hdGlvbnM6IFtzbGlkZUluLCBzaHJpbmtPdXRdXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIG1vZGVsOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgICBwdWJsaWMgZm9ybVN0YXRlOiBzdHJpbmcgPSAnaW5pdGlhbGl6aW5nJztcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBzaG93UGFzc3dvcmQ6IGJvb2xlYW47XG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICBcdHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gIFx0cHVibGljIHJvdXRlcjogUm91dGVyLFxuICBcdHB1YmxpYyBzZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gIFx0cHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XG5cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmtleSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdrZXknKTtcblxuXHRcdC8vIHZhbGlkYXRlIGtleVxuXHRcdHRoaXMuc2VydmljZS52YWxpZGF0ZVJlc2V0UGFzc3dvcmRSZXF1ZXN0KHRoaXMua2V5KVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbiggXG5cdFx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZm9ybVN0YXRlID0gJ3BlbmRpbmcnO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEgfHwgcmVzcG9uc2Uuc3RhdHVzID09IDQwNCB8fCByZXNwb25zZS5zdGF0dXMgPT0gNDEwICkge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBcIlRoaXMgbGluayBoYXMgZXhwaXJlZCBvciBpcyBub3QgdmFsaWQuXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuZm9ybVN0YXRlID0gJ2Vycm9yJztcblx0XHRcdFx0fSk7XG5cblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFsgXSksXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSB1c2VyXG5cdCAqL1xuXHRzdWJtaXQoKSB7XG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHR0aGlzLnNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLmtleSwgdGhpcy5tb2RlbC5wYXNzd29yZClcblx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0LnRoZW4oICgpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuZm9ybVN0YXRlID0gJ3N1Y2Nlc3MnO1xuXHRcdFx0fSxcblx0XHRcdChyZXNwb25zZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRsZXQgbWVzc2FnZSA9IFwiXCI7XG5cdFx0XHRcdGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDAgKSB7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IFwiQ291bGQgbm90IGNvbm5lY3RcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBudWxsLCB7XG5cdFx0XHQgICAgICBkdXJhdGlvbjogMzAwMCxcblx0XHRcdCAgICB9KTtcblx0XHRcdH0pO1xuXG5cdFx0XG5cdH1cbn1cbiJdfQ==