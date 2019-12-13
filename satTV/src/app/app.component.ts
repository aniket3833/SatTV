import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentUser: User;
  title = 'satTV';

  constructor(private route: Router, private userService: UserService) {
    this.userService.currentUser.subscribe( e => {
      this.currentUser = e;
    });
  }

  ngOnInit() {
    this.route.navigate(['']); //Always Redirect to the Home Component when browser get refresh.
  }
}
