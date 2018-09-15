import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { PostComponent } from '../../components/post/post.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { FeedComponent } from '../../components/feed/feed.component';

import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    PostComponent,
    AsideComponent,
    FeedComponent
  ]
})
export class HomeModule { }
