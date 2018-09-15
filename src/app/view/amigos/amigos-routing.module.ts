import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigosComponent } from './amigos.component'

const routes: Routes = [
  {
    path: '',
    component: AmigosComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmigosRoutingModule { }
