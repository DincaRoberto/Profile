import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'server-login',
    templateUrl: './server-login.component.html',
    styleUrls: ['./server-login.component.css']
})
export class ServerLoginComponent implements OnInit {

    @Input() subject: any;
    @Input() done:any;

    constructor() {
    }

    ngOnInit() {

    }

    onResolve(){

        var result = {
            name: this.subject.user.userName
        };

        console.log(this.subject.user.userName);

        this.subject.resolve(result);
        this.done();
    }

    onReject() {
        this.subject.reject({error: "SomeErrorMessage"});
        this.done();
    }

}
