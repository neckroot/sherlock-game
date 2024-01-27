import {
  columnNeighbors,
  horizontalNeighbors,
  randomN,
  range,
} from '../utils/utils';
import { COLUMN_SIZE, FIELD_SIZE } from '../utils/game-constants';

export function twoNotAdjacentTilesByRow() {
  const firstTileID = randomN(FIELD_SIZE);
  const columnIndexWithFirstTile = Math.floor(firstTileID / COLUMN_SIZE);
  let suitableTiles = horizontalNeighbors(firstTileID);

  if (columnIndexWithFirstTile !== 0) {
    suitableTiles = horizontalNeighbors(
      columnIndexWithFirstTile - 1,
      suitableTiles,
    );
  }

  if (columnIndexWithFirstTile !== COLUMN_SIZE - 1) {
    suitableTiles = horizontalNeighbors(
      columnIndexWithFirstTile + 1,
      suitableTiles,
    );
  }

  const secondTileID = suitableTiles[randomN(suitableTiles.length)];

  return [firstTileID, secondTileID];
}
