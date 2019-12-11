import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { ChannelsComponent } from './channels/channels.component';


const routes: Routes = [
  {
    path: 'Packages',
    component: PackagesComponent
  },
  {
    path: 'Services',
    component: ServicesComponent
  },
  {
    path: 'Channels',
    component: ChannelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
