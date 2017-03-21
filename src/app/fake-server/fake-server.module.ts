import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';

import {RestModule} from '../rest/rest.module';

import {DisplayComponent} from './display/display.component';
import { ServerLoginComponent } from './server-login/server-login.component';
import { ServerPendingComponent } from './server-pending/server-pending.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RestModule
    ],
    exports: [DisplayComponent],
    declarations: [DisplayComponent, ServerLoginComponent, ServerPendingComponent]
})
export class FakeServerModule {
}
