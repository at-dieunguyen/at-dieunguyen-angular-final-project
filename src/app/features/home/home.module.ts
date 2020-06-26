import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FavouriteDirectiveModule } from 'src/app/core/directive-favourite/favourite-directive/favourite-directive.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FavouriteDirectiveModule
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
