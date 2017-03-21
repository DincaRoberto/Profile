import {Injectable} from '@angular/core';

import {IUserRegister} from './IUserRegister';

@Injectable()
export class RegisterService {

    constructor() {
    }

    register(user: IUserRegister): Promise<string> {

        return (new Promise((resolve)=> {
            setTimeout(()=> {
                console.log(user);
                resolve("444")
            }, 2000)
        }));

    }

}
