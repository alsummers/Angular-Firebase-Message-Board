import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail = "";
  userPassword = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    if (this.userEmail.trim() === '' || this.userPassword.trim() === '') {
      return;
    }

    this.authService.loginUserToFirebase(this.userEmail, this.userPassword)
  }

}
