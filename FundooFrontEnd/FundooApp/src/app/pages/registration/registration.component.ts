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
    constructor(private formBuilder: FormBuilder, private service: BackendServicesService, private router: Router) { 
      
    }
    registerForm= this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
          lastName: ['', [Validators.required, Validators.minLength(3)]],
          email : ['', [Validators.required, Validators.email]],//,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required]], // Validators.minLength(6), Validators.maxLength(20),Validators.pattern('^(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,20}$')]],
          confirmPassword: ['', [Validators.required]] // Validators.minLength(6), Validators.maxLength(20),Validators.pattern('^(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,20}$')]]
      //firstName: new FormControl('', Validators.required),
      //lastName: new FormControl('', Validators.required),
      //email: new FormControl('', Validators.email),
      //password: new FormControl('', Validators.required),
      //confirmPassword: new FormControl('', Validators.required)
  });
    ngOnInit() {
      
    }
    data: any;
    get registrationForm() { return this.registerForm.controls; }
    OnRegistration(value:any){
      if (this.registerForm.invalid) {
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
