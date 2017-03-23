import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../rest/api.service';

@Component({
    selector: 'fake-server-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    private displayTemplate:string;
    private subject:any;

    constructor(private _apiService: ApiService) {

        this.displayTemplate = '';

        _apiService.loginRequest$.subscribe(
            (subject) => {

                this.displayTemplate = 'login';

                this.subject = subject;

                console.log('Server side ', subject);
            });

        _apiService.registerRequest$.subscribe(
            (subject) => {

                this.displayTemplate = 'register';

                this.subject = subject;

                console.log('Server side register', subject);
            });

    }

    onDone = (()=>{
        this.displayTemplate = '';
    });

    ngOnInit() {
    }

}
