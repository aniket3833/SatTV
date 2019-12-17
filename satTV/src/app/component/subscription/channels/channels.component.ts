import { Component, OnInit, Input } from '@angular/core';
import { channelsList } from '../../../model/subscription'
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  @Input() channels = channelsList;
  user: any;
  order: string = "name";

  constructor(
    private dialog: MatDialog,
    private service: UserService,
    private notify: SharedService
  ) { }

  ngOnInit() {
    this.user = this.service.CurrentUserValue;
    //Disabled the Channels which are already Subscribed
    if(this.user.cr_channel.length > 0) {
      for(let channel of this.user.cr_channel){
        for(let i=0; i< this.channels.length ;i++) {
          if(this.channels[i].name == channel.name){
            this.channels[i].isActive = 1;
          }
        }
      }
    } else {
      this.notify.notifyUser({
        title: 'About Channel Subscription',
        body: 'You have not subscribe any Channel yet!'
      })
    }

    //Disabled the Channels which are come along with the Pack
    if(this.user.cr_pack && this.user.cr_pack.channelList) {
      for(let i = 0; i < this.user.cr_pack.channelList.length; i++) {
        for(let j = 0; j < this.channels.length; j++ ) {
          if(this.channels[j].name == this.user.cr_pack.channelList[i]){
            this.channels[j].isActive = 1;
          }
        }
      }
      this.user.cr_pack.channelList = this.user.cr_pack.channelList.sort();
    }
    else {
      this.notify.notifyUser({
        title: 'About Pack Subscription',
        body: 'You have not subscribe any Package yet!'
      })
    }
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
