/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
export class UniqueEmailValidatorDirective {
    /**
     * @param {?} AuthenticationService
     */
    constructor(AuthenticationService) {
        this.AuthenticationService = AuthenticationService;
    }
    /**
     * @param {?} formControl
     * @return {?}
     */
    validate(formControl) {
        const /** @type {?} */ message = {
            'unique': {
                'message': 'This email address is already registered.'
            }
        };
        // check if email is unique
        return this.AuthenticationService.validateEmail(formControl.value, this.userId).toPromise().then((response) => {
            if (response.valid) {
                return null;
            }
            else {
                return message;
            }
        });
    }
}
UniqueEmailValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uniqueEmail]',
                providers: [
                    AuthenticationService,
                    { provide: NG_ASYNC_VALIDATORS,
                        useExisting: UniqueEmailValidatorDirective,
                        multi: true }
                ]
            },] },
];
/** @nocollapse */
UniqueEmailValidatorDirective.ctorParameters = () => [
    { type: AuthenticationService }
];
UniqueEmailValidatorDirective.propDecorators = {
    userId: [{ type: Input, args: ['uniqueEmail',] }]
};
function UniqueEmailValidatorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    UniqueEmailValidatorDirective.prototype.userId;
    /** @type {?} */
    UniqueEmailValidatorDirective.prototype.AuthenticationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWVtYWlsLXZhbGlkYXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2FwZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3ZhbGlkYXRvcnMvdW5pcXVlLWVtYWlsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBNEMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQVkzRSxNQUFNOzs7O0lBRUosWUFDVTtRQUFBLDBCQUFxQixHQUFyQixxQkFBcUI7S0FBNEI7Ozs7O0lBTTNELFFBQVEsQ0FBRSxXQUF3QjtRQUNoQyx1QkFBTSxPQUFPLEdBQUc7WUFDZCxRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLDJDQUEyQzthQUN2RDtTQUNGLENBQUM7O1FBR0YsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM1RixDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ1gsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDaEI7U0FDRixDQUNGLENBQUM7S0FDTDs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsU0FBUyxFQUFFO29CQUNULHFCQUFxQjtvQkFDckIsRUFBQyxPQUFPLEVBQUMsbUJBQW1CO3dCQUMzQixXQUFXLEVBQUUsNkJBQTZCO3dCQUMxQyxLQUFLLEVBQUUsSUFBSSxFQUFDO2lCQUNaO2FBQ0o7Ozs7WUFWUSxxQkFBcUI7OztxQkFtQjNCLEtBQUssU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdW5pcXVlRW1haWxdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHtwcm92aWRlOk5HX0FTWU5DX1ZBTElEQVRPUlMsIFxuICAgICB1c2VFeGlzdGluZzogVW5pcXVlRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUsIFxuICAgICBtdWx0aTogdHJ1ZX1cbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVW5pcXVlRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgQXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIC8vIGdldCB0aGUgdmFsdWUgYXBwbGllZCB0byB0aGUgdW5pcXVlRW1haWwgYXR0cmlidXRlIFxuICAvLyB0aGlzIGlzIGdvaW5nIHRvIGJlIHRoZSB1c2VyIGlkIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgdW5pcXVlIGVtYWlsIGNoZWNrXG4gIEBJbnB1dCgndW5pcXVlRW1haWwnKSB1c2VySWQ6IHN0cmluZztcblxuICB2YWxpZGF0ZSggZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sICk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAndW5pcXVlJzoge1xuICAgICAgICAnbWVzc2FnZSc6ICdUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSByZWdpc3RlcmVkLidcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gY2hlY2sgaWYgZW1haWwgaXMgdW5pcXVlXG4gICAgcmV0dXJuIHRoaXMuQXV0aGVudGljYXRpb25TZXJ2aWNlLnZhbGlkYXRlRW1haWwoZm9ybUNvbnRyb2wudmFsdWUsIHRoaXMudXNlcklkKS50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIHJlc3BvbnNlLnZhbGlkICkgeyBcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxufSJdfQ==