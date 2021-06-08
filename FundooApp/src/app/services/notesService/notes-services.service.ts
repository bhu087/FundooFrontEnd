import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpService/http-services.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
 
  options = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.Bearer}`,
      'content-Type': 'application/json'
    })
  }
  url = environment.baseUrl;
  constructor(private httpservice: HttpServicesService) { }
  create(data:any){
    console.log(data);
    var res = this.httpservice.post(`${this.url}Notes`, data, true, this.options);
    console.log(res);
    return res;
  }
}
