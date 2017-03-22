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
    private errorMessage: string;

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

        let promise = this._loginService.login(this.user);

        promise.then((responds:IUserProfile)=>{
            console.log(responds);
            console.log("log")
        },
            (err) => {
                this.errorMessage = err.error;
                console.log(err);
            }
        ).then(()=>{
            this.loginState = false;

        });
    }

}
