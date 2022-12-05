import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessosPageRoutingModule } from './acessos-routing.module';

import { AcessosPage } from './acessos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessosPageRoutingModule
  ],
  declarations: [AcessosPage]
})
export class AcessosPageModule {}
