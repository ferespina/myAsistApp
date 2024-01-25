import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pag404Page } from './pag404.page';

const routes: Routes = [
  {
    path: '',
    component: Pag404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pag404PageRoutingModule {}
