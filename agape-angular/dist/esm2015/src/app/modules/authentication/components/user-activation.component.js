/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { slideIn, shrinkOut } from '../../../animations';
import { MatSnackBar } from '@angular/material';
export class UserActivationComponent {
    /**
     * @param {?} route
     * @param {?} router
     * @param {?} service
     * @param {?} snackBar
     */
    constructor(route, router, service, snackBar) {
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
    ngOnInit() {
        let /** @type {?} */ key = this.route.snapshot.paramMap.get('key');
        // activate the account
        this.service.activateAccount(key).toPromise().then(() => {
            this.pageState = 'success';
        }, (response) => {
            let /** @type {?} */ message = "";
            if (response.status == 409) {
                this.pageState = 'duplicate';
            }
            else {
                this.pageState = 'fail';
                message = response.statusText;
                this.snackBar.open(message, null, {
                    duration: 3000,
                });
            }
        });
    }
}
UserActivationComponent.decorators = [
    { type: Component, args: [{
                template: `

<mat-card class="sm-centered-card" [@slideIn]  *ngIf="pageState == 'success'"> 
	<mat-card-title>
	  <span>Ready</span>
	</mat-card-title>

	<mat-card-content class="container">
		<div class="row">
			<div class="col-12 spacious">
				Your account is now active. 
			</div>
		</div>
	</mat-card-content>
	<mat-card-actions class="container">
		<div class="row">
			<div class="col-12 text-right">
				<button mat-button routerLink="/login" routerLinkActive="active"><a routerLink="/login" routerLinkActive="active">Login</a></button>
			</div>
		</div>
	</mat-card-actions>
</mat-card>


<mat-card class="sm-centered-card" [@slideIn]   *ngIf="pageState == 'fail'"> 
	<mat-card-title>
	  <span>Hmmm...</span>
	</mat-card-title>

	<mat-card-content class="container">
		<div class="row">
			<div class="col-12 spacious">
				We could not activate your account.
			</div>
		</div>
	</mat-card-content>
</mat-card>


<mat-card class="sm-centered-card " [@slideIn]   *ngIf="pageState == 'duplicate'"> 
	<mat-card-title>
	  <span>Hmmm...</span>
	</mat-card-title>

	<mat-card-content class="container">
		<div class="row">
			<div class="col-12 spacious">
				Your account is already active. 
			</div>
		</div>
	</mat-card-content>
	<mat-card-actions class="container">
		<div class="col-12 text-right">
			<button mat-button routerLink="/login" routerLinkActive="active"><a routerLink="/login" routerLinkActive="active">Login</a></button>
		</div>
	</mat-card-actions>
</mat-card>
`,
                animations: [slideIn, shrinkOut]
            },] },
];
/** @nocollapse */
UserActivationComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: MatSnackBar }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY3RpdmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy91c2VyLWFjdGl2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFM0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUErRGhELE1BQU07Ozs7Ozs7SUFNSixZQUNRLE9BQ0EsUUFDQSxTQUNDO1FBSEQsVUFBSyxHQUFMLEtBQUs7UUFDTCxXQUFNLEdBQU4sTUFBTTtRQUNOLFlBQU8sR0FBUCxPQUFPO1FBQ04sYUFBUSxHQUFSLFFBQVE7eUJBUlUsU0FBUztxQkFFYixDQUFDO0tBTVk7Ozs7SUFHcEMsUUFBUTtRQUNQLHFCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUdqRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2pELEdBQUcsRUFBRTtZQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzNCLEVBRUEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUVYLHFCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtvQkFDOUIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2FBQ047U0FHRixDQUFDLENBQUM7S0FDTjs7O1lBbkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXlEWDtnQkFDQyxVQUFVLEVBQUUsQ0FBRSxPQUFPLEVBQUUsU0FBUyxDQUFFO2FBQ25DOzs7O1lBbEVnQixjQUFjO1lBQXRCLE1BQU07WUFDTixxQkFBcUI7WUFHckIsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2xpZGVJbiwgc2hyaW5rT3V0IH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG5cbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmRcIiBbQHNsaWRlSW5dICAqbmdJZj1cInBhZ2VTdGF0ZSA9PSAnc3VjY2VzcydcIj4gXG5cdDxtYXQtY2FyZC10aXRsZT5cblx0ICA8c3Bhbj5SZWFkeTwvc3Bhbj5cblx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0WW91ciBhY2NvdW50IGlzIG5vdyBhY3RpdmUuIFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvbWF0LWNhcmQtY29udGVudD5cblx0PG1hdC1jYXJkLWFjdGlvbnMgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0PGJ1dHRvbiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCIvbG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+PGEgcm91dGVyTGluaz1cIi9sb2dpblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5Mb2dpbjwvYT48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L21hdC1jYXJkLWFjdGlvbnM+XG48L21hdC1jYXJkPlxuXG5cbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmRcIiBbQHNsaWRlSW5dICAgKm5nSWY9XCJwYWdlU3RhdGUgPT0gJ2ZhaWwnXCI+IFxuXHQ8bWF0LWNhcmQtdGl0bGU+XG5cdCAgPHNwYW4+SG1tbS4uLjwvc3Bhbj5cblx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0V2UgY291bGQgbm90IGFjdGl2YXRlIHlvdXIgYWNjb3VudC5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG5cbjxtYXQtY2FyZCBjbGFzcz1cInNtLWNlbnRlcmVkLWNhcmQgXCIgW0BzbGlkZUluXSAgICpuZ0lmPVwicGFnZVN0YXRlID09ICdkdXBsaWNhdGUnXCI+IFxuXHQ8bWF0LWNhcmQtdGl0bGU+XG5cdCAgPHNwYW4+SG1tbS4uLjwvc3Bhbj5cblx0PC9tYXQtY2FyZC10aXRsZT5cblxuXHQ8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0WW91ciBhY2NvdW50IGlzIGFscmVhZHkgYWN0aXZlLiBcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L21hdC1jYXJkLWNvbnRlbnQ+XG5cdDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHQ8YnV0dG9uIG1hdC1idXR0b24gcm91dGVyTGluaz1cIi9sb2dpblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkxvZ2luPC9hPjwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L21hdC1jYXJkLWFjdGlvbnM+XG48L21hdC1jYXJkPlxuYCxcbiAgYW5pbWF0aW9uczogWyBzbGlkZUluLCBzaHJpbmtPdXQgXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQWN0aXZhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHBhZ2VTdGF0ZTogc3RyaW5nID0gJ3BlbmRpbmcnO1xuICBwdWJsaWMgY291bnREb3duOiBhbnk7XG4gIHB1YmxpYyBjb3VudDogbnVtYmVyID0gNTtcblxuICBjb25zdHJ1Y3RvcihcbiAgXHRwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICBcdHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgXHRwdWJsaWMgc2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIgKSB7IH1cblxuXG4gIG5nT25Jbml0KCkge1xuICBcdGxldCBrZXkgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgna2V5Jyk7XG5cbiAgXHQvLyBhY3RpdmF0ZSB0aGUgYWNjb3VudFxuICAgIHRoaXMuc2VydmljZS5hY3RpdmF0ZUFjY291bnQoa2V5KS50b1Byb21pc2UoKS50aGVuKFxuICAgIFx0KCkgPT4ge1xuICAgIFx0XHR0aGlzLnBhZ2VTdGF0ZSA9ICdzdWNjZXNzJztcbiAgICBcdH0sXG5cbiAgICAgIChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICAgICAgaWYgKCByZXNwb25zZS5zdGF0dXMgPT0gNDA5ICkge1xuICAgICAgICAgIHRoaXMucGFnZVN0YXRlID0gJ2R1cGxpY2F0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYWdlU3RhdGUgPSAnZmFpbCc7XG4gICAgICAgICAgbWVzc2FnZSA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIG51bGwsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH0pO1xuICB9XG5cblxuXG59XG4iXX0=