import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: './view/home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'amigos',
    loadChildren: './view/amigos/amigos.module#AmigosModule'
  },
  {
    path: 'mensagens',
    loadChildren: './view/mensagens/mensagens.module#MensagensModule'
  },
  {
    path: '**',
    loadChildren: './view/notfound/notfound.module#NotfoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
