import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http: HttpClient) { }

  post(uri: any, data: any, isHeaders: any = false, headers : any = null){
    console.log(uri, data, headers, isHeaders);
    return this.http.post(uri, data, isHeaders && headers);
  }
  
}
