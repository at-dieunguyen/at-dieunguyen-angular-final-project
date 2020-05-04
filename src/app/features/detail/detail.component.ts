import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import { ActivatedRoute } from '@angular/router';

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
  showFavourite = false;
  public userData: any;
  id = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).id : false
  domainUser = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/user';
  domainProduct = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/product';
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id');

    this.apiService.getId(productId).subscribe(data => this.productId = data);

    if (this.id) {
      this.apiService.get(this.domainUser + '/' + this.id).subscribe(e => {
        this.userData = e
        this.userData.arrFavourite = JSON.parse(this.userData.arrFavourite);//parse arrFa string to array
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
    else {
      this.apiService.get(this.domainProduct).subscribe(data => this.product = data);
    }

  }
}
