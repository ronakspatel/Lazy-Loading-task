import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTaskComponent } from './todo-task.component';

const routes: Routes = [
  {
    path:'',component:TodoTaskComponent,
children:[
  {
    path: 'addTask',
    loadChildren: './add-task/add-task.module#AddTaskModule'
  },
  {
    path: 'incompleteTask',
    loadChildren: './incomplete-task/incomplete-task.module#IncompleteTaskModule'
  },
  {
    path: 'completeTask',
    loadChildren: './complete-task/complete-task.module#CompleteTaskModule'
  }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoTaskRoutingModule { }
