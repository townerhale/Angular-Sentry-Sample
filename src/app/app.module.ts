import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler} from '@angular/core';
import {SentryErrorHandler} from './error-handler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentryListComponent } from './sentry-list/sentry-list.component';
import { RouterModule } from '@angular/router';
import * as Sentry from "@sentry/angular";

@NgModule({
  declarations: [
    AppComponent,
    SentryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'sentry-list', component: SentryListComponent},
    ]),
    AppRoutingModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: SentryErrorHandler}],

  bootstrap: [AppComponent]
})
export class AppModule { }
