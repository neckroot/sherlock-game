import { columnNeighbors, randomN } from '../utils/utils';
import { COLUMN_SIZE, FIELD_SIZE } from '../utils/game-constants';

export function twoAdjacentTilesByRow() {
  const firstTileID = randomN(FIELD_SIZE);
  const columnIndexWithFirstTile = Math.floor(firstTileID / COLUMN_SIZE);
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
