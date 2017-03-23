import { Injectable } from '@angular/core';
import { ApiService } from "../../rest/api.service";
import { IUserLogin } from "./IUserLogin";
import { IUserProfile } from "../../IUserProfile";


@Injectable()
export class LoginService {

    constructor(private _apiService: ApiService) {
    }

    login(user: IUserLogin): Promise<IUserProfile> {

        return this._apiService.announceLogin(user);
    }

}
