/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { slideIn } from '../../../animations';
import { ConfirmPasswordDialogComponent } from './confirm-password-dialog.component';
const /** @type {?} */ EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export class ModifyCredentialsComponent {
    /**
     * @param {?} service
     * @param {?} dialog
     * @param {?} snackBar
     */
    constructor(service, dialog, snackBar) {
        this.service = service;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.model = {};
        this.loading = false;
        this.formState = 'pending';
        this.showPassword = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
            password: new FormControl('', []),
        });
        this.model.email = this.service.user.email;
    }
    /**
     * ModifyCredentials for a user
     * @return {?}
     */
    submit() {
        // display a popup and confirm the current password
        const /** @type {?} */ dlg = this.dialog.open(ConfirmPasswordDialogComponent, {
            width: "350px"
        });
        // after the dialog is closed, perform api call
        dlg.afterClosed().toPromise().then((password) => {
            this.loading = true;
            // password supplied, continue with api call
            if (password) {
                let /** @type {?} */ data = Object.assign({}, this.model);
                data.confirm_password = password;
                this.service.modifyCredentials(this.service.user.id, data)
                    .then(user => {
                    this.formState = 'complete';
                    this.loading = false;
                    this.model.password = "";
                    this.snackBar.open('Credentials saved', null, {
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
        });
    }
    /**
     * @return {?}
     */
    confirmPassword() {
    }
}
ModifyCredentialsComponent.decorators = [
    { type: Component, args: [{
                template: `
<mat-card class="sm-centered-card" [@slideIn]> 

	<form class="modify-credentials-form" (ngSubmit)="submit()" [formGroup]="form">
		
		<mat-card-title>
		  <span>Modify Credentials</span>
		</mat-card-title>

		<mat-card-content class="container">
			<div class="row">
				<mat-form-field class="col-12 spacious">
					<input matInput placeholder="Email address" 
						name="email" formControlName="email"
						[(ngModel)]="model.email" 
						required [uniqueEmail]="service.user.id">

					<mat-error *ngIf="form.controls['email'].hasError('pattern')">
				      Please enter a valid email address
				    </mat-error>
				    <mat-error *ngIf="form.controls['email'].hasError('required')">
				      Please enter a valid email address
				    </mat-error>
				    <mat-error *ngIf="form.controls['email'].hasError('unique')">
				     This email address is already registered by another user.
				    </mat-error>
				    
				</mat-form-field>

			</div>
			<div class="row">

				<mat-form-field class="col-12 spacious">
					<input matInput placeholder="Change password"
						name="password" type="password" formControlName="password"
						[type]="showPassword ? 'text' : 'password'"
						[(ngModel)]="model.password">
						<mat-hint align="end">Leave blank to keep same password</mat-hint>
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
			<div class="row">
				<div class="col-sm text-left">

				</div>
				<div class="col-sm text-right">
					<button mat-button type="submit" [disabled]="loading || !form.valid || !form.dirty">Save</button>
				</div>
			</div>
		</mat-card-actions>

	</form>

	<mat-progress-bar mode="indeterminate" class="valign-bottom" *ngIf="loading"></mat-progress-bar>


</mat-card>
`,
                animations: [slideIn]
            },] },
];
/** @nocollapse */
ModifyCredentialsComponent.ctorParameters = () => [
    { type: AuthenticationService },
    { type: MatDialog },
    { type: MatSnackBar }
];
function ModifyCredentialsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ModifyCredentialsComponent.prototype.model;
    /** @type {?} */
    ModifyCredentialsComponent.prototype.form;
    /** @type {?} */
    ModifyCredentialsComponent.prototype.loading;
    /** @type {?} */
    ModifyCredentialsComponent.prototype.formState;
    /** @type {?} */
    ModifyCredentialsComponent.prototype.showPassword;
    /** @type {?} */
    ModifyCredentialsComponent.prototype.service;
    /** @type {?} */
    ModifyCredentialsComponent.prototype.dialog;
    /** @type {?} */
    ModifyCredentialsComponent.prototype.snackBar;
}
// end class ModifyCredentialsComponent

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LWNyZWRlbnRpYWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9tb2RpZnktY3JlZGVudGlhbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3JGLHVCQUFNLFdBQVcsR0FBRyxzRUFBc0UsQ0FBQztBQXdFM0YsTUFBTTs7Ozs7O0lBUUYsWUFDVyxTQUNBLFFBQ0E7UUFGQSxZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO1FBQ04sYUFBUSxHQUFSLFFBQVE7cUJBVEMsRUFBRTt1QkFFSSxLQUFLO3lCQUNKLFNBQVM7NEJBQ0wsS0FBSztLQUtDOzs7O0lBRXhDLFFBQVE7UUFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDOUQsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFHLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzNDOzs7OztJQUtELE1BQU07O1FBR0wsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFO1lBQ3hELEtBQUssRUFBQyxPQUFPO1NBQ2QsQ0FBQyxDQUFDOztRQUdILEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7WUFHcEIsRUFBRSxDQUFDLENBQUUsUUFBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEIscUJBQUksSUFBSSxxQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7Z0JBRXBDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztxQkFDeEQsSUFBSSxDQUFFLElBQUksQ0FBQyxFQUFFO29CQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO29CQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUU7d0JBQ3pDLFFBQVEsRUFBRSxJQUFJO3FCQUNmLENBQUMsQ0FBQztpQkFDTixFQUNELENBQUMsUUFBYSxFQUFFLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixxQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNqQixFQUFFLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztxQkFDL0I7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO3FCQUM5QjtvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDOUI7b0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTt3QkFDN0IsUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFDO2lCQUNOLENBQ0QsQ0FBQzthQUNDO1NBRUQsQ0FDRCxDQUFDO0tBSU47Ozs7SUFHRCxlQUFlO0tBRWQ7OztZQXZKRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrRVg7Z0JBQ0MsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ3RCOzs7O1lBbkZRLHFCQUFxQjtZQUVyQixTQUFTO1lBQ1QsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IHNsaWRlSW4gfSBmcm9tICcuLi8uLi8uLi9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cbmNvbnN0IEVNQUlMX1JFR0VYID0gL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXT4gXG5cblx0PGZvcm0gY2xhc3M9XCJtb2RpZnktY3JlZGVudGlhbHMtZm9ybVwiIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuXHRcdFxuXHRcdDxtYXQtY2FyZC10aXRsZT5cblx0XHQgIDxzcGFuPk1vZGlmeSBDcmVkZW50aWFsczwvc3Bhbj5cblx0XHQ8L21hdC1jYXJkLXRpdGxlPlxuXG5cdFx0PG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiY29sLTEyIHNwYWNpb3VzXCI+XG5cdFx0XHRcdFx0PGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIFxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJtb2RlbC5lbWFpbFwiIFxuXHRcdFx0XHRcdFx0cmVxdWlyZWQgW3VuaXF1ZUVtYWlsXT1cInNlcnZpY2UudXNlci5pZFwiPlxuXG5cdFx0XHRcdFx0PG1hdC1lcnJvciAqbmdJZj1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaGFzRXJyb3IoJ3BhdHRlcm4nKVwiPlxuXHRcdFx0XHQgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXG5cdFx0XHRcdCAgICA8L21hdC1lcnJvcj5cblx0XHRcdFx0ICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG5cdFx0XHRcdCAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3Ncblx0XHRcdFx0ICAgIDwvbWF0LWVycm9yPlxuXHRcdFx0XHQgICAgPG1hdC1lcnJvciAqbmdJZj1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaGFzRXJyb3IoJ3VuaXF1ZScpXCI+XG5cdFx0XHRcdCAgICAgVGhpcyBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBieSBhbm90aGVyIHVzZXIuXG5cdFx0XHRcdCAgICA8L21hdC1lcnJvcj5cblx0XHRcdFx0ICAgIFxuXHRcdFx0XHQ8L21hdC1mb3JtLWZpZWxkPlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuXHRcdFx0XHQ8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHQ8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJDaGFuZ2UgcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0W3R5cGVdPVwic2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXG5cdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cIm1vZGVsLnBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHQ8bWF0LWhpbnQgYWxpZ249XCJlbmRcIj5MZWF2ZSBibGFuayB0byBrZWVwIHNhbWUgcGFzc3dvcmQ8L21hdC1oaW50PlxuXHRcdFx0XHRcdDxtYXQtaWNvbiBjbGFzcz1cInRvZ2dsZS1kaXNwbGF5LXBhc3N3b3JkXCIgKGNsaWNrKT1cInNob3dQYXNzd29yZD0hc2hvd1Bhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHR7e3Nob3dQYXNzd29yZCA/ICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSd9fVxuXHRcdFx0XHRcdDwvbWF0LWljb24+XG5cdFx0XHRcdCAgICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuXHRcdFx0XHQgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkXG5cdFx0XHRcdCAgICA8L21hdC1lcnJvcj5cdFx0XHRcdFx0XHRcblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG5cdFx0PG1hdC1jYXJkLWFjdGlvbnMgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbSB0ZXh0LWxlZnRcIj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbSB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwibG9hZGluZyB8fCAhZm9ybS52YWxpZCB8fCAhZm9ybS5kaXJ0eVwiPlNhdmU8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWFjdGlvbnM+XG5cblx0PC9mb3JtPlxuXG5cdDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCIgY2xhc3M9XCJ2YWxpZ24tYm90dG9tXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuXG5cbjwvbWF0LWNhcmQ+XG5gLFxuICBhbmltYXRpb25zOiBbc2xpZGVJbl1cbn0pXG5leHBvcnQgY2xhc3MgTW9kaWZ5Q3JlZGVudGlhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIG1vZGVsOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgZm9ybTogYW55O1xuICAgIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGZvcm1TdGF0ZTogc3RyaW5nID0gJ3BlbmRpbmcnO1xuICAgIHB1YmxpYyBzaG93UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0ZW1haWw6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBWYWxpZGF0b3JzLnBhdHRlcm4oRU1BSUxfUkVHRVgpXSksXG5cdFx0XHRwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbIF0pLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5tb2RlbC5lbWFpbCA9IHRoaXMuc2VydmljZS51c2VyLmVtYWlsO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vZGlmeUNyZWRlbnRpYWxzIGZvciBhIHVzZXJcblx0ICovXG5cdHN1Ym1pdCgpIHtcblxuXHRcdC8vIGRpc3BsYXkgYSBwb3B1cCBhbmQgY29uZmlybSB0aGUgY3VycmVudCBwYXNzd29yZFxuXHRcdGNvbnN0IGRsZyA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LCB7XG5cdCAgICAgIHdpZHRoOlwiMzUwcHhcIlxuXHQgICAgfSk7XG5cblx0ICAgIC8vIGFmdGVyIHRoZSBkaWFsb2cgaXMgY2xvc2VkLCBwZXJmb3JtIGFwaSBjYWxsXG5cdCAgICBkbGcuYWZ0ZXJDbG9zZWQoKS50b1Byb21pc2UoKS50aGVuKFxuXHQgICAgXHRcdChwYXNzd29yZCkgPT4gIHtcblx0ICAgIFx0XHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cblx0ICAgIFx0XHRcdC8vIHBhc3N3b3JkIHN1cHBsaWVkLCBjb250aW51ZSB3aXRoIGFwaSBjYWxsXG5cdCAgICBcdFx0XHRpZiAoIHBhc3N3b3JkICkge1xuXHRcdCAgICBcdFx0XHRsZXQgZGF0YSA9IHsuLi50aGlzLm1vZGVsfTtcblx0XHQgICAgXHRcdFx0ZGF0YS5jb25maXJtX3Bhc3N3b3JkID0gcGFzc3dvcmQ7XG5cblx0XHRcdFx0XHRcdHRoaXMuc2VydmljZS5tb2RpZnlDcmVkZW50aWFscyh0aGlzLnNlcnZpY2UudXNlci5pZCwgZGF0YSlcblx0XHRcdFx0XHRcdFx0LnRoZW4oIHVzZXIgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9ybVN0YXRlID0gJ2NvbXBsZXRlJztcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vZGVsLnBhc3N3b3JkID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4oJ0NyZWRlbnRpYWxzIHNhdmVkJywgbnVsbCwge1xuXHRcdFx0XHRcdFx0XHQgICAgICBkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdFx0ICAgIH0pO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdGxldCBtZXNzYWdlID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gXCJJbmNvcnJlY3QgcGFzc3dvcmRcIjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiQ291bGQgbm90IGNvbm5lY3RcIjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgbnVsbCwge1xuXHRcdFx0XHRcdFx0XHQgICAgICBkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdFx0ICAgIH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQpO1xuXHQgICAgXHRcdFx0fVxuXG5cdCAgICBcdFx0fVxuXHQgICAgXHQpO1xuXG5cblxuXHR9XG5cblxuXHRjb25maXJtUGFzc3dvcmQoKSB7XG5cblx0fVxuXG59IC8vIGVuZCBjbGFzcyBNb2RpZnlDcmVkZW50aWFsc0NvbXBvbmVudFxuXG5cbiJdfQ==