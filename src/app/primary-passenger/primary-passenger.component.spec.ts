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
import {Address} from './address';

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

  it('should onNextClick()', () => {
    component.controlGroup.get('fullName').setValue('Peter Pen');
    component.controlGroup.get('age').setValue(12);
    component.controlGroup.get('email').setValue('peter.pen@example.com');
    component.controlGroup.get('phoneNumber').setValue('123456789');
    component.controlGroup.get('country').setValue('Germany');
    component.controlGroup.get('street').setValue('Barbarastraße');
    component.controlGroup.get('index').setValue('80797');
    const spy = spyOn(component.passenger, 'emit');
    const psg = passenger();

    component.onNextClick();

    expect(component.primaryPassenger).toEqual(psg);
    expect(spy).toHaveBeenCalledWith({passenger: psg, next: true});
  });

  function passenger() {
    const pass = new PrimaryPassenger();
    pass.fullName = 'Peter Pen';
    pass.age = 12;
    pass.email = 'peter.pen@example.com';
    pass.phoneNumber = '123456789';
    const address = new Address();
    address.country = 'Germany';
    address.street = 'Barbarastraße';
    address.index = '80797';
    pass.address = address;
    return pass;
  }

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
