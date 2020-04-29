import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  user = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : {})
  currentUser = this.user.asObservable();

  changeUser(user: any) {
    this.user.next(user)
    console.log(user);

  }

  constructor() { }
}
