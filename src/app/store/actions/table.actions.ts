import { Action } from '@ngrx/store';

export enum TableActionTypes {
  AddRow = '[Table] Add Row',
  AddColumn = '[Table] Add Column',
  ChangeCell = '[Table] Change Cell'
}

export class AddRow implements Action {
  public readonly type = TableActionTypes.AddRow;
}

export class AddColumn implements Action {
  public readonly type = TableActionTypes.AddColumn;
}

export class ChangeCell implements Action {
  public readonly type = TableActionTypes.ChangeCell;
  constructor(public payload: any) { }
}
