import { randomN, range } from '../utils/utils';
import { COLUMN_SIZE, FIELD_SIZE, ROW_SIZE } from '../utils/game-constants';
import { horizontalNeighbors, rowNeighbors } from '../tile/tile.model';

export function twoTilesNotInColumn() {
  const firstTileID = randomN(FIELD_SIZE);
  const fieldWithoutRowWithFirstTile = range(FIELD_SIZE).filter(
    (value) => !rowNeighbors(firstTileID).includes(value),
  );
  const secondTileID = horizontalNeighbors(
    firstTileID,
    fieldWithoutRowWithFirstTile,
  )[randomN(FIELD_SIZE - ROW_SIZE - COLUMN_SIZE + 1)];

  return [firstTileID, secondTileID];
}
