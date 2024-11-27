import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      /*{
        path: '',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },*/
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'favoritos', // Actualizamos aquí
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule),
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}
