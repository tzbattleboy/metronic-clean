import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ConnectionsComponent } from './connections/connections.component';
import {
  CardsModule,
  DropdownMenusModule,
} from '../../_metronic/partials';

@NgModule({
  declarations: [
    ProfileComponent,
    ConnectionsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    CardsModule,
  ],
})
export class ProfileModule {}
