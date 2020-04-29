import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  domainUser = 'http://localhost:3001/users';
  domainProduct = 'http://localhost:3000/products';
  userData: any;
  userDataId: any;
  product: any;
  showFavourite = false;
  email = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).email : false
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    if (this.email) {
      this.apiService.get(this.domainUser + '/?email=' + this.email).subscribe(e => {

        this.userData = e
        this.userDataId = this.userData[0].arrFavourite
        console.log(this.userDataId)
        // this.data = this.userData[0].arrFavourite;
        this.apiService.get(this.domainProduct).subscribe(data => {
          this.product = data;
          console.log(this.product)
          this.showFavourite = true;

          for (let i = 0; i < this.userData[0].arrFavourite.length; i++) {
            console.log(this.userData[0].arrFavourite[i].id)
            for (let j = 0; j < this.product.length; j++) {
              if (this.userData[0].arrFavourite[i].id === this.product[j].id) {
                this.product[j].favourite = true;
                console.log(this.product[j].favourite)
              }
            }
          }

        });
      })
    }
    else {
      this.apiService.get(this.domainProduct).subscribe(data => this.product = data)
      console.log(this.product)
    }
  }

}
