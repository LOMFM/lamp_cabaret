import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'angular-admin-lte';

import { SharedModule } from 'src/app/shared/shared.module';

import { CastRoutingModule } from './cast-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DropdownModule,
    CastRoutingModule
  ],
  declarations: [
      ListComponent,
      EditComponent,
      ViewComponent      
  ],
  bootstrap: [

  ],
  exports: [
    
  ]
})
export class CastModule { }
