import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  loginForm: FormGroup;
  users: any;
  user: any;
  error: any;

  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.initForm();
    this.getAllUser();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")])
    });
  }

  login() {
    if(this.loginForm.valid && this.users.length > 0) {
      for(var user of this.users) {
        if (user['email'] == this.loginForm.value.email && user['phone'] == this.loginForm.value.phone){
          const id = user['id'];
          console.log('Logged In Successfully');
        }
      }
    }
  }

  registerUser() {
    var user = {
      name: "Aniket Kalsekar",
      email: "aniketjk@gmail.com",
      phone: 7385700517,
      balance: 100,
      cr_pack: {},
      cr_service: [{}],
      cr_channel: [{}],
      isActive: 1,
    }
    return this.service.addUser(user).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log(error)
    });
  }

  getAllUser() {
    this.service.getAllUser().subscribe(data => {
      this.users = data.map( e=> {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }as User
      })
    console.log(this.users);
    }, error => {
      this.error = error.message;
      console.log(error)
    })
  }

}
