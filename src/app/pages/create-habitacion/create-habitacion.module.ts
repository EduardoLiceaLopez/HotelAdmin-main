import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateHabitacionPageRoutingModule } from './create-habitacion-routing.module';

import { CreateHabitacionPage } from './create-habitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateHabitacionPageRoutingModule
  ],
  declarations: [CreateHabitacionPage]
})
export class CreateHabitacionPageModule {}
