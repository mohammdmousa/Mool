import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PushDataService {
  constructor(private httpClient: HttpClient) {}
  pushData(api: string, data: any): Observable<any> {
    return this.httpClient.post(api, data);
  }
}
