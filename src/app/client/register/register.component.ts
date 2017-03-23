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
    private loadingState: boolean;
    private errorMessage: string;
    private success: string;

    constructor(private _registerService: RegisterService) {
        this.user = {
            firstName: "",
            lastName: "",
            email: ""
        };
        this.loadingState = false;
    }

    ngOnInit() {
    }

    onSubmit() {
        this.loadingState = true;
        this._registerService.register(this.user)
            .then(this.onSubmitSuccess, this.onSubmitError)
            .then(this.onSubmitAnyResponse);
    }

    private onSubmitSuccess = (responds:any) => {
        this.success = responds;
        console.log(responds);
    };

    private onSubmitError = (err:any) => {
        this.errorMessage = err.error;
        console.log(err);
    };

    private onSubmitAnyResponse = () => {
        this.loadingState = false;
    }

}
