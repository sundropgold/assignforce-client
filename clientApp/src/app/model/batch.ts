// everything is a string right now for testin.
// we will change things accordingly when we make the other POJOS

export interface Batch {
  name: string;
  startDate: Date;
  endDate: Date;
  curriculum: string;
  focus: string;
  trainer: string;
  cotrainer: string;
  location: string;
  building: string;
  room: string;
}
