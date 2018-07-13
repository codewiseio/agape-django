/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
var UniqueEmailValidatorDirective = /** @class */ (function () {
    function UniqueEmailValidatorDirective(AuthenticationService) {
        this.AuthenticationService = AuthenticationService;
    }
    /**
     * @param {?} formControl
     * @return {?}
     */
    UniqueEmailValidatorDirective.prototype.validate = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        var /** @type {?} */ message = {
            'unique': {
                'message': 'This email address is already registered.'
            }
        };
        // check if email is unique
        return this.AuthenticationService.validateEmail(formControl.value, this.userId).toPromise().then(function (response) {
            if (response.valid) {
                return null;
            }
            else {
                return message;
            }
        });
    };
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
    UniqueEmailValidatorDirective.ctorParameters = function () { return [
        { type: AuthenticationService }
    ]; };
    UniqueEmailValidatorDirective.propDecorators = {
        userId: [{ type: Input, args: ['uniqueEmail',] }]
    };
    return UniqueEmailValidatorDirective;
}());
export { UniqueEmailValidatorDirective };
function UniqueEmailValidatorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    UniqueEmailValidatorDirective.prototype.userId;
    /** @type {?} */
    UniqueEmailValidatorDirective.prototype.AuthenticationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWVtYWlsLXZhbGlkYXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2FwZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3ZhbGlkYXRvcnMvdW5pcXVlLWVtYWlsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBNEMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUFjekUsdUNBQ1U7UUFBQSwwQkFBcUIsR0FBckIscUJBQXFCO0tBQTRCOzs7OztJQU0zRCxnREFBUTs7OztJQUFSLFVBQVUsV0FBd0I7UUFDaEMscUJBQU0sT0FBTyxHQUFHO1lBQ2QsUUFBUSxFQUFFO2dCQUNSLFNBQVMsRUFBRSwyQ0FBMkM7YUFDdkQ7U0FDRixDQUFDOztRQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDNUYsVUFBQyxRQUFRO1lBQ1AsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDaEI7U0FDRixDQUNGLENBQUM7S0FDTDs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsU0FBUyxFQUFFO3dCQUNULHFCQUFxQjt3QkFDckIsRUFBQyxPQUFPLEVBQUMsbUJBQW1COzRCQUMzQixXQUFXLEVBQUUsNkJBQTZCOzRCQUMxQyxLQUFLLEVBQUUsSUFBSSxFQUFDO3FCQUNaO2lCQUNKOzs7O2dCQVZRLHFCQUFxQjs7O3lCQW1CM0IsS0FBSyxTQUFDLGFBQWE7O3dDQXJCdEI7O1NBY2EsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdW5pcXVlRW1haWxdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHtwcm92aWRlOk5HX0FTWU5DX1ZBTElEQVRPUlMsIFxuICAgICB1c2VFeGlzdGluZzogVW5pcXVlRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUsIFxuICAgICBtdWx0aTogdHJ1ZX1cbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVW5pcXVlRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgQXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIC8vIGdldCB0aGUgdmFsdWUgYXBwbGllZCB0byB0aGUgdW5pcXVlRW1haWwgYXR0cmlidXRlIFxuICAvLyB0aGlzIGlzIGdvaW5nIHRvIGJlIHRoZSB1c2VyIGlkIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgdW5pcXVlIGVtYWlsIGNoZWNrXG4gIEBJbnB1dCgndW5pcXVlRW1haWwnKSB1c2VySWQ6IHN0cmluZztcblxuICB2YWxpZGF0ZSggZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sICk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAndW5pcXVlJzoge1xuICAgICAgICAnbWVzc2FnZSc6ICdUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSByZWdpc3RlcmVkLidcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gY2hlY2sgaWYgZW1haWwgaXMgdW5pcXVlXG4gICAgcmV0dXJuIHRoaXMuQXV0aGVudGljYXRpb25TZXJ2aWNlLnZhbGlkYXRlRW1haWwoZm9ybUNvbnRyb2wudmFsdWUsIHRoaXMudXNlcklkKS50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIHJlc3BvbnNlLnZhbGlkICkgeyBcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxufSJdfQ==