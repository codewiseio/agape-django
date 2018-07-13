/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from './services/authentication.service';
const /** @type {?} */ AUTH_HEADER_KEY = 'Authorization';
const /** @type {?} */ AUTH_PREFIX = 'Bearer';
export class AuthRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        console.log('Construct auth request.');
        const /** @type {?} */ token = localStorage.getItem(TOKEN_NAME);
        if (token) {
            this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnYXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFL0QsdUJBQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN4Qyx1QkFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBRTdCLE1BQU0seUJBQTBCLFNBQVEsa0JBQWtCO0lBRXhEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFdkMsdUJBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxHQUFHLFdBQVcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO0tBQ0Y7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlcnMsIEh0dHAsIEJhc2VSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVE9LRU5fTkFNRSB9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmNvbnN0IEFVVEhfSEVBREVSX0tFWSA9ICdBdXRob3JpemF0aW9uJztcbmNvbnN0IEFVVEhfUFJFRklYID0gJ0JlYXJlcic7XG5cbmV4cG9ydCBjbGFzcyBBdXRoUmVxdWVzdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUmVxdWVzdE9wdGlvbnMge1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnNvbGUubG9nKCdDb25zdHJ1Y3QgYXV0aCByZXF1ZXN0LicpO1xuICAgIFxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU5fTkFNRSk7XG4gICAgaWYodG9rZW4pIHtcbiAgICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoQVVUSF9IRUFERVJfS0VZLCBgJHtBVVRIX1BSRUZJWH0gJHt0b2tlbn1gKTtcbiAgICB9XG4gIH1cblxufSJdfQ==