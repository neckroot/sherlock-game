import { Injectable } from '@angular/core';
import { Clue, CluesValue } from '../clue.model';
import { Tile } from '../../tile/tile.model';
import { randomN, range } from '../../utils/utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClueService {
  public clues = new BehaviorSubject(this._clues);
  constructor() {}

  public filteredClues(by: 'row' | 'column') {
    return this.clues.value.filter((clue) => clue.type.endsWith(by.slice(1)));
  }

  private get _clues() {
    const clues: Clue[] = [];
    //for testing generate 10 clues.
    for (const _ of range(10)) {
      clues.push(this._generateClue());
    }

    return clues;
  }

  private _generateClue(): Clue {
    const type = CluesValue[randomN(CluesValue.length)];

    const tilesCount = type.startsWith('two') ? 2 : 3;
    const tiles: Tile[] = [];
    const field: Tile[] = range(36);

    for (const _ of range(tilesCount)) {
      tiles.push(...field.splice(randomN(field.length), 1));
    }

    return {
      type: type,
      status: false,
      tiles: tiles,
    };
  }
}
