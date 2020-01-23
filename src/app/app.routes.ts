import { Routes } from '@angular/router';
import {SignincomponentComponent} from './signincomponent/signincomponent.component';
import {HeadercomponentComponent} from './headercomponent/headercomponent.component';
import {FootercomponentComponent} from './footercomponent/footercomponent.component';
import {LivestockComponent} from "./livestock/livestock.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {RucheComponent} from "./ruche/ruche.component";

const ROUTES: Routes = [
  { path: 'accueil' , component: AccueilComponent},
  { path: 'signin', component: SignincomponentComponent },
  { path: 'header', component: HeadercomponentComponent },
  { path: 'footer', component: FootercomponentComponent },
  { path: 'livestock', component: LivestockComponent },
  { path: 'ruche' , component: RucheComponent}
];

export { ROUTES };
