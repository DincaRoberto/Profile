import { Component, OnInit } from '@angular/core';

import { RegisterService } from "./register.service";
import { IUserRegister } from "./IUserRegister";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [RegisterService],
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private user: IUserRegister;
    private loginState: boolean;
    private errorMessage: string;

    constructor(private _registerService: RegisterService) {
        this.user = {
            firstName: "",
            lastName: "",
            email: ""
        };
        this.loginState = false;
    }

    ngOnInit() {
    }

    onSubmit() {
        this.loginState = true;
        this._registerService.register(this.user)
            .then(this.onSubmitSuccess, this.onSubmitError)
            .then(this.onSubmitAnyResponse);
    }

    private onSubmitSuccess = (responds:any) => {
        console.log(responds);
    };

    private onSubmitError = (err:any) => {
        this.errorMessage = err.error;
        console.log(err);
    };

    private onSubmitAnyResponse = () => {
        this.loginState = false;
    }

}
