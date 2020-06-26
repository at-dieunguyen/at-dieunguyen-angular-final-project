import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenRoutingModule } from './women-routing.module';
import { WomenComponent } from './women.component';
import { FavouriteDirectiveModule } from 'src/app/core/directive-favourite/favourite-directive/favourite-directive.module';

@NgModule({
  declarations: [WomenComponent],
  imports: [
    CommonModule,
    WomenRoutingModule,
    FavouriteDirectiveModule
  ],
  exports: [WomenComponent],
  bootstrap: [WomenComponent]
})
export class WomenModule { }
