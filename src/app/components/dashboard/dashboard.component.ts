import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig,MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { PeopleComponent } from '../people/people.component';
import { PersonEntryComponent } from '../person-entry/person-entry.component';
import { PersonsComponent } from '../persons/persons.component';
import { RemindersComponent } from '../reminders/reminders.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
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
    this.bottomSheet.open(PeopleComponent, config);
  }
  person(): void {
    const config: MatBottomSheetConfig = {
      disableClose: true,
      autoFocus: true
    };
    this.bottomSheet.open(PersonsComponent, config);
  }
  reminders():void{
    const config:MatBottomSheetConfig={
      disableClose:true,
      autoFocus:true
    };
    this.bottomSheet.open(RemindersComponent)
  }
}
