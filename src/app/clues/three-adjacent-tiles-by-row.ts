import { columnNeighbors, randomN } from '../utils/utils';
import { COLUMN_SIZE, ROW_SIZE } from '../utils/game-constants';

export function threeAdjacentTilesByRow() {
  const anyColumn = randomN(COLUMN_SIZE);
  const suitableColumns = [anyColumn];

  if (anyColumn === 0) {
    suitableColumns.push(1, 2);
  } else if (anyColumn === COLUMN_SIZE - 1) {
    suitableColumns.push(COLUMN_SIZE - 2, COLUMN_SIZE - 3);
  } else {
    suitableColumns.unshift(anyColumn - 1);
    suitableColumns.push(anyColumn + 1);
  }

  return suitableColumns.map(
    (column) => columnNeighbors(column)[randomN(ROW_SIZE)],
  );
}
