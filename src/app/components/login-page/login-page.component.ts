import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LineLiffService} from "../../services/line-liff.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private liffService: LineLiffService) {
  }

  onLogin() {
    console.log("login");
    this.liffService.loging()

  }
}
