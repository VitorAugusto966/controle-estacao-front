import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CadUserPageRoutingModule } from './cad-user-routing.module';

import { CadUserPage } from './cad-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadUserPageRoutingModule
  ],
  declarations: [CadUserPage]
})
export class CadUserPageModule {}
