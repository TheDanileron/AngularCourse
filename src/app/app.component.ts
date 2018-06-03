import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Logger} from './logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Logger]
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
    title = 'Tour of Heroes';
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    myHero = this.heroes[0];
    hero: string;
    power: string;

    constructor(private logger: Logger) {
    }

    ngOnChanges(changes: SimpleChanges): void {// Respond when Angular (re)sets data-bound input properties
        this.logger.log('AppComponent data inputs set or reset');
    }

    ngOnInit(): void {
        this.logger.log('Component AppComponent created');
    }
    ngDoCheck(): void {// Detect and act upon changes that Angular can't or won't detect on its own.
        this.logger.log('Component AppComponent changed');
    }
    ngAfterContentInit(): void { // Respond after Angular projects external content into the component's view
        this.logger.log('Component AppComponent projected external content');
    }
    ngAfterContentChecked(): void { // Respond after Angular checks the content projected into the component
        this.logger.log('Component AppComponent checked external content');
    }
    ngAfterViewInit(): void {  // Respond after Angular initializes the component's views and child views
        this.logger.log('Component AppComponent views and child views are initialised');
    }
    ngOnDestroy(): void { // Cleanup just before Angular destroys the directive/component.
        this.logger.log('Component AppComponent is about to be destroyed');
    }
}
