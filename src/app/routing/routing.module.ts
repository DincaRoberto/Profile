import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { ProfileComponent } from "../profile/profile.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent, data: {profile: "profileData"}},
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
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class RoutingModule {
}
