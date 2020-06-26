import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import { findIndex } from 'rxjs/operators';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFavorite]'
})
export class FavouriteDirective {
  @Input() node: any;//get value of data object when click
  domainProduct = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/product';
  domainUser = 'https://5eaecc030605ed0016d2c4b0.mockapi.io/user/';
  public userData: [];
  public product: [];
  id = JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).id : false

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {
    if (this.id) {
      if (element.nodeName === 'I') {

        this.apiService.get(this.domainUser + '/' + this.id).subscribe(data => {
          this.userData = data
          console.log(data);
          data.arrFavourite = JSON.parse(data.arrFavourite);
          let index = data.arrFavourite.findIndex(element => element.id == this.node.id);
          this.node.favourite = !this.node.favourite;
          if (this.node.favourite === true) {
            if (index == -1) {
              data.arrFavourite.push(this.node);
              this.apiService.putFa(this.domainUser + '' + data.id, data)
            }
          }
          else {
            data.arrFavourite.splice(index, 1);
            this.apiService.putFa(this.domainUser + '' + data.id, data)
          }

        })

      }
    }
  }
}
