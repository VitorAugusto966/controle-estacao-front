import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAcessosPage } from './view-acessos.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAcessosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAcessosPageRoutingModule {}
