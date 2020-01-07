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

  it('should onAddClick()', () => {
    const spy = spyOn(component.additional, 'push');

    component.onAddClick();

    expect(spy).toHaveBeenCalled();
    expect(component.additional.length).toEqual(1);
  });

  describe('should onBackClick()', () => {
    it('given this.additional.length = 0', () => {
      component.additional.removeAt(0);
      const spy = spyOn(component.passengers, 'emit');

      component.onBackClick();

      expect(component.secondaryPassengers.length).toEqual(0);
      expect(spy).toHaveBeenCalled();
    });

    it('given this.additional.length > 0', () => {
      component.onBackClick();

      expect(component.additional.length).toEqual(1);
    });
  });

  it('should onRemoveClick()', () => {
    const spyNotification = spyOn<any>(component, 'notification');
    const spyAdditional = spyOn(component.additional.controls, 'splice');
    const spyPassengers = spyOn(component.secondaryPassengers, 'splice');

    component.onRemoveClick(0);

    expect(spyNotification).toHaveBeenCalledWith('Removed passenger.');
    expect(spyAdditional).toHaveBeenCalledWith(0, 1);
    expect(spyPassengers).toHaveBeenCalledWith(0, 1);
  });

  it('should onSubmitClick()', () => {
    const spy = spyOn(component.passengers, 'emit');
    component.secondaryPassengers = [];
    const input = {passengers: [], next: false, isSubmit: true};
    const spyNotification = spyOn<any>(component, 'notification');

    component.onSubmitClick();

    expect(spy).toHaveBeenCalledWith(input);
    expect(spyNotification).toHaveBeenCalledWith('Submitted!');
  });

  it('should disabledSubmit()', () => {
    expect(component.disabledSubmit()).toBeTruthy();
  });
  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
