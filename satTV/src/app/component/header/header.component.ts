import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service: UserService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.service.loggedOut();
    this.route.navigate(['']);
  }
}
