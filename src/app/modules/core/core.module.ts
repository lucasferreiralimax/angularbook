import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HeaderComponent } from '@components/header/header.component';
import { NavComponent } from '@components/header/nav/nav.component';
import { SearchComponent } from '@components/header/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
