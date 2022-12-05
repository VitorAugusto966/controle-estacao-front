import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessosPage } from './acessos.page';

const routes: Routes = [
  {
    path: '',
    component: AcessosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessosPageRoutingModule {}
