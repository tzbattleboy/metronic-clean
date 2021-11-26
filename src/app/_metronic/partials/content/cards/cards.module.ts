import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { Card3Component } from './card3/card3.component';
import { UserListComponent } from './user-list/user-list.component';
import { DropdownMenusModule } from '../dropdown-menus/dropdown-menus.module';

@NgModule({
  declarations: [
    Card3Component,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbTooltipModule,
    DropdownMenusModule,
  ],
  exports: [
    Card3Component,
    UserListComponent,
  ],
})
export class CardsModule {}
