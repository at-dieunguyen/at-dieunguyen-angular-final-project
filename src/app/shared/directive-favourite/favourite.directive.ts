import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/core/service/api/api.service';

@Directive({
  selector: '[appFavorite]'
})
export class FavouriteDirective {
  @Input() node: any;//get value of data object when click
  domainProduct = 'http://localhost:3000/products';
  domainUser = 'http://localhost:3001/users';
  public product:[];
  constructor(
    private apiService: ApiService
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {
    if (element.nodeName === 'I') {//get Element has clicked
      this.node.state = !this.node.state;
      // this.node.state ? this.node.count = parseInt(this.node.count) + 1 : this.node.count = parseInt(this.node.count) - 1;
      if (this.node.state === true) {
        console.log(this.node.state)
        element.style.color = "red";
        this.apiService.get(this.domainProduct).subscribe(data => this.product = data);

      }
      else element.style.color = "grey";
    }
  }
}
