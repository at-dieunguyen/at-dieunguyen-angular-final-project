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
  showFavourite = false;
  public user: any
  domainProduct = 'http://localhost:3000/products';
  domainUser = 'http://localhost:3001/users';
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private route2: Router
  ) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id');

    this.apiService.getId(productId).subscribe(data => this.productId = data);
    // this.apiService.get(this.domainProduct).subscribe(data => this.product = data);

    this.apiService.get(this.domainUser).subscribe(data => {
      this.user = data[0].arrFavourite
      this.apiService.get(this.domainProduct).subscribe(data => {
        this.product = data;
        if (localStorage.getItem('currentUser')) {
          this.showFavourite = true;

          for (let i = 0; i < this.user.length; i++) {

            for (let j = 0; j < this.product.length; j++) {

              if (this.user[i].id === this.product[j].id) {
                this.product[j].favourite = true;
                console.log(this.product[j]['favourite'])
              }
            }
          }
        }

        else {
        }
      });
    })
  }
}
