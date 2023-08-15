import {Injectable, OnInit} from '@angular/core';
import {liff} from "@line/liff";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LineLiffService implements OnInit {
  host = window.location.origin;

  constructor(private router: Router) {
    liff.init({liffId: "2000383540-BegEJ63g"})
  }

  async ngOnInit() {
  }

  get isLogin() {
    return liff.isLoggedIn()
  }

  loging() {
    liff.login({redirectUri: `${this.host}/success`})
  }

  lineLiffInit() {
    liff.login({redirectUri: `${this.host}/success`})
  }


  logout() {
    liff.logout()
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload()
    })

  }
}
