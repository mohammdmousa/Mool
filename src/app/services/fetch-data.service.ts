import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private HttpClient: HttpClient) {}
  getDAta(api: string): Observable<any> {
    return this.HttpClient.get(api);
  }
}
