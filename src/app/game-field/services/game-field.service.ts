import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameField } from '../game-field.model';
import { TileField } from '../../tile-field/tile-field.model';
import { range, shuffle } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class GameFieldService {
  private _gameField$ = new BehaviorSubject<GameField>(this._createField());
  public gameGoal = this._createGameGoal();

  public get gameField$() {
    return this._gameField$;
  }

  private _createGameGoal() {
    const field: GameField = new Map<number, TileField>();

    for (let i = 0; i < 6; i++) {
      const fieldRow = shuffle(range(6 * i, 6 * (i + 1)));

      for (let j = 6 * i; j < 6 * (i + 1); j++) {
        field.set(j, [fieldRow[j % 6]]);
      }
    }

    return field;
  }

  public setTileAsAnswer(tileID: number, tileFieldID: number) {
    if (this.gameField$.value.get(tileFieldID)!.length === 1) return;

    const rowStartID = Math.floor(tileFieldID / 6) * 6;

    for (
      let tileFieldID = rowStartID;
      tileFieldID < rowStartID + 6;
      tileFieldID++
    ) {
      this.removeTile(tileID, tileFieldID);
    }

    this._gameField$.next(this.gameField$.value.set(tileFieldID, [tileID]));
  }

  public removeTile(tileID: number, tileFieldID: number) {
    const tileField = this.gameField$.value.get(tileFieldID)!;

    if (tileField.length === 1) return;

    this._gameField$.next(
      this.gameField$.value.set(
        tileFieldID,
        tileField.filter((id) => id !== tileID)
      )
    );
  }

  private _createField() {
    const field: GameField = new Map<number, TileField>();

    for (let i = 0; i < 36; i++) {
      let tileField: TileField = [];

      for (let j = 0; j < 6; j++) {
        tileField.push(j + Math.floor(i / 6) * 6);
      }

      field.set(i, tileField);
    }

    return field;
  }
}
