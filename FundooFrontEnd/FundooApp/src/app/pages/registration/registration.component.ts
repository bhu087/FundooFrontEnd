import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    constructor(private formBuilder: FormBuilder) { 
      
    }
    registerForm= this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
          lastName: ['', [Validators.required, Validators.minLength(6)]],
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
    
    get registrationForm() { return this.registerForm.controls; }
}
