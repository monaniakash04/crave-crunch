import {
  SELECT_TABLE_ONE,
  SELECT_TABLE_TWO,
  SELECT_TABLE_THREE,
  DESELECT_TABLE_ONE,
  DESELECT_TABLE_TWO,
  DESELECT_TABLE_THREE,
} from "../actions/selectTable";
let intialTable = {
  table1: false,
  table2: false,
  table3: false,
};
export const tableReducer = (state = intialTable, { type }) => {
  switch (type) {
    case SELECT_TABLE_ONE:
      return { ...state, table1: true };
    case SELECT_TABLE_TWO:
      return { ...state, table2: true };
    case SELECT_TABLE_THREE:
      return { ...state, table3: true };
    case DESELECT_TABLE_ONE:
      return { ...state, table1: false };
    case DESELECT_TABLE_TWO:
      return { ...state, table2: false };
    case DESELECT_TABLE_THREE:
      return { ...state, table3: false };
    default:
      return state;
  }
};
