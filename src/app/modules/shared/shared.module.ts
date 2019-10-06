import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '@components/footer/footer.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { ReactsComponent } from '@components/feed/reacts/reacts.component';

@NgModule({
  declarations: [
    FooterComponent,
    LoadingComponent,
    ReactsComponent
  ],
  exports: [
    FooterComponent,
    LoadingComponent,
    ReactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
