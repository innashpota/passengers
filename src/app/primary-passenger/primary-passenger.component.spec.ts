import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimaryPassengerComponent} from './primary-passenger.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {PrimaryPassenger} from './primary-passenger';

describe('PrimaryPassengerComponent', () => {
  let component: PrimaryPassengerComponent;
  let fixture: ComponentFixture<PrimaryPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PrimaryPassengerComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatCardModule,
        MatSnackBarModule,
        MatSelectModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryPassengerComponent);
    component = fixture.componentInstance;
    component.primaryPassenger = new PrimaryPassenger();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
