import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthLoadGuard } from '@auth/auth-load.guard'
import { AuthRouteGuard } from '@auth/auth-route.guard'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule),
    canLoad: [AuthLoadGuard],
    canActivate: [AuthRouteGuard]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
