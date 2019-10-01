import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '@components/footer/footer.component';
import { LoadingComponent } from '@components/loading/loading.component';

@NgModule({
  declarations: [
    FooterComponent,
    LoadingComponent
  ],
  exports: [
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
