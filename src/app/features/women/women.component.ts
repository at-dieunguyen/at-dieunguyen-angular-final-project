import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit { domainUser = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/user';
domainProduct = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/product';
userData: any;
product: any;
showFavourite = false;
id = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).id : false
constructor(
  private apiService: ApiService
) { }

ngOnInit(): void {

  if (this.id) {
    this.apiService.get(this.domainUser + '/' + this.id).subscribe(e => {
      this.userData = e

      this.userData.arrFavourite = JSON.parse(this.userData.arrFavourite);//parse arrFa string to array
      this.apiService.get(this.domainProduct).subscribe(data => {
        this.product = data;
        this.showFavourite = true;

        for (let i = 0; i < this.userData.arrFavourite.length; i++) {
          console.log(this.userData.arrFavourite[i].id)
          for (let j = 0; j < this.product.length; j++) {
            if (this.userData.arrFavourite[i].id == this.product[j].id) {
              this.product[j].favourite = true;
              console.log(this.product[j].favourite)
            }
          }
        }

      });
    })
  }
  else {
    this.apiService.get(this.domainProduct).subscribe(data => this.product = data);
  }
}
}
