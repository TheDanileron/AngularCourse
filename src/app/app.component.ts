import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {heroes} from './heroes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Pipes guide';
    heroes: Hero[] = [
        new Hero('Saitama', 1000000),
        new Hero('Reverse saitama', 1000001),
        new Hero('Windy', 100),
        new Hero('Genos', 1000),
    ];
    @Input() filterStr = '';

    constructor () {
    }
}
