import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Problem1Component } from './problem1.component';
import { Problem1RoutingModule } from './problem1-routing.module';




@NgModule({
  declarations: [
    Problem1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,  

    Problem1RoutingModule
  ]
})
export class Problem1Module { }
