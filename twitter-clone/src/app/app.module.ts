import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FeedComponent } from './feed/feed.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SearchSectionComponent } from './search-section/search-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FeedComponent,
    CreatePostComponent,
    SearchSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
