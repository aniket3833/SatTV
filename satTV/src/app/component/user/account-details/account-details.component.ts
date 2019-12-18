import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  loginForm: FormGroup;
  user: any;

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private route: Router,
    private notify: SharedService
  ) 
  {
    this.user = this.service.CurrentUserValue;
  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      name: new FormControl(this.user.name, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      email: new FormControl(this.user.email, [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      phone: new FormControl(this.user.phone, [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")])
    })
  }

  updateUser() {
    const id = this.user.id;
    console.log(this.user);
    if(this.loginForm.valid){
      this.service.updateUser(this.user).then( resp => {
        console.log(resp);
        this.notify.notifyUser({
          title: 'User Updated',
          body: 'User data has been updated successfully!!'
        });
        this.service.loggedOut();
        this.route.navigate(['']);
      });
    } else {
      this.notify.notifyUser({
        title: 'Validations Failed',
        body: 'Please fill the all the fields'
      });
    }
  }

}
