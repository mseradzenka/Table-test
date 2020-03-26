import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { OnChanges } from '@angular/core';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChangeCell } from '../../store/actions/table.actions';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public cellValue: string;
  @Input() private cellIndexes: number[];

  public regexPattern = /\-?\d*\.?\d{1,2}/;
  public group: FormGroup;
  public destroy$: Subject<any> = new Subject;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) { }

  public ngOnChanges(): void { }

  public ngOnInit(): void {
    this.group = this.fb.group({
      cellControl: [this.cellValue || 0, Validators.pattern(this.regexPattern)]
    });
    this.group.valueChanges
      .pipe(
        map(({ cellControl }) => cellControl),
        takeUntil(this.destroy$)
      )
      .subscribe((cellControl) => {
        console.log(cellControl || 0);
        const payload = {
          value: cellControl,
          indexes: this.cellIndexes
        };
        this.store.dispatch(new ChangeCell(payload));
      })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}