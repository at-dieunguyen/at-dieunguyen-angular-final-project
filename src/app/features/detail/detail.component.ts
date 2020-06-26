import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productId = {
    id: '',
    name: '',
    category: '',
    img: '',
    price: ''
  };

  product: any;
  productAll: any;
  showFavourite = false;
  public userData: any;
  idProduct: number;
  id = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).id : false
  domainUser = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/user';
  domainProduct = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/product';
  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.router.params.subscribe(e => { //theo doi thay doi theo id
      this.idProduct = e.id;
      this.apiService.getId(this.domainProduct + '/', this.idProduct).subscribe(data => { //product thay doi theo id
        this.productId = data
      });
    })
    if (this.id) {
      this.apiService.get(this.domainUser + '/' + this.id).subscribe(e => {
        this.userData = e
        this.userData.arrFavourite = JSON.parse(this.userData.arrFavourite);//parse arrFa string to array
        this.apiService.get(this.domainProduct).subscribe(data => {
          this.productAll = data
        })
        this.apiService.get(this.domainProduct).subscribe(data => {
          if (this.productId.category == 'women') {
            this.product = data.splice(0, 4);
          }
          if (this.productId.category == 'man') {
            this.product = data.splice(9, 4);
          }
          if (this.productId.category == 'child') {
            this.product = data.splice(17, 4);
          }
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
    else {
      this.apiService.get(this.domainProduct).subscribe(data => {
        this.productAll = data
      })
      this.apiService.get(this.domainProduct).subscribe(data => {
        if (this.productId.category == 'women') {
          this.product = data.splice(0, 4);
        }
        if (this.productId.category == 'man') {
          this.product = data.splice(9, 4);
        }
        if (this.productId.category == 'child') {
          this.product = data.splice(17, 4);
        }
      })
    }
  }
}
