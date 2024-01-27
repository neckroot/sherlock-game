import { columnNeighbors, randomN } from '../utils/utils';
import { FIELD_SIZE, ROW_SIZE } from '../utils/game-constants';

export function twoTilesInColumn() {
  const firstTileID = randomN(FIELD_SIZE);
  const secondTileID = columnNeighbors(firstTileID).filter(
    (tile) => tile !== firstTileID,
  )[randomN(ROW_SIZE - 1)];

  return [firstTileID, secondTileID];
}
