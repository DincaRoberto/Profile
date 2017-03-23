import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'server-register',
    templateUrl: './server-register.component.html',
    styleUrls: ['./server-register.component.css']
})
export class ServerRegisterComponent implements OnInit {

    @Input() subject: any;
    @Input() done: any;

    errorMessage:string = "SomeErrorMessage";

    constructor() {
    }

    ngOnInit() {
    }

    onResolve(){

        this.subject.resolve({status:'Success'});
        this.done();
    }

    onReject() {
        this.subject.reject({error: this.errorMessage});
        this.done();
    }

}
