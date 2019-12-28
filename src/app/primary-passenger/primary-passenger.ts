import {Address} from './address';
import {Passenger} from '../passenger';

export class PrimaryPassenger extends Passenger {
  email = '';
  address: Address = new Address();
  phoneNumber = '';

  constructor() {
    super();
  }
}
