import { Component, OnInit } from '@angular/core';

const tableData: any[] = [
  {
    '1': '123',
    '2': '312'
  },
  {
    '1': '456',
    '2': '5678'
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public data = tableData;

  constructor() { }

  public ngOnInit(): void {
    console.log(this.data[0])
  }

  public getColumns(): any[] {
    return Object.keys(this.data[0]);
  }

  public getCells(item): any {
    return Object.values(item);
  }
}