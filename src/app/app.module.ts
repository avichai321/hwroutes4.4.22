import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DogcompComponent } from './dogs/dogcomp/dogcomp.component';
import { CatscompComponent } from './cats/catscomp/catscomp.component';
import { RandapicompComponent } from './randapi/randapicomp/randapicomp.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DogcompComponent,
    CatscompComponent,
    RandapicompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
