import {Component, OnInit} from '@angular/core';
import {Logger} from '../logger.service';

@Component({
    selector: 'app-test', // A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML;
    templateUrl: './test.component.html', // The module-relative address of this component's HTML template.
    styleUrls: ['./test.component.css'],
    providers: [ Logger ] //  An array of dependency injection providers for services that the component requires.
})
export class TestComponent implements OnInit {

    constructor(private loger: Logger) { // Injecting service via DI
    }

    ngOnInit() {
    }

}
