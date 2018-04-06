import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Location } from '../../../model/Location';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationControllerService {
  constructor(private http: HttpClient) {}

  private locationController = environment.apiUrls.locationController;

  public createLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(this.locationController.baseUrl + this.locationController.createLocation, location);
  }

  public updateLocation(location: Location): Observable<Location> {
    return this.http.put<Location>(this.locationController.baseUrl + this.locationController.updateLocation, location);
  }

  public retrieveLocation(id: number): Observable<Location> {
    return this.http.get<Location>(this.locationController.baseUrl + this.locationController.retrieveLocation + id);
  }

  public deleteLocation(id: number): Observable<Location> {
    return this.http.delete<Location>(this.locationController.baseUrl + this.locationController.deleteLocation + id);
  }

  public retrieveAllLocation(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationController.baseUrl + this.locationController.retrieveAllLocation);
  }
}
