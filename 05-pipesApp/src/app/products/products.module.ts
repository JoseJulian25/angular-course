import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {CustomPageComponent } from './pages/custom/custom-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ShowColorPipe } from './pipes/show-color.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UnCommonPageComponent,
    CustomPageComponent,

    //Pipe
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    ShowColorPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
