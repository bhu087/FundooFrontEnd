import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendServicesService } from 'src/app/backend-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[BackendServicesService]
})
export class RegistrationComponent implements OnInit {
  
  data: any;
    constructor(private formBuilder: FormBuilder, private service: BackendServicesService, private router: Router) { 
      
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
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
    }
    OnRegistration(value:any){
      if (this.registerForm.invalid || (value.password != value.confirmPassword)) {
        return;
      }
      const register = {
        userID: 0,
        name: value.firstName,
        email: value.email,
        password: value.password
      }
      this.service.registration(register).subscribe((success) =>{
        this.data = JSON.stringify(success);
        console.log(this.data.userID);
        console.log(success);
        alert(success);
      },
      (error)=>{
        console.log(error.message)
      }
    );
  }
  OnClickLogin(){
    this.router.navigateByUrl('/login');
  }
}
