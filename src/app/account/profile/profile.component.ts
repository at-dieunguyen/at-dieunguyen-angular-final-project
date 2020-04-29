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
  email = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).email : false
  domainUser: 'http://localhost:3001/users';
  constructor(
    private apiService: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {


    this.apiService.get('http://localhost:3001/users/?email=' + this.email).subscribe(e => {
      this.profileUser = e[0]
    })
  }

  onSubmitForm(form: NgForm) {
    let newData = { ...this.profileUser }
    newData.firstName = form.value.fName;
    newData.lastName = form.value.lName;
    console.log(newData)
    localStorage.setItem('currentUser',JSON.stringify(newData))
    this.auth.changeUser(newData)
    this.apiService.put('http://localhost:3001/users/' + ''+ newData.id, newData)
  }
}
