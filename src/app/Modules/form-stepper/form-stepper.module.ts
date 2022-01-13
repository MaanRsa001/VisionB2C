import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialModule } from 'src/app/Shared/material/material.module';
import { FormStepperRoutingModule } from './form-stepper-routing.module';
import { FormStepperComponent } from './form-stepper.component';
import { VehicleInformComponent } from './Components/vehicle-inform/vehicle-inform.component';
import { ComparisonComponent } from './Components/comparison/comparison.component';
import { MdePopoverModule } from '@material-extended/mde';
import { PersonalInformComponent } from './Components/personal-inform/personal-inform.component';
import { SampleComponent } from './Components/sample/sample.component';

@NgModule({
  declarations: [
    FormStepperComponent,
    VehicleInformComponent,
    ComparisonComponent,
    PersonalInformComponent,
    SampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormStepperRoutingModule,
    MdePopoverModule
  ],

  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [FormStepperComponent],
})
export class FormStepperModule { }
