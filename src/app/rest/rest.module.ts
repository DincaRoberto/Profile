import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import {ApiService} from './api.service'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule
    ],
    providers: [ApiService]
})
export class RestModule {
}
