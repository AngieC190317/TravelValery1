import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'package-details/:id', loadChildren: () => import('./pages/package-details/package-details.module').then(m => m.PackageDetailsPageModule) },
  { path: 'reserve/:id', loadChildren: () => import('./pages/reserve/reserve.module').then(m => m.ReservePageModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },/*
  {
    path: 'nacionales',
    loadChildren: () => import('./viajes/nacionales/nacionales.module').then( m => m.NacionalesPageModule)
  },
  {
    path: 'internacionales',
    loadChildren: () => import('./viajes/internacionales/internacionales.module').then( m => m.InternacionalesPageModule)
  },
  {
    path: 'pasadia',
    loadChildren: () => import('./viajes/pasadia/pasadia.module').then( m => m.PasadiaPageModule)
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
