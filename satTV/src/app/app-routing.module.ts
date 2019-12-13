import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AccountComponent } from './component/account/account.component';
import { AuthGaurdService } from './services/auth-gaurd.service';


const routes: Routes = [
  {
    path: 'subscription',
    loadChildren: './component/subscription/subscription.module#SubscriptionModule',
    canActivate: [AuthGaurdService]
  },
  {
    path: 'user',
    loadChildren: './component/user/user.module#UserModule',
    canActivate: [AuthGaurdService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGaurdService]
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
