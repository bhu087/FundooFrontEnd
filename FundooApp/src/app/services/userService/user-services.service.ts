import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpServicesService } from '../httpService/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpservice: HttpServicesService) { }
  url = environment.baseUrl;
  header = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.Bearer}`,
      'content-Type': 'application/json'
    })
  }
  register(data: any){
    return this.httpservice.post(`${this.url}Account`, data);
  }
  reset(data: any, headers: any){
    //let headers_object = new HttpHeaders().set("authorization", headers);
    let options = {
      headers: new HttpHeaders({
        'authorization': headers,
        'Content-Type': 'application/json'
      })
    }
    console.log(headers);
    return this.httpservice.post(`${this.url}Account/Reset/${data}`, null, true, options);
  }
  login(data: any){
    return this.httpservice.post(`${this.url}Account/Login`, data);
  }
  forget(data:any){
    console.log(data);
    var res = this.httpservice.post(`${this.url}Account/Forget/${data}`, data);
    console.log(res);
    return res;
  }
  getProfilePic(){
    var res = this.httpservice.get(`${this.url}Account/downloadProfilePic`, true, this.header);
    return res;
  }
}
