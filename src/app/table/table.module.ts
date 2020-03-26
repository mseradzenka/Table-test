import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableCellComponent } from './table-cell/table-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    TableCellComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }