import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainOasisComponent } from './main-oasis/main-oasis.component';
import { RegistrationComponent } from './main-oasis/registration/registration.component';

@NgModule({
  declarations: [AppComponent, MainOasisComponent, RegistrationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
