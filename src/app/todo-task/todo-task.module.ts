import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoTaskRoutingModule } from './todo-task-routing.module';
import { TodoTaskComponent } from './todo-task.component';

@NgModule({
  imports: [
    CommonModule,
    TodoTaskRoutingModule
  ],
  declarations: [TodoTaskComponent]
})
export class TodoTaskModule { }
