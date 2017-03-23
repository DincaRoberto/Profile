import {Injectable} from '@angular/core';

import {IUserProfile} from "./IUserProfile";

@Injectable()
export class ProfileService {

    currentProfile:IUserProfile;

    constructor() {

    }

    setCurrentProfile = (profile:IUserProfile) =>{
        this.currentProfile = profile;
    }

}
