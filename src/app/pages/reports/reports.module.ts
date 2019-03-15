import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReportsRoutingModule } from './reports-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    SharedModule,
    ReportsRoutingModule,
    ChartModule
  ]
})
export class ReportsModule { }
