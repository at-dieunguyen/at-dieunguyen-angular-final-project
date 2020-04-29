import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { FavouriteDirectiveModule } from 'src/app/core/directive-favourite/favourite-directive/favourite-directive.module';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    FavouriteDirectiveModule
  ],
  exports: [DetailComponent],
  bootstrap: [DetailComponent]
})
export class DetailModule { }
