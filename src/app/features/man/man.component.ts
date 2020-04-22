import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit {

  public product = [];
  public userData = [];
  domain = 'http://localhost:3000/products';
  showFavourite = false;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.get(this.domain).subscribe(data => this.product = data);
    if (localStorage.getItem('currentUser')) {
      // console.log('da login');
      this.showFavourite = true;
    }
    else {
      // console.log('login not yet');
    }
  }
}
