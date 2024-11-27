import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasadiaPage } from './pasadia.page';

const routes: Routes = [
  {
    path: '',
    component: PasadiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasadiaPageRoutingModule {}
