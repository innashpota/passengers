import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SecondaryPassenger} from './secondary-passenger';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InstantErrorStateMatcher} from '../instant-error-state.matcher';
import {MatSnackBar} from '@angular/material';
import {AppService} from '../app.service';

@Component({
  selector: 'secondary-passenger',
  templateUrl: './secondary-passenger.component.html',
  styleUrls: ['./secondary-passenger.component.css']
})
export class SecondaryPassengerComponent implements OnInit {
  controlGroup: FormGroup;
  errorStateMatcher = new InstantErrorStateMatcher();
  @Input() secondaryPassengers: SecondaryPassenger[];
  @Output() passengers = new EventEmitter<{ passengers: SecondaryPassenger[], next: boolean, isSubmit: boolean }>();

  constructor(
      public snackBar: MatSnackBar,
      private formBuilder: FormBuilder,
      private service: AppService
  ) {
  }

  ngOnInit(): void {
    this.controlGroup = this.formBuilder.group({
      additional: new FormArray([])
    });
    this.fillSecondaryPassengersForm();
  }

  hasError(control: AbstractControl, controlName: string, errorCode: string): boolean {
    return control.invalid && control.hasError(errorCode, [controlName]);
  }

  get controls(): { [p: string]: AbstractControl } {
    return this.controlGroup.controls;
  }

  get additional(): FormArray {
    return this.controls.additional as FormArray;
  }

  onAddClick(): void {
    this.secondaryPassengers.push(new SecondaryPassenger());
    this.additional.push(this.formBuilder.group({
      fullName: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.required, Validators.min(0), Validators.max(120)
      ])
    }));
  }

  onBackClick(): void {
    this.secondaryPassengers = [];
    if (this.additional.length > 0) {
      this.additional.controls.map(fg => {
        const passenger = new SecondaryPassenger();
        passenger.fullName = fg.value.fullName;
        passenger.age = fg.value.age;
        this.secondaryPassengers.push(passenger);
      });
    }
    this.passengers.emit({passengers: this.secondaryPassengers, next: false, isSubmit: false});
  }

  onRemoveClick(index: number): void {
    this.notification('Removed passenger.');
    this.additional.controls.splice(index, 1);
    this.secondaryPassengers.splice(index, 1);
  }

  onSubmitClick(): void {
    this.service.submit().subscribe(answer => {
      if (answer.status === 'OK') {
        this.notification('Submitted!');
      }
      this.passengers.emit({passengers: this.secondaryPassengers, next: false, isSubmit: true});
    });
  }

  disabledSubmit(): boolean {
    const abstractControl = this.additional.controls.find(fg => fg.invalid);
    return !!abstractControl;
  }

  private fillSecondaryPassengersForm(): void {
    for (let i = 0; i <= this.secondaryPassengers.length; i++) {
      if (this.secondaryPassengers[i]) {
        this.additional.push(this.formBuilder.group({
          fullName: new FormControl(this.secondaryPassengers[i].fullName, Validators.required),
          age: new FormControl(this.secondaryPassengers[i].age, [
            Validators.required, Validators.min(0), Validators.max(120)
          ])
        }));
      }
    }
  }

  private notification(message) {
    this.snackBar.open(
        message,
        null,
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3 * 1000
        }
    );
  }
}
