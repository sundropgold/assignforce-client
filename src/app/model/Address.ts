export class Address {
  addressId: number;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  company: string;
  active: boolean;

  constructor(
    addressId: number,
    street: string,
    city: string,
    state: string,
    zipcode: string,
    company: string,
    active: boolean
  ) {
    this.addressId = addressId;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.company = company;
    this.active = active;
  }
}
