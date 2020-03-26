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
    [1, 2],
    [3, 4]
  ]
};

export function tableReducer(state = initialState, action: TableAction): IState {
  const { payload, type } = action;
  const { tableData } = state;
  const tableDataCopy = JSON.parse(JSON.stringify(tableData));

  switch (type) {
    case TableActionTypes.AddRow: {
      const newRow = tableData[0].map(() => 0);

      return {
        tableData: [...tableData, newRow]
      };
    }

    case TableActionTypes.AddColumn: {
      return {
        tableData: [...tableData.map(row => [...row, 0])]
      };
    }

    case TableActionTypes.DeleteRow: {
      tableDataCopy.splice(payload, 1);

      return {
        tableData: [...tableDataCopy]
      };
    }

    case TableActionTypes.DeleteColumn: {
      const data = tableDataCopy.map(row => {
        row.splice(payload, 1);
        return row;
      });

      return {
        tableData: [...data]
      };
    }

    case TableActionTypes.ChangeCell: {
      const { value, indexes: { rowIndex, cellIndex } } = payload;
      tableDataCopy[rowIndex][cellIndex] = value;

      return {
        tableData: [...tableDataCopy]
      }
    }

    default:
      return { ...state };
  }
}