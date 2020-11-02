import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<PersonsComponent>) { }

  ngOnInit(): void {
    
  }
  returnHomePerson(): void {
    this.bottomSheetRef.dismiss();
  }

}
