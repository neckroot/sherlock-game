import { horizontalNeighbors, randomN } from '../utils/utils';
import { FIELD_SIZE, ROW_SIZE } from '../utils/game-constants';

export function twoTilesNotInColumn() {
  const firstTileID = randomN(FIELD_SIZE);
  const secondTileID =
    horizontalNeighbors(firstTileID)[randomN(FIELD_SIZE - ROW_SIZE)];

  return [firstTileID, secondTileID];
}
