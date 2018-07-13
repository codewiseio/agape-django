/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { slideIn, shrinkOut } from '../../../animations';
import { MatSnackBar } from '@angular/material';
var UserActivationComponent = /** @class */ (function () {
    function UserActivationComponent(route, router, service, snackBar) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.pageState = 'pending';
        this.count = 5;
    }
    /**
     * @return {?}
     */
    UserActivationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ key = this.route.snapshot.paramMap.get('key');
        // activate the account
        this.service.activateAccount(key).toPromise().then(function () {
            _this.pageState = 'success';
        }, function (response) {
            var /** @type {?} */ message = "";
            if (response.status == 409) {
                _this.pageState = 'duplicate';
            }
            else {
                _this.pageState = 'fail';
                message = response.statusText;
                _this.snackBar.open(message, null, {
                    duration: 3000,
                });
            }
        });
    };
    UserActivationComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n<mat-card class=\"sm-centered-card\" [@slideIn]  *ngIf=\"pageState == 'success'\"> \n\t<mat-card-title>\n\t  <span>Ready</span>\n\t</mat-card-title>\n\n\t<mat-card-content class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 spacious\">\n\t\t\t\tYour account is now active. \n\t\t\t</div>\n\t\t</div>\n\t</mat-card-content>\n\t<mat-card-actions class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 text-right\">\n\t\t\t\t<button mat-button routerLink=\"/login\" routerLinkActive=\"active\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></button>\n\t\t\t</div>\n\t\t</div>\n\t</mat-card-actions>\n</mat-card>\n\n\n<mat-card class=\"sm-centered-card\" [@slideIn]   *ngIf=\"pageState == 'fail'\"> \n\t<mat-card-title>\n\t  <span>Hmmm...</span>\n\t</mat-card-title>\n\n\t<mat-card-content class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 spacious\">\n\t\t\t\tWe could not activate your account.\n\t\t\t</div>\n\t\t</div>\n\t</mat-card-content>\n</mat-card>\n\n\n<mat-card class=\"sm-centered-card \" [@slideIn]   *ngIf=\"pageState == 'duplicate'\"> \n\t<mat-card-title>\n\t  <span>Hmmm...</span>\n\t</mat-card-title>\n\n\t<mat-card-content class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 spacious\">\n\t\t\t\tYour account is already active. \n\t\t\t</div>\n\t\t</div>\n\t</mat-card-content>\n\t<mat-card-actions class=\"container\">\n\t\t<div class=\"col-12 text-right\">\n\t\t\t<button mat-button routerLink=\"/login\" routerLinkActive=\"active\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></button>\n\t\t</div>\n\t</mat-card-actions>\n</mat-card>\n",
                    animations: [slideIn, shrinkOut]
                },] },
    ];
    /** @nocollapse */
    UserActivationComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router },
        { type: AuthenticationService },
        { type: MatSnackBar }
    ]; };
    return UserActivationComponent;
}());
export { UserActivationComponent };
function UserActivationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UserActivationComponent.prototype.pageState;
    /** @type {?} */
    UserActivationComponent.prototype.countDown;
    /** @type {?} */
    UserActivationComponent.prototype.count;
    /** @type {?} */
    UserActivationComponent.prototype.route;
    /** @type {?} */
    UserActivationComponent.prototype.router;
    /** @type {?} */
    UserActivationComponent.prototype.service;
    /** @type {?} */
    UserActivationComponent.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY3RpdmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy91c2VyLWFjdGl2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFM0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBcUU5QyxpQ0FDUSxPQUNBLFFBQ0EsU0FDQztRQUhELFVBQUssR0FBTCxLQUFLO1FBQ0wsV0FBTSxHQUFOLE1BQU07UUFDTixZQUFPLEdBQVAsT0FBTztRQUNOLGFBQVEsR0FBUixRQUFRO3lCQVJVLFNBQVM7cUJBRWIsQ0FBQztLQU1ZOzs7O0lBR3BDLDBDQUFROzs7SUFBUjtRQUFBLGlCQXlCQztRQXhCQSxxQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFHakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNqRDtZQUNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzNCLEVBRUEsVUFBQyxRQUFRO1lBRVAscUJBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7Z0JBQ3hCLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO29CQUM5QixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUM7YUFDTjtTQUdGLENBQUMsQ0FBQztLQUNOOztnQkFuR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0b0RBeURYO29CQUNDLFVBQVUsRUFBRSxDQUFFLE9BQU8sRUFBRSxTQUFTLENBQUU7aUJBQ25DOzs7O2dCQWxFZ0IsY0FBYztnQkFBdEIsTUFBTTtnQkFDTixxQkFBcUI7Z0JBR3JCLFdBQVc7O2tDQUxwQjs7U0FvRWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZUluLCBzaHJpbmtPdXQgfSBmcm9tICcuLi8uLi8uLi9hbmltYXRpb25zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0gICpuZ0lmPVwicGFnZVN0YXRlID09ICdzdWNjZXNzJ1wiPiBcblx0PG1hdC1jYXJkLXRpdGxlPlxuXHQgIDxzcGFuPlJlYWR5PC9zcGFuPlxuXHQ8L21hdC1jYXJkLXRpdGxlPlxuXG5cdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRZb3VyIGFjY291bnQgaXMgbm93IGFjdGl2ZS4gXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9tYXQtY2FyZC1jb250ZW50PlxuXHQ8bWF0LWNhcmQtYWN0aW9ucyBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHQ8YnV0dG9uIG1hdC1idXR0b24gcm91dGVyTGluaz1cIi9sb2dpblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkxvZ2luPC9hPjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG5cblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZFwiIFtAc2xpZGVJbl0gICAqbmdJZj1cInBhZ2VTdGF0ZSA9PSAnZmFpbCdcIj4gXG5cdDxtYXQtY2FyZC10aXRsZT5cblx0ICA8c3Bhbj5IbW1tLi4uPC9zcGFuPlxuXHQ8L21hdC1jYXJkLXRpdGxlPlxuXG5cdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRXZSBjb3VsZCBub3QgYWN0aXZhdGUgeW91ciBhY2NvdW50LlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cblxuPG1hdC1jYXJkIGNsYXNzPVwic20tY2VudGVyZWQtY2FyZCBcIiBbQHNsaWRlSW5dICAgKm5nSWY9XCJwYWdlU3RhdGUgPT0gJ2R1cGxpY2F0ZSdcIj4gXG5cdDxtYXQtY2FyZC10aXRsZT5cblx0ICA8c3Bhbj5IbW1tLi4uPC9zcGFuPlxuXHQ8L21hdC1jYXJkLXRpdGxlPlxuXG5cdDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMiBzcGFjaW91c1wiPlxuXHRcdFx0XHRZb3VyIGFjY291bnQgaXMgYWxyZWFkeSBhY3RpdmUuIFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvbWF0LWNhcmQtY29udGVudD5cblx0PG1hdC1jYXJkLWFjdGlvbnMgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cblx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxhIHJvdXRlckxpbms9XCIvbG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+TG9naW48L2E+PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG5gLFxuICBhbmltYXRpb25zOiBbIHNsaWRlSW4sIHNocmlua091dCBdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBY3RpdmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgcGFnZVN0YXRlOiBzdHJpbmcgPSAncGVuZGluZyc7XG4gIHB1YmxpYyBjb3VudERvd246IGFueTtcbiAgcHVibGljIGNvdW50OiBudW1iZXIgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICBcdHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gIFx0cHVibGljIHJvdXRlcjogUm91dGVyLFxuICBcdHB1YmxpYyBzZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhciApIHsgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIFx0bGV0IGtleSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdrZXknKTtcblxuICBcdC8vIGFjdGl2YXRlIHRoZSBhY2NvdW50XG4gICAgdGhpcy5zZXJ2aWNlLmFjdGl2YXRlQWNjb3VudChrZXkpLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgXHQoKSA9PiB7XG4gICAgXHRcdHRoaXMucGFnZVN0YXRlID0gJ3N1Y2Nlc3MnO1xuICAgIFx0fSxcblxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICBpZiAoIHJlc3BvbnNlLnN0YXR1cyA9PSA0MDkgKSB7XG4gICAgICAgICAgdGhpcy5wYWdlU3RhdGUgPSAnZHVwbGljYXRlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhZ2VTdGF0ZSA9ICdmYWlsJztcbiAgICAgICAgICBtZXNzYWdlID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgbnVsbCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgfSk7XG4gIH1cblxuXG5cbn1cbiJdfQ==