import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { IUserLogin } from "./IUserLogin";
import { IUserProfile } from "../../IUserProfile";

import { LoginService } from "./login.service";
import { ProfileService } from "../profile.service";




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService],
})
export class LoginComponent implements OnInit {

    private user: IUserLogin;
    private loginState: boolean;
    private errorMessage: string;

    constructor(private _loginService: LoginService,
                private _router: Router,
                private _profileService: ProfileService) {
        this.user = {
            userName: "",
            password: ""
        };

        this.loginState = false;
    }

    ngOnInit() {
    }


    private onSubmit() {

        this.loginState = true;

        this._loginService.login(this.user)
            .then(this.onSubmitSuccess, this.onSubmitError)
            .then(this.onSubmitAnyResponse);
    }

    private onSubmitSuccess = (responds: IUserProfile)=> {
        this._profileService.setCurrentProfile(Object.assign({}, responds));
        this._router.navigate(['/profile']);
    };

    private onSubmitError = (err) => {
        this.errorMessage = err.error;
        console.log(err);
    };

    private onSubmitAnyResponse = () => {
        this.loginState = false;
    }

}
