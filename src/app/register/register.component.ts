import {Component, OnInit} from '@angular/core';

import {IUserRegister} from './IUserRegister';
import {RegisterService} from './register.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [RegisterService],
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private user:IUserRegister = {
        firstName:"",
        lastName:"",
        email:""
    };
    constructor(private _registerService:RegisterService) {
    }

    ngOnInit() {
    }

    onSubmit(){
        this._registerService.register(this.user).then((res)=>{
            console.log(res);
        });
    }

}
