import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/userService/user-services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserServicesService) { }

  ngOnInit(): void {
  }
  forgetForm= this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  get forgettingForm() {return this.forgetForm.controls};

  OnForgetPassword(value: any){
    if (this.forgetForm.invalid) {
      return;
    }
    this.service.forget(value.email).subscribe((success)=> {
      this.router.navigateByUrl('/login');
    },
    (error)=> {
      alert('User Not Found');
    });
  }
}
