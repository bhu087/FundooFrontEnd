import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  resetForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  get resettingForm() {return this.resetForm.controls}
  ngOnInit(): void {
  }

}
