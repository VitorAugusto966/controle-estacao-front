import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadEstacaoPage } from './cad-estacao.page';

const routes: Routes = [
  {
    path: '',
    component: CadEstacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadEstacaoPageRoutingModule {}
