import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WomenModule } from './women/women.module';
import { ManModule } from './man/man.module';
import { ChildrenModule } from './children/children.module';
import { DetailModule } from './detail/detail.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    WomenModule,
    ManModule,
    ChildrenModule,
    DetailModule,
    HttpClientModule,
  ],
  exports:[],
  providers: []
})
export class FeatureModule { }
