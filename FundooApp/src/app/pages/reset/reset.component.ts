import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/otherServices/snackBarService/snack-bar.service';
import { UserServicesService } from 'src/app/services/userService/user-services.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  href: string | undefined;

  constructor(private formBuilder: FormBuilder, private service: UserServicesService, private router: Router,
     private activeRouter: ActivatedRoute,
    private snackBar: SnackBarService) { }
  resetForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.email]],
    confirmPassword: ['', [Validators.required, ]]
  },
  { 
    validator: this.ConfirmedValidator('password', 'confirmPassword')
  });

  get resettingForm() {return this.resetForm.controls}
  ngOnInit(): void {
  }

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

  token : any;
  OnClickReset(value: any){
    this.activeRouter.queryParams.subscribe(params => {
      this.token = params['token'];
  });
    this.service.reset(value.password, this.token).subscribe((serve)=>{
      this.router.navigateByUrl('/login');
      this.triggerSnackBar("Account reset", "Success");
    },
    (error)=>{
      this.router.navigateByUrl('/reset');
      this.triggerSnackBar("Invalid link or expired", "Failed");
    }
    );

  }
}
