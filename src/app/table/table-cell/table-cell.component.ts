import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit, OnChanges {
  @Input() public cellValue: string;
  public regexPattern = /\-?\d*\.?\d{1,2}/;
  public group: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) { }

  public ngOnInit(): void {
    this.group = this.fb.group({
      cellControl: [this.cellValue || '', Validators.pattern(this.regexPattern)]
    });
  }

  public ngOnChanges(): void {
  }
}