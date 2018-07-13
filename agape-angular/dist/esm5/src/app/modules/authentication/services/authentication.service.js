/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
export var /** @type {?} */ TOKEN_NAME = 'authToken';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.api = environment.api;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log("AuthService loaded current user " + this.user);
    }
    /**
     * Provide the generated account activation key to enable new accounts.
     * @param  {string}          key Key sent to user via email
     * @return {Observable<any>}
     */
    /**
     * Provide the generated account activation key to enable new accounts.
     * @param {?} key
     * @return {?}
     */
    AuthenticationService.prototype.activateAccount = /**
     * Provide the generated account activation key to enable new accounts.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.patch(this.api + "/authentication/", { key: key }, { headers: headers });
    };
    /**
     * Authenticate a user using email and password.
     *
     * @param {string} email    [description]
     * @param {string} password [description]
     */
    /**
     * Authenticate a user using email and password.
     *
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    AuthenticationService.prototype.login = /**
     * Authenticate a user using email and password.
     *
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    function (email, password) {
        var _this = this;
        var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        var /** @type {?} */ data = { email: email, password: password };
        return this.http
            .post(this.api + "/authentication/", data, { headers: headers })
            .toPromise()
            .then(function (response) {
            // login successful if there's a jwt token in the response
            console.log('Login successful');
            // set the user/token variables
            // set the user/token variables
            _this.user = response.user;
            _this.token = response.token;
            // store the user in the local storage
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            localStorage.setItem(TOKEN_NAME, response.token);
            return /** @type {?} */ (response);
        });
    };
    /**
     * Log out the current user.
     */
    /**
     * Log out the current user.
     * @return {?}
     */
    AuthenticationService.prototype.logout = /**
     * Log out the current user.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // perform api call
        return this.http
            .delete(this.api + "/authentication/")
            .toPromise()
            .then(function (response) {
            console.log('Logout successful');
            // unset the user/token variables
            // unset the user/token variables
            _this.user = null;
            _this.token = null;
            // remove the user from local storage
            localStorage.removeItem('currentUser');
            localStorage.removeItem(TOKEN_NAME);
            return response;
        });
    };
    /**
     * Edit a users login information.
     *
     * Accepts changes to 'email' and 'password'. Must confirm password with
     * 'confirm' password for changes to be accepted.
     *
     * @param {number}   userId ID of User record to update
     * @param {object}   data   Object containing 'email' or 'password', and obligatory 'confirm_password' fields
     */
    /**
     * Edit a users login information.
     *
     * Accepts changes to 'email' and 'password'. Must confirm password with
     * 'confirm' password for changes to be accepted.
     *
     * @param {?} userId
     * @param {?} data
     * @return {?}
     */
    AuthenticationService.prototype.modifyCredentials = /**
     * Edit a users login information.
     *
     * Accepts changes to 'email' and 'password'. Must confirm password with
     * 'confirm' password for changes to be accepted.
     *
     * @param {?} userId
     * @param {?} data
     * @return {?}
     */
    function (userId, data) {
        var _this = this;
        // remove a blank password if the key is supplied
        if ('password' in data && !data.password) {
            delete data['password'];
        }
        var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .patch(this.api + "/users/" + userId + "/", data, { headers: headers })
            .toPromise()
            .then(function (response) {
            // login successful if there's a jwt token in the response
            console.log('Credentials modified.');
            // update the user variable
            // update the user variable
            _this.user = response;
            // update the user in the local storage
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            return response;
        });
    };
    /**
     * Register a new user
     * @param  {User}    user The user data for registration
     * @return {Promise}
     */
    /**
     * Register a new user
     * @param {?} user
     * @return {?}
     */
    AuthenticationService.prototype.register = /**
     * Register a new user
     * @param {?} user
     * @return {?}
     */
    function (user) {
        var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.api + "/users/", user, { headers: headers })
            .toPromise()
            .then(function (response) { return (response); });
    };
    /**
     * Reset a user's password using the unique key sent to them via email.
     *
     * @param {string} key  The key which allows the password reset
     * @param {string} password  The new password to use
     * @return {Observable<any>}
     */
    /**
     * Reset a user's password using the unique key sent to them via email.
     *
     * @param {?} key
     * @param {?} password
     * @return {?}
     */
    AuthenticationService.prototype.resetPassword = /**
     * Reset a user's password using the unique key sent to them via email.
     *
     * @param {?} key
     * @param {?} password
     * @return {?}
     */
    function (key, password) {
        var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .patch(this.api + "/authentication/password/" + key + "/", { password: password }, { headers: headers });
    };
    /**
     * Send a password reset link to the specified email
     *
     * @param  {string}          email Email to send password reset link
     * @return {Observable<any>}
     */
    /**
     * Send a password reset link to the specified email
     *
     * @param {?} email
     * @return {?}
     */
    AuthenticationService.prototype.resetPasswordRequest = /**
     * Send a password reset link to the specified email
     *
     * @param {?} email
     * @return {?}
     */
    function (email) {
        return this.http
            .post(this.api + "/authentication/password/", { email: email });
    };
    /**
     * Poll the server to confirm that an email is valid and unique.
     *
     * You can optionally specify a user id. If the supplied email belongs
     * to this user, the email will not be flagged as invalid for being
     * in use.
     *
     * Returns { valid: true } if email is valid
     * Returns { valid: false } if email is not valid
     *
     *
     * @param  {string}          email  Email to test
     * @param  {number}          userid Returns true if the email is
     * @return {Observable<any>}        [description]
     */
    /**
     * Poll the server to confirm that an email is valid and unique.
     *
     * You can optionally specify a user id. If the supplied email belongs
     * to this user, the email will not be flagged as invalid for being
     * in use.
     *
     * Returns { valid: true } if email is valid
     * Returns { valid: false } if email is not valid
     *
     *
     * @param {?} email
     * @param {?=} userid
     * @return {?}
     */
    AuthenticationService.prototype.validateEmail = /**
     * Poll the server to confirm that an email is valid and unique.
     *
     * You can optionally specify a user id. If the supplied email belongs
     * to this user, the email will not be flagged as invalid for being
     * in use.
     *
     * Returns { valid: true } if email is valid
     * Returns { valid: false } if email is not valid
     *
     *
     * @param {?} email
     * @param {?=} userid
     * @return {?}
     */
    function (email, userid) {
        var /** @type {?} */ params = new HttpParams().set('email', email);
        if (userid)
            params = params.set('userid', userid);
        return this.http.get(this.api + "/authentication/email/", { params: params });
    };
    /**
     * Validate a password reset request.
     *
     * When a user arrives to the password reset page via the provided link,
     * we perform validation on the reset password key to check if the link
     * is valid, expired, or already been used.
     *
     * @param  {string}          key Unique key to validate
     * @return {Observable<any>}
     */
    /**
     * Validate a password reset request.
     *
     * When a user arrives to the password reset page via the provided link,
     * we perform validation on the reset password key to check if the link
     * is valid, expired, or already been used.
     *
     * @param {?} key
     * @return {?}
     */
    AuthenticationService.prototype.validateResetPasswordRequest = /**
     * Validate a password reset request.
     *
     * When a user arrives to the password reset page via the provided link,
     * we perform validation on the reset password key to check if the link
     * is valid, expired, or already been used.
     *
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.http
            .get(this.api + "/authentication/password/" + key + "/");
    };
    AuthenticationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return AuthenticationService;
}());
export { AuthenticationService };
function AuthenticationService_tsickle_Closure_declarations() {
    /** @type {?} */
    AuthenticationService.prototype.api;
    /** @type {?} */
    AuthenticationService.prototype.user;
    /** @type {?} */
    AuthenticationService.prototype.token;
    /** @type {?} */
    AuthenticationService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRyxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbkUsTUFBTSxDQUFDLHFCQUFNLFVBQVUsR0FBVyxXQUFXLENBQUM7O0lBVTVDLCtCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO21CQUx6QixXQUFXLENBQUMsR0FBRztRQU14QixJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQW1DLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztLQUM3RDtJQUdEOzs7O09BSUc7Ozs7OztJQUNILCtDQUFlOzs7OztJQUFmLFVBQWdCLEdBQVc7UUFDekIscUJBQUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLEdBQUcscUJBQWtCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUUsQ0FBQztLQUMzRjtJQUdEOzs7OztPQUtHOzs7Ozs7OztJQUNILHFDQUFLOzs7Ozs7O0lBQUwsVUFBTSxLQUFhLEVBQUUsUUFBZ0I7UUFBckMsaUJBdUJDO1FBckJHLHFCQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDdEUscUJBQUksSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFFaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFJLElBQUksQ0FBQyxHQUFHLHFCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBRTthQUM3RCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQ0gsVUFBQyxRQUFhOztZQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7WUFHaEMsQUFEQSwrQkFBK0I7WUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7WUFHNUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvRCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0MsTUFBTSxtQkFBQyxRQUFnQixFQUFDO1NBQzFCLENBQ0QsQ0FBQTtLQUNWO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsc0NBQU07Ozs7SUFBTjtRQUFBLGlCQXVCQztRQXJCRyxxQkFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDOztRQUd0RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixNQUFNLENBQUksSUFBSSxDQUFDLEdBQUcscUJBQWtCLENBQUU7YUFDbkMsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUNILFVBQUMsUUFBYTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7WUFHakMsQUFEQSxpQ0FBaUM7WUFDakMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1lBR2xCLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUVuQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2xCLENBQ0QsQ0FBQTtLQUNWO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7O0lBQ0gsaURBQWlCOzs7Ozs7Ozs7O0lBQWpCLFVBQWtCLE1BQWMsRUFBRSxJQUFvRTtRQUF0RyxpQkF5QkM7O1FBdEJHLEVBQUUsQ0FBQyxDQUFFLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBRSxJQUFJLENBQUMsUUFBUyxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6QjtRQUVELHFCQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsS0FBSyxDQUFJLElBQUksQ0FBQyxHQUFHLGVBQVUsTUFBTSxNQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFFO2FBQ2pFLFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSixVQUFDLFFBQWE7O1lBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztZQUdyQyxBQURBLDJCQUEyQjtZQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzs7WUFHckIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUUvRCxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2xCLENBQ0QsQ0FBQztLQUNQO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0gsd0NBQVE7Ozs7O0lBQVIsVUFBUyxJQUFVO1FBRWYscUJBQUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUV0RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQUksSUFBSSxDQUFDLEdBQUcsWUFBUyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBRTthQUNwRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxRQUFRLFlBQUksUUFBa0IsSUFBQSxDQUFDLENBQUE7S0FDN0M7SUFHRDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsNkNBQWE7Ozs7Ozs7SUFBYixVQUFjLEdBQVcsRUFBRSxRQUFnQjtRQUN6QyxxQkFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBRXRFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNiLEtBQUssQ0FBSSxJQUFJLENBQUMsR0FBRyxpQ0FBNEIsR0FBRyxNQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLEVBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUUsQ0FBQztLQUN2RztJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0gsb0RBQW9COzs7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWixJQUFJLENBQUksSUFBSSxDQUFDLEdBQUcsOEJBQTJCLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNyRTtJQUdEOzs7Ozs7Ozs7Ozs7OztPQWNHOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsNkNBQWE7Ozs7Ozs7Ozs7Ozs7OztJQUFiLFVBQWMsS0FBYSxFQUFFLE1BQWU7UUFDMUMscUJBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUUsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBRSxNQUFPLENBQUM7WUFDVixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLDJCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFHLENBQUM7S0FDakY7SUFFRDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7O0lBQ0gsNERBQTRCOzs7Ozs7Ozs7O0lBQTVCLFVBQTZCLEdBQVc7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLGlDQUE0QixHQUFHLE1BQUcsQ0FBQyxDQUFDO0tBQ3pEOztnQkF0TUYsVUFBVTs7OztnQkFSRixVQUFVOztnQ0FIbkI7O1NBWWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBjb25zdCBUT0tFTl9OQU1FOiBzdHJpbmcgPSAnYXV0aFRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG5cbiAgYXBpOiBhbnkgPSBlbnZpcm9ubWVudC5hcGk7XG4gIHVzZXI6IFVzZXI7XG4gIHRva2VuOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQgKSB7IFxuICAgIHRoaXMudXNlciA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcblxuICAgIGNvbnNvbGUubG9nKGBBdXRoU2VydmljZSBsb2FkZWQgY3VycmVudCB1c2VyICR7dGhpcy51c2VyfWApO1xuICB9XG5cblxuICAvKipcbiAgICogUHJvdmlkZSB0aGUgZ2VuZXJhdGVkIGFjY291bnQgYWN0aXZhdGlvbiBrZXkgdG8gZW5hYmxlIG5ldyBhY2NvdW50cy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICBrZXkgS2V5IHNlbnQgdG8gdXNlciB2aWEgZW1haWxcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSAgIFxuICAgKi9cbiAgYWN0aXZhdGVBY2NvdW50KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLmFwaX0vYXV0aGVudGljYXRpb24vYCwgeyBrZXk6IGtleSB9LCB7IGhlYWRlcnM6IGhlYWRlcnN9ICk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGUgYSB1c2VyIHVzaW5nIGVtYWlsIGFuZCBwYXNzd29yZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsICAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcblxuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgbGV0IGRhdGEgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLnBvc3QoYCR7dGhpcy5hcGl9L2F1dGhlbnRpY2F0aW9uL2AsIGRhdGEsIHsgaGVhZGVyczogaGVhZGVycyB9IClcbiAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbG9naW4gc3VjY2Vzc2Z1bCBpZiB0aGVyZSdzIGEgand0IHRva2VuIGluIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHVzZXIvdG9rZW4gdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UudXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gcmVzcG9uc2UudG9rZW47XG5cbiAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgdXNlciBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOX05BTUUscmVzcG9uc2UudG9rZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlIGFzIFVzZXI7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIExvZyBvdXQgdGhlIGN1cnJlbnQgdXNlci5cbiAgICovXG4gIGxvZ291dCgpIHtcblxuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgICAvLyBwZXJmb3JtIGFwaSBjYWxsXG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5kZWxldGUoYCR7dGhpcy5hcGl9L2F1dGhlbnRpY2F0aW9uL2AgKVxuICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9nb3V0IHN1Y2Nlc3NmdWwnKTtcblxuICAgICAgICAgICAgICAgIC8vIHVuc2V0IHRoZSB1c2VyL3Rva2VuIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHVzZXIgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fTkFNRSlcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gIH1cblxuICAvKipcbiAgICogRWRpdCBhIHVzZXJzIGxvZ2luIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBBY2NlcHRzIGNoYW5nZXMgdG8gJ2VtYWlsJyBhbmQgJ3Bhc3N3b3JkJy4gTXVzdCBjb25maXJtIHBhc3N3b3JkIHdpdGggXG4gICAqICdjb25maXJtJyBwYXNzd29yZCBmb3IgY2hhbmdlcyB0byBiZSBhY2NlcHRlZC5cbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgIHVzZXJJZCBJRCBvZiBVc2VyIHJlY29yZCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9ICAgZGF0YSAgIE9iamVjdCBjb250YWluaW5nICdlbWFpbCcgb3IgJ3Bhc3N3b3JkJywgYW5kIG9ibGlnYXRvcnkgJ2NvbmZpcm1fcGFzc3dvcmQnIGZpZWxkc1xuICAgKi9cbiAgbW9kaWZ5Q3JlZGVudGlhbHModXNlcklkOiBudW1iZXIsIGRhdGE6IHsgZW1haWw/OiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nLCBjb25maXJtX3Bhc3N3b3JkOiBzdHJpbmd9KSB7XG5cbiAgICAgIC8vIHJlbW92ZSBhIGJsYW5rIHBhc3N3b3JkIGlmIHRoZSBrZXkgaXMgc3VwcGxpZWRcbiAgICAgIGlmICggJ3Bhc3N3b3JkJyBpbiBkYXRhICYmICEgZGF0YS5wYXNzd29yZCApIHtcbiAgICAgICAgZGVsZXRlIGRhdGFbJ3Bhc3N3b3JkJ107XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLnBhdGNoKGAke3RoaXMuYXBpfS91c2Vycy8ke3VzZXJJZH0vYCwgZGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzfSApXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbihcbiAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlZGVudGlhbHMgbW9kaWZpZWQuJyk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdXNlciB2YXJpYWJsZVxuICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdXNlciBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAqIEBwYXJhbSAge1VzZXJ9ICAgIHVzZXIgVGhlIHVzZXIgZGF0YSBmb3IgcmVnaXN0cmF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgXG4gICAqL1xuICByZWdpc3Rlcih1c2VyOiBVc2VyKTogUHJvbWlzZTx2b2lkIHwgVXNlcltdPiB7XG5cbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAucG9zdChgJHt0aGlzLmFwaX0vdXNlcnMvYCwgdXNlciwgeyBoZWFkZXJzOiBoZWFkZXJzIH0gKVxuICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UgYXMgVXNlcltdKVxuICB9XG5cblxuICAvKipcbiAgICogUmVzZXQgYSB1c2VyJ3MgcGFzc3dvcmQgdXNpbmcgdGhlIHVuaXF1ZSBrZXkgc2VudCB0byB0aGVtIHZpYSBlbWFpbC5cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgIFRoZSBrZXkgd2hpY2ggYWxsb3dzIHRoZSBwYXNzd29yZCByZXNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgIFRoZSBuZXcgcGFzc3dvcmQgdG8gdXNlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gIFxuICAgKi9cbiAgcmVzZXRQYXNzd29yZChrZXk6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKGAke3RoaXMuYXBpfS9hdXRoZW50aWNhdGlvbi9wYXNzd29yZC8ke2tleX0vYCwge3Bhc3N3b3JkOiBwYXNzd29yZH0sICB7IGhlYWRlcnM6IGhlYWRlcnMgfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwYXNzd29yZCByZXNldCBsaW5rIHRvIHRoZSBzcGVjaWZpZWQgZW1haWxcbiAgICogXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgZW1haWwgRW1haWwgdG8gc2VuZCBwYXNzd29yZCByZXNldCBsaW5rXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gICAgICAgXG4gICAqL1xuICByZXNldFBhc3N3b3JkUmVxdWVzdChlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBcdHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLnBvc3QoYCR7dGhpcy5hcGl9L2F1dGhlbnRpY2F0aW9uL3Bhc3N3b3JkL2AsIHsgZW1haWw6IGVtYWlsIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogUG9sbCB0aGUgc2VydmVyIHRvIGNvbmZpcm0gdGhhdCBhbiBlbWFpbCBpcyB2YWxpZCBhbmQgdW5pcXVlLlxuICAgKlxuICAgKiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhIHVzZXIgaWQuIElmIHRoZSBzdXBwbGllZCBlbWFpbCBiZWxvbmdzXG4gICAqIHRvIHRoaXMgdXNlciwgdGhlIGVtYWlsIHdpbGwgbm90IGJlIGZsYWdnZWQgYXMgaW52YWxpZCBmb3IgYmVpbmdcbiAgICogaW4gdXNlLiBcbiAgICpcbiAgICogUmV0dXJucyB7IHZhbGlkOiB0cnVlIH0gaWYgZW1haWwgaXMgdmFsaWRcbiAgICogUmV0dXJucyB7IHZhbGlkOiBmYWxzZSB9IGlmIGVtYWlsIGlzIG5vdCB2YWxpZFxuICAgKlxuICAgKiBcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICBlbWFpbCAgRW1haWwgdG8gdGVzdFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgIHVzZXJpZCBSZXR1cm5zIHRydWUgaWYgdGhlIGVtYWlsIGlzIFxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59ICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB2YWxpZGF0ZUVtYWlsKGVtYWlsOiBzdHJpbmcsIHVzZXJpZD86IHN0cmluZyApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnZW1haWwnLCBlbWFpbCApO1xuICAgIGlmICggdXNlcmlkIClcbiAgICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCd1c2VyaWQnLCB1c2VyaWQgKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmFwaX0vYXV0aGVudGljYXRpb24vZW1haWwvYCwgeyBwYXJhbXM6IHBhcmFtcyB9ICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGEgcGFzc3dvcmQgcmVzZXQgcmVxdWVzdC4gXG4gICAqXG4gICAqIFdoZW4gYSB1c2VyIGFycml2ZXMgdG8gdGhlIHBhc3N3b3JkIHJlc2V0IHBhZ2UgdmlhIHRoZSBwcm92aWRlZCBsaW5rLCBcbiAgICogd2UgcGVyZm9ybSB2YWxpZGF0aW9uIG9uIHRoZSByZXNldCBwYXNzd29yZCBrZXkgdG8gY2hlY2sgaWYgdGhlIGxpbmtcbiAgICogaXMgdmFsaWQsIGV4cGlyZWQsIG9yIGFscmVhZHkgYmVlbiB1c2VkLlxuICAgKiBcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICBrZXkgVW5pcXVlIGtleSB0byB2YWxpZGF0ZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59ICAgICBcbiAgICovXG4gIHZhbGlkYXRlUmVzZXRQYXNzd29yZFJlcXVlc3Qoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldChgJHt0aGlzLmFwaX0vYXV0aGVudGljYXRpb24vcGFzc3dvcmQvJHtrZXl9L2ApO1xuICB9XG5cbn1cbiJdfQ==