import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  @Input()

  domainUser = 'https://my-json-server.typicode.com/at-dieunguyen/json-server-api/users';
  domainProduct = 'https://my-json-server.typicode.com/at-dieunguyen/json-server-api/products';
  userData: any;
  product: any;
  showFavourite = false;
  id = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).id : false
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    if (this.id) {

      this.apiService.get('https://5eaecc030605ed0016d2c4b0.mockapi.io/user/' + this.id).subscribe(e => {
        this.userData = e
        this.userData.arrFavourite  = JSON.parse(this.userData.arrFavourite)
        this.apiService.get(this.domainProduct).subscribe(data => {
          this.product = data;
          this.showFavourite = true;

          for (let i = 0; i < this.userData.arrFavourite.length; i++) {
            for (let j = 0; j < this.product.length; j++) {
              if (this.userData.arrFavourite[i].id == this.product[j].id) {
                this.product[j].favourite = true;
              }
            }
          }
        });
      })
    }
  }

}

