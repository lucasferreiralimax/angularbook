import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { NotfoundComponent } from './view/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    HeaderComponent,
    NavComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
