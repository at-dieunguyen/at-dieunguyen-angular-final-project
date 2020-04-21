import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';
import { findIndex } from 'rxjs/operators';

@Directive({
  selector: '[appFavorite]'
})
export class FavouriteDirective {
  @Input() node: any;//get value of data object when click
  domainProduct = 'http://localhost:3000/products';
  domainUser = 'http://localhost:3001/users';
  public userData: [];
  public product: [];
  constructor(
    private apiService: ApiService
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {

    if (element.nodeName === 'I') {

      // this.apiService.get(this.domainUser).subscribe(data => {
      //   this.userData = data
      //   console.log(this.userData[0].arrFavourite)

      //   let index = this.userData.findIndex(this.userData[0].arrFavourite, this.node);
      //   this.node.state = !this.node.state;
      //   if (this.node.state === true) {
      //     if (index == -1) {
      //       this.userData[0].arrFavourite.push(this.node);
      //       // console.log(this.userData[0].arrFavourite);
      //       this.apiService.put(this.domainUser, this.userData)
      //     }
      //   }
      // })

      }
    }

}
