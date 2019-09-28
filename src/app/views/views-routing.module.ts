import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthChildGuard } from '@auth/auth-child.guard'

import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    canActivateChild: [AuthChildGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'perfil/:id',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'amigos',
        loadChildren: () => import('./amigos/amigos.module').then(m => m.AmigosModule),
      },
      {
        path: 'mensagens',
        loadChildren: () => import('./mensagens/mensagens.module').then(m => m.MensagensModule),
      },
      {
        path: '404',
        loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
