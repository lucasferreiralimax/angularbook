import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensagensComponent } from './mensagens.component'

const routes: Routes = [
  {
    path: '',
    component: MensagensComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensagensRoutingModule { }
