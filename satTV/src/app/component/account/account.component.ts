import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SharedService } from 'src/app/services/shared.service';
import { PushNotificationOptions } from 'src/app/model/pushNotificationOptions';

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

  constructor(
    private fb: FormBuilder, 
    private service: UserService,
    private notify: SharedService,
    private route: Router
    ) {
      if(this.service.CurrentUserValue) {
        this.route.navigate(['/home']);
      }
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")])
    });
  }

  login() {
    if(this.loginForm.valid) {
      this.service.getUser(this.loginForm.value.email, this.loginForm.value.phone).subscribe(data => {
        data.map( e=> {
          this.user =  {
             id: e.payload.doc.id,
             ...e.payload.doc.data()
           } as User
           if (this.user['email'] == this.loginForm.value.email && this.user['phone'] == this.loginForm.value.phone){
              localStorage.setItem('user', JSON.stringify(this.user));
              this.service.currentUserSubject.next(this.user);
              this.route.navigate(['/home']);
              console.log('Logged In Successfully');
           } else {
             console.log("user not found");
             this.notify.requestPermission().subscribe(permit => {
               if(this.notify.isPermissionGranted(permit)) {
                  let options = new PushNotificationOptions();
                  options.body = "Please check the credentials"
                  this.notify.create("User Login Error", options).subscribe(resp => {
                    console.log(resp);
                  });
               }
             })
           }
         })
       }, error => {
         this.error = error.message;
         console.log(error);
       });    
    } else { //For Testing only after that remove the code in else block
      this.route.navigate(['user/mysub']);
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

}
