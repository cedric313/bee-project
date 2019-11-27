import { Routes } from '@angular/router';
import {SignincomponentComponent} from './signincomponent/signincomponent.component';
import {HeadercomponentComponent} from './headercomponent/headercomponent.component';
import {FootercomponentComponent} from './footercomponent/footercomponent.component';

const ROUTES: Routes = [
  { path: 'signin', component: SignincomponentComponent },
  { path: 'header', component: HeadercomponentComponent },
  { path: 'footer', component: FootercomponentComponent }
];

export { ROUTES };
