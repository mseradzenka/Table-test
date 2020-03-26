import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getTableData, getCountedResult } from '../store/selectors/table.selectors';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AddRow, AddColumn, DeleteRow, DeleteColumn, CountSum, CountMultiplication } from '../store/actions/table.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  public data: number[][];
  public countedData: number[];
  private destroy$: Subject<any> = new Subject;

  constructor(private store: Store<any>) { }

  public ngOnInit(): void {
    this.initSelectors();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public addRow(): void {
    this.store.dispatch(new AddRow());
  }

  public addColumn(): void {
    this.store.dispatch(new AddColumn());
  }

  public deleteRow(i: number): void {
    if (this.data.length > 2 ) {
      this.store.dispatch(new DeleteRow(i));
    } else {
      this.showDeleteWarning();
    }
  }

  public deleteColumn(i: number): void {
    if (this.data[0].length > 2) {
      this.store.dispatch(new DeleteColumn(i));
    } else {
      this.showDeleteWarning();
    }
  }

  public sumRows(): void {
    this.store.dispatch(new CountSum());
  }

  public multiplyRows(): void {
    this.store.dispatch(new CountMultiplication());
  }

  private initSelectors(): void {
    this.store.select(getTableData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.data = [...data]);

    this.store.select(getCountedResult)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(data => this.countedData =  data ? [...data] : null);
  }

  private showDeleteWarning(): void {
    alert('At least 2 rows and columns should be present on the table');
  }
}
