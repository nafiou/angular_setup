import { FormComponent } from './components/form/form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
 {
  path: '', component: FormComponent
 }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
