import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./view/profile/profile.module').then(m => m.ProfileModule)
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
    path: 'cadastro',
    loadChildren: () => import('./view/cadastro/cadastro.module').then(m => m.CadastroModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    loadChildren: () => import('./view/notfound/notfound.module').then(m => m.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
