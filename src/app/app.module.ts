import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonEntryComponent } from './components/person-entry/person-entry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { PeopleComponent } from './components/people/people.component';
import { AllPeopleComponent } from './components/all-people/all-people.component';
import { PersonsComponent } from './components/persons/persons.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import{reducers} from './reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PersonComponent } from './components/person/person.component';


const materialModules=
[
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatChipsModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [
    AppComponent,
    PersonEntryComponent,
    DashboardComponent,
    PeopleComponent,
    AllPeopleComponent,
    PersonsComponent,
    RemindersComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
