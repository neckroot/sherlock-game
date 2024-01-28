import { Injectable } from '@angular/core';
import { Clue, CluesFunctionContainer } from '../clue.model';
import { randomN, range } from '../../utils/utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClueService {
  public clues = new BehaviorSubject(this._clues);

  public filteredClues(by: 'row' | 'column') {
    return this.clues.value.filter((clue) => clue.type.endsWith(by.slice(1)));
  }

  private get _clues() {
    const clues: Clue[] = [];
    //for testing generate 20 clues.
    for (const _ of range(20)) {
      clues.push(this._generateClue());
    }

    return clues;
  }

  private _generateClue(): Clue {
    const anyClue =
      CluesFunctionContainer[randomN(CluesFunctionContainer.length)];

    return {
      type: anyClue[0],
      status: false,
      tiles: anyClue[1](),
    };
  }
}
