import {Component, OnInit} from '@angular/core';
import {PrimaryPassenger} from './primary-passenger/primary-passenger';
import {SecondaryPassenger} from './secondary-passenger/secondary-passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isNext = false;
  primaryPassenger = new PrimaryPassenger();
  secondaryPassengers: SecondaryPassenger[] = [];

  ngOnInit(): void {
    this.secondaryPassengers.push(new SecondaryPassenger());
  }

  setSecondaryPassengers(obj: { passengers: SecondaryPassenger[], next: boolean, isSubmit: boolean }) {
    this.secondaryPassengers = [];
    if (obj.isSubmit) {
      this.primaryPassenger = new PrimaryPassenger();
      this.secondaryPassengers.push(new SecondaryPassenger());
    } else {
      this.secondaryPassengers = this.secondaryPassengers.concat(obj.passengers);
    }
    this.isNext = obj.next;
  }

  setPrimaryPassenger(obj: { passenger: PrimaryPassenger, next: boolean }) {
    this.primaryPassenger = obj.passenger;
    this.isNext = obj.next;
  }
}
