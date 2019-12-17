import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { packages } from '../../../model/subscription'
import { DialogComponent } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  @Input() subPackages = packages;
  user: any;

  constructor(
    public dialog: MatDialog,
    private service: UserService
  ) {
    this.user = this.service.CurrentUserValue;
  }

  ngOnInit() {

  }

  subscribe(subscription: any, i: number, type: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      disableClose: true,
      hasBackdrop: true,
      data: subscription,
      closeOnNavigation: true
    })
  }

  

}
