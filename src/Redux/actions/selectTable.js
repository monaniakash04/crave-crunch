export const SELECT_TABLE_ONE = "SELECT_TABLE_ONE";
export const SELECT_TABLE_TWO = "SELECT_TABLE_TWO";
export const SELECT_TABLE_THREE = "SELECT_TABLE_THREE";
export const DESELECT_TABLE_ONE = "DESELECT_TABLE_ONE";
export const DESELECT_TABLE_TWO = "DESELECT_TABLE_TWO";
export const DESELECT_TABLE_THREE = "DESELECT_TABLE_THREE";

export function selectFirstTable() {
  return { type: SELECT_TABLE_ONE };
}
export function selectSecondTable() {
  return { type: SELECT_TABLE_TWO };
}
export function selectThirdTable() {
  return { type: SELECT_TABLE_THREE };
}
export function deselectFirstTable() {
  return { type: DESELECT_TABLE_ONE };
}
export function deselectSecondTable() {
  return { type: DESELECT_TABLE_TWO };
}
export function deselectThirdTable() {
  return { type: DESELECT_TABLE_THREE };
}
