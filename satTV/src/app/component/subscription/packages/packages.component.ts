import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { packages } from '../../../model/subscription'
import { DialogComponent } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  @Input() subPackages = packages;

  constructor(public dialog: MatDialog) {

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
