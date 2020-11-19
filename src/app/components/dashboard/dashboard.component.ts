import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig,MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonListItemModel } from 'src/app/models/person-list-item';
import { AppState, selectPeopleList } from 'src/app/reducers';
import { AllPeopleComponent } from '../all-people/all-people.component';
import { PersonEntryComponent } from '../person-entry/person-entry.component';
import { PersonComponent } from '../person/person.component';

import { RemindersComponent } from '../reminders/reminders.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  people$:Observable<PersonListItemModel[]>;
  constructor(private bottomSheet: MatBottomSheet,private store: Store<AppState>) { }

  ngOnInit(): void {
    this.people$=this.store.pipe(
      select(selectPeopleList)
    );
  }

  addPerson(): void {
    const config: MatBottomSheetConfig = {
      disableClose: true,
      autoFocus: true
    };
    this.bottomSheet.open(PersonEntryComponent, config);
  }

  allPeople(): void {
    const config: MatBottomSheetConfig = {
      disableClose: true,
      autoFocus: true
    };
    this.bottomSheet.open(AllPeopleComponent, config);
  }
  person(): void {
    const config: MatBottomSheetConfig = {
      disableClose: true,
      autoFocus: true, 
      data:this.people$
    };
    this.bottomSheet.open(PersonComponent, config);
  }
  reminders():void{
    const config:MatBottomSheetConfig={
      disableClose:true,
      autoFocus:true
    };
    this.bottomSheet.open(RemindersComponent)
  }
}
