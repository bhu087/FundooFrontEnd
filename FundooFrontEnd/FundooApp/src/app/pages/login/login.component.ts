import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendServicesService } from 'src/app/backend-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private service: BackendServicesService) { }
  loginForm= this.formBuilder.group({
        email : ['', [Validators.required, Validators.email]],//,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]],
  });
  ngOnInit(): void {
  }
  get loggingForm() { return this.loginForm.controls; }

  OnClickCreateAccount(){
    this.router.navigateByUrl('/register');
  }

  OnLogin(value:any){
    if (this.loggingForm.invalid) {
      return;
    }
    const login = {
      email: value.email,
      password: value.password
    }
    this.service.login(login).subscribe((success)=> {
      this.data = JSON.stringify(success);
      var res = JSON.parse(this.data);
      console.log(res['data']);
      this.service.setSession(res['data']);
    },
    (error)=> {
      alert('User Not Found');
    });
  }
}
