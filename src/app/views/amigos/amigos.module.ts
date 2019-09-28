import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AmigosComponent } from './amigos.component'
import { AmigosRoutingModule } from './amigos-routing.module'

@NgModule({
  imports: [
    CommonModule,
    AmigosRoutingModule
  ],
  declarations: [AmigosComponent]
})
export class AmigosModule { }
