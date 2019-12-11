import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MysubComponent } from './mysub/mysub.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';


const routes: Routes = [
  {
    path: 'mysub',
    component: MysubComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account-details',
    component: AccountDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
