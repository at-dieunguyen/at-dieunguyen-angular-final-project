import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenRoutingModule } from './women-routing.module';
import { WomenComponent } from './women.component';

@NgModule({
  declarations: [WomenComponent],
  imports: [
    CommonModule,
    WomenRoutingModule
  ],
  exports: [WomenComponent],
  bootstrap: [WomenComponent]
})
export class WomenModule { }
