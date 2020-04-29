import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private route:Router
  ) { }
  isLogin: boolean;
  ngOnInit(): void {
    this.loginService.currentStatus.subscribe(e =>{ this.isLogin = e; console.log(e);
    })
  }
  logOut(){
    let stautus = false;
    this.loginService.changeSatusLogin(stautus);
    localStorage.removeItem('currentUser')
    this.route.navigateByUrl('/home')
  }
}
