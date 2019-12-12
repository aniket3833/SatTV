import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: Boolean = false;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.isLogin = this.user.isLogin;
  }

}
