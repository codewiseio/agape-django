/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class ConfirmPasswordValidatorDirective {
    /**
     * @param {?} confirmPassword
     * @param {?} confirmation
     */
    constructor(confirmPassword, confirmation) {
        this.confirmPassword = confirmPassword;
        this.confirmation = confirmation;
    }
    /**
     * @return {?}
     */
    get isConfirmation() {
        return this.confirmation === "true" ? true : false;
    }
    /**
     * @param {?} formControl
     * @return {?}
     */
    validate(formControl) {
        let /** @type {?} */ value = formControl.value;
        let /** @type {?} */ confirmControl = formControl.root.get(this.confirmPassword);
        const /** @type {?} */ message = {
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
    }
}
ConfirmPasswordValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[confirmPassword][formControlName],[confirmPassword][formControl],[confirmPassword][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ConfirmPasswordValidatorDirective), multi: true }
                ]
            },] },
];
/** @nocollapse */
ConfirmPasswordValidatorDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['confirmPassword',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['confirmation',] }] }
];
function ConfirmPasswordValidatorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfirmPasswordValidatorDirective.prototype.confirmPassword;
    /** @type {?} */
    ConfirmPasswordValidatorDirective.prototype.confirmation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wYXNzd29yZC12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi92YWxpZGF0b3JzL2NvbmZpcm0tcGFzc3dvcmQtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0UsTUFBTTs7Ozs7SUFDRixZQUFrRCxlQUF1QixFQUMxQixZQUFvQjtRQURqQixvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtLQUNsRTs7OztRQUVXLGNBQWM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7Ozs7O0lBR3RELFFBQVEsQ0FBQyxXQUE0QjtRQUVqQyxxQkFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM5QixxQkFBSSxjQUFjLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWhFLHVCQUFNLE9BQU8sR0FBRztZQUNkLGlCQUFpQixFQUFFO2dCQUNqQixTQUFTLEVBQUUseUJBQXlCO2FBQ3JDO1NBQ0YsQ0FBQzs7UUFHRixFQUFFLENBQUMsQ0FBRSxjQUFjLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWUsQ0FBQyxDQUFDLENBQUM7WUFDNUUsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQjs7UUFHRCxFQUFFLENBQUMsQ0FBRSxjQUFjLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBRSxJQUFJLENBQUMsY0FBZSxDQUFDLENBQUMsQ0FBQztZQUM5RSxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xGOztRQUdELEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxLQUFLLEtBQUssY0FBYyxDQUFDLEtBQUssSUFBSSxDQUFFLElBQUksQ0FBQyxjQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzdFLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBRWY7OztZQTVDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDhGQUE4RjtnQkFDeEcsU0FBUyxFQUFFO29CQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlDQUFpQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDNUc7YUFDSjs7Ozt5Q0FFaUIsU0FBUyxTQUFDLGlCQUFpQjt5Q0FDM0IsU0FBUyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2NvbmZpcm1QYXNzd29yZF1bZm9ybUNvbnRyb2xOYW1lXSxbY29uZmlybVBhc3N3b3JkXVtmb3JtQ29udHJvbF0sW2NvbmZpcm1QYXNzd29yZF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbmZpcm1QYXNzd29yZFZhbGlkYXRvckRpcmVjdGl2ZSksIG11bHRpOiB0cnVlIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1QYXNzd29yZFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IoIEBBdHRyaWJ1dGUoJ2NvbmZpcm1QYXNzd29yZCcpIHB1YmxpYyBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgQEF0dHJpYnV0ZSgnY29uZmlybWF0aW9uJykgcHVibGljIGNvbmZpcm1hdGlvbjogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaXNDb25maXJtYXRpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpcm1hdGlvbiA9PT0gXCJ0cnVlXCIgPyB0cnVlOiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShmb3JtQ29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG5cbiAgICAgICAgbGV0IHZhbHVlID0gZm9ybUNvbnRyb2wudmFsdWU7XG4gICAgICAgIGxldCBjb25maXJtQ29udHJvbCA9IGZvcm1Db250cm9sLnJvb3QuZ2V0KHRoaXMuY29uZmlybVBhc3N3b3JkKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICAgICdjb25maXJtUGFzc3dvcmQnOiB7XG4gICAgICAgICAgICAnbWVzc2FnZSc6ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoLicsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHZhbHVlIG5vdCBlcXVhbCBpcyBjb25maXJtYXRpb24gZmllbGRcbiAgICAgICAgaWYgKCBjb25maXJtQ29udHJvbCAmJiB2YWx1ZSAhPT0gY29uZmlybUNvbnRyb2wudmFsdWUgJiYgdGhpcy5pc0NvbmZpcm1hdGlvbiApIHtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsdWUgZXF1YWwgYW5kIG5vdCBjb25maXJtYXRpb24gZmllbGRcbiAgICAgICAgaWYgKCBjb25maXJtQ29udHJvbCAmJiB2YWx1ZSA9PT0gY29uZmlybUNvbnRyb2wudmFsdWUgJiYgISB0aGlzLmlzQ29uZmlybWF0aW9uICkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpcm1Db250cm9sLmVycm9yc1snY29uZmlybVBhc3N3b3JkJ107XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGNvbmZpcm1Db250cm9sLmVycm9ycykubGVuZ3RoKSBjb25maXJtQ29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIG5vdCBjb25maXJtYXRpb25cbiAgICAgICAgaWYgKGNvbmZpcm1Db250cm9sICYmIHZhbHVlICE9PSBjb25maXJtQ29udHJvbC52YWx1ZSAmJiAhIHRoaXMuaXNDb25maXJtYXRpb24gKSB7XG4gICAgICAgICAgICBjb25maXJtQ29udHJvbC5zZXRFcnJvcnMobWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH1cbn0iXX0=