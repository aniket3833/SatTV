import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from '../subscription/subscription-routing.module';
import { PackagesComponent } from '../subscription/packages/packages.component';
import { ServicesComponent } from '../subscription/services/services.component';
import { ChannelsComponent } from '../subscription/channels/channels.component';

import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';


@NgModule({
  declarations: [
    PackagesComponent, 
    ServicesComponent, 
    ChannelsComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SubscriptionModule { }
