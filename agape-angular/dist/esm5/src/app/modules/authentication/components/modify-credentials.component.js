/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { slideIn } from '../../../animations';
import { ConfirmPasswordDialogComponent } from './confirm-password-dialog.component';
var /** @type {?} */ EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var ModifyCredentialsComponent = /** @class */ (function () {
    function ModifyCredentialsComponent(service, dialog, snackBar) {
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
    ModifyCredentialsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
            password: new FormControl('', []),
        });
        this.model.email = this.service.user.email;
    };
    /**
     * ModifyCredentials for a user
     */
    /**
     * ModifyCredentials for a user
     * @return {?}
     */
    ModifyCredentialsComponent.prototype.submit = /**
     * ModifyCredentials for a user
     * @return {?}
     */
    function () {
        var _this = this;
        // display a popup and confirm the current password
        var /** @type {?} */ dlg = this.dialog.open(ConfirmPasswordDialogComponent, {
            width: "350px"
        });
        // after the dialog is closed, perform api call
        dlg.afterClosed().toPromise().then(function (password) {
            _this.loading = true;
            // password supplied, continue with api call
            if (password) {
                var /** @type {?} */ data = tslib_1.__assign({}, _this.model);
                data.confirm_password = password;
                _this.service.modifyCredentials(_this.service.user.id, data)
                    .then(function (user) {
                    _this.formState = 'complete';
                    _this.loading = false;
                    _this.model.password = "";
                    _this.snackBar.open('Credentials saved', null, {
                        duration: 2000,
                    });
                }, function (response) {
                    _this.loading = false;
                    var /** @type {?} */ message = "";
                    if (response.status == 401) {
                        message = "Incorrect password";
                    }
                    else if (response.status == 0) {
                        message = "Could not connect";
                    }
                    else {
                        message = response.statusText;
                    }
                    _this.snackBar.open(message, null, {
                        duration: 3000,
                    });
                });
            }
        });
    };
    /**
     * @return {?}
     */
    ModifyCredentialsComponent.prototype.confirmPassword = /**
     * @return {?}
     */
    function () {
    };
    ModifyCredentialsComponent.decorators = [
        { type: Component, args: [{
                    template: "\n<mat-card class=\"sm-centered-card\" [@slideIn]> \n\n\t<form class=\"modify-credentials-form\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\n\t\t\n\t\t<mat-card-title>\n\t\t  <span>Modify Credentials</span>\n\t\t</mat-card-title>\n\n\t\t<mat-card-content class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Email address\" \n\t\t\t\t\t\tname=\"email\" formControlName=\"email\"\n\t\t\t\t\t\t[(ngModel)]=\"model.email\" \n\t\t\t\t\t\trequired [uniqueEmail]=\"service.user.id\">\n\n\t\t\t\t\t<mat-error *ngIf=\"form.controls['email'].hasError('pattern')\">\n\t\t\t\t      Please enter a valid email address\n\t\t\t\t    </mat-error>\n\t\t\t\t    <mat-error *ngIf=\"form.controls['email'].hasError('required')\">\n\t\t\t\t      Please enter a valid email address\n\t\t\t\t    </mat-error>\n\t\t\t\t    <mat-error *ngIf=\"form.controls['email'].hasError('unique')\">\n\t\t\t\t     This email address is already registered by another user.\n\t\t\t\t    </mat-error>\n\t\t\t\t    \n\t\t\t\t</mat-form-field>\n\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Change password\"\n\t\t\t\t\t\tname=\"password\" type=\"password\" formControlName=\"password\"\n\t\t\t\t\t\t[type]=\"showPassword ? 'text' : 'password'\"\n\t\t\t\t\t\t[(ngModel)]=\"model.password\">\n\t\t\t\t\t\t<mat-hint align=\"end\">Leave blank to keep same password</mat-hint>\n\t\t\t\t\t<mat-icon class=\"toggle-display-password\" (click)=\"showPassword=!showPassword\">\n\t\t\t\t\t\t{{showPassword ? 'visibility_off' : 'visibility'}}\n\t\t\t\t\t</mat-icon>\n\t\t\t\t    <mat-error *ngIf=\"form.controls['password'].hasError('required')\">\n\t\t\t\t     Password is required\n\t\t\t\t    </mat-error>\t\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</mat-card-content>\n\t\t<mat-card-actions class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm text-left\">\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm text-right\">\n\t\t\t\t\t<button mat-button type=\"submit\" [disabled]=\"loading || !form.valid || !form.dirty\">Save</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card-actions>\n\n\t</form>\n\n\t<mat-progress-bar mode=\"indeterminate\" class=\"valign-bottom\" *ngIf=\"loading\"></mat-progress-bar>\n\n\n</mat-card>\n",
                    animations: [slideIn]
                },] },
    ];
    /** @nocollapse */
    ModifyCredentialsComponent.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: MatDialog },
        { type: MatSnackBar }
    ]; };
    return ModifyCredentialsComponent;
}());
export { ModifyCredentialsComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LWNyZWRlbnRpYWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9tb2RpZnktY3JlZGVudGlhbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSWhELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdyRixxQkFBTSxXQUFXLEdBQUcsc0VBQXNFLENBQUM7O0lBZ0Z2RixvQ0FDVyxTQUNBLFFBQ0E7UUFGQSxZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO1FBQ04sYUFBUSxHQUFSLFFBQVE7cUJBVEMsRUFBRTt1QkFFSSxLQUFLO3lCQUNKLFNBQVM7NEJBQ0wsS0FBSztLQUtDOzs7O0lBRXhDLDZDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM5RCxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUcsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFFRDs7T0FFRzs7Ozs7SUFDSCwyQ0FBTTs7OztJQUFOO1FBQUEsaUJBbURDOztRQWhEQSxxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDeEQsS0FBSyxFQUFDLE9BQU87U0FDZCxDQUFDLENBQUM7O1FBR0gsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDaEMsVUFBQyxRQUFRO1lBQ1IsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1lBR3BCLEVBQUUsQ0FBQyxDQUFFLFFBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLHFCQUFJLElBQUksd0JBQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO2dCQUVwQyxLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7cUJBQ3hELElBQUksQ0FBRSxVQUFBLElBQUk7b0JBQ1YsS0FBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRTt3QkFDekMsUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFDO2lCQUNOLEVBQ0QsVUFBQyxRQUFhO29CQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixxQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNqQixFQUFFLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztxQkFDL0I7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO3FCQUM5QjtvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDOUI7b0JBRUQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTt3QkFDN0IsUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFDO2lCQUNOLENBQ0QsQ0FBQzthQUNDO1NBRUQsQ0FDRCxDQUFDO0tBSU47Ozs7SUFHRCxvREFBZTs7O0lBQWY7S0FFQzs7Z0JBdkpELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdzRFQWtFWDtvQkFDQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUM7aUJBQ3RCOzs7O2dCQW5GUSxxQkFBcUI7Z0JBRXJCLFNBQVM7Z0JBQ1QsV0FBVzs7cUNBTHBCOztTQXNGYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBzbGlkZUluIH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IENvbmZpcm1QYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcblxuXG5jb25zdCBFTUFJTF9SRUdFWCA9IC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC87XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0+IFxuXG5cdDxmb3JtIGNsYXNzPVwibW9kaWZ5LWNyZWRlbnRpYWxzLWZvcm1cIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cblx0XHRcblx0XHQ8bWF0LWNhcmQtdGl0bGU+XG5cdFx0ICA8c3Bhbj5Nb2RpZnkgQ3JlZGVudGlhbHM8L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiBcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwibW9kZWwuZW1haWxcIiBcblx0XHRcdFx0XHRcdHJlcXVpcmVkIFt1bmlxdWVFbWFpbF09XCJzZXJ2aWNlLnVzZXIuaWRcIj5cblxuXHRcdFx0XHRcdDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddLmhhc0Vycm9yKCdwYXR0ZXJuJylcIj5cblx0XHRcdFx0ICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1xuXHRcdFx0XHQgICAgPC9tYXQtZXJyb3I+XG5cdFx0XHRcdCAgICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5jb250cm9sc1snZW1haWwnXS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuXHRcdFx0XHQgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXG5cdFx0XHRcdCAgICA8L21hdC1lcnJvcj5cblx0XHRcdFx0ICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddLmhhc0Vycm9yKCd1bmlxdWUnKVwiPlxuXHRcdFx0XHQgICAgIFRoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgYnkgYW5vdGhlciB1c2VyLlxuXHRcdFx0XHQgICAgPC9tYXQtZXJyb3I+XG5cdFx0XHRcdCAgICBcblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cblx0XHRcdFx0PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiY29sLTEyIHNwYWNpb3VzXCI+XG5cdFx0XHRcdFx0PGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQ2hhbmdlIHBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFt0eXBlXT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJtb2RlbC5wYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0PG1hdC1oaW50IGFsaWduPVwiZW5kXCI+TGVhdmUgYmxhbmsgdG8ga2VlcCBzYW1lIHBhc3N3b3JkPC9tYXQtaGludD5cblx0XHRcdFx0XHQ8bWF0LWljb24gY2xhc3M9XCJ0b2dnbGUtZGlzcGxheS1wYXNzd29yZFwiIChjbGljayk9XCJzaG93UGFzc3dvcmQ9IXNob3dQYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0e3tzaG93UGFzc3dvcmQgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknfX1cblx0XHRcdFx0XHQ8L21hdC1pY29uPlxuXHRcdFx0XHQgICAgPG1hdC1lcnJvciAqbmdJZj1cImZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cblx0XHRcdFx0ICAgICBQYXNzd29yZCBpcyByZXF1aXJlZFxuXHRcdFx0XHQgICAgPC9tYXQtZXJyb3I+XHRcdFx0XHRcdFx0XG5cdFx0XHRcdDwvbWF0LWZvcm0tZmllbGQ+XG5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuXHRcdDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20gdGV4dC1sZWZ0XCI+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20gdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgIWZvcm0udmFsaWQgfHwgIWZvcm0uZGlydHlcIj5TYXZlPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1hY3Rpb25zPlxuXG5cdDwvZm9ybT5cblxuXHQ8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiIGNsYXNzPVwidmFsaWduLWJvdHRvbVwiICpuZ0lmPVwibG9hZGluZ1wiPjwvbWF0LXByb2dyZXNzLWJhcj5cblxuXG48L21hdC1jYXJkPlxuYCxcbiAgYW5pbWF0aW9uczogW3NsaWRlSW5dXG59KVxuZXhwb3J0IGNsYXNzIE1vZGlmeUNyZWRlbnRpYWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBtb2RlbDogYW55ID0ge307XG4gICAgcHVibGljIGZvcm06IGFueTtcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBmb3JtU3RhdGU6IHN0cmluZyA9ICdwZW5kaW5nJztcbiAgICBwdWJsaWMgc2hvd1Bhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woJycsIFsgVmFsaWRhdG9ycy5wYXR0ZXJuKEVNQUlMX1JFR0VYKV0pLFxuXHRcdFx0cGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBdKSxcblx0XHR9KTtcblxuXHRcdHRoaXMubW9kZWwuZW1haWwgPSB0aGlzLnNlcnZpY2UudXNlci5lbWFpbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb2RpZnlDcmVkZW50aWFscyBmb3IgYSB1c2VyXG5cdCAqL1xuXHRzdWJtaXQoKSB7XG5cblx0XHQvLyBkaXNwbGF5IGEgcG9wdXAgYW5kIGNvbmZpcm0gdGhlIGN1cnJlbnQgcGFzc3dvcmRcblx0XHRjb25zdCBkbGcgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1QYXNzd29yZERpYWxvZ0NvbXBvbmVudCwge1xuXHQgICAgICB3aWR0aDpcIjM1MHB4XCJcblx0ICAgIH0pO1xuXG5cdCAgICAvLyBhZnRlciB0aGUgZGlhbG9nIGlzIGNsb3NlZCwgcGVyZm9ybSBhcGkgY2FsbFxuXHQgICAgZGxnLmFmdGVyQ2xvc2VkKCkudG9Qcm9taXNlKCkudGhlbihcblx0ICAgIFx0XHQocGFzc3dvcmQpID0+ICB7XG5cdCAgICBcdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG5cdCAgICBcdFx0XHQvLyBwYXNzd29yZCBzdXBwbGllZCwgY29udGludWUgd2l0aCBhcGkgY2FsbFxuXHQgICAgXHRcdFx0aWYgKCBwYXNzd29yZCApIHtcblx0XHQgICAgXHRcdFx0bGV0IGRhdGEgPSB7Li4udGhpcy5tb2RlbH07XG5cdFx0ICAgIFx0XHRcdGRhdGEuY29uZmlybV9wYXNzd29yZCA9IHBhc3N3b3JkO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnNlcnZpY2UubW9kaWZ5Q3JlZGVudGlhbHModGhpcy5zZXJ2aWNlLnVzZXIuaWQsIGRhdGEpXG5cdFx0XHRcdFx0XHRcdC50aGVuKCB1c2VyID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcm1TdGF0ZSA9ICdjb21wbGV0ZSc7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tb2RlbC5wYXNzd29yZCA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKCdDcmVkZW50aWFscyBzYXZlZCcsIG51bGwsIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHRcdCAgICB9KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCByZXNwb25zZS5zdGF0dXMgPT0gNDAxICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGVsc2UgaWYgKCByZXNwb25zZS5zdGF0dXMgPT0gMCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCBjb25uZWN0XCI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIG51bGwsIHtcblx0XHRcdFx0XHRcdFx0ICAgICAgZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHRcdCAgICB9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KTtcblx0ICAgIFx0XHRcdH1cblxuXHQgICAgXHRcdH1cblx0ICAgIFx0KTtcblxuXG5cblx0fVxuXG5cblx0Y29uZmlybVBhc3N3b3JkKCkge1xuXG5cdH1cblxufSAvLyBlbmQgY2xhc3MgTW9kaWZ5Q3JlZGVudGlhbHNDb21wb25lbnRcblxuXG4iXX0=