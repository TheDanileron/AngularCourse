import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import { TestComponent } from './test/test.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';


@NgModule({
    declarations: [ // The components, directives, and pipes that belong to this NgModule.
        AppComponent, TestComponent, HeroChildComponent, HeroParentComponent
    ],
    imports: [ // Other modules whose exported classes are needed by component templates declared in this NgModule.
        BrowserModule
    ],
    providers: [], // Creators of services that this NgModule contributes to the global collection of services;
    bootstrap: [AppComponent]// Точка запуска, загружает AppComponent
})
export class AppModule {
}

// NgModules provide a compilation context for their components. A root NgModule always has a root component that is created
// during bootstrap, but any NgModule can include any number of additional components, which can be loaded through the router
// or created through the template. The components that belong to an NgModule share a compilation context.
