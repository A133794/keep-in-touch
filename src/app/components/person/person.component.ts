import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonListModel } from 'src/app/models/person';
import { AppState, selectPersonDetails } from 'src/app/reducers/index';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
@Input() people$:Observable<PersonListModel[]>;
  constructor(private bottomSheetRef: MatBottomSheetRef<PersonComponent>,private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.people$=this.store.pipe(
      select(selectPersonDetails)
    );

    
  }
  returnHomePerson(): void {
    this.bottomSheetRef.dismiss();
  }

}
