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

                // setTimeout(() => {
                //     subject.resolve({name: subject.user.userName});
                // }, 2000);

                console.log('Server side ', subject);
            });

    }

    ngOnInit() {
    }

}
