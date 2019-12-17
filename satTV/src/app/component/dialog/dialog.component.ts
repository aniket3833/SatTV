import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  subscriptionForm:FormGroup;
  user: any;
  dailogVal: number = 1;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: UserService,
    private notify: SharedService,
    private route: Router
  ) {
      this.user = this.service.CurrentUserValue;
      console.log(data);
  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.subscriptionForm = this.fb.group({
      name: new FormControl({disabled: true}),
      type: new FormControl(),
      price: new FormControl(),
      period: new FormControl(this.dailogVal)
    });
    this.subscriptionForm.controls['name'].disable();
    this.subscriptionForm.controls['type'].disable();
    this.subscriptionForm.controls['price'].disable();
  }

  subscribeTo(form: any) {
    if(form.value.period != undefined) {
      this.data.subDt = new Date().toString();
      this.data.expDt = this.addDays(new Date(), parseInt(form.getRawValue().period) * 30); 
      this.data.isActive = 1;
      switch(this.data.type) {
        case "GP":
          if(this.user.balance > (this.data.price * form.value.period)) {
            this.user.balance -= (form.value.period == 3 ) ? (this.data.price * 3 * 0.9): this.data.price * form.value.period;
            this.user.cr_pack = this.data;
          } else {
            console.log("Your account balance is low. Please recharge your account");
            this.notification({title:'User Account', body: 'Your account balance is low. Please recharge your account.'});
          }
          break;
        case "SP": 
          if(this.user.balance > (this.data.price * form.value.period)) {
            this.user.balance -= (form.value.period == 3 ) ? (this.data.price * 3 * 0.9): this.data.price * form.value.period;
            this.user.cr_pack = this.data;
          } else {
            console.log("Your account balance is low. Please recharge your account");
            this.notification({title:'User Account', body: 'Your account balance is low. Please recharge your account.'});
          }
          break;
        case "ES": 
          if(this.user.balance > (this.data.price * form.value.period)) {
            this.user.balance -= (form.value.period == 3 ) ? (this.data.price * 3 * 0.9): this.data.price * form.value.period;
            this.user.cr_service.push(this.data);
          } else {
            console.log("Your account balance is low. Please recharge your account");
            this.notification({title:'User Account', body: 'Your account balance is low. Please recharge your account.'});
          }
          break;
        case "CS": 
          if(this.user.balance > (this.data.price * form.value.period)) {
            this.user.balance -= (form.value.period == 3 ) ? (this.data.price * 3 * 0.9): this.data.price * form.value.period;
            this.user.cr_service.push(this.data);
          } else {
            console.log("Your account balance is low. Please recharge your account");
            this.notification({title:'User Account', body: 'Your account balance is low. Please recharge your account.'});
          }
          break;
        case "IC":
          if(this.user.balance > (this.data.price * form.value.period)) {
            this.user.balance -= (form.value.period == 3 ) ? (this.data.price * 3 * 0.9): this.data.price * form.value.period;
            this.user.cr_channel.push(this.data);
          } else {
            console.log("Your account balance is low. Please recharge your account");
            this.notification({title:'User Account', body: 'Your account balance is low. Please recharge your account.'});
          }
          break; 
      }
      this.service.updateUser(this.user);
      this.notification({title:'User Account', body: 'User account details has been updated successfully!!'});
      this.route.navigate(['']);
    } else {
      console.log("Month is not selected");
      this.notification({title:'Validation Error', body: 'Please fill or select the mandatory fields.'});
    }
    
  }

  onNoClick() {
    this.dialogRef.close();
  }

  addDays(date: Date, days: number): string {
    date.setDate(date.getDate() + days);
    return date.toString();
  }

  notification(payload: any) {
    this.notify.notifyUser({
      title: payload.title,
      body: payload.body
    });
  }

}
