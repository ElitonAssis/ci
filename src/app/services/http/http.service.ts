import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  service!: string;
  httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*'
      // 'Accept': 'application/json, */*'

    })
  };

  private readonly API = '/api'
  // private readonly API = '/api/game'
  // private API = environment.apiUrl;
  constructor(public http: HttpClient) {
  }

  public get(endPoint?: string): Observable<any> {
    console.log(this.API + endPoint)
    return this.http.get<any>(this.API + endPoint, this.httpOpt)
  }
  public post(endPoint: string, data: any): Observable<any> {
    return this.http.post<any>(this.API + endPoint, JSON.stringify(data), this.httpOpt)
  }
}
