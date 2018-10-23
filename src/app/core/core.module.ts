import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  imports: [
    CommonModule,AppRoutingModule
    ],
  exports: [SidebarComponent,TopbarComponent
    ],
  declarations: [SidebarComponent,TopbarComponent
    ]

})
export class CoreModule { }
