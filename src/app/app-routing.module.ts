import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./modules/security/components/register/register.component";
import {LoginComponent} from "./modules/security/components/login/login.component";

export const appRoutes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
