import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'posts',loadChildren:()=>import('./Posts/posts.module').then(m => m.default)},
  {path:'todo',loadChildren:()=>import('./To-Do/todo.module').then(m=>m.default)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
