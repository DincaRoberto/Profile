import {Component, OnInit} from '@angular/core';

import {IUserLogin} from './IUserLogin';
import {LoginService} from "./login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService],
})
export class LoginComponent implements OnInit {

    private user: IUserLogin;

    constructor(private _loginService: LoginService) {
        this.user = {
            userName:"",
            password:""
        }
    }

    ngOnInit() {
    }

    private onSubmit() {
        console.log(this.user.userName);
        console.log(this.user.password);

        this._loginService.login(this.user).then((responds)=>{
            console.log(responds);
        })
    }

}
