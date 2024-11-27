import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasadiaPageRoutingModule } from './pasadia-routing.module';

import { PasadiaPage } from './pasadia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasadiaPageRoutingModule
  ],
  declarations: [PasadiaPage]
})
export class PasadiaPageModule {}
