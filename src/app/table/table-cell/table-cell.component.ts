import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {
  @Input() public cellValue: string;

  constructor() { }

  public ngOnInit(): void {
  }

}