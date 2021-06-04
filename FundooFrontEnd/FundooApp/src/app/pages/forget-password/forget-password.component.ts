import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendServicesService } from 'src/app/backend-services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: BackendServicesService) { }

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
      console.log(success);
    },
    (error)=> {
      alert('User Not Found');
    });
  }
}
