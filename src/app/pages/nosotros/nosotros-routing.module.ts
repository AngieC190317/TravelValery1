import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosPage } from './nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: NosotrosPage,
    children: [
      {
        path: 'home',
     loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'favoritos', 
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule),
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosotrosPageRoutingModule {}


