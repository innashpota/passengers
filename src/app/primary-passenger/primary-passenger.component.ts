import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PrimaryPassenger} from './primary-passenger';
import {InstantErrorStateMatcher} from '../instant-error-state.matcher';
import {Countries} from '../countries';

@Component({
  selector: 'primary-passenger',
  templateUrl: './primary-passenger.component.html',
  styleUrls: ['./primary-passenger.component.css']
})
export class PrimaryPassengerComponent implements OnInit {
  countries = Countries;
  controlGroup: FormGroup;
  errorStateMatcher = new InstantErrorStateMatcher();
  @Input() primaryPassenger: PrimaryPassenger;
  @Output() passenger = new EventEmitter<{ passenger: PrimaryPassenger, next: boolean }>();

  ngOnInit(): void {
    this.controlGroup = new FormGroup({
      fullName: new FormControl(this.primaryPassenger.fullName, Validators.required),
      age: new FormControl(this.primaryPassenger.age, [
        Validators.required, Validators.min(0), Validators.max(120)
      ]),
      email: new FormControl(this.primaryPassenger.email, [
        Validators.required, Validators.email
      ]),
      country: new FormControl(this.primaryPassenger.address.country, Validators.required),
      street: new FormControl(this.primaryPassenger.address.street, Validators.required),
      index: new FormControl(this.primaryPassenger.address.index, Validators.required),
      phoneNumber: new FormControl(this.primaryPassenger.phoneNumber, [
        Validators.required, Validators.pattern(/^[-+\/\s]*([0-9][-+\/\s]*){9,}$/)
      ]),
    });
  }

  hasError(controlName: string, errorCode: string): boolean {
    return this.controlGroup.invalid && this.controlGroup.hasError(errorCode, [controlName]);
  }

  onNextClick(): void {
    this.primaryPassenger.fullName = this.formValue('fullName');
    this.primaryPassenger.age = this.formValue('age');
    this.primaryPassenger.email = this.formValue('email');
    this.primaryPassenger.address.country = this.formValue('country');
    this.primaryPassenger.address.street = this.formValue('street');
    this.primaryPassenger.address.index = this.formValue('index');
    this.primaryPassenger.phoneNumber = this.formValue('phoneNumber');
    this.passenger.emit({passenger: this.primaryPassenger, next: true});
  }

  private formValue(controlName: string): any {
    return this.controlGroup.get(controlName).value;
  }
}
