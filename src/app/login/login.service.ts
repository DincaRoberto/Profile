import {Injectable} from '@angular/core';

import {IUserLogin} from  './IUserLogin';

@Injectable()
export class LoginService {

    constructor() {
    }

    login(user: IUserLogin):Promise<IUserLogin> {
        return Promise.resolve(user);
    }

}
