import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DogsCompComponent } from './componnents/dogs-comp/dogs-comp.component';
import { CatsCompComponent } from './componnents/cats-comp/cats-comp.component';
import { FreeapiCompComponent } from './componnents/freeapi-comp/freeapi-comp.component';
import { Route,RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

const PathesAndRoutes:Routes = [
{path: 'dogs-comp' ,component:DogsCompComponent},
{path: 'cats-comp' ,component: CatsCompComponent},
{path: 'freeapi-comp' ,component: FreeapiCompComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DogsCompComponent,
    CatsCompComponent,
    FreeapiCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(PathesAndRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
