import {Injectable} from '@angular/core';

@Injectable() // Defines class as a service
export class Logger {

    // Dependency injection (often called DI) is wired into the Angular framework and used everywhere to provide new components with
    // the services or other things they need.
    //
    // The injector is the main mechanism. You don't have to create an Angular injector. Angular creates an application-wide injector for you during the bootstrap process.
    //
    // The injector maintains a container of dependency instances that it has already created, and reuses them if possible.
    //
    // A provider is a recipe for creating a dependency. For a service, this is typically the service class itself.
    // For any dependency you need in your app, you must register a provider with the app's injector, so that the injector can use
    // it to create new instances.

    // You must register at least one provider of any service you are going to use. You can register providers in modules or in components.
    // When you add providers to the root module, the SAME instance of a service is available to all components in your app.
    // When you register a provider at the component level, you get a new instance of the service with each new instance of that component. At the component level,
    // register a service provider in the providers property of the @Component metadata:
    constructor() {
    }

    log(msg: any) {
        console.log(msg);
    }

    error(msg: any) {
        console.error(msg);
    }

    warn(msg: any) {
        console.warn(msg);
    }
}

