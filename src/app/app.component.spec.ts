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
import {SecondaryPassenger} from './secondary-passenger/secondary-passenger';
import {PrimaryPassenger} from './primary-passenger/primary-passenger';

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

  it('should have a primaryPassenger', () => {
    expect(component.primaryPassenger.fullName).toEqual('');
    expect(component.primaryPassenger.email).toEqual('');
    expect(component.primaryPassenger.age).toEqual(null);
    expect(component.primaryPassenger.phoneNumber).toEqual('');
  });

  it('should have empty secondPassengers array', () => {
    expect(component.secondaryPassengers.length).toEqual(1);
  });

  describe(`should setSecondaryPassengers()`, () => {
    it('given isSubmit = true', () => {
      const input = {passengers: [], next: true, isSubmit: true};

      component.setSecondaryPassengers(input);

      expect(component.primaryPassenger.fullName).toEqual('');
      expect(component.primaryPassenger.age).toEqual(null);
      expect(component.primaryPassenger.email).toEqual('');
      expect(component.primaryPassenger.phoneNumber).toEqual('');
      expect(component.secondaryPassengers.length).toEqual(1);
      expect(component.isNext).toBeTruthy();
    });

    it('given isSubmit = false', () => {
      const psgrs = passengers();
      const input = {passengers: psgrs, next: false, isSubmit: false};

      component.setSecondaryPassengers(input);

      expect(component.secondaryPassengers.length).toEqual(2);
      expect(component.isNext).toBeFalsy();
    });
  });

  it('should setPrimaryPassenger()', () => {
    const pass = passenger();
    const input = {passenger: pass, next: true};

    component.setPrimaryPassenger(input);

    expect(component.primaryPassenger.fullName).toEqual('Peter Pen');
    expect(component.primaryPassenger.age).toEqual(12);
    expect(component.primaryPassenger.email).toEqual('peter.pen@example.com');
    expect(component.primaryPassenger.phoneNumber).toEqual('123456789');
    expect(component.isNext).toBeTruthy();
  });

  function passenger() {
    const pass = new PrimaryPassenger();
    pass.fullName = 'Peter Pen';
    pass.age = 12;
    pass.email = 'peter.pen@example.com';
    pass.phoneNumber = '123456789';
    return pass;
  }

  function passengers() {
    const psgrs = [];
    const pass = new SecondaryPassenger();
    pass.fullName = 'Full name';
    pass.age = 12;
    psgrs.push(pass);
    psgrs.push(new SecondaryPassenger());
    return psgrs;
  }

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
