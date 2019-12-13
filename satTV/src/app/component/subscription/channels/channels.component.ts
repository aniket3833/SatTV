import { Component, OnInit, Input } from '@angular/core';
import { channelsList } from '../../../model/subscription'
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  @Input() channels = channelsList;
  user: User;

  constructor(
    private dialog: MatDialog,
    private service: UserService
  ) { }

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
