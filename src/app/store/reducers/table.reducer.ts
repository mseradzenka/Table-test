import { createReducer, on } from '@ngrx/store';
import { TableActionTypes } from '../actions/table.actions';

interface IState {
  tableData: number[][];
}

interface TableAction {
  payload?: any;
  type: TableActionTypes;
}
 
export const initialState: IState = {
  tableData: [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
};

export function tableReducer(state = initialState, action: TableAction): IState {
  const { payload, type } = action;

  switch (type) {
    case TableActionTypes.AddRow:
      return {
        ...state,
        tableData: payload
      };

    case TableActionTypes.AddColumn:
      return {
        ...state,
        tableData: payload
      }

    default:
      return { ...state };
  }
}