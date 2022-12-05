import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAcessosPageRoutingModule } from './view-acessos-routing.module';

import { ViewAcessosPage } from './view-acessos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAcessosPageRoutingModule
  ],
  declarations: [ViewAcessosPage]
})
export class ViewAcessosPageModule {}
