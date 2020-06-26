import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { FavouriteModule } from './favourite/favourite.module';


@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ProfileModule,
    FavouriteModule
  ]
})
export class AccountModule { }
