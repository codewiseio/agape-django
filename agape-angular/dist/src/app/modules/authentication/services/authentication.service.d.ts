import { Observable } from "rxjs/Rx";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
export declare const TOKEN_NAME: string;
export declare class AuthenticationService {
    private http;
    api: any;
    user: User;
    token: string;
    constructor(http: HttpClient);
    /**
     * Provide the generated account activation key to enable new accounts.
     * @param  {string}          key Key sent to user via email
     * @return {Observable<any>}
     */
    activateAccount(key: string): Observable<any>;
    /**
     * Authenticate a user using email and password.
     *
     * @param {string} email    [description]
     * @param {string} password [description]
     */
    login(email: string, password: string): Promise<User>;
    /**
     * Log out the current user.
     */
    logout(): Promise<any>;
    /**
     * Edit a users login information.
     *
     * Accepts changes to 'email' and 'password'. Must confirm password with
     * 'confirm' password for changes to be accepted.
     *
     * @param {number}   userId ID of User record to update
     * @param {object}   data   Object containing 'email' or 'password', and obligatory 'confirm_password' fields
     */
    modifyCredentials(userId: number, data: {
        email?: string;
        password?: string;
        confirm_password: string;
    }): Promise<any>;
    /**
     * Register a new user
     * @param  {User}    user The user data for registration
     * @return {Promise}
     */
    register(user: User): Promise<void | User[]>;
    /**
     * Reset a user's password using the unique key sent to them via email.
     *
     * @param {string} key  The key which allows the password reset
     * @param {string} password  The new password to use
     * @return {Observable<any>}
     */
    resetPassword(key: string, password: string): Observable<any>;
    /**
     * Send a password reset link to the specified email
     *
     * @param  {string}          email Email to send password reset link
     * @return {Observable<any>}
     */
    resetPasswordRequest(email: string): Observable<any>;
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
    validateEmail(email: string, userid?: string): Observable<any>;
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
    validateResetPasswordRequest(key: string): Observable<any>;
}
