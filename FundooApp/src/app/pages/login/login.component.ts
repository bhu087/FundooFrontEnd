import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/otherServices/snackBarService/snack-bar.service';
import { UserServicesService } from 'src/app/services/userService/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserServicesService,
    private snackBar: SnackBarService) { }
  loginForm= this.formBuilder.group({
        email : ['', [Validators.required, Validators.email]],//,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]],
  });
  ngOnInit(): void {
  }
  get loggingForm() { return this.loginForm.controls; }

  triggerSnackBar(message:string, action:string)
  {
   this.snackBar.openSnackBar(message, action);
  }

  OnClickCreateAccount(){
    this.router.navigateByUrl('/register');
  }
  OnClickForgetPassword(){
    this.router.navigateByUrl('/forget');
  }

  submitted = false;
  OnLogin(value:any){
    this.submitted = true;
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
      this.triggerSnackBar("Logged In Successfully", "Done");
    },
    (error)=> {
      this.router.navigateByUrl('/login');
      this.triggerSnackBar("Account Not exist", "Failed!");
    });
  }
}
