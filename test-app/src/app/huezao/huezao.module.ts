import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuezaoComponent } from './huezao.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HuezaoService } from "./huezao.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HuezaoComponent, DetalheComponent],
  exports: [
    HuezaoComponent
  ],
  providers: [
    HuezaoService
  ]
})
export class HuezaoModule { }
