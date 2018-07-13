/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
var /** @type {?} */ EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var ResetPasswordRequestComponent = /** @class */ (function () {
    function ResetPasswordRequestComponent(AuthenticationService, snackBar) {
        this.AuthenticationService = AuthenticationService;
        this.snackBar = snackBar;
        this.model = {};
        this.formState = 'pending';
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ResetPasswordRequestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.pattern(EMAIL_REGEX)])
        });
    };
    /**
     * Submit the form
     */
    /**
     * Submit the form
     * @return {?}
     */
    ResetPasswordRequestComponent.prototype.submit = /**
     * Submit the form
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.AuthenticationService.resetPasswordRequest(this.model.email)
            .toPromise()
            .then(function (user) {
            _this.loading = false;
            _this.formState = 'complete';
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
    ResetPasswordRequestComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n<mat-card class=\"sm-centered-card\"  [@slideIn] *ngIf=\"formState == 'pending'\"> \n\t<form class=\"reset-password-form\" (ngSubmit)=\"submit()\" [formGroup]=\"form\">\n\n\t\t<mat-card-title>\n\t\t  <span>Reset password</span>\n\t\t</mat-card-title>\n\n\t\t<mat-card-content class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<mat-form-field class=\"col-12 spacious\">\n\t\t\t\t\t<input matInput placeholder=\"Email address\" \n\t\t\t\t\t\tname=\"email\" formControlName=\"email\"\n\t\t\t\t\t\t[(ngModel)]=\"model.email\" \n\t\t\t\t\t\trequired >\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</mat-card-content>\n\n\t\t<mat-card-actions class=\"container\">\n\t\t\t<div class=\"row flex-sm-row-reverse\">\n\t\t\t\t<div class=\"col-sm-6 text-right\">\n\t\t\t\t\t<button mat-button type=\"submit\" [disabled]=\"loading || !form.valid\">Reset my password</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 text-left\">\n\t\t\t\t\t<ul class=\"plain-list\">\n\t\t\t\t\t\t<li><a routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a></li>\n\t\t\t\t\t\t<li><a routerLink=\"/register\" routerLinkActive=\"active\">Create an account</a></li>\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card-actions>\n\n\t</form>\n\n\t<mat-progress-bar mode=\"indeterminate\" class=\"valign-bottom\" *ngIf=\"loading\"></mat-progress-bar>\n\n\n</mat-card>\n\n<mat-card class=\"sm-centered-card\" [@slideIn]   *ngIf=\"formState == 'success'\"> \n\n\t\t<mat-card-content class=\"container\">\n\t\t\t\t<div class=\"col-12 spacious\">\n\t\t\t\t\tWe just sent you an email, click the link inside to reset your password.\n\t\t\t\t</div>\n\t\t</mat-card-content>\n</mat-card>\n\n",
                    animations: [slideIn, slideOut, shrinkOut]
                },] },
    ];
    /** @nocollapse */
    ResetPasswordRequestComponent.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: MatSnackBar }
    ]; };
    return ResetPasswordRequestComponent;
}());
export { ResetPasswordRequestComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2FwZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR25FLHFCQUFNLFdBQVcsR0FBRyxzRUFBc0UsQ0FBQzs7SUFvRXZGLHVDQUNXLHVCQUNOO1FBRE0sMEJBQXFCLEdBQXJCLHFCQUFxQjtRQUMzQixhQUFRLEdBQVIsUUFBUTtxQkFSTyxFQUFFO3lCQUVLLFNBQVM7dUJBQ1YsS0FBSztLQUtBOzs7O0lBRWxDLGdEQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQUM7S0FDSDtJQUVEOztPQUVHOzs7OztJQUNILDhDQUFNOzs7O0lBQU47UUFBQSxpQkE0QkU7UUEzQkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQy9ELFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSixVQUFDLElBQVE7WUFDUixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUM1QixFQUNELFVBQUMsUUFBYTtZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLHFCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLEdBQUcsb0JBQW9CLENBQUM7YUFDL0I7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUM5QjtZQUVELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ04sQ0FFRCxDQUFDO0tBQ0Y7O2dCQTFHRixTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLDJzREFxRFo7b0JBQ0UsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7aUJBQzVDOzs7O2dCQWpFUSxxQkFBcUI7Z0JBQ3JCLFdBQVc7O3dDQUpwQjs7U0FxRWEsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgc2xpZGVJbiwgc2xpZGVPdXQsIHNocmlua091dCB9IGZyb20gJy4uLy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5cbmNvbnN0IEVNQUlMX1JFR0VYID0gL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLztcblxuXG5AQ29tcG9uZW50KHtcbiAgXHR0ZW1wbGF0ZTogYFxuXG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgIFtAc2xpZGVJbl0gKm5nSWY9XCJmb3JtU3RhdGUgPT0gJ3BlbmRpbmcnXCI+IFxuXHQ8Zm9ybSBjbGFzcz1cInJlc2V0LXBhc3N3b3JkLWZvcm1cIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cblxuXHRcdDxtYXQtY2FyZC10aXRsZT5cblx0XHQgIDxzcGFuPlJlc2V0IHBhc3N3b3JkPC9zcGFuPlxuXHRcdDwvbWF0LWNhcmQtdGl0bGU+XG5cblx0XHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHQ8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cIm1vZGVsLmVtYWlsXCIgXG5cdFx0XHRcdFx0XHRyZXF1aXJlZCA+XG5cdFx0XHRcdDwvbWF0LWZvcm0tZmllbGQ+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XG5cdFx0PC9tYXQtY2FyZC1jb250ZW50PlxuXG5cdFx0PG1hdC1jYXJkLWFjdGlvbnMgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgZmxleC1zbS1yb3ctcmV2ZXJzZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgIWZvcm0udmFsaWRcIj5SZXNldCBteSBwYXNzd29yZDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS02IHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cInBsYWluLWxpc3RcIj5cblx0XHRcdFx0XHRcdDxsaT48YSByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlNpZ24gaW48L2E+PC9saT5cblx0XHRcdFx0XHRcdDxsaT48YSByb3V0ZXJMaW5rPVwiL3JlZ2lzdGVyXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkNyZWF0ZSBhbiBhY2NvdW50PC9hPjwvbGk+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtYWN0aW9ucz5cblxuXHQ8L2Zvcm0+XG5cblx0PG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIiBjbGFzcz1cInZhbGlnbi1ib3R0b21cIiAqbmdJZj1cImxvYWRpbmdcIj48L21hdC1wcm9ncmVzcy1iYXI+XG5cblxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0gICAqbmdJZj1cImZvcm1TdGF0ZSA9PSAnc3VjY2VzcydcIj4gXG5cblx0XHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHNwYWNpb3VzXCI+XG5cdFx0XHRcdFx0V2UganVzdCBzZW50IHlvdSBhbiBlbWFpbCwgY2xpY2sgdGhlIGxpbmsgaW5zaWRlIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbmAsXG4gIFx0YW5pbWF0aW9uczogW3NsaWRlSW4sIHNsaWRlT3V0LCBzaHJpbmtPdXRdXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBtb2RlbDogYW55ID0ge307XG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgICBwdWJsaWMgZm9ybVN0YXRlOiBzdHJpbmcgPSAncGVuZGluZyc7XG4gICAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBBdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcblx0XHRwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woJycsIFsgVmFsaWRhdG9ycy5wYXR0ZXJuKEVNQUlMX1JFR0VYKV0pXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogU3VibWl0IHRoZSBmb3JtXG5cdCAqL1xuXHRzdWJtaXQoKSB7XG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHR0aGlzLkF1dGhlbnRpY2F0aW9uU2VydmljZS5yZXNldFBhc3N3b3JkUmVxdWVzdCh0aGlzLm1vZGVsLmVtYWlsKVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbiggXG5cdFx0XHRcdCh1c2VyOmFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuZm9ybVN0YXRlID0gJ2NvbXBsZXRlJztcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IFwiXCI7XG5cdFx0XHRcdFx0aWYgKCByZXNwb25zZS5zdGF0dXMgPT0gNDAxICkge1xuXHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCByZXNwb25zZS5zdGF0dXMgPT0gMCApIHtcblx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCBjb25uZWN0XCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0bWVzc2FnZSA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIG51bGwsIHtcblx0XHRcdFx0ICAgICAgZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdCAgICB9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpO1xuXHRcdH1cbn1cbiJdfQ==