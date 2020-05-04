import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../core/service/api/api.service';
import { Router } from '@angular/router';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  arrFavourite: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  domain = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/user';
  data = [];
  registerForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rePass: ['', Validators.required]
    }, {
      validators: this.matchPasswords
    });

  }

  matchPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('rePass').value;
    return pass === confirmPass ? null : { notSame: true }
  }

  register() {
    console.log(this.registerForm);
    this.user = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      arrFavourite: '[]'
    };
    // console.log(this.user);
    this.apiService.post(this.domain, this.user)
    this.router.navigate(['/login']);

  }
}
