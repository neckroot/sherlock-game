import { randomN } from '../utils/utils';
import { COLUMN_SIZE, FIELD_SIZE } from '../utils/game-constants';
import { columnNeighbors, getColumnID } from '../tile/tile.model';

export function twoAdjacentTilesByRow() {
  const firstTileID = randomN(FIELD_SIZE);
  const columnIndexWithFirstTile = getColumnID(firstTileID);
  const suitableTiles: number[] = [];

  if (columnIndexWithFirstTile !== 0) {
    suitableTiles.push(...columnNeighbors(columnIndexWithFirstTile - 1));
  }

  if (columnIndexWithFirstTile !== COLUMN_SIZE - 1) {
    suitableTiles.push(...columnNeighbors(columnIndexWithFirstTile + 1));
  }

  const secondTileID = suitableTiles[randomN(suitableTiles.length)];

  return [firstTileID, secondTileID];
}
