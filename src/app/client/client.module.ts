import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { ProfileService } from "./profile.service";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { appRoutes } from "./routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [],
    declarations: [LoginComponent, ProfileComponent, RegisterComponent, PageNotFoundComponent],
    providers:[ProfileService]
})
export class ClientModule {
}
