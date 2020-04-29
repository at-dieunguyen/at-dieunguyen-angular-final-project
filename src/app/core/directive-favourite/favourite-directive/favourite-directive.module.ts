import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteDirective } from '../favourite.directive';



@NgModule({
  declarations: [FavouriteDirective],
  imports: [
    CommonModule
  ],
  exports:[FavouriteDirective]
})
export class FavouriteDirectiveModule { }
