import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameField } from '../game-field.model';
import { TileField } from '../../tile-field/tile-field.model';
import { range, shuffle } from '../../utils/utils';
import { COLUMN_SIZE, FIELD_SIZE, ROW_SIZE } from '../../utils/game-constants';

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

    for (let i = 0; i < COLUMN_SIZE; i++) {
      const fieldRow = shuffle(range(COLUMN_SIZE * i, COLUMN_SIZE * (i + 1)));

      for (let j = COLUMN_SIZE * i; j < COLUMN_SIZE * (i + 1); j++) {
        field.set(j, [fieldRow[j % COLUMN_SIZE]]);
      }
    }

    return field;
  }

  public setTileAsAnswer(tileID: number, tileFieldID: number) {
    if (this.gameField$.value.get(tileFieldID)!.length === 1) return;

    const firstTileInRow = Math.floor(tileFieldID / COLUMN_SIZE) * COLUMN_SIZE;

    for (
      let tileFieldID = firstTileInRow;
      tileFieldID < firstTileInRow + COLUMN_SIZE;
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
        tileField.filter((id) => id !== tileID),
      ),
    );
  }

  private _createField() {
    const field: GameField = new Map<number, TileField>();

    for (let i = 0; i < FIELD_SIZE; i++) {
      let tileField: TileField = [];

      for (let j = 0; j < COLUMN_SIZE; j++) {
        tileField.push(j + Math.floor(i / COLUMN_SIZE) * COLUMN_SIZE);
      }

      field.set(i, tileField);
    }

    return field;
  }
}
