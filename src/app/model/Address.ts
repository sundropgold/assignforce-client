export class Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  company: string;
  active: boolean;

  constructor(
    id: number,
    street: string,
    city: string,
    state: string,
    zipcode: string,
    company: string,
    active: boolean
  ) {
    this.id = id;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.company = company;
    this.active = active;
  }
}
