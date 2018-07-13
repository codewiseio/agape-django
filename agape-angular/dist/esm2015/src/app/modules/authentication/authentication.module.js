/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatCardModule, MatFormFieldModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import { RegisterComponent } from './components/register.component';
import { UserActivationComponent } from './components/user-activation.component';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
import { ModifyCredentialsComponent } from './components/modify-credentials.component';
import { ResetPasswordComponent } from './components/reset-password.component';
import { ResetPasswordRequestComponent } from './components/reset-password-request.component';
import { ConfirmPasswordDialogComponent } from './components/confirm-password-dialog.component';
import { UniqueEmailValidatorDirective } from './validators/unique-email-validator.directive';
import { ConfirmPasswordValidatorDirective } from './validators/confirm-password-validator.directive';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthRequestOptions } from './authentication-request';
export class AuthenticationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AuthenticationModule,
            providers: [AuthenticationService]
        };
    }
}
AuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserAnimationsModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatIconModule,
                    MatInputModule,
                    MatCardModule,
                    MatFormFieldModule,
                    MatProgressBarModule,
                    MatSnackBarModule,
                    AuthenticationRoutingModule,
                ],
                declarations: [
                    RegisterComponent,
                    ResetPasswordComponent,
                    ResetPasswordRequestComponent,
                    UserActivationComponent,
                    LoginComponent,
                    LogoutComponent,
                    ModifyCredentialsComponent,
                    ConfirmPasswordDialogComponent,
                    ConfirmPasswordValidatorDirective,
                    UniqueEmailValidatorDirective,
                ],
                exports: [
                    RegisterComponent,
                    ResetPasswordComponent,
                    ResetPasswordRequestComponent,
                    UserActivationComponent,
                    LoginComponent,
                    LogoutComponent,
                    ModifyCredentialsComponent,
                    ConfirmPasswordDialogComponent,
                    ConfirmPasswordValidatorDirective,
                    UniqueEmailValidatorDirective,
                ],
                providers: [
                    AuthenticationService,
                    /* Adds the Authorization: Bearer xxxxx http header to every request */
                    {
                        provide: RequestOptions,
                        useClass: AuthRequestOptions
                    }
                ],
                entryComponents: [ConfirmPasswordDialogComponent]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBUSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQVMsZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGVBQWUsRUFDZixhQUFhLEVBQ2IsY0FBYyxFQUNkLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNsQixNQUFNLG1CQUFtQixDQUFDO0FBRzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFOUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFaEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUF3RDlELE1BQU07Ozs7SUFFSixNQUFNLENBQUMsT0FBTztRQUNaLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUUscUJBQXFCLENBQUU7U0FDckMsQ0FBQTtLQUNGOzs7WUE3REYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUVqQiwyQkFBMkI7aUJBQzVCO2dCQUNELFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtvQkFDdEIsNkJBQTZCO29CQUM3Qix1QkFBdUI7b0JBQ3ZCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZiwwQkFBMEI7b0JBQzFCLDhCQUE4QjtvQkFDOUIsaUNBQWlDO29CQUNqQyw2QkFBNkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLHNCQUFzQjtvQkFDdEIsNkJBQTZCO29CQUM3Qix1QkFBdUI7b0JBQ3ZCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZiwwQkFBMEI7b0JBQzFCLDhCQUE4QjtvQkFDOUIsaUNBQWlDO29CQUNqQyw2QkFBNkI7aUJBQzlCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxxQkFBcUI7O29CQUdyQjt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsUUFBUSxFQUFFLGtCQUFrQjtxQkFDN0I7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFFbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge1xuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdERpYWxvZ01vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckFjdGl2YXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci1hY3RpdmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kaWZ5Q3JlZGVudGlhbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kaWZ5LWNyZWRlbnRpYWxzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm0tcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVuaXF1ZUVtYWlsVmFsaWRhdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi92YWxpZGF0b3JzL3VuaXF1ZS1lbWFpbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbmZpcm1QYXNzd29yZFZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vdmFsaWRhdG9ycy9jb25maXJtLXBhc3N3b3JkLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLXJlcXVlc3QnO1xuIFxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuXG4gICAgQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50LFxuICAgIFVzZXJBY3RpdmF0aW9uQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIExvZ291dENvbXBvbmVudCxcbiAgICBNb2RpZnlDcmVkZW50aWFsc0NvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmREaWFsb2dDb21wb25lbnQsXG4gICAgQ29uZmlybVBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIFVuaXF1ZUVtYWlsVmFsaWRhdG9yRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgUmVzZXRQYXNzd29yZENvbXBvbmVudCxcbiAgICBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCxcbiAgICBVc2VyQWN0aXZhdGlvbkNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBMb2dvdXRDb21wb25lbnQsXG4gICAgTW9kaWZ5Q3JlZGVudGlhbHNDb21wb25lbnQsXG4gICAgQ29uZmlybVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LFxuICAgIENvbmZpcm1QYXNzd29yZFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBVbmlxdWVFbWFpbFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIFxuICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcblxuICAgIC8qIEFkZHMgdGhlIEF1dGhvcml6YXRpb246IEJlYXJlciB4eHh4eCBodHRwIGhlYWRlciB0byBldmVyeSByZXF1ZXN0ICovXG4gICAge1xuICAgICAgcHJvdmlkZTogUmVxdWVzdE9wdGlvbnMsIFxuICAgICAgdXNlQ2xhc3M6IEF1dGhSZXF1ZXN0T3B0aW9uc1xuICAgIH1cbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ29uZmlybVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50XVxuICBcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Nb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXV0aGVudGljYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsgQXV0aGVudGljYXRpb25TZXJ2aWNlIF1cbiAgICB9XG4gIH1cblxufSJdfQ==