import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from 'src/app/core/components/main/main.component';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
