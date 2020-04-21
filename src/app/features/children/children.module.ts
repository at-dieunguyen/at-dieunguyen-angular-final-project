import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenComponent } from './children.component';



@NgModule({
  declarations: [ChildrenComponent],
  imports: [
    CommonModule,
    ChildrenRoutingModule
  ],
  exports:[ChildrenComponent],
  bootstrap: [ChildrenComponent]
})
export class ChildrenModule { }
