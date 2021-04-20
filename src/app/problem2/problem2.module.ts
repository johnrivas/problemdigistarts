import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Problem2Component } from './problem2.component';
import { Problem2RoutingModule } from './problem2-routing.module';



@NgModule({
  declarations: [ 
    Problem2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,

    Problem2RoutingModule
  ]
})
export class Problem2Module { }
