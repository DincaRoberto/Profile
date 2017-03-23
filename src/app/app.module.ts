import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

import 'hammerjs';

import {FakeServerModule} from './fake-server/fake-server.module';
import {RestModule} from './rest/rest.module';



import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from "./profile.service";


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent, data:{profile:"profileData"}},
    //{path: 'hero/:id', component: HeroDetailComponent},
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: {title: 'Heroes List'}
    // },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        PageNotFoundComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MaterialModule,
        FakeServerModule,
        RestModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ProfileService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
