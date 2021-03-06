import { SampleComponent } from './Modules/form-stepper/Components/sample/sample.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Core/Layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './Core/Layout/login-layout/login-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'Motor',
        pathMatch: 'full',
      },
      {
        path: 'Motor',
        loadChildren: () =>
          import('./Modules/form-stepper/form-stepper.module').then(
            (n) => n.FormStepperModule
          ),
      },
      {
        path: 'sample',
        component:SampleComponent
      },
    ],
  },

  {
    path: 'Login',
    component: LoginLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
