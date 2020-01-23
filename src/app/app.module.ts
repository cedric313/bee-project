import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { SignincomponentComponent } from './signincomponent/signincomponent.component';
import {RouterModule, Routes} from '@angular/router';
import { ROUTES } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { LivestockComponent } from './livestock/livestock.component';
import { RucheComponent } from './ruche/ruche.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    BodycomponentComponent,
    SignincomponentComponent,
    AccueilComponent,
    LivestockComponent,
    RucheComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
