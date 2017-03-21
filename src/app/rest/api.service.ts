import {Injectable} from '@angular/core';

import {Subject}    from 'rxjs/Subject';

@Injectable()
export class ApiService {

    constructor() {
    }

    private loginRequestSource = new Subject<any>();

    loginRequest$ = this.loginRequestSource.asObservable();

    announceLogin(user: any) {

        return (new Promise((resolve) => {
            this.loginRequestSource.next({user, resolve});
        }));
    }

}
