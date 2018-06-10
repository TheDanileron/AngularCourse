import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    birthDate = new Date();
    heroCurreny = 100;
    heroPower = 2;
    boostAbility = 3;

    constructor() {
    }

    ngOnInit() {
    }

}
