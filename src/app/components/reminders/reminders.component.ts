import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonListModel } from 'src/app/models/person';
import { AppState, selectPersonDetails } from 'src/app/reducers';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<RemindersComponent>, private store: Store<AppState>) { }
  people$:Observable<PersonListModel[]>;
  ngOnInit(): void {
    this.people$=this.store.pipe(
      select(selectPersonDetails));
  }
  returnHome(): void {
    this.bottomSheetRef.dismiss();
  }

}
