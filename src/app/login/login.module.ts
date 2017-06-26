import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AlertService} from "../services/index";
import {AlertComponent} from "../directives/alert.component";


import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ],
    declarations: [LoginComponent, AlertComponent],
    providers: [AlertService]
})
export class LoginModule {
}
