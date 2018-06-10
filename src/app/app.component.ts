import {Component, OnInit} from '@angular/core';
import {AdService} from './ad.service';
import {AdItem} from './ad-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AdService]
})
export class AppComponent implements OnInit{
    title = 'app';
    ads: AdItem[];

    constructor(private adService: AdService) {
    }

    ngOnInit() {
        this.ads = this.adService.getAds();
    }
}
