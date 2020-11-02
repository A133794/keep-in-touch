import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<RemindersComponent>) { }

  ngOnInit(): void {
  }
  returnHome(): void {
    this.bottomSheetRef.dismiss();
  }

}
