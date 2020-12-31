import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { NdayweatherComponent } from './ndayweather/ndayweather.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent,
    NdayweatherComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
