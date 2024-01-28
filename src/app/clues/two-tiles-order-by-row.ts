import { randomN } from '../utils/utils';
import { COLUMN_SIZE, FIELD_SIZE, ROW_SIZE } from '../utils/game-constants';
import { getColumnID, horizontalNeighbors } from '../tile/tile.model';

export function twoTilesOrderByRow() {
  const firstTileID = randomN(FIELD_SIZE);
  const columnIndexWithFirstTile = getColumnID(firstTileID);
  const secondTileID =
    horizontalNeighbors(firstTileID)[randomN(FIELD_SIZE - ROW_SIZE)];
  const columnIndexWithSecondTile = getColumnID(secondTileID);

  if (columnIndexWithFirstTile > columnIndexWithSecondTile) {
    return [secondTileID, firstTileID];
  }

  return [firstTileID, secondTileID];
}
