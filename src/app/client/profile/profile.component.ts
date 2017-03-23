import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { IUserProfile } from "../../IUserProfile";
import { ProfileService } from "../profile.service";


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: []
})
export class ProfileComponent implements OnInit {

    private profile: IUserProfile;

    constructor(private _profileService: ProfileService, private _router: Router,) {
        this.profile = _profileService.currentProfile;
    }

    ngOnInit() {

    }

    private onLogout = () => {
        this._router.navigate(['']);
    }

}
