import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEstacoesPageRoutingModule } from './view-estacoes-routing.module';

import { ViewEstacoesPage } from './view-estacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEstacoesPageRoutingModule
  ],
  declarations: [ViewEstacoesPage]
})
export class ViewEstacoesPageModule {}
