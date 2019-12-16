import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from '../user/user-routing.module';
import { MysubComponent } from '../user/mysub/mysub.component';
import { AccountComponent } from '../account/account.component';
import { AccountDetailsComponent } from '../user/account-details/account-details.component';

import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatDividerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

@NgModule({
  declarations: [MysubComponent, AccountDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule
  ],
  providers:[UserService, SharedService]
})
export class UserModule { }
