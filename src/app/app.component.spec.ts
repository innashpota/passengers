import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
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
import {PrimaryPassengerComponent} from './primary-passenger/primary-passenger.component';
import {SecondaryPassengerComponent} from './secondary-passenger/secondary-passenger.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PrimaryPassengerComponent,
        SecondaryPassengerComponent
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
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a primaryPassenger'`, () => {
    expect(component.primaryPassenger.fullName).toEqual('');
    expect(component.primaryPassenger.email).toEqual('');
    expect(component.primaryPassenger.age).toEqual(null);
    expect(component.primaryPassenger.phoneNumber).toEqual('');
  });

  it(`should have empty secondPassengers array'`, () => {
    expect(component.secondaryPassengers.length).toEqual(1);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
