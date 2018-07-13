/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from './services/authentication.service';
var /** @type {?} */ AUTH_HEADER_KEY = 'Authorization';
var /** @type {?} */ AUTH_PREFIX = 'Bearer';
var AuthRequestOptions = /** @class */ (function (_super) {
    tslib_1.__extends(AuthRequestOptions, _super);
    function AuthRequestOptions() {
        var _this = _super.call(this) || this;
        console.log('Construct auth request.');
        var /** @type {?} */ token = localStorage.getItem(TOKEN_NAME);
        if (token) {
            _this.headers.append(AUTH_HEADER_KEY, AUTH_PREFIX + " " + token);
        }
        return _this;
    }
    return AuthRequestOptions;
}(BaseRequestOptions));
export { AuthRequestOptions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRS9ELHFCQUFNLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDeEMscUJBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUU3QixJQUFBO0lBQXdDLDhDQUFrQjtJQUV4RDtRQUFBLFlBQ0UsaUJBQU8sU0FRUjtRQU5DLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUV2QyxxQkFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFLLFdBQVcsU0FBSSxLQUFPLENBQUMsQ0FBQztTQUNqRTs7S0FDRjs2QkFqQkg7RUFNd0Msa0JBQWtCLEVBYXpELENBQUE7QUFiRCw4QkFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlcnMsIEh0dHAsIEJhc2VSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVE9LRU5fTkFNRSB9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmNvbnN0IEFVVEhfSEVBREVSX0tFWSA9ICdBdXRob3JpemF0aW9uJztcbmNvbnN0IEFVVEhfUFJFRklYID0gJ0JlYXJlcic7XG5cbmV4cG9ydCBjbGFzcyBBdXRoUmVxdWVzdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUmVxdWVzdE9wdGlvbnMge1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnNvbGUubG9nKCdDb25zdHJ1Y3QgYXV0aCByZXF1ZXN0LicpO1xuICAgIFxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU5fTkFNRSk7XG4gICAgaWYodG9rZW4pIHtcbiAgICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoQVVUSF9IRUFERVJfS0VZLCBgJHtBVVRIX1BSRUZJWH0gJHt0b2tlbn1gKTtcbiAgICB9XG4gIH1cblxufSJdfQ==