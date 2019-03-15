import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReportsRoutingModule } from './reports-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
