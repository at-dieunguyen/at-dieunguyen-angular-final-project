import { AuthService } from './../../core/service/auth/auth.service';
import { ApiService } from './../../core/service/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/service/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  profileUser: any;
  // email = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).email : false

  constructor(
    private router: Router,
    private apiService: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    this.auth.currentUser.subscribe(e => {
      this.profileUser = e;
    })


  }
}
