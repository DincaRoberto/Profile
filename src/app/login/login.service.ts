import {Injectable, EventEmitter} from '@angular/core';

import {IUserLogin} from  './IUserLogin';
import {IUserProfile} from "../IUserProfile";

import {ApiService} from '../rest/api.service';

@Injectable()
export class LoginService {

    constructor(private _apiService: ApiService) {
    }

    login(user: IUserLogin):Promise<IUserProfile> {

        return this._apiService.announceLogin(user);
    }

}
