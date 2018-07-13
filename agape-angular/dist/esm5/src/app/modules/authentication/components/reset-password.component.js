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
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(route, router, service, snackBar) {
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
    ResetPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.key = this.route.snapshot.paramMap.get('key');
        // validate key
        this.service.validateResetPasswordRequest(this.key)
            .toPromise()
            .then(function (response) {
            _this.formState = 'pending';
        }, function (response) {
            console.log(response);
            if (response.status == 401 || response.status == 404 || response.status == 410) {
                _this.errorMessage = "This link has expired or is not valid.";
            }
            _this.formState = 'error';
        });
        this.form = new FormGroup({
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
    ResetPasswordComponent.prototype.submit = /**
     * Register a user
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.service.resetPassword(this.key, this.model.password)
            .toPromise()
            .then(function () {
            _this.loading = false;
            _this.formState = 'success';
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
    ResetPasswordComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n<mat-card class=\"sm-centered-card\"  [@slideIn]  *ngIf=\"formState == 'pending'\"> \n\t<form class=\"reset-password-form\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\n\n\t\t<mat-card-title>\n\t\t  <span>Choose a password</span>\n\t\t</mat-card-title>\n\t\t<mat-card-content class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Password\"\n\t\t\t\t\t\tname=\"password\" type=\"password\" formControlName=\"password\"\n\t\t\t\t\t\t[type]=\"showPassword ? 'text' : 'password'\"\n\t\t\t\t\t\t[(ngModel)]=\"model.password\" \n\t\t\t\t\t\trequired>\n\t\t\t\t\t<mat-icon class=\"toggle-display-password\" (click)=\"showPassword=!showPassword\">\n\t\t\t\t\t\t{{showPassword ? 'visibility_off' : 'visibility'}}\n\t\t\t\t\t</mat-icon>\t\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t</mat-card-content>\n\t\t<mat-card-actions class=\"container\">\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<button mat-button type=\"submit\" [disabled]=\"loading || !form.valid\">Save</button>\n\t\t\t</div>\n\t\t</mat-card-actions>\n\t</form>\n\n</mat-card>\n\n<mat-card class=\"sm-centered-card\"  [@slideIn]   *ngIf=\"formState == 'success'\"> \n\t<form class=\"reset-password-form\">\n\n\t\t<mat-card-title>\n\t\t  <span>Done</span>\n\t\t</mat-card-title>\n\t\t<mat-card-content class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\tYour password has been changed. Remember.\n\t\t\t</div>\n\t\t</mat-card-content>\n\t\t<mat-card-actions class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 text-right\">\n\t\t\t\t\t<button mat-button routerLink=\"/login\" routerLinkActive=\"active\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card-actions>\n\t</form>\n\n</mat-card>\n\n\n<mat-card class=\"sm-centered-card\" [@slideIn]    *ngIf=\"formState == 'error'\"> \n\t<mat-card-title>\n\t  <span>Reset Password</span>\n\t</mat-card-title>\n\t<mat-card-content class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">{{this.errorMessage}}</div>\n\t\t</div>\n\t</mat-card-content>\n\n\n</mat-card>\n",
                    animations: [slideIn, shrinkOut]
                },] },
    ];
    /** @nocollapse */
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router },
        { type: AuthenticationService },
        { type: MatSnackBar }
    ]; };
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBbUZ2RCxnQ0FDUSxPQUNBLFFBQ0EsU0FDQTtRQUhBLFVBQUssR0FBTCxLQUFLO1FBQ0wsV0FBTSxHQUFOLE1BQU07UUFDTixZQUFPLEdBQVAsT0FBTztRQUNQLGFBQVEsR0FBUixRQUFRO3FCQVpNLEVBQUU7eUJBR0ssY0FBYzt1QkFDZixLQUFLO0tBUUM7Ozs7SUFHbkMseUNBQVE7OztJQUFSO1FBQUEsaUJBc0JDO1FBckJBLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFHbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2pELFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSixVQUFDLFFBQVE7WUFDUixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUUzQixFQUNELFVBQUMsUUFBUTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsWUFBWSxHQUFHLHdDQUF3QyxDQUFDO2FBQzdEO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDekIsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUcsQ0FBQztTQUNsQyxDQUFDLENBQUM7S0FDSDtJQUVEOztPQUVHOzs7OztJQUNILHVDQUFNOzs7O0lBQU47UUFBQSxpQkF3QkM7UUF2QkEsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2RCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUU7WUFDTixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUMzQixFQUNELFVBQUMsUUFBYTtZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLHFCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLEdBQUcsbUJBQW1CLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUM5QjtZQUVELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDO0tBR0o7O2dCQTFJRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVwRUFrRVg7b0JBQ0MsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztpQkFDakM7Ozs7Z0JBL0VnQixjQUFjO2dCQUF0QixNQUFNO2dCQUdOLHFCQUFxQjtnQkFFckIsV0FBVzs7aUNBTnBCOztTQWlGYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1NYXAgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IHNsaWRlSW4sIHNocmlua091dCB9IGZyb20gJy4uLy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuXG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgIFtAc2xpZGVJbl0gICpuZ0lmPVwiZm9ybVN0YXRlID09ICdwZW5kaW5nJ1wiPiBcblx0PGZvcm0gY2xhc3M9XCJyZXNldC1wYXNzd29yZC1mb3JtXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG5cblx0XHQ8bWF0LWNhcmQtdGl0bGU+XG5cdFx0ICA8c3Bhbj5DaG9vc2UgYSBwYXNzd29yZDwvc3Bhbj5cblx0XHQ8L21hdC1jYXJkLXRpdGxlPlxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFt0eXBlXT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJtb2RlbC5wYXNzd29yZFwiIFxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ+XG5cdFx0XHRcdFx0PG1hdC1pY29uIGNsYXNzPVwidG9nZ2xlLWRpc3BsYXktcGFzc3dvcmRcIiAoY2xpY2spPVwic2hvd1Bhc3N3b3JkPSFzaG93UGFzc3dvcmRcIj5cblx0XHRcdFx0XHRcdHt7c2hvd1Bhc3N3b3JkID8gJ3Zpc2liaWxpdHlfb2ZmJyA6ICd2aXNpYmlsaXR5J319XG5cdFx0XHRcdFx0PC9tYXQtaWNvbj5cdFx0XHRcdFx0XHRcblx0XHRcdFx0PC9tYXQtZm9ybS1maWVsZD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtY29udGVudD5cblx0XHQ8bWF0LWNhcmQtYWN0aW9ucyBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgIWZvcm0udmFsaWRcIj5TYXZlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWFjdGlvbnM+XG5cdDwvZm9ybT5cblxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiICBbQHNsaWRlSW5dICAgKm5nSWY9XCJmb3JtU3RhdGUgPT0gJ3N1Y2Nlc3MnXCI+IFxuXHQ8Zm9ybSBjbGFzcz1cInJlc2V0LXBhc3N3b3JkLWZvcm1cIj5cblxuXHRcdDxtYXQtY2FyZC10aXRsZT5cblx0XHQgIDxzcGFuPkRvbmU8L3NwYW4+XG5cdFx0PC9tYXQtY2FyZC10aXRsZT5cblx0XHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHRZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIGNoYW5nZWQuIFJlbWVtYmVyLlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuXHRcdDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxhIHJvdXRlckxpbms9XCIvbG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+TG9naW48L2E+PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1hY3Rpb25zPlxuXHQ8L2Zvcm0+XG5cbjwvbWF0LWNhcmQ+XG5cblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0gICAgKm5nSWY9XCJmb3JtU3RhdGUgPT0gJ2Vycm9yJ1wiPiBcblx0PG1hdC1jYXJkLXRpdGxlPlxuXHQgIDxzcGFuPlJlc2V0IFBhc3N3b3JkPC9zcGFuPlxuXHQ8L21hdC1jYXJkLXRpdGxlPlxuXHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTJcIj57e3RoaXMuZXJyb3JNZXNzYWdlfX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9tYXQtY2FyZC1jb250ZW50PlxuXG5cbjwvbWF0LWNhcmQ+XG5gLFxuIFx0YW5pbWF0aW9uczogW3NsaWRlSW4sIHNocmlua091dF1cbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbW9kZWw6IGFueSA9IHt9O1xuICAgIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBmb3JtU3RhdGU6IHN0cmluZyA9ICdpbml0aWFsaXppbmcnO1xuICAgIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHNob3dQYXNzd29yZDogYm9vbGVhbjtcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gIFx0cHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgXHRwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gIFx0cHVibGljIHNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgXHRwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMua2V5ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2tleScpO1xuXG5cdFx0Ly8gdmFsaWRhdGUga2V5XG5cdFx0dGhpcy5zZXJ2aWNlLnZhbGlkYXRlUmVzZXRQYXNzd29yZFJlcXVlc3QodGhpcy5rZXkpXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKCBcblx0XHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtU3RhdGUgPSAncGVuZGluZyc7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRcdGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDQwMSB8fCByZXNwb25zZS5zdGF0dXMgPT0gNDA0IHx8IHJlc3BvbnNlLnN0YXR1cyA9PSA0MTAgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9IFwiVGhpcyBsaW5rIGhhcyBleHBpcmVkIG9yIGlzIG5vdCB2YWxpZC5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5mb3JtU3RhdGUgPSAnZXJyb3InO1xuXHRcdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0cGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgWyBdKSxcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIHVzZXJcblx0ICovXG5cdHN1Ym1pdCgpIHtcblx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdHRoaXMuc2VydmljZS5yZXNldFBhc3N3b3JkKHRoaXMua2V5LCB0aGlzLm1vZGVsLnBhc3N3b3JkKVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbiggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5mb3JtU3RhdGUgPSAnc3VjY2Vzcyc7XG5cdFx0XHR9LFxuXHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdGxldCBtZXNzYWdlID0gXCJcIjtcblx0XHRcdFx0aWYgKCByZXNwb25zZS5zdGF0dXMgPT0gMCApIHtcblx0XHRcdFx0XHRtZXNzYWdlID0gXCJDb3VsZCBub3QgY29ubmVjdFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdG1lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIG51bGwsIHtcblx0XHRcdCAgICAgIGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0ICAgIH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcblx0fVxufVxuIl19