import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'amigos',
    loadChildren: () => import('./view/amigos/amigos.module').then(m => m.AmigosModule)
  },
  {
    path: 'mensagens',
    loadChildren: () => import('./view/mensagens/mensagens.module').then(m => m.MensagensModule)
  },
  {
    path: '**',
    loadChildren: () => import('./view/notfound/notfound.module').then(m => m.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
