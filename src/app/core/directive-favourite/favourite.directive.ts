import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import { findIndex } from 'rxjs/operators';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFavorite]'
})
export class FavouriteDirective {
  @Input() node: any;//get value of data object when click
  domainProduct = 'http://localhost:3000/products';
  domainUser = 'http://localhost:3001/users/';
  public userData: [];
  public product: [];
  email = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).email : false

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {
    if (this.email) {
      if (element.nodeName === 'I') {

        this.apiService.get(this.domainUser + '/?email=' + this.email).subscribe(data => {
          this.userData = data
          console.log(data[0].arrFavourite)
          let index = data[0].arrFavourite.findIndex(element => element.id === this.node.id);
          console.log(index);

          this.node.favourite = !this.node.favourite;
          if (this.node.favourite === true) {
            if (index == -1) {
              data[0].arrFavourite.push(this.node);
              // console.log(this.userData[0].arrFavourite);
              alert('Item has added to favourite!')
              this.apiService.put(this.domainUser + '' + data[0].id, data[0])
            }
          }
          else {
            data[0].arrFavourite.splice(index, 1);
            alert('Item has removed to favourite!')
            this.apiService.put(this.domainUser + '' + data[0].id, data[0])
          }

        })

      }
    }
  }
}
