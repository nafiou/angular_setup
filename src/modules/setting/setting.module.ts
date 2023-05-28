import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRountingModule } from './setting.rounting.module';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRountingModule
  ]
})
export class SettingModule { }
