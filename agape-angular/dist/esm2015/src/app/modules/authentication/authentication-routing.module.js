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
const /** @type {?} */ routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'account', component: ModifyCredentialsComponent },
    { path: 'reset-password', component: ResetPasswordRequestComponent },
    { path: 'reset-password/:key', component: ResetPasswordComponent },
    { path: 'activate/:key', component: UserActivationComponent }
];
export class AuthenticationRoutingModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2FwZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQWtCLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUvRSx1QkFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSw2QkFBNkIsRUFBRTtJQUNwRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUU7SUFDbEUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRTtDQUM5RCxDQUFDO0FBV0YsTUFBTTs7O1lBUkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4gXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckFjdGl2YXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci1hY3RpdmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kaWZ5Q3JlZGVudGlhbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kaWZ5LWNyZWRlbnRpYWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG4gXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAncmVnaXN0ZXInLCBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdsb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdhY2NvdW50JywgY29tcG9uZW50OiBNb2RpZnlDcmVkZW50aWFsc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdyZXNldC1wYXNzd29yZCcsIGNvbXBvbmVudDogUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAncmVzZXQtcGFzc3dvcmQvOmtleScsIGNvbXBvbmVudDogUmVzZXRQYXNzd29yZENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdhY3RpdmF0ZS86a2V5JywgY29tcG9uZW50OiBVc2VyQWN0aXZhdGlvbkNvbXBvbmVudCB9XG5dO1xuXG4gXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSB7IH0iXX0=