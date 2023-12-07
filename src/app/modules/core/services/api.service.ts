import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private httpClient: HttpClient) { }

  get(url: string, params: Params): Observable<T> {
    return this.httpClient.get<T>(url, params)
  }
}
