/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
export class ConfirmPasswordDialogComponent {
    constructor() {
        this.model = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = new FormGroup({
            password: new FormControl('', []),
        });
    }
    /**
     * @return {?}
     */
    submit() {
    }
}
ConfirmPasswordDialogComponent.decorators = [
    { type: Component, args: [{
                template: `<form class="confirm-password-form" [formGroup]="form">
	<h2 mat-dialog-title>Confirm your password</h2>
	<mat-dialog-content class="row">
			<mat-form-field class="col-xs-12 spacious">
				<input matInput placeholder="Password"
					name="password" type="password" formControlName="password"
					[type]="showPassword ? 'text' : 'password'"
					[(ngModel)]="model.password" 
					required>
				<mat-icon class="toggle-display-password" (click)="showPassword=!showPassword">
					{{showPassword ? 'visibility_off' : 'visibility'}}
				</mat-icon>						
			</mat-form-field>
		
	</mat-dialog-content>

	<mat-dialog-actions>
	  <button mat-button mat-dialog-close type="button">Cancel</button>
	  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
	  <button mat-button [mat-dialog-close]="model.password" type="submit">Confirm</button>
	</mat-dialog-actions>
</form>
`
            },] },
];
/** @nocollapse */
ConfirmPasswordDialogComponent.ctorParameters = () => [];
function ConfirmPasswordDialogComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfirmPasswordDialogComponent.prototype.model;
    /** @type {?} */
    ConfirmPasswordDialogComponent.prototype.form;
    /** @type {?} */
    ConfirmPasswordDialogComponent.prototype.showPassword;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2NvbmZpcm0tcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBMkJuRSxNQUFNO0lBTUw7cUJBSm9CLEVBQUU7S0FJTDs7OztJQUVqQixRQUFRO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUcsQ0FBQztTQUNsQyxDQUFDLENBQUM7S0FDSDs7OztJQUVELE1BQU07S0FHTDs7O1lBMUNELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzQlg7YUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYDxmb3JtIGNsYXNzPVwiY29uZmlybS1wYXNzd29yZC1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG5cdDxoMiBtYXQtZGlhbG9nLXRpdGxlPkNvbmZpcm0geW91ciBwYXNzd29yZDwvaDI+XG5cdDxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC14cy0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHQ8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFt0eXBlXT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuXHRcdFx0XHRcdFsobmdNb2RlbCldPVwibW9kZWwucGFzc3dvcmRcIiBcblx0XHRcdFx0XHRyZXF1aXJlZD5cblx0XHRcdFx0PG1hdC1pY29uIGNsYXNzPVwidG9nZ2xlLWRpc3BsYXktcGFzc3dvcmRcIiAoY2xpY2spPVwic2hvd1Bhc3N3b3JkPSFzaG93UGFzc3dvcmRcIj5cblx0XHRcdFx0XHR7e3Nob3dQYXNzd29yZCA/ICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSd9fVxuXHRcdFx0XHQ8L21hdC1pY29uPlx0XHRcdFx0XHRcdFxuXHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblx0XHRcblx0PC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG5cblx0PG1hdC1kaWFsb2ctYWN0aW9ucz5cblx0ICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZSB0eXBlPVwiYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XG5cdCAgPCEtLSBUaGUgbWF0LWRpYWxvZy1jbG9zZSBkaXJlY3RpdmUgb3B0aW9uYWxseSBhY2NlcHRzIGEgdmFsdWUgYXMgYSByZXN1bHQgZm9yIHRoZSBkaWFsb2cuIC0tPlxuXHQgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJtb2RlbC5wYXNzd29yZFwiIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG5cdDwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuPC9mb3JtPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtUGFzc3dvcmREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHB1YmxpYyBtb2RlbDogYW55ID0ge307XG4gICAgcHVibGljIGZvcm06IGFueTtcbiAgICBwdWJsaWMgc2hvd1Bhc3N3b3JkOiBib29sZWFuOyAvLyBkaXNwbGF5IHBhc3N3b3JkIHVub2JzY3VyZWRcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0cGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBdKSxcblx0XHR9KTtcblx0fVxuXG5cdHN1Ym1pdCgpIHtcblxuXG5cdH1cblxufVxuIl19