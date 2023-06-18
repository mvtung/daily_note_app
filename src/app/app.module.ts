import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageModule } from './welcome-page/welcome-page.module';
import { CalendarPageModule } from './calendar-page/calendar-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule,
    CalendarPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
