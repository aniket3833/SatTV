import { Component, OnInit, Input } from '@angular/core';
import { services, Service } from '../../../model/subscription'
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() services = services;
  user: any;
  sub_services: Service;

  constructor(
    public dialog: MatDialog,
    private service: UserService
  ) { 
    
  }

  ngOnInit() {
    this.user = this.service.CurrentUserValue;
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
