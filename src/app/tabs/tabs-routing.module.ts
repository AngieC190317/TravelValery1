import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      /*{
        path: '',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },*/
      {
        path: 'notifications',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'favoritos', // Actualizamos aquí
        loadChildren: () => import('../pages/favoritos/favoritos.module').then(m => m.FavoritosPageModule),
      },
      {
        path: 'nacionales',
        loadChildren: () => import('../viajes/nacionales/nacionales.module').then( m => m.NacionalesPageModule)
      },
      {
        path: 'internacionales',
        loadChildren: () => import('../viajes/internacionales/internacionales.module').then( m => m.InternacionalesPageModule)
      },
      {
        path: 'pasadia',
        loadChildren: () => import('../viajes/pasadia/pasadia.module').then( m => m.PasadiaPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
