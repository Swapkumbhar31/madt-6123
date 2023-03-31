import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    FlexLayoutModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
