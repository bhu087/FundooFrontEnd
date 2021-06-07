import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/otherServices/snackBarService/snack-bar.service';
import { UserServicesService } from 'src/app/services/userService/user-services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserServicesService,
    private snackbar: SnackBarService) { }

  ngOnInit(): void {
  }
  forgetForm= this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  get forgettingForm() {return this.forgetForm.controls};


  triggerSnackBar(message:string, action:string)
  {
   this.snackbar.openSnackBar(message, action);
  }

  submitted = false;
  OnForgetPassword(value: any){
    this.submitted = true;
    if (this.forgetForm.invalid) {
      return;
    }
    this.service.forget(value.email).subscribe((success)=> {
      this.router.navigateByUrl('/login');
      this.triggerSnackBar("Reset Link Sent", "Done");
    },
    (error)=> {
      this.triggerSnackBar("Account not exist in this account", "Failed!");
    });
  }
}
