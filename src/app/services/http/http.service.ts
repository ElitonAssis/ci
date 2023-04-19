import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  URL = environment.apiUrl;
  constructor(private http: HttpClientModule) { }

}
