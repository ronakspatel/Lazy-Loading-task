import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteTaskComponent } from './complete-task.component';

import { CompleteTaskRoutingModule } from './complete-task-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,CompleteTaskRoutingModule,SharedModule
    
  ],
  exports:[],
  declarations: [CompleteTaskComponent]
})
export class CompleteTaskModule { }
