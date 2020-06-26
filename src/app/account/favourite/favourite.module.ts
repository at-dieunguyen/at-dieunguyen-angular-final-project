import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite.component';
import { FavouriteDirectiveModule } from 'src/app/core/directive-favourite/favourite-directive/favourite-directive.module';
import { FavouriteRoutingModule } from './favourite-routing.module';



@NgModule({
  declarations: [FavouriteComponent],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    FavouriteDirectiveModule
  ]
})
export class FavouriteModule { }
