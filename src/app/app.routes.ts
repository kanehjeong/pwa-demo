import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
  {
    path: '**',
    component: HomeComponent,
  }
];

export const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(router, {preloadingStrategy: PreloadAllModules});
