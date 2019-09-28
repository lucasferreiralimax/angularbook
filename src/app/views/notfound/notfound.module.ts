import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotfoundComponent } from './notfound.component'
import { NotfoundRoutingModule } from './notfound-routing.module'

@NgModule({
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ],
  declarations: [NotfoundComponent]
})
export class NotfoundModule { }
