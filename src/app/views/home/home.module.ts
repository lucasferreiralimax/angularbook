import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { NavleftComponent } from '@components/navleft/navleft.component';
import { AsideComponent } from '@components/aside/aside.component';
import { HomeRoutingModule } from './home-routing.module'
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NavleftComponent,
    AsideComponent
  ]
})
export class HomeModule { }
