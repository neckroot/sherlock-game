import { horizontalNeighbors, randomN } from '../utils/utils';
import { COLUMN_SIZE, FIELD_SIZE, ROW_SIZE } from '../utils/game-constants';

export function twoTilesOrderByRow() {
  const firstTileID = randomN(FIELD_SIZE);
  const columnIndexWithFirstTile = firstTileID % COLUMN_SIZE;
  const secondTileID =
    horizontalNeighbors(firstTileID)[randomN(FIELD_SIZE - ROW_SIZE)];
  const columnIndexWithSecondTile = secondTileID % COLUMN_SIZE;

  if (columnIndexWithFirstTile > columnIndexWithSecondTile) {
    return [secondTileID, firstTileID];
  }

  return [firstTileID, secondTileID];
}
