import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { FeedComponent } from '@components/feed/feed.component';
import { CommentComponent } from '@components/feed/comment/comment.component';
import { CommentDirective } from '@directives/comment.directive';

import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    FeedComponent,
    CommentComponent,
    CommentDirective
  ]
})
export class HomeModule { }
