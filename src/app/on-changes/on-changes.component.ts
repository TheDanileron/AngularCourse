import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Logger} from '../logger.service';

@Component({
    selector: 'app-on-changes',
    templateUrl: './on-changes.component.html',
    styleUrls: ['./on-changes.component.css'],
    providers: [Logger]
})
export class OnChangesComponent implements OnInit, OnChanges {
    @Input() hero: string;
    @Input() power: string;
    constructor(private logger: Logger) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.logger.log('OnChangeComponent changed properties');

        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.logger.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

}
