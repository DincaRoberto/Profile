import {Injectable} from '@angular/core';

import {IUserRegister} from './IUserRegister';
import { ApiService } from "../../rest/api.service";

@Injectable()
export class RegisterService {

    constructor(private _apiService: ApiService) {
    }

    register(user: IUserRegister): Promise<any> {

        return this._apiService.announceRegister(user);
    }

}
