import { Action } from '@ngrx/store';

export enum TableActionTypes {
  AddRow = '[Table] Add Row',
  AddColumn = '[Table] Add Column'
}

export class AddRow implements Action {
  public readonly type = TableActionTypes.AddRow;
}

export class AddColumn implements Action {
  public readonly type = TableActionTypes.AddColumn;
}
