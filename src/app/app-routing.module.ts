import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainOasisComponent } from './main-oasis/main-oasis.component';
import { RegistrationIndividualComponent } from './registration-individual/registration-individual.component';

const routes: Routes = [
  {
    path: 'main-oasis',
    component: MainOasisComponent,
  },
  {
    path: 'registration-individual',
    component: RegistrationIndividualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
