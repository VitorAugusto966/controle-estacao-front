import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadUserPage } from './cad-user.page';

const routes: Routes = [
  {
    path: '',
    component: CadUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadUserPageRoutingModule {}
