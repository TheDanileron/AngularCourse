import {Component, ViewChild} from '@angular/core';

import {HEROES} from '../hero';
import {CountdownComponent} from '../countdown/countdown.component';

@Component({
    selector: 'app-hero-parent',
    template: `
        <h2>{{master}} controls {{heroes.length}} heroes</h2>
        <app-hero-child *ngFor="let hero of heroes"
                        [hero]="hero"
                        [master]="master"
                        (voted)="onVoted($event)">
        </app-hero-child>
        <h2>You voted for {{votesCount}} heroes</h2>
        <div class="seconds"><h2>Choose who will save the world . {{timer.seconds}} seconds left</h2></div>
        <div class="seconds"><h2 *ngIf="timer.message">{{timer.message}}</h2></div>
        <!--We can call methods and variables of child component via REFERENCE VARIABLE from template but the parent class itself has to access-->
        <app-countdown #timer></app-countdown>
        <button (click)="start()">Start</button>
        <button (click)="stop()">Stop</button>
    `
})
export class HeroParentComponent {
    heroes = HEROES;
    master = '  Master  ';
    votesCount = 0;
    @ViewChild(CountdownComponent)
    private timerComponent: CountdownComponent;
    onVoted(voted: boolean) {
        if (voted) {
            this.votesCount = ++this.votesCount;
        } else {
            this.votesCount = --this.votesCount;
        }
    }
    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
}
