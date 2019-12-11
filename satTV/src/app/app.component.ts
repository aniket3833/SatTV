import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'satTV';

  constructor(private route: Router) {
    
  }

  ngOnInit() {
    this.route.navigate(['']); //Always Redirect to the Home Component when browser get refresh.
  }
}
