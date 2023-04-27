import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes = [
  {path:'posts',component:PostsComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes),CommonModule,HttpClientModule],
  declarations : [
    PostsComponent
  ],
  exports : [RouterModule]
})

export default class postsModule{}
