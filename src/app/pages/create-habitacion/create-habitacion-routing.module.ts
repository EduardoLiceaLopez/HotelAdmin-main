import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateHabitacionPage } from './create-habitacion.page';

const routes: Routes = [
  {
    path: '',
    component: CreateHabitacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateHabitacionPageRoutingModule {}
