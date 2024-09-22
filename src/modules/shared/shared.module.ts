import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { SmallInputComponent } from './components/small-input/small-input.component';
@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ShowErrorComponent,
    DatePickerComponent,
    SmallInputComponent
  ],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatNativeDateModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ShowErrorComponent,
    DatePickerComponent,
    SmallInputComponent
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'en-GB'
    }
  ]
})
export class SharedModule { }
