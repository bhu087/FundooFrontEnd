import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpService/http-services.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpservice: HttpServicesService) { }
  url = environment.baseUrl;
  register(data: any){
    return this.httpservice.post(`${this.url + 'Account'}`, data);
  }
  reset(data: any, headers: any){
    console.log(headers);
    return this.httpservice.poster(`${this.url+'Account/Reset'}/${data}`, data, headers);
  }
  login(data: any){
    return this.httpservice.post(this.url+'Account/Login', data);
  }
  forget(data:any){
    console.log(data);
    var res = this.httpservice.post(`${this.url + 'Account/Forget'}/${data}`, data);
    console.log(res);
    return res;
  }
}
