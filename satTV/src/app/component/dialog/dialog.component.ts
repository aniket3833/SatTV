import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  subscriptionForm:FormGroup;
  user: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: UserService
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
      period: new FormControl()
    });
    this.subscriptionForm.controls['name'].disable();
    this.subscriptionForm.controls['type'].disable();
    this.subscriptionForm.controls['price'].disable();
  }

  subscribeTo(form: any) {
    if(form.value.period != undefined) {
      this.data.subDt = new Date().toString();
      this.data.expDt = this.addDays(new Date(), parseInt(form.getRawValue().period)); 
      this.data.isActive = 1;
      switch(this.data.type) {
        case "GP":
          if(this.user.balance > this.data.price) {
            this.user.balance -= (form.value.period == '90') ? (this.data.price * 0.9): this.data.price;
            this.user.cr_pack = this.data;
          } else {
            console.log("Your account balance is low. Please recharge your account");
          }
          break;
        case "SP": 
          if(this.user.balance > this.data.price) {
            this.user.balance -= (form.value.period == '90') ? (this.data.price * 0.9): this.data.price;
            this.user.cr_pack = this.data;
          } else {
            console.log("Your account balance is low. Please recharge your account");
          }
          break;
        case "ES": 
          if(this.user.balance > this.data.price) {
            this.user.balance -= (form.value.period == '90') ? (this.data.price * 0.9): this.data.price;
            this.user.cr_service.push(this.data);
          } else {
            console.log("Your account balance is low. Please recharge your account");
          }
          break;
        case "CS": 
          if(this.user.balance > this.data.price) {
            this.user.balance -= (form.value.period == '90') ? (this.data.price * 0.9): this.data.price;
            this.user.cr_service.push(this.data);
          } else {
            console.log("Your account balance is low. Please recharge your account");
          }
          break;
        case "IC":
          if(this.user.balance > this.data.price) {
            this.user.balance -= (form.value.period == '90') ? (this.data.price * 0.9): this.data.price;
            this.user.cr_channel.push(this.data);
          } else {
            console.log("Your account balance is low. Please recharge your account");
          }
          break; 
      }
      this.service.updateUser(this.user);
    } else {
      console.log("Month is not selected")
    }
    
  }

  onNoClick() {
    this.dialogRef.close();
  }

  addDays(date: Date, days: number): string {
    date.setDate(date.getDate() + days);
    return date.toString();
  }

}
