import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenComponent } from './children.component';
import { FavouriteDirectiveModule } from 'src/app/core/directive-favourite/favourite-directive/favourite-directive.module';



@NgModule({
  declarations: [ChildrenComponent],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    FavouriteDirectiveModule
  ],
  exports:[ChildrenComponent],
  bootstrap: [ChildrenComponent]
})
export class ChildrenModule { }
