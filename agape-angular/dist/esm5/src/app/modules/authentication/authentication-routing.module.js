/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register.component';
import { UserActivationComponent } from './components/user-activation.component';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
import { ModifyCredentialsComponent } from './components/modify-credentials.component';
import { ResetPasswordRequestComponent } from './components/reset-password-request.component';
import { ResetPasswordComponent } from './components/reset-password.component';
var /** @type {?} */ routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'account', component: ModifyCredentialsComponent },
    { path: 'reset-password', component: ResetPasswordRequestComponent },
    { path: 'reset-password/:key', component: ResetPasswordComponent },
    { path: 'activate/:key', component: UserActivationComponent }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild(routes)
                    ],
                    exports: [
                        RouterModule
                    ]
                },] },
    ];
    return AuthenticationRoutingModule;
}());
export { AuthenticationRoutingModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2FwZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQWtCLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUvRSxxQkFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSw2QkFBNkIsRUFBRTtJQUNwRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUU7SUFDbEUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRTtDQUM5RCxDQUFDOzs7OztnQkFHRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRjs7c0NBN0JEOztTQThCYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuIFxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJBY3RpdmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXItYWN0aXZhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGlmeUNyZWRlbnRpYWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGlmeS1jcmVkZW50aWFscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuIFxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ3JlZ2lzdGVyJywgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAnbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnYWNjb3VudCcsIGNvbXBvbmVudDogTW9kaWZ5Q3JlZGVudGlhbHNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAncmVzZXQtcGFzc3dvcmQnLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3Jlc2V0LXBhc3N3b3JkLzprZXknLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnYWN0aXZhdGUvOmtleScsIGNvbXBvbmVudDogVXNlckFjdGl2YXRpb25Db21wb25lbnQgfVxuXTtcblxuIFxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgeyB9Il19