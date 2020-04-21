import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite.component';
import { FavouriteRoutingModule } from './favourite-routing.module';



@NgModule({
  declarations: [FavouriteComponent],
  imports: [
    CommonModule,
    FavouriteRoutingModule
  ]
})
export class FavouriteModule { }
