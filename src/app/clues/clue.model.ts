import { Tile } from '../tile/tile.model';
import { threeAdjacentTilesByRow } from './three-adjacent-tiles-by-row';
import { twoAdjacentTilesByRow } from './two-adjacent-tiles-by-row';
import { twoNotAdjacentTilesByRow } from './two-not-adjacent-tiles-by-row';
import { twoTilesOrderByRow } from './two-tiles-order-by-row';
import { twoTilesInColumn } from './two-tiles-in-column';
import { twoTilesNotInColumn } from './two-tiles-not-in-column';

export const CluesFunctionContainer: [string, () => number[]][] = [
  ['threeAdjacentTilesByRow', threeAdjacentTilesByRow],
  ['twoAdjacentTilesByRow', twoAdjacentTilesByRow],
  ['twoNotAdjacentTilesByRow', twoNotAdjacentTilesByRow],
  ['twoTilesOrderByRow', twoTilesOrderByRow],
  ['twoTilesInColumn', twoTilesInColumn],
  ['twoTilesNotInColumn', twoTilesNotInColumn],
];

export interface Clue {
  type: string;
  status: boolean;
  tiles: Tile[];
}
