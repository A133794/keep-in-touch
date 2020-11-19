import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonListModel } from 'src/app/models/person';
import { AppState, selectPersonDetails } from 'src/app/reducers';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent implements OnInit {
  people$:Observable<PersonListModel[]>;
  constructor(private bottomSheetRef: MatBottomSheetRef<AllPeopleComponent>,private store: Store<AppState>) { }

  ngOnInit(): void {
    this.people$=this.store.pipe(
      select(selectPersonDetails)
    );

  }
  returnHome(): void {
    this.bottomSheetRef.dismiss();
  }

}
