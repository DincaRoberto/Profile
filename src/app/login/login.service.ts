import {Injectable} from '@angular/core';

import {IUserLogin} from  './IUserLogin';
import {IUserProfile} from "./IUserProfile";

@Injectable()
export class LoginService {

    constructor() {
    }

    login(user: IUserLogin):Promise<IUserProfile> {

        return (new Promise((resolve) => {
            setTimeout(() => {
                resolve({name:user.userName});
            }, 2000);
        }));

    }

}
