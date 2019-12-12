import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { plans } from 'src/app/model/subscription';

@Component({
  selector: 'app-mysub',
  templateUrl: './mysub.component.html',
  styleUrls: ['./mysub.component.scss']
})
export class MysubComponent implements OnInit {
  user: any;
  package: any;
  sub_services: any[];
  sub_channels: any[];
  plans: any[];

  breakpoint: number;
  ratio: string;

  constructor(
    private route: Router,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.resize(window.innerWidth);
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user) {
      this.getSubscriptionsForUser(this.user);
    }
  }

  getSubscriptionsForUser(user: any) {
    this.plans = plans;
    this.package = user.cr_pack;
    this.sub_services = user.cr_service;
    this.sub_channels = user.cr_channel;
  }

  goto(type: string) {
    switch(type) {
      case 'package': 
        this.route.navigate(['subscription/Packages']);
        break;
      case 'service':
        this.route.navigate(['subscription/Services']);
        break;
      case 'channel':
        this.route.navigate(['subscription/Channels']);
        break;
      default: break;
    }
  }

  /**
   * @purpose : To resize the grid size and tile structure.
   * @param event : Navtive Element 
   *
   */
  onResize(event) {
    this.resize(event.target.innerWidth);
  }
  
  resize(width: number) {
    if (width <= 400) {
      this.breakpoint = 1;
      this.ratio = this.el.nativeElement.offsetWidth + ':' + this.el.nativeElement.offsetHeight / 4;
    } else {
      this.breakpoint = 5;
      this.ratio = this.el.nativeElement.offsetWidth / 4 + ':' + this.el.nativeElement.offsetHeight;
    }
  }
}
