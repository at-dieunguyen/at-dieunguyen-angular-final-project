import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin = false;
  constructor(
    private router: Router
  ) { }
  logout() {
    this.isLogin = false;
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/home');

  }
}
