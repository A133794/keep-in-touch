import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {


  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private bottomSheetRef: MatBottomSheetRef<PersonEntryComponent>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      method:['', [Validators.required]],
      startDate:[],
      endDate:[],
      reoccurrence:[],
      start:[],
      end:[]
    });
  }
  get name(): AbstractControl { return this.form.get('name'); }
  get method(): AbstractControl { return this.form.get('method'); }

  submit(): void {
    // console.log(this.form.value);
    this.bottomSheetRef.dismiss();
  }
  cancel(): void {
    this.bottomSheetRef.dismiss();
  }
}
