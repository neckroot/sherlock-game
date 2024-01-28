import { COLUMN_SIZE, FIELD_SIZE, ROW_SIZE } from '../utils/game-constants';
import { range } from '../utils/utils';

export type Tile = number;

export function getColumnID(tile: Tile, columnSize?: number) {
  const colSize = columnSize ?? COLUMN_SIZE;

  return tile % colSize;
}

export function getRowID(tile: Tile, columnSize?: number) {
  const colSize = columnSize ?? COLUMN_SIZE;

  return Math.floor(tile / colSize);
}

export function columnNeighbors(tile: Tile) {
  return range(ROW_SIZE).map((elem) => elem * ROW_SIZE + getColumnID(tile));
}

export function rowNeighbors(tile: Tile) {
  const start = getRowID(tile) * COLUMN_SIZE;

  return range(start, start + COLUMN_SIZE);
}

export function horizontalNeighbors(tile: Tile, field?: number[]) {
  const tiles = field ?? range(FIELD_SIZE);

  return tiles.filter((value) => !columnNeighbors(tile).includes(value));
}
