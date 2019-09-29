import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { NavleftComponent } from '@components/navleft/navleft.component';
import { AsideComponent } from '@components/aside/aside.component';
import { FeedComponent } from '@components/feed/feed.component';
import { PostComponent } from '@components/feed/post/post.component';
import { CommentComponent } from '@components/feed/comment/comment.component';
import { PostCommentDirective } from '@directives/postcomment.directive';

import { HomeRoutingModule } from './home-routing.module'
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NavleftComponent,
    AsideComponent,
    FeedComponent,
    PostComponent,
    CommentComponent,
    PostCommentDirective
  ]
})
export class HomeModule { }
