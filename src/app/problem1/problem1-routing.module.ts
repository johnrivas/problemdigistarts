import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Problem1Component } from './problem1.component';

const routes: Routes = [
  {path: '', component: Problem1Component},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class Problem1RoutingModule { }
