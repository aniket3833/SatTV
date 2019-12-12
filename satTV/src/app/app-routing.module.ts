import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AccountComponent } from './component/account/account.component';


const routes: Routes = [
  {
    path: 'subscription',
    loadChildren: './component/subscription/subscription.module#SubscriptionModule'
  },
  {
    path: 'user',
    loadChildren: './component/user/user.module#UserModule'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AccountComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
