import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermekGuard } from './pages/termekPage/termek.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'termek', loadChildren: () => import('./pages/termekPage/termek.module').then(m => m.TermekModule), canActivate: [TermekGuard]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
