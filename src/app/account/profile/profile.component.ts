import { AuthService } from './../../core/service/auth/auth.service';
import { ApiService } from './../../core/service/api/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileUser: any;
  userEdit: any;
  id = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).id : false
  domainUser: 'https://5eaecc030605ed0016d2c4b0.mockapi.io/user';
  constructor(
    private apiService: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
     this.apiService.get('https://5eaecc030605ed0016d2c4b0.mockapi.io/user/' + this.id).subscribe(e => {
      this.profileUser = e
    })
  }

  onSubmitForm(form) {
    // let newData = { ...this.profileUser }
    this.profileUser.firstName = form.value.fName;
    this.profileUser.lastName = form.value.lName;
    localStorage.setItem('currentUser',JSON.stringify(this.profileUser))
    this.auth.changeUser(this.profileUser)
    this.apiService.put('https://5eaecc030605ed0016d2c4b0.mockapi.io/user/' + ''+ this.profileUser.id, this.profileUser)

  }
}
