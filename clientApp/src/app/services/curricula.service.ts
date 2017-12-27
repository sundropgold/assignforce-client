import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CurriculaService {

  url = 'api/v2/curriculum';
  constructor(private http: HttpClient) { }

  /* services */

}
