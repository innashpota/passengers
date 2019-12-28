import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondaryPassengerComponent} from './secondary-passenger.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SecondaryPassenger} from './secondary-passenger';

describe('SecondaryPassengerComponent', () => {
  let component: SecondaryPassengerComponent;
  let fixture: ComponentFixture<SecondaryPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SecondaryPassengerComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatSnackBarModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryPassengerComponent);
    component = fixture.componentInstance;
    component.secondaryPassengers = [];
    component.secondaryPassengers.push(new SecondaryPassenger());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
