import {Component, OnInit} from '@angular/core';

import {IUserLogin} from './IUserLogin';
import {LoginService} from "./login.service";
import {IUserProfile} from "./IUserProfile";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService],
})
export class LoginComponent implements OnInit {

    private user: IUserLogin;
    private loginState: boolean;

    constructor(private _loginService: LoginService) {
        this.user = {
            userName:"",
            password:""
        };

        this.loginState = false;
    }

    ngOnInit() {
    }

    private onSubmit() {

        this.loginState = true;

        this._loginService.login(this.user).then((responds:IUserProfile)=>{
            console.log(responds);
            this.loginState = false;
            console.log("log")
        })
    }

}
