import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle-inform',
  templateUrl: './vehicle-inform.component.html',
  styleUrls: ['./vehicle-inform.component.css'],
})
export class VehicleInformComponent implements OnInit {
  @Input('vehicleInfoForm') vehicleInfoForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
