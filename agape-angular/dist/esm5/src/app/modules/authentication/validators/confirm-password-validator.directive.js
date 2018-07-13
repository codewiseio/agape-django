/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var ConfirmPasswordValidatorDirective = /** @class */ (function () {
    function ConfirmPasswordValidatorDirective(confirmPassword, confirmation) {
        this.confirmPassword = confirmPassword;
        this.confirmation = confirmation;
    }
    Object.defineProperty(ConfirmPasswordValidatorDirective.prototype, "isConfirmation", {
        get: /**
         * @return {?}
         */
        function () {
            return this.confirmation === "true" ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} formControl
     * @return {?}
     */
    ConfirmPasswordValidatorDirective.prototype.validate = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        var /** @type {?} */ value = formControl.value;
        var /** @type {?} */ confirmControl = formControl.root.get(this.confirmPassword);
        var /** @type {?} */ message = {
            'confirmPassword': {
                'message': 'Passwords do not match.',
            }
        };
        // value not equal is confirmation field
        if (confirmControl && value !== confirmControl.value && this.isConfirmation) {
            return message;
        }
        // value equal and not confirmation field
        if (confirmControl && value === confirmControl.value && !this.isConfirmation) {
            delete confirmControl.errors['confirmPassword'];
            if (!Object.keys(confirmControl.errors).length)
                confirmControl.setErrors(null);
        }
        // value not equal and not confirmation
        if (confirmControl && value !== confirmControl.value && !this.isConfirmation) {
            confirmControl.setErrors(message);
        }
        return null;
    };
    ConfirmPasswordValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[confirmPassword][formControlName],[confirmPassword][formControl],[confirmPassword][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return ConfirmPasswordValidatorDirective; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    ConfirmPasswordValidatorDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['confirmPassword',] }] },
        { type: String, decorators: [{ type: Attribute, args: ['confirmation',] }] }
    ]; };
    return ConfirmPasswordValidatorDirective;
}());
export { ConfirmPasswordValidatorDirective };
function ConfirmPasswordValidatorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfirmPasswordValidatorDirective.prototype.confirmPassword;
    /** @type {?} */
    ConfirmPasswordValidatorDirective.prototype.confirmation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wYXNzd29yZC12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi92YWxpZGF0b3JzL2NvbmZpcm0tcGFzc3dvcmQtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBUXZFLDJDQUFrRCxlQUF1QixFQUMxQixZQUFvQjtRQURqQixvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtLQUNsRTswQkFFVyw2REFBYzs7Ozs7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7O0lBR3RELG9EQUFROzs7O0lBQVIsVUFBUyxXQUE0QjtRQUVqQyxxQkFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM5QixxQkFBSSxjQUFjLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWhFLHFCQUFNLE9BQU8sR0FBRztZQUNkLGlCQUFpQixFQUFFO2dCQUNqQixTQUFTLEVBQUUseUJBQXlCO2FBQ3JDO1NBQ0YsQ0FBQzs7UUFHRixFQUFFLENBQUMsQ0FBRSxjQUFjLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWUsQ0FBQyxDQUFDLENBQUM7WUFDNUUsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQjs7UUFHRCxFQUFFLENBQUMsQ0FBRSxjQUFjLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBRSxJQUFJLENBQUMsY0FBZSxDQUFDLENBQUMsQ0FBQztZQUM5RSxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xGOztRQUdELEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxLQUFLLEtBQUssY0FBYyxDQUFDLEtBQUssSUFBSSxDQUFFLElBQUksQ0FBQyxjQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzdFLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBRWY7O2dCQTVDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDhGQUE4RjtvQkFDeEcsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQ0FBaUMsRUFBakMsQ0FBaUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQzVHO2lCQUNKOzs7OzZDQUVpQixTQUFTLFNBQUMsaUJBQWlCOzZDQUMzQixTQUFTLFNBQUMsY0FBYzs7NENBWDFDOztTQVNhLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY29uZmlybVBhc3N3b3JkXVtmb3JtQ29udHJvbE5hbWVdLFtjb25maXJtUGFzc3dvcmRdW2Zvcm1Db250cm9sXSxbY29uZmlybVBhc3N3b3JkXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29uZmlybVBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlKSwgbXVsdGk6IHRydWUgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybVBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgnY29uZmlybVBhc3N3b3JkJykgcHVibGljIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICBAQXR0cmlidXRlKCdjb25maXJtYXRpb24nKSBwdWJsaWMgY29uZmlybWF0aW9uOiBzdHJpbmcpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBpc0NvbmZpcm1hdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlybWF0aW9uID09PSBcInRydWVcIiA/IHRydWU6IGZhbHNlO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKGZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcblxuICAgICAgICBsZXQgdmFsdWUgPSBmb3JtQ29udHJvbC52YWx1ZTtcbiAgICAgICAgbGV0IGNvbmZpcm1Db250cm9sID0gZm9ybUNvbnRyb2wucm9vdC5nZXQodGhpcy5jb25maXJtUGFzc3dvcmQpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IHtcbiAgICAgICAgICAgICdtZXNzYWdlJzogJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdmFsdWUgbm90IGVxdWFsIGlzIGNvbmZpcm1hdGlvbiBmaWVsZFxuICAgICAgICBpZiAoIGNvbmZpcm1Db250cm9sICYmIHZhbHVlICE9PSBjb25maXJtQ29udHJvbC52YWx1ZSAmJiB0aGlzLmlzQ29uZmlybWF0aW9uICkge1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWx1ZSBlcXVhbCBhbmQgbm90IGNvbmZpcm1hdGlvbiBmaWVsZFxuICAgICAgICBpZiAoIGNvbmZpcm1Db250cm9sICYmIHZhbHVlID09PSBjb25maXJtQ29udHJvbC52YWx1ZSAmJiAhIHRoaXMuaXNDb25maXJtYXRpb24gKSB7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlybUNvbnRyb2wuZXJyb3JzWydjb25maXJtUGFzc3dvcmQnXTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoY29uZmlybUNvbnRyb2wuZXJyb3JzKS5sZW5ndGgpIGNvbmZpcm1Db250cm9sLnNldEVycm9ycyhudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgbm90IGNvbmZpcm1hdGlvblxuICAgICAgICBpZiAoY29uZmlybUNvbnRyb2wgJiYgdmFsdWUgIT09IGNvbmZpcm1Db250cm9sLnZhbHVlICYmICEgdGhpcy5pc0NvbmZpcm1hdGlvbiApIHtcbiAgICAgICAgICAgIGNvbmZpcm1Db250cm9sLnNldEVycm9ycyhtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfVxufSJdfQ==