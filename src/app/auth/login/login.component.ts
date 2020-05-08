import { AuthService } from './../../core/service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ApiService } from '../../core/service/api/api.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/service/login/login.service';

export interface CurrentUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  arrFavourite: '';
  id: number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  domain = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/user';
  loginForm: FormGroup;
  userData: [];
  currentUser: CurrentUser;
  notification = 0;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private loginService: LoginService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.apiService.get(this.domain, '').subscribe(data => {
      this.userData = data;
    }, err => {
      console.log(err);
    });
    this.checkLogin();
  }
  login() {
    // console.log(this.loginForm);
    this.currentUser = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      firstName: '',
      lastName: '',
      arrFavourite: '',
      id: 0,
    };

    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i]['email'] === this.currentUser.email && this.userData[i]['password'] === this.currentUser.password) {
        this.currentUser.firstName = this.userData[i]['firstName'];
        this.currentUser.lastName = this.userData[i]['lastName'];
        this.currentUser.arrFavourite = this.userData[i]['arrFavourite'];
        this.currentUser.id = this.userData[i]['id'];

        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        let status = true
        // this.loginService.isLogin =true;
        this.loginService.changeSatusLogin(status);
        this.auth.changeUser(this.currentUser)
        this.router.navigate(['/dashboard']);
      }
      else {
        this.notification = -1;
      }
    }
  }

  checkLogin() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/dashboard']);
    }
  }
}
