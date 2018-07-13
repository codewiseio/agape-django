/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
var /** @type {?} */ EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, snackBar) {
        this.service = service;
        this.snackBar = snackBar;
        this.model = {};
        this.loading = false;
        this.formState = 'pending';
    }
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.pattern(EMAIL_REGEX)]),
            password: new FormControl('', []),
        });
    };
    /**
     * Register a user
     */
    /**
     * Register a user
     * @return {?}
     */
    RegisterComponent.prototype.submit = /**
     * Register a user
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.service.register(this.model)
            .then(function (response) {
            _this.formState = 'complete';
            // TODO: If account requires activation, display the "we just
            // sent you an email message."  If the account is already active
            // display a message and redirect the user to the "next" area
            // this.user = response.user;
            // // this.userState could be
            // 'account-active'
            // 'awaiting-activation'
            console.log('Created user ');
            console.log(response);
        }, function (response) {
            _this.loading = false;
            var /** @type {?} */ message = "";
            if (response.status == 0) {
                message = "Could not connect";
            }
            else {
                message = response.statusText;
            }
            _this.snackBar.open(message, null, {
                duration: 3000,
            });
        });
    };
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    template: "\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'pending'\"> \n\n\t<form class=\"register-form\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\n\t\t\n\t\t<mat-card-title>\n\t\t  <span>Sign Up</span>\n\t\t</mat-card-title>\n\n\t\t<mat-card-content class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Email address\" \n\t\t\t\t\t\tname=\"email\" formControlName=\"email\"\n\t\t\t\t\t\t[(ngModel)]=\"model.email\" \n\t\t\t\t\t\trequired uniqueEmail>\n\n\t\t\t\t\t<mat-error *ngIf=\"form.controls['email'].hasError('pattern')\">\n\t\t\t\t      Please enter a valid email address\n\t\t\t\t    </mat-error>\n\t\t\t\t    <mat-error *ngIf=\"form.controls['email'].hasError('required')\">\n\t\t\t\t      Please enter a valid email address\n\t\t\t\t    </mat-error>\n\t\t\t\t    <mat-error *ngIf=\"form.controls['email'].hasError('unique')\">\n\t\t\t\t     This email address is already registered\n\t\t\t\t    </mat-error>\n\t\t\t\t    \n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Password\"\n\t\t\t\t\t\tname=\"password\" type=\"password\" formControlName=\"password\"\n\t\t\t\t\t\t[type]=\"showPassword ? 'text' : 'password'\"\n\t\t\t\t\t\t[(ngModel)]=\"model.password\" \n\t\t\t\t\t\trequired>\n\t\t\t\t\t<mat-icon class=\"toggle-display-password\" (click)=\"showPassword=!showPassword\">\n\t\t\t\t\t\t{{showPassword ? 'visibility_off' : 'visibility'}}\n\t\t\t\t\t</mat-icon>\n\t\t\t\t    <mat-error *ngIf=\"form.controls['password'].hasError('required')\">\n\t\t\t\t     Password is required\n\t\t\t\t    </mat-error>\t\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div>\n\n\n\t\t</mat-card-content>\n\t\t<mat-card-actions class=\"container\">\n\n\t\t\t<div class=\"row flex-sm-row-reverse\">\n\t\t\t\t<div class=\"col-sm-6 text-right\">\n\t\t\t\t\t<button mat-button type=\"submit\" [disabled]=\"loading || !form.valid\">Get started</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 text-left\">\n\t\t\t\t\t<span><a routerLink=\"/login\" routerLinkActive=\"active\">I'm already a member</a></span>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</mat-card-actions>\n\n\t</form>\n\n\t<mat-progress-bar mode=\"indeterminate\" class=\"valign-bottom\" *ngIf=\"loading\"></mat-progress-bar>\n\n\n</mat-card>\n\n\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'complete'\"> \n\t\t<mat-card-title>\n\t\t  <span>Account Activation</span>\n\t\t</mat-card-title>\n\n\t\t<mat-card-content class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 spacious\">\n\t\t\t\t\tWe just sent you an email, click the link inside to activate your account.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card-content>\n</mat-card>\n\n",
                    animations: [slideIn, slideOut, shrinkOut]
                },] },
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: MatSnackBar }
    ]; };
    return RegisterComponent;
}());
export { RegisterComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHbkUscUJBQU0sV0FBVyxHQUFHLHNFQUFzRSxDQUFDOztJQXdHdkYsMkJBQ1csU0FDQTtRQURBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7cUJBWEMsRUFBRTt1QkFHSSxLQUFLO3lCQUNKLFNBQVM7S0FPQzs7OztJQUV4QyxvQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDOUQsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFHLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0tBQ0g7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrQ0FBTTs7OztJQUFOO1FBQUEsaUJBa0NDO1FBakNBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDL0IsSUFBSSxDQUNMLFVBQUMsUUFBYTtZQUNiLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDOzs7Ozs7OztZQVk1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEIsRUFDRCxVQUFDLFFBQWE7WUFDYixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixxQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxHQUFHLG1CQUFtQixDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDOUI7WUFFRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO2dCQUM3QixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUNKOztnQkF0SkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvMkZBdUZYO29CQUNDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO2lCQUMzQzs7OztnQkFyR1EscUJBQXFCO2dCQUVyQixXQUFXOzs0QkFKcEI7O1NBd0dhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cblxuXG5pbXBvcnQgeyBzbGlkZUluLCBzbGlkZU91dCwgc2hyaW5rT3V0IH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucyc7XG5cblxuY29uc3QgRU1BSUxfUkVHRVggPSAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmRcIiBbQHNsaWRlSW5dICpuZ0lmPVwiZm9ybVN0YXRlID09ICdwZW5kaW5nJ1wiPiBcblxuXHQ8Zm9ybSBjbGFzcz1cInJlZ2lzdGVyLWZvcm1cIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cblx0XHRcblx0XHQ8bWF0LWNhcmQtdGl0bGU+XG5cdFx0ICA8c3Bhbj5TaWduIFVwPC9zcGFuPlxuXHRcdDwvbWF0LWNhcmQtdGl0bGU+XG5cblx0XHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiBcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwibW9kZWwuZW1haWxcIiBcblx0XHRcdFx0XHRcdHJlcXVpcmVkIHVuaXF1ZUVtYWlsPlxuXG5cdFx0XHRcdFx0PG1hdC1lcnJvciAqbmdJZj1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaGFzRXJyb3IoJ3BhdHRlcm4nKVwiPlxuXHRcdFx0XHQgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXG5cdFx0XHRcdCAgICA8L21hdC1lcnJvcj5cblx0XHRcdFx0ICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydlbWFpbCddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG5cdFx0XHRcdCAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3Ncblx0XHRcdFx0ICAgIDwvbWF0LWVycm9yPlxuXHRcdFx0XHQgICAgPG1hdC1lcnJvciAqbmdJZj1cImZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaGFzRXJyb3IoJ3VuaXF1ZScpXCI+XG5cdFx0XHRcdCAgICAgVGhpcyBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFxuXHRcdFx0XHQgICAgPC9tYXQtZXJyb3I+XG5cdFx0XHRcdCAgICBcblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cdFx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFt0eXBlXT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJtb2RlbC5wYXNzd29yZFwiIFxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ+XG5cdFx0XHRcdFx0PG1hdC1pY29uIGNsYXNzPVwidG9nZ2xlLWRpc3BsYXktcGFzc3dvcmRcIiAoY2xpY2spPVwic2hvd1Bhc3N3b3JkPSFzaG93UGFzc3dvcmRcIj5cblx0XHRcdFx0XHRcdHt7c2hvd1Bhc3N3b3JkID8gJ3Zpc2liaWxpdHlfb2ZmJyA6ICd2aXNpYmlsaXR5J319XG5cdFx0XHRcdFx0PC9tYXQtaWNvbj5cblx0XHRcdFx0ICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG5cdFx0XHRcdCAgICAgUGFzc3dvcmQgaXMgcmVxdWlyZWRcblx0XHRcdFx0ICAgIDwvbWF0LWVycm9yPlx0XHRcdFx0XHRcdFxuXHRcdFx0XHQ8L21hdC1mb3JtLWZpZWxkPlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxuXG5cblx0XHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG5cdFx0PG1hdC1jYXJkLWFjdGlvbnMgY2xhc3M9XCJjb250YWluZXJcIj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBmbGV4LXNtLXJvdy1yZXZlcnNlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwibG9hZGluZyB8fCAhZm9ybS52YWxpZFwiPkdldCBzdGFydGVkPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0PHNwYW4+PGEgcm91dGVyTGluaz1cIi9sb2dpblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5JJ20gYWxyZWFkeSBhIG1lbWJlcjwvYT48L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbWF0LWNhcmQtYWN0aW9ucz5cblxuXHQ8L2Zvcm0+XG5cblx0PG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIiBjbGFzcz1cInZhbGlnbi1ib3R0b21cIiAqbmdJZj1cImxvYWRpbmdcIj48L21hdC1wcm9ncmVzcy1iYXI+XG5cblxuPC9tYXQtY2FyZD5cblxuXG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAnY29tcGxldGUnXCI+IFxuXHRcdDxtYXQtY2FyZC10aXRsZT5cblx0XHQgIDxzcGFuPkFjY291bnQgQWN0aXZhdGlvbjwvc3Bhbj5cblx0XHQ8L21hdC1jYXJkLXRpdGxlPlxuXG5cdFx0PG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdFdlIGp1c3Qgc2VudCB5b3UgYW4gZW1haWwsIGNsaWNrIHRoZSBsaW5rIGluc2lkZSB0byBhY3RpdmF0ZSB5b3VyIGFjY291bnQuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuYCxcbiAgYW5pbWF0aW9uczogW3NsaWRlSW4sIHNsaWRlT3V0LCBzaHJpbmtPdXRdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBtb2RlbDogYW55ID0ge307XG4gICAgcHVibGljIGZvcm06IGFueTtcbiAgICBwdWJsaWMgc2hvd1Bhc3N3b3JkOiBib29sZWFuO1xuICAgIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGZvcm1TdGF0ZTogc3RyaW5nID0gJ3BlbmRpbmcnO1xuXG4gICAgcHVibGljIHVzZXI6IGFueTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0ZW1haWw6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBWYWxpZGF0b3JzLnBhdHRlcm4oRU1BSUxfUkVHRVgpXSksXG5cdFx0XHRwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbIF0pLFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgdXNlclxuXHQgKi9cblx0c3VibWl0KCkge1xuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cdFx0dGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKHRoaXMubW9kZWwpXG5cdFx0XHQudGhlbiggXG5cdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLmZvcm1TdGF0ZSA9ICdjb21wbGV0ZSc7XG5cblx0XHRcdFx0Ly8gVE9ETzogSWYgYWNjb3VudCByZXF1aXJlcyBhY3RpdmF0aW9uLCBkaXNwbGF5IHRoZSBcIndlIGp1c3Rcblx0XHRcdFx0Ly8gc2VudCB5b3UgYW4gZW1haWwgbWVzc2FnZS5cIiAgSWYgdGhlIGFjY291bnQgaXMgYWxyZWFkeSBhY3RpdmVcblx0XHRcdFx0Ly8gZGlzcGxheSBhIG1lc3NhZ2UgYW5kIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBcIm5leHRcIiBhcmVhXG5cblx0XHRcdFx0Ly8gdGhpcy51c2VyID0gcmVzcG9uc2UudXNlcjtcblxuXHRcdFx0XHQvLyAvLyB0aGlzLnVzZXJTdGF0ZSBjb3VsZCBiZVxuXHRcdFx0XHQvLyAnYWNjb3VudC1hY3RpdmUnXG5cdFx0XHRcdC8vICdhd2FpdGluZy1hY3RpdmF0aW9uJ1xuXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdDcmVhdGVkIHVzZXIgJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0sXG5cdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSBcIlwiO1xuXHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSAwICkge1xuXHRcdFx0XHRcdG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCBjb25uZWN0XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgbnVsbCwge1xuXHRcdFx0ICAgICAgZHVyYXRpb246IDMwMDAsXG5cdFx0XHQgICAgfSk7XG5cdFx0XHR9KTtcblx0fVxuXG59IC8vIGVuZCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudFxuXG5cbiJdfQ==