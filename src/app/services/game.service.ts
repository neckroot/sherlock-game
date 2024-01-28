import { inject, Injectable } from '@angular/core';
import { GameField, getMapValues } from '../game-field/game-field.model';
import { GameFieldService } from '../game-field/services/game-field.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _gameFieldService = inject(GameFieldService);
  public gameStatus$ = new BehaviorSubject(this.isEndGameWon);

  constructor() {
    this._gameFieldService.gameField$.subscribe(() => {
      this.gameStatus$.next(this.isEndGameWon);
    });
  }

  public get isEndGameWon() {
    const gameField = this._gameFieldService.gameField$.value;

    if (this._isSolved(gameField)) {
      return this._isSolutionCorrect(
        gameField,
        this._gameFieldService.gameGoal,
      );
    }

    return;
  }

  private _isSolutionCorrect(solution: GameField, answer: GameField): boolean {
    for (const [key, value] of solution) {
      if (value[0] !== answer.get(key)![0]) return false;
    }
    return true;
  }

  private _isSolved(gameField: GameField) {
    return getMapValues(gameField).length === 36;
  }
}
