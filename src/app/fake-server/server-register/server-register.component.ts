import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'server-register',
    templateUrl: './server-register.component.html',
    styleUrls: ['./server-register.component.css']
})
export class ServerRegisterComponent implements OnInit {

    @Input() subject: any;
    @Input() done: any;

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
        //this.subject.reject({error: this.errorMessage});
        this.done();
    }

}
