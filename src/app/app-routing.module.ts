import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignincomponentComponent} from './signincomponent/signincomponent.component';
import {HeadercomponentComponent} from './headercomponent/headercomponent.component';
import {FootercomponentComponent} from './footercomponent/footercomponent.component';
import {LivestockComponent} from "./livestock/livestock.component";


const ROUTES: Routes = [
  { path: 'signin', component: SignincomponentComponent },
  { path: 'header', component: HeadercomponentComponent },
  { path: 'footer', component: FootercomponentComponent },
  { path: 'livestock', component: LivestockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
