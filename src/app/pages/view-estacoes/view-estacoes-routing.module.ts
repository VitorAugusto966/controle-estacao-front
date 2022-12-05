import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEstacoesPage } from './view-estacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEstacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEstacoesPageRoutingModule {}
