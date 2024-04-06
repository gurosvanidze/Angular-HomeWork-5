import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainOasisComponent } from './main-oasis/main-oasis.component';
import { RegistrationComponent } from './main-oasis/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-oasis/registration',
    pathMatch: 'full',
  },
  {
    path: 'main-oasis/registration',
    component: MainOasisComponent,
    children: [
      {
        path: 'individual-STEP-01.03',
        component: RegistrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
