import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import { ManComponent } from './man.component';
import { FavouriteDirectiveModule } from 'src/app/core/directive-favourite/favourite-directive/favourite-directive.module';
// import { FavouriteDirective } from 'src/app/core/directive-favourite/favourite.directive';


@NgModule({
  declarations: [ManComponent],
  imports: [
    CommonModule,
    ManRoutingModule,
    FavouriteDirectiveModule
  ],
  exports: [ManComponent],
  bootstrap: [ManComponent]
})
export class ManModule { }
