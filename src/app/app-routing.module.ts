import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/modules/form/form.module').then((m) => m.FormModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('src/modules/setting/setting.module').then(m => m.SettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
