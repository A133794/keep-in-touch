import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AllPeopleComponent>) { }

  ngOnInit(): void {
  }
  returnHome(): void {
    this.bottomSheetRef.dismiss();
  }

}
