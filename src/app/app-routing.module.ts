import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'problem1', loadChildren: () => import('./problem1/problem1.module').then( m => m.Problem1Module ) },
  { path: 'problem2', loadChildren: () => import('./problem2/problem2.module').then( m => m.Problem2Module ) },
  { path: '**', redirectTo:'problem1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
