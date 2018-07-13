/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
var ConfirmPasswordDialogComponent = /** @class */ (function () {
    function ConfirmPasswordDialogComponent() {
        this.model = {};
    }
    /**
     * @return {?}
     */
    ConfirmPasswordDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = new FormGroup({
            password: new FormControl('', []),
        });
    };
    /**
     * @return {?}
     */
    ConfirmPasswordDialogComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
    };
    ConfirmPasswordDialogComponent.decorators = [
        { type: Component, args: [{
                    template: "<form class=\"confirm-password-form\" [formGroup]=\"form\">\n\t<h2 mat-dialog-title>Confirm your password</h2>\n\t<mat-dialog-content class=\"row\">\n\t\t\t<mat-form-field class=\"col-xs-12 spacious\">\n\t\t\t\t<input matInput placeholder=\"Password\"\n\t\t\t\t\tname=\"password\" type=\"password\" formControlName=\"password\"\n\t\t\t\t\t[type]=\"showPassword ? 'text' : 'password'\"\n\t\t\t\t\t[(ngModel)]=\"model.password\" \n\t\t\t\t\trequired>\n\t\t\t\t<mat-icon class=\"toggle-display-password\" (click)=\"showPassword=!showPassword\">\n\t\t\t\t\t{{showPassword ? 'visibility_off' : 'visibility'}}\n\t\t\t\t</mat-icon>\t\t\t\t\t\t\n\t\t\t</mat-form-field>\n\t\t\n\t</mat-dialog-content>\n\n\t<mat-dialog-actions>\n\t  <button mat-button mat-dialog-close type=\"button\">Cancel</button>\n\t  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n\t  <button mat-button [mat-dialog-close]=\"model.password\" type=\"submit\">Confirm</button>\n\t</mat-dialog-actions>\n</form>\n"
                },] },
    ];
    /** @nocollapse */
    ConfirmPasswordDialogComponent.ctorParameters = function () { return []; };
    return ConfirmPasswordDialogComponent;
}());
export { ConfirmPasswordDialogComponent };
function ConfirmPasswordDialogComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfirmPasswordDialogComponent.prototype.model;
    /** @type {?} */
    ConfirmPasswordDialogComponent.prototype.form;
    /** @type {?} */
    ConfirmPasswordDialogComponent.prototype.showPassword;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdhcGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2NvbmZpcm0tcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDOztJQWlDbEU7cUJBSm9CLEVBQUU7S0FJTDs7OztJQUVqQixpREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsK0NBQU07OztJQUFOO0tBR0M7O2dCQTFDRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdnQ0FzQlg7aUJBQ0E7Ozs7eUNBM0JEOztTQTRCYSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGA8Zm9ybSBjbGFzcz1cImNvbmZpcm0tcGFzc3dvcmQtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuXHQ8aDIgbWF0LWRpYWxvZy10aXRsZT5Db25maXJtIHlvdXIgcGFzc3dvcmQ8L2gyPlxuXHQ8bWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJjb2wteHMtMTIgc3BhY2lvdXNcIj5cblx0XHRcdFx0PGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRbdHlwZV09XCJzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcblx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cIm1vZGVsLnBhc3N3b3JkXCIgXG5cdFx0XHRcdFx0cmVxdWlyZWQ+XG5cdFx0XHRcdDxtYXQtaWNvbiBjbGFzcz1cInRvZ2dsZS1kaXNwbGF5LXBhc3N3b3JkXCIgKGNsaWNrKT1cInNob3dQYXNzd29yZD0hc2hvd1Bhc3N3b3JkXCI+XG5cdFx0XHRcdFx0e3tzaG93UGFzc3dvcmQgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknfX1cblx0XHRcdFx0PC9tYXQtaWNvbj5cdFx0XHRcdFx0XHRcblx0XHRcdDwvbWF0LWZvcm0tZmllbGQ+XG5cdFx0XG5cdDwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG5cdDxtYXQtZGlhbG9nLWFjdGlvbnM+XG5cdCAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2UgdHlwZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuXHQgIDwhLS0gVGhlIG1hdC1kaWFsb2ctY2xvc2UgZGlyZWN0aXZlIG9wdGlvbmFsbHkgYWNjZXB0cyBhIHZhbHVlIGFzIGEgcmVzdWx0IGZvciB0aGUgZGlhbG9nLiAtLT5cblx0ICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwibW9kZWwucGFzc3dvcmRcIiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuXHQ8L21hdC1kaWFsb2ctYWN0aW9ucz5cbjwvZm9ybT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybVBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgbW9kZWw6IGFueSA9IHt9O1xuICAgIHB1YmxpYyBmb3JtOiBhbnk7XG4gICAgcHVibGljIHNob3dQYXNzd29yZDogYm9vbGVhbjsgLy8gZGlzcGxheSBwYXNzd29yZCB1bm9ic2N1cmVkXG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFsgXSksXG5cdFx0fSk7XG5cdH1cblxuXHRzdWJtaXQoKSB7XG5cblxuXHR9XG5cbn1cbiJdfQ==