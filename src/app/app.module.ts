import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import toDoModule from './To-Do/todo.module';
import postsModule from './Posts/posts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    toDoModule,
    postsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
