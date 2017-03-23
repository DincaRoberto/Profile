import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { FakeServerModule } from './fake-server/fake-server.module';
import { ClientModule } from "./client/client.module";

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,

        FakeServerModule,
        ClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
