import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MensagensComponent } from './mensagens.component'
import { MensagensRoutingModule } from './mensagens-routing.module'

@NgModule({
  imports: [
    CommonModule,
    MensagensRoutingModule
  ],
  declarations: [MensagensComponent]
})
export class MensagensModule { }
