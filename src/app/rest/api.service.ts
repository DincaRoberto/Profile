import {Injectable} from '@angular/core';

import {Subject}    from 'rxjs/Subject';

@Injectable()
export class ApiService {

    constructor() {
    }

    private loginRequestSource = new Subject<any>();
    private registerRequestSource = new Subject<any>();

    loginRequest$ = this.loginRequestSource.asObservable();
    registerRequest$ = this.registerRequestSource.asObservable();

    announceLogin(user: any) {

        return (new Promise((resolve, reject) => {
            this.loginRequestSource.next({user, resolve, reject});
        }));
    }

    announceRegister(user: any) {

        return (new Promise((resolve, reject) => {
            this.registerRequestSource.next({user, resolve, reject});
        }));
    }

}
