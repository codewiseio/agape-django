/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
import { AuthenticationService } from '../services/authentication.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, snackBar) {
        this.service = service;
        this.snackBar = snackBar;
        this.model = {};
        this.loading = false;
        this.formState = 'pending';
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = new FormGroup({
            email: new FormControl('', []),
            password: new FormControl('', []),
        });
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.service.login(this.model.email, this.model.password)
            .then(function (user) {
            _this.loading = false;
            var /** @type {?} */ message = "Login Successful";
            _this.formState = 'complete';
            _this.snackBar.open(message, null, {
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
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    template: "\n<!-- Display login form if not logged in -->\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'pending' && ! service.user\" > \n\t<form class=\"login-form\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\n\n\t\t<mat-card-title>\n\t\t  <span>Sign in</span>\n\t\t</mat-card-title>\n\n\t\t<mat-card-content class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Email address\" \n\t\t\t\t\t\tname=\"email\" formControlName=\"email\"\n\t\t\t\t\t\t[(ngModel)]=\"model.email\" \n\t\t\t\t\t\trequired >\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Password\"\n\t\t\t\t\t\tname=\"password\" type=\"password\" formControlName=\"password\"\n\t\t\t\t\t\t[type]=\"showPassword ? 'text' : 'password'\"\n\t\t\t\t\t\t[(ngModel)]=\"model.password\" \n\t\t\t\t\t\trequired>\n\t\t\t\t\t<mat-icon class=\"toggle-display-password\" (click)=\"showPassword=!showPassword\">\n\t\t\t\t\t\t{{showPassword ? 'visibility_off' : 'visibility'}}\n\t\t\t\t\t</mat-icon>\t\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</mat-card-content>\n\t\t<mat-card-actions class=\"container\">\n\t\t\t<div class=\"row flex-sm-row-reverse\">\n\t\t\t\t<div class=\"col-sm-6 text-right\">\n\t\t\t\t\t<button mat-button type=\"submit\" [disabled]=\"loading || !form.valid\">Go</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 text-left\">\n\t\t\t\t\t<ul class=\"plain-list\">\n\t\t\t\t\t\t<li><a routerLink=\"/register\" routerLinkActive=\"active\">Create an account</a></li>\n\t\t\t\t\t\t<li><a routerLink=\"/reset-password\" routerLinkActive=\"active\">I forgot my password</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</mat-card-actions>\n\t</form>\n\t<mat-progress-bar mode=\"indeterminate\" class=\"valign-bottom\" *ngIf=\"loading\"></mat-progress-bar>\n\n</mat-card>\n\n<!-- Display a message on login successful -->\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'complete'\"> \n\t\t<mat-card-title>\n\t\t  <span>Welcome Back!</span>\n\t\t</mat-card-title>\n\n\t\t<mat-card-content class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 spacious\">\n\t\t\t\t\tYou are now logged in.\n\t\t\t\t</div>\n\t\t</mat-card-content>\n</mat-card>\n\n\n<!-- Display a message if the user is already logged in -->\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'pending' && service.user\"> \n\t\t<mat-card-title>\n\t\t  <span>Welcome Back!</span>\n\t\t</mat-card-title>\n\n\t\t<mat-card-content class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 spacious\">\n\t\t\t\t\tYou are currently logged in as {{service.user.email}}.\n\t\t\t\t</div>\n\t\t</mat-card-content>\n\t<mat-card-actions class=\"row\">\n\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t<button mat-button>\n\t\t\t\t<a routerLink=\"/logout\" routerLinkActive=\"active\">Sign out</a>\n\t\t\t</button>\n\t\t</div>\n\t</mat-card-actions>\n</mat-card>\n\n",
                    animations: [slideIn, slideOut, shrinkOut]
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: MatSnackBar }
    ]; };
    return LoginComponent;
}());
export { LoginComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUE0RzFFLHdCQUNRLFNBQ0E7UUFEQSxZQUFPLEdBQVAsT0FBTztRQUNQLGFBQVEsR0FBUixRQUFRO3FCQVpJLEVBQUU7dUJBR08sS0FBSzt5QkFDSixTQUFTO0tBVXRDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUcsQ0FBQztZQUMvQixRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUcsQ0FBQztTQUNsQyxDQUFDLENBQUM7S0FDSDs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUFBLGlCQW9DQztRQW5DQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2RCxJQUFJLENBQ0osVUFBQyxJQUFRO1lBQ1IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFFckIscUJBQUksT0FBTyxHQUFHLGtCQUFrQixDQUFDO1lBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBRTVCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBRU4sRUFDRCxVQUFDLFFBQWE7WUFDYixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixxQkFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxHQUFHLG9CQUFvQixDQUFDO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDOUI7WUFFRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO2dCQUM3QixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNOLENBSUQsQ0FBQztLQUNIOztnQkEzSkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzaUdBMEZYO29CQUNDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO2lCQUMzQzs7OztnQkEvRlEscUJBQXFCO2dCQUpyQixXQUFXOzt5QkFGcEI7O1NBc0dhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBzbGlkZUluLCBzbGlkZU91dCwgc2hyaW5rT3V0IH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG48IS0tIERpc3BsYXkgbG9naW4gZm9ybSBpZiBub3QgbG9nZ2VkIGluIC0tPlxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0gKm5nSWY9XCJmb3JtU3RhdGUgPT0gJ3BlbmRpbmcnICYmICEgc2VydmljZS51c2VyXCIgPiBcblx0PGZvcm0gY2xhc3M9XCJsb2dpbi1mb3JtXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG5cblx0XHQ8bWF0LWNhcmQtdGl0bGU+XG5cdFx0ICA8c3Bhbj5TaWduIGluPC9zcGFuPlxuXHRcdDwvbWF0LWNhcmQtdGl0bGU+XG5cblx0XHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XG5cdFx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiBcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwibW9kZWwuZW1haWxcIiBcblx0XHRcdFx0XHRcdHJlcXVpcmVkID5cblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cdFx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFt0eXBlXT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJtb2RlbC5wYXNzd29yZFwiIFxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ+XG5cdFx0XHRcdFx0PG1hdC1pY29uIGNsYXNzPVwidG9nZ2xlLWRpc3BsYXktcGFzc3dvcmRcIiAoY2xpY2spPVwic2hvd1Bhc3N3b3JkPSFzaG93UGFzc3dvcmRcIj5cblx0XHRcdFx0XHRcdHt7c2hvd1Bhc3N3b3JkID8gJ3Zpc2liaWxpdHlfb2ZmJyA6ICd2aXNpYmlsaXR5J319XG5cdFx0XHRcdFx0PC9tYXQtaWNvbj5cdFx0XHRcdFx0XHRcblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtY29udGVudD5cblx0XHQ8bWF0LWNhcmQtYWN0aW9ucyBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBmbGV4LXNtLXJvdy1yZXZlcnNlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwibG9hZGluZyB8fCAhZm9ybS52YWxpZFwiPkdvPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwicGxhaW4tbGlzdFwiPlxuXHRcdFx0XHRcdFx0PGxpPjxhIHJvdXRlckxpbms9XCIvcmVnaXN0ZXJcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+Q3JlYXRlIGFuIGFjY291bnQ8L2E+PC9saT5cblx0XHRcdFx0XHRcdDxsaT48YSByb3V0ZXJMaW5rPVwiL3Jlc2V0LXBhc3N3b3JkXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkkgZm9yZ290IG15IHBhc3N3b3JkPC9hPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtYWN0aW9ucz5cblx0PC9mb3JtPlxuXHQ8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiIGNsYXNzPVwidmFsaWduLWJvdHRvbVwiICpuZ0lmPVwibG9hZGluZ1wiPjwvbWF0LXByb2dyZXNzLWJhcj5cblxuPC9tYXQtY2FyZD5cblxuPCEtLSBEaXNwbGF5IGEgbWVzc2FnZSBvbiBsb2dpbiBzdWNjZXNzZnVsIC0tPlxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0gKm5nSWY9XCJmb3JtU3RhdGUgPT0gJ2NvbXBsZXRlJ1wiPiBcblx0XHQ8bWF0LWNhcmQtdGl0bGU+XG5cdFx0ICA8c3Bhbj5XZWxjb21lIEJhY2shPC9zcGFuPlxuXHRcdDwvbWF0LWNhcmQtdGl0bGU+XG5cblx0XHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHNwYWNpb3VzXCI+XG5cdFx0XHRcdFx0WW91IGFyZSBub3cgbG9nZ2VkIGluLlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG5cbjwhLS0gRGlzcGxheSBhIG1lc3NhZ2UgaWYgdGhlIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4gLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAncGVuZGluZycgJiYgc2VydmljZS51c2VyXCI+IFxuXHRcdDxtYXQtY2FyZC10aXRsZT5cblx0XHQgIDxzcGFuPldlbGNvbWUgQmFjayE8L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHRZb3UgYXJlIGN1cnJlbnRseSBsb2dnZWQgaW4gYXMge3tzZXJ2aWNlLnVzZXIuZW1haWx9fS5cblx0XHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuXHQ8bWF0LWNhcmQtYWN0aW9ucyBjbGFzcz1cInJvd1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcIj5cblx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbj5cblx0XHRcdFx0PGEgcm91dGVyTGluaz1cIi9sb2dvdXRcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+U2lnbiBvdXQ8L2E+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cblxuYCxcbiAgYW5pbWF0aW9uczogW3NsaWRlSW4sIHNsaWRlT3V0LCBzaHJpbmtPdXRdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgbW9kZWw6IGFueSA9IHt9O1xuICAgIHB1YmxpYyBmb3JtOiBhbnk7XG4gICAgLy8gaWYgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQgYW5kIGF3YWl0aW5nIHJlc3BvbnNlXG4gICAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZm9ybVN0YXRlOiBzdHJpbmcgPSAncGVuZGluZyc7XG5cbiAgICAvLyBkaXNwbGF5IHBhc3N3b3JkIHVub2JzY3VyZWRcbiAgICBwdWJsaWMgc2hvd1Bhc3N3b3JkOiBib29sZWFuO1xuXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcblx0XHRwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyICkgeyBcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG5cdFx0XHRlbWFpbDogbmV3IEZvcm1Db250cm9sKCcnLCBbIF0pLFxuXHRcdFx0cGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBdKSxcblx0XHR9KTtcblx0fVxuXG5cdHN1Ym1pdCgpIHtcblx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdHRoaXMuc2VydmljZS5sb2dpbih0aGlzLm1vZGVsLmVtYWlsLCB0aGlzLm1vZGVsLnBhc3N3b3JkKVxuXHRcdFx0LnRoZW4oIFxuXHRcdFx0XHQodXNlcjphbnkpID0+IHtcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGxldCBtZXNzYWdlID0gXCJMb2dpbiBTdWNjZXNzZnVsXCI7XG5cdFx0XHRcdFx0dGhpcy5mb3JtU3RhdGUgPSAnY29tcGxldGUnO1xuXG5cdFx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIG51bGwsIHtcblx0XHRcdFx0ICAgICAgZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdCAgICB9KTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdGxldCBtZXNzYWdlID0gXCJcIjtcblx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEgKSB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gXCJJbmNvcnJlY3QgcGFzc3dvcmRcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSAwICkge1xuXHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiQ291bGQgbm90IGNvbm5lY3RcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgbnVsbCwge1xuXHRcdFx0XHQgICAgICBkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0ICAgIH0pO1xuXHRcdFx0XHR9XG5cblxuXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==