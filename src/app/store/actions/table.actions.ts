import { Action } from '@ngrx/store';

export enum TableActionTypes {
  AddRow = '[Table] Add Row',
  AddColumn = '[Table] Add Column',
  ChangeCell = '[Table] Change Cell',
  DeleteRow = '[Table] Delete Row',
  DeleteColumn = '[Table] Delete Column'
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

export class DeleteRow implements Action {
  public readonly type = TableActionTypes.DeleteRow;
  constructor(public payload: any) { }
}

export class DeleteColumn implements Action {
  public readonly type = TableActionTypes.DeleteColumn;
  constructor(public payload: any) { }
}
