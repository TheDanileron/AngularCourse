import {Component} from '@angular/core';

import {HEROES} from '../hero';

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
    `
})
export class HeroParentComponent {
    heroes = HEROES;
    master = '  Master  ';
    votesCount = 0;
    onVoted(voted: boolean) {
        if (voted) {
            this.votesCount = ++this.votesCount;
        } else {
            this.votesCount = --this.votesCount;
        }
    }
}
