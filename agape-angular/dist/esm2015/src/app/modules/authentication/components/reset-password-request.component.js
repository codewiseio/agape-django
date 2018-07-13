/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
const /** @type {?} */ EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export class ResetPasswordRequestComponent {
    /**
     * @param {?} AuthenticationService
     * @param {?} snackBar
     */
    constructor(AuthenticationService, snackBar) {
        this.AuthenticationService = AuthenticationService;
        this.snackBar = snackBar;
        this.model = {};
        this.formState = 'pending';
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.pattern(EMAIL_REGEX)])
        });
    }
    /**
     * Submit the form
     * @return {?}
     */
    submit() {
        this.loading = true;
        this.AuthenticationService.resetPasswordRequest(this.model.email)
            .toPromise()
            .then((user) => {
            this.loading = false;
            this.formState = 'complete';
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
ResetPasswordRequestComponent.decorators = [
    { type: Component, args: [{
                template: `

<mat-card class="sm-centered-card"  [@slideIn] *ngIf="formState == 'pending'"> 
	<form class="reset-password-form" (ngSubmit)="submit()" [formGroup]="form">

		<mat-card-title>
		  <span>Reset password</span>
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

			<div class="clearfix"></div>
		</mat-card-content>

		<mat-card-actions class="container">
			<div class="row flex-sm-row-reverse">
				<div class="col-sm-6 text-right">
					<button mat-button type="submit" [disabled]="loading || !form.valid">Reset my password</button>
				</div>
				<div class="col-sm-6 text-left">
					<ul class="plain-list">
						<li><a routerLink="/login" routerLinkActive="active">Sign in</a></li>
						<li><a routerLink="/register" routerLinkActive="active">Create an account</a></li>
						
					</ul>
				</div>
			</div>
		</mat-card-actions>

	</form>

	<mat-progress-bar mode="indeterminate" class="valign-bottom" *ngIf="loading"></mat-progress-bar>


</mat-card>

<mat-card class="sm-centered-card" [@slideIn]   *ngIf="formState == 'success'"> 

		<mat-card-content class="container">
				<div class="col-12 spacious">
					We just sent you an email, click the link inside to reset your password.
				</div>
		</mat-card-content>
</mat-card>

`,
                animations: [slideIn, slideOut, shrinkOut]
            },] },
];
/** @nocollapse */
ResetPasswordRequestComponent.ctorParameters = () => [
    { type: AuthenticationService },
    { type: MatSnackBar }
];
function ResetPasswordRequestComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.model;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.form;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.formState;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.loading;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.AuthenticationService;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2FwZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR25FLHVCQUFNLFdBQVcsR0FBRyxzRUFBc0UsQ0FBQztBQTREM0YsTUFBTTs7Ozs7SUFRRixZQUNXLHVCQUNOO1FBRE0sMEJBQXFCLEdBQXJCLHFCQUFxQjtRQUMzQixhQUFRLEdBQVIsUUFBUTtxQkFSTyxFQUFFO3lCQUVLLFNBQVM7dUJBQ1YsS0FBSztLQUtBOzs7O0lBRWxDLFFBQVE7UUFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDOUQsQ0FBQyxDQUFDO0tBQ0g7Ozs7O0lBS0QsTUFBTTtRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUMvRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQ0osQ0FBQyxJQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQzVCLEVBQ0QsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixxQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxHQUFHLG9CQUFvQixDQUFDO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDOUI7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO2dCQUM3QixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNOLENBRUQsQ0FBQztLQUNGOzs7WUExR0YsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxRFo7Z0JBQ0UsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7YUFDNUM7Ozs7WUFqRVEscUJBQXFCO1lBQ3JCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBzbGlkZUluLCBzbGlkZU91dCwgc2hyaW5rT3V0IH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucyc7XG5cblxuY29uc3QgRU1BSUxfUkVHRVggPSAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuXG5cbkBDb21wb25lbnQoe1xuICBcdHRlbXBsYXRlOiBgXG5cbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmRcIiAgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAncGVuZGluZydcIj4gXG5cdDxmb3JtIGNsYXNzPVwicmVzZXQtcGFzc3dvcmQtZm9ybVwiIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuXG5cdFx0PG1hdC1jYXJkLXRpdGxlPlxuXHRcdCAgPHNwYW4+UmVzZXQgcGFzc3dvcmQ8L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiBcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwibW9kZWwuZW1haWxcIiBcblx0XHRcdFx0XHRcdHJlcXVpcmVkID5cblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG5cblx0XHQ8bWF0LWNhcmQtYWN0aW9ucyBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBmbGV4LXNtLXJvdy1yZXZlcnNlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwibG9hZGluZyB8fCAhZm9ybS52YWxpZFwiPlJlc2V0IG15IHBhc3N3b3JkPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwicGxhaW4tbGlzdFwiPlxuXHRcdFx0XHRcdFx0PGxpPjxhIHJvdXRlckxpbms9XCIvbG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+U2lnbiBpbjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxhIHJvdXRlckxpbms9XCIvcmVnaXN0ZXJcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+Q3JlYXRlIGFuIGFjY291bnQ8L2E+PC9saT5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1hY3Rpb25zPlxuXG5cdDwvZm9ybT5cblxuXHQ8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiIGNsYXNzPVwidmFsaWduLWJvdHRvbVwiICpuZ0lmPVwibG9hZGluZ1wiPjwvbWF0LXByb2dyZXNzLWJhcj5cblxuXG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAgICpuZ0lmPVwiZm9ybVN0YXRlID09ICdzdWNjZXNzJ1wiPiBcblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHRXZSBqdXN0IHNlbnQgeW91IGFuIGVtYWlsLCBjbGljayB0aGUgbGluayBpbnNpZGUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cblx0XHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuYCxcbiAgXHRhbmltYXRpb25zOiBbc2xpZGVJbiwgc2xpZGVPdXQsIHNocmlua091dF1cbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIG1vZGVsOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBmb3JtU3RhdGU6IHN0cmluZyA9ICdwZW5kaW5nJztcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIEF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuXHRcdHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0ZW1haWw6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBWYWxpZGF0b3JzLnBhdHRlcm4oRU1BSUxfUkVHRVgpXSlcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdWJtaXQgdGhlIGZvcm1cblx0ICovXG5cdHN1Ym1pdCgpIHtcblx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdHRoaXMuQXV0aGVudGljYXRpb25TZXJ2aWNlLnJlc2V0UGFzc3dvcmRSZXF1ZXN0KHRoaXMubW9kZWwuZW1haWwpXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKCBcblx0XHRcdFx0KHVzZXI6YW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5mb3JtU3RhdGUgPSAnY29tcGxldGUnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdGxldCBtZXNzYWdlID0gXCJcIjtcblx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEgKSB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gXCJJbmNvcnJlY3QgcGFzc3dvcmRcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSAwICkge1xuXHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiQ291bGQgbm90IGNvbm5lY3RcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgbnVsbCwge1xuXHRcdFx0XHQgICAgICBkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0ICAgIH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdCk7XG5cdFx0fVxufVxuIl19