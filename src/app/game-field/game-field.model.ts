import { TileField } from '../tile-field/tile-field.model';

export type GameField = Map<number, TileField>;

export function getMapValues<T, K>(map: Map<T, K[]>): K[] {
  return [...map.values()].flat();
}
