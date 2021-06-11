import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http: HttpClient) { }

  post(uri: any, data: any, isHeaders: any = false, headers : any = null){
    return this.http.post(uri, data, isHeaders && headers);
  }
  get(uri: any, isHeaders: any = false, headers : any = null){
    return this.http.get(uri, isHeaders && headers);
  }
  put(uri: any, data: any, isHeaders: any = false, headers : any = null){
    return this.http.put(uri, data, isHeaders && headers);
  }
}
