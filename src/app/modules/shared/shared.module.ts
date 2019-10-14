import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { FooterComponent } from '@components/footer/footer.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { FeedComponent } from '@components/feed/feed.component';
import { PostComponent } from '@components/feed/post/post.component';
import { CommentComponent } from '@components/feed/comment/comment.component';
import { ReactsComponent } from '@components/feed/reacts/reacts.component';
import { AboutComponent } from '@components/about/about.component';
import { PostCommentDirective } from '@directives/postcomment.directive';

@NgModule({
  declarations: [
    FooterComponent,
    LoadingComponent,
    FeedComponent,
    PostComponent,
    CommentComponent,
    ReactsComponent,
    AboutComponent,
    PostCommentDirective
  ],
  exports: [
    FooterComponent,
    LoadingComponent,
    FeedComponent,
    PostComponent,
    CommentComponent,
    ReactsComponent,
    AboutComponent,
    PostCommentDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
