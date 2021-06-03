import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {
  uri = 'https://localhost:44337';
  constructor(private http: HttpClient) { }

  setSession(token:any){
    localStorage.setItem('Bearer', token);
  }

  deleteSession(){
    localStorage.clear();
  }

  getSession(){
    return localStorage.getItem('Bearer');
  }
  registration(register: any){
    return this.http.post(this.uri+'/api/Account', register);
  }
  
  login(login: any){
    return this.http.post(this.uri+'/api/Account/Login/', login);
  }
}

