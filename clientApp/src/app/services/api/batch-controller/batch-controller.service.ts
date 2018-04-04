import { Injectable } from '@angular/core';
import { Batch } from '../../../model/Batch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Location } from '../../../model/Location';

@Injectable()
export class BatchControllerService {
  constructor(private http: HttpClient) {}

  private batchController = environment.apiUrls.batchController;

  public createBatch(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(this.batchController.baseUrl + this.batchController.createBatch, batch);
  }

  public deleteBatch(id: number): Observable<Batch> {
    return this.http.delete<Batch>(this.batchController.baseUrl + this.batchController.deleteBatch + id);
  }

  public updateBatch(batch: Batch): Observable<Batch> {
    return this.http.put<Batch>(this.batchController.baseUrl + this.batchController.updateBatch, batch);
  }

  public findCommonLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.batchController.baseUrl + this.batchController.findCommonLocations);
  }

  public getAllBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.batchController.baseUrl + this.batchController.getAllBatches);
  }

  public findAllBatchesByTrainer(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.batchController.baseUrl + this.batchController.findAllBatchesByTrainer);
  }

  public createWeek(batchId: number): Observable<Batch> {
    return this.http.post<Batch>(this.batchController.baseUrl + this.batchController.createWeek + batchId, null);
  }

  public getAllVpBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.batchController.baseUrl + this.batchController.getAllVpBatches);
  }

  public getAllCurrentBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.batchController.baseUrl + this.batchController.getAllCurrentBatches);
  }
}
