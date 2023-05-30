import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateHabitacionPage } from './update-habitacion.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateHabitacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateHabitacionPageRoutingModule {}
