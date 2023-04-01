import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    SidebarComponent,
    MovieItemComponent
  ],
    exports: [
        SidebarComponent,
        MovieItemComponent
    ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class ComponentsModule { }
