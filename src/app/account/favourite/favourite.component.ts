import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
@Input() id: number;
  domainUser = 'http://localhost:3001/users';
  domainProduct = 'http://localhost:3000/products';
  // domainProduct = '../../../assets/product2.json';
  userLocal: [];
  userData: [];
  product: [];
  arrIdProduct: any;
  arrIdUser: any;
  arrIdUser2= [];
  idUser: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {



    this.apiService.get(this.domainUser).subscribe(data => {
      this.userData = data;
      for (let i = 0; i < this.userData.length; i++) {
        this.arrIdUser = this.userData[i]['arrFavourite'];
        for (let i = 0; i < this.arrIdUser.length; i++) {
          // console.log(this.arrIdUser[i]);
          this.arrIdUser2 = this.arrIdUser[i];
          console.log(this.arrIdUser2)

        }
      }
    });
    this.apiService.get(this.domainProduct).subscribe(data => {
      this.product = data;
      // console.log(this.arrIdUser2)

    });

  }


}

