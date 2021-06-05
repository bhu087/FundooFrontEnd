import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http: HttpClient) { }

  post(uri: any, data: any, isHeaders: any = false, headers = null){
    return this.http.post(uri, data, isHeaders && headers);
  }
  poster(uri: any, data: any, header : any){
    let head = new HttpHeaders()
    .set('Authorization', header);
    console.log(head);
    return this.http.post(uri, data, {headers : head});
  }
}
