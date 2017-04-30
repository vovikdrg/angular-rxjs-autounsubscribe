import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "./safe-subscribe"

import { AppComponent } from './app.component';
import { AutoUnsubscribeComponent } from './auto-unsubscribe/auto-unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoUnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
