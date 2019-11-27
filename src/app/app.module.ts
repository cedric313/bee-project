import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { SignincomponentComponent } from './signincomponent/signincomponent.component';
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    BodycomponentComponent,
    SignincomponentComponent
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
