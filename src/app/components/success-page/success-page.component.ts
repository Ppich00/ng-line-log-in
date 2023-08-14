import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {liff} from "@line/liff";
import {LineLiffService} from "../../services/line-liff.service";

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  liffService = inject(LineLiffService)
  idToken = '';
  displayName = '';
  pictureUrl = '';
  statusMessage = '';
  userId = '';

  ngOnInit(): void {
    this.initLine();
  }

  get isLogin() {
    return this.liffService.isLogin
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
    this.liffService.loging()
  }

  logout(): void {
    this.liffService.logout()
  }
}
