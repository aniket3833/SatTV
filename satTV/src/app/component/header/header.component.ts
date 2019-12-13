import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  isLogin: any = false;
  constructor(private service: UserService) { }

  ngOnChanges() {
    if(this.service.currentUser) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  ngOnInit() {
  }
}
