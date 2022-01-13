import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css'],
})
export class FormStepperComponent implements OnInit {
  vehicleInfoForm!: FormGroup;
  comparisonForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.vehicleInfoForm = this._formBuilder.group({
      plateNo: ['', Validators.required],
      char: ['', Validators.required],
      civilId: ['', Validators.required],
      geographicalExt: ['', Validators.required],
      MobileNo: ['', Validators.required],

    });
    this.comparisonForm = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
