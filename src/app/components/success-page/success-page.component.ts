import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {liff} from "@line/liff";

@Component({
    selector: 'app-success-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './success-page.component.html',
    styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {

    idToken = '';
    displayName = '';
    pictureUrl = '';
    statusMessage = '';
    userId = '';

    ngOnInit(): void {
        this.initLine();
    }

    initLine(): void {
        liff.ready.then(() => {
            if (liff.isLoggedIn()) {
                this.runApp();
            }
        }, err => console.error(err));
    }

    runApp(): void {
        const idToken = liff.getIDToken() || '';
        this.idToken = idToken;
        liff.getProfile().then(profile => {
            console.log(profile);
            this.displayName = profile.displayName;
            this.pictureUrl = profile.pictureUrl || '';
            this.statusMessage = profile.statusMessage || '';
            this.userId = profile.userId;
        }).catch(err => console.error(err));
    }

    login() {
        liff.login({redirectUri: "https://localhost:4200"})
    }

    logout(): void {
        liff.logout();
        window.location.reload();
    }
}
