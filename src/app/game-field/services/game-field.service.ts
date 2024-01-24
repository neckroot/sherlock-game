import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameField } from '../game-field.model';
import { TileField } from '../../tile-field/tile-field.model';

@Injectable({
  providedIn: 'root',
})
export class GameFieldService {
  private _gameField = new BehaviorSubject<GameField>(this._createField());

  public get gameField() {
    return this._gameField;
  }

  public setTileAsAnswer(tileID: number, tileFieldID: number) {
    const rowStartID = Math.floor(tileFieldID / 6) * 6;

    for (
      let tileFieldID = rowStartID;
      tileFieldID < rowStartID + 6;
      tileFieldID++
    ) {
      this.removeTile(tileID, tileFieldID);
    }

    this._gameField.next(this.gameField.value.set(tileFieldID, [tileID]));
  }

  public removeTile(tileID: number, tileFieldID: number) {
    const tileField = this.gameField.value.get(tileFieldID)!;

    if (tileField.length === 1) return;

    this._gameField.next(
      this.gameField.value.set(
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
