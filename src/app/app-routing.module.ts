import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'man',
    loadChildren: () => import('./features/man/man.module').then(m => m.ManModule)
  },
  {
    path: 'women',
    loadChildren: () => import('./features/women/women.module').then(m => m.WomenModule)
  },
  {
    path: 'children',
    loadChildren: () => import('./features/children/children.module').then(m => m.ChildrenModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./features/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./account/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  // path: 'profile',
  // loadChildren: () => import('./account/profile/profile.module').then(m => m.ProfileModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
