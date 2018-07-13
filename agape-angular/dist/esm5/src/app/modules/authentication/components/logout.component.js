/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { slideIn, slideOut, shrinkOut } from '../../../animations';
import { AuthenticationService } from '../services/authentication.service';
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(service, snackBar) {
        this.service = service;
        this.snackBar = snackBar;
        this.loading = true;
        this.formState = 'pending';
    }
    /**
     * @return {?}
     */
    LogoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('******LOGGING OUT*******');
        console.log(this.service);
        if (this.service.user) {
            this.performLogout();
        }
    };
    /**
     * @return {?}
     */
    LogoutComponent.prototype.performLogout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.logout()
            .then(function (user) {
            _this.loading = false;
            var /** @type {?} */ message = "Signed out";
            _this.formState = 'complete';
            _this.snackBar.open(message, null, {
                duration: 2000,
            });
        }, function (response) {
            _this.loading = false;
            var /** @type {?} */ message = "";
            if (response.status == 401) {
                message = "You could not be signed out.";
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
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    template: "\n<!-- Display a message while the user is being signed out. -->\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'pending' && service.user\" > \n\t\t\n\n\t\t<mat-card-content class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 spacious\">\n\t\t\t\t\tYou are being signed out.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</mat-card-content>\n\n\t<mat-progress-bar mode=\"indeterminate\" class=\"valign-bottom\" *ngIf=\"loading\"></mat-progress-bar>\n\n</mat-card>\n\n<!-- Display a message on logout successful -->\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'complete'\"> \n\n\t\t<mat-card-content class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 spacious\">\n\t\t\t\t\tYou have been signed out.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</mat-card-content>\n\n\n\t<mat-card-actions class=\"row\">\n\t\t<div class=\"col-xs-12 text-center\">\n\t\t\t<button mat-button>\n\t\t\t\t<a routerLink=\"/login\" routerLinkActive=\"active\">Sign in again</a>\n\t\t\t</button>\n\t\t</div>\n\t</mat-card-actions>\n</mat-card>\n\n\n<!-- Display a message if the user is not signed in -->\n<mat-card class=\"sm-centered-card\" [@slideIn] *ngIf=\"formState == 'pending' && ! service.user\"> \n\t<mat-card-content class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 spacious\">\n\t\t\t\tYou are not signed in.\n\t\t\t</div>\n\t\t</div>\n\t</mat-card-content>\n\t<mat-card-actions class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button mat-button>\n\t\t\t\t\t<a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</mat-card-actions>\n</mat-card>\n\n",
                    animations: [slideIn, slideOut, shrinkOut]
                },] },
    ];
    /** @nocollapse */
    LogoutComponent.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: MatSnackBar }
    ]; };
    return LogoutComponent;
}());
export { LogoutComponent };
function LogoutComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LogoutComponent.prototype.loading;
    /** @type {?} */
    LogoutComponent.prototype.formState;
    /** @type {?} */
    LogoutComponent.prototype.service;
    /** @type {?} */
    LogoutComponent.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUF5RTFFLHlCQUNRLFNBQ0E7UUFEQSxZQUFPLEdBQVAsT0FBTztRQUNQLGFBQVEsR0FBUixRQUFRO3VCQUxhLElBQUk7eUJBQ0gsU0FBUztLQUt0Qzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0tBQ0Q7Ozs7SUFFRCx1Q0FBYTs7O0lBQWI7UUFBQSxpQkFpQ0M7UUFoQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7YUFDbkIsSUFBSSxDQUNKLFVBQUMsSUFBUTtZQUNSLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXJCLHFCQUFJLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFFNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtnQkFDN0IsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7U0FFTixFQUNELFVBQUMsUUFBYTtZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLHFCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLEdBQUcsOEJBQThCLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUM5QjtZQUVELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ04sQ0FFRCxDQUFDO0tBQ0g7O2dCQXZIRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG95REE2RFg7b0JBQ0MsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7aUJBQzNDOzs7O2dCQWxFUSxxQkFBcUI7Z0JBSnJCLFdBQVc7OzBCQUZwQjs7U0F5RWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IHNsaWRlSW4sIHNsaWRlT3V0LCBzaHJpbmtPdXQgfSBmcm9tICcuLi8uLi8uLi9hbmltYXRpb25zJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbjwhLS0gRGlzcGxheSBhIG1lc3NhZ2Ugd2hpbGUgdGhlIHVzZXIgaXMgYmVpbmcgc2lnbmVkIG91dC4gLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAncGVuZGluZycgJiYgc2VydmljZS51c2VyXCIgPiBcblx0XHRcblxuXHRcdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0XHRZb3UgYXJlIGJlaW5nIHNpZ25lZCBvdXQuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cblx0XHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG5cblx0PG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIiBjbGFzcz1cInZhbGlnbi1ib3R0b21cIiAqbmdJZj1cImxvYWRpbmdcIj48L21hdC1wcm9ncmVzcy1iYXI+XG5cbjwvbWF0LWNhcmQ+XG5cbjwhLS0gRGlzcGxheSBhIG1lc3NhZ2Ugb24gbG9nb3V0IHN1Y2Nlc3NmdWwgLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAnY29tcGxldGUnXCI+IFxuXG5cdFx0PG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC14cy0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRcdFlvdSBoYXZlIGJlZW4gc2lnbmVkIG91dC5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxuXHRcdDwvbWF0LWNhcmQtY29udGVudD5cblxuXG5cdDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwicm93XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uPlxuXHRcdFx0XHQ8YSByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlNpZ24gaW4gYWdhaW48L2E+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cblxuXG48IS0tIERpc3BsYXkgYSBtZXNzYWdlIGlmIHRoZSB1c2VyIGlzIG5vdCBzaWduZWQgaW4gLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzbS1jZW50ZXJlZC1jYXJkXCIgW0BzbGlkZUluXSAqbmdJZj1cImZvcm1TdGF0ZSA9PSAncGVuZGluZycgJiYgISBzZXJ2aWNlLnVzZXJcIj4gXG5cdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC14cy0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRZb3UgYXJlIG5vdCBzaWduZWQgaW4uXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9tYXQtY2FyZC1jb250ZW50PlxuXHQ8bWF0LWNhcmQtYWN0aW9ucyBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uPlxuXHRcdFx0XHRcdDxhIHJvdXRlckxpbms9XCIvbG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+TG9naW48L2E+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG5cbmAsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUluLCBzbGlkZU91dCwgc2hyaW5rT3V0XVxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy8gaWYgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQgYW5kIGF3YWl0aW5nIHJlc3BvbnNlXG4gICAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBmb3JtU3RhdGU6IHN0cmluZyA9ICdwZW5kaW5nJztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgc2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuXHRcdHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIgKSB7IFx0XHRcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0Y29uc29sZS5sb2coJyoqKioqKkxPR0dJTkcgT1VUKioqKioqKicpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc2VydmljZSk7XG5cblx0XHRpZiAoIHRoaXMuc2VydmljZS51c2VyICkge1xuXHRcdFx0dGhpcy5wZXJmb3JtTG9nb3V0KCk7XG5cdFx0fVxuXHR9XG5cblx0cGVyZm9ybUxvZ291dCgpIHtcblx0XHR0aGlzLnNlcnZpY2UubG9nb3V0KClcblx0XHRcdC50aGVuKCBcblx0XHRcdFx0KHVzZXI6YW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cblx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IFwiU2lnbmVkIG91dFwiO1xuXHRcdFx0XHRcdHRoaXMuZm9ybVN0YXRlID0gJ2NvbXBsZXRlJztcblxuXHRcdFx0XHRcdHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBudWxsLCB7XG5cdFx0XHRcdCAgICAgIGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHQgICAgfSk7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IFwiXCI7XG5cdFx0XHRcdFx0aWYgKCByZXNwb25zZS5zdGF0dXMgPT0gNDAxICkge1xuXHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiWW91IGNvdWxkIG5vdCBiZSBzaWduZWQgb3V0LlwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggcmVzcG9uc2Uuc3RhdHVzID09IDAgKSB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gXCJDb3VsZCBub3QgY29ubmVjdFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdG1lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBudWxsLCB7XG5cdFx0XHRcdCAgICAgIGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHQgICAgfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KTtcblx0fVxuXG59XG4iXX0=