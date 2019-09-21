import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { FeedComponent } from '@components/feed/feed.component';
import { PostComponent } from '@components/feed/post/post.component';
import { CommentComponent } from '@components/feed/comment/comment.component';
import { PostCommentDirective } from '@directives/postcomment.directive';

import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    FeedComponent,
    PostComponent,
    CommentComponent,
    PostCommentDirective
  ]
})
export class HomeModule { }
