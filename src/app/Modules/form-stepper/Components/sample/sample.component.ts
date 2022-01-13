import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, AfterViewInit {

  vehicleInfoForm!: FormGroup;
  comparisonForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private elementRef: ElementRef) { }

  ngOnInit() {
    var header = document.getElementById('header') as HTMLElement;
    var navbar = document.getElementById('navbar') as HTMLElement;


    window.onscroll = () => {
      if (window.scrollY > 150) {

          header.classList.add('nav-colored');
          header.classList.remove('nav-transparent');
          navbar.classList.add('nav-colored');
          navbar.classList.remove('nav-transparent');
      } else {
        header.classList.remove('nav-colored');
        header.classList.add('nav-transparent');
        navbar.classList.remove('nav-colored');
        navbar.classList.add('nav-transparent');
      }
  };
    this.vehicleInfoForm = this._formBuilder.group({
      plateNo: ['', Validators.required],
      char: ['', Validators.required],
      civilId: ['', Validators.required],
      suminsured: ['', Validators.required],
      geographicalExt: ['', Validators.required],
      MobileNo: ['', Validators.required],

    });
    this.comparisonForm = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngAfterViewInit() {

  }

}
