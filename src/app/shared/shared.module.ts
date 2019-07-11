import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { DataTableModule } from "angular-6-datatable";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DataTableModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DataTableModule
  ],
  declarations: []
})
export class SharedModule { }
