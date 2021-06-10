import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpServicesService } from '../httpService/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
 
  header = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.Bearer}`,
      'content-Type': 'application/json'
    })
  }
  url = environment.baseUrl;
  constructor(private httpservice: HttpServicesService) { }
  create(data:any){
    console.log(data);
    var res = this.httpservice.post(`${this.url}Notes`, data, true, this.header);
    console.log(res);
    return res;
  }
  getNotes(){
    var res = this.httpservice.get(`${this.url}Notes/allNotes`, true, this.header);
    console.log(res);
    return res;
  }
}
