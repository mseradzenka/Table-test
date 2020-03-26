import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getTableData } from '../store/selectors/table.selectors';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  public data: any[];
  private destroy$: Subject<any> = new Subject;

  constructor(private store: Store<any>) { }

  public ngOnInit(): void {
    this.initSelector();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getColumns(): any[] {
    return Object.keys(this.data[0]);
  }

  public getCells(item): any {
    return Object.values(item);
  }

  private initSelector(): void {
    this.store.select(getTableData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.data = data;
      });
  }
}