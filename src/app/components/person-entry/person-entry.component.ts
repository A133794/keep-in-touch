import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { personAdd } from 'src/app/actions/people.actions';
import{AppState} from '../../reducers'

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {


  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private bottomSheetRef: MatBottomSheetRef<PersonEntryComponent>,private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      methodOfContact:['', [Validators.required]],
      startDate:['', [Validators.required]],
      endDate:['', [Validators.required]],
      reoccurrence:['', [Validators.required]],
    });
  }
  get name(): AbstractControl { return this.form.get('name'); }
  get methodOfContact(): AbstractControl { return this.form.get('methodOfContact'); }
  get startDate(): AbstractControl { return this.form.get('startDate'); }
  get endDate(): AbstractControl { return this.form.get('endDate'); }
  get reoccurrence(): AbstractControl { return this.form.get('reoccurrence'); }

  submit(): void {
    console.log(this.form.value);
    this.store.dispatch(personAdd({...this.form.value}))
    this.bottomSheetRef.dismiss();
  }
  cancel(): void {
    this.bottomSheetRef.dismiss();
  }
}
