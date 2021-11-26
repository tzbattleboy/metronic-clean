import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { Card3Component } from './card3/card3.component';

@NgModule({
  declarations: [
    Card3Component,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbTooltipModule,
  ],
  exports: [
    Card3Component,
  ],
})
export class CardsModule {}
