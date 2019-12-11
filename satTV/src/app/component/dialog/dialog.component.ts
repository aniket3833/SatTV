import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  subscriptionForm:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
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
    console.log(form.getRawValue());
    if(form.value.period != undefined) {
      this.data.subDt = new Date();
      this.data.expDt = this.addDays(new Date(), parseInt(form.getRawValue().period)); 
      this.data.isActive = 1;
      console.log(this.data);
    } else {
      console.log("Month is not selected")
    }
    
  }

  onNoClick() {
    this.dialogRef.close();
  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

}
