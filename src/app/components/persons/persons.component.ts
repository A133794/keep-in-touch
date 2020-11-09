import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonListModel } from 'src/app/models/person';
import { AppState, selectPersonDetails } from 'src/app/reducers/index';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
people$:Observable<PersonListModel[]>;
  constructor(private bottomSheetRef: MatBottomSheetRef<PersonsComponent>,private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.people$=this.store.pipe(
      select(selectPersonDetails)
    );

    
  }
}
