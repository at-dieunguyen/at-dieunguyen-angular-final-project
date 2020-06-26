import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CarouselModule.forRoot()

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: []
})
export class SharedModule { }
