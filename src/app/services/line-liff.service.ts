import {Injectable} from '@angular/core';
import {liff} from "@line/liff";

@Injectable({
    providedIn: 'root'
})
export class LineLiffService {

    constructor() {

    }


    loging() {
        liff.init({liffId: '2000383540-BegEJ63g', withLoginOnExternalBrowser: true}, () => {
            if (liff.isLoggedIn()) {
                console.log("login")
            } else {

                liff.login({redirectUri: "https://localhost:4200/success"})
            }
        })
    }

    lineLiffInit() {
        liff.login({redirectUri: "https://localhost:4200/success"})
    }
}
