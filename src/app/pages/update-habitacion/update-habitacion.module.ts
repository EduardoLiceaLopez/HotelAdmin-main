import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateHabitacionPageRoutingModule } from './update-habitacion-routing.module';

import { UpdateHabitacionPage } from './update-habitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateHabitacionPageRoutingModule
  ],
  declarations: [UpdateHabitacionPage]
})
export class UpdateHabitacionPageModule {}
