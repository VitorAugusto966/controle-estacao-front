import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadEstacaoPageRoutingModule } from './cad-estacao-routing.module';

import { CadEstacaoPage } from './cad-estacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadEstacaoPageRoutingModule
  ],
  declarations: [CadEstacaoPage]
})
export class CadEstacaoPageModule {}
