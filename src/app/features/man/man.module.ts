import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import { ManComponent } from './man.component';
import { FavouriteDirective } from 'src/app/shared/directive-favourite/favourite.directive';



@NgModule({
  declarations: [ManComponent, FavouriteDirective],
  imports: [
    CommonModule,
    ManRoutingModule
  ],
  exports: [ManComponent],
  bootstrap: [ManComponent]
})
export class ManModule { }
