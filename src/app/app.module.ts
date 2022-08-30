import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserformComponent } from './components/userform/userform.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './components/aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserformComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
