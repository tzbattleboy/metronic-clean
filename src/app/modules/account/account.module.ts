import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { DropdownMenusModule } from '../../_metronic/partials';

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
  ],
})
export class AccountModule {
}
