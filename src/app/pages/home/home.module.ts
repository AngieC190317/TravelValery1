import { IonicModule } from '@ionic/angular'; // Asegúrate de que esto esté importado
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
