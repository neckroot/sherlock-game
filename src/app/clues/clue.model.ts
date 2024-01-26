import { Tile } from '../tile/tile.model';

export const enum ClueType {
  threeAdjacentTilesByRow = 'threeAdjacentTilesByRow',
  twoAdjacentTilesByRow = 'twoAdjacentTilesByRow',
  twoNotAdjacentTilesByRow = 'twoNotAdjacentTilesByRow',
  twoTilesOrderByRow = 'twoTilesOrderByRow',
  twoTilesInColumn = 'twoTilesInColumn',
  twoTilesNotInColumn = 'twoTilesNotInColumn',
}

export const CluesValue: ClueType[] = [
  ClueType.threeAdjacentTilesByRow,
  ClueType.twoAdjacentTilesByRow,
  ClueType.twoNotAdjacentTilesByRow,
  ClueType.twoTilesOrderByRow,
  ClueType.twoTilesInColumn,
  ClueType.twoTilesNotInColumn,
];

export interface Clue {
  type: ClueType;
  status: boolean;
  tiles: Tile[];
}
