import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { IncompleteTaskRoutingModule } from './incomplete-task-routing.module';
import { IncompleteTaskComponent } from './incomplete-task.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SharedModule,
    
    
    IncompleteTaskRoutingModule
    
  ],
  exports:[],
  declarations: [IncompleteTaskComponent]
})
export class IncompleteTaskModule { }
