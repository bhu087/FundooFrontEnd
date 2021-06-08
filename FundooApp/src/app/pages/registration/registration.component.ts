import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/userService/user-services.service';
import { Observable } from 'rxjs';
import { SnackBarService } from 'src/app/otherServices/snackBarService/snack-bar.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[UserServicesService]
})
export class RegistrationComponent implements OnInit {
  
  data: any;
    constructor(private formBuilder: FormBuilder, private service: UserServicesService, private router: Router,
      private snackBar: SnackBarService) { 
      
    }
    registerForm= this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email : ['', [Validators.required, Validators.email]],//,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$')]],
      confirmPassword: ['', [Validators.required]]
    },
    { 
      validator: this.ConfirmedValidator('password', 'confirmPassword')
    }
    );
    ngOnInit() {
      
    }
    get registrationForm() { return this.registerForm.controls; }

    ConfirmedValidator(password: string, confirmPassword: string){
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[password];
          const matchingControl = formGroup.controls[confirmPassword];
          if(control.value !== matchingControl.value){
            matchingControl.setErrors({ confirmedValidator: true });
          }
      }
    }

    triggerSnackBar(message:string, action:string)
    {
     this.snackBar.openSnackBar(message, action);
    }
    submitted = false;
    OnRegistration(value:any){
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      const register = {
        userID: 0,
        name: value.firstName,
        email: value.email,
        password: value.password
      }
      this.service.register(register).subscribe((success) =>{
        this.data = JSON.stringify(success);
        console.log(this.data.userID);
        console.log(success);
        this.triggerSnackBar("Registered", "Success");
        this.router.navigateByUrl('/login');
      },
      (error)=>{
        this.triggerSnackBar("Account already Exists", "Failed!");
        //window.location.reload();
      }
    );
  }
  OnClickLogin(){
    this.router.navigateByUrl('/login');
    this.triggerSnackBar("Not registered", "Failed!");
  }
}
