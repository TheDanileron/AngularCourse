import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Hero} from '../hero';

@Component({
    selector: 'app-hero-child',
    template: `
        <h3>{{hero.name}} says:</h3>
        <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
        <button [disabled]="isVoted" (click)="vote(true)">Vote</button>
        <button [disabled]="!isVoted" (click)="vote(false)">UnVote</button>
    `
})
export class HeroChildComponent {
    @Input() hero: Hero;
    @Input() masterName: string;
    @Output() voted = new EventEmitter<boolean>();
    isVoted = false;

    @Input()
    set master(name: string) {
        this.masterName = (name && name.trim()) || '<no master set>';
    }

    vote(agreed: boolean) {
        this.voted.emit(agreed);
        this.isVoted = agreed;
    }
}
