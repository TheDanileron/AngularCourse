import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [ // The components, directives, and pipes that belong to this NgModule.
    AppComponent
  ],
  imports: [ // Other modules whose exported classes are needed by component templates declared in this NgModule.
    BrowserModule
  ],
  providers: [], // Creators of services that this NgModule contributes to the global collection of services;
  bootstrap: [AppComponent]// Точка запуска
})
export class AppModule { }
