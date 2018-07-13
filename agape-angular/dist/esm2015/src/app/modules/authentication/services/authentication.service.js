/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
export const /** @type {?} */ TOKEN_NAME = 'authToken';
export class AuthenticationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.api = environment.api;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(`AuthService loaded current user ${this.user}`);
    }
    /**
     * Provide the generated account activation key to enable new accounts.
     * @param {?} key
     * @return {?}
     */
    activateAccount(key) {
        let /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.patch(`${this.api}/authentication/`, { key: key }, { headers: headers });
    }
    /**
     * Authenticate a user using email and password.
     *
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    login(email, password) {
        let /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let /** @type {?} */ data = { email: email, password: password };
        return this.http
            .post(`${this.api}/authentication/`, data, { headers: headers })
            .toPromise()
            .then((response) => {
            // login successful if there's a jwt token in the response
            console.log('Login successful');
            // set the user/token variables
            this.user = response.user;
            this.token = response.token;
            // store the user in the local storage
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            localStorage.setItem(TOKEN_NAME, response.token);
            return /** @type {?} */ (response);
        });
    }
    /**
     * Log out the current user.
     * @return {?}
     */
    logout() {
        let /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // perform api call
        return this.http
            .delete(`${this.api}/authentication/`)
            .toPromise()
            .then((response) => {
            console.log('Logout successful');
            // unset the user/token variables
            this.user = null;
            this.token = null;
            // remove the user from local storage
            localStorage.removeItem('currentUser');
            localStorage.removeItem(TOKEN_NAME);
            return response;
        });
    }
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
    modifyCredentials(userId, data) {
        // remove a blank password if the key is supplied
        if ('password' in data && !data.password) {
            delete data['password'];
        }
        let /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .patch(`${this.api}/users/${userId}/`, data, { headers: headers })
            .toPromise()
            .then((response) => {
            // login successful if there's a jwt token in the response
            console.log('Credentials modified.');
            // update the user variable
            this.user = response;
            // update the user in the local storage
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            return response;
        });
    }
    /**
     * Register a new user
     * @param {?} user
     * @return {?}
     */
    register(user) {
        let /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .post(`${this.api}/users/`, user, { headers: headers })
            .toPromise()
            .then(response => /** @type {?} */ (response));
    }
    /**
     * Reset a user's password using the unique key sent to them via email.
     *
     * @param {?} key
     * @param {?} password
     * @return {?}
     */
    resetPassword(key, password) {
        let /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .patch(`${this.api}/authentication/password/${key}/`, { password: password }, { headers: headers });
    }
    /**
     * Send a password reset link to the specified email
     *
     * @param {?} email
     * @return {?}
     */
    resetPasswordRequest(email) {
        return this.http
            .post(`${this.api}/authentication/password/`, { email: email });
    }
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
    validateEmail(email, userid) {
        let /** @type {?} */ params = new HttpParams().set('email', email);
        if (userid)
            params = params.set('userid', userid);
        return this.http.get(`${this.api}/authentication/email/`, { params: params });
    }
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
    validateResetPasswordRequest(key) {
        return this.http
            .get(`${this.api}/authentication/password/${key}/`);
    }
}
AuthenticationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: HttpClient }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRyxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUk1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbkUsTUFBTSxDQUFDLHVCQUFNLFVBQVUsR0FBVyxXQUFXLENBQUM7QUFHOUMsTUFBTTs7OztJQU9KLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7bUJBTHpCLFdBQVcsQ0FBQyxHQUFHO1FBTXhCLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7S0FDN0Q7Ozs7OztJQVFELGVBQWUsQ0FBQyxHQUFXO1FBQ3pCLHFCQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUUsQ0FBQztLQUMzRjs7Ozs7Ozs7SUFTRCxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBRWpDLHFCQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDdEUscUJBQUksSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFFaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFFO2FBQzdELFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSCxDQUFDLFFBQWEsRUFBRSxFQUFFOztZQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7WUFHaEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7WUFHNUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvRCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0MsTUFBTSxtQkFBQyxRQUFnQixFQUFDO1NBQzFCLENBQ0QsQ0FBQTtLQUNWOzs7OztJQUtELE1BQU07UUFFRixxQkFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDOztRQUd0RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsQ0FBRTthQUNuQyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQ0gsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7WUFHakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1lBR2xCLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUVuQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2xCLENBQ0QsQ0FBQTtLQUNWOzs7Ozs7Ozs7OztJQVdELGlCQUFpQixDQUFDLE1BQWMsRUFBRSxJQUFvRTs7UUFHbEcsRUFBRSxDQUFDLENBQUUsVUFBVSxJQUFJLElBQUksSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQscUJBQUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxVQUFVLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBRTthQUNqRSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQ0osQ0FBQyxRQUFhLEVBQUUsRUFBRTs7WUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7O1lBR3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDOztZQUdyQixZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRS9ELE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDbEIsQ0FDRCxDQUFDO0tBQ1A7Ozs7OztJQU9ELFFBQVEsQ0FBQyxJQUFVO1FBRWYscUJBQUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUV0RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFFO2FBQ3BELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxtQkFBQyxRQUFrQixDQUFBLENBQUMsQ0FBQTtLQUM3Qzs7Ozs7Ozs7SUFVRCxhQUFhLENBQUMsR0FBVyxFQUFFLFFBQWdCO1FBQ3pDLHFCQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsNEJBQTRCLEdBQUcsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxFQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFFLENBQUM7S0FDdkc7Ozs7Ozs7SUFRRCxvQkFBb0IsQ0FBQyxLQUFhO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLDJCQUEyQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDckU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkQsYUFBYSxDQUFDLEtBQWEsRUFBRSxNQUFlO1FBQzFDLHFCQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUUsTUFBTyxDQUFDO1lBQ1YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFHLENBQUM7S0FDakY7Ozs7Ozs7Ozs7O0lBWUQsNEJBQTRCLENBQUMsR0FBVztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyw0QkFBNEIsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUN6RDs7O1lBdE1GLFVBQVU7Ozs7WUFSRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBjb25zdCBUT0tFTl9OQU1FOiBzdHJpbmcgPSAnYXV0aFRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG5cbiAgYXBpOiBhbnkgPSBlbnZpcm9ubWVudC5hcGk7XG4gIHVzZXI6IFVzZXI7XG4gIHRva2VuOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQgKSB7IFxuICAgIHRoaXMudXNlciA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcblxuICAgIGNvbnNvbGUubG9nKGBBdXRoU2VydmljZSBsb2FkZWQgY3VycmVudCB1c2VyICR7dGhpcy51c2VyfWApO1xuICB9XG5cblxuICAvKipcbiAgICogUHJvdmlkZSB0aGUgZ2VuZXJhdGVkIGFjY291bnQgYWN0aXZhdGlvbiBrZXkgdG8gZW5hYmxlIG5ldyBhY2NvdW50cy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICBrZXkgS2V5IHNlbnQgdG8gdXNlciB2aWEgZW1haWxcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSAgIFxuICAgKi9cbiAgYWN0aXZhdGVBY2NvdW50KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLmFwaX0vYXV0aGVudGljYXRpb24vYCwgeyBrZXk6IGtleSB9LCB7IGhlYWRlcnM6IGhlYWRlcnN9ICk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGUgYSB1c2VyIHVzaW5nIGVtYWlsIGFuZCBwYXNzd29yZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsICAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcblxuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgbGV0IGRhdGEgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLnBvc3QoYCR7dGhpcy5hcGl9L2F1dGhlbnRpY2F0aW9uL2AsIGRhdGEsIHsgaGVhZGVyczogaGVhZGVycyB9IClcbiAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbG9naW4gc3VjY2Vzc2Z1bCBpZiB0aGVyZSdzIGEgand0IHRva2VuIGluIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHVzZXIvdG9rZW4gdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UudXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gcmVzcG9uc2UudG9rZW47XG5cbiAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgdXNlciBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOX05BTUUscmVzcG9uc2UudG9rZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlIGFzIFVzZXI7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIExvZyBvdXQgdGhlIGN1cnJlbnQgdXNlci5cbiAgICovXG4gIGxvZ291dCgpIHtcblxuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgICAvLyBwZXJmb3JtIGFwaSBjYWxsXG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5kZWxldGUoYCR7dGhpcy5hcGl9L2F1dGhlbnRpY2F0aW9uL2AgKVxuICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9nb3V0IHN1Y2Nlc3NmdWwnKTtcblxuICAgICAgICAgICAgICAgIC8vIHVuc2V0IHRoZSB1c2VyL3Rva2VuIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHVzZXIgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fTkFNRSlcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gIH1cblxuICAvKipcbiAgICogRWRpdCBhIHVzZXJzIGxvZ2luIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBBY2NlcHRzIGNoYW5nZXMgdG8gJ2VtYWlsJyBhbmQgJ3Bhc3N3b3JkJy4gTXVzdCBjb25maXJtIHBhc3N3b3JkIHdpdGggXG4gICAqICdjb25maXJtJyBwYXNzd29yZCBmb3IgY2hhbmdlcyB0byBiZSBhY2NlcHRlZC5cbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgIHVzZXJJZCBJRCBvZiBVc2VyIHJlY29yZCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9ICAgZGF0YSAgIE9iamVjdCBjb250YWluaW5nICdlbWFpbCcgb3IgJ3Bhc3N3b3JkJywgYW5kIG9ibGlnYXRvcnkgJ2NvbmZpcm1fcGFzc3dvcmQnIGZpZWxkc1xuICAgKi9cbiAgbW9kaWZ5Q3JlZGVudGlhbHModXNlcklkOiBudW1iZXIsIGRhdGE6IHsgZW1haWw/OiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nLCBjb25maXJtX3Bhc3N3b3JkOiBzdHJpbmd9KSB7XG5cbiAgICAgIC8vIHJlbW92ZSBhIGJsYW5rIHBhc3N3b3JkIGlmIHRoZSBrZXkgaXMgc3VwcGxpZWRcbiAgICAgIGlmICggJ3Bhc3N3b3JkJyBpbiBkYXRhICYmICEgZGF0YS5wYXNzd29yZCApIHtcbiAgICAgICAgZGVsZXRlIGRhdGFbJ3Bhc3N3b3JkJ107XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLnBhdGNoKGAke3RoaXMuYXBpfS91c2Vycy8ke3VzZXJJZH0vYCwgZGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzfSApXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbihcbiAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlZGVudGlhbHMgbW9kaWZpZWQuJyk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdXNlciB2YXJpYWJsZVxuICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdXNlciBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAqIEBwYXJhbSAge1VzZXJ9ICAgIHVzZXIgVGhlIHVzZXIgZGF0YSBmb3IgcmVnaXN0cmF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgXG4gICAqL1xuICByZWdpc3Rlcih1c2VyOiBVc2VyKTogUHJvbWlzZTx2b2lkIHwgVXNlcltdPiB7XG5cbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAucG9zdChgJHt0aGlzLmFwaX0vdXNlcnMvYCwgdXNlciwgeyBoZWFkZXJzOiBoZWFkZXJzIH0gKVxuICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UgYXMgVXNlcltdKVxuICB9XG5cblxuICAvKipcbiAgICogUmVzZXQgYSB1c2VyJ3MgcGFzc3dvcmQgdXNpbmcgdGhlIHVuaXF1ZSBrZXkgc2VudCB0byB0aGVtIHZpYSBlbWFpbC5cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgIFRoZSBrZXkgd2hpY2ggYWxsb3dzIHRoZSBwYXNzd29yZCByZXNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgIFRoZSBuZXcgcGFzc3dvcmQgdG8gdXNlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gIFxuICAgKi9cbiAgcmVzZXRQYXNzd29yZChrZXk6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKGAke3RoaXMuYXBpfS9hdXRoZW50aWNhdGlvbi9wYXNzd29yZC8ke2tleX0vYCwge3Bhc3N3b3JkOiBwYXNzd29yZH0sICB7IGhlYWRlcnM6IGhlYWRlcnMgfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwYXNzd29yZCByZXNldCBsaW5rIHRvIHRoZSBzcGVjaWZpZWQgZW1haWxcbiAgICogXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgZW1haWwgRW1haWwgdG8gc2VuZCBwYXNzd29yZCByZXNldCBsaW5rXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gICAgICAgXG4gICAqL1xuICByZXNldFBhc3N3b3JkUmVxdWVzdChlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBcdHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLnBvc3QoYCR7dGhpcy5hcGl9L2F1dGhlbnRpY2F0aW9uL3Bhc3N3b3JkL2AsIHsgZW1haWw6IGVtYWlsIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogUG9sbCB0aGUgc2VydmVyIHRvIGNvbmZpcm0gdGhhdCBhbiBlbWFpbCBpcyB2YWxpZCBhbmQgdW5pcXVlLlxuICAgKlxuICAgKiBZb3UgY2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhIHVzZXIgaWQuIElmIHRoZSBzdXBwbGllZCBlbWFpbCBiZWxvbmdzXG4gICAqIHRvIHRoaXMgdXNlciwgdGhlIGVtYWlsIHdpbGwgbm90IGJlIGZsYWdnZWQgYXMgaW52YWxpZCBmb3IgYmVpbmdcbiAgICogaW4gdXNlLiBcbiAgICpcbiAgICogUmV0dXJucyB7IHZhbGlkOiB0cnVlIH0gaWYgZW1haWwgaXMgdmFsaWRcbiAgICogUmV0dXJucyB7IHZhbGlkOiBmYWxzZSB9IGlmIGVtYWlsIGlzIG5vdCB2YWxpZFxuICAgKlxuICAgKiBcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICBlbWFpbCAgRW1haWwgdG8gdGVzdFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgICAgICAgIHVzZXJpZCBSZXR1cm5zIHRydWUgaWYgdGhlIGVtYWlsIGlzIFxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59ICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB2YWxpZGF0ZUVtYWlsKGVtYWlsOiBzdHJpbmcsIHVzZXJpZD86IHN0cmluZyApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnZW1haWwnLCBlbWFpbCApO1xuICAgIGlmICggdXNlcmlkIClcbiAgICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCd1c2VyaWQnLCB1c2VyaWQgKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmFwaX0vYXV0aGVudGljYXRpb24vZW1haWwvYCwgeyBwYXJhbXM6IHBhcmFtcyB9ICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGEgcGFzc3dvcmQgcmVzZXQgcmVxdWVzdC4gXG4gICAqXG4gICAqIFdoZW4gYSB1c2VyIGFycml2ZXMgdG8gdGhlIHBhc3N3b3JkIHJlc2V0IHBhZ2UgdmlhIHRoZSBwcm92aWRlZCBsaW5rLCBcbiAgICogd2UgcGVyZm9ybSB2YWxpZGF0aW9uIG9uIHRoZSByZXNldCBwYXNzd29yZCBrZXkgdG8gY2hlY2sgaWYgdGhlIGxpbmtcbiAgICogaXMgdmFsaWQsIGV4cGlyZWQsIG9yIGFscmVhZHkgYmVlbiB1c2VkLlxuICAgKiBcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICBrZXkgVW5pcXVlIGtleSB0byB2YWxpZGF0ZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59ICAgICBcbiAgICovXG4gIHZhbGlkYXRlUmVzZXRQYXNzd29yZFJlcXVlc3Qoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldChgJHt0aGlzLmFwaX0vYXV0aGVudGljYXRpb24vcGFzc3dvcmQvJHtrZXl9L2ApO1xuICB9XG5cbn1cbiJdfQ==