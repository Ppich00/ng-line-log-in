import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {SuccessPageComponent} from "./components/success-page/success-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'login'
      },
      {
        path:'login',
        component: LoginPageComponent
      },
      {
        path: 'success',
        component: SuccessPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
