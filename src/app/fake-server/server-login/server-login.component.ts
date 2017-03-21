import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'server-login',
    templateUrl: './server-login.component.html',
    styleUrls: ['./server-login.component.css']
})
export class ServerLoginComponent implements OnInit {

    @Input() subject: any;

    constructor() {
    }

    ngOnInit() {

        console.log(this.subject);

    }

}
