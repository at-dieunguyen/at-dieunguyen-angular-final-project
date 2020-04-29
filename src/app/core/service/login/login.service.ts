import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin = new BehaviorSubject<boolean>(this.local()? true : false);
  currentStatus = this.isLogin.asObservable();
  constructor(

  ) { }
  local() {
    return JSON.parse(localStorage.getItem('currentUser'))
  }
  changeSatusLogin(status: boolean) {
    this.isLogin.next(status);
  }
}
