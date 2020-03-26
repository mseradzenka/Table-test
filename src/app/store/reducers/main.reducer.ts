import { createReducer, on } from '@ngrx/store';
import { TableActionTypes } from '../actions/table.actions';

interface IState {
  tableData: any[];
}

interface TableAction {
  payload?: any;
  type: TableActionTypes;
}
 
export const initialState: IState = {
  tableData: [
    {
      '1': '123',
      '2': '312'
    },
    {
      '1': '456',
      '2': '5678'
    }
  ]
};

export function mainReducer(state = initialState, action: TableAction): IState {
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