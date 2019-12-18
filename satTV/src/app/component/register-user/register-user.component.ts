import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  enrollForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private notify: SharedService,
    private route: Router
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.enrollForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      email: new FormControl('',  [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")])
    })
  }

  registerUser() {
    var user = {
      name: this.enrollForm.value.name,
      email: this.enrollForm.value.email,
      phone: this.enrollForm.value.phone,
      balance: 100,
      cr_pack: {},
      cr_service: [{}],
      cr_channel: [{}],
      isActive: 1,
    }
    if(this.enrollForm.valid) {
      return this.service.addUser(user).then(resp => {
        this.notify.notifyUser({title: 'User Registration', body: 'User has been register successfully!!'});
        this.route.navigate(['']);
      }).catch(error => {
        console.log(error);
        this.notify.notifyUser({title: 'User Registration', body: 'User registration failed!!'})
      });
    }
  }

}
