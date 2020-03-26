import { createReducer, on } from '@ngrx/store';
import { TableActionTypes } from '../actions/table.actions';

interface IState {
  tableData: number[][];
  countedResult: number[];
}

interface TableAction {
  payload?: any;
  type: TableActionTypes;
}
 
export const initialState: IState = {
  tableData: [
    [1, 2],
    [3, 4]
  ],
  countedResult: null
};

export function tableReducer(state = initialState, action: TableAction): IState {
  const { payload, type } = action;
  const { tableData } = state;
  const tableDataCopy = JSON.parse(JSON.stringify(tableData));

  switch (type) {
    case TableActionTypes.AddRow: {
      const newRow = tableData[0].map(() => 0);

      return {
        ...state,
        tableData: [...tableData, newRow],
        countedResult: null
      };
    }

    case TableActionTypes.AddColumn: {
      return {
        ...state,
        tableData: [...tableData.map(row => [...row, 0])],
        countedResult: null
      };
    }

    case TableActionTypes.DeleteRow: {
      tableDataCopy.splice(payload, 1);

      return {
        ...state,
        tableData: [...tableDataCopy],
        countedResult: null
      };
    }

    case TableActionTypes.DeleteColumn: {
      const data = tableDataCopy.map(row => {
        row.splice(payload, 1);
        return row;
      });

      return {
        ...state,
        tableData: [...data],
        countedResult: null
      };
    }

    case TableActionTypes.ChangeCell: {
      const { value, indexes: { rowIndex, cellIndex } } = payload;
      tableDataCopy[rowIndex][cellIndex] = value;

      return {
        ...state,
        tableData: [...tableDataCopy],
        countedResult: null
      };
    }

    case TableActionTypes.CountSum: {
      const countedResult = tableDataCopy[0].reduce((sumArray: number[], cell: number, index: number) => {
        const sum = tableDataCopy.reduce((acc, curr) => {
          acc += curr[index];
          return acc;
        }, 0);
        sumArray.push(sum);
        return sumArray;
      }, []);

      return {
        ...state,
        countedResult
      };
    }

    case TableActionTypes.CountMultiplication: {
      const countedResult = tableDataCopy[0].reduce((sumArray: number[], cell: number, index: number) => {
        const sum = tableDataCopy.reduce((acc, curr) => {
          acc *= curr[index];
          return acc;
        }, 1);
        sumArray.push(sum);
        return sumArray;
      }, []);

      return {
        ...state,
        countedResult
      };
    }

    default:
      return { ...state };
  }
}