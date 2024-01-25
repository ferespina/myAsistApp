import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag404PageRoutingModule } from './pag404-routing.module';

import { Pag404Page } from './pag404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag404PageRoutingModule
  ],
  declarations: [Pag404Page]
})
export class Pag404PageModule {}
