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
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    /**
     * @return {?}
     */
    AuthenticationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AuthenticationModule,
            providers: [AuthenticationService]
        };
    };
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
    return AuthenticationModule;
}());
export { AuthenticationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBUSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQVMsZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGVBQWUsRUFDZixhQUFhLEVBQ2IsY0FBYyxFQUNkLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNsQixNQUFNLG1CQUFtQixDQUFDO0FBRzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFOUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFaEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUEwRHJELDRCQUFPOzs7SUFBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUUscUJBQXFCLENBQUU7U0FDckMsQ0FBQTtLQUNGOztnQkE3REYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBRW5CLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUVqQiwyQkFBMkI7cUJBQzVCO29CQUNELFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsNkJBQTZCO3dCQUM3Qix1QkFBdUI7d0JBQ3ZCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZiwwQkFBMEI7d0JBQzFCLDhCQUE4Qjt3QkFDOUIsaUNBQWlDO3dCQUNqQyw2QkFBNkI7cUJBQzlCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsNkJBQTZCO3dCQUM3Qix1QkFBdUI7d0JBQ3ZCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZiwwQkFBMEI7d0JBQzFCLDhCQUE4Qjt3QkFDOUIsaUNBQWlDO3dCQUNqQyw2QkFBNkI7cUJBQzlCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxxQkFBcUI7O3dCQUdyQjs0QkFDRSxPQUFPLEVBQUUsY0FBYzs0QkFDdkIsUUFBUSxFQUFFLGtCQUFrQjt5QkFDN0I7cUJBQ0Y7b0JBQ0QsZUFBZSxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBRWxEOzsrQkF6RkQ7O1NBMEZhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyQWN0aXZhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2VyLWFjdGl2YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RpZnlDcmVkZW50aWFsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RpZnktY3JlZGVudGlhbHMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb25maXJtUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVW5pcXVlRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL3ZhbGlkYXRvcnMvdW5pcXVlLWVtYWlsLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi92YWxpZGF0b3JzL2NvbmZpcm0tcGFzc3dvcmQtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEF1dGhSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24tcmVxdWVzdCc7XG4gXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG5cbiAgICBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQsXG4gICAgVXNlckFjdGl2YXRpb25Db21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgTG9nb3V0Q29tcG9uZW50LFxuICAgIE1vZGlmeUNyZWRlbnRpYWxzQ29tcG9uZW50LFxuICAgIENvbmZpcm1QYXNzd29yZERpYWxvZ0NvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmRWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgVW5pcXVlRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50LFxuICAgIFVzZXJBY3RpdmF0aW9uQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIExvZ291dENvbXBvbmVudCxcbiAgICBNb2RpZnlDcmVkZW50aWFsc0NvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmREaWFsb2dDb21wb25lbnQsXG4gICAgQ29uZmlybVBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIFVuaXF1ZUVtYWlsVmFsaWRhdG9yRGlyZWN0aXZlLFxuICBdLFxuICBwcm92aWRlcnM6IFsgXG4gICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuXG4gICAgLyogQWRkcyB0aGUgQXV0aG9yaXphdGlvbjogQmVhcmVyIHh4eHh4IGh0dHAgaGVhZGVyIHRvIGV2ZXJ5IHJlcXVlc3QgKi9cbiAgICB7XG4gICAgICBwcm92aWRlOiBSZXF1ZXN0T3B0aW9ucywgXG4gICAgICB1c2VDbGFzczogQXV0aFJlcXVlc3RPcHRpb25zXG4gICAgfVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb25maXJtUGFzc3dvcmREaWFsb2dDb21wb25lbnRdXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBdXRoZW50aWNhdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWyBBdXRoZW50aWNhdGlvblNlcnZpY2UgXVxuICAgIH1cbiAgfVxuXG59Il19