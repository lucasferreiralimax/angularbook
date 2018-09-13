import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view/home/home.component'
import { AmigosComponent } from './view/amigos/amigos.component'
import { MensagensComponent } from './view/mensagens/mensagens.component'
import { NotfoundComponent } from './view/notfound/notfound.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'amigos',
    component: AmigosComponent
  },
  {
    path: 'mensagens',
    component: MensagensComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
