import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


const routes:Routes = [
  {path:'todo',component:TodoComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes),HttpClientModule,CommonModule],
  declarations : [
    TodoComponent
  ],
  exports : [RouterModule]
})

export default class toDoModule{}
