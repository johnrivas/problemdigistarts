import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Problem2Component } from './problem2.component';

const routes: Routes = [
  { path: '', component: Problem2Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Problem2RoutingModule { }
