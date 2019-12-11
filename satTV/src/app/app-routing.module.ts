import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


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
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
