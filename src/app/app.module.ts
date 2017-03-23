import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import 'hammerjs';

import { FakeServerModule } from './fake-server/fake-server.module';
import { RestModule } from './rest/rest.module';
import { AppComponent } from './app.component';
import { ClientModule } from "./client/client.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MaterialModule,
        RouterModule,

        FakeServerModule,
        RestModule,
        ClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
