import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from "@angular/forms";

import { RestModule } from '../rest/rest.module';

import { DisplayComponent } from './display/display.component';
import { ServerLoginComponent } from './server-login/server-login.component';
import { ServerPendingComponent } from './server-pending/server-pending.component';
import { ServerRegisterComponent } from './server-register/server-register.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RestModule,
        FormsModule
    ],
    exports: [DisplayComponent],
    declarations: [DisplayComponent, ServerLoginComponent, ServerPendingComponent, ServerRegisterComponent]
})
export class FakeServerModule {
}
